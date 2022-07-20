import { ADD_NEW_LIST, ADD_NEW_TASK, CHANGE_TITLE, DELETE_LIST, DELETE_TASK, EDIT_TASK_NAME } from "../actions/types"

const initialState = {
    list: [
        {
            title: 'Default Name',
            taskList: ['Task 1', 'Task 2', 'Task 3']
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
                if (item.title === action.payload.title) {
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
                if (item.title === action.payload.title) {
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
                if (item.title === action.payload.title) {
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
                if (item.title === action.payload) {
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
            list.forEach((item: any, index: number) => {
                if (item.title === action.payload.prevTitle) {
                    item.title = action.payload.newTitle
                }
            })
            return {
                list
            }
        }
        default: return state
    }
}
