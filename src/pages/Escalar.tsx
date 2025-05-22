
import React from 'react';
import PageLayout from '@/components/PageLayout';
import TeamBuildingGuide from '@/components/TeamBuildingGuide';
import SectionScale from '@/components/SectionScale';

const Escalar: React.FC = () => {
  return (
    <PageLayout 
      title="Escalando sua Agência" 
      subtitle="Estratégias e ferramentas para crescer de forma sustentável e atingir novos patamares"
    >
      {/* Original SectionScale component */}
      <SectionScale />
      
      {/* New TeamBuildingGuide component */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <TeamBuildingGuide />
        </div>
      </section>
    </PageLayout>
  );
};

export default Escalar;
