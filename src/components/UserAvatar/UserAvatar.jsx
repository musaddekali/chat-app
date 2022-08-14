import Img from "../../assets/images/avatar.png";

const UserAvatar = ({src}) => {
  return <img src={src ? src : Img} alt='' />;
};

export default UserAvatar;
