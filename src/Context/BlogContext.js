import createDataContext from './createDataContext'

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [...state, { id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content }]
        case 'delete':
            return state.filter((post) => post.id !== action.payload)
        default:
            return state
    }
}

const addPosts = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add', payload: { title, content }})
        callback()
    }
}

const deletePost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete', payload: id})
    }
}

export const { Context, Provider} = createDataContext(reducer, { addPosts, deletePost }, [])