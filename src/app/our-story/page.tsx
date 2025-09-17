
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StoryHero from '@/components/sections/our-story/story-hero';
import OurMission from '@/components/sections/our-story/our-mission';
import FounderJourney from '@/components/sections/our-story/founder-journey';
import CreatorsSpotlight from '@/components/sections/our-story/creators-spotlight';
import OurPhilosophy from '@/components/sections/our-story/our-philosophy';
import JoinOurWorld from '@/components/sections/our-story/join-our-world';

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <StoryHero />
        <OurMission />
        <FounderJourney />
        <CreatorsSpotlight />
        <OurPhilosophy />
        <JoinOurWorld />
      </main>
      <Footer />
    </div>
  );
}
