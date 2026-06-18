import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona{
  @PrimaryGeneratedColumn
  id: number;
  @Column()
  nombre: string;
  @Column()
  apellidos: string;
  edad: number;
  @Column()
  ciudad: string;
  @Column()
  fechaNacimiento: Date;
}