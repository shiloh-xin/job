const defaultState = {
    // 默认数据源应该是从localStorage中获取，如果localStorage为null，则此时会返回一个空数据，反之则为localStorage中的数据
    list: getData(),
};

// 处理数据
function reducer(state = defaultState, action) {
    // 修改action的数据（处理数据）
    if (action.type === 'add') {
        // 定义一个变量存储action的形参并拼接到副本state中
        let newList = state.list.concat(action.list);
        saveData(newList);
        // 浅拷贝（解决redux数据改变但页面不刷新的问题）
        return Object.assign(
            {},
            {
                list: [...newList],
            }
        );
    }
    if (action.type === 'change') {
        // 用获取到的索引，将状态取反
        state.list[action.index].state = !state.list[action.index].state;
        let newList = state.list;
        saveData(newList);
        return Object.assign(
            {},
            {
                list: [...newList],
            }
        );
    }

    if (action.type === 'delList') {
        // 根据action传来的索引删除对应的数据
        state.list.splice(action.index, 1);
        let newList = state.list;
        saveData(newList);
        return Object.assign(
            {},
            {
                list: [...newList],
            }
        );
    }
    return state;
}

// 从localStorage中获取数据
function getData() {
    var data = localStorage.getItem('todolist');
    // 获取localStorage的数据
    if (data !== null) {
        // 如果不等于null 返回一个还原的JSON格式的data
        return JSON.parse(data);
    } else {
        // 如果等于null 返回一个空数组
        return [];
    }
}

// 将数据存储进localStorage
function saveData(data) {
    // 设定 localStorage data
    return localStorage.setItem('todolist', JSON.stringify(data));
}

export default reducer;
