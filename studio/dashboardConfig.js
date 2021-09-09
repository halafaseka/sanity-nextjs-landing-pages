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
                  buildHookId: '613a846bff28a11e7f2a102f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yca3a3np',
                  apiId: '02697c48-8bb8-4f53-bc24-80dcf1a22e96'
                },
                {
                  buildHookId: '613a846bb55a9c2c231b40df',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bu9bsmcg',
                  apiId: 'ca695bb3-715a-470b-a83e-ee9fb500f7d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/halafaseka/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bu9bsmcg.netlify.app', category: 'apps'}
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
