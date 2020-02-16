import React from "react"
import "./style.css"

export default function EmployeeCard(props) {
    return (
        <div className="card p-3">
            <h1>{props.children}</h1>
        </div>
    )
}