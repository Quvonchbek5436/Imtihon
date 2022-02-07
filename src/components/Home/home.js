import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faPen, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HomeStyle from "./HomeStyled";
import logo from '../../Images/Algorismik.png'
import dataObj from "../data/Data";
import {useNavigate} from "react-router-dom";
import { useState} from "react";




const Home = () => {
    const navigate=useNavigate();
    const [delData,setDelData]=useState(dataObj)


    const onClick =()=>{
        navigate("/add")
    }
    const onClick1 =()=>{
        navigate("/edit")
    }
    const onClick2 =(data,i)=>{
        console.log("salom")
        let delData=dataObj
           setDelData( delData.splice(i,1))

    }




    return (

           <div className="container">
               <HomeStyle>
                   <h1  className={"text-center h1"}>Mahsulotlar</h1>
                   <div className={"text-center addBtn"} onClick={onClick}><FontAwesomeIcon icon={faPlus} /></div>
                   <div className={"row"}>
                       {
                           dataObj.map((item,i) =>{
                               return(
                                   <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3 my-3" key={i}>
                                   <div className="img">
                                       <img className={"img-fluid"} src={item.imgUrl} alt="rasm"/>
                                       <div className="buttons d-flex gap-3">
                                           <button onClick={onClick1} className={"btn btn-outline-warning"}>
                                              <FontAwesomeIcon icon={faPen} />
                                           </button>
                                           <button onClick={onClick2} className={"btn btn-outline-danger"}>
                                               <FontAwesomeIcon icon={faTrashAlt} />
                                           </button>
                                       </div>
                                   </div>
                                   <h2 className={"text-center pt-3"} >{item.name}</h2>
                                   <p  className={"text-center "}>{item.price}</p>

                               </div>
                               )
                           })
                       }
                   </div>
                   <div className="chiziq my-4">

                   </div>
                   <div className="footer d-flex justify-content-center align-items-center mb-5">
                       <img src={logo} alt=""/>
                   </div>
               </HomeStyle>
           </div>

    );
};
export default Home;


