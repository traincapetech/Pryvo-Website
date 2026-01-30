import React, { useEffect, useState } from 'react'
import '../Styles/Chart.css'
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import AdminNavbar from '../Components/AdminNavbar'
import AdminUpperNav from '../Components/AdminUpperNav';
import { adminAnalytics } from '../api/api';
import { FaUsers, FaMoneyBillWave, FaCrown, FaChartLine } from 'react-icons/fa';

const Charts = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await adminAnalytics.getAnalytics();
                setAnalytics(res.data.data || res.data.analytics);
            } catch (error) {
                console.error("Failed to fetch analytics", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, []);

    if (loading) {
        return (
            <div className="admin-layout">
                <AdminNavbar />
                <div className="admin-main">
                    <AdminUpperNav />
                    <div className="admin-content flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800"></div>
                    </div>
                </div>
            </div>
        );
    }

    const userStats = analytics?.users || { total: 0, active: 0, suspended: 0, premium: 0, newLast30Days: 0 };
    const revenueData = analytics?.subscriptions?.revenue || { total: 0, last30Days: 0 };
    const subscriptionStats = analytics?.subscriptions || { total: 0, active: 0 };
    const planData = analytics?.plans || [];

    return (
        <div className="admin-layout">
            <AdminNavbar />
            <div className="admin-main">
                <AdminUpperNav />
                <div className="admin-content">
                    {/* Page Header */}
                    <div className="chart-page-header">
                        <div>
                            <h1>Charts & Analytics</h1>
                            <p>Visual overview of your platform metrics</p>
                        </div>
                    </div>

                    {/* Stats Cards Row */}
                    <div className="chart-stats-row">
                        <div className="chart-stat-card">
                            <div className="chart-stat-icon users">
                                <FaUsers />
                            </div>
                            <div className="chart-stat-text">
                                <h4>Total Users</h4>
                                <p>{userStats.total}</p>
                            </div>
                        </div>
                        <div className="chart-stat-card">
                            <div className="chart-stat-icon revenue">
                                <FaMoneyBillWave />
                            </div>
                            <div className="chart-stat-text">
                                <h4>Total Revenue</h4>
                                <p>Rs. {revenueData.total}</p>
                            </div>
                        </div>
                        <div className="chart-stat-card">
                            <div className="chart-stat-icon subs">
                                <FaCrown />
                            </div>
                            <div className="chart-stat-text">
                                <h4>Subscriptions</h4>
                                <p>{subscriptionStats.total}</p>
                            </div>
                        </div>
                        <div className="chart-stat-card">
                            <div className="chart-stat-icon growth">
                                <FaChartLine />
                            </div>
                            <div className="chart-stat-text">
                                <h4>New This Month</h4>
                                <p>{userStats.newLast30Days}</p>
                            </div>
                        </div>
                    </div>

                    {/* User Growth Line Chart */}
                    <div className="chart-box">
                        <h3>📈 User Growth (Last 30 Days)</h3>
                        <div style={{ height: '300px' }}>
                            <Line
                                data={{
                                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                    datasets: [{
                                        label: 'New Users',
                                        data: [
                                            Math.floor(userStats.newLast30Days * 0.2),
                                            Math.floor(userStats.newLast30Days * 0.25),
                                            Math.floor(userStats.newLast30Days * 0.25),
                                            Math.floor(userStats.newLast30Days * 0.3)
                                        ],
                                        borderColor: '#880000',
                                        backgroundColor: 'rgba(136, 0, 0, 0.1)',
                                        fill: true,
                                        tension: 0.4,
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: false }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Two Charts Side by Side */}
                    <div className="chart2">
                        <div className="chart-box2">
                            <h3>💰 Revenue by Plan</h3>
                            <Bar
                                data={{
                                    labels: planData.map(p => p.name),
                                    datasets: [{
                                        label: 'Revenue (Rs.)',
                                        data: planData.map(p => p.price * p.count),
                                        backgroundColor: ['#880000', '#2563eb', '#16a34a', '#d97706'],
                                        borderRadius: 8
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { display: false }
                                    }
                                }}
                            />
                        </div>

                        <div className="chart-box3">
                            <h3>👥 User Distribution</h3>
                            <Doughnut
                                data={{
                                    labels: ['Active', 'Suspended', 'Premium'],
                                    datasets: [{
                                        data: [userStats.active, userStats.suspended, userStats.premium],
                                        backgroundColor: ['#16a34a', '#dc2626', '#d97706'],
                                        borderWidth: 0
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { position: 'bottom' }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts
