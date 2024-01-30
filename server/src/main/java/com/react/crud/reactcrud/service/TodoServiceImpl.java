package com.react.crud.reactcrud.service;

import com.react.crud.reactcrud.dao.TodoListDAO;
import com.react.crud.reactcrud.entity.TodoLists;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoListDAO todoListDAO;

    public TodoServiceImpl(TodoListDAO theTodoListDAO) {
        todoListDAO = theTodoListDAO;
    }

    @Override
    public List<TodoLists> findAll() {
        return todoListDAO.findAll();
    }

    @Override
    public TodoLists findById(int theId) {
        return todoListDAO.findById(theId);
    }

    @Override
    @Transactional
    public TodoLists addTodo(TodoLists theTodo) {
        return todoListDAO.addTodo(theTodo);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        todoListDAO.deleteById(theId);
    }
}
