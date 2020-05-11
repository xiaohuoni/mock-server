
import { Request, Response, Router, NextFunction } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Mock Server' });
});

export default router;
