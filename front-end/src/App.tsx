import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "./Hooks/useWindowSize";
import Router from "./Router";
import { setWindowSize } from "./store/reducers/ui";
import { calculateWindowSize } from "./Utils/helpers";

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  return <Router />;
};

export default App;
