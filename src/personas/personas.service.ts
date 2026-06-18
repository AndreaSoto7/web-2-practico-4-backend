import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './create-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './persona.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class PersonasService {
  public constructor(
    @InjectRepository(Persona)
    private repository: Repository<Persona>,
  ) {}
  public getAll(): Promise<Persona[]> {
    return this.repository.find();
    }
  }
  public createPersona(dto: CreatePersonaDto): Promise<Persona> {
    const persona = this.repository.create(dto);
    return this.repository.save(persona);
  }
}
