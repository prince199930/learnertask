import React from 'react'
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import linkenin from '../../assets/linkedin.png';
import './Footer.css'

function Footer() {
    return (
        <>
        <div className='footerouter'>
            <div className='abt'>
                <div className='insideabt'>
                    <p className='abtpara'>About Us</p>
                    <hr className='abthr'/>
                </div>
                <p className='abtdesc'>Language Learning Platform powered by Artificial Intelligence</p>
            <button type="button" class="btn btn-light knowbtn">Know More</button>

            </div>
            <div className='abt'>
                <div className='insideabt'>
                    <p className='abtpara'>Featured Links</p>
                    <hr/>

                </div>
                <p className='abtdesc'>Gallery</p>
                <p className='abtdesc'>Blogs</p>
                <p className='abtdesc'>Contact Us</p>
            </div>
            <div className='abt'>
                <div className='insideabt'>
                    <p className='abtpara'>Other Offerings</p>
                    <hr/>

                </div>
                <p className='abtdesc'>Princeton</p>
                <p className='abtdesc'>Hive Grad</p>
                <p className='abtdesc'>fakerz</p>
            </div>
            <div className='abt'>
                <div className='insideabt'>
                    <p className='abtpara'> Contact Info</p>
                    <hr/>

                </div>
                <p className='abtdesc'>+ 91-9560573049</p>
                <p className='abtdesc'>support@hivesteps.com</p>
                <div className='insideabt'>
                    <p className='abtpara'>Social Media</p>
                    <hr/>
                </div>
                <div className='abtimg'>
                    <img  src={fb}/>
                    <img src={twitter}/>
                    <img src={youtube}/>
                    <img src={linkenin}/>
                </div>
            </div>
        </div>

        <div>
            <hr className='footstyle'/>
            <div className='infoot'>
                <p className='foottitle'>Princeton2022 All Right reserved</p>
                <p className='line'>|</p>
                <p className='foottitle'>Site Map</p>
                <p className='line'>|</p>
                <p className='foottitle'>Privacy Policy</p>
                <p className='line'>|</p>
                <p className='foottitle'>Terms And Conditions Only</p>
            </div>
        </div>

        </>
    )
}

export default Footer