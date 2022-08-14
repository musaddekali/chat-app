import { useState } from "react";
import { BsCamera } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import { useGlobalContext } from "../../context/context";

const UpdateProfile = () => {
  const { user } = useGlobalContext();
  const [userImg, setUserImg] = useState(null);
  const [imgString, setImgString] = useState(null);

  function printFile(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          // convert image file to base64 string
          setImgString(reader.result);
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserImg(file);
    printFile(file);
  };

  return (
    <Modal>
      <div className="update-profile">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column align-items-center gap-2">
            <UserAvatar
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={imgString}
            />
            <label htmlFor="profileImage" className="btn btn-primary">
              <BsCamera />
              <input
                onChange={handleFileChange}
                className="d-none"
                type="file"
                name="profileImage"
                id="profileImage"
              />
            </label>
          </div>
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={user?.name}
            />
          </div>
          <button className="btn btn-outline-primary">Save Changes</button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateProfile;
