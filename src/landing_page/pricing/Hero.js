import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center ">
      <div className="row border-bottom pb-5">
        <h1 className="mb-3">Pricing</h1>
        <h3 className="text-muted fs-5">
          free equity investment and flate $20 traday and F& O trades
        </h3>
      </div>

      <div className="row text-center">
        <div className="col ">
          <img src="media/images/pricingEquity.svg" className="fs-5"/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
