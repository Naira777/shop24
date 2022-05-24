import React from "react";
import s from "./index.module.css";
import vector from '../../../assets/vpage.png'
function Pagination({ handlePage , refArray, page, handleClick}) {

  const pages = [1, 2, 3, 4, 5];




  return (
    <div className={s.pages}>

       {pages.map((item, id) => {
        return (
          <p 
            ref={(ref) => {
              refArray.current[id] = ref;
            }}
            key={id}
            className={s.pagenumber}
            style = {(id == page-1) ? {color: '#3D9A85'} : {color: '#212121'}}
            onClick={handlePage.bind(null, id)}
          >
            {" "}
            {item}{" "}
          </p>
        );
      })}
      
      <img src={vector} className={s.vector}  onClick={handleClick}/>
    </div>
  );
}

export default Pagination;
