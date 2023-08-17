const counterReducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {counter: state.counter + 1}
        case 'dec':
            return {counter: state.counter - 1}
        case 'reset':
            return {counter: 0}
        default:
            return {counter: state.counter}
    }
}

export default counterReducer;