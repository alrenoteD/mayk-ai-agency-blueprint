
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionSetup from '@/components/SectionSetup';
import SectionIntegrations from '@/components/SectionIntegrations';
import SectionScale from '@/components/SectionScale';
import SectionMarketing from '@/components/SectionMarketing';
import SectionInfrastructure from '@/components/SectionInfrastructure';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SectionSetup />
        <SectionIntegrations />
        <SectionScale />
        <SectionMarketing />
        <SectionInfrastructure />
        <SubscribeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
