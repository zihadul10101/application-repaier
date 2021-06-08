import React from 'react';
import ManageServiceList from '../ManageServiceList/ManageServiceList';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <ManageServiceList></ManageServiceList>
            </div>
        </section>
    );
};

export default ManageService;