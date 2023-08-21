import React, { Component } from "react";

const Book =props=>{
    return(
        <div className="App">
            <h4>book : {props.bookName}</h4>
            <h3>writer : {props.writer}</h3>
        </div>
    )
}

export default Book;