import React, {useState} from 'react';
import axios from "axios";
function Quiz() {
    const URL = "http://localhost:4000/api/quiz";
    const sayHello = async () => {
        const response = await axios.get(URL);
        console.log(response.data);
    }

    return (
        <div>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Quiz;