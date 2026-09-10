import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DeploymentSection from '@/components/sections/DeploymentSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import TechnologySection from '@/components/sections/TechnologySection';
import PilotProgramSection from '@/components/sections/PilotProgramSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DeploymentSection />
        <UseCasesSection />
        <TechnologySection />
        <PilotProgramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
