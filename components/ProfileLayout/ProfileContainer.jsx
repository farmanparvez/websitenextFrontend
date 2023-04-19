import React, { Suspense } from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import "./style.scss";
import Loader from "../Loader/Loader";
const { Content } = Layout;

const ProfileContainer = () => {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              minHeight: "92vh",
              width: "100%",
            }}
          >
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfileContainer;
