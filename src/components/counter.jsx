import React from "react";

const Counter = (props) => {
    const {value} = props;

    const formatValue = () => {
        return value === 0 ? <h1>empty</h1> : value
    };
    const getBadgeClasses = () => {
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes;
    }
    let classes = 'badge m-2 ';

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                className={'btn btn-primary m-2'}
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className={'btn btn-primary m-2'}
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    )
};

export default Counter;