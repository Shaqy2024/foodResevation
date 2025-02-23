import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = () => {

const navigate = useNavigate();

  const [fastName,setFastName] = useState("");
  const [LastName,setLstNae] = useState("");
  const[data,setDate]  =useState("");
  const[tiem,setTime] = useState("");
  const [email,setEmail] = useState("");  
  const [phone,setPhone] = useState("");


 





  const handleRsevation = async (e) => {
    e.preventDefault();
if(!fastName || !LastName || !email || !phone){
toast.error("All Fields are Required");
  
}else{  

  console.log(fastName,LastName,data,tiem,email,phone); 
 let result = await fetch(https://foodresevation.onrender.com/risebation,{
  method:"post",
  body:JSON.stringify({fastName,LastName,data,tiem,email,phone}),
  headers:{
    "Content-Type":"application/json"
  } ,

})
 result = await result.json();
console.log(result);
toast.success("Reservation Successfull");
navigate("/success");


  }

}




  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={fastName}
                  onChange={(e)=>setFastName(e.target.value)}
             
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e)=>setLstNae(e.target.value)}
     
                />
              </div>
              <div>
               
               
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
        value={email}
            onChange={(e)=>setEmail(e.target.value)}  

                />
                <input
                  type="number"
                  placeholder="Phone"
           value={phone}
            onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <button 
              onClick={handleRsevation} >
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
