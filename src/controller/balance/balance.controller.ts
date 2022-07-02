import { getManager } from 'typeorm';
import { Request, Response } from 'express';
import { UserRepository } from '../../database/user/repository/user.repository';

export class BalanceController {
  static async getBalance(req: Request, res: Response) {
    let connectionManager = getManager().getCustomRepository(UserRepository);
    await connectionManager.getBalance(req, res);
  }

  static async updateBalance(req: Request, res: Response) {
    let connectionManager = getManager().getCustomRepository(UserRepository);
    await connectionManager.updateBalance(req, res);
  }
}
