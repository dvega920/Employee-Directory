import React from "react";

export default function Title(props) {
    return (
        <div className="jumbotron text-center">
            <h1>{props.children}</h1>
        </div>
    )
}
