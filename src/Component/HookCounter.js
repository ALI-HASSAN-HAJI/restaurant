import React, {useState} from 'react';

const HookCounter = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
        <h1>Practice of Hooks using useState</h1>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter;