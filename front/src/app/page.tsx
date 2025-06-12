import React from 'react';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import People from '@/components/home/People';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <People />
      <Footer />
    </div>
  );
};

export default Home;