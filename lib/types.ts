import { links } from "./data";

export type SectionName = (typeof links)[number]["name"]; //'number' could be any of the property 'name'
