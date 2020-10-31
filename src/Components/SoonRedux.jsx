import React, { Component } from 'react';

class SoonRedux extends Component {
    state = {
        numSoon: 0,
    };

    render() {
        return (
            <div>
                <div className="end">
                    <div className="title">
                        <h1>已经完成</h1>
                        <div className="count">
                            <span id="doneCount">{this.state.numSoon}</span>
                        </div>
                    </div>
                    <ul id="donelist">
                        {this.props.list.map((item, index) => {
                            let { name, state } = item;
                            if (state === true) {
                                return (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            checked="checked"
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
                    </ul>
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
            if (v.state === true) {
                num++;
            }
        });
        return {
            numSoon: num,
        };
    }
}

export default SoonRedux;
