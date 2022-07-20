import React from 'react'
import Task from './Task'
interface ITaskProps {
    task: string[]
    id: number
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdate: (newTaskId: number, taskData: string, presentTaskId: number) => void
}

function TaskList({ task, id, isDragging, handleDragging, handleUpdate }: ITaskProps) {
    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }
    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        const data = event.dataTransfer.getData('card').split('-')
        handleUpdate(Number(data[1]), data[0], id)
        handleDragging(false)
    }
    return (
        <div 
            className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {task.map((taskItem: string) => {
                return (
                    <Task taskItem={taskItem} handleDragging={handleDragging} id={id} />
                )
            })}
        </div>
    )
}

export default TaskList