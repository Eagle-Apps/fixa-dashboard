import React from "react";
import CategoryCard from "../../components/cards/CategoryCard";
import JsonData from "../../data/data.json";

function Subscription() {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    setServices(JsonData.category);
  }, []);

  return (
    <div
      className="tab-pane fade show"
      id="Subscription"
      role="tabpanel"
      aria-labelledby="subscription-tab"
    >
      <div className="d-flex flex-wrap justify-content-between mt-2 m-2">
        {services.map((service, i) => {
          return (
            <CategoryCard
              title={service.categoryTitle}
              plan={"basic"}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Subscription;
