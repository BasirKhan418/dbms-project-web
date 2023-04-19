import React, { useEffect } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Dbmscode = () => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("logggg")
  }
  else{
  navigate("/login")
  }
})
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-3 mx-3 font" style={{position:'relative',top:50}}>Get Dbms Project Code</h1>
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
              user_id varchar(200) not null unique primary key,
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
              supplier_id varchar(200) not null unique primary key,
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
              Banking/Card","Auto Accessories"),<br />
              ("su6748","Ragini","MAX","max001@gmail.com","max20","9896453784","Banglore,karnataka","COD/UPI/Bank","men and women, kids wears");<br />
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
category_id varchar(200) not null unique primary key, <br />
category_name varchar(200) not null, <br />
category_description varchar(200) , <br />
total_num_suppliers varchar(200) not null <br />
); <br />
insert into categorydetails <br />
values("ci121","Electronics","Electronics","3"),<br />
("ci122","Grocery","Grocery","1"),<br />
("ci123","Home and decor","Home and decor","1"),<br />
("ci124","Babycare","Baby care","1"),<br />
("ci127","Fashion","Men,women and kids wear","2"),<br />
("ci128","Beauty Products","beauty products","1"),<br />
("ci129","Stationary & Office Supplies","Stationaries","1"),<br />
("ci130","Childerns Toys","Toys","1"),<br />
("ci131","medicine","medicine","2"),<br />
("ci133","Sports & Fitness","Sports and fitness","1"),<br />
("ci134","Home-supplies","Home-supplies","1");
             
            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 4</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Product Details
            </h6>
            <p>Read the product attributes if in your category any one of these not null marked attributes are not considerable leave this with blank "",</p>
            <code className="card-text">
            create table product_details(<br/>
product_id varchar(20) not null unique primary key,<br/>
supplier_id varchar(20) not null,<br/>
foreign key (supplier_id) references supplierdetails(supplier_id),<br/>
category_id varchar(20) not null,<br/>
foreign key (category_id) references categorydetails(category_id),<br/>
product_name varchar(200) not null,<br/>
product_description varchar(250),<br/>
product_sku varchar(200) not null unique,<br/>
product_mrp varchar(10) not null,<br/>
product_price varchar(10) not null,<br/>
product_inventory varchar(20) not null,<br/>
product_colour varchar(200),<br/>
product_size varchar(200)<br/>
);<br/>
insert into product_details<br/>
values("pr001","si211","ci121","Bluetooth speaker","5watt speaker with dolby atmos","spe001","2999","1499","20","blue","medium"),<br/>
("pr002","si211","ci121","Buds 2 pro","11mm dynamic driver","spe002","1999","999","25","Black",""),<br/>
("pr003","si211","ci121","Boat SmartWatch","Bluetooth calling watch","spe003","3999","2999","15","Grey","1.69 inch"),<br/>
("pr004","si212","ci121","Laptop","core i7 12th gen","spe004","69000","65999","10","Silver","16.5 inch"),<br/>
("pr005","si212","ci121","Smart Phone","Hellio G90T Prossecor","spe005","19999","17999","18","White","16.5 cm"),<br/>
("pr006","si212","ci121","Printer","Laser ink","spe006","12999","9999","5","Black",""),<br/>
("pr007","si213","ci121","Keyboard","Gaming","spe007","1599","1199","22","Multicolour",""),<br/>
("pr008","si213","ci121","Mouse","Gaming","spe008","2599","1999","10","Neon",""),<br/>
("pr009","si213","ci121","Neck Band","Wireless Bluetooth","spe009","999","699","13","Red",""),<br/>
("pr010","si213","ci121","Charger","120 Watt","spe010","699","599","8","White",""),<br/>
("pr011","su3489","ci127","Mens polo shirt","cotton material","spe011","3999","2499","150","blue,black,red","S,M,L,XL,XXL"),<br/>
("pr012","su3489","ci127","AURA flowy dress","rayon material","spe012","3999","2999","15","Black,blue,lavender,yellow","XS,S,M,L,XS,XXL"),<br/>
("pr013","su3489","ci127","KIDS frock for girl","cotton material","spe013","1999","799","20","Blue,black,green,yellow","Free size"),<br/>
("pr014","su6748","ci127","Mens baggy jeans","breathing material","spe014","2999","999","10","Black","32,34"),<br/>
("pr015","su3489","ci127","Woven Kanjivaram Saree ","pure silk","spe015","8999","5999","4","White,blue","6m"),<br/>
("pr016","su6748","ci127","Men Slim Fit Trousers","polyster","spe016","1999","399","12","Black,Blue","32,34,36"),<br/>
("pr017","su3489","ci127","Boys Festive & Party Kurta and Patiala Set","polyester","spe017","1599","799","22","Multicolour","2y-3y,4y-6y"),<br/>
("pr018","su6748","ci127","Embroidered Semi Stitched Anarkali Gown ","Georgette","spe018","1999","599","13","Red,Blue","Free Size"),<br/>
("pr019","su6748","ci127","Men Full Sleeve Printed Hooded Sweatshirt ","wool","spe019","999","499","3","Orange,Blue,Purple","Free Size"),<br/>
("pr020","su6748","ci127","Girls Printed T Shirt ","cotton blend","spe020","699","599","100","multicolor","free size"),<br/>
("pro21","su5673","ci131","Dettol","surface cleaning and personal hygiene liquid","spe021","221","255","30","blue","500ml"),<br/>
("pro22","su5673","ci131","namcoldtablets","consists of nimesulide and cetirizine","spe022","78","99","10","yellow",""),<br/>
("pro23","su5673","ci131","paracetamol","reduce a high temperature","spe023","150","140","20","white",""),<br/>
("pro24","su5673","ci131","becogem capsule","perfect treatment for mouth ulcers","spe024","250","115","10","black",""),<br/>
("pro25","su5673","ci131","crocin650 tablets","highly recommanded ","spe025","340","300","10","white",""),<br/>
("pro26","su5673","ci131","digne","acidityand gas relief gel mint syrup","spe026","218","200","30","white","450ml"),<br/>
("pro27","su5613","ci124","baby body wash","refreshingand antibacterial properties","spe027","275","172","12","white","400ml"),<br/>
("pro28","su5613","ci124","baby mat","double sided theme playmat","spe028","999","503","20","Green",""),<br/>
("pro29","su5613","ci124","baby stroller","outing with little one betricky","spe029","5499","3419","30","blue",""),<br/>
("pro30","su5613","ci124","blanket","fancy hooded blankets by huboftoddylon","speo30","899","249","20","pink",""),<br/>
("pr031","su8734","ci130","VikriDa Remote Control Fire Truck RC School Bus","Plastic,Rechargeable","spe031","999","699","150","red","small"),<br/>
("pr032","su8734","ci130","Little Olive Newton DIY Kit","Paper Material","spe032","1999","599","115","multicolor","medium"),<br/>
("pr033","su8734","ci130","Pillow Soft Playing Toy Teddy Bear ","Character: Elephant PILLOW","spe033","5999","999","40","pink","50 Cm Long "),<br/>
("pr034","su8734","ci130","VikriDa Dancing Cactus Talking Toy","Material: Plastic,Battery Operated","spe034","999","799","40","green","medium"),<br/>
("pr035","su8734","ci130","WiseWalker Children Boy","ABS Plastic Material","spe035","1999","999","42","multicolor","large"),<br/>
("pr036","su8734","ci130","SHALAFI Wooden Alphabet Puzzle ","wood","spe036","3999","2999","12","multicolor","medium"),<br/>
("pr037","su8734","ci130","CrazyBuy Magic Clay ","clay,non toxic","spe037","1599","799","22","Multicolour","12 pack"),<br/>
("pr038","su8734","ci130","PLAY PANDA Magnetic Puzzles","Non-toxic,Material: Magnet, Metal, Paper, Plastic","spe038","2999","599","20","multicolor","large"),<br/>
("pr039","su8734","ci130","Little Olive Bibo The Muscial Seal ","Material: Plastic,Non-battery Operated","spe039","2999","1999","3","Orange,Blue,Purple","large"),<br/>
("pr040","su8734","ci130","Migwow Talking Tom Cat ","Material: Plastic ,Battery Operated","spe040","2999","1599","100","grey","medium"),<br/>
("pr041","su987","ci128","lakme moisturiser body lotion","super hydrating,soft skin","speo41","399","267","10","","200ml"),<br/>
("pr042","su987","ci128","livon hair serum","soft silky smooth hair","speo42","120","100","16","","100ml"),<br/>
("pr043","su987","ci128","lakme brightening face scrub","highly refreshing, expoliating ","speo43","399","360","20","","300ml"),<br/>
("pr044","su987","ci128","huda beauty lipstick","longlasting, 16hr hold","speo44","389","299","14","rose,dank,ok boomer,swinger","50ml"),<br/>
("pr045","su987","ci128","mamaearth kajal","smudge proof ,highly pigmented","speo45","599","499","17","jet black,blue cole","50ml"),<br/>
("pr046","su987","ci128","faces canada eye liner","liquid,waterproof,matte","speo46","150","120","17","coal,blue,green","50ml"),<br/>
("pr047","su987","ci128","myglamm highlighter","creamy dwey shade","speo47","299","240","9","rose gold,champagen,gold","100ml"),<br/>
("pr048","su987","ci128","nyn huda eyeshadow","5 shimer shade,7 matte shade","speo48","500","450","11","shade1,shade2,shade3","1oml each"),<br/>
("pr049","su987","ci128","maybelline foundation","dwey finish,glowing formula,infused with vit-e","speo49","365","340","22","ivory,dusky,melon,drove","250ml"),<br/>
("pr050","su987","ci128","lakme compact powder","matte ,fine particles,sweat proof","speo50","325","299","5","dusky,dawn,fair,princess","150ml"),<br/>("pro51","su5673","ci131","vitaminE capsules","nourishes the skin","spe051","150","139","30","green",""),<br/>
("pro52","su5673","ci131","vitaminC gummies","healty and safe for kids&adults","spe052","300","149","30","white",""),<br/>
("pro53","su5673","ci131","Bonnisan liquid","effective for common digestive system","spe053","165","119","20","","100ml"),<br/>
("pro54","su5673","ci131","Liv.52","suitable for lever","spe054","240","219","30","white",""),<br/>
("pro55","su5613","ci124","kid's charm","fabric material with teddy design","speo55","999","727","30","blue",""),<br/>
("pro56","su5613","ci124","baby sampoo","fruit extracts,no hypoallergenic","speo56","349","284","20","","500ml"),<br/>
("pro57","su5613","ci124","baby bath towel","made of fabric material","speo57","599","249","20","pink","medium"),<br/>
("pro58","su5613","ci124","baby Nail Clipper box","soft tipped tweezers with extra ear spoon","speo58","499","194","20","multicolour",""),<br/>
("pro59","su5613","ci124","baby bath tub","inflatable baby pool","speo59","699","299","20","multicolour","large"),<br/>
("pro60","su5613","ci124","baby powder","keeps skin fresh ans dry","speo60","349","282","20","","500g"),<br/>
("pr061","si7542","ci122","Good Day Rice","Pure Rice","spe061","1699","1499","20","White","25 Kg"),<br/>
("pr062","si7542","ci122","Sugar","fined quality","spe062","50","49","50","White","1 Kg"),<br/>
("pr063","si7542","ci122","Arhar Daal","Pure & fresh","spe063","128","117","30","Yellow","500 gm"),<br/>
("pr064","si7542","ci122","Red Lable Tea","Assam Leaves","spe064","349","310","26","Black","500 gm"),<br/>
("pr065","si7542","ci122","Amulyaa Powder","Milk Powder","spe065","400","369","23","White","1 Kg"),<br/>
("pr066","si7542","ci122","Almonds","Finely cleaned","spe066","699","650","10","","500 gm"),<br/>
("pr067","si7542","ci122","Pistacio","Salted","spe067","999","859","10","Green","500 gm"),<br/>
("pr068","si7542","ci122","Shampoo","Anti Dandruff","spe068","399","339","50","White","450 ml"),<br/>
("pr069","si7542","ci122","Hair Oil","Cool","spe069","250","250","10","Red","250 ml"),<br/>
("pr070","si7542","ci122","Body Wash","Smooth Skin","spe070","699","599","15","White","450 ml"),<br/>
("pr071","si7543","ci123","Photo Frame","Sun Rise Scene","spe071","299","299","15","Multie Colour","16*15 cm"),<br/>
("pr072","si7543","ci123","DJ Light","360 Rotateable","spe072","180","180","10","Multie colour",""),<br/>
("pr073","si7543","ci123","Pen Stand","Fancy for Decoration","spe073","150","150","15","White",""),<br/>
("pr074","si7543","ci123","Stand Light","Two stand light flower design","spe074","450","399","10","Multie colour","4 inch"),<br/>
("pr075","si7543","ci123","Jar Light","Multie colour light inside jar","spe075","500","399","10","Multie colour",""),<br/>
("pr076","si7543","ci123","Clock","Apple Shaped clock","spe076","199","199","15","Yellow & Brown",""),<br/>
("pr077","si7543","ci123","Grass Matt","Plastic grass door matt","spe077","150","150","15","Green","100*50 cm"),<br/>
("pr078","si7543","ci123","Table Cloth","Plastic Table cloth","spe078","150","150","10","Red","500*250 cm"),<br/>
("pr079","si7543","ci123","Bed Sheet","Full bed Flowed design","spe079","500","450","07","Green","Full"),<br/>
("pr080","si7543","ci123","Pillow Cover","Pack of two pillow covers","spe080","150","150","15","White",""),<br/>
("pr081","su9879","ci129","pencil","for drack and neat writting","speo81","80","40","12","red,green,orange",""),<br/>
("pr082","su9879","ci129","pen","waterproof ink for smooth and fast writting","speo82","120","100","6","black,blue,red",""),<br/>
("pr083","su9879","ci129","iraser","cleanly eraising","speo83","150","60","10","multicolor","regular"),<br/>
("pr084","su9879","ci129","sharpner","for smooth & fine point sharpening","speo84","200","78","17","orange,sky,green",""),<br/>
("pr085","su9879","ci129","drawing book","skecth papers are excellent","speo85","499","244","5","craft brown",""),<br/>
("pr086","su9879","ci129","plane notebook","pages are pure white","speo86","88","65","21","","A5"),<br/>
("pr087","su9879","ci129","desk station","multifunctional small objects and cable management system","speo87","425","340","15","",""),<br/>
("pr088","su9879","ci129","stapler","skin stapler is used to close epidermis layer","speo88","500","450","4","",""),<br/>
("pr089","su9879","ci129","numbering machine","easy to use & smooth working","speo89","1000","899","24","","55*30mm"),<br/>
("pr090","su9879","ci129","calculator","ensure continuous and long lasting usage","speo90","1280","1200","25","","20*121*123mm"),<br/>
("pr091","su3482","ci133","XSAW 20-20 Cricket Wicket Keeping Gloves","high quality material","spe091","899","699","50","blue,black","small"),<br/>
("pr092","su3482","ci133","Fenta Sports Premium Cricket Kit Bag","Bag Capacity: 50 ml","spe092","1399","899","11","black","xxl"),<br/>
("pr093","su3482","ci133","YONEX ZR Strung Badminton Racquet","Grip Size: G4 - 8.25 cm,Weight: 85g,Head Shape:-Isometric Shape","spe093","750",<br/>"499","40","black,grey","Grip Size:G4-8.25cm"),<br/>
("pr094","su3482","ci133","AIR Pump Football Football ","Core Material: PVC,Water Resistant","spe094","1999","799","50","black","5"),<br/>
("pr095","su3482","ci133","Liffo Protective Skating Guard Kit for Kids","Type: Skating Guard Combo","spe095","999","599","112","green,yellow,pink,blue","small"),<br/>
("pr096","su3482","ci133","T N M Folding Allen Key Set Cycling Kit","portable,waterprof","spe096","599","199","126","black,silver","Width: 4.5 cm,Height: 9 cm,Depth: 9 cm"),<br/>
("pr097","su3482","ci133","PVC Weight Dumbbell Set","Type:Adjustable Dumbbell","spe097","1599","799","224","black","Weight: 10kg"),<br/>
("pr098","su3482","ci133","VIFITKIT Anti-Skid Yoga Mat with Carry Bag","Reversible ,Slip Resistant","spe098","1499","599","120","black,purple,green,yellow","Thickness: 6 mm"),<br/>
("pr099","su3482","ci133","Advit Posture corrector belt ","BACK PAIN RELEIF","spe099","1599","299","123","black","free size"),<br/>
("pr100","su3482","ci133","Fitastic Tornado White Classic Shaker ","Material: Plastic ","spe100","999","599","100","white","large"),<br/>
("pr101","su0986","ci134","2 layer luch box","high quality material","spe101","4499","899","50","blue,black,red,orange","medium"),<br/>
("pr102","su0986","ci134","4 layer luch box","material steel","spe102","8499","1899","20","black,blue","medium"),<br/>
("pr103","su0986","ci134","Water heater","220 volt smart electric","spe103","4750","1999","40","black,grey","medium"),<br/>
("pr104","su0986","ci134","Egg Boiler","6 egg boil ata at a time","spe104","4399","799","50","black,grey","small"),<br/>
("pr105","su0986","ci134","Mini mixer blender","rechargeable mixer blender","spe105","1199","599","112","green,yellow,pink,blue","small"),<br/>
("pr106","su0986","ci134","Silicon mat","bakin mat","spe106","599","199","126","black,red","medium"),<br/>
("pr107","su0986","ci134","Washing Bowl","washing bowl for kitchen","spe107","1599","799","224","black","large"),<br/>
("pr108","su0986","ci134","Vegetable peler","durable and material steel","spe108","149","49","120","black,purple,green,yellow","small"),<br/>
("pr109","su0986","ci134","lighter and knife","combo pack ","spe109","159","89","123","black","small"),<br/>
("pr110","su0986","ci134","mixer grinder","Material: Plastic ","spe110","9999","4599","100","white","large");<br/>


            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 5</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Order Details
            </h6>
            <p>There are five possibilities in order status.There are pending,shipped,delivered,rto,cancelled.In order_payment_method possibilities are card,upi,net banking,wallet,cod.In order_shipment_type there are 2 possibilities Prepaid,Cod.In order_courier there are so many companies are there such as Dtdc,e-kart,X-pressbees,Delhivery,bluedart,e-com express.Here Product_id is foreign key .Price should be same as in product_details.</p>
            <code className="card-text">
            create table order_details(<br/>
order_id varchar(20) not null unique primary key,<br/>
product_id varchar(20) not null,<br/>
foreign key (product_id) references product_details(product_id),<br/>
user_id varchar(20) not null,<br/>
foreign key (user_id) references userdetails(user_id),<br/>
order_number varchar(20) not null,<br/>
order_quantity varchar(250),<br/>
order_payment_method varchar(200) not null,<br/>
order_price varchar(10) not null,<br/>
order_status varchar(10) not null,<br/>
order_courier varchar(20) not null,<br/>
order_shipment_type varchar(200),<br/>
order_shipdate varchar(200)<br/>
);<br/>
insert into order_details<br/>
values("or041","pr041","ui111","orno041","4","Upi","267","pending","Delhivery","Prepaid","14/04/2023"),<br/>
("or042","pr042","ui112","orno042","1","wallet","100","delivered","Dtdc","cod","17/04/2023"),<br/>
("or001","pr011","ui113","orno011","5","Upi","12,495","delivered","Delhivery","Prepaid","01/04/2023"),<br/>
("or002","pr013","ui115","orno012","1","wallet","799","delivered","Dtdc","cod","17/04/2023"),<br/>
("or003","pr014","ui114","orno013","2","cod","1998","pending","Bluecart","Prepaid","23/04/2023"),<br/>
("or004","pr015","ui124","orno014","1","upi","5999","pending","e-kart","Prepaid","19/04/2023"),
("or005","pr092","ui118","orno015","3","cod","2697","delivered","Bluecart","Prepaid","03/04/2023"),<br/>
("or006","pr095","ui122","orno016","1","upi","599","pending","e-kart","prepaid","27/04/2023"),<br/>
("or07","pr097","ui116","orno017","2","wallet","1589","deliverd","e-kart","cod","09/04/2023"),<br/>
("or008","pr033","ui120","orno018","2","wallet","1998","pending","Delhivery","cod","21/04/2023"),<br/>
("or009","pro57","ui124","orno018","3","cod","799","deliverd","Dtdc","cod","11/04/2023"),<br/>
("or010","pro53","ui127","orno019","1","upi","119","pending","e-kart","prepaid","24/04/2023"),<br/>
("or011","pr031","ui117","orno020","2","wallet","1499","deliverd","Dtdc","cod","01/04/2023"),<br/>
("or012","pr040","ui130","orno021","4","cod","6499","pending","e-kart","cod","29/04/2023"),<br/>
("or013","pr033","ui111","orno022","1","upi","999","deliverd","Bluecart","prepaid","09/04/2023"),<br/>
("or014","pr039","ui112","orno023","2","cod","3699","pending","Delhivery","cod","24/04/2023"),<br/>
("or015","pr035","ui118","orno024","4","upi","3500","deliverd","e-kart","prepaid","12/04/2023"),<br/>
("or016","pr001","ui111","orno025","1","Upi","1499","Confirmed","E-Kart","Prepaid","29/04/23"),<br/>
("or017","pr110","ui112","orno026","1","Net banking","4599","Delivered","Amazon","COD","17/04/2023"),<br/>
("or018","pr041","ui113","orno027","3","Upi","267","Shipped","Delhivery","Prepaid","22/04/2023"),<br/>
("or019","pr039","ui114","orno028","1","Cash","1999","Deliverd","E-Kart","COD","14/04/2023"),<br/>
("or020","pr105","ui115","orno029","4","Net Banking","599","pending","Delhivery","Prepaid","30/04/2023"),<br/>
("or021","pr098","ui116","orno030","2","Upi","599","Shipped","Amazon","Prepaid","01/05/2023"),<br/>
("or022","pr045","ui117","orno031","5","Cash","499","Confirmed","X-Press","Prepaid","28/04/2023"),<br/>
("or023","pr076","ui118","orno032","1","Upi","199","Delivered","Delhivery","Prepaid","18/04/2023"),<br/>
("or024","pr081","ui119","orno033","1","Cash","40","Shippment Ready","E-Kart","Prepaid","28/04/2023"),<br/>
("or025","pro55","ui120","orno034","1","Upi","727","Confirmed","Amazon","Prepaid","30/04/2023"),<br/>
("or026","pr012","ui121","orno035","1","Upi","2999","Shipped","X-Press","Prepaid","25/04/2023"),<br/>
("or027","pr069","ui122","orno036","1","Net Banking","250","Ordered","Delhivery","Prepaid","05/05/2023"),<br/>
("or028","pr095","ui123","orno037","1","Upi","599","Delivered","Amazon","Prepaid","16/04/2023"),<br/>
("or029","pr100","ui124","orno038","1","Upi","599","pending","E-Kart","Prepaid","26/04/2023"),<br/>
("or081","pr081","ui111","orno081","1","Upi","40","delivered","E-kart","cod","14/04/2023"),<br/>
("or082","pr082","ui112","orno082","4","card","100","delivered","Dtdc","cod","13/04/2023"),<br/>
("or083","pr083","ui113","orno083","3","wallet","60","shipped","e-com","prepaid","28/04/2023"),<br/>
("or084","pr084","ui114","orno084","2","Upi","78","cancelled","E-kart","cod","25/04/2023"),<br/>
("or085","pr085","ui115","orno085","9","wallet","244","rto","Delhivery","prepaid","15/04/2023"),<br/>
("or086","pr086","ui116","orno086","5","cod","65","pending","bluedart","prepaid","9/05/2023"),<br/>
("or087","pr087","ui117","orno087","6","net banking","340","cancelled","X-pressbees","cod","29/03/2023"),<br/>
("or088","pr088","ui118","orno088","1","card","450","rto","Dtdc","cod","28/04/2023"),<br/>
("or089","pr089","ui119","orno089","2","Upi","899","delivered","e-com","prepaid","3/05/2023"),<br/>
("or090","pr090","ui120","orno090","1","card","1200","shipped","bluedart","prepaid","11/05/2023");<br/>

            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 6</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Offer Details
            </h6>
            <code className="card-text">
            create table offer_details(<br/>
offer_id varchar(20) not null unique primary key,<br/>
offer_name varchar(20) not null,<br/>
offer_discount varchar(20) not null,<br/>
offer_coupon varchar(250) not null unique,<br/>
orffer_start_date varchar(10) not null,<br/>
offer_end_date varchar(10) not null<br/>
);<br/>
insert into offer_details<br/>
values("of003","big billion days","40%","sp20025","02/04/2023","28/04/2023"),<br/>
("of004","Greate indian sale","20%","sp2007","01/04/2023", "26/04/2023"),<br/>
("of005","holi sale","60%","sp20045","05/05/023","29/04/2023"),<br/>
("of006","dhanteras sale","40%","sp20048","03/05/023","26/04/2023"),<br/>
("of007","diwali sale","40%","sp20014","03/06/023","27/06/2023");<br/>
            </code>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Phase 7</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Create Offer Applicable Products
            </h6>
            <code className="card-text">
            create table offer_applicable_products(<br/>
offer_id varchar(20) not null,<br/>
foreign key (offer_id) references offer_details(offer_id),<br/>
product_id varchar(20) not null,<br/>
foreign key (product_id) references product_details(product_id),<br/>
offer_budget varchar(20) not null,<br/>
offer_applicable_time varchar(20) not null<br/>
);<br/>
insert into offer_applicable_products<br/>
values("of003","pro21","1000rs","once per user"),<br/>
("of003","pro22","2000rs","unlimited times"),<br/>
("of003","pro58","1000rs","twice per user"),<br/>
("of004","pro24","1000rs","once per user"),<br/>
("of007","pro54","2000rs","twice per user"),<br/>
("of004","pro55","2000rs","once per user"),<br/>
("of004","pro23","1000rs","unlimited times"),<br/>
("of007","pro27","2000rs","once per user"),<br/>
("of005","pro59","1000rs","twice per user"),<br/>
("of007","pro56","1000rs","once per user");<br/>
            </code>
          </div>
        </div>
      
      </div>
<Footer/>
    </div>
  )
}

export default Dbmscode 
