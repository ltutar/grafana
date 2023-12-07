import type { Step, Tutorial } from 'app/features/tutorial/types';

import { checkMenuStep } from './reusable/check-menu';

const info = {
  id: 'using-prometheusds',
  name: 'Using the PrometheusDS',
  description: `This is a tutorial to help you get started with the PrometheusDS.`,
  author: `Grafana Labs`,
};

const tutorialSteps: Step[] = [
  checkMenuStep,
  {
    target: `[href="/explore"]`,
    title: `Go to Explore`,
    content: `You can see all your datasources in Explore.`,
    placement: `right`,
    requiredActions: [
      {
        target: `[href="/explore"]`,
        action: 'click',
      },
    ],
  },
  {
    route: `/explore`,
    target: `[data-testid*="Select a data source"]`,
    title: `Let's get started`,
    content: 'Pick the prometheus datasource!',
    requiredActions: [
      {
        target: `[data-testid*="Select a data source"]`,
        action: 'change',
        attribute: {
          name: 'placeholder',
          regEx: `/prom/i`,
        },
      },
    ],
    skipConditions: [
      {
        target: `[data-testid*="Select a data source"]`,
        condition: 'match',
        attribute: {
          name: 'placeholder',
          regEx: `/prom/i`,
        },
      },
    ],
  },
  {
    route: `/explore`,
    target: `[data-testid*="Select a data source"]`,
    title: `The prometheus datasource is selected`,
    content: `Awesome, let's take a look at what you can do next!`,
  },
  {
    route: `/explore`,
    target: `[aria-label="Query patterns"]`,
    title: `Turbo charge`,
    content: `This is the 'Kick start your query' button. It will help you get started with your first query!`,
  },
  {
    route: `/explore`,
    target: `[aria-label="Toggle switch"]`,
    title: `ELI5`,
    content: `Give it a go!`,
    requiredActions: [
      {
        target: `[aria-label="Toggle switch"]`,
        action: 'click',
      },
    ],
  },
];

export const usingPrometheusDSTutorial: Tutorial = {
  ...info,
  steps: tutorialSteps,
};