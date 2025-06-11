
import React from 'react';
import { ChatInterface } from './ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const DemoSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t('onboarding.demo_title')}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('onboarding.demo_desc')}
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <ChatInterface />
      </div>
    </section>
  );
};

export default DemoSection;