import React from 'react'

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className='row text-center '>
                <img src='media/images/homeHero.png' alt='hero image' className='mb-2'/>
                <h1 className='mt-5'>Investing in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className=' fs-5 p-2 btn btn-primary' style={{width:"20%" , margin: "0 auto"}}>SignUp Now</button>
            </div>
           
        </div>
     );
}

export default Hero;