import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dvd } from "./Dvd";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Dvd, dvd => dvd.categories)
    dvds: Dvd[];
}
