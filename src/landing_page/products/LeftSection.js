import React from "react";

function LeftSection({
  productName,
  imageURL,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3 p-3">
      <div className="row">
        <div className="col p-3">
          <img src={imageURL} style={{ width: "90%" }} alt="product image" />
        </div>
        <div className="col p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="fs-6 mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="mx-5 text-decoration-none">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} style={{ marginRight: "50px" }}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="google play image"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="app store image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
