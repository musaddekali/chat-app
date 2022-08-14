import Img from "../../assets/images/avatar.png";

const UserAvatar = (props) => {
  const {src} = props;
  return <img {...props} src={src ? src : Img} alt='' />;
};

export default UserAvatar;
