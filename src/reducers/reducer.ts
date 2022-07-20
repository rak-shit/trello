import { ADD_NEW_LIST, ADD_NEW_TASK, CHANGE_TITLE, DELETE_LIST, DELETE_TASK, DRAG_DROP, EDIT_TASK_NAME } from "../actions/types"

interface ListProps {
    title: string
    taskList: string[],
    id: number
}
interface IInitialStateProps {
    list: ListProps[]
}

const initialState: IInitialStateProps = {
    list: [
        {
            title: 'Default Name',
            taskList: ['Task 1', 'Task 2', 'Task 3'],
            id: Date.now()
        }
    ]
}

export const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_NEW_LIST: {
            return {
                list: [...state.list, action.payload]
            }
        }
        case ADD_NEW_TASK: {
            let list = [...state.list]
            list.forEach((item: any) => {
                if (item.id === action.payload.id) {
                    let newTaskList = [...item.taskList]
                    newTaskList.push(action.payload.task)
                    item['taskList'] = newTaskList
                }
            })
            return {
                list
            }
        }
        case EDIT_TASK_NAME: {
            let list = [...state.list]
            list.forEach((item: any) => {
                if (item.id === action.payload.id) {
                    let newTaskList = [...item.taskList]
                    const index = newTaskList.indexOf(action.payload.prevTask)
                    if (index !== -1) {
                        newTaskList[index] = action.payload.newTask
                        item['taskList'] = newTaskList
                    }
                }
            })
            return {
                list
            } 
        }
        case DELETE_TASK: {
            let list = [...state.list]
            list.forEach((item: any) => {
                if (item.id === action.payload.id) {
                    let newTaskList = [...item.taskList]
                    const index = newTaskList.indexOf(action.payload.taskItem)
                    if (index !== -1) {
                        newTaskList.splice(index, 1)
                        item['taskList'] = newTaskList
                    }
                }
            })
            return {
                list
            }
        }
        case DELETE_LIST: {
            let list = [...state.list]
            let key = 0
            list.forEach((item: any, index: number) => {
                if (item.id === action.payload) {
                    key = index
                }
            })
            list.splice(key, 1)
            return {
                list
            }
        }
        case CHANGE_TITLE: {
            let list = [...state.list]
            list.forEach((item: any) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.newTitle
                }
            })
            return {
                list
            }
        }
        case DRAG_DROP: {
            let list = [...state.list]
            list.forEach((item: any) => {
                if (item.id === action.payload.removeBoardId) {
                    let newTaskList = [...item.taskList]
                    const index = newTaskList.indexOf(action.payload.taskItem)
                    if (index !== -1) {
                        newTaskList.splice(index, 1)
                        item['taskList'] = newTaskList
                    }
                }
            })
            list.forEach((item: any) => {
                if (item.id === action.payload.addBoardId) {
                    let newTaskList = [...item.taskList]
                    newTaskList.splice(action.payload.taskId, 0, action.payload.taskItem)
                    item['taskList'] = newTaskList
                }
            })
            return {
                list
            }
        }
        default: return state
    }
}
