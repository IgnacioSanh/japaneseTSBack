import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity('user')
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    main_language: number

}