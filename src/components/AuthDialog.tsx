import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AuthDialogProps {
  onClose?: () => void;
}

const AuthDialog = ({ onClose }: AuthDialogProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/91340629-f7a0-4f78-a1c9-6b90a3f7201a/bucket/2859c4b5-a0e7-4fb8-8670-a5f8c4e9eced.jpeg)',
          filter: 'blur(8px)',
        }}
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative w-full max-w-md animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Регистрация
        </h1>
        
        <Card className="bg-[#2a2d35]/95 backdrop-blur-md border-none shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span className="text-2xl font-bold text-white tracking-wider">SWARM</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3 px-6 pb-6">
            <Button 
              className="w-full h-12 bg-[#e8a83e] hover:bg-[#d99a35] text-black font-semibold text-sm rounded-lg transition-all"
              onClick={() => console.log('Register clicked')}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
            
            <Button 
              variant="outline"
              className="w-full h-12 bg-[#4a4d55]/80 hover:bg-[#5a5d65]/80 border-none text-white font-medium text-sm rounded-lg transition-all"
              onClick={() => console.log('Google login clicked')}
            >
              <Icon name="Mail" size={18} className="mr-2" />
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
      </div>
    </div>
  );
};

export default AuthDialog;
