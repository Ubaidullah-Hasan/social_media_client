import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { EmailOutlined } from '@mui/icons-material';
import userImg from '../../assets/images/user.jpeg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to={"/"}>
                    <span>Demolook</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" name="" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlined />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src={userImg} alt="" />
                    <span>Jone Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;