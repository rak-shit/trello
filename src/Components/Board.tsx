import { useEffect, useState } from 'react'
import AddList from './AddList'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import { dragDrop } from '../actions/actions'

function Board() {
    const list = useSelector((state: any) => state.listReducer)
    const dispatch = useDispatch()
    const [addList, setAddList] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    function toggleAddlist() {
        setAddList((prevValue) => !prevValue)
    }

    function handleDragging(dragging: boolean) {
        setIsDragging(dragging)
    }

    function handleUpdate(newTaskId: number, taskData: string, presentTaskId: number) {
        if (newTaskId !== presentTaskId) {
            dispatch(dragDrop(newTaskId, presentTaskId, taskData))
        }
    }
    
    useEffect(() => {
        setAddList(false)
    }, [list.list.length])
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', alignContent: 'flex-start' }}>
            {
                list.list.map((item: any) => {
                    return (
                        <List 
                            item={item}
                            isDragging={isDragging}
                            handleDragging={handleDragging}
                            handleUpdate={handleUpdate}
                        />
                    )
                })
            }
            <div style={{ padding: '1rem 0rem' }}>
                {
                    addList ? (
                        <div>
                            <AddList />
                        </div>
                    ) : (
                        <div style={{ marginLeft: 15 }}>
                            <button style={{ fontSize: '30px', borderRadius: '50%', border: 'none', cursor: 'pointer' }} onClick={toggleAddlist} data-testId="add-list">+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Board