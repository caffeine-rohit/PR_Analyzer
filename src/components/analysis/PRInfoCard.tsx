import { ExternalLink, GitPullRequest, User, GitCommit, FileText } from 'lucide-react';
import { PRData } from '../../utils/githubAPI';
import GlassCard from '../shared/GlassCard';

interface PRInfoCardProps {
  prData: PRData;
}

export default function PRInfoCard({ prData }: PRInfoCardProps) {
  const getStatusColor = () => {
    if (prData.merged) return 'bg-purple-500';
    if (prData.state === 'open') return 'bg-green-500';
    return 'bg-red-500';
  };

  const getStatusText = () => {
    if (prData.merged) return 'Merged';
    if (prData.state === 'open') return prData.draft ? 'Draft' : 'Open';
    return 'Closed';
  };

  return (
    <GlassCard>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-4">
            <GitPullRequest className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {prData.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor()}`}>
                  {getStatusText()}
                </span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <User className="w-4 h-4" />
                  <span>{prData.user.login}</span>
                </div>
              </div>
            </div>
          </div>

          {prData.labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {prData.labels.map((label) => (
                <span
                  key={label.name}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                  style={{
                    backgroundColor: `#${label.color}33`,
                    color: `#${label.color}`
                  }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <a
          href={prData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-white font-medium whitespace-nowrap"
        >
          View on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <GitCommit className="w-4 h-4 text-gray-400" />
            <span className="text-2xl font-bold text-white">{prData.commits}</span>
          </div>
          <span className="text-sm text-gray-400">Commits</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-gray-400" />
            <span className="text-2xl font-bold text-white">{prData.changed_files}</span>
          </div>
          <span className="text-sm text-gray-400">Files</span>
        </div>
        <div className="text-center">
          <div className="mb-1">
            <span className="text-2xl font-bold text-green-400">+{prData.additions}</span>
          </div>
          <span className="text-sm text-gray-400">Additions</span>
        </div>
        <div className="text-center">
          <div className="mb-1">
            <span className="text-2xl font-bold text-red-400">-{prData.deletions}</span>
          </div>
          <span className="text-sm text-gray-400">Deletions</span>
        </div>
      </div>
    </GlassCard>
  );
}
