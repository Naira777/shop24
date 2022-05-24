import s from "./index.module.css";

function Product(props) {
  return (
    <div className={s.content}>
     <img src={vector} className={s.vector} />
        
      <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31IX3cxvtYOExtzGUXnnHrwPgQUTCcULdXXlYphxEEno0HfvrqxhqhiNNQErcO7fUa44&usqp=CAU`} className={s.pic} />

      <p className={s.header}>
      Օղի «Տակառ Ռուբի» 0.75լ
      </p>
     <div className={starsbox}>
    <img src={star1}  className={s.star}/>
    <img src={star1}  className={s.star}/>
    <img src={star1}  className={s.star}/>
    <img src={star1}  className={s.star}/>
    <img src={star1}  className={s.star}/>
    <p className={s.text}>5</p>

     </div>
      <p className={s.text}> «Տակառ Ռուբի» աղանդերային
       գինին պատրաստված է ռուբի պորտո ոճով։ Գինին
        պատրաստված է ․․․ Կարդալ ավելին </p>
      
      <div className={s.boxcount}>
          -
      </div>
      <p className={s.count}> 1 </p>
       <div className={s.boxcount}>
          +
      </div>
      <div className={s.button}>Զամբյուղ</div>
          </div>
  );
}

export default Product;