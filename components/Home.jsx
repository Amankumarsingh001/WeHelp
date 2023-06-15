import React from 'react'
import vg from "../assets/assets2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>wehelp</h1>
                    <p>the Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        we are your one and only soluton to the tech and developement problems
                        you may be facing
                        every day . we are the leading tech company whose aim is to
                        make you query and confusion free without bearing any cost.
                    </p>
                </div>

            </div>
            <div className='home3' id='about'>
                <div>
                    <h1> Who we are ?</h1>
                    <p> well , we are an association of developers who are just looking forward to help and suggest all help seekers a perfect path to follow , we dont want everyone to go through the struggle and all problems we already have seen throughout . we demand no charge and desire just for your satisfaction and clarity . we as a association have people in every tech and developement sector to fetch you the best suggestions . reach out to us 24x7 from the contact section and we will serve you the best :) Feel free to drop your valuable feedback it 'll help us to improve more . THANKS </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home