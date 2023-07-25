import React from "react";
import { Link } from "react-router-dom";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import courier from "./Images/courier.png";
import courierservice1 from "./Images/courier service1.jpg";
import courierservice2 from "./Images/courier service2.jpg";
import courierservice3 from "./Images/courier service3.jpg";
import courierservice4 from "./Images/courier service4.jpg";
import courierservice5 from "./Images/courier service5.png";
import courierservice6 from "./Images/courier service 6.png";
import residentialmovers from "./Images/residential_movers.png";
import packinggoods from "./Images/packing_goods.png";
import messagediv from "./Images/message-div.png";
import storagesolution from "./Images/storage_solution.png";
import courierfast from "./Images/courier-fast.png";
import machinery from "./Images/machinery.png";
import documentspaper from "./Images/documents_paper.png";
import van from "./Images/van.png";
import forwardarrow from "./Images/forward-arrow.png";
import pickupkart1 from "./Images/pick.png";

const Services = () =>{
    return(
        // <!-- wrapper -->
    <section class="w-full h-full overflow-x-hidden">


        {/* <!-- Navbar --> */}
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
                           <a href=""> <img src={fblogo} class="pl-[0.62rem] max-[640px]:pl-[0.48rem]" alt=""/></a>
                        </div>
                        <div
                            class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                           <a href=""> <img src={instalogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                        <div
                            class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                           <a href=""> <img src={twitterlogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row gap-[4.5rem] ml-4 mr-8">
                    <Link class="text-[16px] text-white font-semibold  font-ROBOTO max-lg:hidden"
                        to="/">HOME</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/About">ABOUT
                        US</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/Services">SERVICES</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden pr-8" to="/Contact">CONTACT
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



        {/* <!-- Hero-1 --> */}
        <section
            class="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img7">
            <div class="bg-[rgba(0,0,0,0.5)] z-50 w-full min-h-[380px] "></div>
            <div
                class="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                <div class=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                    <p
                        class="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                        Our Services</p>
                    <p class="font-ROBOTO text-[18px] font-semibold text-white"><span class="text-[#EAB54F]">Home
                        </span> Services</p>
                </div>
            </div>
        </section>


        {/* <!-- Hero-2 --> */}
        <section class="w-full h-full relative"> 
            <img src={rightannimation} class="absolute right-0 top-16 max-[768px]:hidden" alt=""/>

            <div class="h-full w-[80%] mx-auto flex flex-col items-center pt-12 pl-4 gap-8 relative">
                <img src={courier} class="absolute top-10 left-0 max-[1024px]:hidden" width="150px"  alt=""/>
                
                <button
                class="text-[#EAB54F] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EAB54F] shadow-sm">Courier</button>

                    <p class="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px] pb-16">Our Courier Services For you</p>

                <div class="pb-8 flex flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:w-[90%] max-[768px]:mx-auto max-[768px]:items-center">
                    <div class="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice1} class="" height="223px" alt=""/>
                        
                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Door to Door Service</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-2">
                            Door to Door gescribes a shipping method where parcel is picked up to the door of the sender and deliverd to the 
                            reciver door.The shipment is collected from the sender and taken to the reciver.</p>
                       
                    </div>

                    <div class="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice2} class="" height="223px" alt=""/>

                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Express parcel services</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Our express parcel service available over 6000+ pincode in india . I can be handle each shipment up to 25 kg.
                            From same-day pickup to same-day ,next-day and 48 to 96 hours deliveries for all over india .
                            We transport your parcel safely via autherised courier partner.</p>
                       
                    </div>

                    <div class="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice3} class="" height="223px" alt=""/>
                        
                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Air carg</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Pickupkart is one of the best air cargo services in karad. Our air courier partner ensure the delivery of critical 
                            & priority shipment such as medicine and vaccines based on the customer needs .We always aim to provide quickest and most secure way to deliver goods anywhere in the country .</p>
                       
                    </div>
                </div>

                <div class="flex pb-28 flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:w-[90%] max-[768px]:mx-auto max-[768px]:items-center">
                    <div class="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice4} class="" height="223px" alt=""/>
                        
                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">LTL (less-than truck load)</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Pickupkart provide LTL freignt (bulk load) service for personal,Retailers ,E-commerce,Seller,Companies etc.</p>
                       
                    </div>

                    <div class="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice5} class="" height="223px" alt=""/>
                        
                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Ware House</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                    </div>

                    <div class="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] border rounded-md">
                        <img src={courierservice6} class="" height="223px" alt=""/>
                        
                        <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Supply Chain</p>
                        
                        <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Collaboratively customize front-end materials with standardized infomediaries</p>
                       
                    </div>
                </div>


            </div>
        </section>


        {/* <!-- Hero-3 --> */}
        <section class="w-full h-full bg-[url('')] bg-cover img6">
            <div  class="h-full w-[80%] mx-auto flex flex-col items-center pt-12 pl-4 gap-8 relative pb-20">
                                
                <button
                class="text-[#EAB54F] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EAB54F] shadow-sm">Delivery</button>

                    <p class="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px] pb-10">Our Delivery Services For you</p>

                    <div class="flex w-full flex-row gap-8 mx-auto items-center max-[768px]:flex-col max-[500px]:ml-[-15px] max-[425px]:ml-[-30px]">
                        <div class="w-[350px] h-[270px] flex flex-col shadow-md items-center mx-auto gap-4 bg-white pt-4 rounded-md border ">
                            <img src={residentialmovers} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Residential Movers</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div class="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={packinggoods} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Packaging Goods</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div class="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={storagesolution} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Storage Solution</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                    </div>

                    <div class="flex flex-row gap-8 mx-auto w-full max-[768px]:flex-col items-center max-[500px]:ml-[-15px] max-[425px]:ml-[-30px]">
                        <div class="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={courierfast} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Furniture Assets</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div class="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border shadow-md">
                            <img src={machinery} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Machinery Items</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div class="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={documentspaper} alt=""/>
                            <p class="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Documents Papers</p>
                        
                            <p class="pb-6 text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                    </div>
            </div>

        </section>


        {/* <!-- Above Footer --> */}
        <section
        class="w-full h-full bg-[url('')]  bg-cover bg-no-repeat relative img5">
        <img src={van} class="absolute right-0 bottom-0 max-[1200px]:hidden" alt=""/>
      
        <div class="flex flex-row justify-start text-white items-center pt-24 pb-12 max-[1200px]:justify-center max-[768px]:flex-col ">
            <div class="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span class="text-5xl text-white  font-bold">1.</span>
                <div class="flex flex-col gap-6 pl-3">
                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Apply Online</p>
                        
                    <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>
            <div class="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span class="text-5xl text-white  font-bold">2.</span>
                <div class="flex flex-col gap-6 pl-3">
                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Pack</p>
                        
                    <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>
            <div class="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span class="text-5xl text-white  font-bold">3.</span>
                <div class="flex flex-col gap-6 pl-3">
                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Delivery</p>
                        
                    <p class="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>

        </div>
    </section>


          {/* <!-- Footer Section --> */}
          <section class="relative">
              <div class="bg-[rgb(8,33,80,0.9)] z-0  w-full h-full absolute left-0 top-0 "></div>
              {/* <!-- Bottom part --> */}
              <div class="relative">
                <div class="bg-[rgb(8,33,80,0.9)] z-0  w-full h-full absolute left-0 top-0 "></div>
                <div class="bg-[url('')] mx-auto w-full h-full justify-start flex flex-col bg-no-repeat bg-cover gap-8 img4">
                <div class="flex z-[500] flex-row w-[70%] mx-auto gap-20  justify-between pt-12 max-[1024px]:gap-14 max-[1024px]:w-full max-[640px]:flex-wrap max-[640px]:justify-center max-[640px]:gap-24">

                    <div class="flex flex-col gap-5 w-[20%] max-[640px]:w-[30%]">
                        <div class="max-[1024px]:pl-2">
                            <div class="flex flex-row gap-8  mr-1 ">
                            <img src={pickupkart1} class="max-[640px]:-ml-5 -ml-3 max-[768px]:w-[160px]" width="200" alt=""/>
                                {/* <img src={venuslogoremovebg} alt=""/>
                                <div class="pt-1 pb-1 mr-6 -ml-6 bg-[#EAB54F]">
                                    <p class="font-ROBOTO text-[26px] tracking-widest font-bold max-[1024px]:text-[22px]">VENUS</p>
                                    <p class="text-[9px] font-semibold max-[1024px]:text-[8px]">EXPRESS & LOGISTICS</p>
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
                               <a href=""> <img src={instalogo} class="pl-[0.5rem]" alt=""/></a>
                            </div>
                            <div class="w-[30px] h-[28px] rounded-full bg-white flex items-center">
                                <a href=""><img src={twitterlogo} class="pl-[0.5rem]" alt=""/></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-1 text-white max-[1024px]:pl-8">
                        <p class="text-[24px] font-semibold font-ROBOTO pb-2">Explore</p>
                        <Link class=" text-[18px] font-medium font-ROBOTO" to="/">Home</Link>
                        <Link class="text-[18px] font-medium font-ROBOTO" to="/About">About Us</Link>
                        <Link class="text-[18px] font-medium font-ROBOTO text-[#EAB54F]" to="/Services">Services</Link>
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


                <div class="flex z-[500] flex-row w-[70%] mx-auto justify-between items-center pt-12 pr-16 max-[1024px]:w-full max-[1024px]:pl-1  max-[768px]:flex-col max-[768px]:w-full max-[768px]:mx-auto max-[768px]:gap-5 max-[768px]:pl-10 ">

                    <div class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                        <img src={messagediv} alt=""/>

                        <div class="text-center">
                            <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">Location</p>
                            <p class="text-white font-medium font-ROBOTO text-[18px] w-full text-center max-[640px]:text-[14px]">Karad</p>
                        </div>
                    </div>

                    <div class="flex flex-row gap-5 mx-auto items-center bg-[#00081D] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                        <img src={messagediv} alt=""/>

                        <div class="text-center">
                            <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">Email</p>
                            <p class="text-white font-medium font-ROBOTO text-[18px] max-[640px]:text-[14px]">contact@pickupkart.in</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-5 pr-32 pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                        <img src={messagediv} alt=""/>

                        <div class="text-center">
                            <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">Phone</p>
                            <p class="text-white font-medium font-ROBOTO text-[18px] w-full text-center max-[640px]:text-[14px]">+917249174747</p>
                        </div>
                    </div>
                    {/* <div class="flex flex-row gap-5 bg-[#00103A] pl-5 pt-2 pr-32 pb-1 max-[768px]:pt-5 max-[768px]:pb-5 max-[1024px]:pl-4 max-[1024px]:pr-28">
                        <img src={messagediv} alt=""/>

                        <div class="">
                            <p class="text-white font-semibold font-ROBOTO text-[22px] max-[640px]:text-[18px]">Phone</p>
                            <p class="text-white font-medium font-ROBOTO text-[18px] w-full max-[640px]:text-[14px]">+91 7249174747</p>
                        </div>
                    </div> */}
                </div>

                <div class="h-1 z-[500] bg-[#96431582] w-full"></div>

                <div class="text-white z-[500] font-medium font-ROBOTO text-[15px] pb-3 pl-[14rem] max-[1024px]:pl-[10rem] max-[768px]:pl-[4rem] max-[640px]:pl-[1rem]">
                    @ 2023 Venus Express & Logistics | Designed & developed by <span class="text-[#EAB54F]"> 5Tech Lab</span>
                </div>

            </div>  

            </div>  
            
        </section>

    </section>
    );
};

export default Services;