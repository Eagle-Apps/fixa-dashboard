import InfoBox from "../components/InfoBox";

const ClientHome = () => {
  return (
    <div>
      <div className="row d-flex  text-align-center justify-content-between m-2">
        <InfoBox number={20} title="Total Request" />
        <InfoBox number={20} title="Pending Request" />
        <InfoBox number={20} title="Successful Request" />
      </div>
      <div className="bg-primary rounded m-2 mt-4" style={{ height: "195px" }}>
        <div className="">
          <h4 className="text-white fw-bold ">
            Do you want Fixa In your City?
          </h4>
          <p className="text-white">
            we are ready to give you the world best technicians and services
          </p>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
