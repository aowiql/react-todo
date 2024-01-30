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

    @Override
    public List<TodoLists> findAll() {
        TypedQuery<TodoLists> theQuery =
                entityManager.createQuery("FROM TodoLists", TodoLists.class);

        List<TodoLists> todoLists = theQuery.getResultList();

        return todoLists;
    }

    @Override
    public TodoLists findById(int theId) {
        return null;
    }

    @Override
    @Transactional
    public TodoLists addTodo(TodoLists theTodo) {
        TodoLists existingTodo = entityManager.merge(theTodo);
        return existingTodo;
    }

    @Override
    public void deleteById(int theId) {

    }
}
