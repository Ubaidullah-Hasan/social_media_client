import './leftbar.scss';
import friend from '../../assets/icon/1.png'
import group from '../../assets/icon/2.png'
import marketplace from '../../assets/icon/3.png'
import watch from '../../assets/icon/4.png'
import memories from '../../assets/icon/5.png'
import events from '../../assets/icon/6.png'
import games from '../../assets/icon/7.png'
import gallery from '../../assets/icon/8.png'
import videos from '../../assets/icon/9.png'
import Message from '../../assets/icon/10.png'
import tutorial from '../../assets/icon/11.png'
import courses from '../../assets/icon/12.png'
import fundraiser from '../../assets/icon/13.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const Leftbar = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='leftbar'>
            <div className='container'>
                <div className="menu">
                    <div className="user">
                        <img src={currentUser?.profilePic} alt={currentUser?.name} />
                        <span>{currentUser?.name}</span>
                    </div>
                    <div className="item">
                        <img src={friend} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={group} alt="" />
                        <span>groups</span>
                    </div>
                    <div className="item">
                        <img src={marketplace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={watch} alt="" />
                        <span>watch</span>
                    </div>
                    <div className="item">
                        <img src={memories} alt="" />
                        <span>memories</span>
                    </div>
                </div>

                <hr />

                <div className='menu'>
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={events} alt="" />
                        <span>events</span>
                    </div>
                    <div className="item">
                        <img src={games} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={videos} alt="" />
                        <span>videos</span>
                    </div>
                    <div className="item">
                        <img src={Message} alt="" />
                        <span>Message</span>
                    </div>
                </div>

                <hr />
                <div className='menu'>
                    <span>others</span>
                    <div className="item">
                        <img src={fundraiser} alt="" />
                        <span>fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={tutorial} alt="" />
                        <span>tutorial</span>
                    </div>
                    <div className="item">
                        <img src={courses} alt="" />
                        <span>courses</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Leftbar;