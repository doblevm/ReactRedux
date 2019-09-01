export const increment = numb => {
  return {
    type: "INCREMENT",
    payload: numb
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
