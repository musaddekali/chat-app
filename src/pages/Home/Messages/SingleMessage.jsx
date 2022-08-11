import { useGlobalContext } from "../../../context/context";

const SingleMessage = ({ message }) => {
  const { user } = useGlobalContext();
  const { uid, name, text, image, createdAt } = message;

  return (
    <div className={`message ${uid === user.uid ? "me" : ""}`}>
      <p className="message-text">{text}</p>
      {image && <img src={image} alt="" className="message-img"/>}
      <span className="message-auth-name">
        {name === user.name ? "Me" : name}
      </span>
      <time className="message-time">{createdAt.toLocaleDateString()}</time>
    </div>
  );
};

export default SingleMessage;
