type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

// Definición de traducciones
const translations: Translations = {
  // Footer translations
  'footer.copyright': {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.'
  },
  'footer.poweredBy': {
    es: 'Desarrollado por',
    en: 'Powered by'
  },
  'footer.product.title': {
    es: 'Producto',
    en: 'Product'
  },
  'footer.product.docs': {
    es: 'Documentación',
    en: 'Documentation'
  },
  'footer.product.downloads': {
    es: 'Descargas',
    en: 'Downloads'
  },
  'footer.product.forum': {
    es: 'Foro',
    en: 'Forum'
  },
  'footer.company.title': {
    es: 'Compañía',
    en: 'Company'
  },
  'footer.company.careers': {
    es: 'Carreras',
    en: 'Careers'
  },
  'footer.company.security': {
    es: 'Seguridad',
    en: 'Security'
  },
  'footer.company.privacy': {
    es: 'Privacidad',
    en: 'Privacy'
  },
  'footer.legal.title': {
    es: 'Legal',
    en: 'Legal'
  },
  'footer.legal.terms': {
    es: 'Términos',
    en: 'Terms'
  },
  'footer.legal.changelog': {
    es: 'Registro de cambios',
    en: 'Changelog'
  },

  // Integration page translations
  'integration.title': {
    es: 'Integración',
    en: 'Integration'
  },
  'integration.subtitle': {
    es: 'Integra nuestra solución fácilmente',
    en: 'Easily integrate our solution'
  },
  'integration.steps.0.title': {
    es: 'Crear una cuenta',
    en: 'Create an account'
  },
  'integration.steps.0.description': {
    es: 'Regístrate para obtener acceso a nuestra API y herramientas de desarrollo.',
    en: 'Sign up to get access to our API and development tools.'
  },
  'integration.steps.1.title': {
    es: 'Instalar el SDK',
    en: 'Install the SDK'
  },
  'integration.steps.1.description': {
    es: 'Instala nuestro SDK usando tu gestor de paquetes favorito.',
    en: 'Install our SDK using your favorite package manager.'
  },
  'integration.steps.2.title': {
    es: 'Configurar',
    en: 'Configure'
  },
  'integration.steps.2.description': {
    es: 'Configura el SDK con tus credenciales y empieza a usarlo.',
    en: 'Set up the SDK with your credentials and start using it.'
  },

  // How it works translations
  'how.title': {
    es: '¿Cómo funciona?',
    en: 'How it works?'
  },
  'how.step1.title': {
    es: 'Conecta tu DDBB',
    en: 'Connect your DB'
  },
  'how.step1.description': {
    es: 'Crea una cuenta en la plataforma, descarga el SDK y sigue la guía de integración para tu aplicación.',
    en: 'Create an account on the platform, download the SDK and follow the integration guide for your application.'
  },
  'how.step2.title': {
    es: 'Personaliza el chat',
    en: 'Customize the chat'
  },
  'how.step2.description': {
    es: 'Personaliza el chat y otros ajustes en nuestra plataforma para que la integración iFrame a tu HTML sea la adecuada.',
    en: 'Customize the chat and other settings on our platform so that the iFrame integration into your HTML is appropriate.'
  },
  'how.step3.title': {
    es: 'Configura la aplicación',
    en: 'Configure the application'
  },
  'how.step3.description': {
    es: 'Limita los parámetros de consulta del SDK. Selecciona roles o documentos claves según prioridades de acceso.',
    en: 'Limit SDK query parameters. Select key roles or documents according to access priorities.'
  },
  'how.step4.title': {
    es: 'Listo para su uso',
    en: 'Ready to use'
  },
  'how.step4.description': {
    es: 'Mediante la consulta en el chat podrás generar informes y acceder a la información de la base de datos (DDBB).',
    en: 'Through chat queries you can generate reports and access database (DB) information.'
  },

  // Common page elements
  'nav.home': {
    es: 'Inicio',
    en: 'Home'
  },
  'nav.about': {
    es: 'Nosotros',
    en: 'About'
  },
  'nav.pricing': {
    es: 'Precios',
    en: 'Pricing'
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact'
  },
  'nav.blog': {
    es: 'Blog',
    en: 'Blog'
  },

  // Error pages
  '404.title': {
    es: 'Página no encontrada',
    en: 'Page not found'
  },
  '404.description': {
    es: 'Lo sentimos, la página que buscas no existe.',
    en: 'Sorry, the page you are looking for does not exist.'
  },
  '404.button': {
    es: 'Volver al inicio',
    en: 'Back to home'
  },

  // Hero translations
  'hero.title': {
    es: 'Consigue reportes de datos en tiempo real',
    en: 'Get real-time data reports'
  },
  'hero.description': {
    es: 'Transforma tus datos NoSQL directamente desde la base de datos en conocimiento accionable con nuestro SDK de IA. Realiza consultas en lenguaje natural y genera informes automáticos.',
    en: 'Transform your NoSQL data directly from the database into actionable insights with our AI SDK. Make natural language queries and generate automatic reports.'
  },
  'hero.cta.start': {
    es: 'Comenzar ahora',
    en: 'Get started'
  },
  'hero.cta.talk': {
    es: 'Hablar con el equipo',
    en: 'Talk to the team'
  },
  'hero.mobile.title': {
    es: 'Asistente Inteligente',
    en: 'AI Assistant'
  },

  // Features translations
  'features.title': {
    es: 'Exporta información de valor',
    en: 'Export valuable information'
  },
  'features.description': {
    es: 'La integración de nuestro SDK en vuestra aplicación permite brindaros acceso directo a consultas avanzadas, evitando el desarrollo de funcionalidades complejas. Con un simple chat, permitimos acceder a la información a través del lenguaje natural.',
    en: 'Integrating our SDK into your application provides direct access to advanced queries, avoiding complex functionality development. With a simple chat, we allow access to information through natural language.'
  },
  'features.1.title': {
    es: 'Integración con Anthropic',
    en: 'Anthropic Integration'
  },
  'features.1.description': {
    es: 'Análisis y comprensión del lenguaje a través de Claude 3.7 y 3.5, uno de los sistemas de IA más potente del mercado.',
    en: 'Language analysis and understanding through Claude 3.7 and 3.5, one of the most powerful AI systems in the market.'
  },
  'features.2.title': {
    es: 'Consultas en lenguaje natural',
    en: 'Natural language queries'
  },
  'features.2.description': {
    es: 'Haz preguntas en tu idioma a través del chat. Éste entenderá tu consulta y devolverá la información oportuna.',
    en: 'Ask questions in your language through chat. It will understand your query and return the appropriate information.'
  },
  'features.3.title': {
    es: 'Análisis en tiempo real',
    en: 'Real-time analysis'
  },
  'features.3.description': {
    es: 'Procesa y analiza tus datos al instante. Toma decisiones informadas rápidamente y mantén tu negocio ágil.',
    en: 'Process and analyze your data instantly. Make informed decisions quickly and keep your business agile.'
  },
  'features.4.title': {
    es: 'Informes automáticos',
    en: 'Automatic reports'
  },
  'features.4.description': {
    es: 'Genera informes avanzados automáticamente. Convierte datos dispersos en conocimiento útil y accionable.',
    en: 'Generate advanced reports automatically. Convert scattered data into useful and actionable knowledge.'
  },
  'features.5.title': {
    es: 'Seguridad y privacidad',
    en: 'Security and privacy'
  },
  'features.5.description': {
    es: 'Sólo tu tienes acceso a los datos. El SDK comprende tu cuestión y una función realiza las consultas de forma interna.',
    en: 'Only you have access to the data. The SDK understands your question and a function performs queries internally.'
  },
  'features.6.title': {
    es: 'Integración simplificada',
    en: 'Simplified integration'
  },
  'features.6.description': {
    es: 'Proceso sencillo y rápido a través del panel de control con autenticación centralizada usando Globodain SSO.',
    en: 'Simple and fast process through the control panel with centralized authentication using Globodain SSO.'
  },

  // Use cases translations
  'use-cases.title': {
    es: 'Casos de uso',
    en: 'Use cases'
  },
  'use-cases.description': {
    es: 'Descubre cómo Corebrain puede transformar la forma en que analizas y utilizas tus datos NoSQL en diferentes escenarios empresariales.',
    en: 'Discover how Corebrain can transform the way you analyze and use your NoSQL data in different business scenarios.'
  },
  'use-cases.1.title': {
    es: 'Análisis de datos en tiempo real',
    en: 'Real-time data analysis'
  },
  'use-cases.1.description': {
    es: 'Monitorea y analiza tus datos al instante para detectar patrones y anomalías. Toma decisiones inmediatas basadas en información actualizada.',
    en: 'Monitor and analyze your data instantly to detect patterns and anomalies. Make immediate decisions based on updated information.'
  },
  'use-cases.2.title': {
    es: 'Generación de informes automáticos',
    en: 'Automatic report generation'
  },
  'use-cases.2.description': {
    es: 'Crea informes detallados y visualizaciones automáticamente. Ahorra tiempo y recursos en la preparación de informes manuales.',
    en: 'Create detailed reports and visualizations automatically. Save time and resources in manual report preparation.'
  },
  'use-cases.3.title': {
    es: 'Consultas en lenguaje natural',
    en: 'Natural language queries'
  },
  'use-cases.3.description': {
    es: 'Haz preguntas sobre tus datos usando lenguaje normal. No necesitas aprender lenguajes de consulta específicos para cada base de datos.',
    en: 'Ask questions about your data using normal language. No need to learn specific query languages for each database.'
  },
  'use-cases.4.title': {
    es: 'Predicción de tendencias',
    en: 'Trend prediction'
  },
  'use-cases.4.description': {
    es: 'Usa algoritmos de IA para predecir tendencias y comportamientos futuros. Anticípate a las necesidades del mercado con datos históricos.',
    en: 'Use AI algorithms to predict future trends and behaviors. Anticipate market needs with historical data.'
  },

  // Chat Interface translations
  'chat.title': {
    es: 'Asistente Inteligente',
    en: 'AI Assistant'
  },
  'chat.input.placeholder': {
    es: 'Escribe un mensaje o selecciona una opción...',
    en: 'Type a message or select an option...'
  },
  'chat.welcome': {
    es: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?',
    en: 'Hi! I\'m your assistant. How can I help you today?'
  },
  'chat.options.sales': {
    es: 'Informe de ventas',
    en: 'Sales report'
  },
  'chat.options.users': {
    es: 'Análisis de usuarios',
    en: 'User analysis'
  },
  'chat.options.database': {
    es: 'Estado de la base de datos',
    en: 'Database status'
  },
  'chat.menu.clear': {
    es: 'Limpiar conversación',
    en: 'Clear conversation'
  },
  'chat.menu.model': {
    es: 'Cambiar modelo',
    en: 'Change model'
  },
  'chat.menu.export': {
    es: 'Exportar chat',
    en: 'Export chat'
  },
  'chat.predefined.sales': {
    es: 'Informe de ventas mensual',
    en: 'Monthly sales report'
  },
  'chat.predefined.users': {
    es: 'Crecimiento de usuarios',
    en: 'User growth'
  },
  'chat.predefined.inventory': {
    es: 'Estado de inventario',
    en: 'Inventory status'
  },
  'chat.predefined.performance': {
    es: 'Rendimiento del sistema',
    en: 'System performance'
  },

  // Navbar translations
  'nav.docs': {
    es: 'Documentación',
    en: 'Documentation'
  },
  'nav.docs.api': {
    es: 'API Docs',
    en: 'API Docs'
  },
  'nav.docs.sdk': {
    es: 'SDK',
    en: 'SDK'
  },
  'nav.docs.platform': {
    es: 'Plataforma del usuario',
    en: 'User Platform'
  },
  'nav.connect': {
    es: 'Conectarme',
    en: 'Connect'
  },

  // FAQ translations
  'faq.title': {
    es: 'Preguntas frecuentes',
    en: 'Frequently Asked Questions'
  },
  'faq.subtitle': {
    es: 'Resolvemos tus dudas sobre Etedata y cómo puede ayudarte a transformar tus datos.',
    en: 'We solve your questions about Etedata and how it can help you transform your data.'
  },
  'faq.1.question': {
    es: '¿Qué es Etedata? ¿Y Corebrain?',
    en: 'What is Etedata? And Corebrain?'
  },
  'faq.1.answer': {
    es: 'Etedata es una plataforma enfocada en el desarrollo del Business Intelligence a través del uso del Data Science. Con la finalidad de completar este último, se ha desarrollo Corebrain. Corebrain es una solución que permite combinar centralizar las conexiones a las bases de datos y consultar los datos mediante lenguaje natural para procesarlos en el código o mediante chat.',
    en: 'Etedata is a platform focused on Business Intelligence development through Data Science. To complete the latter, Corebrain has been developed. Corebrain is a solution that allows you to combine and centralize database connections and query data using natural language to process it in code or through chat.'
  },
  'faq.2.question': {
    es: '¿Qué pasa con mis datos? ¿Y con las conexiones?',
    en: 'What happens with my data? And with connections?'
  },
  'faq.2.answer': {
    es: 'Las conexiones son guardadas en lo que denominamos \'configuraciones\'. Estas configuraciones retienen la conexión a la base de datos asociada a una API Key. Una API Key puede tener múltiples configuraciones e ir alternando entre ellas, aunque sugerimos mantener una API Key por cada tipo de bases de datos ya que éstas también controlan el rol de acceso (lectura, escritura) de las tablas o colecciones seleccionadas durante la configuración. Las configuraciones son guardadas en local y en remoto para permitir acceder a ellas a través del panel de control, pero nunca guardamos los datos. Estos datos son procesados con los modelos de IA de OpenAI o Anthropic de forma limitada. De esta forma, aseguramos que tus datos no serán accesibles por nuestro equipo.',
    en: 'Connections are saved in what we call \'configurations\'. These configurations retain the database connection associated with an API Key. An API Key can have multiple configurations and alternate between them, although we suggest keeping one API Key per database type as these also control the access role (read, write) of tables or collections selected during configuration. Configurations are saved locally and remotely to allow access through the control panel, but we never store the data. This data is processed with OpenAI or Anthropic AI models in a limited way. This way, we ensure your data will not be accessible by our team.'
  },
  'faq.3.question': {
    es: '¿Qué bases de datos son compatibles con Etedata?',
    en: 'Which databases are compatible with Etedata?'
  },
  'faq.3.answer': {
    es: 'Etedata realiza todas las conexiones a través de Corebrain. Corebrain sólo permite, por ahora, el uso de SQLite, Postgres, MySQL y MongoDB (NoSQL)',
    en: 'Etedata makes all connections through Corebrain. Corebrain only allows, for now, the use of SQLite, Postgres, MySQL and MongoDB (NoSQL)'
  },
  'faq.4.question': {
    es: '¿Necesito conocimientos técnicos avanzados para usar Etedata?',
    en: 'Do I need advanced technical knowledge to use Etedata?'
  },
  'faq.4.answer': {
    es: 'No. Etedata está diseñado para todos, sin importar su nivel técnico. Nuestro SDK tiene una interfaz intuitiva que te permite hacer análisis complejos sin escribir código.',
    en: 'No. Etedata is designed for everyone, regardless of their technical level. Our SDK has an intuitive interface that allows you to perform complex analysis without writing code.'
  },
  'faq.5.question': {
    es: '¿Cómo se integra Etedata con mi infraestructura existente?',
    en: 'How does Etedata integrate with my existing infrastructure?'
  },
  'faq.5.answer': {
    es: 'Etedata se integra fácilmente con tu infraestructura a través de nuestro SDK. Te proporcionamos documentación detallada y soporte técnico para una implementación sin problemas.',
    en: 'Etedata integrates easily with your infrastructure through our SDK. We provide detailed documentation and technical support for a smooth implementation.'
  },
  'faq.6.question': {
    es: '¿Qué tipo de análisis puedo hacer con Etedata?',
    en: 'What kind of analysis can I do with Etedata?'
  },
  'faq.6.answer': {
    es: 'Con Etedata puedes hacer análisis predictivos, detectar anomalías, segmentar clientes, analizar tendencias y generar informes automáticos. Nuestro sistema de IA se adapta a tus necesidades.',
    en: 'With Etedata you can do predictive analysis, detect anomalies, segment customers, analyze trends and generate automatic reports. Our AI system adapts to your needs.'
  },
  'faq.7.question': {
    es: '¿Es gratis usar Etedata?',
    en: 'Is it free to use Etedata?'
  },
  'faq.7.answer': {
    es: 'Sí. Etedata tiene una capa gratuita y otras de pago según el uso que se le de a las herramientas. Podrás contratar y ampliar éstas según las necesidades de uso. Cada aplicación es independiente, con excepción de Corebrain - eje de todas las soluciones para permitir la entrada de datos directos -. Si no quieres hacer uso de Corebrain, tendrás que importar tus datos a la plataforma mediante otras vías para realizar los análisis debidamente (opción aún no disponible)',
    en: 'Yes. Etedata has a free tier and other paid tiers depending on tool usage. You can contract and expand these according to your usage needs. Each application is independent, except for Corebrain - the axis of all solutions to allow direct data input -. If you don\'t want to use Corebrain, you\'ll have to import your data to the platform through other means to properly perform the analysis (option not yet available)'
  },

  // Chat Interface additional translations
  'chat.options.available': {
    es: 'Opciones disponibles',
    en: 'Available options'
  },
  'chat.select.predefined': {
    es: 'Seleccionar consulta predefinida',
    en: 'Select predefined query'
  },
  'chat.error.email': {
    es: 'Por favor, introduce un email válido',
    en: 'Please enter a valid email'
  },
  'chat.error.generic': {
    es: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.',
    en: 'An error has occurred. Please try again later.'
  },

  // Additional navbar translations
  'nav.menu.aria': {
    es: 'Menú principal',
    en: 'Main menu'
  },
  'nav.lang.select': {
    es: 'Seleccionar idioma',
    en: 'Select language'
  },
  'nav.search.placeholder': {
    es: 'Buscar...',
    en: 'Search...'
  },

  // Additional integration translations
  'integration.code.python': {
    es: 'Código Python',
    en: 'Python Code'
  },
  'integration.code.csharp': {
    es: 'Código C#',
    en: 'C# Code'
  },
  'integration.step.next': {
    es: 'Siguiente paso',
    en: 'Next step'
  },
  'integration.step.previous': {
    es: 'Paso anterior',
    en: 'Previous step'
  },

  // Additional pricing translations
  'pricing.title': {
    es: 'Planes y precios',
    en: 'Plans & Pricing'
  },
  'pricing.subtitle': {
    es: 'Elige el plan que mejor se adapte a tus necesidades',
    en: 'Choose the plan that best fits your needs'
  },
  'pricing.plan.free': {
    es: 'Gratis',
    en: 'Free'
  },
  'pricing.plan.starter': {
    es: 'Inicial',
    en: 'Starter'
  },
  'pricing.plan.pro': {
    es: 'Profesional',
    en: 'Professional'
  },
  'pricing.plan.enterprise': {
    es: 'Empresa',
    en: 'Enterprise'
  },
  'pricing.period.monthly': {
    es: 'Mensual',
    en: 'Monthly'
  },
  'pricing.period.annual': {
    es: 'Anual',
    en: 'Annual'
  },
  'pricing.period.save': {
    es: 'Ahorra un 20%',
    en: 'Save 20%'
  },
  'pricing.feature.users': {
    es: 'usuarios',
    en: 'users'
  },
  'pricing.feature.storage': {
    es: 'GB de almacenamiento',
    en: 'GB storage'
  },
  'pricing.feature.support': {
    es: 'Soporte por email',
    en: 'Email support'
  },
  'pricing.feature.api': {
    es: 'Acceso a API',
    en: 'API access'
  },
  'pricing.feature.customization': {
    es: 'Personalización',
    en: 'Customization'
  },
  'pricing.feature.security': {
    es: 'Seguridad avanzada',
    en: 'Advanced security'
  },
  'pricing.feature.analytics': {
    es: 'Análisis avanzado',
    en: 'Advanced analytics'
  },
  'pricing.feature.dedicated': {
    es: 'Soporte dedicado',
    en: 'Dedicated support'
  },
  'pricing.feature.unlimited': {
    es: 'Ilimitado',
    en: 'Unlimited'
  },
  'pricing.cta.start': {
    es: 'Comenzar gratis',
    en: 'Start for free'
  },
  'pricing.cta.subscribe': {
    es: 'Suscribirse',
    en: 'Subscribe'
  },
  'pricing.cta.contact': {
    es: 'Contactar ventas',
    en: 'Contact sales'
  },
  'pricing.disclaimer': {
    es: 'Los precios no incluyen IVA',
    en: 'Prices do not include VAT'
  },
  'pricing.guarantee': {
    es: 'Garantía de devolución de 30 días',
    en: '30-day money-back guarantee'
  },
  'pricing.questions': {
    es: '¿Tienes preguntas?',
    en: 'Have questions?'
  },
  'pricing.compare': {
    es: 'Comparar planes',
    en: 'Compare plans'
  },

  // Error messages and validations
  'error.required': {
    es: 'Este campo es requerido',
    en: 'This field is required'
  },
  'error.invalid': {
    es: 'El valor ingresado no es válido',
    en: 'The entered value is invalid'
  },
  'error.network': {
    es: 'Error de conexión. Por favor, verifica tu conexión a internet.',
    en: 'Connection error. Please check your internet connection.'
  },
  'error.server': {
    es: 'Error del servidor. Por favor, inténtalo más tarde.',
    en: 'Server error. Please try again later.'
  },

  // Success messages
  'success.saved': {
    es: 'Cambios guardados correctamente',
    en: 'Changes saved successfully'
  },
  'success.sent': {
    es: 'Mensaje enviado correctamente',
    en: 'Message sent successfully'
  },
  'success.updated': {
    es: 'Actualizado correctamente',
    en: 'Updated successfully'
  },

  // Common actions
  'action.save': {
    es: 'Guardar',
    en: 'Save'
  },
  'action.cancel': {
    es: 'Cancelar',
    en: 'Cancel'
  },
  'action.edit': {
    es: 'Editar',
    en: 'Edit'
  },
  'action.delete': {
    es: 'Eliminar',
    en: 'Delete'
  },
  'action.confirm': {
    es: 'Confirmar',
    en: 'Confirm'
  },
  'action.back': {
    es: 'Volver',
    en: 'Back'
  },
  'action.next': {
    es: 'Siguiente',
    en: 'Next'
  },
  'action.close': {
    es: 'Cerrar',
    en: 'Close'
  },

  // Loading states
  'loading.general': {
    es: 'Cargando...',
    en: 'Loading...'
  },
  'loading.saving': {
    es: 'Guardando...',
    en: 'Saving...'
  },
  'loading.processing': {
    es: 'Procesando...',
    en: 'Processing...'
  },
  'loading.sending': {
    es: 'Enviando...',
    en: 'Sending...'
  },

  // Form labels
  'form.email': {
    es: 'Correo electrónico',
    en: 'Email'
  },
  'form.password': {
    es: 'Contraseña',
    en: 'Password'
  },
  'form.name': {
    es: 'Nombre',
    en: 'Name'
  },
  'form.message': {
    es: 'Mensaje',
    en: 'Message'
  },
  'form.subject': {
    es: 'Asunto',
    en: 'Subject'
  },

  // Accessibility
  'aria.menu.open': {
    es: 'Abrir menú',
    en: 'Open menu'
  },
  'aria.menu.close': {
    es: 'Cerrar menú',
    en: 'Close menu'
  },
  'aria.dialog.close': {
    es: 'Cerrar diálogo',
    en: 'Close dialog'
  },
  'aria.expandMore': {
    es: 'Expandir más',
    en: 'Expand more'
  },
  'aria.expandLess': {
    es: 'Expandir menos',
    en: 'Expand less'
  },
  'aria.loading': {
    es: 'Cargando contenido',
    en: 'Loading content'
  },

  // Waitlist translations
  'waitlist.title': {
    es: 'Únete a la comunidad',
    en: 'Join the community'
  },
  'waitlist.description': {
    es: 'Sé de los primeros en acceder a las próximas versiones y enterarte de todo lo que pasa en Etedata. Te notificaremos cuando esté disponible y recibirás acceso prioritario.',
    en: 'Be among the first to access upcoming versions and learn about everything happening at Etedata. We\'ll notify you when it\'s available and you\'ll receive priority access.'
  },
  'waitlist.email.placeholder': {
    es: 'Introduce tu email',
    en: 'Enter your email'
  },
  'waitlist.button.join': {
    es: 'Unirme',
    en: 'Join'
  },
  'waitlist.button.processing': {
    es: 'Procesando...',
    en: 'Processing...'
  },
  'waitlist.button.registered': {
    es: '¡Registrado!',
    en: 'Registered!'
  },
  'waitlist.feature.1.title': {
    es: 'Acceso anticipado',
    en: 'Early access'
  },
  'waitlist.feature.1.description': {
    es: 'Sé de los primeros en probar nuestra plataforma y recibe beneficios exclusivos.',
    en: 'Be among the first to try our platform and receive exclusive benefits.'
  },
  'waitlist.feature.2.title': {
    es: 'Beneficios especiales',
    en: 'Special benefits'
  },
  'waitlist.feature.2.description': {
    es: 'Descuentos exclusivos y características premium gratuitas durante el primer mes.',
    en: 'Exclusive discounts and free premium features during the first month.'
  },
  'waitlist.error.email': {
    es: 'Por favor, introduce un email válido',
    en: 'Please enter a valid email'
  },
  'waitlist.error.generic': {
    es: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.',
    en: 'An error has occurred. Please try again later.'
  },
  'waitlist.success': {
    es: '¡Gracias por unirte! Te mantendremos informado.',
    en: 'Thanks for joining! We\'ll keep you updated.'
  },
  'waitlist.email.label': {
    es: 'Dirección de email',
    en: 'Email address'
  },
};

