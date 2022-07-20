import Task from './Task'

function TaskList({ title, task }: any) {
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