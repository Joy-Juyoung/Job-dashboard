import StatCard from "../components/jobs/StatCard";
import MainLayout from "../components/layout/MainLayout";
import dashboardStats from "../data/dashboardStats";

function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-2xl font-bold">Job Dashboard</h1>
          <p className="text-sm text-gray-600">
            Track your applications and job search progress.
          </p>
        </section>

        <section className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500 ">
            {dashboardStats.map((stat) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </p>
        </section>

        <section className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Recent applications section will go here.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;
