import { Clock, FileText } from 'lucide-react';
import { PRSummary } from '../../utils/prAnalyzer';
import GlassCard from '../shared/GlassCard';
import CopyButton from '../shared/CopyButton';

interface SummaryCardProps {
  summary: PRSummary;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  const summaryText = `
${summary.title}

${summary.description}

Stats:
- ${summary.stats.filesChanged} files changed
- +${summary.stats.additions} additions, -${summary.stats.deletions} deletions
- ${summary.stats.commits} commits

Estimated review time: ${summary.reviewTime} minutes

Key Points:
${summary.keyPoints.map(point => `- ${point}`).join('\n')}
  `.trim();

  return (
    <GlassCard>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">AI Summary</h2>
          <p className="text-gray-400">Generated analysis of this pull request</p>
        </div>
        <CopyButton text={summaryText} />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
          <p className="text-gray-300 leading-relaxed">{summary.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Estimated Review Time</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {summary.reviewTime} min
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-gray-400">Complexity</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {summary.stats.filesChanged < 5
                ? 'Low'
                : summary.stats.filesChanged < 15
                ? 'Medium'
                : 'High'}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">File Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(summary.fileCategories).map(([category, files]) => {
              if (files.length === 0) return null;

              const categoryColors: Record<string, string> = {
                frontend: 'text-blue-400',
                backend: 'text-green-400',
                tests: 'text-purple-400',
                docs: 'text-yellow-400',
                config: 'text-orange-400',
                other: 'text-gray-400'
              };

              return (
                <div
                  key={category}
                  className="bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <div className={`text-lg font-bold ${categoryColors[category]}`}>
                    {files.length}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">{category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
