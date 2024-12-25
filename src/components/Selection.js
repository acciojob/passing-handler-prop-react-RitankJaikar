import React, { useState } from 'react';

export default function Selection({applyColor, nextBackground}) {
    const [background, setBackground] = useState("");

    function handleClick() {
        setBackground(nextBackground.background);
    }
    
    return (
        <div className="fix-box" style={{height: "120px", width: "120px", border: "1px solid black", margin: "10px", background: background}} onClick={handleClick}>
            <h2>Selection</h2>
        </div>
    )
}