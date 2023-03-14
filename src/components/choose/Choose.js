import React from 'react'
import './choose.css'
import stats from '../../assets/stats.png'
import aiimg from '../../assets/ai.png'
import hand from '../../assets/hand.png'
import ar from '../../assets/ar.png'
import rightcircle from '../../assets/rightcircle.png'

function Choose() {
    return (
        <div>
            <div className='trainouter'>
                <hr className='choosehr' />
                <p className='trainpara'>YOUR TRAINING PARTNER</p>
                <hr className='choosehr' />
            </div>
            <div className='chooseouter'>
                <p className='choose'> Why Choose Us?</p>
                <p className='langpara'>Language lab is a perfect solution to learn languages from foundation to advanced. Our 21st century, user-friendly software enables learning with AI driven communication assessments and scores. Learn in the meta.</p>
            </div>
            <div className='choosetheory'>
                <div className="card" >
                    <img src={stats} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title global">Global/ Industry Experts</h5>
                        <p className="card-text">Acquire the need-specific skills from all around the globe</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title lesson">Lesson Studio</h5>
                        <p className="card-text">Grab customised learning materials for optimum results</p>
                    </div>
                </div>
                <div className="card">
                    <img src={hand} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title lsrw"> The LSRW Module </h5>
                        <p className="card-text"> Highly effective listening, speaking, reading and writing methodologies</p>
                    </div>
                </div>
                <div className="card">
                    <img src={aiimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ai">AI Assessments </h5>
                        <p className="card-text">Analyse your skills with AI and experts</p>
                    </div>
                </div>

            </div>
            <button type="button" class="btn btn-light newbtn">Connect With Us</button>
            <div>
                <img className='chooseimg' src={rightcircle}/>
            </div>

        </div>
    )
}

export default Choose