package com.react.crud.reactcrud.dao;

import com.react.crud.reactcrud.entity.TodoLists;

import java.util.List;

public interface TodoListDAO {

    List<TodoLists> findAll();

    TodoLists findById(int theId);

    TodoLists addTodo(TodoLists theTodo);

    void deleteById(int theId);
}
