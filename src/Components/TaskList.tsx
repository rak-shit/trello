import Task from './Task'

interface ITaskProps {
    task: string[]
    id: number
}

function TaskList({ task, id }: ITaskProps) {
    return (
        <div>
            {task.map((taskItem: string) => {
                return (
                    <Task taskItem={taskItem} id={id} />
                )
            })}
        </div>
    )
}

export default TaskList