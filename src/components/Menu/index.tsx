import React from 'react'
import { Menu } from 'antd'
import { MdFlight, MdCameraAlt, MdCardTravel } from 'react-icons/md'
import { FaBed, FaHotel } from 'react-icons/fa'

const styleItem: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 80,
    width: '100%',
    fontSize: '13px',
    fontWeight: "bold",
}

export default () =>
    <>
        <Menu defaultSelectedKeys={['1']} mode="inline" style={{ width: '10%' }}>
            <Menu.Item key="1" style={styleItem} title="Viagens" icon={<MdCardTravel size="20px"
                style={{ marginRight: 5, color: "#00B894" }} />}>
                Viagens
            </Menu.Item>
            <Menu.Item key="2" style={styleItem} icon={<MdCameraAlt size="20px"
                style={{ marginRight: 5, color: "#00B894" }} />}>
                O que fazer
            </Menu.Item>
            <Menu.Item key="3" style={styleItem} icon={<MdFlight size="20px"
                style={{ marginRight: 5, color: "#00B894" }} />}>
                Voos
            </Menu.Item>
            <Menu.Item key="4" style={styleItem} icon={<FaBed size="20px"
                style={{ marginRight: 5, color: "#00B894" }} />}>
                Hotéis
            </Menu.Item>
            <Menu.Item key="5" style={styleItem} icon={<FaHotel size="20px"
                style={{ marginRight: 5, color: "#00B894" }} />}>
                Aluguéis
            </Menu.Item>
        </Menu>
    </>