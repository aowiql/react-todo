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
    @PutMapping("/change/{todoId}")
    public TodoLists updateTodo(@PathVariable Long todoId, @RequestBody TodoLists theTodo) {
        TodoLists updated = todoService.updateTodo(todoId, theTodo);

        return updated;
    }

    // 체크리스트
    @PutMapping("/check/{todoId}")
    public TodoLists doneTodo(@PathVariable Long todoId, @RequestBody TodoLists theTodo) {

        theTodo.setTodoDone(!theTodo.isTodoDone());

        TodoLists checkTodo = todoService.doneTodo(todoId, theTodo);

        return checkTodo;
    }

    // 삭제
    @DeleteMapping("/lists/{todoId}")
    public String deleteTodo(@PathVariable int todoId) {
        TodoLists todoLists = todoService.findById(todoId);

        if(todoLists == null) {
            throw new RuntimeException("Todo lists not found - " + todoId);
        }

        todoService.deleteById(todoId);

        return "Delete todo id - " + todoId;
    }

}
