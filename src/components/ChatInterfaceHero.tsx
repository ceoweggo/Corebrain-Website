import React, { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { 
  MessageSquare, 
  Send, 
  ChevronDown,
  BarChart,
  FileText,
  Database,
  LineChart,
  PieChart,
  Search,
  User,
  Settings,
  Trash2,
  Download,
  RefreshCcw,
  HelpCircle,
  History,
  BookOpen,
  Code,
  Activity
} from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: ReportOption[];
};

type ReportOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  action: () => void;
};

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
      options: [
        {
          id: 'report-sales',
          label: 'Informe de ventas',
          icon: <BarChart className="h-4 w-4" />,
          description: 'Ver informe detallado de ventas',
          action: () => handleReportSelection('sales'),
        },
        {
          id: 'report-users',
          label: 'Análisis de usuarios',
          icon: <User className="h-4 w-4" />,
          description: 'Estadísticas de usuarios',
          action: () => handleReportSelection('users'),
        },
        {
          id: 'report-database',
          label: 'Estado de la base de datos',
          icon: <Database className="h-4 w-4" />,
          description: 'Consultar estado actual de la base de datos',
          action: () => handleReportSelection('database'),
        }
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [reportType, setReportType] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChat, setCurrentChat] = useState('default');
  
  const sidebarItems: SidebarItem[] = [
    {
      id: 'history',
      label: 'Historial',
      icon: <History className="h-5 w-5" />,
      action: () => console.log('Historial')
    },
    {
      id: 'documentation',
      label: 'Documentación',
      icon: <BookOpen className="h-5 w-5" />,
      action: () => console.log('Documentación')
    },
    {
      id: 'code-examples',
      label: 'Ejemplos de código',
      icon: <Code className="h-5 w-5" />,
      action: () => console.log('Ejemplos de código')
    },
    {
      id: 'performance',
      label: 'Rendimiento',
      icon: <Activity className="h-5 w-5" />,
      action: () => console.log('Rendimiento')
    },
    {
      id: 'help',
      label: 'Ayuda',
      icon: <HelpCircle className="h-5 w-5" />,
      action: () => console.log('Ayuda')
    }
  ];
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input after sending
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `He recibido tu mensaje: "${inputValue}". ¿Qué tipo de informe te gustaría ver?`,
        sender: 'bot',
        timestamp: new Date(),
        options: [
          {
            id: 'report-sales',
            label: 'Informe de ventas',
            icon: <BarChart className="h-4 w-4" />,
            action: () => handleReportSelection('sales'),
          },
          {
            id: 'report-users',
            label: 'Análisis de usuarios',
            icon: <LineChart className="h-4 w-4" />,
            action: () => handleReportSelection('users'),
          },
          {
            id: 'report-inventory',
            label: 'Inventario actual',
            icon: <FileText className="h-4 w-4" />,
            action: () => handleReportSelection('inventory'),
          },
        ]
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleReportSelection = (type: string) => {
    setReportType(type);
    
    let responseContent = '';
    let options: ReportOption[] = [];
    
    switch(type) {
      case 'sales':
        responseContent = 'Aquí tienes el informe de ventas. Los ingresos han aumentado un 15% respecto al mes anterior.';
        options = [
          {
            id: 'sales-detail',
            label: 'Ver detalles por región',
            icon: <PieChart className="h-4 w-4" />,
            action: () => handleReportSelection('sales-region'),
          },
          {
            id: 'sales-forecast',
            label: 'Proyección de ventas',
            icon: <LineChart className="h-4 w-4" />,
            action: () => handleReportSelection('sales-forecast'),
          }
        ];
        break;
      case 'users':
        responseContent = 'El análisis de usuarios muestra un incremento del 22% en nuevos registros. La retención se mantiene en 68%.';
        options = [
          {
            id: 'users-demographics',
            label: 'Demografía de usuarios',
            icon: <PieChart className="h-4 w-4" />,
            action: () => handleReportSelection('users-demographics'),
          },
          {
            id: 'users-activity',
            label: 'Actividad de usuarios',
            icon: <BarChart className="h-4 w-4" />,
            action: () => handleReportSelection('users-activity'),
          }
        ];
        break;
      case 'database':
        responseContent = 'La base de datos está funcionando correctamente. Actualmente hay 1,245 registros y el tiempo de respuesta promedio es de 0.3s.';
        options = [
          {
            id: 'database-tables',
            label: 'Ver tablas',
            icon: <Database className="h-4 w-4" />,
            action: () => handleReportSelection('database-tables'),
          },
          {
            id: 'database-queries',
            label: 'Consultas frecuentes',
            icon: <Search className="h-4 w-4" />,
            action: () => handleReportSelection('database-queries'),
          }
        ];
        break;
      case 'sales-region':
        responseContent = 'Desglose por región: Norte (32%), Sur (28%), Este (22%), Oeste (18%).';
        break;
      case 'sales-forecast':
        responseContent = 'Según nuestras proyecciones, se espera un crecimiento del 12% para el próximo trimestre.';
        break;
      case 'inventory':
        responseContent = 'El inventario actual muestra 532 productos. Hay 5 productos con existencias bajas.';
        options = [
          {
            id: 'inventory-low',
            label: 'Ver productos con existencias bajas',
            icon: <FileText className="h-4 w-4" />,
            action: () => handleReportSelection('inventory-low'),
          }
        ];
        break;
      default:
        responseContent = 'Lo siento, ese informe no está disponible en este momento.';
    }
    
    const botResponse: Message = {
      id: Date.now().toString(),
      content: responseContent,
      sender: 'bot',
      timestamp: new Date(),
      options: options
    };
    
    setMessages(prev => [...prev, botResponse]);
  };
  
  const predefinedQueries = [
    { value: 'sales-report', label: 'Informe de ventas mensual' },
    { value: 'user-growth', label: 'Crecimiento de usuarios' },
    { value: 'inventory-status', label: 'Estado de inventario' },
    { value: 'performance', label: 'Rendimiento del sistema' },
  ];
  
  const handlePredefinedQuery = (value: string) => {
    switch(value) {
      case 'sales-report':
        setInputValue('Necesito un informe de ventas mensual');
        break;
      case 'user-growth':
        setInputValue('Muéstrame el crecimiento de usuarios');
        break;
      case 'inventory-status':
        setInputValue('¿Cuál es el estado actual del inventario?');
        break;
      case 'performance':
        setInputValue('¿Cómo está el rendimiento del sistema?');
        break;
    }
  };
  
  const clearConversation = () => {
    setMessages([
      {
        id: '1',
        content: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?',
        sender: 'bot',
        timestamp: new Date(),
        options: [
          {
            id: 'report-sales',
            label: 'Informe de ventas',
            icon: <BarChart className="h-4 w-4" />,
            description: 'Ver informe detallado de ventas',
            action: () => handleReportSelection('sales'),
          },
          {
            id: 'report-users',
            label: 'Análisis de usuarios',
            icon: <User className="h-4 w-4" />,
            description: 'Estadísticas de usuarios',
            action: () => handleReportSelection('users'),
          },
          {
            id: 'report-database',
            label: 'Estado de la base de datos',
            icon: <Database className="h-4 w-4" />,
            description: 'Consultar estado actual de la base de datos',
            action: () => handleReportSelection('database'),
          }
        ]
      }
    ]);
  };
  
  const exportChat = () => {
    const chatData = messages.map(msg => ({
      content: msg.content,
      sender: msg.sender,
      timestamp: msg.timestamp.toISOString()
    }));
    
    const chatText = JSON.stringify(chatData, null, 2);
    const blob = new Blob([chatText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="flex h-[450px] w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border border-slate-200">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-slate-50 border-r transition-all duration-300 overflow-hidden`}>
        <div className="p-4 border-b">
          <h3 className="font-medium">Navegación</h3>
        </div>
        
        <div className="py-2">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={item.action}
              className="flex items-center space-x-2 w-full p-3 hover:bg-slate-100 text-left"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Main Chat Area */}
      <Card className="flex flex-col flex-1 border-0 shadow-none rounded-none">
        <CardHeader className="border-b p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleSidebar}
                className="p-1 hover:bg-slate-100 rounded-md"
              >
                <MessageSquare className="h-5 w-5 text-primary" />
              </button>
              <CardTitle className="text-lg">Asistente Inteligente</CardTitle>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={clearConversation}>
                  <Trash2 className="h-4 w-4" />
                  <span>Limpiar conversación</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
                  <RefreshCcw className="h-4 w-4" />
                  <span>Cambiar modelo</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={exportChat}>
                  <Download className="h-4 w-4" />
                  <span>Exportar chat</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground ml-4' 
                      : 'bg-muted mr-4'
                  }`}
                >
                  <div className="space-y-2">
                    <p>{message.content}</p>
                    
                    {message.options && message.options.length > 0 && (
                      <div className="pt-2 space-y-2">
                        <p className="text-xs font-medium">Opciones disponibles:</p>
                        <div className="flex flex-wrap gap-2">
                          {message.options.map(option => (
                            <Button 
                              key={option.id}
                              size="sm" 
                              variant={message.sender === 'user' ? 'secondary' : 'outline'} 
                              onClick={option.action}
                              className="flex items-center hover:scale-105 transition-transform"
                            >
                              {option.icon}
                              <span className="ml-1">{option.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <CardFooter className="p-3 border-t">
          <div className="flex items-center space-x-2 w-full">
            <Select onValueChange={handlePredefinedQuery}>
              <SelectTrigger className="w-auto" aria-label="Seleccionar consulta predefinida">
                <ChevronDown className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                {predefinedQueries.map(query => (
                  <SelectItem key={query.value} value={query.value}>
                    {query.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje o selecciona una opción..."
              className="flex-1"
            />
            
            <Button 
              size="icon" 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim()}
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatInterface;