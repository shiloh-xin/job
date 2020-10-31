import React, { Component } from 'react';

class Now extends Component {
    state = {
        numNow: 0,
    };

    render() {
        return (
            <div>
                <div className="start">
                    <div className="title">
                        <h1>正在进行</h1>
                        <div className="count">
                            <span id="todoCount">{this.state.numNow}</span>
                        </div>
                    </div>
                    <ol id="todolist" className="demo-box">
                        {this.props.list.map((item, index) => {
                            let { name, state } = item;
                            if (state == false) {
                                return (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            onChange={this.clickHandler.bind(
                                                this,
                                                index
                                            )}
                                        />
                                        <p>{name}</p>
                                        <a href="#" id="">
                                            <div
                                                className="del"
                                                onClick={this.del.bind(
                                                    this,
                                                    index
                                                )}
                                            >
                                                ×
                                            </div>
                                        </a>
                                    </li>
                                );
                            }
                        })}
                    </ol>
                </div>
            </div>
        );
    }
    clickHandler(index) {
        this.props.change(index);
    }
    del(index) {
        this.props.delList(index);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let num = 0;
        nextProps.list.forEach((v, k) => {
            if (v.state === false) {
                num++;
            }
        });
        return {
            numNow: num,
        };
    }
}

export default Now;
