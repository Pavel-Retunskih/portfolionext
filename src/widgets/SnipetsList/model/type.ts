type GistOwner = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: "User" | "Organization";
  url: string;
  user_view_type?: string;
}

export type GistFile = {
  filename: string;
  language: string;
  raw_url: string;
  size: number;
  type: string;
  content?: string;
}

export type Gist = {
  comments: number;
  comments_enabled: boolean;
  comments_url: string;
  commits_url: string;
  created_at: string;
  description: string | null;
  files: Record<string, GistFile>;
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  owner: GistOwner;
  public: boolean;
  truncated: boolean;
  updated_at: string;
  url: string;
  user: null | GistOwner;
}