export interface Creator {
    name: string;
    avatar: string;
    role?: string;
}

export interface ProjectAuthor {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  username: string;
}



export interface Category {
    id: string;
    name: string;
    count: number;
}


export interface Country {
    code: string;
    name: string;
}