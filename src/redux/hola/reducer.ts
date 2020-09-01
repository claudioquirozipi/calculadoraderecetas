const initialState: any = {
  hola: "hola test",
};

export const holaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "HOLA":
      return {
        ...state,
        hola: action.payload,
      };
    default:
      return state;
  }
};
