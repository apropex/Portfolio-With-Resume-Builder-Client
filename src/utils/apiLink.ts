//

const BASE_LINK = process.env.NEXT_PUBLIC_BASE_API;

export default function apiLink(...params: string[]): string {
  if (!BASE_LINK) throw new Error("Base Link is no defined in ENV");

  if (params.length > 0 && BASE_LINK) {
    return `${BASE_LINK}${params.join("")}`;
  }

  return BASE_LINK;
}
