// 定义input的修改规则，并接收派发过来的形参
export const input = list => {
    return {
        type: 'add',
        list: list,
    };
};

// 定义状态修改的规则
export const change = index => {
    return {
        type: 'change',
        index: index,
    };
};

// 定义删除规则
export const delList = index => {
    return {
        type: 'delList',
        index: index,
    };
};
