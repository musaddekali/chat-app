import React from 'react'
import './home.css';
import { useGlobalContext } from '../../context/context'
import FriendList from './FriendList';
import MessageInput from './MessageInput';

const Home = () => {
  const { user, isSidebarOpen } = useGlobalContext();

  return (
    <div className="home">
      <div className="home-in">
        <aside className={`home-sidebar ${isSidebarOpen ? 'show' : ''}`}>
          <FriendList friends={user} />
        </aside>
        <div className="message-wrap">
          <div className="messages">

            <div className="message your-msg">
              <p className='message-text'>Hello how are you</p>
              <time className='message-time'>12 Jul 2022 9.30am</time>
            </div>
            <div className="message">
              <p className='message-text'>I'm fine. What's going on?</p>
              <time className='message-time'>12 Jul 2022 9.31am</time>
            </div>
            <div className="message your-msg">
              <p className='message-text'>Yeah, good.</p>
              <time className='message-time'>12 Jul 2022 9.32am</time>
            </div>
            <div className="message your-msg">
              <p className='message-text'>What about your project?</p>
              <img className='message-img' src={user.img} alt="" />
              <time className='message-time'>12 Jul 2022 9.34am</time>
            </div>
            <div className="message">
              <p className='message-text'>
                It's almost done. I'm working 10 hour in a day. That's preety hard. Anyway, I need your slider Pro version. Give me link.
                It's almost done. I'm working 10 hour in a day. That's preety hard. Anyway, I need your slider Pro version. Give me link.
              </p>
              <time className='message-time'>12 Jul 2022 9.34am</time>
            </div>
            <div className="message your-msg">
              <p className='message-text'>Yeah, good.</p>
              <time className='message-time'>12 Jul 2022 9.32am</time>
            </div>

          </div>
          <MessageInput />
        </div>
      </div>
    </div>
  )
}

export default Home