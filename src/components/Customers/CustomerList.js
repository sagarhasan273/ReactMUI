import React, { Fragment } from "react";
import UserContainer from "./UserContainer";
import Filter from "../common/Filter";

function CustomerList({ setBreadcrumbs, users, setId }) {
  return (
    <Fragment>
      
      <Filter type="add" from="customers" />
      <UserContainer
        setId={setId}
        setBreadcrumbs={setBreadcrumbs}
        users={users?.data?.users}
        loading={users?.isLoading}
      />
    </Fragment>
  );
}

export default CustomerList;
