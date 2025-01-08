import React from "react";
import { data, useNavigate } from "react-router-dom";

function AccountList({dataList}) {

    const navigate = useNavigate();

    function ratingStar(rating) {
        let stars = '';
        
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '★';
            } else {
                stars += '☆';
            }
        }
        return stars;
    }
    return (
        <>
            <div>
                <nav>
                    <button onClick={() => navigate("../")}>Home</button>
                </nav>
                <ul>
                    {
                        dataList.map((item, index) => ( 
                        <li key={index}> {item.title} - {ratingStar(item.rating)} - {item.comment || "Null"} </li> )
                    )}
                </ul>
            </div>
        </>
    );
}

export default AccountList;