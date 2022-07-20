import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask, changeTitle, deleteList } from '../actions/actions'
import '../styles/list.css'
import TaskList from './TaskList'

interface ItemProps {
    title: string
    taskList: string[]
    id: number
}

interface IListProps {
    item: ItemProps
}

function List({ item }: IListProps) {
    const dispatch = useDispatch()

    const [task, setNewTask] = useState('')
    const [newName, setNewName] = useState(item.title)
    const [edit, setEdit] = useState(false)
    function handleAddNewTask(event: any) {
        setNewTask(event.target.value)
    }

    function newTask() {
        setNewTask('')
        dispatch(addNewTask(item.id, task))
    }

    function deleteBoard() {
        dispatch(deleteList(item.id))
    }

    function handleNameChange() {
        setEdit((edit) => !edit)
    }

    function handleNameText(event: any) {
        setNewName(event.target.value)
    }

    function handleSaveNewTitle() {
        setEdit(false)
        dispatch(changeTitle(item.id, newName))
    }

    return (
        <div className='list'>
            {
                edit ? (
                    <div className='title-edit'>
                        <input data-testid={`edit-title-${item.title}`} type={'text'} value={newName} onChange={(event) => handleNameText(event)} />
                        <button  data-testid={`save-title-${item.title}`} disabled={newName.length === 0} onClick={handleSaveNewTitle} className='save-title'>Save Title</button>
                    </div>
                ) : (
                    <>
                        <h3 onClick={handleNameChange} data-testId={`board-title-${item.title}`}>
                            {item.title}
                        </h3>
                    </>
                )
            }
            <div>
                <TaskList id={item.id} task={item.taskList} />
            </div>
            <div style={{ display: 'flex', margin: '0px 20px' }}>
                <input data-testid={`new-task-${item.title}`} value={task} placeholder='Add a new task...' type={'text'} onChange={(event) => handleAddNewTask(event)} style={{ padding: '8px', border: 'none', borderRadius: '5px' }} />
                <button disabled={task.length === 0}  data-testid={`save-new-task-${item.title}`} style={{ marginLeft: 'auto', fontSize: '15px' }} onClick={newTask}>+</button>
            </div>
            <div style={{ marginTop: 10 }} onClick={deleteBoard} data-testId={`delete-list-${item.title}`}>
                <button>Delete List</button>
            </div>
        </div >
    )
}

export default List