import React, { useState } from "react";

function Forms( {onSubmit} ) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!title || title === null) {
            console.log("Null");
        } 
        onSubmit ({title, rating, comment});
        setTitle("");
        setRating(0);
        setComment("");
        

    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required>

                    </input>
                    <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                        <option value="0" disabled>Rate</option>
                        <option key="1" value="1">1</option>
                        <option key="2" value="2">2</option>
                        <option key="3" value="3">3</option>
                        <option key="4" value="4">4</option>
                        <option key="5" value="5">5</option>

                    </select>
                    <textarea value={comment} placeholder="Optional" onChange={(e) => setComment(e.target.value)}>

                    </textarea>
                    <button type="submit"> Send </button>
                </form>
            </div>
        </>
    );
}

export default Forms;