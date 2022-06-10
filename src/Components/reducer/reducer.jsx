import { v4 as uuid } from "uuid";
export const todoReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_HANDLER":
      return {
        ...state,
        taskAdded: [
          ...state.taskAdded,
          {
            input: payload.input,
            text: payload.text,
            workTime: payload.workTime,
            id: uuid,
          },
        ],
      };
    case "DELETE_HANDLER":
      return {
        ...state,
        taskAdded: [...payload.filter((todo) => todo.id !== action.id)],
      };
    case "INPUT_HANDLER":
      return {
        ...state,
        taskAdded: [""],
      };
    case "UPDATE_HANDLER":
      return {
        ...state,
        taskAdded: [
          ...state.taskAdded.map((task) => {
            if (task.id === payload.id) {
              return {
                ...task,
                input: payload.input,
                text: payload.text,
                time: payload.time,
              };
            }
            return task;
          }),
        ],
      };
    case "EDIT_HANDLER":
      return {
        ...state,
        editClicked: true,
        itemBeingEdited: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
