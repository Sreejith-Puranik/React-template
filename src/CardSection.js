import React from "react";
import Card from "./Card";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
              <Card />
           </div>
          <div className="col-4">
              <CardOne />
            </div>
          <div className="col-4">
              <CardTwo />
            </div>
        </div>
      </div>
    </section>
);

export default CardSection;