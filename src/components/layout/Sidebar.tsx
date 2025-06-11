import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const menuItems = [
    { to: "/", icon: "LayoutDashboard", label: "Дашборд" },
    { to: "/profile", icon: "User", label: "Профиль" },
    { to: "/tracks", icon: "Music", label: "Мои треки" },
    { to: "/lessons", icon: "PlayCircle", label: "Видеоуроки" },
    { to: "/studio", icon: "Mic", label: "Студия" },
    { to: "/analytics", icon: "BarChart3", label: "Аналитика" },
  ];

  return (
    <div className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Icon name="Music" size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">MusicHub</h1>
            <p className="text-sm text-slate-400">Для музыкантов</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback>АМ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white">Алексей Музыкант</p>
            <p className="text-xs text-slate-400">Pro аккаунт</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            <Icon name={item.icon} size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Button
          variant="outline"
          className="w-full text-slate-300 border-slate-700 hover:bg-slate-800"
        >
          <Icon name="Settings" size={16} />
          Настройки
        </Button>
      </div>
    </div>
  );
};

export { Sidebar };
