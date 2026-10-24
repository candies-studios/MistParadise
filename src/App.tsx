import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { VisitTypes } from '@/components/VisitTypes';
import { Rooms } from '@/components/Rooms';
import { Experiences } from '@/components/Experiences';
import { Dining } from '@/components/Dining';
import { Events } from '@/components/Events';
import { Gallery } from '@/components/Gallery';
import { Location } from '@/components/Location';
import { Enquiry } from '@/components/Enquiry';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <VisitTypes />
        <Rooms />
        <Experiences />
        <Dining />
        <Events />
        <Gallery />
        <Location />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;
