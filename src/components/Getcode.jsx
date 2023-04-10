import React from 'react'
import Footer from './Footer'

const Getcode = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-3 mx-3 font" style={{position:'relative',top:50}}>Get the Code</h1>
      </div>
      <div className="container" style={{position:'relative',top:50}}>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 0</h5>
            <h6 className="card-subtitle mb-2 text-muted">Create db</h6>
            <code className="card-text">
              create Database E_commmerce_Database;
            </code>
            <br />
            <code className="card-text">use E_commmerce_Database;</code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create User Details
            </h6>
            <code className="card-text">
              create table userdetails(
              <br />
              user_id varchar(200) not null unique,
              <br />
              user_name varchar(200) not null,
              <br />
              user_email varchar(200) not null,
              <br />
              user_password varchar(200) not null,
              <br />
              user_phone varchar(12) not null,
              <br />
              user_address varchar(200) not null );
              <br />
              insert into userdetails
              <br />
              values("ui111","priyanshu","priyanshu@gmail.com","pri1234","9758485876","Rachi,Jharkhand"),
              <br />
              ("ui112","basir","basir121@gmail.com","basiri1287","9748485877","Cuttack,Odisha"),
              <br />
              ("ui113","sartaj","sartaj@gmail.com","sartaji1895","9335875459","Jatni,Odisha"),
              <br />
              ("ui114","sadab","sadab121@gmail.com","sadab8574","7077485236","Kendrapara,Odisha"),
              <br />
              ("ui115","smrutirupa","smrutirupa@gmail.com","123456","6735428910","Bhubaneswar,Odisha"),
              <br />
              ("ui116","priyanka","priyanka@gmail.com","094567","9864536712","Noida,Delhi"),
              <br />
              ("ui117","faran","fa123@gmail.com","Far8905","9943567821","Jajpur,Odisha"),
              <br />
              ("ui118","tushar","tushar21@gmail.com","tushar234","9856421342","Vishakhapatnam,Andra
              pradesh"),
              <br />
              ("ui119","monalisha","monalisha678@gmail.com","mona234","9876546701","bbsr,odisha"),
              <br />
              ("ui120","sudhansu","sudhansu116@gmail.com","sudhansu786","7865432102","jatni,Odisha"),
              <br />
              ("ui121","rakesh","rakesh43@gmail.com","rakesh123","933567890","bbsr,Odisha"),
              <br />
              ("ui122","Aman","aman@gmail.com","aman9876","7865432205","cuttack,Odisha"),
              <br />
              ("ui123","sonali","sonali123@gmail.com","sona345","7978160642","puri,odisha"),
              <br />
              ("ui124","tulasi","tulasi2076@gmail.com","lisa456","7077567890","ganjam,Odisha"),
              <br />
              ("ui125","saisimran","saisimran2004@gmail.com","sai378","9178299686","sambalpur,Odisha"),
              <br />
              ("ui126","prachi","prachi2005@gmail.com","pati789","7978881579","jatni,Odisha"),
              <br />
              ("ui127","aayush","aayush231@gmail.com","aayush1992","7077485198","Doranda,Jharkhand"),
              <br />
              ("ui128","nitesh","nitesh032@gmail.com","nitesh0032","7077485032","Singhmore,Hatia"),
              ("ui129","mayank","mayank185@gmail.com","mayank185","7077485185","Kokar,Ranchi"),
              <br />
              ("ui130","sibhasish","sibhasish197@gmail.com","sibhasish197","7077485197","Keonjhar,Odisha");
              <br />
            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 2</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Supplier Details
            </h6>
            <code className="card-text">
              create table supplierdetails(
              <br />
              supplier_id varchar(200) not null unique,
              <br />
              supplier_name varchar(200) not null,
              <br />
              store_name varchar (200) not null,
              <br />
              supplier_email varchar(200) not null,
              <br />
              supplier_password varchar(200) not null,
              <br />
              supplier_phone varchar(12) not null,
              <br />
              supplier_address varchar(200) not null,
              <br />
              supplier_paymentmethod varchar(200) not null,
              <br />
              supply_categories varchar(200) not null
              <br />
              );
              <br />
              insert into supplierdetails
              <br />
              values("su3489","pritam","Pritam store of
              garments","pritam2389@gmail.com","pritam34","9643789211","New
              Delhi,Delhi","Cod/Upi/Net Banking/Card","men and women, kids
              wears"),
              <br />
              ("su5673","raghav","apollo
              pharmacy","apollo@gmail.com","3478you","8650365489","Bhubaneswar,Odisha","Cod/Upi/Net
              Banking/Card","medicine"),
              <br />
              ("su987","prerana","sugar
              cosmetics","preranastore@gmail.com","prerana456","9835673892","Ranchi,Jharkhand","Cod/Upi/Net
              Banking/Card","beauty products"),
              <br />
              ("su8734","tara","childrens toy
              store","tara0987@gmail.com","tara4563","8974536789","Nagpur,Maharashtra","Cod/Upi/Net
              Banking/Card","childrens toy"),
              <br />
              ("si211","Debashish","Debashish
              Enterprises","debashis211@gmail.com","deb1234","9570020901","New
              Delhi,Delhi","Cod/Upi/Net Banking/Card","Electronics"),
              <br />
              ("si212","Hitesh","Hitesh
              Enterprises","hitesh212@gmail.com","hitesh5678","9570020910","Noida,UP","Cod/Upi/Net
              Banking/Card","Electronics"),
              <br />
              ("si213","Niyaz","Specare
              Enterprises","Specare@gmail.com","specare65678","8093911366","Odisha,Cuttack","Cod/Upi/Net
              Banking/Card","Electronics"),
              <br />
              ("su0986","dibya","relince
              fresh","relince@gmail.com","dibya345","984367299","Banglore,Karnataka","Cod/Upi/Net
              Banking/Card","home supplies"),
              <br />
              ("su6783","ravi","rabindra
              store","rabinra@gmail.com","rabindra678","9087456732","Attapur,Hydrabad","Cod/Upi/Net
              Banking/Card","Appliances"),
              <br />
              ("su3482","Akash","Akash Sports
              Store","akash1289@gmail.com","akash134","9643678510","New
              Delhi,Delhi","Cod/Upi/Net Banking/Card","Sports and fitness"),
              <br />
              ("su5613","Ayush","Ayush
              pharmacy","apollo@gmail.com","ayu7478","867896330","Bhubaneswar,Odisha","Cod/Upi/Net
              Banking/Card","Baby care"),
              <br />
              ("su9879","prajna","prajna variety
              store","prajnastore@gmail.com","prajna456","6789543210","Ranchi,Jharkhand","Cod/Upi/Net
              Banking/Card","Stationary & office supplies"),
              <br />
              ("si7542","Dinesh","Dinesh
              Grocery","dineshgrocery@gmail.com","dinesh45654","6789547210","Jatni,Odisha","Cod/Upi/Net
              Banking/Card","Grocery"),
              <br />
              ("si7543","Somnath","Somnath
              Decors","bajastore@gmail.com","bajah485450","6779583210","Cuttack,Odisha","Cod/Upi/Net
              Banking/Card","Home and Decor"),
              <br />
              ("si7544","Babu","Babu
              Automobiles","babuautomob@gmail.com","babu45654854","6789543558","Jajpur,Odisha","Cod/Upi/Net
              Banking/Card","Auto Accessories");
            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 3</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Category Details
            </h6>
            <code className="card-text">
            create table categorydetails( <br />
category_id varchar(200) not null unique, <br />
category_name varchar(200) not null, <br />
category_description varchar(200) , <br />
total_num_suppliers varchar(200) not null <br />
); <br />
insert into categorydetails <br />
values("ci121","Electronics","Electronics","3"),<br />
("ci122","Grocery","Grocery","1"),<br />
("ci123","Home and decor","Home and decor","1"),<br />
("ci124","Babycare","Baby care","1"),<br />
("ci126","Appliances","Appliances","1"),<br />
("ci127","Fashion","Men,women and kids wear","2"),<br />
("ci128","Beauty Products","beauty products","2"),<br />
("ci129","Stationary & Office Supplies","Stationaries","1"),<br />
("ci130","Childerns Toys","Toys","1"),<br />
("ci131","medicine","medicine","2"),<br />
("ci132","Auto-accessories","Auto-accessorie","1"),<br />
("ci133","Sports & Fitness","medicine","1"),<br />
("ci134","Home-supplies","Home-supplies","1");
             
            </code>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  )
}

export default Getcode
