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

}