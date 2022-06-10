import { useEffect, useState } from "react";
import "../PomodoroPage/pomoPage.css";
import { useStateContext } from "../../Context/StateProvideContext";
import Modal from "../../Components/Navbar/TimerComponent/Modal";
import { FaCog } from "react-icons/fa";
const PomoDoroPage = () => {
  const {
    isActive,
    setIsActive,
    time,
    setTime,
    activetag,
    setActiveTag,
    initTime,
    setProgressBar,
  } = useStateContext();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setProgressBar(time / (initTime / 100));
  }, [setProgressBar, time, initTime]);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive, setTime]);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };

  const colorChange = (index, e) => {
    setActiveTag(index);
  };

  const getTimeConversion = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };
  console.log(getTimeConversion);
  return (
    <div className="pomo_body">
      <div className="pomo_container">
        <div className="pomo_button_container">
          {["Work", "Short Break", "Long Break"].map((tag, i) => (
            <button
              activetag={activetag === i}
              key={i}
              onClick={() => colorChange(i)}
              className="pommo_button_gropus"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="pomo_watch_container">
          <div className="outer_circle">
            <div className="inner_circle">
              <div className="innermost_circle">
                <h1 className="time_center">
                  {getTimeConversion(time)}
                  <span onClick={toggleButton} className="start_pause">
                    {isActive ? "PAUSE" : "START"}
                  </span>
                  {time === 0 && (
                    <span onClick={resetTime} className="reset">
                      RESET
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} />
        <div className="setting_icon">
          <FaCog onClick={onOpen} />
        </div>
      </div>
    </div>
  );
};
export { PomoDoroPage };
