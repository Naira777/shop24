import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/reducer";
import s from "./index.module.css";
import Item from './Item';
import vector from "../../assets/vector.png";
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BrandProduct from './BrandProduct';



function Brands({  }) {


const brands = useSelector(state => state.CategoryPage.brands)
const dispatch = useDispatch()
const navigate = useNavigate()
const {filtertype} = useParams()





useEffect(() => {

dispatch(getBrands())


},[filtertype])

const handleClick =() => {

navigate(-1)
}


  return (
    
    <>
 
    <div  className={s.box}>
    <img src={vector} className={s.vector}   onClick={handleClick} />
    
    <p className={s.text}> {`Բրենդներ`} </p>
   <Menu />

</div>

<div className={s.content} >  
{  brands.map((item, id)=> {

return (

    <div key={id}>
    <Item
      url={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODNzYr_ssK98jhfK94nvz_EX9sWOUQ-i5cn4f0udzslk_Tqci3YhtYK6u-LZB5bk8Gg&usqp=CAU`}
      id={item.id}

    
    />
  </div>

) })}

    </div>

    </>

  );
}

export default Brands;
