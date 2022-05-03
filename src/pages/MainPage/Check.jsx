import React from "react";

const Check = ({value, onCheck}) => {
    
    return (
        <div className="search">
            <label htmlFor="crypt">Criptografado? </label>
            <input type="checkbox" name="crypt" id="crypt" checked={value} onChange={onCheck} />

        </div>
    )
}

export default Check