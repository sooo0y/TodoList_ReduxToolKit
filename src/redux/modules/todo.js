import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "야자반",
    body: "야자반에는 야자수가 있다.",
    isDone: false,
  },
  {
    id: 2,
    title: "저도...",
    body: "저도 할 수 있겠죠...??",
    isDone: true,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
     return state.filter((state) => state.id !== Number(action.payload));
    }
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;