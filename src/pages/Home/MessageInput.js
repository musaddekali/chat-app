import { BsImage, BsEmojiSmile } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const MessageInput = () => {
    return (
        <div className="message-input-box">
            <form className='mib-form'>
                <label className='mib-upload-btn mib-item' htmlFor="image">
                    <BsImage />
                </label>
                <input className="d-none" type="file" name="image" id="image" />
                <div className="mib-text-input-wrap">
                    <textarea
                        onChange={(e) => {
                            e.target.style.height = 40 + 'px';
                            e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
                        }}
                        className='mib-text-input'
                        type="text"
                        placeholder='Aa...'
                    />
                    <button type='button' className='mib-item mib-emoji'>
                        <BsEmojiSmile />
                    </button>
                </div>
                <button className="mib-submit-btn mib-item" type="submit">
                    <FiSend />
                </button>
            </form>
        </div>
    )
}

export default MessageInput