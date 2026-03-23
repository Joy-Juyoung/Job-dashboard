import StatusFilter from "./StatusFilter";
import { HiOutlineXMark } from "react-icons/hi2";

function ApplicationsControls({
  totalVisibleJobs,
  filterOptions,
  selectedStatus,
  onSelectStatus,
  searchTerm,
  onSearchChange,
  onClearSearch,
  onResetFilters,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"> */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            All Applications
          </h2>
          <p className="text-sm text-gray-500">
            Showing {totalVisibleJobs} application
            {totalVisibleJobs === 1 ? "" : "s"}
          </p>
        </div>

        <StatusFilter
          options={filterOptions}
          selectedStatus={selectedStatus}
          onSelect={onSelectStatus}
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by company or position"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={onClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Clear search"
              title="Clear search"
            >
              <HiOutlineXMark className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default ApplicationsControls;
