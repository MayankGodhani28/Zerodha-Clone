import React from 'react'

function Eduction() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img style={{width:"65%"}} src='media/images/education.svg' alt='education image'/>>
                </div>
                <div className="col-6">
                    <h1 className='mb-4'>Free and open market education</h1>
                    <p> Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading</p>
                    <a href='' style={{textDecoration :"none"}}> Versity  &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                  
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
                    <a href='' style={{textDecoration :"none"}}>TradingQ&A &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                
                </div>
               
            </div>
        </div>
     );
}

export default Eduction;