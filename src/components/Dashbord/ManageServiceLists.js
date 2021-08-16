import React from 'react';

const ManageServiceLists = (props) => {
    const deleteProduct=props.deleteProduct;
    const { name, price,_id } = props.servicelist;
    return (        
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        {/* <td>  <button className="btn-primary">Update</button> </td> */}
                        <td><button onClick={()=> deleteProduct(_id) } className="btn-danger">Delete</button> </td>
                    </tr>
    );
};

export default ManageServiceLists;