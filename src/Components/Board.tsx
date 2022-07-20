import { useEffect, useState } from 'react'
import AddList from './AddList'
import { useSelector } from 'react-redux'
import List from './List'

function Board() {
    const list = useSelector((state: any) => state.listReducer)
    const [addList, setAddList] = useState(false)
    function toggleAddlist() {
        setAddList((prevValue) => !prevValue)
    }
    useEffect(() => {
        setAddList(false)
    }, [list.list.length])
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {
                    list.list.map((item: any) => {
                        return (
                            <div data-testid={`board-list-${item.title}`}>
                                <List item={item} />
                            </div>
                        )
                    })
                }
            </div>
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