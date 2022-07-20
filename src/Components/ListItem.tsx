import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../actions/actions'

function ListItem(item: any) {
    console.log(item)
    const dispatch = useDispatch()

    const [task, setNewTask] = useState('')
    function handleAddNewTask(event: any) {
        setNewTask(event.target.value)
    }

    function newTask() {
        dispatch(addNewTask(item.title, task))
    }
    return (
        <div className={'list-item'}>
            <h3>
                {item.title}
            </h3>
            <div>
                {
                    item.taskList.map((task: any) => {
                        return <div>{task}</div>
                    })
                }
            </div>
            <div>
                <input type={'text'} onChange={(event) => handleAddNewTask(event)} />
                <button onClick={newTask}>Add Task</button>
            </div>
        </div>
    )
}

export default ListItem