import { Link, useLocation } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const location = useLocation();
    const path = location?.state?.from;
    console.log(path); // todo

    const handleLogin = () => {
        login();
    }


    return (
        <div className='login'>
            <div className="card">
                <div className="left" style={{ backgroundImage: 'url(https: //www.myposter.de/magazin/wp-content/uploads/2016/06/Teil-Portrait-junge-Frau-shutterstock_262542380_kl.jpg)' }}>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati facere, sapiente dolor recusandae voluptatibus et aliquam natus doloribus option.</p>
                    <span>Don't you have an account?</span>
                    <Link to={"/register"} state={{from: path}} replace={true}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>login</h1>
                    <form>
                        <input type="text" name="name" placeholder='Username' />
                        <input type="password" name="password" placeholder='Password' />
                        <button onClick={handleLogin}>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;