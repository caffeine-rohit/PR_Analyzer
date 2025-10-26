import { Lightbulb } from 'lucide-react';
import GlassCard from '../shared/GlassCard';

interface KeyInsightsProps {
  insights: string[];
}

export default function KeyInsights({ insights }: KeyInsightsProps) {
  return (
    <GlassCard>
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-400" />
        <h2 className="text-2xl font-bold text-white">Key Insights</h2>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
          >
            <span className="text-2xl flex-shrink-0">{insight.split(' ')[0]}</span>
            <p className="text-gray-300 leading-relaxed pt-1">
              {insight.split(' ').slice(1).join(' ')}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
