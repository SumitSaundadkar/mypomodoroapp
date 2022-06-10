import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortTime, setShortTime] = useState(10);
  const [longBreakTime, setLongBreakTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(10);
  const [activetag, setActiveTag] = useState(0);
  const [initTime, setInitTime] = useState(0);

  useEffect(() => {
    switch (activetag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortTime);
        setInitTime(shortTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [activetag, workTime, shortTime, longBreakTime]);
  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        time,
        setTime,
        activetag,
        setActiveTag,
        initTime,
        setInitTime,
        workTime,
        shortTime,
        longBreakTime,
        setLongBreakTime,
        setShortTime,
        setWorkTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
const useStateContext = () => useContext(StateContext);

export { StateProvider, useStateContext };
