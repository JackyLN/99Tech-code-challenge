import GuestRepository from "./guest.repository";
import Guest from "../../_database/models/guest";

export default class GuestService {
	private guestRepository: GuestRepository;

	constructor() {
		this.guestRepository = new GuestRepository();
	}

	public async getAllGuests(): Promise<Guest[]> {
		return this.guestRepository.findAll();
	}

	public async getGuestById(id: number): Promise<Guest | null> {
		return this.guestRepository.findById(id);
	}

	public async createGuest(data: Partial<Guest>): Promise<Guest> {
		return this.guestRepository.create(data);
	}

	public async updateGuest(id: number, data: Partial<Guest>): Promise<number> {
		const affectedCount = await this.guestRepository.update(id, data);
		return affectedCount;
	}

	public async deleteGuest(id: number): Promise<number> {
		return this.guestRepository.delete(id);
	}
}
