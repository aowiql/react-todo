package com.react.crud.reactcrud.dao;

import com.react.crud.reactcrud.entity.TodoLists;

import java.util.List;

public interface TodoListDAO {
    // 게시글 조회
    List<TodoLists> findAll();

    // 하나 탐색
    TodoLists findById(int theId);

    // 게시글 작성
    TodoLists addTodo(TodoLists theTodo);

    // 게시글 수정
    TodoLists updateTodo(TodoLists theTodo);

    // 체크리스트
    TodoLists doneTodo(TodoLists theTodo);
    
    // 삭제
    void deleteById(int theId);
}
