import enCommon from './locales/en/common.json';
import ruCommon from './locales/ru/common.json';

type Language = 'en' | 'ru';
type ResourceNamespace = Record<string, unknown>;
type ResourceModule = {
  default: ResourceNamespace;
};

const localeModules = import.meta.glob<ResourceModule>(
  [
    '../../../widgets/*/i18n/*.json',
    '../../../pages/*/i18n/*.json',
    '../../../features/*/i18n/*.json',
  ],
  { eager: true },
);

function toCamelCase(value: string) {
  return value.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());
}

function getNamespaceFromPath(path: string) {
  const segments = path.split('/');
  const moduleName = segments[segments.length - 3];

  if (!moduleName || moduleName === 'i18n') {
    throw new Error(`Cannot resolve i18n namespace from path: ${path}`);
  }

  return toCamelCase(moduleName);
}

function collectLanguageResources(language: Language) {
  const namespaces: Record<string, ResourceNamespace> = {};

  for (const [path, module] of Object.entries(localeModules)) {
    if (!path.endsWith(`/${language}.json`)) {
      continue;
    }

    const namespace = getNamespaceFromPath(path);

    if (namespace in namespaces) {
      throw new Error(`Duplicate i18n namespace "${namespace}" for language "${language}"`);
    }

    namespaces[namespace] = module.default;
  }

  return namespaces;
}

export const resources = {
  en: {
    common: enCommon,
    ...collectLanguageResources('en'),
  },
  ru: {
    common: ruCommon,
    ...collectLanguageResources('ru'),
  },
} as const;
