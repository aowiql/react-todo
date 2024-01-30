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

    // 게시글 전체조회
    @Override
    public List<TodoLists> findAll() {
        return todoListDAO.findAll();
    }

    // 글 하나 탐색
    @Override
    public TodoLists findById(int theId) {
        return todoListDAO.findById(theId);
    }

    // 게시글 추가
    @Override
    @Transactional
    public TodoLists addTodo(TodoLists theTodo) {
        return todoListDAO.addTodo(theTodo);
    }

    // 게시글 수정
    @Override
    @Transactional
    public TodoLists updateTodo(TodoLists theTodo) {
        return todoListDAO.updateTodo(theTodo);
    }

    // 체크리스트
    @Override
    @Transactional
    public TodoLists doneTodo(TodoLists theTodo) {
        return todoListDAO.doneTodo(theTodo);
    }

    // 삭제
    @Override
    @Transactional
    public void deleteById(int theId) {
        todoListDAO.deleteById(theId);
    }
}
