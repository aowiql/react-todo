package com.react.crud.reactcrud.dao;

import com.react.crud.reactcrud.entity.TodoLists;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class TodoListDAOImpl implements TodoListDAO {

    private EntityManager entityManager;

    @Autowired
    public TodoListDAOImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    // 게시글 전체조회
    @Override
    public List<TodoLists> findAll() {
        TypedQuery<TodoLists> theQuery =
                entityManager.createQuery("FROM TodoLists", TodoLists.class);

        List<TodoLists> todoLists = theQuery.getResultList();

        return todoLists;
    }

    // 하나 조회
    @Override
    public TodoLists findById(int theId) {
        TodoLists theTodo = entityManager.find(TodoLists.class, theId);
        return theTodo;
    }

    // 게시글 추가
    @Override
    @Transactional
    public TodoLists addTodo(TodoLists theTodo) {
        TodoLists existingTodo = entityManager.merge(theTodo);
        return existingTodo;
    }

    // 게시글 수정
    @Override
    public TodoLists updateTodo(Long todoId, TodoLists theTodo) {

        TodoLists updateTodo = entityManager.find(TodoLists.class, todoId);

        if(updateTodo != null) {
            updateTodo.setTodoTask(theTodo.getTodoTask());

            entityManager.merge(updateTodo);
        }
        return updateTodo;
    }

    // 체크리스트
    @Override
    public TodoLists doneTodo(Long todoId, TodoLists theTodo) {
        TodoLists doneTodo = entityManager.find(TodoLists.class, todoId);

        if(doneTodo != null) {
            doneTodo.setTodoDone(!doneTodo.isTodoDone());
        }

        return theTodo;
    }

    // 삭제
    @Override
    public void deleteById(int theId) {
        TodoLists deleteTodo = entityManager.find(TodoLists.class, theId);

        entityManager.remove(deleteTodo);
    }
}
