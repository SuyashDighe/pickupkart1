import React from "react";
import { Link } from "react-router-dom";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import messagediv from "./Images/message-div.png";
import forwardarrow from "./Images/forward-arrow.png";
import aboutcourier from "./Images/about courier.jpg";
import protectionright from "./Images/protection_right.png";
import leftannimation from "./Images/left_annimation.png";
import missiontruck from "./Images/mission_truck.png";
import missionsurprise from "./Images/mission_surprise.png";
import missionfront from "./Images/mission_front.jpg";
import missionback from "./Images/mission_back.png";
import femaleprofile from "./Images/female_profile.jpg";
import pickupkart1 from "./Images/pick.png";

const About =()=>{
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
                            <a href=""><img src={fblogo} class="pl-[0.62rem] max-[640px]:pl-[0.48rem]" alt=""/></a>
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
            class="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img8">
            <div class="bg-[rgba(0,0,0,0.5)] z-50 w-full min-h-[380px] "></div>
            <div
                class="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                <div class=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                    <p
                        class="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                        About Us</p>
                    <p class="font-ROBOTO text-[18px] font-semibold text-white"><span class="text-[#EAB54F]">Home 
                        </span>About us</p>
                </div>
            </div>
        </section>

        {/* <!-- Hero-2 --> */}
        <section
            class="w-full h-full pt-52 max-[900px]:pt-8 max-[1280px]:pt-24 max-[768px]:mt-[50px] flex flex-col mx-auto justify-center items-center relative">

            <img src={rightannimation} class="absolute right-0 top-36 max-[1024px]:hidden" alt=""/>
            <div class="w-[140px] min-h-[55px] bg-[#EAB54F] absolute left-[35.5%]  top-[15%] rotate-12 z-[500] skew-x-[20deg] max-[1440px]:hidden"></div>
            <div class="w-[140px] min-h-[125px] bg-white absolute left-[36.5%]  top-[19%] shadow-md rotate-12 z-[500] skew-x-[20deg] max-[1440px]:hidden">
                <div class="items-center pt-6 ">
                    <span class="text-[#EAB54F]  pl-10 font-bold text-3xl -rotate-[8deg] -skew-x-[20deg]">10</span>
                    <p class="text[16px] font-ROBOTO  pl-3 font-medium -rotate-[8deg] -skew-x-[20deg]">Year Experience</p>
                </div>
                
            </div>
            



{/* <!-- Upper part --> */}
            <div class="mx-auto pr-28 w-full flex flex-row items-start justify-between xl:gap-25 max-[1280px]:gap-20 gap-48 
               max-[1024px]:w-full max-[1024px]:pl-[3%] pl-[7%] pt-16 relative">

                <img src={aboutcourier} class="z-50 xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden"
                    alt=""/>
                <div class="mt-[-85px]">

                    <button
                        class="text-[#EAB54F] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EAB54F] shadow-sm">About
                        Us</button>
                    <div
                        class="w-[100%] border-b mb-10 pt-8 pr-12 relative max-[768px]:pl-0 max-[768px]:w-[120%] max-[640px]:w-[140%]">
                        <p class="text-[38px] font-ROBOTO pb-4 font-extrabold max-[640px]:text-[24px] tracking-wider ">
                            WELCOME WORLD WIDE BEST TRANSPORT COMPANY</p>
                        <div class="flex flex-row gap-5 items-center">
                            <div class="w-[7px] h-[63px] bg-[#EAB54F]"></div>
                            <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">We are who
                                you think of when you want something delivered and On-time delivery guaranteed.</p>
                        </div>

                        <div class="flex flex-col gap-6 pt-6 pb-5">

                            <div class="w-[78%] h-full flex flex-row items-center">
                                <img src={protectionright} class="mr-8 h-full" alt=""/>
                                <p class="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                    Transportion Service</p>
                            </div>
                            <div class="w-[78%] flex flex-row items-center">
                                <img src={protectionright} class="mr-8 h-full" alt=""/>
                                <p class="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                    Transportion Service</p>
                            </div>
                            <div class="w-[78%] flex flex-row items-center">
                                <img src={protectionright} class="mr-8 h-full" alt=""/>
                                <p class="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                    Transportion Service</p>
                            </div>
                            <div class="w-[78%] flex flex-row items-center">
                                <img src={protectionright} class="mr-8 h-full" alt=""/>
                                <p class="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                    Transportion Service</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



{/* <!-- Middle Part --> */}
            <div class="flex flex-row pl-[7%] max-[768px]:ml-[-5px] max-[640px]:pr-32 mt-32 pr-28 gap-48 max-[1024px]:w-full max-[768px]:w-[85%]  max-[1280px]:gap-10 max-[1024px]:pl-[4%] justify-between items-start mx-auto w-full relative">

                <img src={leftannimation} class="absolute left-0 top-[45%] max-[768px]:hidden" alt=""/>

                <div class="mt-[-85px]">

                    <button
                        class="text-[#EAB54F] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EAB54F] shadow-sm">Mission</button>
                    <div
                        class="w-[100%] mb-10 pt-8 relative max-[768px]:pl-0 max-[768px]:w-[140%] max-[640px]:w-[140%  max-[425px]:w-[200%]">
                        <p class="text-[38px] font-ROBOTO pb-4 font-extrabold max-[640px]:text-[24px] tracking-wider ">
                            Our Mission</p>


                        <p class="text-[18px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[13px]">Our mission is
                            to enable customers to operate flexible, reliable and resilient supply chains at the lowest
                            costs. We provided supply chain solutions to a diverse base of over 28000 active customers
                            such as e-commerce marketplaces.</p>


                        <div class="flex flex-col gap-6 pt-6 pb-5">

                            <div class="flex flex-row gap-6 pt-4  items-start">

                                <img src={missiontruck} class="pl-[0.62rem]" alt=""/>

                                <div
                                    class="w-[70%] max-[1280px]:w-[70%] max-[425px]:w-full max-[1024px]:w-[80%] flex flex-col gap-10 max-[1024px]:gap-6">
                                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Fast
                                        Delivery</p>

                                    <p class="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px]">
                                        Fast delivery and a great platform aren't enough. A very fast delivery arm gave
                                        his variations of speed and length added potency.</p>
                                </div>
                            </div>


                            <div class="flex flex-row gap-6 pt-4  items-start">

                                <img src={missionsurprise} class="pl-[0.62rem]" alt=""/>

                                <div
                                    class="w-[70%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-10 max-[1024px]:gap-6">
                                    <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Secured
                                        Services</p>

                                    <p class="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px]">
                                        Secure delivery consists in vesnus delivery procedures within each and every
                                        link of the supply chain. A whole range of services exist to ensure secure
                                        delivery</p>


                                </div>
                            </div>


                        </div>


                    </div>
                </div>
                <img src={missionfront} class="absolute right-[28%] top-[22%] max-[1280px]:hidden" alt="" />
                <img src={missionback} class="xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt=""/>
            </div>



            {/* <!-- Bottom Part --> */}
            <div class="flex flex-col pl-[7%] max-[1024px]:pl-[4%] max-[768px]:ml-[-5px] max-[768px]:pr-[20px]  mt-32 pr-16 gap-16   justify-between items-start mx-auto w-full relative">

                <div class="mt-[-85px]">

                    <button
                        class="text-[#EAB54F] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EAB54F] shadow-sm">Team</button>
                    <div
                        class="w-[100%] pt-8 relative max-[768px]:pl-0 max-[768px]:w-[120%] max-[640px]:w-[140%]">
                        <p class="text-[38px] font-ROBOTO font-extrabold max-[640px]:text-[24px] tracking-wider ">
                            Our Team</p>

                    </div>
                </div>

                <div class="flex flex-row gap-16 mx-auto w-[90%] max-[1280px]:w-[110%] max-[1280px]:pr-10 max-[1280px]:gap-10 max-[768px]:flex-col max-[768px]:w-[80%] max-[768px]:pr-0 items-center pb-36 max-[640px]:pb-14">
                    <div class="flex flex-col gap-6 border w-full items-center  shadow-xl">
                        <img src={femaleprofile} class="pt-4" alt=""/>

                        <p class="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                        <span class="text-[#EAB54F] font-semibold -mb-3">CEO</span>

                        <p class="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                            Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div class="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    class="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} class="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} class="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} class="ml-[0.7rem] max-[640px]:ml-[0.4rem]"  width="18px"  alt=""/>
                                </div>
                            </div>
                    </div>


                    <div class="flex flex-col gap-6 border w-full items-center  shadow-xl">
                        <img src={femaleprofile} class="pt-4" alt=""/>

                        <p class="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                        <span class="text-[#EAB54F] font-semibold -mb-3">CEO</span>

                        <p class="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                            Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div class="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    class="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} class="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} class="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} class="ml-[0.7rem] max-[640px]:ml-[0.4rem]"  width="18px"  alt=""/>
                                </div>
                            </div>
                    </div>


                    <div class="flex flex-col gap-6 border w-full  items-center  shadow-xl">
                        <img src={femaleprofile} class="pt-4" alt=""/>

                        <p class="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                        <span class="text-[#EAB54F] font-semibold -mb-3">CEO</span>

                        <p class="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                            Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div class="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    class="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} class="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} class="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt=""/>
                                </div>
                                <div
                                    class="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} class="ml-[0.7rem] max-[640px]:ml-[0.4rem]"  width="18px"  alt=""/>
                                </div>
                            </div>
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
                               <a href=""> <img src={twitterlogo} class="pl-[0.5rem]" alt=""/></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-1 text-white max-[1024px]:pl-8">
                        <p class="text-[24px] font-semibold font-ROBOTO pb-2">Explore</p>
                        <Link class=" text-[18px] font-medium font-ROBOTO" to="/">Home</Link>
                        <Link class="text-[18px] font-medium font-ROBOTO text-[#EAB54F]" to="/About">About Us</Link>
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
                            <p class="text-white font-medium font-ROBOTO text-[18px] max-[640px]:text-[14px]">contact@pickupkart.com</p>
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


export default About;