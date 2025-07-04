import React from "react";

function RightSection({productName, productDescription, imageURL, learnMore}) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>Learn More{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col p-5">
            <img src={imageURL} alt="product image" />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;
