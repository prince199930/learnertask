import React, { useState, StrictMode } from "react";
import Carousel from "react-simply-carousel";
import './partner.css'
import monkey from '../../assets/monkey.png'
import chitkara from '../../assets/Chitkarauniversity.png'
import citizen from '../../assets/Citizentele .png'
import circle from '../../assets/circle.png'

function Partner() {
  const [activeSlide, setActiveSlide] = useState(0);
  let data=[monkey, chitkara, citizen, monkey]

  return (
    <>
    <div>
      <img className="circimg" src={circle}/>
    </div>
    <div className="partnerouter">
    <p className="partnerbox">YOUR TRAINING PARTNER</p>
    <hr className="partnerhr"/>
</div>
<p className="our">Our Partners</p>
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-evenly",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            background:"#540375",
            borderRadius:"50%",
            color:"#fff",
            fontSize:"30px",
            fontWeight:"bold"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            background:"#540375",
            borderRadius:"50%",
            color:"#fff",
            fontSize:"30px",
            fontWeight:"bold"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
                marginTop:20,
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
            background:"#C6B7C9"

            }
          },
          activeItemBtnProps: {
            style: {
                marginTop:20,
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "#540375"
            }
          }
        }}
        itemsToShow={3}
        speed={400}
      >
        {data.map((item, index) => (
          <img
            style={{
              background: "yellow",
              width: 300,
              height: 300,
              border: "30px solid white",
              textAlign: "center",
              lineHeight: "",
              boxSizing: "border-box",
              marginRight:"20px"
            }}
            key={index}
            src={item}
          />
        
        ))}
      </Carousel>
      <button type="button" class="btn btn-light newbtn">Connect With Us</button>

    </div>
    </>
  );
}

export default Partner;