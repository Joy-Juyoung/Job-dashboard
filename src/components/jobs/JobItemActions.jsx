import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

function JobItemActions({ job, onEdit, onDelete, variant = "icon" }) {
  if (!onEdit && !onDelete) {
    return null;
  }

  if (variant === "button") {
    return (
      <div className="flex gap-2">
        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(job)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Edit
          </button>
        )}

        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(job.id)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Delete
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {onEdit && (
        <button
          type="button"
          onClick={() => onEdit(job)}
          className="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
          aria-label="Edit application"
          title="Edit"
        >
          <HiOutlinePencilSquare className="h-4 w-4" />
        </button>
      )}

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(job.id)}
          className="rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
          aria-label="Delete application"
          title="Delete"
        >
          <HiOutlineTrash className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default JobItemActions;
