import { AchievementId, AchievementLevel } from './types';

// These are just hard coded for now loosely based on current available achievements
export const achievementLevelThresholds = {
  [AchievementLevel.Novice]: 3,
  [AchievementLevel.Beginner]: 8,
  [AchievementLevel.Experienced]: 15,
  [AchievementLevel.Expert]: 30,
  [AchievementLevel.Wizard]: 40,
};

export const achievements = [
  {
    id: AchievementId.NavigateToDashboard,
    title: 'Navigate to the dashboard page',
    description: '',
    level: AchievementLevel.Novice,
  },
  {
    id: AchievementId.NavigateToExplore,
    title: 'Navigate to the explore page',
    description: '',
    level: AchievementLevel.Novice,
  },
  {
    id: AchievementId.WatchIntroToGrafanaVideo,
    title: 'Watch intro to Grafana video',
    description: '',
    level: AchievementLevel.Novice,
  },
  {
    id: AchievementId.ConnectYourFirstDatasource,
    title: 'Connect your first datasource',
    description: '',
    level: AchievementLevel.Beginner,
  },
  {
    id: AchievementId.UseExploreToMakeAQuery,
    title: 'Use explore to make a query',
    description: '',
    level: AchievementLevel.Beginner,
  },
  {
    id: AchievementId.AddExplorePanelToADashboard,
    title: 'Add explore panel to a dashboard',
    description: '',
    level: AchievementLevel.Beginner,
  },
  {
    id: AchievementId.AddATitleAndDescriptionToAPanelInADashboard,
    title: 'Add a title and description to a panel in a dashboard',
    description: '',
    level: AchievementLevel.Beginner,
  },
  {
    id: AchievementId.ChangeTheTheme,
    title: 'Change the theme',
    description: 'Change the theme using the keyboard shortcut `ct`',
    level: AchievementLevel.Beginner,
  },
  {
    id: AchievementId.ExploreKeyboardShortcuts,
    title: 'Explore keyboard shortcuts',
    description: 'Use the keyboard shortcut `?` or `h` to see a list of keyboard shortcuts',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.ChangePanelSettings,
    title: 'Change panel settings',
    description: 'Modify the visualization type, change the unit, change the legend position etc',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.ImplementDataLink,
    title: 'Implement a data link',
    description: 'Create a data link that opens a new tab to a URL',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.AddTemplateVariable,
    title: 'Add a template variable',
    description: 'Add a template variable to a dashboard',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.AddDataTransformation,
    title: 'Add a transformation to your panel',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.AddCanvasVisualization,
    title: 'Add a canvas visualization',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.AddMetricValueElement,
    title: 'Add a metric value element',
    description: 'Add a metric value element in a canvas visualization',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.EnableCrosshairSharing,
    title: 'Enable crosshair sharing',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.LegendChangeSeriesColor,
    title: 'Change color of series by clicking on time series legend',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.LegendShowSeries,
    title: 'Click on series in the legend to display it by itself',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.LegendHideSeries,
    title: 'Command + click on series in the legend to exclude it',
    description: '',
    level: AchievementLevel.Experienced,
  },
  {
    id: AchievementId.AddCustomThresholds,
    title: 'Add custom thresholds',
    description: '',
    level: AchievementLevel.Expert,
  },
  {
    id: AchievementId.AddValueMapping,
    title: 'Add a value mapping',
    description: '',
    level: AchievementLevel.Expert,
  },
  {
    id: AchievementId.AddAdvancedDataLink,
    title: 'Implement a data link using a template variable / panel data',
    description: '',
    level: AchievementLevel.Expert,
  },
  {
    id: AchievementId.UseOuterJoinTransformation,
    title: 'Use an outer join transformation for query returning multiple data frames',
    description: '',
    level: AchievementLevel.Expert,
  },
  {
    id: AchievementId.MakePublicDashboard,
    title: 'Make a public dashboard',
    description: '',
    level: AchievementLevel.Expert,
  },
  {
    id: AchievementId.StreamDataToGrafana,
    title: 'Stream data to Grafana',
    description: '',
    level: AchievementLevel.Wizard,
  },
];