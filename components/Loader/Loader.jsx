import React from "react";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import "./loader.css";
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
    {/* <Spin indicator={antIcon}/> */}
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
