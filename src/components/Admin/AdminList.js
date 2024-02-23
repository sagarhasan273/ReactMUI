import React, { Fragment } from "react";
import Filter from "../common/Filter";
import AdminContainer from "./AdminContainer";

function CustomerList({ admins={} }) {
  return (
    <Fragment>
      <Filter type="add" from="admins" />
      <AdminContainer
        admins={admins?.data?.admins}
        loading={admins?.isLoading}
      />
    </Fragment>
  );
}

export default CustomerList;
