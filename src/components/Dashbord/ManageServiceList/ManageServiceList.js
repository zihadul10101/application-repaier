import React, { useContext } from 'react';
import { UserContext } from '../../../App';



const ManageServiceList = () => {
const [serviceDetails,setServiceDetails] =useContext(UserContext);
    console.log(serviceDetails);
    return (
        <div class="container">


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
                        <td>dd</td>
                        <td>yy</td>
                        <td>  <button className="btn-primary">Update</button><br /><button className="btn-danger">Delete</button> </td>
                       
                    </tr>
                   
                  
                </tbody>
            </table>
        </div>

    );
};

export default ManageServiceList;