import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const achievements = [
    {
      title: "Первый трек",
      description: "Загрузил первую композицию",
      date: "15 янв 2024",
    },
    {
      title: "1000 прослушиваний",
      description: "Достиг 1K прослушиваний",
      date: "3 фев 2024",
    },
    {
      title: "Активный ученик",
      description: "Прошёл 50 видеоуроков",
      date: "10 мар 2024",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-start gap-8">
        <Avatar className="w-32 h-32 ring-4 ring-purple-500/20">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" />
          <AvatarFallback className="text-2xl">АМ</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Алексей Музыкант
              </h1>
              <p className="text-slate-400 mb-4">
                Гитарист • Композитор • Преподаватель
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  На платформе с января 2024
                </span>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Edit" size={16} />
              Редактировать профиль
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-sm text-slate-400">Треков</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-white">1,234</p>
                <p className="text-sm text-slate-400">Подписчиков</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-white">67</p>
                <p className="text-sm text-slate-400">Уроков пройдено</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-white">12.8K</p>
                <p className="text-sm text-slate-400">Прослушиваний</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-purple-600"
          >
            О себе
          </TabsTrigger>
          <TabsTrigger
            value="achievements"
            className="data-[state=active]:bg-purple-600"
          >
            Достижения
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="data-[state=active]:bg-purple-600"
          >
            Активность
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Обо мне</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Профессиональный гитарист с 10-летним опытом исполнения и
                преподавания. Специализируюсь на джазе, блюзе и современной
                музыке. Активно создаю собственные композиции и делюсь знаниями
                с учениками на платформе MusicHub.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Гитара", "Джаз", "Блюз", "Композиция", "Преподавание"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Достижения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {achievement.description}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500">
                      {achievement.date}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Последняя активность</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg">
                  <Icon name="Upload" size={20} className="text-green-400" />
                  <div>
                    <p className="text-white">
                      Загружен новый трек "Летняя мелодия"
                    </p>
                    <p className="text-sm text-slate-400">2 дня назад</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg">
                  <Icon name="PlayCircle" size={20} className="text-blue-400" />
                  <div>
                    <p className="text-white">
                      Завершён урок "Advanced Jazz Harmony"
                    </p>
                    <p className="text-sm text-slate-400">5 дней назад</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg">
                  <Icon name="Heart" size={20} className="text-red-400" />
                  <div>
                    <p className="text-white">
                      Трек "Городские ритмы" получил 100 лайков
                    </p>
                    <p className="text-sm text-slate-400">1 неделя назад</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
