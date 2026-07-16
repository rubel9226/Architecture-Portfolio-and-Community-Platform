export interface EducationEntry {
    id: string;
    university: string;
    department: string;
    degree: string;
    batch: string;
    startYear: string;
    endYear: string;
    cgpa?: string;
    achievements?: string;
}

export interface ExperienceEntry {
    id: string;
    company: string;
    position: string;
    employmentType: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    current: boolean;
}

export interface SkillEntry {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced";
}

export interface ProfileData {
    fullName: string;
    username: string;
    headline: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    university: string;
    department: string;
    batch: string;
    graduationYear: string;
    portfolioUrl: string;
    website: string;
    aboutMe: string;
    careerObjective: string;
    designPhilosophy: string;
    professionalSummary: string;
    profileImage: string;
    coverImage: string;
    skills: SkillEntry[];
    education: EducationEntry[];
    experience: ExperienceEntry[];
    socials: {
        github: string;
        linkedin: string;
        behance: string;
        dribbble: string;
        instagram: string;
        facebook: string;
        pinterest: string;
    };
    settings: {
        publicProfile: boolean;
        showEmail: boolean;
        showPhone: boolean;
        showSocialLinks: boolean;
        showSkills: boolean;
        showEducation: boolean;
        allowSharing: boolean;
        allowDownloadResume: boolean;
    };
    }