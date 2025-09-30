//

export interface iChildren {
  children: React.ReactNode;
}

export interface iButton {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
