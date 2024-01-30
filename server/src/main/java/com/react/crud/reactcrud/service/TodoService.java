package com.react.crud.reactcrud.service;

import com.react.crud.reactcrud.entity.TodoLists;

import java.util.List;

public interface TodoService {

    List<TodoLists> findAll();

    TodoLists findById(int theId);

    TodoLists addTodo(TodoLists theTodo);

    void deleteById(int theId);
}
