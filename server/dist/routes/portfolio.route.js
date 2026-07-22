import express from 'express';
import { isLoggedIn } from '../middlewares/auth.js';
import { handleAddPortfolio } from '../controllers/portfolio.controller.js';
import { upload } from '../middlewares/upload.js';
export const portfolio = express();
portfolio.post('/add-portfolio', upload.fields([
    { name: "heroImage", maxCount: 1 },
    { name: "aboutImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]), isLoggedIn, handleAddPortfolio);
portfolio.post('/add-about', isLoggedIn, handleAddPortfolio);
//# sourceMappingURL=portfolio.route.js.map