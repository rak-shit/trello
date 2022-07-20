import { ADD_NEW_LIST, ADD_NEW_TASK, CHANGE_TITLE, DELETE_LIST, DELETE_TASK, EDIT_TASK_NAME } from "./types"

export const addNewList = (data: any) => {
    return {
        type: ADD_NEW_LIST,
        payload: data
    }
}

export const addNewTask = (title: string, task: string) => {
    return {
        type: ADD_NEW_TASK,
        payload: {title, task}
    }
}

export const editTask = (prevTask: string, newTask: string, title: string) => {
    return {
        type: EDIT_TASK_NAME,
        payload: {prevTask, newTask, title}
    }
}

export const deleteTask = (taskItem: string, title: string) => {
    return {
        type: DELETE_TASK,
        payload: {taskItem, title}
    }
}

export const deleteList = (title: string) => {
    return {
        type: DELETE_LIST,
        payload: title
    }
}

export const changeTitle = (prevTitle: string, newTitle: string) => {
    return {
        type: CHANGE_TITLE,
        payload: {prevTitle, newTitle}
    }
}
