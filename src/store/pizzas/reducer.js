export const pizzas = (state=[], action) => {
    switch (action.type) {
        case 'INIT':
            return action.payload;
        default: 
            if(action.type.includes('@@redux')) return state;
            throw new Error('Type is not defined');
    }
}

