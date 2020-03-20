import { Layout, Menu } from "antd";
import React from "react";
import "./LayOut.css";
import { HeartTwoTone, CoffeeOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

class LayOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"></div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ height: "40px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made with <HeartTwoTone twoToneColor="#eb2f96" /> and{" "}
          <CoffeeOutlined />
        </Footer>
      </Layout>
    );
  }
}

export default LayOut;
