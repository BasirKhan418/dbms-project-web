import React, { useEffect } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
const Code = (props) => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    // console.log("logggg")
  }
  else{
  navigate("/login")
  props.showAlert("Access Denied. Please Login to access this page ","danger")
  }
})
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_lig2wrb",
        "template_z8ty7fn",
        {
          from_name: form.name,
          to_name: "Basir Khan",
          from_email: form.email,
          to_email: "basirkhan4ukhanatoz@gmail.com",
          message: form.message,
        },
        "rrHiFdvLfn6uP7E7i"
      )
      .then(
        () => {
          setLoading(false);
         props.showAlert("Thank you. Your code has been submitted successfully it will be review and reflect on web with in 24 hours","success")
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(" Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      
      <div className="container">
        <h1 className="text-center my-3 mx-3 font"  style={{position:'relative',top:50}}>Contribute Here</h1>
      </div>
      {loading?<Spinner/>:
      <div className="container"  style={{position:'relative',top:50}}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Enter the code
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <div className="container">
              <button className="btn btn-primary my-3" type="submit" id="btn">
                {" "}
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
        <p className="bg-secondary text-light p-3">For Your Knowledge :- In dbms you can use this page to contribute.You can also contribute for all projects using this page.Thank you</p>
      </div>}
      {loading?"":<Footer/>}
    </>
  )
}

export default Code;
