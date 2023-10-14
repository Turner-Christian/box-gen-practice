import React from "react";

const Display = (props) => {
    const { boxsArr } = props;

    return (
        <div style={{display: 'flex',
        width: '50%',
        flexWrap: 'wrap',
        border: '2px solid black',
        justifyContent: 'space-evenly'}}>
            {
                boxsArr.map((box, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        backgroundColor: box.color,
                        width: `${box.size}rem`,
                        height: `${box.size}rem`,
                        margin: '5px'
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;