import React, { useEffect, useState } from 'react';
import BookingLists from '../BookingLists/BookingLists';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    console.log(bookingList);

    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])
    return (
        <section className="container-fluid row" style={{ textAlign: "center" }}>
            <Sidebar></Sidebar>
            <div className="col-md-10 container pr-2" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                
                    <table class="table ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Service Name</th>
                                <th>Service Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingList.map(list => <BookingLists list={list} key={list.name}></BookingLists>)
                            }
                        </tbody>
                    </table>
                
            </div>


        </section>
    );
};

export default BookingList;