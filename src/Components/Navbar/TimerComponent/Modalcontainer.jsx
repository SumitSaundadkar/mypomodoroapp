import React from "react";
import "./modalcontainer.css";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { useStateContext } from "../../../Context/StateProvideContext";

const Modalcontainer = ({ isOpen, onClose }) => {
  const {
    workTime,
    shortTime,
    longBreakTime,
    setLongBreakTime,
    setShortTime,
    setWorkTime,
  } = useStateContext();
  return (
    <div className="modal_container">
      <div className="modal_content">
        <div className="modalconatainer_heading">
          <span className="settings_head">
            Settings{" "}
            <h2 onClick={onClose} className="remove">
              <FaWindowClose />
            </h2>
          </span>
        </div>
        <div className="modal_body">
          <Formik
            initialValues={{
              work: workTime / 60,
              short: shortTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setLongBreakTime(values.long * 60);
              setShortTime(values.short * 60);
              onClose();
            }}
          >
            <Form>
              <div className="input_wrapper">
                <div className="form_control">
                  <label htmlFor="work" className="label">
                    Work
                  </label>
                  <Field name="work" min="1" max="60" />
                </div>
              </div>
              <div className="input_wrapper">
                <div className="form_control">
                  <label htmlFor="short" className="label">
                    Short
                  </label>
                  <Field name="short" min="1" max="60" />
                </div>
              </div>
              <div className="input_wrapper">
                <div className="form_control">
                  <label htmlFor="long" className="label">
                    Long
                  </label>
                  <Field name="long" min="1" max="60" />
                </div>
              </div>
              <div className="input_wrapper">
                <div className="form_control">
                  <button type="submit" className="submit_btn">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Modalcontainer;
