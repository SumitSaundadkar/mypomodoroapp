import "../PomodoroPage/pomoPage.css";
//import { AiOutlineSetting } from "react-icons/fa";

const PomoDoroPage = () => {
  return (
    <div className="pomo_body">
      <div className="pomo_container">
        <div className="pomo_button_container">
          <button className="pommo_button_gropus">work</button>
          <button className="pommo_button_gropus">short</button>
          <button className="pommo_button_gropus">Break</button>
        </div>

        <div className="pomo_watch_container">
          <div className="outer_circle">
            <div className="inner_circle">
              <div className="innermost_circle">
                <h1 className="time_center">
                  25:00 <span className="start_pause">START</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { PomoDoroPage };
