import { Link } from "react-router-dom";
import "./navbar.css";
import { useGlobalContext } from "../../context/context";
import { GoThreeBars } from "react-icons/go";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import UserAvatar from "../UserAvatar/UserAvatar";
import { doc, updateDoc } from "firebase/firestore";

const Navbar = () => {
  const { user, handleSidebar } = useGlobalContext();

  const handleSignOut = async () => {
    if (window.confirm("Do you wnat to sign out?")) {
      try {
        const userRef = doc(db, "users", user.uid);
        await signOut(auth);
        await updateDoc(userRef, { isOnline: false });
      } catch (error) {
        console.log("Singout porblem", error);
      }
    }
  };

  return (
    <nav className="navmenu d-flex">
      <div className="container-fluid">
        <Link to="/" className="navmenu-logo">
          <span>Chat</span>
        </Link>
        <div className="navmenu-nav">
          <div className="navmenu-user-state">
            <div className="navmenu-user-state-in d-flex align-items-center">
              {user ? (
                <>
                  <Link to="/profile" className="navmenu-user-link">
                    <UserAvatar src={user?.image} />
                    <span>{user?.name}</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    type="button"
                    className="navmenu-btn"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="navmenu-btn">
                  Login/Register
                </Link>
              )}
            </div>
          </div>
          {/* menu toggler  */}
          {user && (
            <button
              onClick={handleSidebar}
              type="button"
              className="navmenu-toggler"
            >
              <GoThreeBars />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
