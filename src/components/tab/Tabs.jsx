function CustomTab(props) {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {props.tabs.map((tab) => {
          return (
            <li className="nav-item" role="presentation">
              <button
                className={
                  props.isActive === tab ? "nav-link active" : "nav-link "
                }
                id={`${tab}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab}`}
                type="button"
                role="tab"
                aria-controls={tab}
                aria-selected="true"
                onClick={props.handleFilter}
                name={tab}
              >
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {props.children}
        </div>
      </div>
    </>
  );
}

export default CustomTab;
