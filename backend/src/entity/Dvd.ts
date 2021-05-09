import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Dvd {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    date: string;

    @Column({ type: 'float' })
    price: number;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    status: string;

    @ManyToOne(type => User, {
        eager: true,
        cascade: true
    })
    renter: User;

    @ManyToMany(() => Category, category => category.dvds, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}