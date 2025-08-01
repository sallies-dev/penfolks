"use client"
import Link from "next/link";
import React, {useState} from "react";
import { FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import {useSession} from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "next-auth/react"

const Nav = () => {
const [navOpen, setNavOpen] = useState(false);
  const {data:session, status}=useSession();

  console.log(session,status);

   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // handler function for nav open
  const handleOpen = () => {
    setNavOpen(!navOpen);
  };

  console.log(navOpen);
  


  console.log(navOpen);
  const navItems = [
    { url: "/", label: "Home" },
    { url: "/", label: "About" },
    { url: "/", label: "Contact" },
    { url: "/Stories", label: "Stories" },
    
  ];
  return (
    <nav className="flex items-center justify-between shadow-md py-3 px-6 relative bg-orange-200">
      <Link href={"/"} className="flex items-center gap-1 z-50">
        <p className="font-semibold text-xl text-gray-700">PENFOLK</p>
      </Link>

      <div className="flex items-center gap-8 ml-auto max-lg:hidden text-xl font-semibold ">
        {navItems.map((item, i) => (
          <Link key={i} href={item.url}>
            {item.label}
          </Link>
        ))}
      </div>
         {!session?.user?(
        <Link
          href={"/auth/signin"}
          className="flex items-center gap-1 text-lg lg:border px-3 py-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-300 ml-8 max-lg:ml-auto z-50"
        >
          <FiUser />
          <p className="max-lg:hidden rounded-full ">Sign In</p>
        </Link>

      ): (
        
         <div>
      <button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <img src={session?.user?.image} alt={session?.user?.name.slice(0,1).toUpperCase()} 
        className="w-10 h-10 rounded-full ml-8 max-lg:ml-auto z-50"/>
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <MenuItem onClick={handleClose}>
         <Link href={"?"}>profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
         <Link href={"/add-stories"}>add stories</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
           <button onClick={() => signOut()}>Sign Out</button>
        </MenuItem>
      </Menu>
    </div>
      )}

      {navOpen ? (
        <div className="h-dvh w-full overflow-hidden lg:hidden absolute top-0 right-0 bg-white flex flex-col items-center justify-center gap-20">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              className="text-1xl font-bold hover:text-teal-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}

      <div className="lg:hidden z-50 mt-1">
        <button onClick={handleOpen} className="text-2xl">
          {navOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
