import React from 'react'
import { Layout, Input } from 'antd'

function Content(): JSX.Element {
    const { Content } = Layout
    const { Search } = Input
    return (
        <>
            <Content
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                <Search size="large" style={{
                    width: 400,
                    height: 70,
                    top: 5,
                    borderRadius: 20,
                    boxShadow: '0 1px 10px #9E9E9E'
                }}
                    placeholder="Pesquise por voos, hotéis, e muito mais" />
            </Content>
        </>
    )
}

export default Content