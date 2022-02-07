import React from 'react';
import EditStyle from "./EditStyle";
import {NavLink} from "react-router-dom";
import dataObj from "../data/Data";
import { useForm } from "react-hook-form";


function Edit() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dataObj.push(data)
    };
    const back = () => {

    }
    const save = () => {

    }

    return (
        <div className={"container"}>
            <EditStyle>
            <h1 className={"h1 text-center"}>O’zgartirish</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className={"row mb-3 "}>
                        <div className="col-6"><input   placeholder='Mahsulot rasmi' {...register("imgUrl", { required: true })} /></div>
                        <div className="col-6"><input  placeholder='Mahsulot nomi' {...register("name", { required: true })} /></div>
                        <div className="col-6"><input  placeholder='Mahsulot narxi' {...register("price", { required: true })} /></div>
                    </div>
                    <input className={"w-25"} type="submit" />


                </form>

                <div className='button'>
                    <button className={"btn "}><NavLink to={"/"}>Orqaga Qaytish</NavLink></button>
                <button  className={"btn "}><NavLink to={"/"}>Qo'shish</NavLink></button>
                </div>

            </EditStyle>
        </div>
    );
}

export default Edit;