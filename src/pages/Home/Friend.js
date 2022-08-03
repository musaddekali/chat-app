import { Link } from "react-router-dom"

const Friend = ({friend}) => {
    return (
        <Link to="#" className="friend">
            <div className="left">
                <img src={friend?.img} height="50" width="50" alt={friend?.name} />
            </div>
            <div className="right">
                <span className="name">{friend?.name}</span>
                <span className='sub-text'>last sent or recive msg {' . '} 20m</span>
            </div>
        </Link>
    )
}

export default Friend