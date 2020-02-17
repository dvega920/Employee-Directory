import React from "react";

export default function Wrapper(props) {
    return (
        <div className="wrapper container">{props.children}</div>
    )
}