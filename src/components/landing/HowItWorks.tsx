import { Link2, Cpu, Sparkles } from 'lucide-react';
import GlassCard from '../shared/GlassCard';

const steps = [
  {
    icon: Link2,
    title: 'Paste PR URL',
    description: 'Simply paste any public GitHub PR URL into the analyzer'
  },
  {
    icon: Cpu,
    title: 'We Analyze',
    description: 'Our AI processes the PR data, files, and changes instantly'
  },
  {
    icon: Sparkles,
    title: 'Get Insights',
    description: 'Receive a comprehensive summary with key insights and recommendations'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Three simple steps to PR clarity
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <GlassCard key={index} className="text-center relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 relative">
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
