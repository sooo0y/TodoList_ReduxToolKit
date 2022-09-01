import React, { useState } from "react";
import styled from "styled-components";

import { addTodo } from "../redux/modules/todo";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";


const Form = () => {

  const dispatch = useDispatch();
  const id = nextId();

  const initialstate = {
    id:0,
    title:"",
    body:"",
    isDone:false
  };


  const [inputValue, setInputValue] = useState(initialstate);

  const onChangeHandler = (e) => {
    const {name,value} = e.target;
    setInputValue({...inputValue, [name]:value, id:id});
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue(initialstate);
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={inputValue.title}
          onChange={onChangeHandler}
          required
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={inputValue.body}
          onChange={onChangeHandler}
          required
        />
      </div>
      <button>추가하기</button>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  & label,
  input {
    margin-left: 20px;
  }
`;
