const Card = ({ title, description, icon, children }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cardinal via-cardinal/80 to-cardinal/60"></div>
      {icon && <div className="mb-4 text-cardinal">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {children && <div className="mt-4 space-y-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
};

export default Card;
