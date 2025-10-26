import GlassCard from '../shared/GlassCard';

const steps = [
  'Fetching PR data...',
  'Analyzing files...',
  'Generating summary...',
  'Calculating insights...'
];

export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24">
      <GlassCard className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Analyzing PR</h2>
          <p className="text-gray-400">This will only take a moment...</p>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-left animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-gray-400 text-sm">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-loading-bar" />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
