import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <button onClick={() => navigate("../Account-List")}>Account List</button>
            </div>
        </>
    )

}

export default Button;