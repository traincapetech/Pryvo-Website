import React, { useEffect, useState } from 'react'
import '../Styles/AdminDashboard.css'
import AdminNavbar from '../Components/AdminNavbar'
import AdminUpperNav from '../Components/AdminUpperNav'
import { MdArrowOutward } from "react-icons/md";
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import { Subscription, Users, adminAnalytics } from '../api/api';
import Popup from "./Popup";
import { FcCancel } from "react-icons/fc";

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const AdminDashboard = () => {
  const [range, setRange] = useState("3months");
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSubscription, setTotalSubscription] = useState(0);
  const [revenue, setRevenue] = useState({
    total: 0,
    last30Days: 0,
  });
  const [loadingRevenue, setLoadingRevenue] = useState(true);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await Users.getUsers();

        setUsers(res.data.users)
        setTotalUsers(res.data.users.length);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await Subscription.getSubscribers();

        setTotalSubscription(res.data.subscriptions.length);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const res = await adminAnalytics.getAnalytics();
    const analytics = res.data.data || res.data.analytics;
    const revenueData = analytics.subscriptions.revenue;
        setRevenue({
          total: revenueData.total,
          last30Days: revenueData.last30Days,
        });
      } catch (error) {
        console.error("Revenue fetch failed", error);
      } finally {
        setLoadingRevenue(false);
      }
    };
    fetchRevenue();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await Users.getUsers()

        setUsers(res.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleSuspendUser = async (userId) => {
    try {
      setLoading(true);
      await Users.suspendUsers(userId);
      // console.log("mohit", res.data)
      // setUsers((prev) =>
      //   prev.map((user) => user.id === userId ? { ...user, suspended: !currentStatus } : user )
      // );

      // alert(`User ${action}ed Successfully`);
    } catch (error) {
      console.error("Failed to update user status", error);
      alert("Action failed");
    } finally {
      setLoading(false);
    }
  };



  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this user?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);
      await Users.deleteUser(userId)
      setUsers((prev) => prev.filter((user) => user.id !== userId));
      alert("User deleted successfully");
    } catch (error) {
      console.error("Failed to delete user", error);
      alert("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenPopup = async (id) => {
  const res = await Users.getUsers();

  const user = res.data.users.find(u => u.id === id);

  setSelectedUser(user);
  setOpen(true);
};

  const data7Days = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users (Last 7 Days)",
        data: [20, 30, 25, 40, 35, 50, 45],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        fill: true,
      },
    ],
  };

  const data30Days = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Users (Last 30 Days)",
        data: [120, 180, 150, 220],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.2)",
        fill: true,
      },
    ],
  };

  const data3Months = {
    labels: ["Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Users (Last 3 Months)",
        data: [320, 480, 610],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        fill: true,
      },
    ],
  };

  const userDetails = [
    { label: "Name", value: "fullName" },
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Premium", value: "isPremium", type: "boolean" },
    { label: "Subscription", value: "isSubscription", fallback: "None" },
    { label: "Status", value: "suspended", type: "status" },
    { label: "Created On", value: "createdAt", type: "datetime" },
    { label: "Updated On", value: "updatedAt", type: "datetime" }
  ];


  const formatDateTime = (dateValue) => {
    if (!dateValue) return "N/A";
    try {
      const date = new Date(dateValue);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } catch (error) {
      if (error) return 
      return dateValue;
    }
  };

  const chartData =
    range === "7days"
      ? data7Days
      : range === "30days"
        ? data30Days
        : data3Months;
  return (
    <div className="adminDash-layout">
      <AdminNavbar />
      <div className="adminDash-main">
        <AdminUpperNav />
        <div className="adminDash-content bg-blue-50">

          <div className="HeroAdmin">

            <div className="HeroAdminCard">
              <h2>Total Revenue</h2>
              <p>{loadingRevenue ? "Loading..." : `Rs. ${revenue.total}`}</p>
            </div>

            <div className="HeroAdminCard">
              <h2>Total Subscriptions</h2>
              <p>{loading ? "Loading..." : totalSubscription}</p>
            </div>
            <div className="HeroAdminCard">
              <h2>Total Users</h2>
              <p>{loading ? "Loading..." : totalUsers}</p>
            </div>
            <div className="HeroAdminCard">
              <h2>Growth Rate</h2>
              <p>{loadingRevenue ? "Loading..." : "12%"}</p>
            </div>
          </div>
          <div className="HeroAdmin2">
            <div className="TitleHeroAdmin2 flex justify-between">
              <div>
                <p>Total Users</p>
                <p>Total for selected range</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setRange("7days")} className='border rounded-lg p-2.5 hover:bg-sky-700 hover:text-white text-lg font-semibold'>Last 7 Days</button>
                <button onClick={() => setRange("30days")} className='border rounded-lg p-2.5 hover:bg-sky-700 hover:text-white text-lg font-semibold' >Last 30 Days</button>
                <button onClick={() => setRange("3months")} className='border rounded-lg p-2.5  hover:bg-sky-700 hover:text-white text-lg font-semibold' >Last 3 Months</button>
              </div>
            </div>
            <div style={{ height: "350px", marginTop: "20px", width: "100%" }}>
              <Line data={chartData} options={options} />
            </div>
          </div>

          <div className="UserTable rounded-2xl">
            <table className='w-full border-collapse border-2 rounded-2xl'>
              <thead className='border-2 rounded-2xl'>
                <tr>
                  <th className='border-2'>User Id</th>
                  <th className='border-2'>User Name</th>
                  <th className='border-2'>Email</th>
                  <th className='border-2'>Phone</th>
                  <th className='border-2'>Suspend?</th>
                  <th className='border-2'>Delete?</th>
                  <th className='border-2'>LearnMore?</th>
                </tr>
              </thead>

              <tbody className='border-2'>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className='border-2'>{user.id}</td>
                    <td className='border-2'>{user.fullName}</td>
                    <td className='border-2'>{user.email}</td>
                    <td className='border-2'>{user.phone}</td>
                    <td className='border-2'>
                      <button
                        onClick={() => handleSuspendUser(user.id, user.suspendedBy)}
                        className={user.suspendedBy ? "btn-activate" : "btn-suspend"}
                      >
                        {user.suspendedBy ? "Activate" : "Suspend"}
                      </button>
                    </td>


                    <td className='border-2'>
                      <button
                        disabled={loading}
                        onClick={() => handleDeleteUser(user.id)}
                        className="btn-delete">
                        Delete
                      </button>
                    </td>
                    <td className='border-2'>
                      <button
                        disabled={loading}
                        onClick={() => handleOpenPopup(user.id)}
                        className="btn-dtls">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <Popup isOpen={open} onClose={() => setOpen(false)} >
                <div className="Popup">
                  <h2 className='text-2xl font-semibold'>User Full Details</h2>
                  {selectedUser && (
                    <div className="popup-grid">
                      {userDetails.map((item, index) => (
                        <p key={index}>
                          <strong>{item.label}:</strong>{" "}
                          {item.type === "boolean"
                            ? selectedUser[item.value] ? "Yes" : "No"
                            : item.type === "status"
                              ? selectedUser[item.value] ? "Active ✅" : `Suspend ❌ `
                              : item.type === "datetime"
                                ? formatDateTime(selectedUser[item.value])
                                : selectedUser[item.value] || item.fallback}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </Popup>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;