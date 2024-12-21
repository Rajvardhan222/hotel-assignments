import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { isLoggedIn } from '../axios/user/user.api'

export const PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isLoggedIn().then((res) => {
      if (res.data.status === 'success') {
        setAuth(true);
      }
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className='w-[100vw] h-[100vh] flex justify-center items-center
    sm:text-md md:text-lg lg:text-xl text-primary font-bold bg-secondary
    '>Loading...
        
      </div>;
  }

  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  );
}