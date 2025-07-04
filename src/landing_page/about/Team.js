import React from "react";

function Team() {
  return (
    <div className="container border-top">
      <div className="row p-5 ">
        <h1 className="fs-3 text-center ">
         People
        </h1>
      </div>

      <div
        className="row p-3   text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.15rem" }}
      >
        <div className="col-6 pb-5 text-center">
            <img src="media\images\nithinKamath.jpg" className="rounded-circle" style={{width:"50%"}} alt="founder photo"/>
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6>Founder,CEO</h6>   
        </div>

        <div className="col-6 px-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="text-decoration-none">
            Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> /{" "}
            <a href="" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
