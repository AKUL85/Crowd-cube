import React from 'react';



import HowItWorks from '../Component/HowItWorks';
import HeroSlider from '../Component/HeroSlider';
import StatsSection from '../Component/StatsSection';
import CampaignShowCase from '../Component/CampaignShowCase';


const Home = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <HeroSlider></HeroSlider>
    <StatsSection></StatsSection>
    <CampaignShowCase></CampaignShowCase>
    <HowItWorks></HowItWorks>
  </div>
);

export default Home;
