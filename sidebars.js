// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Java',
      items: [
        {
          type: 'category',
          label: 'Language',
          items: [
            'java/language/java-hello',
            'java/language/java-polimorfismo',
          ],
        },
        {
          type: 'category',
          label: 'Web',
          link: {
            type: 'generated-index',
            title: 'Java Web',
            description: 'Ejemplos de Java Web.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'generated-index',
            title: 'Java API',
            description: 'Ejemplos de APIs en Java.',
          },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'Terminal',
      link: {
        type: 'generated-index',
        title: 'Terminal',
        description: 'Ejemplos de terminal y CLI.',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        {
          type: 'category',
          label: 'Azure',
          link: {
            type: 'generated-index',
            title: 'Azure',
            description: 'Ejemplos de Azure.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'AWS',
          link: {
            type: 'generated-index',
            title: 'AWS',
            description: 'Ejemplos de AWS.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'GCP',
          link: {
            type: 'generated-index',
            title: 'GCP',
            description: 'Ejemplos de Google Cloud.',
          },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'IaC',
      items: [
        {
          type: 'category',
          label: 'Terraform',
          link: {
            type: 'generated-index',
            title: 'Terraform',
            description: 'Ejemplos de IaC con Terraform.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'CloudFormation',
          link: {
            type: 'generated-index',
            title: 'CloudFormation',
            description: 'Ejemplos de IaC con CloudFormation.',
          },
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
