import React from 'react';

const ManageServiceLists = (props) => {
    const { name, price } = props.servicelist;
    return (
        <div className="container">
            <table class="table ">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>  <button className="btn-primary">Update</button><br />
                            <button className="btn-danger">Delete</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageServiceLists;