export type ShowcaseCategory = "interactive" | "component" | "layout" | "experimental";

export interface ShowcaseItem {
  id: string; // Unique ID for internal linking
  title: string; // Display name
  description: string; // Short description of the item
  type: ShowcaseCategory; // Category type for filtering
}
