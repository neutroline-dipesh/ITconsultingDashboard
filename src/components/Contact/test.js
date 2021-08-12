import React from "react";
import ViewDetail from "./ViewDetail";
const test = (props) => {
  return (
    <div>
      <ViewDetail
        {...props.data}
        // fetchData={fetchContactData}
      />
    </div>
  );
};

export default test;
