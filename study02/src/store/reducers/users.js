// const initData = {
//     name:'沐枫',
//     age: 28,
//     job: 'Web前端开发'
// }

// export default (state = initData, {type, payload}) => {
//     switch (type) {
//         case 'UPDATE':
            
//             return { ...state, payload}
//             break;
    
//         default:
//             return state
//             break;
//     }
// };

const users = {
    name: '沐枫',
    age: 28,
    job: 'Web 全栈'
};

export default (state = users, action) => {
    // console.debug('*********state中是上一次的状态(数据)', state);
    // console.debug('*********action中是将修改的对象，和要修改的新值', action);

    switch (action.type) {

        case 'ADD-USERS':
            // 修改数据：key相等就覆盖数据，其他保持不变！
            // return { ...state, ...action.data }

        case 'UP-USERS':
            // 修改数据：key相等就覆盖数据，其他保持不变！
            return {...state, ...action.data}

        default:
            return state;
    }

};