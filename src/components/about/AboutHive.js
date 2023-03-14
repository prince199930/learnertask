import React from 'react'
import './AboutHive.css'
import ai from '../../assets/aiglobe.png'
import circle from '../../assets/circle.png'
import Value from '../values/Value'
import Journey from '../journey/Journey'
import Recruit from '../recruit/Recruit'
import Offering from '../offering/Offering'
import Choose from '../choose/Choose'
import Questions from '../questions/Questions'
import Partner from '../partner/Partner'
import Footer from '../footer/Footer'

function AboutHive() {
    return (
        <>
        <div className='abouthive'>
            <p className='abtstep'>ABOUT HIVE STEPS</p>
            <div className='innercon'>
                <div>
                    <p className='lang-platform'>Language learning Platform Powered By Artificial Intelligence</p>
                    <p className='base'>Hive steps bridges the gap between learning a new language with ease, practice and real-time feedback through its futuristic platform. Based on years of research from global educators to help learn with confidence. Be it IELTS, SAT, or any interview.</p>
                    <ul className='list'>
                        <li>Includes Learning Courseware and Practice Modules </li>
                        <li>Focused on Reading, Listening, Writing and Speaking in the right order </li>
                        <li>Create your own content & Assessments easily </li>
                        <li>Scalable Cloud solutions to grow as your needs grow.</li>
                    </ul>
                    <button type="button" class="btn btn-light connect">Connect With Us</button>

                </div>
                
                <div className='imagebox'>
                    <img className='aiglobe' src={ai} />
                </div>
            </div>
        <Value/>
        <Journey/>
        <Recruit/>
        <Offering/>
        <Choose/>
        <Questions/>
        <Partner/>
        <Footer/>
        </div>
        </>
    )
}

export default AboutHive