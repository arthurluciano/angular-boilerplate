module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'config',
        'deps',
        'docs',
        'feat',
        'fix',
        'lint',
        'merge',
        'perf',
        'refactor',
        'revert',
        'script',
        'test',
        'ux/ui',
        'wip',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['app'],
    ],
  },
  prompt: {
    questions: {
      type: {
        enum: {
          build: {
            description: 'changes that affect the build system or external dependencies',
          },
          ci: {
            description: 'changes to our CI configuration files and scripts',
          },
          chore: {
            description: "general tasks of the project, that don't change the project at all",
          },
          config: {
            description: 'changes that update general configuration files, like .eslintrc or .gitignore',
          },
          deps: {
            description: 'add, remove or update dependencies',
          },
          docs: {
            description: 'changes that update documentation only',
          },
          feat: {
            description: 'add a new feature to the codebase',
          },
          fix: {
            description: 'fix a bug',
          },
          lint: {
            description: 'file formatting, missing semi colons, …',
          },
          merge: {
            description: 'merge branches',
          },
          perf: {
            description: 'changes that improve performance',
          },
          refactor: {
            description: 'changes that refactor the code without changing the final result',
          },
          revert: {
            description: 'revert changes or commits',
          },
          script: {
            description: 'changes to our scripts configuration',
          },
          test: {
            description: 'changes related to the test codebase',
          },
          'ux/ui': {
            description: 'add, update or improve experience / usability of UI',
          },
          wip: {
            description: 'changes that are still have some work in progress.',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
    },
  },
}
