import React from 'react'

function NavBar({filterItem, menuCatList}) {
  return (
    <>
        <nav className="navbar">
          <div className="btn-group">
            {menuCatList.map((curElem)=>{
                return (
                  <button className="btn-group__item" onClick={()=> filterItem(curElem)}>{curElem}</button>
                );
            })}
          </div>
        </nav>
    </>
  )
}

export default NavBar