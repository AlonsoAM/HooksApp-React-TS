export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Bienvenido a React Hooks
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Esta aplicación es un laboratorio interactivo para explorar y dominar los Hooks de React.
          Navega por el menú lateral para ver los diferentes ejemplos y ejercicios prácticos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">Conceptos Básicos</h3>
          <p className="text-indigo-100">
            Domina useState, useEffect y otros hooks fundamentales.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">Hooks Avanzados</h3>
          <p className="text-emerald-100">
            Explora useReducer, useContext y optimizaciones con useMemo.
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">React 19</h3>
          <p className="text-amber-100">
            Nuevas características como useOptimistic y Suspense.
          </p>
        </div>
      </div>
    </div>
  );
};
