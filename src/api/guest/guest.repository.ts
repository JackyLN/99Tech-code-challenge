import Guest from "../../_database/models/guest";

export default class GuestRepository {
	public async findAll(): Promise<Guest[]> {
		return Guest.findAll();
	}

	public async findById(id: number): Promise<Guest | null> {
		return Guest.findByPk(id);
	}

	public async create(data: Partial<Guest>): Promise<Guest> {
		return Guest.create(data);
	}

	public async update(id: number, data: Partial<Guest>): Promise<number> {
		const [affectedCount] = await Guest.update(data, { where: { id } });
		return affectedCount;
	}

	public async delete(id: number): Promise<number> {
		return Guest.destroy({ where: { id } });
	}
}
