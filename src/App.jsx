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

const App = () => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full bg-white">
        {/* 2. Hero Section with Registration Form */}
        <HeroSection />

        {/* 3. Overview / Article Section */}
        <OverviewSection />

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
    </div>
  );
};

export default App;
