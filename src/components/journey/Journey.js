import React from 'react'
import steps from '../../assets/steps.png'
import './journey.css'
import circle from '../../assets/circle.png'

function Journey() {
    return (
        <div>
            <div className="journey">
                <p className='learner'>LEARNERS' JOURNEY</p>
                <hr className='learnhr'/>
            </div>
            <div className='outercon'>
                <div className='innercon'>
                    <div className='roadvalue'>
                        <p className='road'>Road To Language Lab</p>
                        <p className='roadinside'>Step into the metaverse with Language Lab to develop communication skills in the most effective manner. From phonetics to soft skills courses, get a hold of the language with global experts and AI with ease.</p>
                    </div>
                    <div className='containerjourney'>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>1</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfect'>Perfect Phonetics</p>
                                <p className='foundation'>Perfecting Your Base Foundation</p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>2</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfect'>Focused Training</p>
                                <p className='foundation'>Learn with global educators in the area of your interest and needs </p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>3</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfect'>Practice With AI</p>
                                <p className='foundation'>Enhance your skills with AI driven tests </p>
                            </div>
                        </div>
                        <div className='mainboxcount'>
                            <div className='countbox'>
                                <p className='counting'>4</p>
                            </div>
                            <div className='perfectbox'>
                                <p className='perfect'>Assessment Scores</p>
                                <p className='foundation'>Professional analysis to perfect the needed areas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='stepsbox' src={steps}/>
                </div>
            </div>
            <div>
                <img src={circle} className='circle'/>
            </div>
        </div>
    )
}

export default Journey