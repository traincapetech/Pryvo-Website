import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mainpi from "../api/mainapi";

const AdminLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutAdmin = async () => {
            try {
                await Mainpi.post("/admin/logout", {}, { withCredentials: true });
                localStorage.removeItem("admintoken");
                localStorage.removeItem("admin");

            } catch (error) {
                console.error("Logout failed", error);
            } finally {
                navigate("/admin/login", { replace: true });
            }
        };

        logoutAdmin();
    }, [navigate]);

    return (
        <div className="h-screen flex items-center justify-center">
            <h2 className="text-xl font-semibold">Logging out...</h2>
        </div>
    );
};

export default AdminLogout;
