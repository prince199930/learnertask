import React, { useState } from 'react'
import cir from '../../assets/rightcircle.png'
import './Value.css'
import Carousel from "react-simply-carousel";
import human from '../../assets/human.png'
import rightcircle from '../../assets/rightcircle.png'


function Value() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    let data=[
        {
        image:human,
        title:"Individuals",
        descriptiom:"Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform."
    },
        {
        image:human,
        title:"University",
        descriptiom:"Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform."
    },
        {
        image:human,
        title:"Corporations",
        descriptiom:"Make a social change by providing quality education and training to the youth of our country"
    },
        {
        image:human,
        title:"Individuals",
        descriptiom:"Get your students ready and active for the mysterious corporate world with our AI-driven skill-based training platform."
    }
]

    return (
        <div>
            
            <div className='value'>
                <hr className='hrvalue'/>
                <p className='paravalue'>OUR VALUES</p>
                <hr className='hrvalue' />
            </div>
            <div className='valuedesc' >
                <div className="rightcirc">
                    <img src={cir} className="cir" />
                </div>
                <div>
                    <p className='stake'>Our Stakeholders</p>
                </div>

            </div>
            <div style={{position:"relative"}}>
        <img src={rightcircle} className='rightcircle'/>
    </div>
           


                <div className='maincontainer'>

                    <Carousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={3}
                        itemsToScroll={1}
                        forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                                marginLeft:80,
                            },
                            children: <span>{`>`}</span>,
                        }}
                        backwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                                marginRight:80,

                            },
                            children: <span>{`<`}</span>,
                        }}
                        responsiveProps={[
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                minWidth: 768,
                            },
                        ]}
                        speed={400}
                        easing="linear"
                    >

{data.map((item, index) => (
        <div className='divout'>
            <img style={{height:"100px", width:'100px',marginLeft:"-60%", marginTop:"3%", marginRight:"25px !important"}} src={item.image}/>
            <p className='title' >{item.title}</p>
            <p className='tidesc'>{item.descriptiom}</p>
                    </div>
        ))}
                        
                            
                        
                    
                    </Carousel>
                   

                </div>
    <button type="button" class="btn btn-light newbtn">Connect With Us</button>
    


                
            </div>
        
    )
}

export default Value