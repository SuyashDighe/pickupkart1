import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link ,NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bottompersonbg from "./Images/bottom-person-bg.png";
import call from "./Images/call.png";
import clock from "./Images/clock.png";
import corner from "./Images/corner.png";
import courier from "./Images/courier.png";
import delivarygoodsimg from "./Images/delivary-goods-img.png";
import delivarytruck from "./Images/delivary-truck.png";
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
import instalogo from "./Images/insta-logo.png";
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
import rod1 from "./Images/rod-1.png";
import rod2 from "./Images/rod-2.png";
import rod3 from "./Images/rod-3.png";
import rod5 from "./Images/rod-5.png";
import rod6 from "./Images/rod-6.png";
import rod7 from "./Images/rod-7.png";
import rod8 from "./Images/rod-8.png";
import rod9 from "./Images/rod-9.png";
import rod10 from "./Images/rod-10.png";
import rod11 from "./Images/rod-11.png";
import rod12 from "./Images/rod-12.png";
import rod4 from "./Images/rod4.png";
import rod13 from "./Images/rod13.png";
import rod14 from "./Images/rod14.png";
import rod15 from "./Images/rod15.png";
import Star1 from "./Images/Star 1.png";
import rupees from "./Images/rupees.png";
import testimonialsbg from "./Images/testimonials-bg.png";
import testimonialslogo from "./Images/testimonials-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import venuslogo from "./Images/venus-logo.png";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import Vectorright from "./Images/Vector_right.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import pickupkart1 from "./Images/pick.png";
import websitebanner from "./Images/Website Banner.jpg";
import './Main.css';
import './processbar.css';
//import Location from "./Location";
import About from "./About";
import "./Hamburger.js";
import Location from "./Location"
import "./new.js";

//import { useNavigate } from "react-router-dom";

