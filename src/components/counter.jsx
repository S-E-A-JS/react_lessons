import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const formatCount = () => {
        return count === 0 ? <h1>empty</h1> : count
    };
    const getBadgeClasses = () => {
        classes += count === 0 ? 'bg-warning' : 'bg-primary'
        return classes;
    }
    let classes = 'badge m-2 ';

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    }
    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);
    }
    return (
        <>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className={'btn btn-primary m-2'} onClick={handleIncrement}>+</button>
            <button className={'btn btn-primary m-2'} onClick={handleDecrement}>-</button>
        </>
    )
};

export default Counter;