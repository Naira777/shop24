import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";
import Item from '../../BreadandCakes/Item/index';
import vector from "../../../assets/vector.png";
import filter from '../../../assets/filter.png'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../../redux/reducer'



function BrandProduct({ id }) {


const brandsproducts = useSelector(state => state.CategoryPage.brnadsproducts)
const products= brandsproducts.slice(0,4)
const dispatch = useDispatch()
const navigate = useNavigate()


const handleClick = () => {
  navigate(-1)
}


useEffect(() => {

dispatch(getCategories ())

},[])



  return (
    
    <div className={s.main}>
 
    <div  className={s.box}>
    <img src={vector} className={s.vector} onClick={handleClick} />
    
    <p className={s.text}> {`Արարատ`} </p>


    <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODNzYr_ssK98jhfK94nvz_EX9sWOUQ-i5cn4f0udzslk_Tqci3YhtYK6u-LZB5bk8Gg&usqp=CAU`} className={s.pic}  />

  <p className={s.desc}>
ARARAT-ը հայկական կոնյակի արտադրության լավագույն բրենդներից 
մեկն է։ ARARAT կոնյակները հայտնի են աշխարհի ավելի քան 50 երկրում:
 Այն զարգացնում է կոնյակի արտադրությունը՝ հաշվի առնելով 
 համաշխարհային միտումները և համային տարբեր նախասիրությունները: 
</p>




<a href="" className={s.box1}> 
Այցելել կայքը
</a>

<div className={s.links}>

<a href="https://www.instagram.com" className={s.link}>
INSTAGRAM
</a>

<a  href="https://www.facebook.com" className={s.link}>
FACEBOOK
</a>

</div>


</div>



<img src={filter} className={s.filter}/>

  <div className={s.content}>  

   {products.map((item, id)=> {

return (

    <div key={id}>
    <Item
      url={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODNzYr_ssK98jhfK94nvz_EX9sWOUQ-i5cn4f0udzslk_Tqci3YhtYK6u-LZB5bk8Gg&usqp=CAU`}
      handleClick={handleClick}
    />
  </div>

) })}



    </div>
    </div>

  );
}

export default BrandProduct;
