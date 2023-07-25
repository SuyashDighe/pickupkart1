import React from "react";
import { Link } from "react-router-dom";
import blacklocation from "./Images/black_location.png";
import bottompersonbg from "./Images/bottom-person-bg.png";
import call from "./Images/call.png";
import clock from "./Images/clock.png";
import corner from "./Images/corner.png";
import courier from "./Images/courier.png";
import delivarygoodsimg from "./Images/delivary-goods-img.png";
import delivarytruck from "./Images/delivary-truck.png";
import Ellipse29 from "./Images/Ellipse 29.png" 
import fblogo from "./Images/fb-logo.png";
import footerimg from "./Images/footer-img.png";
import forwardarrow from "./Images/forward-arrow.png";
import homedelivery1 from "./Images/home delivery 1.png";
import homedelivery2 from "./Images/home delivery2.png";
import homeservice1 from "./Images/home service 1.jpg";
import homeservice2 from "./Images/home service 2.png";
import homeservice3 from "./Images/home service 3.png";
import homebanner from "./Images/home-banner.jpg";
import home from "./Images/home.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import instalogo from "./Images/insta-logo.png";
import Line4 from "./Images/Line 4.png";
import locationbg from "./Images/location_bg.jpg";
import leftarrow from "./Images/left-arrow.png";
import locationdiv from "./Images/location-div.png";
import location from "./Images/location.png";
import messagediv from "./Images/message-div.png";
import message from "./Images/message.png";
import parcel from "./Images/parcel.png";
import personimgbottom from "./Images/person-img-bottom.png";
import personimg from "./Images/person-img.png";
import phonediv from "./Images/phone-div.png";
import report from "./Images/report.png";
import rightannimation from "./Images/right-annimation.png";
import rightarrow from "./Images/right-arrow.png";
import Star1 from "./Images/Star 1.png";
import rupees from "./Images/rupees.png";
import testimonialsbg from "./Images/testimonials-bg.png";
import testimonialslogo from "./Images/testimonials-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import Vectorright from "./Images/Vector_right.png";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import venuslogo from "./Images/venus-logo.png";
import whiteclock from "./Images/white_clock.png";
import whiteparsal from "./Images/white_parcel.png";
import whitereport from "./Images/white_report.png"
import "./processbar.css";
import { useState } from "react";
import axios from "axios";
import pickupkart1 from "./Images/pick.png";
import { useNavigate } from "react-router-dom";
const Parsal = () => {
    const[parcelinfo,setparcelinfo]=useState({
        parcelsize:"",
        category:"",
        subcategory:"",

      })
      
      const handleChange = (e)=>{
        setparcelinfo(prev=>({...prev,[e.target.name]:e.target.value}))
      };
      const navigate= useNavigate();
      console.log(parcelinfo)
      const handleClick = async e =>{
        e.preventDefault()
        try{
         // await axios.post("http://localhost:8700/books",parcelinfo)
          //const id=book.id;
          var parceldetail={parcelsize:parcelinfo.parcelsize,category:parcelinfo.category,subcategory:parcelinfo.subcategory}
          console.log(parceldetail);
          window.sessionStorage.setItem("parcelDetail",JSON.stringify(parceldetail));
         navigate("/Schedule")
          //window.location="/Schedule";
          alert("data updated ")
          
          
        }catch(err){
          console.log(err)
        }
    
      }

      var pickupaddress=JSON.parse(sessionStorage.getItem("pickupDetail"));
      var dropaddress=JSON.parse(sessionStorage.getItem("deliveryDetail"));

      const AllData={pickupcontactname:pickupaddress.pickupcontactname,pickupcontactno:pickupaddress.pickupcontactno,pickupemail:pickupaddress.pickupemail,pickuphouse:pickupaddress.pickuphouse,pickuparea:pickupaddress.pickuparea,pickuppin:pickupaddress.pickuppin,pickupcity:pickupaddress.pickupcity,pickupstate:pickupaddress.pickupstate,dropcontactname:dropaddress.dropcontactname,dropcontactno:dropaddress.dropcontactno,dropemail:dropaddress.dropemail,drophouse:dropaddress.drophouse,droparea:dropaddress.droparea,droppin:dropaddress.droppin,dropcity:dropaddress.dropcity,dropstate:dropaddress.dropstate}
    return(
        <section class="w-full h-full overflow-x-hidden">

        {/* <!-- navbar --> */}
        <section class="w-full h-full bg-[#EAB54F]">
            <div class="h-[91px] w-[93%] mx-auto flex flex-row justify-between items-center">
                <div class="flex flex-row gap-6 items-center max-[640px]:gap-2">
                <img src={pickupkart1} class="max-[640px]:-ml-5 -ml-3 max-[768px]:w-[160px]" width="200" alt=""/>
                    {/* <img src={venuslogoremovebg} class="max-[640px]:-ml-5" alt=""/>
                    <div class="pt-1 pb-1 -ml-4 max-[640px]:-ml-1 mr-2">
                        <p class="font-ROBOTO text-[26px] tracking-widest font-bold max-[640px]:text-[22px]">VENUS</p>
                        <p class="text-[9px] font-semibold max-[640px]:text-[7px]">EXPRESS & LOGISTICS</p>
                    </div> */}
                    <div class="flex flex-row gap-4 items-center max-[640px]:gap-2">
                        <div
                            class="w-[30px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[28px]  rounded-full bg-white flex items-center">
                            <a href=""><img src={fblogo} class="pl-[0.62rem] max-[640px]:pl-[0.48rem]" alt=""/></a>
                        </div>
                        <div
                            class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                            <a href=""><img src={instalogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                        <div
                            class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                            <a href=""><img src={twitterlogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row gap-[4.5rem] ml-4 mr-8">
                    <Link class="text-[16px] text-white font-semibold  font-ROBOTO max-lg:hidden" to="/">HOME</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/About">ABOUT US</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/Services">SERVICES</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden pr-8"
                        to="/Contact">CONTACT
                        US</Link>
                        <img id="hamgurgerBtn" src={icons8hamburger} height="50px" class="lg:hidden" alt="" onClick={()=>{
                let hiddenSection = document.querySelector("#hamburger");
                let hamburgerButton = document.querySelector("#hamburgerBtn");
                hiddenSection.classList.toggle("active");
              }}/>
                </div>
            </div>
            {/* <!-- Hamburger section --> */}
            <div class="hidden " id="hamburger" >
                <div class="w-full h-full bg-transparent flex flex-col pl-12 pb-5 gap-10">
                    <Link class="text-[16px] mt-5 text-white font-semibold font-ROBOTO" to="/">HOME</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO" to="/About">ABOUT US</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO" to="/Services">SERVICES</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO pr-8" to="/Contact">CONTACT US</Link>
                </div>
              </div>
        </section>


        {/* <!-- Delivary Steps section --> */}
        <div class="Delivery">
            <div class="inner-div">

                <div class="max-[640px]:gap-8 flex-div">

                    <div class="one">
                        <div>
                            <div class="shape location max-[640px]:w-10 max-[640px]:h-10">
                                <img class="icon-1 max-[640px]:top-[23%] max-[640px]:left-[29%] max-[640px]:w-[0.9rem]"
                                    src={location} width="16px" alt=""/>
                            </div>
                            <p class="font-medium text-black">Location</p>
                        </div>


                        <div class="horizontal-line max-[640px]:w-[50px]">

                        </div>
                    </div>





                    <div class="one">
                        <div>

                            <div class="shape parcel max-[640px]:w-10 max-[640px]:h-10 bg-[#EAB54F]">
                                <img class="icon-1 z-30 max-[640px]:top-[28%] max-[640px]:left-[29%] max-[640px]:w-[1.1rem]"
                                    src={whiteparsal} width="20px" alt=""/>
                            </div>
                            <p class="para-1 text-[#00000080]">Parcel</p>
                        </div>

                        <div class="horizontal-line max-[640px]:w-[50px]">
                            <hr/>
                        </div>


                    </div>

                    <div class="one middle">
                        <div>

                            <div class="shape date max-[640px]:w-10 max-[640px]:h-10">
                                <img class="icon-1 max-[640px]:top-[28%] max-[640px]:left-[29%] max-[640px]:w-[1.1rem]"
                                    src={clock} width="20px" alt=""/>
                            </div>
                            <p class="para-1 text-[#00000080]">Date</p>

                        </div>
                        <div class="horizontal-line max-[640px]:w-[50px]">
                            <hr/>
                        </div>


                    </div>

                    <div class="one middle">
                        <div>

                            <div class="shape report max-[640px]:w-10 max-[640px]:h-10">
                                <img class="icon-1 max-[640px]:top-[25%] max-[640px]:left-[29%] max-[640px]:w-[1.1rem]"
                                    src={report} width="20px" alt=""/>
                            </div>
                            <p class="para-1 text-[#00000080]">Report</p>
                        </div>
                    </div>


                </div>
            </div>




        </div>

        {/* <!-- absolute left-56 pt-24 --> */}
        {/* <!-- Form section with bg --> */}
        <section class="w-full relative bg-[url('')] h-[960px] img1" >

            <div class="flex flex-row gap-12 pl-8 max-[475px]:pl-3 w-[70%]  mx-auto pt-24 max-[1400px]:w-[100%] max-[768px]:flex-col max-[768px]:pt-2 max-[1024px]:items-center max-[475px]:pt-10 align-top">


                <div class="flex flex-col pl-10 pt-3 gap-y-2 pb-20 max-[768px]:pb-10 max-[475px]:gap-0 max-[1024px]:pr-20 max-[1024px]:pl-6  bg-white rounded-xl border shadow-lg max-[475px]:pl-6 max-[475px]:pr-12 pr-24 max-[768px]:mt-0">
                    <p class="pt-5 max-[768px]:pt-2 pb-8 pl-2 text-2xl font-ROBOTO text-[#EAB54F]">Parcel Details</p>

                    <label class="text-xl font-ROBOTO" for="">Parcel Size</label>


                    <form class="  pl-0 max-[475px]:pl-0 px-1  mb-4 relative">
                        <img src={Vectorright}
                            class="absolute right-7 max-[768px]:top-4 top-5 max-[1024px]:right-8" alt=""/>
                        {/* <input type="select" onChange={handleChange} placeholder="Enter Weight (In kg or Gram)" class="pl-6 pr-64 py-3 max-[768px]:py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 
                             transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[475px]:placeholder:text-xs " name="parcelsize"/> */}

                              <select onChange={handleChange}
                              class="pl-6 pr-64 py-3 max-[768px]:py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 
                              transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline- 
                               lightBlue placeholder:text-base max-[475px]:placeholder:text-xs " 
                              name="parcelsize">
                                <option value="0">Select Parcel Size</option>
                                <option value="less than 250 gm">0 to 250 gm</option>
                                <option value="250 gm+">250 gm to 1 kg</option>
                                <option value="less than 10 kg">1 kg to 10 kg</option>
                                <option value="10 kg+">10 kg +</option>
                                

                              </select>

                    </form>
                    <label class="text-xl font-ROBOTO" for="">Category</label>

                    <form class="  pl-0 max-[475px]:pl-0 px-1  mb-4 relative">
                        <img src={Vectorright}
                            class="absolute right-7 max-[768px]:top-4 top-5 max-[1024px]:right-8" alt=""/>
                        {/* <input type="select" onChange={handleChange} placeholder="Type category(Document or Parcel)" class="pl-6 pr-64 py-3  max-[768px]:py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12  
                        transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline- 
                        lightBlue placeholder:text-base max-[475px]:placeholder:text-xs " name="category"/> */}

                        <select onChange={handleChange}
                        class="pl-6 pr-64 py-3  max-[768px]:py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12  
                        transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline- 
                        lightBlue placeholder:text-base max-[475px]:placeholder:text-xs "
                        name="category">
                            <option value="0">Select Category</option>
                            <option value="Document">Document</option>
                            <option value="Parcel">Parcel</option>
                
                        </select>
                    </form>

                    <label class="text-xl font-ROBOTO" for="">Sub Category</label>
                    <form class="  pl-0 max-[475px]:pl-0 px-1  mb-4 relative">
                        <input type="select" onChange={handleChange} placeholder="Select sub category" class="pl-6 pr-64 py-3  max-[768px]:py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12  
                                transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline- 
                                 lightBlue placeholder:text-base max-[475px]:placeholder:text-xs " name="subcategory"/>
                    </form>

<Link to="/Schedule">
    <button onClick={handleClick}
                        class="w-[460px] max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                             [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]">Next</button>

</Link>
                    



                </div>
                <div class="flex flex-col pr-6 bg-white border max-[1024px]:ml-7  max-[1024px]:pb-8 shadow-lg gap-14 pl-7 rounded-xl max-[1400px]:mr-8 max-[475px]:pl-3 ">
                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px] pt-8">Order Summary
                    </p>

                    <div class="flex flex-row gap-5">
                        <div>
                            <img src={Ellipse29} width="18px" alt=""/>
                            <img src={Line4}
                                class="h-[5rem] max-[888px]:h-24 max-[768px]:h-20 min-[1401px]:h-28 pl-2" alt=""/>
                            <img src={blacklocation} alt=""/>
                        </div>

                        <div class="flex flex-col gap-5">


                            <div>
                                <p class="text-[18px] font-ROBOTO font-bold  max-[640px]:text-[18px]">Pickup Address
                                </p>
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[12px]">
                                {AllData.pickuphouse},{AllData.pickuparea},{AllData.pickupcity},{AllData.pickupstate},{AllData.pickuppin}.<br/>{AllData.pickupcontactname}|{AllData.pickupcontactno}
                                    {/* Chandni chauk, newdelhi,
                                    newdelhi, 473110. <br/> John doe | 598575244 */}
                                    </p>
                            </div>
                            <div>
                                <p class="text-[18px] font-ROBOTO font-bold  max-[640px]:text-[18px]">Delivery
                                    Address</p>
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[12px]">
                                {AllData.drophouse},{AllData.droparea},{AllData.dropcity},{AllData.dropstate},{AllData.droppin}.<br/>{AllData.dropcontactname}|{AllData.dropcontactno}
                                    {/* Chandni chauk, newdelhi,
                                    newdelhi, 473110. <br/> John doe | 598575244 */}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        {/* <!-- Footer Section --> */}
        <section>

            {/* <!-- Bottom part --> */}
            <div class="relative">
            <div class="bg-[rgb(8,33,80,0.9)] z-0  w-full h-full absolute left-0 top-0 "></div>
                <div
                    class="bg-[url('')] mx-auto w-full h-full justify-start flex flex-col bg-no-repeat bg-cover gap-8 img2">
                    <div
                        class="flex z-[500] flex-row w-[70%] mx-auto gap-20  justify-between pt-12 max-[1024px]:gap-14 max-[1024px]:w-full max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:gap-24">

                        <div class="flex flex-col gap-5 w-[20%] max-[640px]:w-[30%]">
                            <div class="max-[1024px]:pl-2">
                                <div class="flex flex-row gap-8 mr-1 ">
                                <img src={pickupkart1} class="max-[640px]:-ml-5 -ml-3 max-[768px]:w-[160px]" width="200" alt=""/>
                                    {/* <img src={venuslogoremovebg} alt=""/>
                                    <div class="pt-1 pb-1 mr-6 -ml-6 bg-[#EAB54F]">
                                        <p
                                            class="font-ROBOTO text-[26px] tracking-widest font-bold max-[1024px]:text-[22px]">
                                            VENUS</p>
                                        <p class="text-[9px] font-semibold max-[1024px]:text-[8px]">EXPRESS & LOGISTICS
                                        </p>
                                    </div> */}
                                </div>
                            </div>

                            <div class="text-white font-ROBOTO max-[1024px]:pl-2 max-[640px]:w-[130%]">
                                We make the things you need arrive on time. You focus on what you need to do.
                            </div>

                            <div class="flex flex-row items-center gap-3 max-[1024px]:pl-2">
                                <div class="w-[30px] h-[28px] rounded-full bg-white flex items-center">
                                    <a href=""><img src={fblogo} class="pl-[0.62rem]" alt=""/></a>
                                </div>
                                <div class="w-[30px] h-[28px] rounded-full bg-white flex items-center">
                                    <a href=""><img src={instalogo} class="pl-[0.5rem]" alt=""/></a>
                                </div>
                                <div class="w-[30px] h-[28px] rounded-full bg-white flex items-center">
                                    <a href=""><img src={twitterlogo} class="pl-[0.5rem]" alt=""/></a>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1 text-white max-[1024px]:pl-8">
                            <p class="text-[24px] font-semibold font-ROBOTO pb-2">Explore</p>
                            <Link class="text-[#EAB54F] text-[18px] font-medium font-ROBOTO" to="/">Home</Link>
                            <Link class="text-[18px] font-medium font-ROBOTO" to="/About">About Us</Link>
                            <Link class="text-[18px] font-medium font-ROBOTO" to="/Services">Services</Link>
                            <Link class="text-[18px] font-medium font-ROBOTO" to="/Contact">Contact Us</Link>
                        </div>

                        <div>
                            <p class="text-[24px] font-semibold font-ROBOTO text-white pb-2">Subscribe</p>
                            <form class="relative mt-2 mb-4">
                                <div class="absolute w-[50px] h-[50px] rounded-full bg-black right-0">
                                    <img src={forwardarrow} class="pt-4 pl-4" alt=""/>
                                </div>
                                <input placeholder="Your Email Address"
                                    class="pl-4  py-3 pr-24 transition-all duration-200 border border-gray-200 shadow-md rounded-[2rem] font-mullish outline-lightBlue placeholder:text-sm " />
                            </form>
                        </div>

                    </div>


                    <div
                        class="flex z-[500] flex-row w-[70%] mx-auto justify-between items-center pt-12 pr-16 max-[1024px]:w-full max-[1024px]:pl-1  max-[768px]:flex-col max-[768px]:w-full max-[768px]:mx-auto max-[768px]:gap-5 max-[768px]:pl-10 ">

                        <div
                            class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                            <img src={messagediv} alt=""/>

                            <div class="text-center">
                                <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">
                                    Location</p>
                                <p
                                    class="text-white font-medium font-ROBOTO text-[18px] w-full text-center max-[640px]:text-[14px]">
                                    Karad</p>
                            </div>
                        </div>

                        <div
                            class="flex flex-row gap-5 mx-auto items-center bg-[#00081D] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                            <img src={messagediv} alt=""/>

                            <div class="text-center">
                                <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">
                                    Email</p>
                                <p class="text-white font-medium font-ROBOTO text-[18px] max-[640px]:text-[14px]">
                                    contact@pickupkart.in</p>
                            </div>
                        </div>
                        <div class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                        <img src={messagediv} alt=""/>

                        <div class="text-center">
                            <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">Phone</p>
                            <p class="text-white font-medium font-ROBOTO text-[18px] w-full text-center max-[640px]:text-[14px]">+917249174747</p>
                        </div>
                    </div>

                        {/* <div
                            class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-2 pr-32 pb-1 max-[768px]:pt-5 max-[768px]:pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                            <img src={messagediv} alt=""/>

                            <div class="">
                                <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">
                                    Phone</p>
                                <p
                                    class="text-white font-medium font-ROBOTO text-[18px] w-full max-[640px]:text-[14px]">
                                    +91 7249174747</p>
                            </div>
                        </div> */}
                    </div>

                    <div class="h-1 bg-[#96431582] w-full"></div>

                    <div
                        class="text-white font-medium font-ROBOTO text-[15px] pb-3 pl-[14rem] max-[1024px]:pl-[10rem] max-[768px]:pl-[4rem] max-[640px]:pl-[1rem]">
                        We make the things you need arrive on time. You focus on what you need to do.
                    </div>

                </div>
            </div>
        </section>

    </section>
    );
};

export default Parsal;