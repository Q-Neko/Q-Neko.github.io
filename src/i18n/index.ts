import type { Translations } from "./types";
import { en } from "./en";
import { ja } from "./ja";

const translations: Record<string, Translations> = { en, ja };

export function useTranslations(locale: string | undefined): Translations {
  return translations[locale ?? "en"] ?? translations["en"];
}

export type { Translations };
