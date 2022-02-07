import React, {useState} from 'react';
import AddStyle from "./AddStyle";
import {NavLink} from "react-router-dom";
import dataObj from "../data/Data";
import {useForm} from "react-hook-form";

const Add=()=> {
    const [dataMap,setDataMap]=useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = (dataMap) => {
        if(dataMap.imgUrl===""||dataMap.name===""||dataMap.price==="") return
        setDataMap(dataObj.push(dataMap))
        console.log(dataMap)
    };


    return (
        <div className={"container"}>
            <h1 className={"h1 text-center"}>Qo'shish</h1>
            <AddStyle>

                <div className="inputs  ">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className={"row mb-3 "}>
                            <div className="col-6"><input   placeholder='Mahsulot rasmi' {...register("imgUrl", { required: true })} /></div>
                            <div className="col-6"><input  placeholder='Mahsulot nomi' {...register("name", { required: true })} /></div>
                            <div className="col-6"><input  placeholder='Mahsulot narxi' {...register("price", { required: true })} /></div>
                        </div>
                        <input className={"w-25"} type="submit" />


                    </form>

                </div>
                <div className="buttons">
                    <button className={"btn "}><NavLink to={"/"}>Orqaga Qaytish</NavLink></button>
                    <button  className={"btn "}><NavLink to={"/"}>Qo'shish</NavLink></button>
                </div>
            </AddStyle>
        </div>
    );
}

export default Add;