import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/cards/CategoryCard";
import { ServiceCard, ServicePlans } from "../../components/custom.styles";
import JsonData from "../../data/data.json";
function ServicePlan() {
  const [services, setServices] = React.useState([]);
  const [servicePlan, setServicePlan] = useState(false);
  const [serviceD, setServiceD] = useState({
    plan: "Basic",
    price: "$500",
    link: "/dashboard",
  });
  React.useEffect(() => {
    setServices(JsonData.category);
  }, []);

  const handleChangePlan = () => {
    servicePlan === true ? setServicePlan(false) : setServicePlan(true);
  };
  const handleSelectService = (e) => {
    let plan = e.target.value;
    switch (plan) {
      case "Basic":
        setServiceD({
          plan: "Basic",
          price: "$500",
          link: "/dashboard",
        });
        break;
      case "Classic":
        setServiceD({
          plan: "Classic",
          price: "$700",
          link: "/dashboard",
        });
        break;
      case "Premium":
        setServiceD({
          plan: "Premium",
          price: "$1000",
          link: "/dashboard",
        });
        break;
      case "Vip":
        setServiceD({
          plan: "Vip",
          price: "$1500",
          link: "/dashboard",
        });
        break;
      default:
        plan = setServiceD({
          plan: "Basic",
          price: "$500",
          link: "/dashboard",
        });
    }
    // setSelectService(plan);
    console.log(e.target.value);
    servicePlan === true ? setServicePlan(false) : setServicePlan(true);
  };
  return (
    <div
      className="tab-pane fade show"
      id="Service_Plan"
      role="tabpanel"
      aria-labelledby="subscription-tab"
    >
      <div className="d-flex flex-wrap justify-content-between mt-2 m-2">
        {/* {services.map((service, i) => {
          return (
            <CategoryCard
              title={service.categoryTitle}
              plan={"basic"}
              key={i}
            />
          );
        })} */}
        <ServiceCard>
          <h5>Current service Plan</h5>
          <h2>{serviceD.plan}</h2>
          <p>{serviceD.price}</p>
          <button onClick={handleChangePlan}>Change Plan</button>
          <Link to={serviceD.link}>
            <a>more about plan</a>
          </Link>
          {servicePlan === true ? (
            <ServicePlans>
              <h1>Select Plan</h1>
              <button onClick={handleSelectService} value="Basic">
                Basic: $500
              </button>
              <button onClick={handleSelectService} value="Classic">
                Classic: $700
              </button>
              <button onClick={handleSelectService} value="Premium">
                Premium: $1000
              </button>
              <button onClick={handleSelectService} value="Vip">
                Vip: $1500
              </button>
            </ServicePlans>
          ) : (
            <></>
          )}
        </ServiceCard>
      </div>
    </div>
  );
}

export default ServicePlan;
