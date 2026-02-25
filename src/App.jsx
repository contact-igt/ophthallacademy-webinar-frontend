import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import TopicsSection from './components/TopicsSection';
import WhoShouldAttend from './components/WhoShouldAttend';
import TakeawaySection from './components/TakeawaySection';
import SpeakersSection from './components/SpeakersSection';
import AgendaSection from './components/AgendaSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import StickyFooterCard from './components/StickyFooterCard';
import PsychologySection from './components/PsychologySection';

const App = () => {
  return (
    <div className="min-h-screen text-slate-800 flex flex-col">
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full bg-white">
        {/* 2. Hero Section with Registration Form */}
        <HeroSection />

        {/* 3. Overview / Article Section */}
        <OverviewSection />

        {/* 3.1 Psychology Section */}
        <PsychologySection />

        {/* 4. We Will Cover / Topics Section */}
        <TopicsSection />

        {/* 5. Who Should Attend */}
        <WhoShouldAttend />

        {/* 6. You Will Take Away */}
        <TakeawaySection />

        {/* 7. About The Speakers */}
        <SpeakersSection />

        {/* 8. Agenda */}
        <AgendaSection />

        {/* 9. FAQ */}
        <FaqSection />

        {/* 10. Bottom CTA */}
        <CtaSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Sticky Webinar Ad Card */}
      <StickyFooterCard />
    </div>
  );
};

export default App;