// function clickMe(){
//     window.location='./location';
// }
//global.detail={"suyash":"dighe"};
const FirstPage = () =>{
    const[login,setlogin]=useState({
        username:"",
        password:"",
        // youremail:"",
        // yourphone:"",
        cpassword:"",
        

      })

      const[login1,setlogin1]=useState({
        username:"",
        password:"",
        // youremail:"",
        // yourphone:"",
       
        

      })

    

   
      
      const handleChange = (e)=>{
        setlogin(prev=>({...prev,[e.target.name]:e.target.value}))
      };

      const handleChange1 = (e)=>{
        setlogin1(prev=>({...prev,[e.target.name]:e.target.value}))
      };


      console.log(login1)
     
      const handleClick = async e =>{
        e.preventDefault()
        try{
            var detail={username:login.username,password:login.password,cpassword:login.cpassword}
           
          
            
            axios.post("http://localhost:8700/book1",detail);
            alert("Register  Successfully.")
            navigate("/")
            
        }catch(err){
            console.log(err)
            alert("error.")
            console.log("error")
          }
      }

      const handleClick1 = async e =>{
        e.preventDefault()
        try{
            var detail={username:login1.username,password:login1.password}
          //const bookId = location.pathname.split("/")[pickuplocation];
          const username=detail.username;
          console.log(username)
          console.log(detail.password)
          //window.sessionStorage.setItem("address",JSON.stringify(detail));
          //console.log(global.detail)
          console.log("hja")
            const password1=await axios.get("http://localhost:8700/book1/"+username);
            
          
            console.log(password1.data[0].password)
          
            if(password1.data[0].password===detail.password){
                alert("wellcome again")
                navigate("/")
            }else{
                //window.location="/Location";
                //navigate("/Location")
                alert("wrong username and password")
            }
            
            
            
        }catch(err){
            console.log(err)
            alert("wrong username and password")
          }
      }
      
    //   const navigate= useNavigate();
      //const[data,setdata]=useState([]);
    //   const handleClick1 = async e =>{
    //     e.preventDefault()
    //     try{
    //         var detail={pickuplocation:address.pickuplocation,dropedlocation:address.dropedlocation,name:address.name,address:address.address,mobile:address.mobile,dileverypin:address.dileverypin}
    //         const pickuplocation=address.pickuplocation;
    //       const dropedlocation=address.dropedlocation;
    //       //const bookId = location.pathname.split("/")[pickuplocation];
    //       //window.sessionStorage.setItem("address",JSON.stringify(detail));
    //       //console.log(global.detail)
          
    //         const pincode1=await axios.get("http://localhost:8700/books/"+pickuplocation);
    //         const pincode2=await axios.get("http://localhost:8700/books/"+dropedlocation);
          
    //         //console.log(setdata.data[0])
    //         console.log(pincode1.data[0].Serviceable);
    //         console.log(pincode2.data[0].Serviceable);
    //         if(pincode1.data[0].Serviceable!='Y' || pincode2.data[0].Serviceable!='Y'){
    //             alert("Our service is not available at pickup and drop location.")
    //         }else{
    //             //window.location="/Location";
    //             //navigate("/Location")
    //             alert("Continue the process...")
    //         }
    //         axios.post("http://localhost:8700/books",detail);
    //         alert("Data Submitted Successfully.")
    //         let createPickupBtn = document.querySelector(".createPickupBtn");
    //         createPickupBtn.classList.toggle("active");
    //     }catch(err){
    //         console.log(err)
    //         alert("service not available here or check your pincode.")
    //       }
    //   }
      const navigate= useNavigate();



      
    //   const handleClick = async e =>{
    //     e.preventDefault()
    //     try{
    //       //await axios.post("http://localhost:8700/books",address)
    //       //const id=book.id;   
    //     var detail={pickuplocation:address.pickuplocation,dropedlocation:address.dropedlocation,youremail:null,yourphone:null}
    //       console.log(detail);
    //       const pickuplocation=address.pickuplocation;
    //       const dropedlocation=address.dropedlocation;
    //       //const bookId = location.pathname.split("/")[pickuplocation];
    //       window.sessionStorage.setItem("address",JSON.stringify(detail));
    //       //console.log(global.detail)
          
    //         const pincode1=await axios.get("http://localhost:8700/books/"+pickuplocation);
    //         const pincode2=await axios.get("http://localhost:8700/books/"+dropedlocation);
          
    //         //console.log(setdata.data[0])
    //         console.log(pincode1.data[0].Serviceable);
    //         console.log(pincode2.data[0].Serviceable);
    //         if(pincode1.data[0].Serviceable!='Y' || pincode2.data[0].Serviceable!='Y'){
    //             alert("Our service is not available at pickup and drop location.")
    //         }else{
    //             // window.location="/Location";
                 
    //             alert("Continue the process...")
    //         navigate("/Location")
    //         }
    //     //   window.location="/Location";
    //       // navigate("/Location");
    
    //     //   alert("data")
          
          
    //     }catch(err){
    //       console.log(err)
    //       alert("service not available here or check your pincode.")
    //     }
    
    //   }

      //calculator

    //   const[dataa,setdata]=useState([]);

    //     const rate=(e)=>{
    //         setdata(prev=>({...prev,[e.target.id]:e.target.value}));
    //     }
    //     const clickRate=()=>{
    //         var state=dataa.state;
    //         var cate=dataa.cate;
    //         var weight=dataa.weight;
    //         console.log(state)
    //     }
      

//       const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
        
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   console.log(books);


      

    return(
    
        // <!-- wrapper -->
        
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
                        <div class="w-[30px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[28px]  rounded-full bg-white flex items-center">
                           <a href=""> <img src={fblogo} class="pl-[0.62rem] max-[640px]:pl-[0.48rem]" alt=""/></a>
                        </div>
                        <div class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                            <a href=""><img src={instalogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                        <div class="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-white flex items-center">
                           <a href=""> <img src={twitterlogo} class="pl-[0.5rem] max-[640px]:pl-[0.3rem]" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row gap-[4.5rem] ml-4 mr-8">
                    <Link class="text-[16px] text-white font-semibold  font-ROBOTO max-lg:hidden" to="/">HOME</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/About">ABOUT US</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden" to="/Services">SERVICES</Link>
                    <Link class="text-[16px] text-white font-semibold font-ROBOTO max-lg:hidden pr-8" to="/Contact">CONTACT US</Link>
                    
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


        {/* <!-- Hero-1 section --> */}
        <section class="w-full min-h-[650px] scale-x-110 bg-[url('')] bg-contain bg-no-repeat relative img3">
            <div class="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-13 max-[900px]:left-[15%] max-[768px]:top-10 max-[768px]:left-[15%]">
                <div class=" flex flex-col gap-16 max-[900px]:gap-8 max-[768px]:gap-5  ">
                    <p class="font-ROBOTO text-[48px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                        We Provide Best Mover <br/> Packer Services
                    </p>
                    <div class="flex flex-row gap-6">
                        <button class="w-[155px] h-[44px] bg-[#EAB54F] text-white text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Login</button>
                        <button class="w-[155px] h-[44px] bg-white text-black text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Registration</button>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- form section --> */}
        <div class="f1" >
        <section className="loginform">
        
        <div class="login-container">
            <h2>Login Form</h2>
                <form >
                        <label for="username">Username</label>
                        <input type="text" name="username" placeholder="Enter your username" onChange={handleChange1}/>
                        
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange1}/>
                        
                        <input type="submit" value="Login" onClick={handleClick1}/>
                    </form>
        </div>
        </section>

        <section className="registrationform">
        
        <div class="login-container">
            <h2>Registration Form</h2>
                <form >
                        <label for="username">Username</label>
                        <input type="text"  name="username" placeholder="Enter your username" onChange={handleChange}/>
                        
                        <label for="password">Password</label>
                        <input type="password"  name="password" placeholder="Enter your password" onChange={handleChange}/>
                        
                        <label for="password">Confirm Password</label>
                        <input type="password" name="cpassword" placeholder="Enter your password" onChange={handleChange}/>
                        
                        <input type="submit" value="Submit" onClick={handleClick}/>
                    </form>
        </div>
        
        </section>
        </div>
        




        {/* <!-- Hero-2 section --> */}
        <section class="w-full h-full pt-52 mt-16 max-[900px]:pt-8 max-[1280px]:pt-24 max-[768px]:mt-[-250px] flex flex-col mx-auto justify-center items-center relative">
            <img src={rod1} class="absolute left-0 top-[26%] -z-50 max-[1500px]:hidden" alt=""/>
            <img src={delivarytruck} class="absolute left-[35%] top-[26%]  max-[1500px]:hidden" alt=""/>
            <img src={rod2} class="absolute left-[49.7%] top-[26%]  max-[1500px]:hidden" alt=""/>
            <img src={rod3} class="absolute left-[17%] top-[33.3%] -z-60 max-[1500px]:hidden" alt=""/>
            <img src={rod4} class="absolute left-[18%] top-[33%] -z-50 max-[1500px]:hidden" alt=""/>
            <img src={rightannimation} class="absolute right-0 top-[45%]  max-[1500px]:hidden" alt=""/>

            <img src={rod5} class="absolute bottom-[34%] left-[17%] max-[1500px]:hidden" alt=""/>
            <img src={rod6} class="absolute bottom-[27.3%] right-[31.8%] max-[1500px]:hidden" alt=""/>
            <img src={rod7} class="absolute bottom-[27.3%] right-[31.8%] max-[1500px]:hidden" alt=""/>
            <img src={rod8} class="absolute top-[70%] left-[35%] max-[1500px]:hidden" alt=""/>



            <div class="flex flex-col items-center gap-3 mx-auto">
                <p class="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px]">From Pickup To Delivered</p>
                <p class="text-[28px] font-ROBOTO font-medium opacity-60 max-[640px]:text-[16px]">Our Proven delivery system </p>
            </div>


            <div class="mx-auto w-full flex flex-row items-start justify-between xl:gap-25 max-[1280px]:gap-20 gap-48 max-[1024px]:w-full max-[1024px]:pl-[3%] pl-[7%] pt-16">
                <img src={homedelivery1} class="z-50 xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt=""/>
                <div class="max-[1280px]:pl-24 max-[768px]:pl-0">
                    <p class="text-[28px] font-ROBOTO font-extrabold max-[640px]:text-[24px]">FOLLOW STEPS</p>
                    <div class="flex flex-row gap-6 pt-4 ">
                        <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                            <img src={home} class="pl-[0.62rem]" alt=""/>
                        </div>
                        <div class="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                            <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Visit Our Website</p>
                            <div class="flex flex-row items-center gap-3">
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[15px]">Visit our website and calculate your rate for shipment and create a pickup.</p>
                                <span class="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">01</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-row gap-6 pt-4">
                        <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                            <img src={home} class="pl-[0.62rem]" alt=""/>
                        </div>
                        <div class="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                            <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Doorstep pickup</p>
                            <div class="flex flex-row items-center gap-3">
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[15px]">Our pickupman will reach at your doorstep and collect your 
                                parcel or document.</p>
                                <span class="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">02</span>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-row gap-6 pt-4">
                        <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                            <img src={home} class="pl-[0.62rem]" alt=""/>
                        </div>
                        <div class="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                            <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Pay & Tracking</p>
                            <div class="flex flex-row items-center gap-3">
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[15px]">Pay courier charges by cash or online and get instant tracking number.</p>
                                <span class="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">03</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-row gap-6 pt-4">
                        <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                            <img src={home} class="pl-[0.62rem]" alt=""/>
                        </div>
                        <div class="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                            <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Live Tracking</p>
                            <div class="flex flex-row items-center gap-3">
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[15px]">Live track your courier AWB number.</p>
                                <span class="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">04</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-row gap-6 pt-4">
                        <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                            <img src={home} class="pl-[0.62rem]" alt=""/>
                        </div>
                        <div class="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                            <p class="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Doorstep Delivery</p>
                            <div class="flex flex-row items-center gap-3">
                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[15px]">Parcel delivered on your destination
                                with safe and secure.</p>
                                <span class="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">05</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div class="flex flex-row pl-[11%] max-[768px]:pl-0 max-[640px]:pr-32 mt-32 pr-40 xl:gap-25 gap-48 max-[1024px]:w-full max-[768px]:w-[85%]  max-[1280px]:gap-10 max-[1024px]:pl-[10%] justify-between items-start mx-auto w-full relative">

                <div>
                    <div class="w-[100%] bg-[#F9F9F9] pl-10 pt-14 pb-12 pr-12 relative max-[768px]:pl-0 max-[768px]:w-[120%] max-[640px]:w-[140%]">
                        <p class="text-[28px] font-ROBOTO pb-2 font-extrabold max-[640px]:text-[24px]">WHY CHOOSE US</p>
                        <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">We handle multi model courierservice for a huge varity
                        of industries sector,from fashion to Engineering,Pharmaceuticals,Automotive, E-commerce,sporting goods to personal shipment
                        .And we will take care of it for you with doorstep pickup service.</p>
                        <div class="flex flex-row gap-6 pt-6">
                            <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                                <img src={home} class="pl-[0.62rem]" alt=""/>
                            </div>
                            <div class="w-[78%] flex flex-col gap-3]">
                                <p class="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px] ">Resonable shipping cost</p>

                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">We provide best compititive 
                                rate to reduce shipping cost and increase reach.<br/>Maharashtra-35/kg(10kg+)<br/>Rest of India-70/kg(10kg+)</p>

                            </div>
                        </div>

                        <div class="flex flex-row gap-6 pt-4 ">
                            <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                                <img src={home} class="pl-[0.62rem]" alt=""/>
                            </div>
                            <div class="w-[80%] flex flex-col pt-2 gap-3">
                                <p class="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">courier partner</p>

                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">We work with india's
                                best athorised courier partner. </p>
                            </div>
                        </div>


                        <div class="flex flex-row gap-6 pt-4 ">
                            <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                                <img src={home} class="pl-[0.62rem]" alt=""/>
                            </div>
                            <div class="w-[80%] flex flex-col pt-2 gap-3">
                                <p class="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">Doorstep pickup</p>

                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">Pickupkart is india's 
                                first online courier pickup service from document,parcel to bulk load(LTL) shipment we arrange pickup from 
                                your doorstep with hassle free . </p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-6 pt-4 pb-24">
                            <div class="w-[50px] h-[50px] rounded-full bg-[#EAB54F] flex items-center pl-1">
                                <img src={home} class="pl-[0.62rem]" alt=""/>
                            </div>
                            <div class="w-[80%] flex flex-col pt-2 gap-3">
                                <p class="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">Safety and Reliability</p>

                                <p class="text-[15px] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">Our 
                                delivary system has proven to safety delivery and maximum security coverage for lost shipment. </p>
                            </div>
                        </div>

                        <button
                            class="w-[155px] h-[44px] bg-[#EAB54F] text-white text-[16px] rounded-md absolute bottom-10 right-8">Get - Set - Ship</button>
                    </div>
                </div>

                <img src={homedelivery2} class="xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt=""/>
            </div>
        </section>


        {/* <!-- Feature Section --> */}
        <section class="relative pt-40 pb-40 max-[768px]:pt-16">
            
            <img src={rod9} class="absolute top-[15%] left-[35%] max-[1500px]:hidden" alt=""/>
            <img src={rod10} class="absolute top-[15%] right-[13%] -z-[50] max-[1495px]:hidden" alt=""/>
            <img src={rod11} class="absolute top-[23%] right-[13%] -z-[50] max-[1495px]:hidden" alt=""/>
            <img src={rod12} class="absolute top-[22.8%] right-[45%] -z-[50] max-[1495px]:hidden" alt=""/>
            <img src={rod13} class="absolute top-[63%] left-[35%] max-[1495px]:hidden" alt=""/>
            <img src={rod14} class="absolute bottom-[5%] left-[35%] max-[1495px]:hidden" alt=""/>
            <img src={rod15} class="absolute bottom-[-3%] right-[14%] -z-[50] max-[1495px]:hidden" alt=""/>


            <div class="flex flex-col justify-start mx-auto max-[1024px]:w-full gap-4 pl-8 max-[1024px]:pl-0 w-[90%] ">
                <button
                    class="w-[155px] h-[44px] bg-white text-[#EAB54F] text-[20px] drop-shadow-lg shadow-2xl border-[#EAB54F] font-bold rounded-md font-ROBOTO max-[768px]:ml-5 max-[768px]:text-[17px] max-[768px]:w-[120px] max-[768px]:h-[35px]">Contact
                    Us</button>

                <p class="text-[32px] font-ROBOTO font-bold max-[768px]:ml-5 max-[768px]:text-[25px]">Our Services</p>

                <div class="flex flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:w-[90%] max-[768px]:mx-auto max-[768px]:items-center">
                    <div class="flex flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                        <img src={homeservice1} class="" height="223px" alt=""/>
                        <div class="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Transportation
                            Service</div>
                        <p class="text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Collaboratively customize front-end materials with standardized infomediaries</p>
                        <div class="pt-3 pb-4 pl-8">

                            <button class="w-[118px] h-[38px] bg-[#EAB54F] text-white text-[13px]  rounded-md ">Read
                                More</button>
                        </div>
                    </div>

                    <div class="flex flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                        <img src={homeservice2} class="" height="223px" alt=""/>
                        <div class="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Storage Service
                        </div>
                        <p class="text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Collaboratively customize front-end materials with standardized infomediaries</p>
                        <div class="pt-3 pb-4 pl-8">

                            <button class="w-[118px] h-[38px] bg-[#EAB54F] text-white text-[13px]  rounded-md ">Read
                                More</button>
                        </div>
                    </div>

                    <div class="flex flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                        <img src={homeservice3} class="" height="223px" alt=""/>
                        <div class="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Transportation
                            Service</div>
                        <p class="text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Collaboratively customize front-end materials with standardized infomediaries</p>
                        <div class="pt-3 pb-4 pl-8">

                            <button class="w-[118px] h-[38px] bg-[#EAB54F] text-white text-[13px]  rounded-md ">Read
                                More</button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row gap-0 border max-[1350px]:pb-8 justify-between mt-[8.7rem] relative max-[1350px]:flex-col ">
                    <div class="flex flex-row gap-2 w-[42%] max-[1350px]:w-full pt-14 pb-40 bg-[#EAB54F]">
                        <img src={courier} alt=""/>
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-row gap-2 mt-12">
                                <img src={testimonialslogo} alt=""/>
                                <p class="text-white font-ROBOTO font-semibold text-[16px] max-[640px]:text-[12px]">TESTIMONIAL</p>
                            </div>
                            <p class="font-bold text-[32px] text-white max-[640px]:text-[20px] ">What People <br/> Say About Our <br/> Service
                            </p>
                            <div>
                                <button class="w-[85px] h-[35px] pl-8 bg-white text-[13px] max-[640px]:w-[55px] max-[640px]:h-[28px] max-[640px]:pl-5"><img
                                        src={leftarrow} alt=""/></button>
                                <button></button>
                                <button class="w-[85px] pl-8 h-[35px] bg-white text-[13px] max-[640px]:w-[55px] max-[640px]:h-[28px] max-[640px]:pl-5"><img
                                        src={forwardarrow} alt=""/></button>
                                <button></button>
                            </div>
                        </div>

                    </div>


                    <div class="flex flex-row gap-10 my-auto absolute top-[22%] right-[11%] max-[1480px]:right-8 max-[1350px]:relative max-[1350px]:w-full mx-auto max-[1350px]:justify-center max-[1350px]:pl-12 max-[1350px]:pt-16 max-[768px]:gap-6 max-[640px]:flex-col items-center">
                        <div class="w-[335px] border z-[200] bg-white rounded-md relative">
                            <img src={corner} class="absolute bottom-12 right-[-16px]" width="18px" alt=""/>
                            <p class="pt-[4.3rem] pl-10 pr-10 text-[16px]  font-ROBOTO font-semibold opacity-40 mr-4 max-[768px]:pl-3 max-[768px]:pr-3 max-[768px]:pt-10 ">
                                "You guys are legendary! You guys are great and having amazing support & service.”</p>
                            <div class="bg-[#F5F5F5] mt-4 mb-2 flex flex-row items-center ml-4 gap-8 scale-x-110">
                                <img src={personimg} class="pt-3 pb-3 pl-10" alt=""/>
                                <p class="text-[18px] font-bold font-ROBOTO">John Doe</p>
                            </div>
                            <div class="flex flex-row gap-3 pl-10 mt-3 mb-8">
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                            </div>
                        </div>

                        <div class="w-[335px] border z-[200] bg-white rounded-md relative">
                            <img src={corner} class="absolute bottom-12 right-[-16px]" width="18px" alt=""/>
                            <p class="pt-[4.3rem] pl-10 pr-10 text-[16px]  font-ROBOTO font-semibold opacity-40 mr-4 max-[768px]:pl-3 max-[768px]:pr-3 max-[768px]:pt-10 ">
                                "“I will always patronize your service, cause I never get disappointed””</p>
                            <div class="bg-[#F5F5F5] mt-4 mb-2 flex flex-row items-center ml-4 gap-8 scale-x-110">
                                <img src={personimg}class="pt-3 pb-3 pl-10" alt=""/>
                                <p class="text-[18px] font-bold font-ROBOTO">John Doe</p>
                            </div>
                            <div class="flex flex-row gap-3 pl-10 mt-3 mb-8">
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                                <img src={Star1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        {/* <!-- Footer Section --> */}
        <section>
            {/* <!-- upper part --> */}
            <div class="flex flex-row bg-[#082161] max-[768px]:flex-col">
                <div class="relative">
                    <img src={personimgbottom} class="absolute left-16 bottom-[-0.05rem] max-[1024px]:left-6 max-[640px]:h-[120%]" alt=""/>
                    <img src={bottompersonbg} class="w-full h-full" alt=""/>
                </div>
                <div class="flex flex-col gap-7 pt-14 max-[768px]:pl-2">
                    <p class="text-white font-ROBOTO text-[28px] font-semibold tracking-wide max-[768px]:text-[24px]">READY TO GET MOVING? GET
                        YOUR FREE QUOTE</p>
                    <p class="text-white font-ROBOTO font-medium tracking-wide opacity-80 text-[18px]  max-[768px]:text-[13px]">Collaboratively
                        customize front-end materials with standardized <br/> infomediaries</p>
                    <div class="flex flex-row gap-3 text-[#EAB54F]">
                        <p class=" text-[28px] font-ROBOTO  max-[768px]:text-[22px]">Call Us:</p>
                        <p class=" text-[28px] font-ROBOTO  max-[768px]:text-[22px]">+91 7249174747</p>
                    </div>
                </div>
            </div>



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

                <div class="h-1 bg-[#96431582] w-full"></div>

                <div class="text-white font-medium font-ROBOTO text-[15px] pb-3 pl-[14rem] max-[1024px]:pl-[10rem] max-[768px]:pl-[4rem] max-[640px]:pl-[1rem]">
                    We make the things you need arrive on time. You focus on what you need to do.
                </div>

            </div>  
            </div>
        </section>


    </section>

    );
}

export default FirstPage;

