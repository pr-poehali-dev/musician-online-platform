import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MyTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Летняя мелодия",
      duration: "3:24",
      plays: 2847,
      likes: 156,
      uploadDate: "2 дня назад",
      genre: "Джаз",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
    },
    {
      id: 2,
      title: "Джазовый вечер",
      duration: "4:17",
      plays: 1923,
      likes: 98,
      uploadDate: "5 дней назад",
      genre: "Джаз",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop",
    },
    {
      id: 3,
      title: "Городские ритмы",
      duration: "2:56",
      plays: 3156,
      likes: 234,
      uploadDate: "1 неделя назад",
      genre: "Фанк",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Мои треки</h1>
          <p className="text-slate-400">
            Управляйте своей музыкальной коллекцией
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Icon name="Upload" size={16} />
          Загрузить трек
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Icon name="Music" size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-sm text-slate-400">Всего треков</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Icon name="Headphones" size={24} className="text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12.8K</p>
                <p className="text-sm text-slate-400">Прослушиваний</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <Icon name="Heart" size={24} className="text-red-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">488</p>
                <p className="text-sm text-slate-400">Лайков</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Icon name="ListMusic" size={20} />
            Список треков
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="relative">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Icon name="Play" size={16} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-white">{track.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>{track.genre}</span>
                    <span>•</span>
                    <span>{track.duration}</span>
                    <span>•</span>
                    <span>{track.uploadDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Icon name="Headphones" size={16} />
                    <span>{track.plays.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Heart" size={16} />
                    <span>{track.likes}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-white"
                  >
                    <Icon name="MoreHorizontal" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyTracks;
