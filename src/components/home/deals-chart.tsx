import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import { mapDealsData } from "@/utilities/helpers";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { DashboardDealsChartQuery } from "@/graphql/types";

const DealsChart = () => {
  const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: "dealStages",
    filters: [
      {
        field: "title",
        operator: "in",
        value: ["WON", "LOST"],
      },
    ],
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });
  const dealData = React.useMemo(() => {
    return mapDealsData(data?.data || []);
  }, [data?.data]);
  const config: AreaConfig = {
    data: dealData,
    xField: "timeText",
    yField: "value",
    isStack: false,
    seriesField: "state",
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: { position: "top", offsetY: 10 },
    yAxis: {
      tickCount: 4,
      label: { formatter: (v) => `$${Number(v) / 1000}K` },
    },
    tooltip: {
      formatter: (data) => {
        return { name: data.state, value: `$${Number(data.value) / 1000}K` };
      },
    },
  };
  return (
    <Card
      style={{ height: "100%" }}
      styles={{
        header: {
          backgroundColor: "#87d",
          color: "#ffff",
          padding: "8px 16px",
        },
        body: { padding: "24px 24px 0 24px" },
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem", color: "#ffff" }}>
            Deals
          </Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  );
};

export default DealsChart;
