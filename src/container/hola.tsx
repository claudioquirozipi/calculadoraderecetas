import * as React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

export interface HolaContainerProps {}

const HolaContainer: React.FC<HolaContainerProps> = (props) => {
  const result: any = useSelector((state: any) => state.holaReducer);
  const dispatch = useDispatch();

  const onClick = () => {
    const value = result.hola + " " + "aquí";
    dispatch({ type: "HOLA", payload: value });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        button test
      </Button>
    </div>
  );
};

export default HolaContainer;
