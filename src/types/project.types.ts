export interface iProjectCard {
  id: string;
  title: string;
  description: string;
  images: string[];
  rating?: number;
  reviewCount?: number;
  isPremium: boolean;
  discountPrice?: number;
  originalPrice?: number;
  purpose?: string[];
  keyFeatures?: {
    title: string;
    subtitle: string;
  }[];
  guidelines?: string[];
  technologies?: {
    place: string;
    technologies: string[];
  }[];
  packages?: string[];
  futurePlans?: string[];
  liveLink: string;
  githubLinks:
    | {
        clientRepo?: string;
        serverRepo?: string;
      }
    | string;
  credentials?: {
    role: string;
    email: string[];
    password: string[];
  }[];
}
