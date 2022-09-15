import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 10, name: 'Ненужная вещь'},
        {id: 1, value: 15, name: 'Ложка'},
        {id: 2, value: 20, name: 'Вилка'},
        {id: 3, value: 25, name: 'Тарелка'},
        {id: 4, value: 30, name: 'Набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter((counter) => counter.id !== id);
        console.log(newCounters)
        setCounters(newCounters)
    };
    const handleReset = () => {
        setCounters(initialState)
    };
    const handleIncrement = (id) => {
        //    setValue((prevState) => prevState + 1);
        console.log('click Increment')
    };
    const handleDecrement = (id) => {
        setCounters((newValue) => newValue.find((counter) => counter.id === id).value - 1)


        // prevState => prevState.value - 1
        // const updatedValue = counters.reduce((counter) => counter.value - 1)
        // const updatedValue = counter.value + value);
        // setCounters(updatedValue);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    )
}

export default CountersList;