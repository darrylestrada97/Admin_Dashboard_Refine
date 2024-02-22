import { CreateButton, List } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import React from "react";

export const CompanyList = () => {
  const go = useGo();
  return (
    <List breadcrumb={false} headerButtons={() => <CreateButton />}></List>
  );
};
