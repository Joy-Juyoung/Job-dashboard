function StatCard({ label, value, description }) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
        {value}
      </h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </article>
  );
}

export default StatCard;
