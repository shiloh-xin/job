import React, { Component, createRef } from 'react';
import './index.css';
// 引入子组件
import Now from './Components/Now';
import Soon from './Components/Soon';

class todoList extends Component {
    constructor(props) {
        super(props);
        this.parent = createRef();
        this.change = this.change.bind(this);
        this.delList = this.delList.bind(this);
    }

    state = {
        list: [],
    };

    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-w w">
                        <div className="logo">
                            <h1>ToDoList</h1>
                        </div>
                        <div className="add">
                            <input
                                type="text"
                                id="title"
                                placeholder="添加ToDo"
                                onChange={this.onKeyDown.bind(this)}
                                ref={this.parent}
                            />
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="main-w w">
                        <Now
                            list={this.state.list}
                            change={this.change}
                            delList={this.delList}
                        ></Now>
                        <Soon
                            list={this.state.list}
                            change={this.change}
                            delList={this.delList}
                        ></Soon>
                    </div>
                </div>

                <footer>Copyright &copy; 2020 todolist.cn</footer>
            </div>
        );
    }

    getData() {
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
    saveData(data) {
        // 设定 localStorage data
        return localStorage.setItem('todolist', JSON.stringify(data));
    }
    // 键盘事件
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        this.setState(() => {
            return {
                list: this.getData(),
            };
        });
    }
    onKeyDown = e => {
        switch (e.keyCode) {
            case 13: //回车事件
                if (this.parent.current.value !== '') {
                    let obj = {
                        name: this.parent.current.value,
                        state: false,
                    };
                    this.setState(state => {
                        state.list.push(obj);
                        return state.list;
                    });
					
                    this.parent.current.value = '';
                    this.saveData(this.state.list);

                    break;
                }
        }
    };
    async change(index) {
        await this.setState(state => {
            state.list[index].state = !state.list[index].state;
            return state.list;
        });
        this.saveData(this.state.list);
    }

    delList(index) {
        this.state.list.splice(index, 1);
        this.saveData(this.state.list);
        let list = this.getData();
        this.setState(() => {
            return {
                list: list,
            };
        });
    }
}

export default todoList;
