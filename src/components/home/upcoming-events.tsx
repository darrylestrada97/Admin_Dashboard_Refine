import { CalendarOutlined } from "@ant-design/icons";
import { Calendar, Card, List } from "antd";
import React, { useState } from "react";
import { Text } from "../text";

const UpcomingEvents = () => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <Card
      style={{ height: "100%" }}
      styles={{
        header: { backgroundColor: "#87d086", padding: "8px 16px" },
        body: { padding: "16px" },
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CalendarOutlined />
          <Text size="sm" style={{ marginLeft: "0.7rem" }}>
            Upcoming Events
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, i) => ({
            id: i,
          }))}
        ></List>
      ) : (
        <List></List>
      )}
    </Card>
  );
};

export default UpcomingEvents;
