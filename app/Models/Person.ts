import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Skill from './Skill'
import Deed from './Deed'

export default class Person extends BaseModel {
  @hasMany(() => Skill)
  public skills: HasMany<typeof Skill>

  @hasMany(() => Deed)
  public deeds: HasMany<typeof Deed>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public avatar: string

  @column()
  public sex: string

  @column()
  public phone: string

  @column()
  public adress: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
