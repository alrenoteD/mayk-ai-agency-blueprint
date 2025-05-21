
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscribeForm from '@/components/SubscribeForm';

interface PageLayoutProps {
  children: React.ReactNode;
  showSubscribe?: boolean;
  title: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showSubscribe = true,
  title,
  subtitle
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-mayk-purple/10 to-mayk-teal/10 py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h1>
            {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        </div>
        {children}
        {showSubscribe && <SubscribeForm />}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
