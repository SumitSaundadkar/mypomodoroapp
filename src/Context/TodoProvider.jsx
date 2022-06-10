import { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import { todoReducer } from "../Components/reducer/reducer";
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [moduledata, setModuldata] = useState([]);
  const [{ taskAdded, editClicked, itemBeingEdited }, dispatch] = useReducer(
    todoReducer,
    {
      taskAdded: [],
      editClicked: false,
      itemBeingEdited: null,
    }
  );

  return (
    <TodoContext.Provider
      value={{
        moduledata,
        setModuldata,
        taskAdded,
        editClicked,
        itemBeingEdited,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
const useTodoContext = () => useContext(TodoContext);
export { TodoProvider, useTodoContext };
