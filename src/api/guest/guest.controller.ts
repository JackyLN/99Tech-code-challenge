import { Request, Response } from "express";
import GuestService from "./guest.service";

export default class GuestController {
	private guestService: GuestService;

	constructor() {
		this.guestService = new GuestService();
	}

	public async getAllGuests(req: Request, res: Response): Promise<Response> {
		const guests = await this.guestService.getAllGuests();
		return res.status(200).json(guests);
	}

	public async getGuestById(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const guest = await this.guestService.getGuestById(Number(id));
		if (!guest) return res.status(404).json({ message: "Guest not found" });
		return res.status(200).json(guest);
	}

	public async createGuest(req: Request, res: Response): Promise<Response> {
		const guest = await this.guestService.createGuest(req.body);
		return res.status(201).json(guest);
	}

	public async updateGuest(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const affectedCount = await this.guestService.updateGuest(
			Number(id),
			req.body
		);
		if (!affectedCount)
			return res.status(404).json({ message: "Guest not found" });
		return res.status(200).json({ message: "Guest updated successfully" });
	}

	public async deleteGuest(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const deleted = await this.guestService.deleteGuest(Number(id));
		if (!deleted) return res.status(404).json({ message: "Guest not found" });
		return res.status(204).send();
	}
}
