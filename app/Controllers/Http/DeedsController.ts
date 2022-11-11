import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Deed from 'App/Models/Deed'
import Person from 'App/Models/Person'

export default class DeedsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const { personId } = body

    if (await Person.find(personId)) {
      const deed = await Deed.create(body)

      response.status(201)

      return {
        message: 'Feito criado com sucesso',
        data: deed,
      }
    } else {
      throw new Error('Membro não encontrado')
    }
  }

  public async index() {
    const deeds = await Deed.all()

    return deeds
  }

  public async show({ response, params }: HttpContextContract) {
    const { id } = params

    const deed = await Deed.find(id)

    response.status(200)

    return deed
  }
}
