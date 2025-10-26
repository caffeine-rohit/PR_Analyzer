import { useState } from 'react';
import { FileCode, Plus, Minus, Circle } from 'lucide-react';
import { FileData } from '../../utils/githubAPI';
import { FileCategories } from '../../utils/prAnalyzer';
import GlassCard from '../shared/GlassCard';

interface FilesSectionProps {
  categories: FileCategories;
  allFiles: FileData[];
}

export default function FilesSection({ categories, allFiles }: FilesSectionProps) {
  const [activeTab, setActiveTab] = useState<keyof FileCategories | 'all'>('all');

  const tabs: Array<{ key: keyof FileCategories | 'all'; label: string; count: number }> = [
    { key: 'all', label: 'All', count: allFiles.length },
    { key: 'frontend', label: 'Frontend', count: categories.frontend.length },
    { key: 'backend', label: 'Backend', count: categories.backend.length },
    { key: 'tests', label: 'Tests', count: categories.tests.length },
    { key: 'docs', label: 'Docs', count: categories.docs.length },
    { key: 'config', label: 'Config', count: categories.config.length },
    { key: 'other', label: 'Other', count: categories.other.length }
  ];

  const visibleFiles = activeTab === 'all' ? allFiles : categories[activeTab as keyof FileCategories];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'added':
        return <Plus className="w-4 h-4 text-green-400" />;
      case 'removed':
        return <Minus className="w-4 h-4 text-red-400" />;
      default:
        return <Circle className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'added':
        return 'text-green-400';
      case 'removed':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  return (
    <GlassCard>
      <div className="flex items-center gap-3 mb-6">
        <FileCode className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Files Changed</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            disabled={tab.count === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab.label} {tab.count > 0 && `(${tab.count})`}
          </button>
        ))}
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {visibleFiles.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No files in this category
          </div>
        ) : (
          visibleFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {getStatusIcon(file.status)}
                <span className="text-gray-300 truncate font-mono text-sm">
                  {file.filename}
                </span>
                <span className={`text-xs font-medium capitalize ${getStatusColor(file.status)}`}>
                  {file.status}
                </span>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                {file.additions > 0 && (
                  <span className="text-green-400 text-sm font-medium">
                    +{file.additions}
                  </span>
                )}
                {file.deletions > 0 && (
                  <span className="text-red-400 text-sm font-medium">
                    -{file.deletions}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </GlassCard>
  );
}
