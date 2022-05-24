import { NavLink } from "react-router-dom";
import s from "./index.module.css";


function Item( {  url, handleClick } ) {

const a = ''

  return (

  <NavLink to="ararat">
   <img src={url}  className={s.pic} onClick= {handleClick}  />
   </NavLink>

  );
  
}

export default Item;
