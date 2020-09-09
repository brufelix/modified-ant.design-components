import React from 'react'
import { PageHeader, Input } from 'antd'
import 'antd/dist/antd.css'
import './Header.css'

const Header: React.FC = () =>
    <>
        <PageHeader title="Governo do Estado do Ceara" >
            <Input type="search"/>
        </PageHeader>
    </>

export default Header