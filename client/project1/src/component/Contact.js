import React from "react";
import { Link } from "react-router-dom";
import location from "./Images/location.png";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import messagediv from "./Images/message-div.png";
import forwardarrow from "./Images/forward-arrow.png";
import contactcall from "./Images/contact_call.png";
import message from "./Images/message.png";
import contactdeliveryboy from "./Images/contact _delivery_boy.png";
import pickupkart1 from "./Images/pick.png";

const Contact = () =>{
    return(
        
    // <!-- Wrapper -->
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
                    class="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img9">
                    <div class="bg-[rgba(0,0,0,0.8)] z-50 w-full min-h-[380px] "></div>
                    <div
                        class="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                        <div class=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                            <p
                                class="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                                Contact Us</p>
                            <p class="font-ROBOTO text-[18px] font-semibold text-white"><span class="text-[#EAB54F]">Home 
                                </span>Contact us</p>
                        </div>
                    </div>
                </section>


                {/* <!-- Hero-2 --> */}
                <section class="w-full h-full relative mb-32">
                    <img src={rightannimation} class="absolute right-0 top-10 max-[1450px]:hidden" alt=""/>
                    <div class="w-[90%] h-full items-center mx-auto flex flex-col gap-20">
                        <div class="flex flex-row gap-3 w-full pt-16  max-[600px]:flex-col items-center">
                            <div class="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[40%] max-[600px]:border-none pb-16 max-[600px]:pb-10">
                                <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1 drop-shadow-lg shadow-black">
                                    <img src={contactcall} class="ml-[0.52rem]" width="20px" alt=""/>
                                </div>
                                <p class="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Call Us</p>
                                <p class="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">+ 91 7249174747 </p>
                                <p class="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">+ 91 7249174747 </p>
                            </div>
                            <div class="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[40%] max-[600px]:border-none pb-24 max-[600px]:pb-10">
                                <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1 drop-shadow-lg shadow-black">
                                    <img src={message} class="ml-[0.62rem]" alt=""/>
                                </div>
                                <p class="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Mail Us</p>
                                <p class="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">contact@pickupkart.in</p>
                            </div>
                            <div class="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[60%] max-[600px]:border-none  pb-8">
                                <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1 drop-shadow-lg shadow-black">
                                    <img src={location} class="ml-[0.82rem]" alt=""/>
                                </div>
                                <p class="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Location</p>
                                <p class="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px] text-center pr-3 pb-4 pl-4">Venus Express: Office address -<br/> 479, shaniwar peth,
                                    <br/>  kolhapur naka, karad</p>
                            </div>
                        </div>

             

                        <div class="w-full h-full flex flex-row items-center mt-20 justify-between max-[1280px]:mt-80">
                            <img src={contactdeliveryboy} class="pl-20 max-[1280px]:hidden" alt=""/>
                            <div class="relative w-full h-full -ml-28 max-[525px]:-ml-20"> 
                                <div class="bg-white  rounded-md border -mt-20 pt-9 pl-10 mr-[-500px] pb-7 lg:mx-auto w-[75%] absolute left-[20%] top-[-200px] max-[768px]:w-full  max-[600px]:-mt-[80px] max-[600px]:pl-2 max-[475px]:-mt-[120px]">
                                    <div class="flex flex-row items-center gap-4 pl-4">
                                        <div>
                                            <div class="w-[11px] h-[40px] bg-[#082161] max-[475px]:w-[10px] max-[475px]:h-[30px]"></div>
                                            <div class="w-[11px] h-[40px] bg-[#EAB54F] max-[475px]:w-[10px] max-[475px]:h-[30px]"></div>
                                        </div>
                                        <p class="text-[50px] font-ROBOTO font-semibold max-[475px]:text-[30px]">Get in Touch</p>
                                    </div>
                            
                            
                                    <div class="grid grid-rows-2 grid-cols-2 pt-3 gap-y-3 max-[475px]:gap-0 max-[475px]:pl-4 max-[525px]:flex max-[525px]:flex-col"> 
                                        <form class=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                            <input placeholder="First Name"
                                                     class="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                        </form>
                                        <form class=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                            <input placeholder="Last Name"
                                                     class="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                        </form>
                                        <form class=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                            <input placeholder="Mobile Number"
                                                     class="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                        </form>
                                        <form class=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                            <input placeholder="Email"
                                                     class="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                        </form>
                                        
                                        <form class=" bg-white px-1 max-[475px]:pl-0 pl-2 mt-2 mb-4">
                                            <input placeholder="Enter Your Message"
                                                class="pl-6 pt-4 pb-20 pr-60 py-10 max-[475px]:pr-16 max-[475px]:pl-2  max-[1280px]:pr-32 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm  max-[475px]:placeholder:text-xs " />
                                        </form>
                                    </div>
                            
                            
                                    <button  class="w-[155px] ml-5 mt-4 rounded-3xl h-[44px] bg-[#EAB54F] text-white text-[20px] max-[900px]:text-[16px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[13px] max-[768px]:w-[100px] max-[768px]:h-[35px]">Send</button>
                                </div>
                            
                                </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Map section --> */}
                {/* <iframe class="border-white max-[1280px]:mt-72" src=
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                                    width="100%"
                                    height="500"
                                    frameborder="0"
                                    style="border:0;"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                            </iframe> */}


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
                               <a href=""> <img src={fblogo} class="pl-[0.62rem]" alt=""/></a>
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
                        <Link class="text-[18px] font-medium font-ROBOTO" to="./About">About Us</Link>
                        <Link class="text-[18px] font-medium font-ROBOTO" to="./Services">Services</Link>
                        <Link class="text-[18px] font-medium font-ROBOTO" to="./Contact">Contact Us</Link>
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

export default Contact;