import React from 'react'
import "../App.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Code = () => {
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
      .send('service_lig2wrb',
        'template_z8ty7fn',
        {
          from_name: form.name,
          to_name: "Basir Khan",
          from_email: form.email,
          to_email: "basirkhan4ukhanatoz@gmail.com",
          message: form.message,
        },
        'rrHiFdvLfn6uP7E7i'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. Your code has been submitted successfully it will be review and reflect on web with in 24 hours");

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
      <h1 className='text-center my-3 mx-3 font'>
    Contribute Here
  </h1>
      </div>
      <div className="container">
      <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
      <div className="mb-3">
    
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name='name' value={form.name}
onChange={handleChange} />
</div>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email'
value={form.email} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Enter the code</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"  name='message'
value={form.message} onChange={handleChange}></textarea>
 <div className="container">
    <button className='btn btn-primary my-3' type='submit'> {loading ? "Sending..." : "Send"}</button>
 </div>
</div>
</form>
</div>
<div className="container">
      <h1 className='text-center my-3 mx-3 font'>
    Get the Code
  </h1>
      </div>
      <div className="container">
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 0</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create db</h6>
    <code className="card-text">create Database E_commmerce_Database;</code><br/>
    <code className="card-text">use E_commmerce_Database;</code>
  </div>
</div>
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create User Details</h6>
    <code className="card-text">create table userdetails(<br/>
user_id varchar(200) not null unique,<br/>
user_name varchar(200) not null,<br/>
user_email varchar(200) not null,<br/>
user_password varchar(200) not null,<br/>
user_phone varchar(12) not null,<br/>
user_address varchar(200) not null
);<br/>
insert into userdetails<br/>
values("ui111","priyanshu","priyanshu@gmail.com","pri1234","9758485876","Rachi,Jharkhand"),<br/>
("ui112","basir","basir121@gmail.com","basiri1287","9748485877","Cuttack,Odisha"),<br/>
("ui113","sartaj","sartaj@gmail.com","sartaji1895","9335875459","Jatni,Odisha"),<br/>
("ui114","sadab","sadab121@gmail.com","sadab8574","7077485236","Kendrapara,Odisha"),<br/>
("ui115","smrutirupa","smrutirupa@gmail.com","123456","6735428910","Bhubaneswar,Odisha"),<br/>
("ui116","priyanka","priyanka@gmail.com","094567","9864536712","Noida,Delhi"),<br/>
("ui117","faran","fa123@gmail.com","Far8905","9943567821","Jajpur,Odisha"),<br/>
("ui118","tushar","tushar21@gmail.com","tushar234","9856421342","Vishakhapatnam,Andra pradesh"),<br/>
("ui119","monalisha","monalisha678@gmail.com","mona234","9876546701","bbsr,odisha"),<br/>
("ui220","sudhansu","sudhansu116@gmail.com","sudhansu786","7865432102","jatni,Odisha"),<br/>
("ui221","rakesh","rakesh43@gmail.com","rakesh123","933567890","bbsr,Odisha"),<br/>
("ui222","Aman","aman@gmail.com","aman9876","7865432205","cuttack,Odisha");
<br/>

</code>
  </div>
</div>
      </div>
    
      </>
  )
}

export default Code
