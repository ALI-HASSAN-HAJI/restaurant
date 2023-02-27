import React, {useState} from 'react';

const Hello = () => {

    const [text, setText] = useState(" ");
    return(
        <div>
            <button onClick={() => setText("WEll and you")}>click here:</button>
        </div>
    )
}

export default Hello;