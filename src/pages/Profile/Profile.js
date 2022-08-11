import './profile.css';
import { useGlobalContext } from '../../context/context';
import { BsCamera } from 'react-icons/bs';

const Profile = () => {
    const { user } = useGlobalContext();
    return (
        <div className="profile">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-img-wrap">
                            <img src={user?.image} alt="" />
                            <label htmlFor='profileImage' className="overlay">
                                <BsCamera />
                                <input className='d-none' type="file" name="profileImage" id="profileImage" />
                            </label>
                        </div>
                        <div className="ms-3">
                            <h3 className='card-title'>Mahid Ahmod</h3>
                            <p className='mb-0'>mahid@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile