import type { Locale } from "../data/projects";
import dictJson from "../../data/dictionary.json";

export type { Locale };
export type Dictionary = typeof dictJson;

// We temporarily keep this to prevent immediate build errors before we refactor all components
// However, the real dictionary will be provided by I18nProvider context.
export const dictionary = dictJson as Dictionary;
