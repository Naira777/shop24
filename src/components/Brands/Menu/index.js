import React, { useEffect, useState, useRef } from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";





function BreadMenu() {



const handleClick = (e) => {


if(e.currentTarget.id == '35') {

  document.getElementById("35").style.background='#3D9A85'
  document.getElementById("35").style.color='#fff'

}
 if(e.currentTarget.id == '63'){
document.getElementById("63").style.background='#3D9A85'
document.getElementById("63").style.color='#fff'

}if(e.currentTarget.id == '65'){
document.getElementById("65").style.background='#3D9A85'
document.getElementById("65").style.color='#fff'

}if(e.currentTarget.id == '64'){
  document.getElementById("64").style.background='#3D9A85'
  document.getElementById("64").style.color='#fff'
  
  }
  if(e.currentTarget.id == '66'){
    document.getElementById("66").style.background='#3D9A85'
    document.getElementById("66").style.color='#fff'
    
    }
  if(e.currentTarget.id == '68'){
    document.getElementById("68").style.background='#3D9A85'
    document.getElementById("68").style.color='#fff'
    
    }

  if(e.currentTarget.id == '85'){
    document.getElementById("85").style.background='#3D9A85'
    document.getElementById("85").style.color='#fff'
    
    }

    if(e.currentTarget.id == '389'){
      document.getElementById("389").style.background='#3D9A85'
      document.getElementById("389").style.color='#fff'
      
      }
      if(e.currentTarget.id == '390'){
        document.getElementById("390").style.background='#3D9A85'
        document.getElementById("390").style.color='#fff'
        
        }


}


  return (
    <div className={s.Box}>
      <button id="35"  className={s.button} onClick={handleClick}>Բոլորը</button>

      <button id="63"  className={s.button} onClick={handleClick}>Հացաբուլկեղեն և թխվածք </button>

      <button id="65"  className={s.button} onClick={handleClick}>Միս </button>

      <button id="64" className={s.button} onClick={handleClick}>Պանիր </button>

      <button id="66" className={s.button} onClick={handleClick}>Ձուկ </button>

      <button id="68" className={s.button} onClick={handleClick}>Խմիչք </button>

      <button id="85" className={s.button} onClick={handleClick}>Նրբերշիկ </button>

      <button  id="389" className={s.button} onClick={handleClick}>Միրգ </button>

      <button  id="390" className={s.button} >Նպարեղեն </button>

      <button id=" "
        className={s.button}
       onClick={handleClick}
      >
        ՍուրՃ{" "}
      </button>
    </div>
  );
}

export default BreadMenu;
