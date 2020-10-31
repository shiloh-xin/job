import React, { Component, createRef } from 'react';
import NowRedux from './Components/NowRedux';
import SoonRedux from './Components/SoonRedux';
import './index.css';

// 引入actions
import * as actions from './Store/actions/action_todulist';
import { connect } from 'react-redux';

class toduListRedux extends Component {
    constructor(props) {
        super(props);
        this.parent = createRef();
    }

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
                        <NowRedux
                            list={this.props.list}
                            change={this.props.change}
                            delList={this.props.delList}
                        ></NowRedux>
                        <SoonRedux
                            list={this.props.list}
                            change={this.props.change}
                            delList={this.props.delList}
                        ></SoonRedux>
                    </div>
                </div>

                <footer>Copyright &copy; 2020 todolist.cn</footer>
            </div>
        );
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }
    // 键盘事件
    onKeyDown = e => {
        switch (e.keyCode) {
            case 13: //回车事件
                if (this.parent.current.value !== '') {
                    let obj = {
                        name: this.parent.current.value,
                        state: false,
                    };
                    this.parent.current.value = '';
                    // 调用redux方法，将input接收到的对象以形参方式传入
                    this.props.input(obj);
                    break;
                }
        }
    };
}

// 获取数据
const mapStateToProps = state => {
    return {
        list: state.list,
    };
};

// 派发修改
const mapDispatchToProps = dispatch => {
    return {
        // 这里接收的是input输入框接收的数据
        input(obj) {
            // 派发给action去描述如何处理
            dispatch(actions.input(obj));
        },
        // 改变状态的方法
        change(index) {
            dispatch(actions.change(index));
        },
        // 删除对应的todo数据
        delList(index) {
            dispatch(actions.delList(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toduListRedux);
