import React from "react";
import styles from "../styles/FoodItem.module.css";
import FoodItemElement from "./FoodItemElement";
import FoodItemText from "./FoodItemText";

const FoodItem = (props) => {
  return (
    <div className={styles.FoodItem}>
      <FoodItemElement item={props.item} />
      <FoodItemText item={props.item} />
    </div>
  );
};

export default FoodItem;
