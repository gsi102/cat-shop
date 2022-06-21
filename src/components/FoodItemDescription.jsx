import React from "react";
import styles from "../styles/FoodItem.module.css";

const FoodItemDescription = (props) => {
  const element = props.item;
  const isSelected = element.isSelected;
  return (
    <>
      <div className={styles.FoodItemDescription}>
        <h5>Сказочное заморское яство</h5>
        <h3>{element.title}</h3>
        <h4>{element.flavor}</h4>
        <p>
          <strong>{element.portions}</strong> порций
        </p>
        <p>{element.gift}</p>
      </div>
      <div className={styles.FoodItemBg}></div>
      <div
        className={
          isSelected ? styles.FoodItemWeightSelected : props.weigthStyle
        }
      >
        <div>{element.weight}</div>
        <div>{element.units}</div>
      </div>
    </>
  );
};

export default FoodItemDescription;
