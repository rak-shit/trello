import Task from './Task'

interface ITaskProps {
    title: string
    task: string[]
}

function TaskList({ title, task }: ITaskProps) {
    return (
        <div>
            {task.map((taskItem: string) => {
                return (
                    <Task taskItem={taskItem} title={title} />
                )
            })}
        </div>
    )
}

export default TaskList