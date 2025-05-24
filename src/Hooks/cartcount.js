
export const initialState = {
  count: 0,
  product: [],
  model: false,
  dup: false,
};

export const countReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "INC":
      newState = { ...state, count: state.count + 1 };
      break;
    case "DEC":
      newState = { ...state, count: Math.max(0, state.count - 1) };
      break;
    case "ADD":
      newState = {
        ...state,
        product: [...state.product, action.payload],
      };
      break;
    case "DEL":
      newState = {
        ...state,
        product: state.product.filter((item) => item.title !== action.payload),
      };
      break;
    case "DUP":
      newState = {
        ...state,
        duplicate: action.payload,
      };
      break;

    case "Model":
      newState = {
        ...state,
        model: !state.model,
      };
      break;
    case "RESET":
      newState = initialState;
      break;
    default:
      return state;
  }

  localStorage.setItem("storeState", JSON.stringify(newState));
  return newState;
};
