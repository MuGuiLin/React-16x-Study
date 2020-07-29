
class CreateStore {

    constructor(countReducer) {
        this.countReducer = countReducer;
        this.state = 0;
        this.update = [];
        this.dispatch({
            type: '@@redux/INIT8.w.6.n.6.0.c'
        });
    };

    getState() {
        return this.state;
    };

    dispatch(action) {
        this.state = this.countReducer(this.state, action);

        this.update.forEach(element => {
            element();
        });

        return action;
    };

    subscribe(classBack) {
        this.update.push(classBack);
        return () => {
            this.update.length = 0;
        }
    };
    
}

function classCreateStore(countReducer) {
    return new CreateStore(countReducer)
}


export default classCreateStore;
