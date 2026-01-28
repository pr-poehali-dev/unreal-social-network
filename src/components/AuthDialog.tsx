import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface AuthDialogProps {
  onClose?: () => void;
}

const AuthDialog = ({ onClose }: AuthDialogProps) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/91340629-f7a0-4f78-a1c9-6b90a3f7201a/bucket/7843aeb2-a8b8-4efa-b7e5-1fe89b5f0be1.png)',
        }}
      />
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative w-full max-w-md animate-fade-in-up">
        {!showRegisterForm ? (
          <>
            <Card className="bg-[#2a2d35]/45 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/91340629-f7a0-4f78-a1c9-6b90a3f7201a/bucket/a1e3b0f6-347b-4766-8b61-bca881f888b5.png" 
                    alt="Swarm Logo" 
                    className="h-10"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 px-6 pb-6">
                <Button 
                  className="w-full h-12 bg-[#e8a83e] hover:bg-[#d99a35] text-black font-semibold text-sm rounded-lg transition-all"
                  onClick={() => setShowRegisterForm(true)}
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full h-12 bg-[#4a4d55]/80 hover:bg-[#5a5d65]/80 border-none text-white font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2"
                  onClick={() => console.log('Google login clicked')}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.20454Z" fill="#4285F4"/>
                    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                  </svg>
                  ВОЙТИ ЧЕРЕЗ GOOGLE
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full h-12 bg-[#4a4d55]/80 hover:bg-[#5a5d65]/80 border-none text-white font-medium text-sm rounded-lg transition-all"
                  onClick={() => console.log('Email login clicked')}
                >
                  ВОЙТИ ЧЕРЕЗ E-MAIL
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setShowRegisterForm(false)}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold text-center flex-1 text-white drop-shadow-lg">
                Создать аккаунт
              </h1>
            </div>
            
            <Card className="bg-[#2a2d35]/45 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/91340629-f7a0-4f78-a1c9-6b90a3f7201a/bucket/a1e3b0f6-347b-4766-8b61-bca881f888b5.png" 
                    alt="Swarm Logo" 
                    className="h-10"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">Имя пользователя</label>
                  <Input 
                    type="text"
                    placeholder="Введите имя"
                    className="h-11 bg-[#3a3d45] border-none text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">Почта</label>
                  <Input 
                    type="email"
                    placeholder="example@mail.com"
                    className="h-11 bg-[#3a3d45] border-none text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">Логин</label>
                  <Input 
                    type="text"
                    placeholder="Введите логин"
                    className="h-11 bg-[#3a3d45] border-none text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">Пароль</label>
                  <Input 
                    type="password"
                    placeholder="Введите пароль"
                    className="h-11 bg-[#3a3d45] border-none text-white placeholder:text-gray-500"
                  />
                </div>
                
                <Button 
                  className="w-full h-12 bg-[#e8a83e] hover:bg-[#d99a35] text-black font-semibold text-sm rounded-lg transition-all mt-4"
                  onClick={() => console.log('Register submitted')}
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthDialog;