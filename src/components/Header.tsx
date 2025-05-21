
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-mayk-purple">
          Mayk AI <span className="text-mayk-teal">Guide</span>
        </Link>
        
        <Navigation />
        
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link to="/fundamentos">
              Começar Agora
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
