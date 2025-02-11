export const LocalStorageKeys = {
  NewFeatureReadStatus: (feature: string) =>
    `s42.new-feature-read-status-${feature}`,
  Settings: 's42.your-settings',
} as const;

export const SessionStorageKeys = {
  GithubStars: 's42.github.stars',
};
