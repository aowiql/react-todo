import React, { useState, useRef } from 'react';
import { useStore } from '../store/store';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useStore();
  
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
      inputRef.current?.focus();
    }
  }

  return(
    <div className='todoInput'>
      <input type='text'
        onChange={handleInput}
        placeholder='할 일을 입력해주세요'
        value={inputValue}
        ref={inputRef}
      />
      <button onClick={handleAddTodo}>추가</button>
    </div>
  )

}

export default Input;