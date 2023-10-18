import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left" style={{ backgroundImage: 'url(https: //www.myposter.de/magazin/wp-content/uploads/2016/06/Teil-Portrait-junge-Frau-shutterstock_262542380_kl.jpg)' }}>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati facere, sapiente dolor recusandae voluptatibus et aliquam natus doloribus option.</p>
                    <span>Don't you have an account?</span>
                    <Link to={"/register"}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>login</h1>
                    <form>
                        <input type="text" name="name" placeholder='Username' />
                        <input type="password" name="password" placeholder='Password' />
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;