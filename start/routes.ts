import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.resource('/person', 'PeopleController').apiOnly()
  Route.resource('/skill', 'SkillsController').apiOnly()
  Route.resource('/deed', 'DeedsController').apiOnly()
}).prefix('/api')
