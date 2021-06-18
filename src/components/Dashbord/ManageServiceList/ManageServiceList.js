import React, { useContext, useState } from 'react';
import { ServiceContext } from '../../../App';
import ManageServiceLists from '../ManageServiceLists';



const ManageServiceList = () => {
    const [serviceDetails, setServiceDetails] = useContext(ServiceContext);
    // console.log(serviceDetails);
    const [products, setProducts] = useState([]);
    const deleteProduct = (_id) => {

        fetch('http://localhost:7000/deleteProduct/' + _id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((result) => {

                const newProducts = products.filter((product) => product._id !== _id);
                setProducts(newProducts);
            });

    }


    return (
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        {/* <th scope="col">Update</th> */}
                        <th scope="col">Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        serviceDetails.map(servicelist => <ManageServiceLists deleteProduct={deleteProduct} servicelist={servicelist} key={servicelist.name}></ManageServiceLists>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServiceList;