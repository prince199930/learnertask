import React from 'react'
import './Questions.css'

function Questions() {
  return (
    <div>
            <div className='trainouter'>
                <hr className='qnshr' />
                <p className='qnspara'>WANT TO CLEAR YOUR DOUBTS?</p>
                <hr className='qnshr' />
            </div>
            <div className='chooseouter'>
                <p className='frequently'> Frequently Asked Questions</p>
                <p className='langpara'>Hive steps bridges the gap between learning a new language with ease, practice and real-time feedback through its futuristic platform. Based on years of research from global educators to help learn with confidence. Be it IELTS, SAT, or any interview.</p>
            </div>
            <div className='choosetheory'>
                <div className="card qncard" >
                    <div className="card-body">
                        <h5 className="card-title qncardtitle">Q.How do I sign up for corporate training for my college students?</h5>
                        <p className="card-text qncardtext">Click on Connect with us and sign up the futuristic training platform.</p>
                    </div>
                </div>
                <div className="card qncard">
                    <div className="card-body">
                        <h5 className="card-title qncardtitle">Q.Will I receive any certificate for completing the training?</h5>
                        <p className="card-text qncardtext"> Yes, after completing the training course, you will receive the certificate for the same.</p>
                    </div>
                </div>
                <div className="card qncard">
                    <div className="card-body">
                        <h5 className="card-title qncardtitle"> Q.How will I get access to my selected candidates?</h5>
                        <p className="card-text qncardtext"> After logging in your account, you can access the selected candidates.</p>
                    </div>
                </div>
                <div className="card qncard">
                    <div className="card-body">
                        <h5 className="card-title qncardtitle">Q.What should I do to access the same questionnaires again?</h5>
                        <p className="card-text qncardtext">You can go the company's website to access the same questionnaire again.</p>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default Questions