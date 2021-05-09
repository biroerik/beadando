import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Dvd } from './Dvd';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    tel: string;

    @Column()
    address: string;

    @Column()
    szemelyi: string;

    @OneToMany(type => Dvd, dvd => dvd.renter)
    dvds: Dvd[];

}
