import React,{ useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfiledropeDownOpen,setIsProfiledropeDownOpen]=useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }

  const handleProfileDropDownClick=()=>{
    setIsProfiledropeDownOpen(!isProfiledropeDownOpen);
  }

  const menuClass= "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu=== 0 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu=== 1 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Order</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu=== 2 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu=== 3 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu=== 4 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu=== 5 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=>handleProfileDropDownClick()}>
          <div className="avatar" >ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
