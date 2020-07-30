import React, { useState } from "react";
import RightBlack from "../assets/icons/right-black.png";
import RightWhite from "../assets/icons/right-white.png";

const Pricing = () => {
  const [tier, setTier] = useState([
    {
      name: "basic",
      price: "9,99",
      feature: [
        "Record Incoming Goods",
        "Record Outcoming Goods",
        "Record Profit",
      ],
    },
    {
      name: "business",
      price: "29,99",
      feature: [
        "Record Incoming Goods",
        "Record Outcoming Goods",
        "Record Profit",
        "Analys Profit Using Chart",
        "Support 7x24 Hours",
      ],
    },
    {
      name: "enterpreneur",
      price: "49,99",
      feature: [
        "Record Incoming Goods",
        "Record Outcoming Goods",
        "Record Profit",
        "Analys Profit Using Chart",
        "Support 7x24 Hours",
        "Export To Excel",
        "AI Profit Prediction",
      ],
    },
  ]);

  const priceUIHandler = (price) => {
    let split = price.split(",");
    return (
      <p className="text-md-center" style={{ fontWeight: "400" }}>
        <sup>$</sup> {split[0]}
        <sup>{split[1]}</sup>
      </p>
    );
  };

  return (
    <div className="row pt-5 pb-5 pricing m-0">
      <div className="col-12">
        <p style={{ fontWeight: 900, fontSize: 40, textAlign: "center" }}>
          PRICING
        </p>
      </div>
      <div className="col-12">
        <div className="row justify-content-center m-3">
          {tier &&
            tier.map((item, key) => {
              return (
                <div
                  key={key}
                  className="col-11 col-md-3 col-lg-3 card-feature m-3 p-3"
                  style={key == 2 ? { backgroundColor: "#25c0f5" } : {}}
                >
                  <div className="row">
                    <div className="col-12">
                      <p
                        className={`text-md text-center ${
                          key == 2 ? "text-white" : "text-body"
                        }`}
                      >
                        {item.name.toUpperCase()}
                      </p>
                    </div>

                    <div className="col-12">
                      <p
                        className={`text-md text-center ${
                          key == 2 ? "text-white" : "text-body"
                        }`}
                      >
                        {priceUIHandler(item.price)}
                      </p>
                    </div>

                    <div className="col-12" style={{ height: 300 }}>
                      {item.feature.map((subItem, subKey) => {
                        return (
                          <p
                            key={subKey}
                            className={`${
                              key == 2 ? "text-white" : "text-body"
                            }`}
                          >
                            {key == 2 ? (
                              <img
                                src={RightWhite}
                                width={20}
                                className="mr-3"
                              />
                            ) : (
                              <img
                                src={RightBlack}
                                width={20}
                                className="mr-3"
                              />
                            )}
                            {subItem}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button
                      type="button"
                      class={`text-center btn pl-5 pr-5 ${
                        key == 2 ? "btn-outline-white" : "btn-outline-main"
                      }`}
                    >
                      SELECT
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
