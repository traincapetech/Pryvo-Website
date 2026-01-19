import React from 'react'
import '../Styles/Chart.css'
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import AdminNavbar from '../Components/AdminNavbar'
import AdminUpperNav from '../Components/AdminUpperNav';

const Charts = () => {
    return (
        <div className="admin-layout">
            <AdminNavbar />
            <div className="admin-main">
                <AdminUpperNav />
                <div className="admin-content">
                    <div className="chart-box">
                        <Line
                            data={{
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                                datasets: [{
                                    label: 'Sales Over Time',
                                    data: [65, 59, 80, 81, 56, 55, 40],
                                    borderColor: '#4bc0c0',
                                }]
                            }}
                        />
                    </div>


                    <div className="chart2">
                        <div className="chart-box2">
                            <Bar
                                data={{
                                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                                    datasets: [{
                                        label: 'Revenue',
                                        data: [2000, 3000, 2500, 4000, 3500, 4500, 5000],
                                        backgroundColor: '#4bc0c0'
                                    }]
                                }}
                            />
                        </div>

                        <div className="chart-box3">
                            <Doughnut
                                data={{
                                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                                    datasets: [{
                                        data: [12, 19, 3, 5],
                                        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
                                    }]
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
