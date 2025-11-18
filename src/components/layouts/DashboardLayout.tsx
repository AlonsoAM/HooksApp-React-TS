import { Outlet, NavLink } from 'react-router';
import {
  LayoutDashboard,
  TrafficCone,
  Gamepad2,
  Target,
  ListTodo,
  BrainCircuit,
  Users,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from '../mode-toggle';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/traffic-light', icon: TrafficCone, label: 'Traffic Light' },
  { path: '/pokemon', icon: Gamepad2, label: 'Pokemon' },
  { path: '/focus', icon: Target, label: 'Focus Screen' },
  { path: '/tasks', icon: ListTodo, label: 'Tasks App' },
  { path: '/memo', icon: BrainCircuit, label: 'Memo Hook' },
  { path: '/context', icon: Users, label: 'Context App' },
];

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-sm
        transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Hooks App
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="ml-auto lg:hidden p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            <X size={20} className="text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${isActive
                  ? 'bg-indigo-50 text-indigo-700 font-medium dark:bg-indigo-900/20 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'}
              `}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between px-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">Tema</span>
            <ModeToggle />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center px-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            <Menu size={24} className="text-slate-600 dark:text-slate-400" />
          </button>
          <span className="ml-4 font-semibold text-slate-900 dark:text-slate-100">Hooks App</span>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
