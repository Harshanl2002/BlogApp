import React,{useContext,useEffect} from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/user.context';

const Logout = () => {
  const navigate=useNavigate();
  const {setCurrentUser}=useContext(UserContext);
  setCurrentUser(null);
  navigate('/login');
}

export default Logout