import { Link, useLocation } from 'react-router-dom';
import './register.scss';

const Register = () => {
    const location = useLocation();
    const path = location?.state?.from;
    console.log(path); // todo

    return (
        <div className='register'>
            <div className="card">
                <div className="left" style={{ backgroundImage: 'url(https: //www.myposter.de/magazin/wp-content/uploads/2016/06/Teil-Portrait-junge-Frau-shutterstock_262542380_kl.jpg)' }}>
                    <h1>Lama social</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati facere, sapiente dolor recusandae voluptatibus et aliquam natus doloribus option.</p>
                    <span>Do you have an account?</span>
                    <Link to={"/login"} state={{from: path}} replace={true}>
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" name="name" placeholder='Username' />
                        <input type="email" name="email" placeholder='Email' />
                        <input type="password" name="password" placeholder='Password' />
                        <input type="text" name="name" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;