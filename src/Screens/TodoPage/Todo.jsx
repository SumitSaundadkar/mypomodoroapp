import "../TodoPage/todo.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const TodoPage = () => {
  return (
    <div className="todo_body">
      <div className="todo_container">
        <h1 className="todo_title">
          Welcome back <br /> You have no task here{" "}
        </h1>

        <div className="todo_heading">
          <h3>Add Todo here</h3>
          <AiFillPlusCircle />
        </div>
        <div className="todo_flex_column">
          <span>a</span>
          <AiFillPlusCircle />
          <BiEdit />
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  );
};
export { TodoPage };
