import React from "react";
import { useSelector } from "react-redux";
// import Loader from "../components/Loader";
import Pages from "../Pages";

function Routes() {
//   const loading = useSelector((state: any) => state.loading.is_loading);
  return (
    // <div className={loading ? "main" : ""}>
    <div>
      {/* {loading ? "noting" : ""} */}
      <Pages />
    </div>
  );
}

export default Routes;
