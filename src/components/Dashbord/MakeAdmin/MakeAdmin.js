import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;

        fetch("https://guarded-shelf-32601.herokuapp.com/addAdmin", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((res) => {
                alert("Admin added");
            });
    };



    return (
        <section className="container-fluid row" style={{ textAlign: "center" }}>
            <Sidebar></Sidebar>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add Admin</h1>
                <input {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <br />

                <input className="btn btn-primary" type="submit" />
            </form>
        </section>
    );
};

export default MakeAdmin;