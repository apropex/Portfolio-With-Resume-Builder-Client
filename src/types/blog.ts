export interface iPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface iBlog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  authorId: string;
  category: string;
  tags: string[];
  images: string[];
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  image: string;
  role: string;
  isVerified: boolean;
  provider: string;
  providerId: string;
  createdAt: string;
  updatedAt: string;
}
