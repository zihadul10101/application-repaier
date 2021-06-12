import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = data => {
    console.log(data)
    const serviceData = {
      name: data.name,
      imageUrl: imageUrl,
      price: data.price
    };
    const url = `http://localhost:7000/addService`;

    console.log(serviceData);
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => res.json())
      .then(data => console.log(data))

  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set('key', '169c06cd08fc190c1c2dee2a05effaf1')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        // console.log(response.data.data.delete_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", textAlign: "center" }}>
        <h5 className="text-brand">Add a Service</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          Title:
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <br />
          <br />
          Price:
          <input {...register("price", { required: true })} />
          {errors.price && <span>This field is required</span>}
          <br />
          <br />
           Image:
          <input name="image" type="file" onChange={handleImageUpload} />
          {errors.image && <span>This field is required</span>}
          <br />
          <br />
          <input type="submit" />
        </form>

      </div>
    </section>
  );
};

export default AddService;