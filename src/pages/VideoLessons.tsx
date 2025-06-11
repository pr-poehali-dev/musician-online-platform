import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const VideoLessons = () => {
  const categories = [
    { name: "Основы гитары", lessons: 12, completed: 8 },
    { name: "Джазовая гармония", lessons: 15, completed: 5 },
    { name: "Техника игры", lessons: 10, completed: 10 },
    { name: "Композиция", lessons: 8, completed: 3 },
  ];

  const recentLessons = [
    {
      id: 1,
      title: "Основы аккордов для начинающих",
      instructor: "Петр Иванов",
      duration: "15:30",
      level: "Начинающий",
      completed: true,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: 'Jazz Standards: "Autumn Leaves"',
      instructor: "Анна Смирнова",
      duration: "22:45",
      level: "Продвинутый",
      completed: false,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Техника фингерстайла",
      instructor: "Михаил Петров",
      duration: "18:20",
      level: "Средний",
      completed: false,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Видеоуроки</h1>
        <p className="text-slate-400">
          Изучайте музыку с лучшими преподавателями
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Icon
                    name="PlayCircle"
                    size={20}
                    className="text-purple-400"
                  />
                </div>
                <span className="text-xs text-slate-400">
                  {category.completed}/{category.lessons}
                </span>
              </div>
              <h3 className="font-medium text-white mb-2">{category.name}</h3>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{
                    width: `${(category.completed / category.lessons) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-slate-400">
                {Math.round((category.completed / category.lessons) * 100)}%
                завершено
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-purple-600"
          >
            Все уроки
          </TabsTrigger>
          <TabsTrigger
            value="progress"
            className="data-[state=active]:bg-purple-600"
          >
            В процессе
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-purple-600"
          >
            Завершённые
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="data-[state=active]:bg-purple-600"
          >
            Избранное
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentLessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="bg-slate-800 border-slate-700 overflow-hidden hover:ring-2 hover:ring-purple-500/50 transition-all"
              >
                <div className="relative">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  {lesson.completed && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white">
                    {lesson.duration}
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        lesson.level === "Начинающий"
                          ? "bg-green-500/20 text-green-400"
                          : lesson.level === "Средний"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {lesson.level}
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-2 line-clamp-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    с {lesson.instructor}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {lesson.completed ? "Пересмотреть" : "Начать урок"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <Icon
                name="BookOpen"
                size={48}
                className="text-slate-600 mx-auto mb-4"
              />
              <h3 className="text-xl text-white mb-2">Уроки в процессе</h3>
              <p className="text-slate-400">
                Здесь будут отображаться уроки, которые вы начали, но ещё не
                завершили
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <Icon
                name="CheckCircle"
                size={48}
                className="text-green-500 mx-auto mb-4"
              />
              <h3 className="text-xl text-white mb-2">Завершённые уроки</h3>
              <p className="text-slate-400">
                Отличная работа! Вы завершили{" "}
                {categories.reduce((sum, cat) => sum + cat.completed, 0)} уроков
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <Icon
                name="Heart"
                size={48}
                className="text-red-400 mx-auto mb-4"
              />
              <h3 className="text-xl text-white mb-2">Избранные уроки</h3>
              <p className="text-slate-400">
                Добавляйте уроки в избранное, чтобы быстро к ним возвращаться
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoLessons;
