import React, {UseState} from 'react';
function Quiz() {
    const handleClick = (parameter = "Hello") => {
        console.log(parameter);
    }
    console.log('***********')
    const alice = {first: 'Alice', last: 'Wonderland', salary: 100000};
    alice.salary += 10000;
    
    alice['salary'] = alice.salary +  10000;
    alice.salary = alice['salary'] +  10000;
    console.log(alice);
    console.log('***********')
    return (
        <div>
            <button onClick={handleClick("Hello")}>
                Hello
                </button>
                <button onClick={() => {handleClick("Hello")}}>
                Hello
                </button>
                <button onClick={handleClick}>
                Hello
                </button>
        </div>
    )
}

export default Quiz;