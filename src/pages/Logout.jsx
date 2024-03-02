import {useContext} from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/user.context';
import { Avatarcontext } from '../context/Avathar.context';
import Spinner from '../Components/spinner';

const Logout = () => {
  const navigate=useNavigate();
  const {setCurrentUser}=useContext(UserContext);
  const {SetcurrentAvathar}=useContext(Avatarcontext);
  setCurrentUser(null);
  SetcurrentAvathar(null);
  navigate('/login');
  return <div className='min-h-[100vh] justify-center items-center flex'><Spinner/></div>
}

export default Logout