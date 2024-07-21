import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Signup/SignUp";
import useBearStore from "./state/state";
import Header from "./UI/Header/Header";
import Sidebar from "./UI/Sidebar/Sidebar";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


function App() {
  const isUserValid =  useBearStore((state) => state.isUserValid);
  const location = useLocation();
  const navigate = useNavigate();

/*
  useEffect(() => {
    const validateToken = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (!token) {
          //setValidUser(false);
          //setError('No token provided. Please log in.');
          return;
        } else{
          //setValidUser(true);
        }

       /* const response = await fetch('http://localhost:3001/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          //setProfile(data);
          //setIsAuthenticated(true);
          // Remove token from URL for security
          navigate('/profile', { replace: true });
        } else {
         // setIsAuthenticated(false);
         // setError('Authentication failed. Please log in.');
        }
      } catch (err) {
        //setError('An error occurred. Please try again.');
        //setIsAuthenticated(false);
      }
    };

    validateToken();
  }, [location, navigate]);  // return <div>{isUserValid ? <Outlet /> : <Navigate to={"login"} />}</div>;
*/



  return isUserValid ? (
    <div>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default App;
