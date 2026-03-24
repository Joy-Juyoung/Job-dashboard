import { formatDate } from "../../utils/formatDate";

function JobSummary({
  company,
  position,
  location,
  appliedDate,
  secondaryLabel,
  compact = false,
}) {
  return (
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-gray-500">{company}</p>

      <h3
        className={`truncate font-semibold text-gray-900 ${
          compact ? "mt-1 text-lg" : "mt-1 text-lg"
        }`}
      >
        {position}
      </h3>

      <div className="mt-1 flex flex-col gap-1 text-sm text-gray-500">
        <span>{location}</span>

        {(appliedDate || secondaryLabel) && (
          <div className="flex items-center gap-3">
            {appliedDate && (
              <span className="whitespace-nowrap">
                Applied: {formatDate(appliedDate)}
              </span>
            )}

            {secondaryLabel && (
              <span className="whitespace-nowrap">{secondaryLabel}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSummary;
