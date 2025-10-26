import { PRData, FileData } from './githubAPI';

export interface FileCategories {
  frontend: FileData[];
  backend: FileData[];
  tests: FileData[];
  docs: FileData[];
  config: FileData[];
  other: FileData[];
}

export interface PRSummary {
  title: string;
  description: string;
  stats: {
    filesChanged: number;
    additions: number;
    deletions: number;
    commits: number;
  };
  fileCategories: FileCategories;
  reviewTime: number;
  keyPoints: string[];
}

export function categorizeFiles(files: FileData[]): FileCategories {
  const categories: FileCategories = {
    frontend: [],
    backend: [],
    tests: [],
    docs: [],
    config: [],
    other: []
  };

  files.forEach(file => {
    const filename = file.filename.toLowerCase();

    if (filename.includes('test') || filename.includes('spec') || filename.includes('__tests__')) {
      categories.tests.push(file);
    } else if (filename.endsWith('.md') || filename.includes('doc') || filename.includes('readme')) {
      categories.docs.push(file);
    } else if (
      filename.endsWith('.json') ||
      filename.endsWith('.yml') ||
      filename.endsWith('.yaml') ||
      filename.endsWith('.toml') ||
      filename.includes('config') ||
      filename.includes('.env')
    ) {
      categories.config.push(file);
    } else if (
      filename.endsWith('.jsx') ||
      filename.endsWith('.tsx') ||
      filename.endsWith('.vue') ||
      filename.endsWith('.css') ||
      filename.endsWith('.scss') ||
      filename.endsWith('.sass') ||
      filename.includes('component') ||
      filename.includes('styles') ||
      filename.includes('public/')
    ) {
      categories.frontend.push(file);
    } else if (
      filename.endsWith('.js') ||
      filename.endsWith('.ts') ||
      filename.endsWith('.py') ||
      filename.endsWith('.java') ||
      filename.endsWith('.go') ||
      filename.endsWith('.rs') ||
      filename.endsWith('.rb') ||
      filename.endsWith('.php')
    ) {
      categories.backend.push(file);
    } else {
      categories.other.push(file);
    }
  });

  return categories;
}

export function extractKeyPoints(prData: PRData, files: FileData[]): string[] {
  const points: string[] = [];

  if (files.length > 20) {
    points.push('⚠️ Large PR - consider breaking into smaller changes');
  } else if (files.length > 10) {
    points.push('📦 Medium-sized PR - may require thorough review');
  } else {
    points.push('✅ Small, focused PR - easier to review');
  }

  if (prData.additions > prData.deletions * 3) {
    points.push('📈 Primarily adding new code');
  } else if (prData.deletions > prData.additions * 2) {
    points.push('🗑️ Significant code removal/refactoring');
  } else if (Math.abs(prData.additions - prData.deletions) < 100) {
    points.push('⚖️ Balanced additions and deletions');
  }

  const hasTests = files.some(f =>
    f.filename.toLowerCase().includes('test') ||
    f.filename.toLowerCase().includes('spec')
  );

  if (!hasTests && files.length > 5) {
    points.push('❗ No test files modified - ensure adequate test coverage');
  } else if (hasTests) {
    points.push('✨ Includes test changes');
  }

  const hasDocs = files.some(f =>
    f.filename.toLowerCase().endsWith('.md') ||
    f.filename.toLowerCase().includes('doc')
  );

  if (hasDocs) {
    points.push('📚 Documentation updated');
  }

  if (prData.draft) {
    points.push('🚧 Draft PR - still in progress');
  }

  if (prData.commits > 20) {
    points.push('🔄 Many commits - might benefit from squashing');
  }

  return points;
}

export function generateSummary(prData: PRData, files: FileData[]): PRSummary {
  const fileCategories = categorizeFiles(files);
  const reviewTime = Math.ceil(files.length * 2);
  const keyPoints = extractKeyPoints(prData, files);

  let description = prData.body?.slice(0, 300) || 'No description provided';
  if (prData.body && prData.body.length > 300) {
    description += '...';
  }

  return {
    title: prData.title,
    description,
    stats: {
      filesChanged: prData.changed_files,
      additions: prData.additions,
      deletions: prData.deletions,
      commits: prData.commits
    },
    fileCategories,
    reviewTime,
    keyPoints
  };
}
