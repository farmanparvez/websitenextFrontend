import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { ReactSVG } from "react-svg";
import menu from "./Menu";
const { Sider } = Layout;

const SideBar = () => {
  const [width, setWidth] = useState(true);
  const [broken, setBroken] = useState(true);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={width}
      width={220}
      onBreakpoint={(broken) => {
        setBroken(broken);
      }}
      onCollapse={(collapsed, type) => {
        setWidth(collapsed);
      }}
      className="sidebar-cs"
    >
      <div className="flex justify-center items-center h-24 ">
        <div className="w-12 h-12 bg-csBG rounded-full flex justify-center items-center text-white">
          WY
        </div>
      </div>
      <Menu
        style={{ padding: "0" }}
        theme="light"
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        items={menu()?.map((icon, index) => ({
          key: icon.id,
          // icon: React.createElement(icon.icon),
          label: (
            <>
              <NavLink
                onClick={() => setWidth(broken ? true : false)}
                style={({ isActive }) => {
                  return {
                    padding: "20px",
                    color: isActive ? "#333652" : "#6C6C6C",
                  };
                }}
                to={icon.link}
              >
                <div className="flex relative items-center">
                  <ReactSVG className="text-purple-600 mr-2" src={icon.icon} />
                  <span className="text-16 font-semibold ">{icon.name}</span>
                </div>
              </NavLink>
              <div style={{ borderBottom: "2px solid gray" }} />
            </>
          ),
        }))}
      />
    </Sider>
  );
};

export default SideBar;
