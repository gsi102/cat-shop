import React from "react";
import styles from "../styles/FoodBlock.module.css";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

const FoodBlock = () => {
  const foodItems = useSelector((state) => state.foodItemSlice);
  return (
    <div className={styles.FoodBlock}>
      {foodItems.map((item) => (
        <FoodItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FoodBlock;
