import React from "react";
import "./style.css";

export default function EmployeeCard(props) {
    return (
        <div className="card mt-4">
            <table>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{props.id}</td> */}
                        <td className="avatar"><img alt={props.name} src={props.image} /></td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.dob}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}