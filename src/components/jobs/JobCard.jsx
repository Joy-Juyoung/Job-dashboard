import StatusBadge from "./StatusBadge";
import JobSummary from "./JobSummary";

function JobCard({ job, onDelete, onEdit, showActions = true }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <JobSummary
          company={job.company}
          position={job.position}
          location={job.location}
          appliedDate={job.appliedDate}
        />

        <div className="flex shrink-0 flex-col items-end gap-3">
          <StatusBadge status={job.status} />

          {showActions && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onEdit(job)}
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => onDelete(job.id)}
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default JobCard;
