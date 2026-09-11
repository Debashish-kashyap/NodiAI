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

import { CloudShader } from '@/components/ui/cloud-shader';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Ambient CloudShader across the entire homepage */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <CloudShader
          className="w-full h-full"
          speed={0.5}
          count={6}
          cloudColor="#ffffff"
          skyTopColor="#56789c"
          skyBottomColor="#bba7ca"
        />
        {/* Soft atmospheric gradient to guarantee perfect contrast and subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-white/10 pointer-events-none" />
      </div>

      <Navbar />
      <main className="flex-1 relative z-10">
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
