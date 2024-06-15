import axios from "axios";
import React from "react";




const DeleteBtn = props => {
    const { pirateId, successCallback } = props;

    const deletePirate = (req, res) => {
        axios.delete('http://localhost:8000/api/pirates/'+ pirateId)
            .then( successCallback() )
            .catch(err => console.log("There was an error deleting pirate", err));
    };

    return (
        <button className="delete-button" onClick={ deletePirate }>
            Walk the plank
        </button>
    )
}

export default DeleteBtn;