import React, { useState } from 'react'
import { Layout, Input } from 'antd'
import Sdr from './components/Sider'
import 'antd/dist/antd.css'
import { FaSearch } from 'react-icons/fa'

const styleHeader: React.CSSProperties = {
  fontSize: "30px",
  color: "white",
  position: "sticky",
  top: 0
}
const styleInput: React.CSSProperties = {
  borderRadius: 10,
  width: "30%",
  height: 60,
  minWidth: "60px",
  boxShadow: "5px 3px 5px #9E9E9E",
  borderColor: "none"
}

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Footer, Content, Sider } = Layout

  return (
    <>
      <Layout>
        <Header style={styleHeader} >Google</Header>
        <Layout>
          <Sider><Sdr /></Sider>
          <Content style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Input placeholder="Pesquise por voos, hotéis e muito mais"
              size="large" prefix={<FaSearch />} style={styleInput} />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
    </>
  )
}

export default App