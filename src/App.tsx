import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Footer, Content, Sider } = Layout

  return (
    <>
      <Header style={{ fontSize: "30px", alignItems: "flex-start", color: "white"}}>Google</Header>
      <Layout style={{ minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
            style={{ position: "sticky", top: "40px" }}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Viagens
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              O que fazer
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              Voos
            </Menu.Item>
            <Menu.Item key="4" icon={<HomeOutlined />}>
              Hotéis
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Aluguéis de temporada
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Você está conectado como brunofelix.ml@gmail.com</Footer>
        </Layout>
      </Layout>
    );
    </>
  )
}

export default App