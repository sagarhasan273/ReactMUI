import React, { Fragment } from "react";
import CustomerFilter from "./CustomerFilter";
import UserContainer from "./UserContainer";

function CustomerList({ setBreadcrumbs, users, setId, refetch }) {
  return (
    <Fragment>
      <CustomerFilter type="add" refetch={refetch} />
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
