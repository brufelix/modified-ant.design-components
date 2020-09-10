import React, { useState } from 'react'
import { Layout } from 'antd'
import Menu from '../Menu'

const { Sider } = Layout

export default () => {
    const [collapsed, setCollapsed] = useState(false)

    return <>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 60,
            }}>
            <div className="logo" />
            <Menu />
        </Sider>
    </>
}
