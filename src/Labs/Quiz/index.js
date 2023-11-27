import React, {UseState} from 'react';
function Quiz() {
    const URL = "localhost:4000/api/quiz";
    const handleClick = (parameter = "Hello") => {
        console.log(parameter);
    }
    console.log('***********')
    const alice = {first: 'Alice', last: 'Wonderland', salary: 100000};
    alice.salary += 10000;
    //alice['salary'] = alice.[salary] +  10000;
    alice['salary'] = alice.salary +  10000;
    alice.salary = alice['salary'] +  10000;
    console.log(alice);
    console.log('***********')
    const a = [1, 2, 3]
    /*const e = [4, ...a]
    const [f] = e*/
    const e = [...a, 4]
    const [f] = e
    console.log(f)
    console.log(f)

    return (
        <div>
            <button onClick={handleClick("Hello")}>
                Hello1
                </button>
                <button onClick={() => {handleClick("Hello")}}>
                Hello2
                </button>
                <button onClick={handleClick}>
                Hello3
                </button>
        </div>
    )
}

export default Quiz;