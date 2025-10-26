import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GlassCard from '../shared/GlassCard';
import GradientButton from '../shared/GradientButton';
import AnimatedBlob from '../shared/AnimatedBlob';

export default function Hero() {
  const [prUrl, setPrUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prUrl.trim()) {
      navigate('/analyze', { state: { prUrl } });
    }
  };

  const exampleUrl = 'https://github.com/facebook/react/pull/28000';

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBlob color="bg-purple-500" position="top-0 left-0" delay={0} />
      <AnimatedBlob color="bg-pink-500" position="top-1/2 right-0" delay={2} />
      <AnimatedBlob color="bg-blue-500" position="bottom-0 left-1/2" delay={4} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Analyze GitHub PRs
          </span>
          <br />
          <span className="text-white">in Seconds</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          AI-powered summaries, smart insights, zero hassle
        </p>

        <GlassCard className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={prUrl}
              onChange={(e) => setPrUrl(e.target.value)}
              placeholder="Paste GitHub PR URL (e.g., https://github.com/owner/repo/pull/123)"
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <GradientButton type="submit" fullWidth disabled={!prUrl.trim()}>
              <span className="flex items-center justify-center gap-2">
                Analyze PR
                <ArrowRight className="w-5 h-5" />
              </span>
            </GradientButton>
          </form>

          <button
            onClick={() => setPrUrl(exampleUrl)}
            className="mt-4 text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            Try example: React PR #28000
          </button>
        </GlassCard>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">Instant</div>
            <div className="text-gray-400">Analysis in seconds</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">Smart</div>
            <div className="text-gray-400">AI-powered insights</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">Free</div>
            <div className="text-gray-400">No signup required</div>
          </div>
        </div>
      </div>
    </div>
  );
}
