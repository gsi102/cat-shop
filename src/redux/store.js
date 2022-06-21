import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

const initialState = {
  foodItems: [
    {
      id: 1,
      title: "Нямушка",
      flavor: "с фуа-гра",
      description: "Печень утки разварная с артишоками.",
      portions: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      units: "КГ",
      isSelected: false,
      inStock: true,
    },
    {
      id: 2,
      title: "Нямушка",
      flavor: "с рыбой",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      portions: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      units: "КГ",
      isSelected: true,
      inStock: true,
    },
    {
      id: 3,
      title: "Нямушка",
      flavor: "с курой",
      description: "Филе из цыплят с трюфелями в бульоне.",
      portions: 100,
      gift: "5 мышей в подарок",
      weight: "5",
      units: "КГ",
      isSelected: false,
      inStock: false,
    },
  ],
};

const store = createStore(rootReducer, {
  foodItemSlice: initialState.foodItems,
});

// console.log(store.getState());

export default store;
