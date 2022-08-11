import FriendList from "./FriendList";
import "./Sidebar.css";
import { useGlobalContext } from "../../../context/context";

const Sidebar = () => {
  const { user, isSidebarOpen } = useGlobalContext();

  return (
    <aside className={`chat-sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="caht-sidebar-in">
        <FriendList friends={user} />
      </div>
    </aside>
  );
};

export default Sidebar;
