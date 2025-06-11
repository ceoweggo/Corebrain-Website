export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Define our translations
export const translations: Translations = {
  es: {
    // Common
    "app.name": "Chatify",
    "app.tagline": "Inteligencia conversacional para tu negocio",
    
    // Navigation
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.documentation": "Documentación",
    "nav.blog": "Blog",
    "nav.login": "Iniciar sesión",
    "nav.signup": "Registro gratis",
    "nav.how_it_works": "Cómo funciona",
    
    // CTA
    "cta.start_free_trial": "Comenzar prueba gratuita",
    "cta.view_docs": "Ver documentación",
    "cta.no_credit_card": "No se requiere tarjeta de crédito. 14 días de prueba gratuita completa.",
    
    // Footer
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.company": "Empresa",
    "footer.legal": "Legal",
    "footer.subscribe": "Suscríbete a nuestro newsletter",
    "footer.all_rights": "Todos los derechos reservados.",
    
    // Auth
    "auth.login": "Iniciar sesión",
    "auth.signup": "Crear cuenta",
    "auth.email": "Email",
    "auth.password": "Contraseña",
    "auth.name": "Nombre completo",
    "auth.forgot_password": "¿Olvidaste tu contraseña?",
    "auth.already_account": "¿Ya tienes una cuenta?",
    "auth.no_account": "¿No tienes una cuenta?",
    "auth.accept_terms": "Acepto los términos y condiciones",

    // How it works page
    "howitworks.title": "Cómo funciona Chatify",
    "howitworks.subtitle": "Descubre la tecnología detrás de nuestra plataforma de inteligencia conversacional",
    "howitworks.view_docs": "Ver documentación técnica",
    
    // Onboarding page
    "onboarding.welcome": "Bienvenido a Chatify",
    "onboarding.tagline": "La plataforma inteligente que transforma la comunicación con tus clientes",
    "onboarding.start_trial": "Iniciar prueba gratuita",
    "onboarding.view_demo": "Ver demo",
    "onboarding.how_it_works": "¿Cómo funciona Chatify?",
    "onboarding.how_it_works_desc": "Nuestra tecnología CoreBrain utiliza IA avanzada para ofrecer experiencias conversacionales inteligentes",
    
    // Features
    "onboarding.features.communication_title": "Comunicación Natural",
    "onboarding.features.communication_desc": "Conversaciones fluidas y naturales gracias a nuestro motor de procesamiento de lenguaje natural.",
    "onboarding.features.analytics_title": "Análisis Inteligente",
    "onboarding.features.analytics_desc": "Extrae insights valiosos de las conversaciones para mejorar continuamente la experiencia.",
    "onboarding.features.automation_title": "Automatización",
    "onboarding.features.automation_desc": "Automatiza procesos repetitivos y escala tu atención al cliente sin perder calidad.",
    
    // Pricing
    "pricing.title": "Nuestros Planes",
    "pricing.subtitle": "Elige el plan que mejor se adapte a las necesidades de tu negocio",
    "pricing.basic_plan": "Básico",
    "pricing.pro_plan": "Profesional",
    "pricing.enterprise_plan": "Empresarial",
    "pricing.basic_desc": "Ideal para startups y pequeñas empresas",
    "pricing.pro_desc": "Para negocios en crecimiento",
    "pricing.enterprise_desc": "Solución completa para grandes empresas",
    "pricing.per_month": "/mes",
    "pricing.select_plan": "Seleccionar plan",
    "pricing.popular": "Popular",
    
    // Pricing Features
    "pricing.features.basic.feature1": "Asistente virtual básico",
    "pricing.features.basic.feature2": "Hasta 1,000 mensajes/mes",
    "pricing.features.basic.feature3": "Integración con un canal",
    "pricing.features.basic.feature4": "Soporte por email",
    
    "pricing.features.pro.feature1": "Asistente virtual avanzado",
    "pricing.features.pro.feature2": "Hasta 5,000 mensajes/mes",
    "pricing.features.pro.feature3": "Integración multicanal",
    "pricing.features.pro.feature4": "Análisis de conversaciones",
    "pricing.features.pro.feature5": "Soporte prioritario",
    
    "pricing.features.enterprise.feature1": "Asistente virtual personalizado",
    "pricing.features.enterprise.feature2": "Mensajes ilimitados",
    "pricing.features.enterprise.feature3": "Integraciones API avanzadas",
    "pricing.features.enterprise.feature4": "Análisis detallado y reportes",
    "pricing.features.enterprise.feature5": "Soporte 24/7",
    "pricing.features.enterprise.feature6": "Implementación guiada",
    
    // Demo
    "onboarding.demo_title": "Prueba Chatify en acción",
    "onboarding.demo_desc": "Interactúa con nuestro asistente virtual y descubre el poder de CoreBrain",
    
    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.tabs.general": "General",
    "faq.tabs.technical": "Técnico",
    "faq.tabs.billing": "Facturación",
    
    "faq.general.q1": "¿Qué es Chatify?",
    "faq.general.a1": "Chatify es una plataforma de asistentes virtuales impulsada por IA que ayuda a las empresas a mejorar la comunicación con sus clientes mediante conversaciones naturales y personalizadas.",
    "faq.general.q2": "¿Cómo puedo empezar?",
    "faq.general.a2": "Puedes comenzar con una prueba gratuita de 14 días. Solo necesitas registrarte, configurar tu asistente y empezar a utilizarlo en tus canales de comunicación.",
    "faq.general.q3": "¿Necesito conocimientos técnicos?",
    "faq.general.a3": "No, nuestra plataforma está diseñada para ser fácil de usar y no requiere conocimientos técnicos. Además, ofrecemos soporte para ayudarte con la configuración inicial.",
    
    "faq.technical.q1": "¿Cómo se integra con mi sitio web?",
    "faq.technical.a1": "La integración es simple: solo tienes que añadir un fragmento de código a tu sitio web o utilizar nuestros plugins para plataformas populares como WordPress, Shopify o Wix.",
    "faq.technical.q2": "¿Qué canales soporta?",
    "faq.technical.a2": "Chatify se integra con sitios web, aplicaciones móviles, WhatsApp, Facebook Messenger, Instagram, Telegram y más, dependiendo del plan elegido.",
    "faq.technical.q3": "¿Puedo personalizar las respuestas?",
    "faq.technical.a3": "Sí, puedes entrenar a tu asistente con información específica de tu negocio, personalizar el tono y configurar flujos de conversación automáticos.",
    
    "faq.billing.q1": "¿Cómo funciona la facturación?",
    "faq.billing.a1": "La facturación es mensual o anual, según tu preferencia. Los planes anuales incluyen un descuento del 20% sobre el precio mensual.",
    "faq.billing.q2": "¿Hay algún costo adicional?",
    "faq.billing.a2": "No hay costos ocultos. Si superas el límite de mensajes de tu plan, se te notificará antes de aplicar cualquier cargo adicional.",
    "faq.billing.q3": "¿Puedo cambiar de plan?",
    "faq.billing.a3": "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán en el siguiente ciclo de facturación.",
    
    // CTA Section
    "cta.title": "¿Listo para transformar tu comunicación?",
    "cta.description": "Únete a miles de empresas que ya han mejorado su atención al cliente con Chatify",
    "cta.button": "Comenzar ahora"
  },
  
  en: {
    // Common
    "app.name": "Chatify",
    "app.tagline": "Conversational intelligence for your business",
    
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.documentation": "Documentation",
    "nav.blog": "Blog",
    "nav.login": "Log in",
    "nav.signup": "Sign up free",
    "nav.how_it_works": "How it works",
    
    // CTA
    "cta.start_free_trial": "Start free trial",
    "cta.view_docs": "View documentation",
    "cta.no_credit_card": "No credit card required. 14 days full free trial.",
    
    // Footer
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.subscribe": "Subscribe to our newsletter",
    "footer.all_rights": "All rights reserved.",
    
    // Auth
    "auth.login": "Log in",
    "auth.signup": "Sign up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Full name",
    "auth.forgot_password": "Forgot password?",
    "auth.already_account": "Already have an account?",
    "auth.no_account": "Don't have an account?",
    "auth.accept_terms": "I accept the terms and conditions",

    // How it works page
    "howitworks.title": "How Chatify Works",
    "howitworks.subtitle": "Discover the technology behind our conversational intelligence platform",
    "howitworks.view_docs": "View technical documentation",
    
    // Onboarding page
    "onboarding.welcome": "Welcome to Chatify",
    "onboarding.tagline": "The intelligent platform that transforms customer communication",
    "onboarding.start_trial": "Start free trial",
    "onboarding.view_demo": "View demo",
    "onboarding.how_it_works": "How does Chatify work?",
    "onboarding.how_it_works_desc": "Our CoreBrain technology uses advanced AI to deliver intelligent conversational experiences",
    
    // Features
    "onboarding.features.communication_title": "Natural Communication",
    "onboarding.features.communication_desc": "Fluid and natural conversations thanks to our natural language processing engine.",
    "onboarding.features.analytics_title": "Intelligent Analysis",
    "onboarding.features.analytics_desc": "Extract valuable insights from conversations to continuously improve the experience.",
    "onboarding.features.automation_title": "Automation",
    "onboarding.features.automation_desc": "Automate repetitive processes and scale your customer service without losing quality.",
    
    // Pricing
    "pricing.title": "Our Plans",
    "pricing.subtitle": "Choose the plan that best suits your business needs",
    "pricing.basic_plan": "Basic",
    "pricing.pro_plan": "Professional",
    "pricing.enterprise_plan": "Enterprise",
    "pricing.basic_desc": "Ideal for startups and small businesses",
    "pricing.pro_desc": "For growing businesses",
    "pricing.enterprise_desc": "Complete solution for large companies",
    "pricing.per_month": "/month",
    "pricing.select_plan": "Select plan",
    "pricing.popular": "Popular",
    
    // Pricing Features
    "pricing.features.basic.feature1": "Basic virtual assistant",
    "pricing.features.basic.feature2": "Up to 1,000 messages/month",
    "pricing.features.basic.feature3": "Integration with one channel",
    "pricing.features.basic.feature4": "Email support",
    
    "pricing.features.pro.feature1": "Advanced virtual assistant",
    "pricing.features.pro.feature2": "Up to 5,000 messages/month",
    "pricing.features.pro.feature3": "Multi-channel integration",
    "pricing.features.pro.feature4": "Conversation analysis",
    "pricing.features.pro.feature5": "Priority support",
    
    "pricing.features.enterprise.feature1": "Customized virtual assistant",
    "pricing.features.enterprise.feature2": "Unlimited messages",
    "pricing.features.enterprise.feature3": "Advanced API integrations",
    "pricing.features.enterprise.feature4": "Detailed analysis and reports",
    "pricing.features.enterprise.feature5": "24/7 support",
    "pricing.features.enterprise.feature6": "Guided implementation",
    
    // Demo
    "onboarding.demo_title": "Try Chatify in action",
    "onboarding.demo_desc": "Interact with our virtual assistant and discover the power of CoreBrain",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.tabs.general": "General",
    "faq.tabs.technical": "Technical",
    "faq.tabs.billing": "Billing",
    
    "faq.general.q1": "What is Chatify?",
    "faq.general.a1": "Chatify is an AI-powered virtual assistant platform that helps businesses improve communication with their customers through natural and personalized conversations.",
    "faq.general.q2": "How can I get started?",
    "faq.general.a2": "You can start with a 14-day free trial. You just need to sign up, configure your assistant, and start using it on your communication channels.",
    "faq.general.q3": "Do I need technical knowledge?",
    "faq.general.a3": "No, our platform is designed to be easy to use and doesn't require technical knowledge. We also offer support to help you with the initial setup.",
    
    "faq.technical.q1": "How does it integrate with my website?",
    "faq.technical.a1": "Integration is simple: you just need to add a code snippet to your website or use our plugins for popular platforms like WordPress, Shopify, or Wix.",
    "faq.technical.q2": "What channels does it support?",
    "faq.technical.a2": "Chatify integrates with websites, mobile apps, WhatsApp, Facebook Messenger, Instagram, Telegram, and more, depending on the plan chosen.",
    "faq.technical.q3": "Can I customize the responses?",
    "faq.technical.a3": "Yes, you can train your assistant with specific information about your business, customize the tone, and configure automatic conversation flows.",
    
    "faq.billing.q1": "How does billing work?",
    "faq.billing.a1": "Billing is monthly or annual, according to your preference. Annual plans include a 20% discount over the monthly price.",
    "faq.billing.q2": "Are there any additional costs?",
    "faq.billing.a2": "There are no hidden costs. If you exceed your plan's message limit, you'll be notified before any additional charges are applied.",
    "faq.billing.q3": "Can I change my plan?",
    "faq.billing.a3": "Yes, you can upgrade or change your plan at any time. Changes will be applied in the next billing cycle.",
    
    // CTA Section
    "cta.title": "Ready to transform your communication?",
    "cta.description": "Join thousands of companies that have already improved their customer service with Chatify",
    "cta.button": "Get started now"
  },
  
  fr: {
    // Common
    "app.name": "Chatify",
    "app.tagline": "Intelligence conversationnelle pour votre entreprise",
    
    // Navigation
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.documentation": "Documentation",
    "nav.blog": "Blog",
    "nav.login": "Connexion",
    "nav.signup": "Inscription gratuite",
    "nav.how_it_works": "Comment ça marche",
    
    // CTA
    "cta.start_free_trial": "Commencer l'essai gratuit",
    "cta.view_docs": "Voir la documentation",
    "cta.no_credit_card": "Aucune carte de crédit requise. 14 jours d'essai gratuit complet.",
    
    // Footer
    "footer.product": "Produit",
    "footer.resources": "Ressources",
    "footer.company": "Entreprise",
    "footer.legal": "Mentions légales",
    "footer.subscribe": "Abonnez-vous à notre newsletter",
    "footer.all_rights": "Tous droits réservés.",
    
    // Auth
    "auth.login": "Connexion",
    "auth.signup": "Créer un compte",
    "auth.email": "Email",
    "auth.password": "Mot de passe",
    "auth.name": "Nom complet",
    "auth.forgot_password": "Mot de passe oublié ?",
    "auth.already_account": "Vous avez déjà un compte ?",
    "auth.no_account": "Vous n'avez pas de compte ?",
    "auth.accept_terms": "J'accepte les conditions générales",

    // How it works page
    "howitworks.title": "Comment fonctionne Chatify",
    "howitworks.subtitle": "Découvrez la technologie derrière notre plateforme d'intelligence conversationnelle",
    "howitworks.view_docs": "Voir la documentation technique",
    
    // Onboarding page
    "onboarding.welcome": "Bienvenue sur Chatify",
    "onboarding.tagline": "La plateforme intelligente qui transforme la communication avec vos clients",
    "onboarding.start_trial": "Commencer l'essai gratuit",
    "onboarding.view_demo": "Voir la démo",
    "onboarding.how_it_works": "Comment fonctionne Chatify ?",
    "onboarding.how_it_works_desc": "Notre technologie CoreBrain utilise l'IA avancée pour offrir des expériences conversationnelles intelligentes",
    
    // Features
    "onboarding.features.communication_title": "Communication Naturelle",
    "onboarding.features.communication_desc": "Conversations fluides et naturelles grâce à notre moteur de traitement du langage naturel.",
    "onboarding.features.analytics_title": "Analyse Intelligente",
    "onboarding.features.analytics_desc": "Extrayez des informations précieuses des conversations pour améliorer continuellement l'expérience.",
    "onboarding.features.automation_title": "Automatisation",
    "onboarding.features.automation_desc": "Automatisez les processus répétitifs et développez votre service client sans perdre en qualité.",
    
    // Pricing
    "pricing.title": "Nos Forfaits",
    "pricing.subtitle": "Choisissez le forfait qui convient le mieux aux besoins de votre entreprise",
    "pricing.basic_plan": "Basique",
    "pricing.pro_plan": "Professionnel",
    "pricing.enterprise_plan": "Entreprise",
    "pricing.basic_desc": "Idéal pour les startups et petites entreprises",
    "pricing.pro_desc": "Pour les entreprises en croissance",
    "pricing.enterprise_desc": "Solution complète pour les grandes entreprises",
    "pricing.per_month": "/mois",
    "pricing.select_plan": "Sélectionner ce forfait",
    "pricing.popular": "Populaire",
    
    // Pricing Features
    "pricing.features.basic.feature1": "Assistant virtuel basique",
    "pricing.features.basic.feature2": "Jusqu'à 1 000 messages/mois",
    "pricing.features.basic.feature3": "Intégration avec un canal",
    "pricing.features.basic.feature4": "Support par email",
    
    "pricing.features.pro.feature1": "Assistant virtuel avancé",
    "pricing.features.pro.feature2": "Jusqu'à 5 000 messages/mois",
    "pricing.features.pro.feature3": "Intégration multicanal",
    "pricing.features.pro.feature4": "Analyse des conversations",
    "pricing.features.pro.feature5": "Support prioritaire",
    
    "pricing.features.enterprise.feature1": "Assistant virtuel personnalisé",
    "pricing.features.enterprise.feature2": "Messages illimités",
    "pricing.features.enterprise.feature3": "Intégrations API avancées",
    "pricing.features.enterprise.feature4": "Analyse détaillée et rapports",
    "pricing.features.enterprise.feature5": "24/7-support",
    "pricing.features.enterprise.feature6": "Implémentation guidée",
    
    // Demo
    "onboarding.demo_title": "Essayez Chatify en action",
    "onboarding.demo_desc": "Interagissez avec notre assistant virtuel et découvrez la puissance de CoreBrain",
    
    // FAQ
    "faq.title": "Questions Fréquentes",
    "faq.tabs.general": "Général",
    "faq.tabs.technical": "Technique",
    "faq.tabs.billing": "Facturation",
    
    "faq.general.q1": "Qu'est-ce que Chatify ?",
    "faq.general.a1": "Chatify est une plateforme d'assistants virtuels alimentée par l'IA qui aide les entreprises à améliorer la communication avec leurs clients grâce à des conversations naturelles et personnalisées.",
    "faq.general.q2": "Comment puis-je commencer ?",
    "faq.general.a2": "Vous pouvez commencer avec un essai gratuit de 14 jours. Il vous suffit de vous inscrire, de configurer votre assistant et de commencer à l'utiliser sur vos canaux de communication.",
    "faq.general.q3": "Ai-je besoin de connaissances techniques ?",
    "faq.general.a3": "Non, notre plateforme est conçue pour être facile à utiliser et ne nécessite pas de connaissances techniques. Nous offrons également un support pour vous aider avec la configuration initiale.",
    
    "faq.technical.q1": "Comment s'intègre-t-il à mon site web ?",
    "faq.technical.a1": "L'intégration est simple : il vous suffit d'ajouter un fragment de code à votre site web ou d'utiliser nos plugins pour les plateformes populaires comme WordPress, Shopify ou Wix.",
    "faq.technical.q2": "Quels canaux supporte-t-il ?",
    "faq.technical.a2": "Chatify s'intègre aux sites web, applications mobiles, WhatsApp, Facebook Messenger, Instagram, Telegram, et plus encore, selon le forfait choisi.",
    "faq.technical.q3": "Puis-je personnaliser les réponses ?",
    "faq.technical.a3": "Oui, vous pouvez entraîner votre assistant avec des informations spécifiques à votre entreprise, personnaliser le ton et configurer des flux de conversation automatiques.",
    
    "faq.billing.q1": "Comment fonctionne la facturation ?",
    "faq.billing.a1": "La facturation est mensuelle ou annuelle, selon votre préférence. Les forfaits annuels incluent une remise de 20 % sur le prix mensuel.",
    "faq.billing.q2": "Y a-t-il des coûts supplémentaires ?",
    "faq.billing.a2": "Il n'y a pas de coûts cachés. Si vous dépassez la limite de messages de votre forfait, vous serez notifié avant que des frais supplémentaires ne soient appliqués.",
    "faq.billing.q3": "Puis-je changer de forfait ?",
    "faq.billing.a3": "Oui, vous pouvez mettre à niveau ou changer votre forfait à tout moment. Les modifications seront appliquées au prochain cycle de facturation.",
    
    // CTA Section
    "cta.title": "Prêt à transformer votre communication ?",
    "cta.description": "Rejoignez des milliers d'entreprises qui ont déjà amélioré leur service client avec Chatify",
    "cta.button": "Commencer maintenant"
  },
  
  de: {
    // Common
    "app.name": "Chatify",
    "app.tagline": "Konversationelle Intelligenz für Ihr Unternehmen",
    
    // Navigation
    "nav.home": "Startseite",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.documentation": "Dokumentation",
    "nav.blog": "Blog",
    "nav.login": "Anmelden",
    "nav.signup": "Kostenlos registrieren",
    "nav.how_it_works": "Wie es funktioniert",
    
    // CTA
    "cta.start_free_trial": "Kostenlose Testversion starten",
    "cta.view_docs": "Dokumentation ansehen",
    "cta.no_credit_card": "Keine Kreditkarte erforderlich. 14 Tage vollständige kostenlose Testversion.",
    
    // Footer
    "footer.product": "Produkt",
    "footer.resources": "Ressourcen",
    "footer.company": "Unternehmen",
    "footer.legal": "Rechtliches",
    "footer.subscribe": "Abonnieren Sie unseren Newsletter",
    "footer.all_rights": "Alle Rechte vorbehalten.",
    
    // Auth
    "auth.login": "Anmelden",
    "auth.signup": "Konto erstellen",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.name": "Vollständiger Name",
    "auth.forgot_password": "Passwort vergessen?",
    "auth.already_account": "Haben Sie bereits ein Konto?",
    "auth.no_account": "Sie haben noch kein Konto?",
    "auth.accept_terms": "Ich akzeptiere die Nutzungsbedingungen",

    // How it works page
    "howitworks.title": "Wie Chatify funktioniert",
    "howitworks.subtitle": "Entdecken Sie die Technologie hinter unserer konversationellen Intelligenzplattform",
    "howitworks.view_docs": "Technische Dokumentation ansehen",
    
    // Onboarding page
    "onboarding.welcome": "Willkommen bei Chatify",
    "onboarding.tagline": "Die intelligente Plattform, die die Kommunikation mit Ihren Kunden transformiert",
    "onboarding.start_trial": "Kostenlose Testversion starten",
    "onboarding.view_demo": "Demo ansehen",
    "onboarding.how_it_works": "Wie funktioniert Chatify?",
    "onboarding.how_it_works_desc": "Unsere CoreBrain-Technologie nutzt fortschrittliche KI, um intelligente Konversationserlebnisse zu liefern",
    
    // Features
    "onboarding.features.communication_title": "Natürliche Kommunikation",
    "onboarding.features.communication_desc": "Fließende und natürliche Gespräche dank unserer Verarbeitungsmaschine für natürliche Sprache.",
    "onboarding.features.analytics_title": "Intelligente Analyse",
    "onboarding.features.analytics_desc": "Extrahieren Sie wertvolle Erkenntnisse aus Gesprächen, um das Erlebnis kontinuierlich zu verbessern.",
    "onboarding.features.automation_title": "Automatisierung",
    "onboarding.features.automation_desc": "Automatisieren Sie wiederkehrende Prozesse und skalieren Sie Ihren Kundenservice ohne Qualitätsverlust.",
    
    // Pricing
    "pricing.title": "Unsere Tarife",
    "pricing.subtitle": "Wählen Sie den Tarif, der am besten zu den Anforderungen Ihres Unternehmens passt",
    "pricing.basic_plan": "Basic",
    "pricing.pro_plan": "Professional",
    "pricing.enterprise_plan": "Enterprise",
    "pricing.basic_desc": "Ideal für Startups und kleine Unternehmen",
    "pricing.pro_desc": "Für wachsende Unternehmen",
    "pricing.enterprise_desc": "Komplettlösung für große Unternehmen",
    "pricing.per_month": "/Monat",
    "pricing.select_plan": "Tarif auswählen",
    "pricing.popular": "Beliebt",
    
    // Pricing Features
    "pricing.features.basic.feature1": "Einfacher virtueller Assistent",
    "pricing.features.basic.feature2": "Bis zu 1.000 Nachrichten/Monat",
    "pricing.features.basic.feature3": "Integration mit einem Kanal",
    "pricing.features.basic.feature4": "E-Mail-Support",
    
    "pricing.features.pro.feature1": "Erweiterter virtueller Assistent",
    "pricing.features.pro.feature2": "Bis zu 5.000 Nachrichten/Monat",
    "pricing.features.pro.feature3": "Multi-Kanal-Integration",
    "pricing.features.pro.feature4": "Gesprächsanalyse",
    "pricing.features.pro.feature5": "Prioritäts-Support",
    
    "pricing.features.enterprise.feature1": "Angepasster virtueller Assistent",
    "pricing.features.enterprise.feature2": "Unbegrenzte Nachrichten",
    "pricing.features.enterprise.feature3": "Erweiterte API-Integrationen",
    "pricing.features.enterprise.feature4": "Detaillierte Analyse und Berichte",
    "pricing.features.enterprise.feature5": "24/7-Support",
    "pricing.features.enterprise.feature6": "Geführte Implementierung",
    
    // Demo
    "onboarding.demo_title": "Testen Sie Chatify in Aktion",
    "onboarding.demo_desc": "Interagieren Sie mit unserem virtuellen Assistenten und entdecken Sie die Leistungsfähigkeit von CoreBrain",
    
    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.tabs.general": "Allgemein",
    "faq.tabs.technical": "Technisch",
    "faq.tabs.billing": "Abrechnung",
    
    "faq.general.q1": "Was ist Chatify?",
    "faq.general.a1": "Chatify ist eine KI-gestützte Plattform für virtuelle Assistenten, die Unternehmen dabei hilft, die Kommunikation mit ihren Kunden durch natürliche und personalisierte Gespräche zu verbessern.",
    "faq.general.q2": "Wie kann ich beginnen?",
    "faq.general.a2": "Sie können mit einer 14-tägigen kostenlosen Testversion beginnen. Sie müssen sich nur registrieren, Ihren Assistenten konfigurieren und ihn auf Ihren Kommunikationskanälen einsetzen.",
    "faq.general.q3": "Benötige ich technisches Wissen?",
    "faq.general.a3": "Nein, unsere Plattform ist benutzerfreundlich gestaltet und erfordert keine technischen Kenntnisse. Wir bieten auch Support, um Ihnen bei der ersten Einrichtung zu helfen.",
    
    "faq.technical.q1": "Wie integriert es sich in meine Website?",
    "faq.technical.a1": "Die Integration ist einfach: Sie müssen nur einen Code-Schnipsel zu Ihrer Website hinzufügen oder unsere Plugins für beliebte Plattformen wie WordPress, Shopify oder Wix verwenden.",
    "faq.technical.q2": "Welche Kanäle werden unterstützt?",
    "faq.technical.a2": "Chatify integriert sich mit Websites, mobilen Apps, WhatsApp, Facebook Messenger, Instagram, Telegram und mehr, je nach ausgewähltem Tarif.",
    "faq.technical.q3": "Kann ich die Antworten anpassen?",
    "faq.technical.a3": "Ja, Sie können Ihren Assistenten mit spezifischen Informationen über Ihr Unternehmen trainieren, den Ton anpassen und automatische Gesprächsabläufe konfigurieren.",
    
    "faq.billing.q1": "Wie funktioniert die Abrechnung?",
    "faq.billing.a1": "Die Abrechnung erfolgt monatlich oder jährlich, je nach Ihren Präferenzen. Jahrespläne beinhalten einen Rabatt von 20% gegenüber dem monatlichen Preis.",
    "faq.billing.q2": "Gibt es zusätzliche Kosten?",
    "faq.billing.a2": "Es gibt keine versteckten Kosten. Wenn Sie das Nachrichtenlimit Ihres Tarifs überschreiten, werden Sie benachrichtigt, bevor zusätzliche Gebühren anfallen.",
    "faq.billing.q3": "Kann ich meinen Tarif ändern?",
    "faq.billing.a3": "Ja, Sie können Ihren Tarif jederzeit upgraden oder ändern. Änderungen werden im nächsten Abrechnungszeitraum wirksam.",
    
    // CTA Section
    "cta.title": "Bereit, Ihre Kommunikation zu transformieren?",
    "cta.description": "Schließen Sie sich Tausenden von Unternehmen an, die ihren Kundenservice bereits mit Chatify verbessert haben",
    "cta.button": "Jetzt starten"
  }
};
