import React, { Fragment } from 'react';

const complaintItem = (props) => {
    return (
        <Fragment>
            <tbody>
                <tr>
                    <td className="left-Align">{props.item.department}</td>
                    <td className="left-Align">{props.item.issueId}</td>
                    <td className="left-Align">{props.item.assignedTo}</td>
                    <td className="left-Align">{props.item.status}</td>
                </tr>
            </tbody>
        </Fragment>
    )
}
export default complaintItem;