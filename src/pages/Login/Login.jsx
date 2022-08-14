import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase-config";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email, password } = formData;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setError("Please fill all the field");
      setLoading(false);
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { isOnline: true });
      navigate("/");
      setLoading(false);
      setFormData(initialState);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <section className="auth pt-4">
      <div className="container">
        <h2>LogIn</h2>
        <form onSubmit={handleFormSubmit} className="auth-form mb-3">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleOnChange}
            className="form-control mb-3"
            type="text"
            name="email"
            value={email}
            id="email"
            placeholder="Your Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleOnChange}
            className="form-control mb-3"
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Password"
            required
          />
          <div className="text-center">
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-success" disabled={loading}>
              {loading ? "Logging..." : "LogIn"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/regester">Regester a new account.</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
