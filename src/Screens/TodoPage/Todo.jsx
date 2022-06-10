import "../TodoPage/todo.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineWatchLater } from "react-icons/md";
import { useState } from "react";
import Todomodal from "../../Components/TodoComponent/Todomodal";
import { useTodoContext } from "../../Context/TodoProvider";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const [todoOpen, setTodoOpen] = useState(false);
  const { taskAdded, dispatch } = useTodoContext();
  //const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  //const [currentTodo, setCurrentTodo] = useState({});

  const todoClose = () => {
    setTodoOpen(false);
  };
  const toDoOpen = () => {
    setTodoOpen(true);
  };

  const navigate = useNavigate();

  const titleHandler = (input, text) => {
    navigate("/todoaddpage");
    //setPomodoroDesc([{ input, text }]);
  };

  return (
    <div className="todo_body">
      <div className="todo_container">
        <h1 className="todo_title">
          Welcome back <br /> You have no task here{" "}
        </h1>

        <div className="todo_heading">
          <h3>Add Todo here</h3>
          <span onClick={toDoOpen} className="add_btn">
            <AiFillPlusCircle />
          </span>
        </div>
        {taskAdded.map((items) => {
          const { id, input, text } = items;
          return (
            <div className="todo_heading" key={id}>
              <h3>{input}</h3>
              <span className="edit">
                {" "}
                <MdOutlineWatchLater
                  onClick={() => titleHandler(input, text)}
                />
              </span>

              <span className="edit">
                {" "}
                <MdDeleteOutline
                  onClick={() =>
                    dispatch(
                      {
                        type: "DELETE_HANDLER",
                        payload: taskAdded,
                        id,
                      },
                      toDoOpen
                    )
                  }
                />
              </span>
              <span className="edit">
                {" "}
                {
                  <BiEdit
                    onClick={() => {
                      dispatch({
                        type: "EDIT_HANDLER",
                        payload: items,
                      });
                      toDoOpen();
                    }}
                  />
                }
              </span>
            </div>
          );
        })}
        <Todomodal todoOpen={todoOpen} todoClose={todoClose} />
      </div>
    </div>
  );
};
export { TodoPage };
