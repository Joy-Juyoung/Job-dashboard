function StatCard({ label, value, description }) {
  return (
    <article className="rounded-xl border bg-white px-6 py-3 my-3 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <h2 className="mt-2 text-3xl font-bold text-gray-900">{value}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </article>
  );
}

export default StatCard;
