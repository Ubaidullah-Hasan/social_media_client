import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import profileImg from '../../assets/images/profile/profile.jpg'
import covereImg from '../../assets/images/profile/cover.jpg'
import Posts from '../../components/posts/Posts';


const Profile = () => {
    return (
        <div className='profile'>
            <div className="images">
                <img src={covereImg} alt="" className='cover' />
                <img src={profileImg} alt="" className='profilePic' />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href=""><FacebookTwoToneIcon fontSize='large' /></a>
                        <a href=""><LinkedInIcon fontSize='large' /></a>
                        <a href=""><TwitterIcon fontSize='large' /></a>
                        <a href=""><InstagramIcon fontSize='large' /></a>
                        <a href=""><PinterestIcon fontSize='large' /></a>
                    </div>
                    <div className="center">
                        <span>Akkash Mia</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>lama.dev</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
};

export default Profile;