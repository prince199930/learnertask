import React from 'react'
import '../journey/journey.css'
import steps from '../../assets/meeting.png'
import './recruit.css'

function Recruit() {
  return (
    <div>
        <div className="journey">
        <hr  className='jrneyhr'/>

                <p className='learner'>UNIVERSITY JOURNEY</p>
            </div>
            <div className='outerconuniv'>
                <div className='innercon'>
                    <div className='roadvalue'>
                        <p className='road'>Recruit Excellence</p>
                        <p className='roadinside'>Hive Steps presents the future development platform to develop communication skills and a strategic mindset to bridge the professional gap between campus and corporate for students.</p>
                    </div>
                    <div className='containerjourney'>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>1</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='soft'>Soft Skills/ Technical Training</p>
                                <p className='foundation'>Learn from global educators in your interest fields</p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>2</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfects'>Practice with AI </p>
                                <p className='foundation'>Sharpen your skills with AI driven insights </p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>3</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfects'>Assessment Scores </p>
                                <p className='foundation'>Analyse and work on your soft skills with the help of our comprehensive assessments scores. </p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>4</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='usperfects'>US Branding </p>
                                <p className='foundation'>Collaborate to get global recognition and increase your institution's standing in the world. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='stepsboximg' src={steps}/>
                </div>
            </div>
            <button type="button" class="btn btn-light newbtn">Connect With Us</button>


    </div>
  )
}

export default Recruit