export interface PortfolioData {
    _id?: string;
    author?: string;
    name: string;
    roles: string[];
    heroImage: string;
    heroDescription: string;
    aboutImage: string;
    aboutDescription: string;
    resume: string;
    skills: string[];
    email: string;
    phone?: string;
    address?: string;
    projects?: any[];
}
