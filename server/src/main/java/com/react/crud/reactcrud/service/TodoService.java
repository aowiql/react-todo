package com.react.crud.reactcrud.service;

import com.react.crud.reactcrud.entity.TodoLists;

import java.util.List;

public interface TodoService {

    // 게시글 조회
    List<TodoLists> findAll();

    TodoLists findById(int theId);

    // 게시글 추가
    TodoLists addTodo(TodoLists theTodo);

    // 게시글 수정
    TodoLists updateTodo(Long todoId, TodoLists theTodo);

    // 체크리스트
    TodoLists doneTodo(Long todoId, TodoLists theTodo);

    // 삭제
    void deleteById(int theId);
}
