import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*
class Square extends React.Component {
    // constructor was deleted because Square no longer keeps track of game's state.
    // Square is now a "controlled component", the board has full control over it

    render() {
        return ( // dont forget lambda or it will run every reload
        // when button is clicked, react calls onClick event defind in render method, which calls the prop
        // onClick prop could be named anything, but in react its convention to use on[Event] and handle[Event] names
        <button className="square" onClick={() => { this.props.onClick() } }> 
            {this.props.value}
        </button>
        );
    }
}
*/ 

// square is replaced with a function component since it now only has a render method
// note that this.props is changed to props
function Square(props) {
    const divStyle = props.isHighlight ? { color: 'red' } : {}
    return (
        <button className="square" onClick={props.onClick} style={divStyle}>
            {props.value}
        </button>
    );
}

  
class Board extends React.Component {
    /*
    constructor(props) {
        super(props); // all react components have a constructor with a super(props) call
        this.state = {
          squares: Array(9).fill(null),
          isXNext: true,
        };
    }
    */

    renderSquare(i) {
        return ( // add brackets so js doesnt insert a semicolon here
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                isHighlight={this.props.isHighlight}
            />
        );
    }
  
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                x: 0,
                y: 0,                
            }],
            isXNext: true,
            stepNumber: 0,
        };
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1); // thorw away future
        const current = history[history.length - 1];
        const squares = current.squares.slice(); // creates a copy of the array instead of modifying it
        // this will allow us to save previous turns, and then go back to them, common requirement
        // immutability allows the creation of "pure components" with shouldComponentUpdate() for optimizing performance
        if (calculateWinner(squares) || squares[i]) {
            return;
        }        
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ // concat doesnt mutate the original array
                squares: squares,
                x: (i % 3) + 1,
                y: Math.floor(i / 3) + 1,
            }]),
            stepNumber: history.length,
            isXNext: !this.state.isXNext,
        });
    }

    jumpTo(step) {
        // we dont update history here, leave it is as is
        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move (' + step.x + ',' + step.y + ')':
                'Go to game start';
            const style = this.state.stepNumber === move ? { fontWeight: 'bold' } : {};

            return (
                // items in a list need a unique key
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} style={style}>{desc}</button>
                </li>
            );
        });

        let status; 
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (this.state.stepNumber === 9) {
            status = 'A tie!';
        } else {
            status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        isHighlight={winner}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return i;
        }
    }
    return null;
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  