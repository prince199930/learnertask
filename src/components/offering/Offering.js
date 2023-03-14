import React from 'react'
import './Offering.css'
import meeting from '../../assets/meeting.png'
import discuss from '../../assets/discuss.png'
import circle from '../../assets/circle.png'
import rightcirc from '../../assets/rightcircle.png'

function Offering() {
    return (
        <>
       
        <div>
            <div className='offerbox'>
                <p className='offering'>OUR OFFERINGS</p>
                <hr className='offerhr' />
            </div>
            <div>
            <img className='rightcirc' src={rightcirc}/>
        </div>
            <div className='mainexplore'>
                <div className='explorebox'>
                    <p className='explore'>Explore Our Offerings</p>
                </div>
                <div >
                    <div className='offerdiv'>
                        <img src={meeting} />
                        <img style={{marginLeft:"-1%"}} src={discuss} />
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p  className='counting'>1</p>
                            </div>
                            <div className='descjourney'>
                                <p className='pardesc'>The LSRW Module </p>
                                <p className='descpara'>Highly effective listening, speaking, reading and writing methodologies</p>
                            </div>
                        </div>
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p className='counting'>2</p>
                            </div>
                            <div className='descjourney'>
                               <div className='descjourney'>
                                <p className='pardesc'> Lesson Studio </p>
                                <p className='descpara'> Grab customised learning materials for optimum results</p>
                            </div>
                            </div>
                        </div>
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p className='counting'>3</p>
                            </div>
                            <div className='descjourney'>
                            <div className='descjourney'>
                                <p className='pardesc'>  Skills Trainings & Workshops </p>
                                <p className='descpara'>Upskill and curate 21st-century skills</p>
                            </div>
                            </div>
                        </div>
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p className='counting'>4</p>
                            </div>
                            <div className='descjourney'>
                                <p className='pardesc'>Global Educators  </p>
                                <p className='descpara'> Connect with experts around the globe</p>
                            </div>
                        </div>
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p className='counting'>5</p>
                            </div>
                            <div className='descjourney'>
                                <p className='pardesc'> AI Assessment</p>
                                <p className='descpara'>Practice with AI, analyse your scores and generate your global ranking</p>
                            </div>
                        </div>
                        <div className='countdiv'>
                            <div className='countbox'>
                                <p className='counting'>6</p>
                            </div>
                            <div className='descjourney'>
                                <p className='pardesc'>User Friendly  </p>
                                <p className='descpara'>Learn with ease in the metaverse </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
         <div>
         <img className='offercirc' src={circle}/>
     </div>
     </>
    )
}

export default Offering