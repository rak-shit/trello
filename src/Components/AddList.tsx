import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewList } from '../actions/actions'
import '../styles/addlist.css'

function AddList() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [taskName, setTaskName] = useState('')
    const [taskList, setTasks] = useState<any[]>([])

    function handleTitle(event: any) {
        setTitle(event.target.value)
    }
    function handleTaskName(event: any) {
        setTaskName(event?.target.value)
    }
    function handleTask() {
        setTasks((prev: any) => [...prev, taskName])
        setTaskName('')
    }
    function saveList() {
        const dataObj = {
            title: title,
            taskList: taskList,
            id: Date.now()
        }
        dispatch(addNewList(dataObj))
        setTitle('')
        setTasks([])
    }
    return (
        <div className='add-list'>
            <input style={{ padding: '5px' }} value={title} type={'text'} onChange={(event) => handleTitle(event)} placeholder={'Add title..'} data-testid="new-board-title" />
            {
                taskList.map((task) => {
                    return (<div style={{ margin: '10px 5px' }}>{task}</div>)
                })
            }
            <div className={'task-name'}>
                <div><input placeholder='Add task..' style={{ padding: '5px' }} value={taskName} type={'text'} onChange={(event) => handleTaskName(event)} data-testid="new-task-name" /></div>
                <div className={'save-task'}><button onClick={handleTask} disabled={taskName.length === 0} data-testid="new-task-add">Save Task</button></div>
            </div>
            <button disabled={taskList.length === 0 || title.length === 0} onClick={saveList} data-testid="new-board-add">Save List</button>
        </div>
    )
}

export default AddList