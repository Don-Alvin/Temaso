import React from 'react'
import DashboardMain from './MainSections/DashboardMain'
import DashboardItemsHeader from './Header/DashboardItemsHeader'
import Menu from './Menu/Menu'


const DashboardItems = () => {
    return (
        <div className='flex bg-teal-900'>
            <Menu />
            <div className="flex w-full flex-col">
                <DashboardItemsHeader />
                <DashboardMain />
            </div>
        </div>
    )
}

export default DashboardItems