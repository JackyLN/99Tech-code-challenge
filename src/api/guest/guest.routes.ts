import { Router, Request, Response, NextFunction } from 'express';
import GuestController from './guest.controller';

const router = Router();
const guestController = new GuestController();

// Helper to wrap async route handlers and catch errors
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

// Routes
router.get('/guests', asyncHandler(guestController.getAllGuests.bind(guestController)));
router.get('/guests/:id', asyncHandler(guestController.getGuestById.bind(guestController)));
router.post('/guests', asyncHandler(guestController.createGuest.bind(guestController)));
router.put('/guests/:id', asyncHandler(guestController.updateGuest.bind(guestController)));
router.delete('/guests/:id', asyncHandler(guestController.deleteGuest.bind(guestController)));

export default router;
