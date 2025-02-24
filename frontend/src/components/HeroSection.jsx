import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
             <div class="fixes-bottom right-100 p-3" style={{ xIndex:'6',left:'initial', position:'fixed', bottom:'15px', right:'15px'}}>  
<a href = "https://wa.me/917303909682?text=hello how can help you ?" target="_blank">
<img  src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg" style={{width : "70px"}} />
</a>
</div>
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
