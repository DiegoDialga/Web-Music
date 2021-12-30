//    <link rel="stylesheet" href="css files/style.css">
//    <link rel ="stylesheet" media="screen and (max-width: 1170px)" href="css files/phone.css">


import React from 'react';
import './main_page.css';
import './phone.css';
import './WarnUser';

function Main_page(){
  return (
  <div className="main_page">
    <div className="navbar">
      <a className="nav_option" href="#btn">Home</a>
      <a className="nav_option" href="#services">Services</a>
      <a className="nav_option" href="#navbar" onClick="<WarnUser/>">About us</a>
      <a className="nav_option" href="#navbar" onClick="<WarnUser/>">Contact us</a>
    </div>
    <div className="body">
    <section id="home">
        <h1 className="h-primary">Welcome to the songs section.</h1>
        <p>This website has some of the songs whose links are attached with the code.
         This website is primarily divided into three sections, which are shown below.</p>
        <button className = "btn"><a href="#services">Get started</a></button>
    </section>

    <section className ="services-container">
        <h1 className="h-primary center">Our Services</h1>
        <div id="services">
            <div className ="box_anime">
                <a href="">
                {/*<img src="pictures/images (2).jpg" alt="Image not avaliable"/>*/}
                <h2 className="h-secondary center">Anime songs</h2>
                <p className ="p-secondary center">Here we provide services with Anime songs.</p></a>
            </div>

            <div className ="box_english">
                <a href="">
                {/*<img src="images/1 direction.png" alt="Image not avaliable"/>*/}
                <h2 className="h-secondary center"> English songs</h2>
                <p className ="p-secondary center">Here we provide services with One direction and English songs.</p></a>
            </div>

            <div className ="box_hindi">
                <a href ="">
                {/*<img src="pictures/kesari.png" alt="Image not avaliable"/>*/}
                <h2 className="h-secondary center">Hindi songs</h2>
                <p className ="p-secondary center">Here we provide services with Hindi songs.</p></a>
            </div>

        </div>
    </section>
    </div>
  </div>
);
}

export default Main_page;
