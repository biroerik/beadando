import { getRepository } from "typeorm";
import { Dvd } from "../entity/Dvd";
import { Controller } from "./controller";

export class DvdController extends Controller {
    repository = getRepository(Dvd);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('dvd')
                .where("dvd.title LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('dvd.renter', 'renter')
                .leftJoinAndSelect('dvd.categories', 'category')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }
}
