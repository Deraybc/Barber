import React from 'react';
import Hero from '@/components/home/Hero';
import People from '@/components/home/People';
import Waiting from '@/components/home/Waiting';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <People />
      <Waiting />
    </div>
  );
};

export default Home;