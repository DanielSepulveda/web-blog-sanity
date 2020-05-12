export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba12dbf30aa7ed7b1550b8',
                  title: 'Sanity Studio',
                  name: 'web-blog-sanity-studio',
                  apiId: '3956ff68-3cfd-44ab-a424-b7092b423b4e'
                },
                {
                  buildHookId: '5eba12dbf30aa7bbe61555c8',
                  title: 'Landing pages Website',
                  name: 'web-blog-sanity',
                  apiId: '6f467fa6-67b1-4099-a30f-0a413684bb11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielSepulveda/web-blog-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://web-blog-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
