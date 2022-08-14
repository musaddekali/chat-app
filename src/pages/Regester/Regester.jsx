import { useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Regester = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(!name || !email || !password) {
      setError('Please fill all the field');
      setLoading(false);
      return;
    }
    
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { uid } = userCredential.user;
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, {
          uid,
          name,
          email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        });
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
        <h2>Regester a new accoutn</h2>
        <form onSubmit={handleFormSubmit} className="auth-form mb-3">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleOnChange}
            className="form-control mb-3"
            type="text"
            name="name"
            value={formData.name}
            id="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleOnChange}
            className="form-control mb-3"
            type="text"
            name="email"
            value={formData.email}
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
            value={formData.password}
            id="password"
            placeholder="New Password"
            required
          />
          <div className="text-center">
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-success" disabled={loading}>
              {loading ? "Regestering..." : "Regester"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/login">Alrady have an account? LogIn</Link>
        </div>
      </div>
    </section>
  );
};

export default Regester;
