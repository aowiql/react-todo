package com.react.crud.reactcrud.rest;

import com.react.crud.reactcrud.entity.TodoLists;
import com.react.crud.reactcrud.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoListRestController {

    private TodoService todoService;

    @Autowired
    public TodoListRestController(TodoService theTodoService) {
        todoService = theTodoService;
    }

    // 전체 조회

    @GetMapping("/lists")
    public List<TodoLists> findAll() {
        return todoService.findAll();
    }

    // 게시글 작성
    @PostMapping("/lists")
    public TodoLists addTodo(@RequestBody TodoLists theTodo) {
        theTodo.setId(0);

        TodoLists addTodo = todoService.addTodo(theTodo);

        return addTodo;
    }

    // 게시글 수정
    @PutMapping("/lists")
    public TodoLists updateTodo(@RequestBody TodoLists theTodo) {
        TodoLists updated = todoService.updateTodo(theTodo);

        return updated;
    }

    // 체크리스트
    @PutMapping("/check")
    public TodoLists doneTodo(@RequestBody TodoLists theTodo) {

        theTodo.setTodoDone(!theTodo.isTodoDone());

        TodoLists checkTodo = todoService.doneTodo(theTodo);

        return checkTodo;
    }
}
