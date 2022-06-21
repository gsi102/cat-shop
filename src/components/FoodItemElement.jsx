import React, { useState } from "react";
import styles from "../styles/FoodItem.module.css";

import { useDispatch } from "react-redux";
import FoodItemDescription from "./FoodItemDescription";

const FoodItemElement = (props) => {
  const element = props.item;
  const elementId = element.id;
  const isSelected = element.isSelected;
  const isInStock = element.inStock;
  const dispatch = useDispatch();

  // const [clicked, setClicked] = useState(false);

  if (isInStock) {
    return (
      <div
        className={
          isSelected ? styles.FoodItemElementSelected : styles.FoodItemElement
        }
        onClick={() => dispatch({ type: "SELECTED", payload: elementId })}
        /* Не совсем понял 5 пункт задачи: 
        "Состояние наведения применяется к выбранной упаковке не сразу, а после того,
        как курсор ушел с нее после первоначального выбора." */
        // onClick={() => setClicked(!clicked)}
        // onMouseLeave={() => {
        //   if (clicked) {
        //     dispatch({ type: "SELECTED", payload: elementId });
        //     setClicked(false);
        //   }
        // }}
      >
        <FoodItemDescription
          item={element}
          weigthStyle={styles.FoodItemWeight}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.FoodItemElementDisabled}>
        <FoodItemDescription
          item={element}
          weigthStyle={styles.FoodItemWeightDisabled}
        />
      </div>
    );
  }
};

export default FoodItemElement;
