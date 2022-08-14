import "./profile.css";
import { useGlobalContext } from "../../context/context";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const { user,isModalOpen, openModal } = useGlobalContext();

  return (
    <div className="profile">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-img-wrap">
              <UserAvatar src={user?.image} />
            </div>
            <div className="ms-3">
              <h3 className="card-title">{user?.name}</h3>
              <p className="mb-0">{user?.email}</p>
            </div>
          </div>
          <div className="card-footer text-center">
            <button
              onClick={openModal}
              type="button"
              className="btn btn-outline-primary"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
     {isModalOpen &&  <UpdateProfile />}
    </div>
  );
};

export default Profile;
