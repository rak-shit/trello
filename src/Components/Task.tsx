import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../actions/actions'
import '../styles/list.css'

interface ITaskProps {
    taskItem: string
    id: number
    handleDragging: (dragging: boolean) => void
    handleUpdate: (deleteBoardId: number, taskData: string, newBoardId: number, taskId: number) => void
    taskId: number
}

function Task({taskItem, id, handleDragging, handleUpdate, taskId}: ITaskProps) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState<boolean>(false)
    const [editTaskName, setEditTaskName] = useState<string>('')

    function handleEdit(taskItem: string) {
        setEdit((edit) => !edit)
        setEditTaskName(taskItem)
    }

    function handleEditTaskName(event: any) {
        setEditTaskName(event.target.value)
    }

    function handleSave() {
        setEdit((edit) => !edit)
        dispatch(editTask(taskItem, editTaskName, id))
    }
    function handleDelete(taskItem: string) {
        dispatch(deleteTask(taskItem, id))
    }
    function handleDragEnd() {
        handleDragging(false)
    }
    function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
        event.dataTransfer.setData('card', `${taskItem}-${id}`)
        handleDragging(true)
    }
    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }
    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        const data = event.dataTransfer.getData('card').split('-')
        handleUpdate(Number(data[1]), data[0], id, taskId)
        handleDragging(false)
    }
    return (
        <div 
            className={'list-item'} 
            draggable={true} 
            onDragEnd={handleDragEnd} 
            onDragStart={(event) => handleDragStart(event)} 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {
                edit ?
                    (
                        <>
                            <input data-testid={`input-${taskItem}`} style={{ padding: '8px', border: 'none', borderRadius: '5px' }} type={'text'} value={editTaskName} onChange={(event) => handleEditTaskName(event)} />
                            <div className='task-action'>
                                <button data-testid={`save-${taskItem}`} onClick={handleSave}>Save</button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <span className='task-item'>{taskItem}</span>
                            <div className='task-action'>
                                <button className='task-item' data-testid={`edit-${taskItem}`} onClick={() => handleEdit(taskItem)}>Edit</button>
                                <button className='task-item' data-testid={`${taskItem}`} onClick={() => handleDelete(taskItem)}>Delete</button>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default Task