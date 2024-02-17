import React from "react";
import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name: string;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={"Darryl Estrada"}
      size="small"
      style={{
        backgroundColor: "#87d086",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: "1px solid #000",
      }}
    ></AntdAvatar>
  );
};

export default CustomAvatar;
