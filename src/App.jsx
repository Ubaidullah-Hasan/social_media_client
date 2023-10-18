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

function App() {

  const Layout = () => {

    return (
      <div>
        <Navbar />
        <div style={{display: 'flex'}}>
          <Leftbar />
          <Outlet></Outlet>
          <Rightbar />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home /></PrivateRoute>,
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
