import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';


const Book = () => {
  const { _id } = useParams();
  // console.log(_id);
  const [chackOut, setCheckOut] = useState([]);
  // console.log(chackOut);
  useEffect(() => {
    fetch('http://localhost:7000/service')
      .then(res => res.json())
      .then(data => setCheckOut(data))
  }, [])

  const books = chackOut.find(pd => pd?._id === _id);
  // console.log(books);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  // console.log(loggedInUser);

  const onSubmit = () => {

    const client = {
      payment :orderSuccess,
      ...books,
      name: loggedInUser.name,
      email: loggedInUser.email,
      serviceName: books.name,
      servicePrice: books.price

    }
    delete client._id;
    fetch('https://guarded-shelf-32601.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
      .then(res => res.json())
      .then(data => {
        setOrderSuccess(data);
      })
    console.log(client);
  }
  const [orderSuccess,setOrderSuccess]=useState([]);
  console.log(orderSuccess);
  const handlePaymentSuccess = paymentId => {
 
    const bookingDetails = {
      paymentId,
      orderTime: new Date()
    
    };   
  
  }
 
 

  return (
    <section className="container-fluid row pt-5">
      <Sidebar></Sidebar>
      <div className="row"  >
        <div className="col-md-8 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
          <h2>About You</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name", { required: true })} Value={loggedInUser.name} placeholder="Your Name" />
            {errors.name && <span>This field is required</span>}
            <br />
            <br />
            <input {...register("email", { required: true })} Value={loggedInUser.email} placeholder="Your Email" />
            {errors.email && <span>This field is required</span>}
            <br />
            <br />
            <input {...register("service", { required: true })} Value={books?.name} placeholder="Your Service Name" />
            {errors.service && <span>This field is required</span>}
            <br />
            <br />
            <input {...register("price", { required: true })} Value={books?.price} placeholder="Your Service Price" />
            {errors.price && <span>This field is required</span>}


            <input type="submit" />

          </form>

        </div>
        <div className="col-md-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }} >
          <h2 classNam="btn-danger">ProcessPayment Pay for me </h2>
          <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        </div>
      </div>
    </section>
  );
};

export default Book;