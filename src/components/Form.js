import React, { useState } from "react";

const Form = (props) => {
    const { boxsArr, setBoxsArr } = props;
    const [ color, setColor] = useState('');
    const [ size, setSize] = useState('8');
    const [ err, setErr ] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxsArr(
            [...boxsArr,
                {
                    color: color,
                    size: size,
                }
            ]
        )
        setColor('');
    }

    const clear = (e) => {
        e.preventDefault();
        setBoxsArr([]);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Color: </label>
                <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} />
            </div>
            <div>
                <label>Width: </label>
                <input type="number" value={size} onChange={(e) => { setSize(e.target.value) }} />
            </div>
            <div>
                <input type="submit" />
            </div>
            <div>
                <button onClick={clear}>Clear</button>
            </div>
        </form>
    )
}

export default Form;