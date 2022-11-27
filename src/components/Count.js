import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countZero } from "../actions";
import { BottomOfApp } from "./style/BottomOfApp.styled";
import { Button1 } from "./style/Button1.styled";
import { ImportantText } from "./style/ImportantText.styled";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const handleClick = () => dispatch(countZero());
  return (
    <BottomOfApp>
      <ImportantText>Completed: {count}</ImportantText>
      <Button1 onClick={handleClick}>Reset</Button1>
    </BottomOfApp>
  );
};

export default Count;
