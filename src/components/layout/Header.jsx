import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineHome } from "react-icons/hi";

function Header({ setIsSidebarOpen }) {
  const location = useLocation();

  const pageLabels = {
    "/": "Dashboard Overview",
    "/applications": "Manage Applications",
    "/analytics": "Analytics Overview",
  };

  const currentLabel = pageLabels[location.pathname] || "Job Dashboard";

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <HiOutlineHome className="h-4 w-4 -mt-[1px]" />

            <span className="text-xs font-medium uppercase tracking-wide leading-none">
              Job Dashboard
            </span>
          </Link>

          <p className="mt-1 text-sm text-gray-600">{currentLabel}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
          aria-label="Open sidebar menu"
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
