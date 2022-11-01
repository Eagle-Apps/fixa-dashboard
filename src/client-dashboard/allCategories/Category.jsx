import React from 'react'
import CategoryCard from "../../components/cards/CategoryCard";
import JsonData from "../../data/data.json";

function Category() {

  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    setServices(JsonData.category);
  }, []);

  return (
    <div className=" d-flex text-align-center justify-content-center m-2">
      <div className="d-flex flex-wrap justify-content-between mt-2 m-2">
        {services.map((service, i) => {
          return <CategoryCard title={service.categoryTitle} key={i} />;
        })}

      </div>
    </div>
  )
}

export default Category
