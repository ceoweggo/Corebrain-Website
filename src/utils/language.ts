type Language = 'es' | 'en';

// Función para obtener el idioma actual
export function getLanguage(): Language {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('language')) {
    return localStorage.getItem('language') as Language;
  }
  
  // Si el navegador tiene preferencia de idioma
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'es' || browserLang === 'en') {
      return browserLang;
    }
  }
  
  return 'es'; // Idioma por defecto
}

// Función para establecer el idioma
export function setLanguage(lang: Language) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language', lang);
  }
  
  // Aquí podrías añadir lógica adicional para cambiar el idioma de la aplicación
  document.documentElement.lang = lang;
  
  // Recargar la página para aplicar el cambio de idioma
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
} 