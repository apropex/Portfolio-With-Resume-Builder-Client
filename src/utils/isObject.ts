/* eslint-disable @typescript-eslint/no-explicit-any */
//

import { iProjectCard } from "@/types/project.types";

export function isObject(variable: any): variable is Record<string, any> {
  return variable !== null && typeof variable === "object" && !Array.isArray(variable);
}

//

type GithubLinksObject = Exclude<iProjectCard["githubLinks"], string>;

export function isGithubLinksObject(variable: any): variable is GithubLinksObject {
  return variable !== null && typeof variable === "object" && !Array.isArray(variable);
}
