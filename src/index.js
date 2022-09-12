import React from "react";
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";

const container = document.getElementById('root')
const root = createRoot(container);


const App = () => {
    return <Counter/>;
}

root.render(<App/>);