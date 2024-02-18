import { icons } from "antd/es/image/PreviewGroup";
import { Card } from "antd/lib";
import React from "react";

type Props = {
  resources: "companies" | "contacts" | "deals";
  isLoading: boolean;
  totalCount: number;
};
const DashboarTotalCountCard = ({ resource, isLoading, totalCount }: Props) => {
  return (
    <Card
      style={{ height: "96px", padding: 0 }}
      bodyStyle={{ padding: "8px 8px 8px 12px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        {icons[resource]}
      </div>
    </Card>
  );
};

export default DashboarTotalCountCard;
