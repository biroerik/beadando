import { Category } from "./category";
import { User } from "./user";

export interface Dvd {
    id: string;
    title: string;
    date: string;
    price: number;
    imgUrl: string;
    status: string;
    renter: User;
    categories: Category[];
}
