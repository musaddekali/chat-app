import { useGlobalContext } from "../../../context/context";
import SingleMessage from "./SingleMessage";
import './Messages.css'

const Messages = () => {
  const { messages } = useGlobalContext();

  return (
    <div className="messages">
      {messages.map((item) => (
        <SingleMessage key={item.id} message={item} />
      ))}
    </div>
  );
};

export default Messages;