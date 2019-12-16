import { RequestHandler } from 'express';
import { json } from 'body-parser';
import Todo from './../models/todo.model';

const TODOS: Todo[] =[];

export const createTodo: RequestHandler = (req, res, next) => {
    console.log(req.body)
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo)
    return res.status(201).json({message: 'The todo created', createdTodo: newTodo}) 
}

export const getTodos: RequestHandler = (req, res, next) => {
    return res.json({todos: TODOS}) 
}