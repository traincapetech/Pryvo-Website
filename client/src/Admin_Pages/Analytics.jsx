import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import '../Styles/Analytics.css'
import AdminNavbar from '../Components/AdminNavbar'
import AdminUpperNav from '../Components/AdminUpperNav'
import { adminAnalytics } from '../api/api'

const Analytics = () => {
    const [analytics, setAnalytics] = useState(null)
    const [loadingAnalytics, setLoadingAnalytics] = useState(true)

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await adminAnalytics.getAnalytics()
                setAnalytics(res.data.data || res.data.analytics)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingAnalytics(false)
            }
        }
        fetchAnalytics()
    }, [])

    if (loadingAnalytics) {
        return <div role="status" className='items-center justify-center flex h-screen w-full'>
    <svg aria-hidden="true" class="inline w-8 h-8 text-neutral-tertiary animate-spin fill-success" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    }        
    return (
        <div className="admin-anlytics-layout">
            <AdminNavbar />
            <div className="admin-anlytics-main">
                <AdminUpperNav />
                <div className="Admin-analytics-content flex flex-col justify-evenly gap-6 p-4 lg:p-6">
                    <div className="userdetailsNsubscription flex flex-col lg:flex-row gap-6">
                        {/* USERS DOUGHNUT */}
                        <div className="users_anlytics p-4 lg:p-6 border-2 rounded-xl w-full lg:w-1/2 items-center h-auto lg:h-120 flex flex-col justify-center shadow-xl">
                            <p className="font-semibold mb-4 text-center">Users Details</p>

                            <Doughnut
                                data={{
                                    labels: [
                                        'Total Users',
                                        'Active Users',
                                        'Suspended Users',
                                        'Premium Users',
                                        'New Users (Last 30 Days)'
                                    ],
                                    datasets: [
                                        {
                                            data: [
                                                analytics.users.total,
                                                analytics.users.active,
                                                analytics.users.suspended,
                                                analytics.users.premium,
                                                analytics.users.newLast30Days
                                            ],
                                            backgroundColor: [
                                                '#880000',
                                                '#36a2eb',
                                                '#ff6384',
                                                '#ffce56',
                                                '#4bc0c0'
                                            ]
                                        }
                                    ]
                                }}
                            />
                        </div>

                        {/* SUBSCRIPTIONS BAR */}
                        <div className="subscription-anlytics p-4 lg:p-6 border-2 rounded-xl w-full lg:w-1/2 items-center h-auto lg:h-120 flex flex-col justify-center shadow-2xl">
                            <p className="font-semibold mb-4 text-center">Subscriptions Details</p>

                            <Bar
                                data={{
                                    labels: ['Total Subscriptions', 'Active Subscriptions'],
                                    datasets: [
                                        {
                                            label: 'Subscriptions',
                                            data: [
                                                analytics.subscriptions.total,
                                                analytics.subscriptions.active
                                            ],
                                            backgroundColor: ['#4bc0c0', '#880000']
                                        }
                                    ]
                                }}
                            />
                        </div>
                    </div>

                    {/* Plans Lists */}
                    <div className="plans-list border-2 shadow-2xl rounded-2xl p-4 lg:p-0">
                        <h2 className='flex items-center justify-center text-xl lg:text-2xl font-semibold mb-4 pt-2.5'>Plans Details</h2>
                        <div className="plans-wk flex flex-col lg:flex-row items-center justify-evenly gap-4">
                            <img src="/OneWeekSubs.png" alt="One Week Subscription" />
                            <div className="plans-details">
                                <strong className='text-2xl'>1 Week Subscription details</strong>
                                <span className='flex flex-row text-2xl'><h2 className='font-bold'>Plan Name : </h2><p>{analytics.plans[0].name}</p></span>
                                <span className='flex flex-row text-2xl'><h2 className='font-bold'>Plan Price : </h2><p>Rs. {analytics.plans[0].price}</p></span>
                                <span className='flex flex-row text-2xl'><h2 className='font-bold'>Total Users : </h2><p>{analytics.plans[0].count}</p></span>
                            </div>
                        </div>
                        <div className="plans flex flex-col lg:flex-row gap-4 items-center justify-evenly">
                            <img src="/OneMonth.png" alt="One Month Subscription" />
                            <div className="plans-details">
                                <strong>1 Month Subscription details</strong>
                                <span className='flex flex-row'><h2>Plan Name : </h2><p> {analytics.plans[1].name}</p></span>
                                <span className='flex flex-row'><h2>Plan Price : </h2><p>Rs. {analytics.plans[1].price}</p></span>
                                <span className='flex flex-row'><h2>Total Users : </h2><p>{analytics.plans[1].count}</p></span>
                            </div>
                        </div>
                        <div className="plans flex flex-col lg:flex-row gap-4 items-center justify-evenly">
                            <img src="/ThreeMonth.png" alt="One Week Subscription" />
                            <div className="plans-details">
                                <strong>3 Month Subscription details</strong>
                                <span className='flex flex-row'><h2>Plan Name : </h2><p>{analytics.plans[2].name}</p></span>
                                <span className='flex flex-row'><h2>Plan Price : </h2><p>Rs. {analytics.plans[2].price}</p></span>
                                <span className='flex flex-row'><h2>Total Users : </h2><p>{analytics.plans[2].count}</p></span>
                            </div>
                        </div>
                        <div className="plans flex flex-col lg:flex-row gap-4 items-center justify-evenly">
                            <img src="/SixMonth.png" alt="One Week Subscription" />
                            <div className="plans-details">
                                <strong>6 Month Subscription details</strong>
                                <span className='flex flex-row'><h2>Plan Name : </h2><p>{analytics.plans[3].name}</p></span>
                                <span className='flex flex-row'><h2>Plan Price : </h2><p>Rs. {analytics.plans[3].price}</p></span>
                                <span className='flex flex-row'><h2>Total Users : </h2><p>{analytics.plans[3].count}</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
