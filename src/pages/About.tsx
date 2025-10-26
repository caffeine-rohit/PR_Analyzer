import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Zap, Shield, Code } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import GlassCard from '../components/shared/GlassCard';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About PR Analyzer
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Making code review faster and smarter
              </p>
            </div>

            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-4">What is PR Analyzer?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                PR Analyzer is a free tool that helps developers quickly understand GitHub Pull
                Requests. Simply paste a PR URL, and get an instant AI-powered summary with key
                insights, file categorization, and review time estimates.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Built for developers who want to move faster without sacrificing quality, PR
                Analyzer saves time by automatically analyzing PRs and highlighting what matters
                most.
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">GitHub API Integration</h3>
                    <p className="text-gray-400">
                      We fetch PR data directly from GitHub's public API - no authentication needed
                      for public repositories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smart Analysis</h3>
                    <p className="text-gray-400">
                      Our algorithms analyze file types, change patterns, and code structure to
                      provide intelligent insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">File Categorization</h3>
                    <p className="text-gray-400">
                      Files are automatically categorized by type - frontend, backend, tests, docs,
                      and configuration.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Is this tool free to use?
                  </h3>
                  <p className="text-gray-400">
                    Yes! PR Analyzer is completely free and doesn't require any signup or
                    authentication.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can I analyze private repositories?
                  </h3>
                  <p className="text-gray-400">
                    Currently, PR Analyzer only works with public GitHub repositories. Support for
                    private repos may be added in the future.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Is my data stored anywhere?
                  </h3>
                  <p className="text-gray-400">
                    No. All analysis happens in your browser. We don't store any PR data or personal
                    information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What about GitHub rate limits?
                  </h3>
                  <p className="text-gray-400">
                    GitHub allows 60 unauthenticated API requests per hour per IP. If you hit this
                    limit, just wait a few minutes and try again.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Privacy & Security</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important. PR Analyzer runs entirely in your browser and doesn't
                collect, store, or transmit any personal data. We only make direct API calls to
                GitHub's public API to fetch PR information.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
