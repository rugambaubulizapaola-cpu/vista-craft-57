import { AdminLayout } from "@/components/AdminLayout";
import { StatCard } from "@/components/StatCard";
import { RevenueChart } from "@/components/RevenueChart";
import { LeadSourcesChart } from "@/components/LeadSourcesChart";
import { ShopsTable } from "@/components/ShopsTable";
import { Store, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <AdminLayout>
      <div className="p-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Store}
            label="Total Shops"
            value="847"
            change="+4.3%"
            isPositive={true}
          />
          <StatCard
            icon={DollarSign}
            label="Product Revenue"
            value="$2,415"
            change="+6.5%"
            isPositive={true}
          />
          <StatCard
            icon={ShoppingCart}
            label="Total Orders"
            value="1,062"
            change="-2.0%"
            isPositive={false}
          />
          <StatCard
            icon={TrendingUp}
            label="Success Rate"
            value="90.4%"
            change="+7.7%"
            isPositive={true}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <LeadSourcesChart />
          </div>
        </div>

        {/* Shops Table */}
        <ShopsTable />
      </div>
    </AdminLayout>
  );
};

export default Index;
