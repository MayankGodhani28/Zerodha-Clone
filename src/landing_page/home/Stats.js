import React from 'react'

function Stats() {
    return( 
        <div className="container ">
            <div className="row p-5">
                <div className="col-6">
                    <h1 className='mb-4 fs-2'>Trust with confidence</h1>

                    <h2 className='mb-2'>Customer-first always</h2>
                    <p>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments</p>

                    <h2>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications.High quality apps that you use at your pace, the way you like.</p>

                    <h2>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.</p>

                    <h2>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>
                </div>
                <div className="col-6 ">
                    <img src='media/images/ecosystem.png' alt='Zerodha Ecosystem' style={{width:"85%" ,marginLeft:"15px"}} className=''/>
                    <div className="mx-5 mt-3">
                        <a href='' className='p-5' style={{textDecoration :"none"}}>Explore out products  &nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration :"none"}}>Try Kite  &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;