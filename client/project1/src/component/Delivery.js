import React from "react";
import cross from "./Images/cross.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Delivery = () =>{
    const[dropaddress,setdropaddress]=useState({
        dropcontactname:"",
        dropcontactno:"",
        dropemail:"",
        drophouse:"",
        droparea:"",
        droppin:"",
        dropcity:"",
        dropstate:"",

      })
      
      const handleChange = (e)=>{
        setdropaddress(prev=>({...prev,[e.target.name]:e.target.value}))
      };

      console.log(dropaddress)
      const navigate= useNavigate();
      const handleClick = async e =>{
        e.preventDefault()
        try{
          //await axios.post("http://localhost:8700/books",dropaddress)
          //const id=book.id;
          var deliveryDetail={dropcontactname:dropaddress.dropcontactname,dropcontactno:dropaddress.dropcontactno,dropemail:dropaddress.dropemail,drophouse:dropaddress.drophouse,droparea:dropaddress.droparea,droppin:dropaddress.droppin,dropcity:dropaddress.dropcity,dropstate:dropaddress.dropstate}
          console.log(deliveryDetail);
          window.sessionStorage.setItem("deliveryDetail",JSON.stringify(deliveryDetail));
          //window.location="/Location";
          navigate("/Location")
          alert("data updated ")
          
          
        }catch(err){
          console.log(err)
        }
    
      }

    return(
        <section class="w-full h-full">
        <div class="max-w-[650px] mx-auto h-full border rounded-lg pb-8">
            <div class="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center rounded-t-md bg-[#EAB54F]">
                <p class="text-white ">Add delivery Address</p>
                <img src={cross} alt="" onClick={()=>{
                        navigate("/Location");
                        //window.location="./Location";
                    }}/>
            </div>

            <div class="grid grid-rows-4 grid-cols-2 mb-[-15px]">
                <div class="pl-6 pt-4">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Contact Name</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="Ajay Namdev"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcontactname"/>

                    </form>
                </div>
                
                <div class="pl-6 pt-4">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Mobile Number</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="8823005847"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcontactno"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Email Address</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="test@example.com"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropemail"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Flat , House no. , Apartment</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="201 karmakhedi"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="drophouse"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Area Street</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="Ruthiyai Near Bridge"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="droparea"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">Pincode</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="473110"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="droppin"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">City</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="Guna"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcity"/>

                    </form>
                </div>

                <div class="pl-6">
                    <label class="text-xl font-ROBOTO max-[680px]:text-base" for="">State</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                        
                        <input type="text" onChange={handleChange} placeholder="Madhya Pradesh"
                            class="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0 
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropstate"/>

                    </form>
                </div>
              
            </div>

            <Link class="pl-20 mb-24 max-[1024px]:pl-44  max-[475px]:pl-40" to="/Location">
                <button  onClick={handleClick}
                                    class="w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                     [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]">Add delivery address</button>
            
        </Link>
        </div>
    </section>
    );

};

export default Delivery;