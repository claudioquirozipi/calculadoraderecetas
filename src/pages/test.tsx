import * as React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import HolaContainer from "../container/hola";

export interface TextProps {}

const Text: React.FC<TextProps> = () => {
  const result: any = useSelector((state: any) => state.holaReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{result.hola}</h1>
      <h2>aquí</h2>
      <HolaContainer />
    </div>
  );
};

export default Text;
