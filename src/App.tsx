import React from 'react'
import { Layout } from 'antd'
import Menu from './components/Menu'
import Content from './components/Content'
import './App.less'

const { Header, Footer, Sider } = Layout

const App = () => (
  <>
    <Layout style={{ height: "100vh" }}>
      <Header style={{fontSize: "2.5em", height: 64}}>Governo estado do Ceará</Header>
      <Layout>
        <Sider trigger={null}>
          <Menu />
        </Sider>
        <Content />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </>
)

export default App