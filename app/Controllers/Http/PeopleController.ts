import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const person = await Person.create(body)

    response.status(201)

    return {
      message: 'Pessoa criada com sucesso',
      data: person,
    }
  }

  public async index({ response }: HttpContextContract) {
    const person = await Person.query()

    response.status(200)

    return person
  }

  public async show({ response, params }: HttpContextContract) {
    const { id } = params

    const person = await Person.findOrFail(id)

    await person.preload('skills')
    await person.preload('deeds')

    response.status(200)

    return person
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { id } = params
    const body = request.body()

    const person = await Person.findOrFail(id)

    person.name = body.name
    person.avatar = body.avatar
    person.sex = body.sex
    person.phone = body.phone
    person.adress = body.adress

    await person.save()

    response.status(201)

    return {
      message: 'Pessoa atualizada com sucesso',
      data: person,
    }
  }
}
