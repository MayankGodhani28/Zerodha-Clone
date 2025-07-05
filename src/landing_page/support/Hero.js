import React from "react";

function Hero() {
  return (
    <section className="pt-4" id="supportHero">
      <div className="" id="supportWrapper">
        <h4>Support portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 px-5" >
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" placeholder="Eg. how do I activate F&O,Why is my order getting reject.." />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 px-5">
          <h1 className="fs-3">Featured</h1>
          <ol className="" style={{lineHeight: "2.5"}}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
