import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'
import Skill from 'App/Models/Skill'

export default class SkillsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const { personId } = body

    if (await Person.find(personId)) {
      const skill = await Skill.create(body)

      response.status(201)

      return {
        message: 'Habilidade criada com sucesso',
        data: skill,
      }
    } else {
      response.status(404)
      throw new Error('Membro não encontrado')
    }
  }

  public async index() {
    const skills = await Skill.all()

    return skills
  }

  public async show({ response, params }: HttpContextContract) {
    const { id } = params

    const skill = await Skill.find(id)

    response.status(200)

    return skill
  }
}
