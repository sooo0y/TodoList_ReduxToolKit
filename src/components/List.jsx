import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todo";

const List = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);

  const onDeleteHandler = (e) => {
    const id = e.target.value;
    dispatch(deleteTodo(id));

    console.log(id)
  };



  return (
    <div>
      <h2>Working</h2>
      <TodoContainer>
        {todos.map((todo) => {
          if (todo.isDone == false) {
            return (
              <StCard key={todo.id}>
                <button>상세보기</button>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
                <button value= {todo.id} onClick={onDeleteHandler}>삭제</button>
                <button>완료</button>
              </StCard>
            );
          } else {
            return null;
          }
        })}
      </TodoContainer>

      <h2>Done</h2>
      <TodoContainer>
        {todos.map((todo) => {
          if (todo.isDone == true) {
            return (
              <StCard key={todo.id}>
                <button>상세보기</button>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
                <button value= {todo.id} onClick={onDeleteHandler}>삭제</button>
                <button>완료</button>
              </StCard>
            );
          } else {
            return null;
          }
        })}
      </TodoContainer>
    </div>
  );
};

export default List;

const TodoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StCard = styled.div`
  margin: 30px;
  padding: 15px;
  border: 1px solid black;
  width: 300px;
  text-align: center;
`;
