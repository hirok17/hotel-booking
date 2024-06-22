import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";
import AdminStatistics from "../../components/dashboard/statistics/AdminStatistics";

const Statistics = () => {
    const [role]=useRole();
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {role === 'admin' && <AdminStatistics></AdminStatistics>}
        </div>
    );
};

export default Statistics;