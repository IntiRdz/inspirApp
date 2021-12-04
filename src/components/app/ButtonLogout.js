import React from "react";
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import * as Icons from "react-icons/fa";

function ButtonLogout() {
  
  const dispatch = useDispatch();
  const hanleLogout = () => {
      dispatch( startLogout() )
  }

  return (
    <>
      <button 
        type="button" 
        className="btn navbar-buttom-logout"
        onClick={ hanleLogout }
        >
        <Icons.FaPowerOff />
      </button>
    </>
  );
}






export default ButtonLogout;
