export interface PRData {
  title: string;
  body: string | null;
  user: {
    login: string;
    avatar_url: string;
  };
  state: string;
  html_url: string;
  additions: number;
  deletions: number;
  changed_files: number;
  commits: number;
  labels: Array<{
    name: string;
    color: string;
  }>;
  created_at: string;
  merged: boolean;
  draft: boolean;
}

export interface FileData {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
}

export async function fetchPRData(owner: string, repo: string, prNumber: string): Promise<PRData> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('PR not found. It may be private or the URL is incorrect.');
    } else if (response.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please try again in a few minutes.');
    } else {
      throw new Error('Failed to fetch PR data');
    }
  }

  return response.json();
}

export async function fetchPRFiles(owner: string, repo: string, prNumber: string): Promise<FileData[]> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files`
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please try again in a few minutes.');
    } else {
      throw new Error('Failed to fetch PR files');
    }
  }

  return response.json();
}
