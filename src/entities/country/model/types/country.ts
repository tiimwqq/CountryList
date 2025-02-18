export interface Country {
    name: {
      official: string;
      common: string;
    };
    translations?: {
      rus?: {
        official: string;
        common: string;
      };
    };
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
    population: string;
    region: string;
    subregion?: string;
    capital?: string[];
    cca2?: string; // Двухбуквенный код страны
    cca3?: string; // Трехбуквенный код страны
    borders?: string[]; // Коды соседних стран
    languages?: Record<string, string>; // Объект с языками
    currencies?: Record<string, { name: string; symbol: string }>; // Валюта
  }
  