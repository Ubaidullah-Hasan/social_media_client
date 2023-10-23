import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { EmailOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeProvider';
import { AuthContext } from '../../context/AuthContextProvider';

const Navbar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="left">
                <Link to={"/"}>
                    <span>Demolook</span>
                </Link>
                <HomeOutlinedIcon />
                {
                    darkMode ?
                    <WbSunnyOutlinedIcon onClick={toggle} />
                    :
                    <DarkModeOutlinedIcon onClick={toggle} />
                }
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
                    <img src={currentUser?.profilePic} alt="" />
                    <span>{currentUser?.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;