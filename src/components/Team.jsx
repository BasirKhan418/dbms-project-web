import React from 'react'
import "../App.css"
import pr from "./img/p.jpg";
import s from "./img/s.jpg";
import k from "./img/k.jpg";
import m from "./img/m.jpg";
import b from "./img/b.jpg";
const Team = () => {
  return (
    <>
    <div className="container">
    <h2 className="text-center my-3 font">Team Members</h2>
    </div>
      <div className="container cardcon">
  <div className="card card1">
  <img src={pr}className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Priyanshu Kumar</h5>
    <p className="card-text">Regd:-220301120231 Sec:-D Group:-3</p>
  </div>
</div>
  <div className="card card1 mx-3">
  <img src={s}className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Smrutirupa Parida</h5>
    <p className="card-text">Regd:-220301120197 Sec:-D Group:-3</p>
  </div>
</div>
  <div className="card card1 mx-3">
  <img src={k}className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">K. Sonali</h5>
    <p className="card-text">Regd:-220301120200 Sec:-D Group:-3/</p>
  </div>
</div>
  <div className="card card1 mx-3">
  <img src={m}className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Manisha Mohapatra</h5>
    <p className="card-text">Regd:-220301120232 Sec:-D Group:-3</p>
  </div>
</div>
  <div className="card card1 mx-3">
  <img src={b}className="card-img-top card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Basir Khan</h5>
    <p className="card-text">Regd:-220301120209 Sec:-D Group:-3</p>
  </div>
</div>

</div>

    </>
  )
}

export default Team
