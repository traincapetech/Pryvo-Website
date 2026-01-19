import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminSubscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchSubscriptions = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/admin/subscriptions", {      
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
            });
            setSubscriptions(response.data.subscriptions);
        } catch (error) {
            console.error("Error fetching subscriptions:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchSubscriptions();
    }, []);

    if (loading)
        return <p>Loading subscriptions...</p>;
                return (
        <div>
            <h1>Admin Subscription Management</h1>
            {subscriptions.length === 0 ? (
                <p>No subscriptions found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Plan</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions.map((sub) => (
                            <tr key={sub._id}>
                                <td>{sub.userId ? `${sub.userId.name} (${sub.userId.email})` : "N/A"}</td>
                                <td>{sub.plan}</td>
                                <td>{sub.status}</td>
                                <td>${sub.amount.toFixed(2)}</td>
                                <td>{new Date(sub.startDate).toLocaleDateString()}</td>
                                <td>{new Date(sub.endDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}