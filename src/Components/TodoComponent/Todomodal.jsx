import React from "react";
import "./Todomodal.css";
import Todomodalcontainer from "./todomodalcontainer";

const Todomodal = ({ todoOpen, todoClose }) => {
  return (
    <div>
      {todoOpen && (
        <>
          <Todomodalcontainer todoOpen={todoOpen} todoClose={todoClose} />
        </>
      )}
    </div>
  );
};

export default Todomodal;
