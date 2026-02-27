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
      link: {
        type: 'generated-index',
        title: 'Java',
        description: 'Java language and framework examples.',
      },
      items: [
        {
          type: 'category',
          label: 'Language',
          items: ['java/language/java-hello'],
        },
        {
          type: 'category',
          label: 'Frameworks',
          items: [
            {
              type: 'category',
              label: 'Spring',
              link: {
                type: 'generated-index',
                title: 'Spring',
                description: 'Spring ecosystem examples.',
              },
              items: [
                {
                  type: 'category',
                  label: 'Spring Boot',
                  link: {
                    type: 'generated-index',
                    title: 'Spring Boot',
                    description: 'Spring Boot examples.',
                  },
                  items: [],
                },
                {
                  type: 'category',
                  label: 'Spring JDBC Template',
                  link: {
                    type: 'generated-index',
                    title: 'Spring JDBC Template',
                    description: 'Spring JDBC Template examples.',
                  },
                  items: [],
                },
                {
                  type: 'category',
                  label: 'Spring AI',
                  link: {
                    type: 'generated-index',
                    title: 'Spring AI',
                    description: 'Spring AI examples.',
                  },
                  items: [],
                },
              ],
            },
            {
              type: 'category',
              label: 'Quarkus',
              link: {
                type: 'generated-index',
                title: 'Quarkus',
                description: 'Quarkus examples.',
              },
              items: [],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Terminal',
      link: {
        type: 'generated-index',
        title: 'Terminal',
        description: 'Terminal and CLI examples.',
      },
      items: [
        {
          type: 'category',
          label: 'Linux',
          items: ['terminal/linux/basic-commands'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'templates/tutorial-template',
        'templates/reference-template',
        'templates/troubleshooting-template',
      ],
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
            description: 'Azure examples.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'AWS',
          link: {
            type: 'generated-index',
            title: 'AWS',
            description: 'AWS examples.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'GCP',
          link: {
            type: 'generated-index',
            title: 'GCP',
            description: 'Google Cloud examples.',
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
            description: 'IaC examples with Terraform.',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'CloudFormation',
          link: {
            type: 'generated-index',
            title: 'CloudFormation',
            description: 'IaC examples with CloudFormation.',
          },
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
