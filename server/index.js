import express from "express"
import mysql from "mysql"
import cors from "cors";
const app= express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3307',
    database:'venus'
})
app.get("/",(req,res)=>{
    res.json("hello")
})

 app.post("/books",(req,res)=>{
     //const q="INSERT INTO customerdetails (`pickuplocation`,`dropedlocation`,`youremail`,`yourphone`) VALUES (?)";
     const q="INSERT INTO customer (`pickuplocation`,`dropedlocation`,`name`,`address`,`mobile`,`dileverypin`) VALUES (?)";
     
     const values=[
        req.body.pickuplocation,
        req.body.dropedlocation,
        req.body.name,
        req.body.address,
        req.body.mobile,
        req.body.dileverypin,
        // req.body.youremail,
        // req.body.yourphone,
        // req.body.pickupcontactname,
        // req.body.pickupcontactno,
        // req.body.pickupemail,
        // req.body.pickuphouse,
        // req.body.pickuparea,
        // req.body.pickuppin,
        // req.body.pickupcity,
        // req.body.pickupstate,
        // req.body.dropcontactname,
        // req.body.dropcontactno,
        // req.body.dropemail,
        // req.body.drophouse,
        // req.body.droparea,
        // req.body.droppin,
        // req.body.dropcity,
        // req.body.dropstate,
        // req.body.parcelsize,
        // req.body.category,
        // req.body.subcategory,
        // req.body.pickupdate,
       ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.send(err);
        return res.json(data);
    });
})

app.post("/book",(req,res)=>{
    //const q="INSERT INTO customerdetails (`pickuplocation`,`dropedlocation`,`youremail`,`yourphone`) VALUES (?)";
    const q="INSERT INTO customerdetails (`pickuplocation`,`dropedlocation`,`pickupcontactname`,`pickupcontactno`,`pickupemail`,`pickuphouse`,`pickuparea`,`pickuppin`,`pickupcity`,`pickupstate`,`dropcontactname`,`dropcontactno`,`dropemail`,`drophouse`,`droparea`,`droppin`,`dropcity`,`dropstate`,`parcelsize`,`category`,`subcategory`,`pickupdate`) VALUES (?)";
    
    const values=[
       req.body.pickuplocation,
       req.body.dropedlocation,
    //    req.body.youremail,
    //    req.body.yourphone,
       req.body.pickupcontactname,
       req.body.pickupcontactno,
       req.body.pickupemail,
       req.body.pickuphouse,
       req.body.pickuparea,
       req.body.pickuppin,
       req.body.pickupcity,
       req.body.pickupstate,
       req.body.dropcontactname,
       req.body.dropcontactno,
       req.body.dropemail,
       req.body.drophouse,
       req.body.droparea,
       req.body.droppin,
       req.body.dropcity,
       req.body.dropstate,
       req.body.parcelsize,
       req.body.category,
       req.body.subcategory,
       req.body.pickupdate,
      ];

   db.query(q,[values],(err,data)=>{
       if(err) return res.send(err);
       return res.json(data);
   });
})
app.post("/book1",(req,res)=>{
    //const q="INSERT INTO customerdetails (`pickuplocation`,`dropedlocation`,`youremail`,`yourphone`) VALUES (?)";
    const q="INSERT INTO login (`username`,`password`,`cpassword`) VALUES (?)";
    
    const values=[
       req.body.username,
       req.body.password,
       req.body.cpassword,
       
       
      ];

   db.query(q,[values],(err,data)=>{
       if(err) return res.send(err);
       return res.json(data);
   });
})
app.get("/books",(req,res)=>{
    const q="select * from customer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/book1",(req,res)=>{
    const q="select * from login"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/book",(req,res)=>{
    const q="select * from customerdetails"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})





// app.get("/customerdetails/:pickuplocation", (req, res) => {
    
//     const q = "SELECT pickupcontactno FROM books where pickupcontactname=?";
//     const val=req.params.pickuplocation;
//     db.query(q, [val],(err, data) => {
//       if (err) {
//         console.log(err);
//         return res.json(err);
//       }
//       return res.json(data);
//     });
//   });

app.get("/books/:pickuplocation",(req,res)=>{
    const location=req.params.pickuplocation;
    const q="select Serviceable from mytable where Pincode=?";
    db.query(q,[location],(err,data)=>{
        if(err) return res.json("err");
        return res.json(data);
    })
})

app.get("/book1/:username",(req,res)=>{
    const name=req.params.username;
    const q="select password from login where username=?";
    db.query(q,[name],(err,data)=>{
        if(err) return res.json("err");
        return res.json(data);
    })
})

app.listen(8700,()=>{
    console.log("Connected backend")
})