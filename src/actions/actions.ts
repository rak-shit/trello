import { ADD_NEW_LIST, ADD_NEW_TASK, CHANGE_TITLE, DELETE_LIST, DELETE_TASK, DRAG_DROP, EDIT_TASK_NAME } from "./types"

export const addNewList = (data: {title: string, taskList: string[], id: number}) => {
    return {
        type: ADD_NEW_LIST,
        payload: data
    }
}

export const addNewTask = (id: number, task: string) => {
    return {
        type: ADD_NEW_TASK,
        payload: {id, task}
    }
}

export const editTask = (prevTask: string, newTask: string, id: number) => {
    return {
        type: EDIT_TASK_NAME,
        payload: {prevTask, newTask, id}
    }
}

export const deleteTask = (taskItem: string, id: number) => {
    return {
        type: DELETE_TASK,
        payload: {taskItem, id}
    }
}

export const deleteList = (id: number) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}

export const changeTitle = (id: number, newTitle: string) => {
    return {
        type: CHANGE_TITLE,
        payload: {id, newTitle}
    }
}

export const dragDrop = (removeBoardId: number, addBoardId: number, taskItem: string, taskId: number) => {
    return {
        type: DRAG_DROP,
        payload: {removeBoardId, addBoardId, taskItem, taskId}
    }
}
