import React, { useEffect, useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminUpperNav from "../Components/AdminUpperNav";
import { Subscription } from "../api/api";
import "../Styles/AdminDashboard.css"; // Reuse dashboard styles for consistency

export default function AdminSubscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await Subscription.getSubscribers();
                setSubscriptions(response.data.subscriptions);
            } catch (error) {
                console.error("Error fetching subscriptions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    return (
        <div className="adminDash-layout">
            <AdminNavbar />
            <div className="adminDash-main">
                <AdminUpperNav />
                <div className="adminDash-content bg-blue-50">
                    <h1 className="text-2xl font-bold mb-6">Admin Subscription Management</h1>
                    
                    {loading ? (
                        <p>Loading subscriptions...</p>
                    ) : subscriptions.length === 0 ? (
                        <p>No subscriptions found.</p>
                    ) : (
                        <div className="UserTable rounded-2xl">
                            <table className='w-full border-collapse border-2 rounded-2xl'>
                                <thead className='border-2 rounded-2xl'>
                                    <tr>
                                        <th className='border-2'>User</th>
                                        <th className='border-2'>Plan</th>
                                        <th className='border-2'>Status</th>
                                        <th className='border-2'>Amount</th>
                                        <th className='border-2'>Start Date</th>
                                        <th className='border-2'>End Date</th>
                                    </tr>
                                </thead>
                                <tbody className='border-2'>
                                    {subscriptions.map((sub) => (
                                        <tr key={sub._id}>
                                            <td className='border-2'>{sub.userId ? `${sub.userId.fullName || 'N/A'} (${sub.userId.email})` : "N/A"}</td>
                                            <td className='border-2'>{sub.plan}</td>
                                            <td className='border-2'>{sub.status}</td>
                                            <td className='border-2'>Rs. {sub.amount.toFixed(2)}</td>
                                            <td className='border-2'>{new Date(sub.startDate).toLocaleDateString()}</td>
                                            <td className='border-2'>{new Date(sub.endDate).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}