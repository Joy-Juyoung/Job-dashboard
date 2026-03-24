import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import JobSummary from "./JobSummary";
import StatusBadge from "./StatusBadge";
import getJobSecondaryLabel from "../../utils/getJobSecondaryLabel";

function ApplicationRow({ job, onEdit, onDelete }) {
  const secondaryLabel = getJobSecondaryLabel(job);

  return (
    <article className="rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-shadow duration-200 hover:shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <JobSummary
          company={job.company}
          position={job.position}
          location={job.location}
          appliedDate={job.appliedDate}
          secondaryLabel={secondaryLabel}
        />

        <div className="flex items-center gap-3">
          <StatusBadge status={job.status} />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onEdit(job)}
              className="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Edit application"
              title="Edit"
            >
              <HiOutlinePencilSquare className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onDelete(job.id)}
              className="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
              aria-label="Delete application"
              title="Delete"
            >
              <HiOutlineTrash className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ApplicationRow;
