import React from "react";
import "./Movielist.css";
import { useStateValue } from "../../StateProvider";

function Movielist({ id, title, rating, image, price, info, stock, nostock  }) {
 
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket >>>", basket);


  const addToBasket = () => {
    // dispatch the item into the data layer
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: id,
              title: title,
              info: info,
              image: image,
              price: price,
              stock: stock,
              nostock: nostock,
              rating: rating,
          },
      });
  };


  return (
    <div className="movie">
      <div className="movie__title">
        <p style={{fontWeight: "bold"}}>{title}</p>
        <p style={{fontSize: 12}}>
          {info}
        </p>
        <p className="movie__info">
          
          <small>₹ </small>
          <strong style={{fontSize: 14 ,fontWeight: 100}}>{price}</strong>
          <p className="movie__stock">
            {/* &nbsp;{stock}&nbsp; */}
            <small style={{color: "green"}}>&nbsp;{stock}</small>
            <small style={{color: "darkred"}}>{nostock}&nbsp;</small>
          </p>

        </p>
        <div className="movie__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Book Ticket</button>
    </div>
  );
}

export default Movielist;