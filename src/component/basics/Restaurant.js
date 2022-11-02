import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './NavBar';

const uniqueCatList = [
  ...new Set(
    Menu.map((curElement) =>{
      return curElement.category;
    })
  ),
  "All",
];


function Restaurant() {
    const [menuData, setMenuData] = useState(Menu);
    const [menuCatList, setMenuCatList] = useState(uniqueCatList);

    const filterItem = (category) =>{
      if(category === "All"){
        setMenuData(Menu)
        return;
      }
      const updatedList = Menu.filter((curElement)=>{
        return curElement.category === category;
      });
      setMenuData(updatedList)
    }
  return (
    <div>
        <Navbar filterItem={filterItem} menuCatList={menuCatList} />
        <MenuCard menuData={menuData} />
    </div>
  )
}

export default Restaurant