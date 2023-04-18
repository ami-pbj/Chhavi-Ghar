import React from "react";
import "./Foodlist.css";
import { useStateValue } from "../../StateProvider";

function Foodlist({ id, title, rating, image, price, stock, nostock  }) {
 
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket >>>", basket);


  const addToBasket = () => {
    // dispatch the item into the data layer
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: id,
              title: title,
              image: image,
              price: price,
              stock: stock,
              nostock: nostock,
              rating: rating,
          },
      });
  };


  return (
    // <div className="food">
    //   <div className="food__details">
    //     <img src={image} alt="" />
    //   </div>

    //   <div className="food__title">
    //     <div className="food__info__layout">
    //       <p style={{fontWeight: "bold"}}>{title}</p>
    //       <p className="food__info">
    //         <small>₹ </small>
    //         <strong style={{fontSize: 14 ,fontWeight: 100}}>{price}</strong>
    //       </p>
    //     </div>

    //     <button onClick={addToBasket} style={{fontWeight: "bold"}}>
    //       <strong style={{fontSize: 20}}>+ </strong>
    //       Add
    //     </button>
        
    //   </div>
    // </div>

    <div class="food">
      <img
        class="food__image"
        src={image}
        alt=""
      />

      <div class="food__desc">
        <h5 class="food__title">{title}</h5>
        <p class="food__info">
          <small style={{color: 'black', fontSize: 15}}>₹ </small>
          <strong >{price}</strong>
        </p>

        <p className="food__stock">
          {/* &nbsp;{stock}&nbsp; */}
          <small style={{color: "green"}}>&nbsp;{stock}</small>
          <small style={{color: "darkred"}}>{nostock}&nbsp;</small>
        </p>

        <small className="food__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </small>
      </div>

      <button onClick={addToBasket} class="food__button">
        <strong style={{fontWeight: "bolder"}}>+ </strong>
        Add
      </button>
    </div>
  );
}

export default Foodlist
