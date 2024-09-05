import React from "react";
import offer1 from "../../assets/images/offerLogo/offer1.svg";
import offer2 from "../../assets/images/offerLogo/offer2.svg";
import offer3 from "../../assets/images/offerLogo/offer3.svg";
import SingleOffer from "./SingleOffer";

const WeOfferSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-5xl text-center font-bold mt-8 md:mt-32">
          What do we offer?
        </h1>
      </div>
      <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
        <SingleOffer
          image={offer1}
          mainText={"Security Guarantee"}
          subText={"Your data and funds will be securely protected."}
        ></SingleOffer>
        <SingleOffer
            image={offer2}
            mainText={"Investing"}
            subText={"Your data and funds will be securely protected."}
        ></SingleOffer>
        <SingleOffer
            image={offer3}
            mainText={"Multiple Method"}
            subText={"Your data and funds will be securely protected."}
        ></SingleOffer>
      </div>
    </div>
  );
};

export default WeOfferSection;
