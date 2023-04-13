import React from 'react'
import { InstagramIcon } from '../../assets/intagramIcon'
import { LinkedinIcon } from '../../assets/LinkedinIcon'
import { TwitterIcon } from '../../assets/TwitterIcon'

export const Hero = () => {
  return (
    <section className="hero" id="home">
        <div className="hero__content">
            <div className="hero__content--left">
                <div className ="hero__title">
                    <h1>Hi 👋,
                        My name is
                        Victor Marquez
                        I build things for web
                    </h1>
                </div>
                
                    <section className='redes'>
                        <div className="redes__icons">
                            <InstagramIcon />
                            <LinkedinIcon />
                            <TwitterIcon />
                        </div>
                    </section>
               
                <button className="button hero__btn"><a href="assets/images/Victor Marquez-CV.pdf " download>Download CV</a></button>
            </div>
            <figure className='hero__avatar'>
                <img src="https://pbs.twimg.com/profile_images/1566842149961965568/eFAIk3Jw_400x400.jpg" alt="" />
            </figure>
        </div>
    </section>
  )
}
