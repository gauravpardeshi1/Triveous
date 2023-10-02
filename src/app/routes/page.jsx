// components/PrivateRoute.js

import { useRouter } from 'next/navigation';
import { useEffect,useRef  } from 'react';
import { UserAuth } from "../context/AuthContext";
import { toast } from 'react-hot-toast';
const PrivateRoute = ({ children }) => {
  const { user, authData } = UserAuth();
  const alertDisplayed = useRef(false);

  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = user || authData;

    if (!isAuthenticated ) {
      if(!alertDisplayed.current){
        toast('Not Authenticated. Please Log in.', {
          icon: '❌',
        });
        alertDisplayed.current = true; 
        router.replace('/signin');
      }
   
    }
  }, [user, authData, router]);

  return children;
}

export default PrivateRoute;
