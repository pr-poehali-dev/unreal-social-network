import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const mockUser = {
    name: 'CyberRunner_2077',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cyber',
    level: 42,
    xp: 75,
    achievements: 127,
    friends: 1543,
    posts: 892,
  };

  const mockNotifications = [
    { id: 1, type: 'like', user: 'NeonGhost', time: '2м назад', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ghost' },
    { id: 2, type: 'comment', user: 'DigitalSamurai', time: '15м назад', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=samurai' },
    { id: 3, type: 'friend', user: 'PixelWarrior', time: '1ч назад', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=warrior' },
    { id: 4, type: 'achievement', user: 'System', time: '3ч назад', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=system' },
  ];

  const mockChats = [
    { id: 1, name: 'CodeBreakers', type: 'group', lastMessage: 'Кто на рейд сегодня?', time: '5м', unread: 3, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=group1' },
    { id: 2, name: 'NeonGhost', type: 'direct', lastMessage: 'Проверь новый мод!', time: '12м', unread: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ghost' },
    { id: 3, name: 'UE5 Developers', type: 'group', lastMessage: 'Релиз 5.4 уже скоро', time: '1ч', unread: 0, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=group2' },
    { id: 4, name: 'DigitalSamurai', type: 'direct', lastMessage: 'GG вчера!', time: '2ч', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=samurai' },
  ];

  const mockAchievements = [
    { id: 1, name: 'Первый контакт', icon: 'Sparkles', color: 'text-cyber-cyan', unlocked: true },
    { id: 2, name: 'Легенда сети', icon: 'Trophy', color: 'text-cyber-purple', unlocked: true },
    { id: 3, name: 'Киберхакер', icon: 'Code', color: 'text-cyber-pink', unlocked: true },
    { id: 4, name: 'Создатель миров', icon: 'Globe', color: 'text-cyber-cyan', unlocked: false },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like': return 'Heart';
      case 'comment': return 'MessageCircle';
      case 'friend': return 'UserPlus';
      case 'achievement': return 'Award';
      default: return 'Bell';
    }
  };

  const getNotificationText = (notif: typeof mockNotifications[0]) => {
    switch (notif.type) {
      case 'like': return `${notif.user} оценил ваш пост`;
      case 'comment': return `${notif.user} прокомментировал`;
      case 'friend': return `${notif.user} добавил в друзья`;
      case 'achievement': return 'Новое достижение разблокировано!';
      default: return 'Уведомление';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 via-transparent to-cyber-purple/5 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto p-4 md:p-6">
        <header className="mb-6 animate-fade-in-up">
          <div className="flex items-center justify-between p-4 bg-card/50 backdrop-blur-xl rounded-lg border border-primary/30 neon-border">
            <h1 className="text-3xl md:text-4xl font-bold neon-glow">CYBER NETWORK</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-primary/50 hover:bg-primary/20 hover:animate-glow-pulse">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-primary/50 hover:bg-primary/20 hover:animate-glow-pulse">
                <Icon name="Settings" size={20} />
              </Button>
            </div>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-xl border border-primary/30 animate-fade-in-up">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Сообщения
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Bell" size={18} className="mr-2" />
              Уведомления
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 animate-fade-in-up">
            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 neon-border overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink" />
              <CardContent className="relative pt-0 pb-6">
                <div className="flex flex-col md:flex-row gap-6 -mt-16">
                  <Avatar className="w-32 h-32 border-4 border-card animate-glow-pulse">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-4 mt-16 md:mt-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-3xl font-bold neon-glow">{mockUser.name}</h2>
                        <p className="text-muted-foreground">Уровень {mockUser.level} • Киберразработчик</p>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-primary hover:bg-primary/90 animate-glow-pulse">
                          <Icon name="UserPlus" size={18} className="mr-2" />
                          Добавить в друзья
                        </Button>
                        <Button variant="outline" className="border-primary/50 hover:bg-primary/20">
                          <Icon name="Send" size={18} className="mr-2" />
                          Сообщение
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>XP до следующего уровня</span>
                        <span className="text-primary font-bold">{mockUser.xp}%</span>
                      </div>
                      <Progress value={mockUser.xp} className="h-3 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-cyber-cyan [&>div]:to-cyber-purple [&>div]:animate-glow-pulse" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{mockUser.friends}</p>
                        <p className="text-sm text-muted-foreground">Друзья</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">{mockUser.posts}</p>
                        <p className="text-sm text-muted-foreground">Посты</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">{mockUser.achievements}</p>
                        <p className="text-sm text-muted-foreground">Достижения</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 neon-glow">
                  <Icon name="Award" size={24} className="text-primary animate-glow-pulse" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {mockAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border transition-all ${
                        achievement.unlocked
                          ? 'border-primary/50 bg-primary/10 animate-glow-pulse'
                          : 'border-border/50 bg-muted/20 opacity-50'
                      }`}
                    >
                      <Icon
                        name={achievement.icon as any}
                        size={32}
                        className={`mx-auto mb-2 ${achievement.unlocked ? achievement.color : 'text-muted-foreground'}`}
                      />
                      <p className="text-xs text-center font-medium">{achievement.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="animate-fade-in-up">
            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 neon-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 neon-glow">
                    <Icon name="MessageSquare" size={24} className="text-primary animate-glow-pulse" />
                    Чаты
                  </span>
                  <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                    <Icon name="Plus" size={20} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-2">
                    {mockChats.map((chat) => (
                      <div
                        key={chat.id}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group"
                      >
                        <Avatar className="w-12 h-12 group-hover:animate-glow-pulse">
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold truncate">{chat.name}</h4>
                            {chat.type === 'group' && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="Users" size={12} className="mr-1" />
                                Группа
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        
                        <div className="text-right space-y-2">
                          <p className="text-xs text-muted-foreground">{chat.time}</p>
                          {chat.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground animate-glow-pulse">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="animate-fade-in-up">
            <Card className="bg-card/50 backdrop-blur-xl border-primary/30 neon-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2 neon-glow">
                    <Icon name="Bell" size={24} className="text-primary animate-glow-pulse" />
                    Уведомления
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Отметить все
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-2">
                    {mockNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group"
                      >
                        <Avatar className="w-10 h-10 group-hover:animate-glow-pulse">
                          <AvatarImage src={notif.avatar} />
                          <AvatarFallback>{notif.user[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <p className="text-sm mb-1">{getNotificationText(notif)}</p>
                          <p className="text-xs text-muted-foreground">{notif.time}</p>
                        </div>
                        
                        <Icon
                          name={getNotificationIcon(notif.type) as any}
                          size={20}
                          className="text-primary group-hover:animate-glow-pulse"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
