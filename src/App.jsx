import { useContext } from 'react';
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Rightbar from './components/rightbar/Rightbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { DarkModeContext } from './context/DarkModeProvider';
import { AuthContext } from './context/AuthContextProvider';

function App() {

  const {currentUser} = useContext(AuthContext); console.log(currentUser);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {

    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet></Outlet>
          </div>
          <Rightbar />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Layout /></PrivateRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
