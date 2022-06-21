import React from "react";
import styles from "../styles/FoodItem.module.css";

import { useDispatch } from "react-redux";

const FoodItemText = (props) => {
  const dispatch = useDispatch();
  const element = props.item;
  const elementId = element.id;
  const isSelected = element.isSelected;
  const isInStock = element.inStock;

  if (isInStock) {
    return (
      <div className={styles.FoodItemText}>
        {!isSelected ? (
          <>
            Чего сидишь? Порадуй кота,&nbsp;
            <span
              className={styles.buyText}
              onClick={() => dispatch({ type: "SELECTED", payload: elementId })}
            >
              купи
            </span>
          </>
        ) : (
          element.description
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.FoodItemTextDisabled}>
        Печалька, {element.flavor} закончился.
      </div>
    );
  }
};

export default FoodItemText;
