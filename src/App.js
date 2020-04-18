import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    你点击了{this.props.n}
                </div>
                <div>
                    <button onClick={() => this.props.add1()}>+1</button>
                    <button onClick={() => this.props.add2()}>+2</button>
                    <button onClick={()=>this.props.minus()}>-1</button>
                    <button onClick={() => this.props.add3(this.props.n)}>如果是单数就+1</button>
                    {/*<button onClick={() => this.props.add4()}>两秒后+1</button>*/}
                </div>
            </div>
        );
    }
}

function x(state) {
    return {
        n: state.n
    }
}

const y = {
    add1: () => {
        return {
            type: 'add', payload: 1
        }
    },
    add2: () => {
        return {type: 'add', payload: 2}
    },
    minus: () => {
        return {
            type: 'minus', payload: 1
    }
    },
    add3: (n) => {
        console.log(n);
        if (n% 2 === 1) {
            return {type: 'add', payload: 1}
        }else{
            return {type: 'add', payload: 0}
        }
    },
    add4: () => {
        setTimeout(() => {
            return {type: 'add', payload: 1}
        }, 3000)
    }
};
export default connect(x, y)(App);
