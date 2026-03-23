function StatCard({ label, value, description }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
          {value}
        </h2>
      </div>

      <p className="mt-3 text-xs text-gray-500">{description}</p>
    </article>
  );
}

export default StatCard;
