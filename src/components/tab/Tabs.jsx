function CustomTab(props) {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {props.tabs.map((tab, i) => {
          return (
            <li className="nav-item" role="presentation" key={i}>
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
        {props.children}
      </div>
    </>
  );
}

export default CustomTab;
