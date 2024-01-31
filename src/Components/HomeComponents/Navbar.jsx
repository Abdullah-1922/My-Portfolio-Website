

import { FiSun } from 'react-icons/fi';
import { MdModeNight } from 'react-icons/md';
import {  NavLink, useNavigate } from 'react-router-dom';
import useMode from '../../Hooks/useMode';
import './Navbar.css';




const Navbar = () => {

  

  const NavLi = (
    <>
      <NavLink to={'/'}>
        <li className=' uppercase  text-lg font-bold'>
          HOME
        </li>
      </NavLink>
      <NavLink to={'/'}>
        <li className=' uppercase  text-lg font-bold'>
          HOME
        </li>
      </NavLink>
     

   
    </>
  );
const navigate =useNavigate()
  const { mode, changeTheme } = useMode();
  return (
    <div className=' dark:bg-black max-w-[1700px] mx-auto'>
      <div onScroll={scroll} className=' text-black   '>
        <div className='navbar'>
          <div className='navbar-start'>
      
            <div onClick={()=>navigate('/')} className='w-24 flex items-center h-[68px]'>
             <h1 className='uppercase pl-10 dark:text-white font-black text-2xl'>Abdullah</h1>
            </div>
          </div>
          <div className='navbar-center  hidden lg:flex'>
            <ul className='menu flex gap-6 dark:text-white  menu-horizontal px-1'>{NavLi}</ul>
          </div>
          <div className='navbar-end pr-5'>
            <button onClick={changeTheme}>
              {mode == 'light' ? (
                <MdModeNight
                  className='text-3xl mx-3'
                  onClick={changeTheme}></MdModeNight>
              ) : (
                <FiSun className='text-3xl text-white  mx-3' onClick={changeTheme}></FiSun>
              )}
            </button>
            <div className='dropdown'>
              <label tabIndex={0} className=' lg:hidden'>
                <svg
                
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 dark:text-white'
                  fill='none'
                  viewBox='0 0 24 24 '
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />F
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu space-y-2 absolute right-2 text-center  text-black bg-slate-200 dropdown-content mt-6 z-[1] p-2 shadow  rounded-box w-52'>
                {NavLi}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

