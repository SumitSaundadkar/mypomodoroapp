import React from "react";
import { useState } from "react";
import "./todomoadlcontainer.css";
import { FaWindowClose } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useTodoContext } from "../../Context/TodoProvider";
import { useStateContext } from "../../Context/StateProvideContext";

//import Modal from "../../Components/Navbar/TimerComponent/Modal";

const Todomodalcontainer = ({ todoClose }) => {
  const { editClicked, dispatch, itemBeingEdited } = useTodoContext();
  const { time, setTime } = useStateContext();
  const [input, setInput] = useState(editClicked ? itemBeingEdited.input : "");
  const [text, setText] = useState(editClicked ? itemBeingEdited.text : "");

  return (
    <div>
      <div className="modal_container">
        <div className="modal_content">
          <div className="modalconatainer_heading">
            <span className="settings_head">
              Settings{" "}
              <h2 onClick={todoClose} className="remove">
                <FaWindowClose />
              </h2>
            </span>
          </div>
          <div className="modal_body">
            <div className="input_wrapper">
              <div className="form_control">
                <label className="label">Title</label>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  min="1"
                  max="60"
                />
              </div>
            </div>
            <div className="input_wrapper">
              <div className="form_control">
                <label className="label">
                  <span className="edit">
                    {" "}
                    <BiEdit />
                  </span>
                </label>
                <textarea
                  value={text}
                  name="textarea"
                  className="txt_area"
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div className="input_wrapper">
              <div className="form_control">
                <label className="label">Time</label>
                <input
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                  min="1"
                  max="60"
                />
              </div>
            </div>
            <div className="input_wrapper">
              <div className="form_control">
                {editClicked ? (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "UPDATE_HANDLER",
                        payload: {
                          id: itemBeingEdited.id,
                          input,
                          text,
                          time,
                        },
                      });
                      todoClose();
                      setInput("");
                      setText("");
                    }}
                    className="submit_btn"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_HANDLER",
                        payload: { input, text, time },
                      });
                      todoClose();
                    }}
                    className="submit_btn"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todomodalcontainer;
