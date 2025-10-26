import { Zap, Bot, Clock, Search } from 'lucide-react';
import GlassCard from '../shared/GlassCard';

const features = [
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Get comprehensive PR summaries in seconds with zero configuration required'
  },
  {
    icon: Bot,
    title: 'Smart Categorization',
    description: 'Automatically categorizes files by type - frontend, backend, tests, and more'
  },
  {
    icon: Clock,
    title: 'Review Time Estimation',
    description: 'Intelligent estimation of review time based on PR size and complexity'
  },
  {
    icon: Search,
    title: 'Key Insights Detection',
    description: 'Identifies important patterns, missing tests, and potential concerns'
  }
];

export default function Features() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to understand PRs quickly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} hover className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
