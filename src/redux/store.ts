import store from "store";

const STORE = "STORE";

export const loadStore = () => {
  try {
    const serializedData = store.get(STORE);
    if (serializedData === null) {
      return undefined;
    }
    return serializedData;
  } catch (error) {
    return undefined;
  }
};

export const saveStore = (state: any) => {
  try {
    store.set(STORE, state);
  } catch (error) {
    console.error(error);
  }
};
