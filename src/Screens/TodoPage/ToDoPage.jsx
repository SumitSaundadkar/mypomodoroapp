import { useEffect, useState } from "react";
import "../TodoPage/todopage.css";
import { useStateContext } from "../../Context/StateProvideContext";
import Modal from "../../Components/Navbar/TimerComponent/Modal";
import { FaCog } from "react-icons/fa";
import { useTodoContext } from "../../Context/TodoProvider";
const TodoAddPage = () => {
  const { isActive, setIsActive, time, setTime, initTime } = useStateContext();
  const { taskAdded } = useTodoContext();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

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
          {taskAdded.length > 0
            ? taskAdded.map((tag) => {
                const { input, text } = tag;
                return (
                  <div>
                    {" "}
                    <div className="todo_heading_data">
                      {" "}
                      <h3>{input}</h3>
                      <h3>{text}</h3>
                    </div>
                    <div className="todo_watch_container">
                      <div className="outer_circle">
                        <div className="inner_circle">
                          <div className="innermost_circle">
                            <h1 className="time_center">
                              {getTimeConversion(time)}
                              <span
                                onClick={toggleButton}
                                className="start_pause"
                              >
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
                );
              })
            : "no data"}
        </div>
      </div>
    </div>
  );
};
export { TodoAddPage };
