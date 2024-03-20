import React from 'react'
import DashboardStatsGrid from './DashboardstatsGrid'
import Sidebar from './Sidebar'
import Header from './Header'
import Layout from './Layout'
// import TransactionChart from '../components/TransactionChart'
// import RecentOrders from '../components/RecentOrders'
// import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
// import PopularProducts from '../components/PopularProducts'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			{/* <DashboardStatsGrid /> */}
            <Layout/>
            {/* <Header/> */}
            {/* <Sidebar/> */}
			<div className="flex flex-row gap-4 w-full">
				{/* <TransactionChart /> */}
				{/* <BuyerProfilePieChart /> */}
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* <RecentOrders /> */}
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}