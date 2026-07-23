import express from 'express';
import { isLoggedIn } from '../middlewares/auth.js';
import { handleCreatePortfolio, handleGetPortfolio, handleGetPortfolioProjects, handleGetPortfolioProjectsPublic, handleGetPortfolioPublic, handleUpdateAbout } from '../controllers/portfolio.controller.js';
import { upload } from '../middlewares/upload.js';
export const portfolio = express();
// my portfolio page
portfolio.get('/', isLoggedIn, handleGetPortfolio);
portfolio.get('/projects', isLoggedIn, handleGetPortfolioProjects);
portfolio.post('/create', upload.fields([
    { name: "heroImage", maxCount: 1 },
    { name: "aboutImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]), isLoggedIn, handleCreatePortfolio);
portfolio.put('/update-about', upload.fields([
    { name: "aboutImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
]), isLoggedIn, handleUpdateAbout);
// public page
portfolio.get('/public/:id', handleGetPortfolioPublic);
portfolio.get('/public/projects/:id', handleGetPortfolioProjectsPublic);
//# sourceMappingURL=portfolio.route.js.map