// Función para obtener el idioma actual
export function getLanguage(): Language {
  try {
    if (typeof window === 'undefined') {
      return 'es'; // Default for SSR
    }
    
    if (typeof localStorage !== 'undefined' && localStorage.getItem('language')) {
      return localStorage.getItem('language') as Language;
    }
    
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es' || browserLang === 'en') {
        return browserLang;
      }
    }
    
    return 'es';
  } catch (e) {
    return 'es'; // Fallback
  }
}

// Función para establecer el idioma
export function setLanguage(lang: Language) {
  try {
    if (typeof window === 'undefined') return; // Skip during SSR
    
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    
    document.documentElement.lang = lang;
    
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
  } catch (e) {
    console.error('Error setting language:', e);
  }
}

// Función para obtener una traducción
export function getTranslation(key: string, lang?: Language): string {
  try {
    const currentLang = lang || getLanguage();
    
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return translations[key][currentLang];
  } catch (e) {
    console.error(`Error getting translation for key ${key}:`, e);
    return key;
  }
}

// Función para actualizar todas las traducciones en la página
export function updateTranslations() {
  try {
    if (typeof window === 'undefined') return; // Skip during SSR
    
    const elements = document.querySelectorAll('[data-i18n]');
    const currentLang = getLanguage();
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        element.textContent = getTranslation(key, currentLang);
      }
    });
  } catch (e) {
    console.error('Error updating translations:', e);
  }
} 