import React, { Fragment } from "react";
import Filter from "../common/Filter";
import AdminContainer from "./AdminContainer";

function AdminList({ admins={} }) {
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

export default AdminList;
