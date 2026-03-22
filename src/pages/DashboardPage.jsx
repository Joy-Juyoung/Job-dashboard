import jobs from "../data/jobs";
import JobCard from "../components/jobs/JobCard";
import StatCard from "../components/jobs/StatCard";
import MainLayout from "../components/layout/MainLayout";
import dashboardStats from "../data/dashboardStats";
import { useMemo, useState } from "react";
import StatusFilter from "../components/jobs/StatusFilter";

function DashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filterOptions = ["All", "Applied", "Interview", "Offer", "Rejected"];

  // const filteredJobs = useMemo(() => {
  //   if (selectedStatus === "All") {
  //     return jobs;
  //   }

  //   return jobs.filter((job) => job.status === selectedStatus);
  // }, [selectedStatus]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesStatus =
        selectedStatus === "All" || job.status === selectedStatus;

      const normalizedSearchTerm = searchTerm.toLowerCase().trim();

      const matchesSearch =
        job.company.toLowerCase().includes(normalizedSearchTerm) ||
        job.position.toLowerCase().includes(normalizedSearchTerm);

      return matchesStatus && matchesSearch;
    });
  }, [selectedStatus, searchTerm]);

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

        <section className="space-y-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold">Recent Applications</h2>

              <StatusFilter
                options={filterOptions}
                selectedStatus={selectedStatus}
                onSelect={setSelectedStatus}
              />
            </div>

            <input
              type="text"
              placeholder="Search by company or position"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  company={job.company}
                  position={job.position}
                  status={job.status}
                  location={job.location}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-white p-6 text-sm text-gray-500 shadow-sm">
              No applications match your current filters.
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;
