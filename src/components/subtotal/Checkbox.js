import React, { useEffect, useState } from "react";
import './Checkbox.css';
import { foods } from "./utils/foods";
import FoodData from "./FoodData";

const getFormattedPrice = (price) => `₹${price.toFixed(2)}`;


const Checkbox = ({ label, checked, ...props }) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
  

    const [checkedState, setCheckedState] = useState(
        new Array(foods.length).fill(false)
      );
    
      const [total, setTotal] = useState(0);
    
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    
        const totalPrice = updatedCheckedState.reduce(
          (sum, currentState, index) => {
            if (currentState === true) {
              return sum + foods[index].price;
            }
            return sum;
          },
          0
        );
    
        setTotal(totalPrice);
      };



    return (
      <div className="checkbox__wrapper">
        <label className="checkbox__layout">
          <input
            type="checkbox"
            onChange={() => setIsChecked((prev) => !prev)}

            {...props}
          />
          
          <span className="checkbox__lable">Add Food and Beverage</span>
        </label>

        <div className="foods">
          {isChecked ? 
            // <ul className="foods__list">
            //   {foods.map(({ name, image, price }, index) => {
            //     return (
            //       <li key={index}>
            //         <div className="foods__list__item">
            //           <div className="left__section">
            //             <input
            //               type="checkbox"
            //               id={`custom-checkbox-${index}`}
            //               name={name}
            //               // img={img}
            //               value={name}
            //               checked={checkedState[index]}
            //               onChange={() => handleOnChange(index)}
            //             />
            //             <label htmlFor={`custom-checkbox-${index}`}>
            //               <img src={image} alt="photo"/>
            //               {/* {image} */}
            //               {name}
            //             </label>
            //           </div>
            //           {/* <div className="middle__section">{(image)}</div> */}
            //           <div className="right__section">{getFormattedPrice(price)}</div>
            //         </div>
            //       </li>
            //     );
            //   })}
            //   <li>
            //     <div className="foods__list__item">
            //       <div className="left__section">Total:</div>
            //       <div className="right__section">{getFormattedPrice(total)}</div>
            //     </div>
            //   </li>
            // </ul>

            <div>
              <FoodData />
            </div>
            
          : 
            <span className="checkbox__unchecked">
              Unchecked
            </span>
          }
        </div>


        {/* To display after checked or not */}

        
        
          
      </div>
    );
  };


  export default Checkbox;