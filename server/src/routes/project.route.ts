import express from 'express';
import { handleAddPortfolio, handleAddProject, handleDeletePortfolio, handleGetAllProject, handleGetHomeFeatured, handleGetHomePublicProjects, handleGetMyProject, handleGetSingleProject } from '../controllers/project.controller.js'; 
import { upload } from '../middlewares/upload.js';
import { isLoggedIn } from '../middlewares/auth.js';
export const project = express();


// create project
project.post(
    '/add-project',
    upload.fields([
        { name: "coverImage", maxCount: 1 },
        { name: "galleryImages", maxCount: 10 },
    ]),
    isLoggedIn,
    handleAddProject
);



// my projects
project.get(
    '/my-projects',
    isLoggedIn,
    handleGetMyProject
);



// public projects
project.get(
    '/public',
    handleGetAllProject
);



// public projects
project.get(
    '/public-home',
    handleGetHomePublicProjects
);



// public projects
project.get(
    '/featured-home',
    handleGetHomeFeatured
);



// my projects
project.get(
    '/single-project/:id',
    handleGetSingleProject
);



// my projects
project.put(
    '/portfolio/:id',
    isLoggedIn,
    handleAddPortfolio
);


// my projects
project.delete(
    '/delete/:id',
    isLoggedIn,
    handleDeletePortfolio
);