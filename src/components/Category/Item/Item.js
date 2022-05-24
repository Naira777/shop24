import { useNavigate } from "react-router-dom";
import s from "./index.module.css";


function Item(props) {

const navigate = useNavigate()


const handleClick =()=> {
navigate(`${props.text}`)

}


  return (
    <div className={s.content} onClick={props.handleClick} onClick={handleClick}>
      <img src={props.url} className={s.pic} />
      <p className={s.text}> {props.text} </p>
   
    </div>
  );
}

export default Item;
