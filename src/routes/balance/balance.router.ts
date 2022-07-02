import { Router } from 'express';
import { BalanceController } from '../../controller/balance/balance.controller';

const balanceRouter = Router();

//? @Post
balanceRouter.put('/top', BalanceController.updateBalance);

//? @Get
balanceRouter.get('/', BalanceController.getBalance);

export { balanceRouter };
