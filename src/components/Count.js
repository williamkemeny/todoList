import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countZero } from "../actions";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const handleClick = () => dispatch(countZero());
  return (
    <div className="bottomOfApp">
      <h2>Completed: {count}</h2>
      <button className="button-1" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default Count;
