import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const stats = [
    {
      label: "Общие прослушивания",
      value: "12,847",
      icon: "Headphones",
      change: "+18%",
    },
    { label: "Активные треки", value: "23", icon: "Music", change: "+3" },
    { label: "Подписчики", value: "1,234", icon: "Users", change: "+45" },
    { label: "Пройдено уроков", value: "67", icon: "PlayCircle", change: "+5" },
  ];

  const recentTracks = [
    { title: "Летняя мелодия", plays: 2847, date: "2 дня назад" },
    { title: "Джазовый вечер", plays: 1923, date: "5 дней назад" },
    { title: "Городские ритмы", plays: 3156, date: "1 неделя назад" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Добро пожаловать назад! 👋
        </h1>
        <p className="text-slate-400">
          Вот что происходит с вашей музыкой сегодня
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Icon
                      name={stat.icon}
                      size={20}
                      className="text-purple-400"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-green-400 font-medium">
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="TrendingUp" size={20} />
              Популярные треки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTracks.map((track, index) => (
                <div
                  key={track.title}
                  className="flex items-center justify-between p-3 bg-slate-900 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-purple-400">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{track.title}</p>
                      <p className="text-sm text-slate-400">
                        {track.plays.toLocaleString()} прослушиваний
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">{track.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Недавняя активность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>МК</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-white">
                    Новый подписчик:{" "}
                    <span className="text-purple-400">Мария К.</span>
                  </p>
                  <p className="text-xs text-slate-400">2 часа назад</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Icon name="Upload" size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-white">
                    Трек "Летняя мелодия" загружен
                  </p>
                  <p className="text-xs text-slate-400">6 часов назад</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-white">
                    Урок "Основы гармонии" завершён
                  </p>
                  <p className="text-xs text-slate-400">1 день назад</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
