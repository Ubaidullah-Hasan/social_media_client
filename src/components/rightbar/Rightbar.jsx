import './rightbar.scss';
import userImg from '../../assets/images/user.jpeg'


const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span>suggent for you</span>
                    <div className="user">
                        <div className="user-info">
                            <img src={userImg} alt="" />
                            <span>John Deo</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={userImg} alt="" />
                            <span>John Deo</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={userImg} alt="" />
                            <span>John Deo</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;