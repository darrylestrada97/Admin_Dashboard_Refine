import CustomAvatar from "@/components/custom-avatar";
import { COMPANIES_LIST_QUERY } from "@/graphql/queries";
import { SearchOutlined } from "@ant-design/icons";
import { CreateButton, FilterDropdown, List } from "@refinedev/antd";
import { useTable } from "@refinedev/antd";
import { getDefaultFilter, useGo } from "@refinedev/core";
import { Input, Space, Table } from "antd";
import { Text } from "@/components/text";
import React from "react";

export const CompanyList = () => {
  const go = useGo();
  const { tableProps, filters } = useTable({
    resource: "companies",
    pagination: {
      pageSize: 10,
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY,
    },
  });
  return (
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton
          onClick={() => {
            go({
              to: {
                resource: "companies",
                action: "create",
              },
              options: {
                keepQuery: true,
              },
              type: "replace",
            });
          }}
        />
      )}
    >
      <div>test</div>
      <Table {...tableProps} pagination={{ ...tableProps.pagination }}>
        <Table.Column
          dataIndex="name"
          title="Company Title"
          defaultFilteredValue={getDefaultFilter("id", filters)}
          filterIcon={<SearchOutlined />}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input
                placeholder="Search Company Title"
                onPressEnter={(e) => {
                  props.confirm({ closeDropdown: false });
                }}
              />
            </FilterDropdown>
          )}
          render={(value, record) => (
            <Space>
              <CustomAvatar
                shape="square"
                name={record.name}
                src={record.avatarUrl}
              />
              <Text style={{ whiteSpace: "nowrap" }}>{record.name}</Text>
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
