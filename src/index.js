import React from "react";
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./app";

const container = document.getElementById('root')
const root = createRoot(container);

root.render(<App/>);

/*
* вызвать в counter.jsx onIncrement и onDecrement
* которые нужно передать через props
* эти методы нужно реализовать в countersList
* и эти методы должны обновлять значение value в состоянии counters
*
* */