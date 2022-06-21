const foodItemSlice = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED":
      const elementId = --action.payload;
      const isSelectedPrev = state[elementId].isSelected;
      const tempArr = [...state];
      tempArr[elementId] = {
        ...tempArr[elementId],
        isSelected: !isSelectedPrev,
      };
      return [...tempArr];
    default:
      return state;
  }
};

export default foodItemSlice;
