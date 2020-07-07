import createDataContext from './createDataContext'

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [...state, { title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

const addPosts = (dispatch) => {
    return () => {
        dispatch({type: 'add'})
    }
}

export const { Context, Provider} = createDataContext(reducer, { addPosts }, [])