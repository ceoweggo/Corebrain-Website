type Theme = 'light' | 'dark';

// Función para obtener el tema actual
export function getTheme(): Theme {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }
  
  // Si el usuario tiene preferencia de sistema por el tema oscuro
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

// Función para establecer el tema
export function setTheme(theme: Theme) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
  
  // Aplicar clases al documento
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Función para alternar el tema
export function toggleTheme() {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
} 