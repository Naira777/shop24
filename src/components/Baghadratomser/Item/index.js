import s from "./index.module.css";
import dexin from "../../../assets/Dexin.png";
import clock from "../../../assets/clock.png";
import krak from "../../../assets/krak.png";
import basket from "../../../assets/basket.png";

function Item({ url, text, price, prevPrice }) {
  return (
    <div className={s.content}>
      <div className={s.box1}>
        <img src={url} className={s.picBig} />
     
      </div>

      <div className={s.box2}>
        <p className={s.text}> {text} </p>
       
<div>
        <img src={clock} className={s.clock} />
          <p className={s.Price}>{`${price} րոպե`} </p>
</div>

<div>
          <img src={krak} className={s.krak} />
          <p className={s.Pricefor1}> {`պարզ`} </p>
</div>
        </div>
        <div className={s.box3}>
          <div className={s.basket}>
            <img src={basket} className={s.picbasket} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
