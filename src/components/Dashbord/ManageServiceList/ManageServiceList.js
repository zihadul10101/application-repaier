import React, { useContext } from 'react';
import { ServiceContext} from '../../../App';
import ManageServiceLists from '../ManageServiceLists';



const ManageServiceList = () => {
const [serviceDetails,setServiceDetails] =useContext(ServiceContext);
    // console.log(serviceDetails);
    return (
        <div class="container">



            {
                serviceDetails.map(servicelist => <ManageServiceLists servicelist={servicelist} key={servicelist.name}></ManageServiceLists>)
            }


          
        </div>

    );
};

export default ManageServiceList;