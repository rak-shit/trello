import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask, changeTitle, deleteList } from '../actions/actions'
import '../styles/list.css'
import TaskList from './TaskList'
function List({ item }: any) {
    const dispatch = useDispatch()

    const [task, setNewTask] = useState('')
    const [newName, setNewName] = useState(item.title)
    const [edit, setEdit] = useState(false)
    function handleAddNewTask(event: any) {
        setNewTask(event.target.value)
    }

    function newTask() {
        dispatch(addNewTask(item.title, task))
    }

    function deleteBoard() {
        dispatch(deleteList(item.title))
    }

    function handleNameChange() {
        setEdit((edit) => !edit)
    }

    function handleNameText(event: any) {
        setNewName(event.target.value)
    }

    function handleSaveNewTitle() {
        setEdit(false)
        dispatch(changeTitle(item.title, newName))
    }

    return (
        <div className='list'>
            {
                edit ? (
                    <div className='title-edit'>
                        <input type={'text'} value={newName} onChange={(event) => handleNameText(event)} />
                        <button disabled={newName.length === 0} onClick={handleSaveNewTitle} className='save-title'>Save Title</button>
                    </div>
                ) : (
                    <>
                        <h3 onClick={handleNameChange}>
                            {item.title}
                        </h3>
                    </>
                )
            }
            <div>
                <TaskList title={item.title} task={item.taskList} />
            </div>
            <div style={{ display: 'flex', margin: '0px 20px' }}>
                <input placeholder='Add a new task...' type={'text'} onChange={(event) => handleAddNewTask(event)} style={{ padding: '8px', border: 'none', borderRadius: '5px' }} />
                <button style={{ marginLeft: 'auto', fontSize: '15px' }} onClick={newTask}>+</button>
            </div>
            <div style={{ marginTop: 10 }}>
                <button onClick={deleteBoard}>Delete List</button>
            </div>
        </div >
    )
}

export default List