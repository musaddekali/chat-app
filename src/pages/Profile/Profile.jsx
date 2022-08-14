import "./profile.css";
import { useGlobalContext } from "../../context/context";
import { BsCamera } from "react-icons/bs";
import UserAvatar from "../../components/UserAvatar/UserAvatar";

const Profile = () => {
  const { user } = useGlobalContext();
  return (
    <div className="profile">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-img-wrap">
              <UserAvatar src={user?.image}/>
              <label htmlFor="profileImage" className="overlay">
                <BsCamera />
                <input
                  className="d-none"
                  type="file"
                  name="profileImage"
                  id="profileImage"
                />
              </label>
            </div>
            <div className="ms-3">
              <h3 className="card-title">{user?.name}</h3>
              <p className="mb-0">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
