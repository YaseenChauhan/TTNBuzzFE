import React, { Fragment } from 'react';

const resolveComplaint = (props) => {
    const status = ['Pending', 'Resolved', 'Assigned'];
    const handleChange = (event, item) => {
        item.status = event.target.value;
        props.changeComplaintStatus(item)
    }
    return (
        <Fragment>
            <tbody key={props.index}>
                <tr>
                    <td className="left-Align">{props.item.department}</td>
                    <td className="left-Align">{props.item.issueId}</td>
                    <td className="left-Align">{props.item.assignedTo}</td>
                    <td className="left-Align">
                        <select name={"status"}
                            className="form-control"
                            onChange={(event) => { handleChange(event, props.item) }}>
                            <option value={props.item.status}>{props.item.status}</option>
                            {status.filter(i => {
                                return i !== props.item.status
                            }).map((ele, index) => {
                                return <option value={ele} key={index}>{ele}</option>
                            })}
                        </select>

                    </td>
                </tr>
            </tbody>
        </Fragment>
    );
}
export default resolveComplaint;