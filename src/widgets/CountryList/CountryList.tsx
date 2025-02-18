import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useGetAllCountriesQuery } from "../../entities/country/api/countryApi";
import { CountryItem } from "../../entities/country/ui/CountryItem/CountryItem";
import styled from "./CountryList.module.scss";
import { useTranslation } from "react-i18next";

export const CountryList: React.FC = () => {
    const { data: countries, isLoading, error } = useGetAllCountriesQuery();
    const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
    const selectedRegion = useSelector((state: RootState) => state.regionFilter.selectedRegion);
    const sortOrder = useSelector((state: RootState) => state.populationSort.sortOrder);
    const { i18n } = useTranslation();
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading countries!</p>;

    // Фильтрация по поиску и региону
    let filteredCountries = countries?.filter((country) => {
        const countryName = i18n.language === "ru" && country.translations?.rus?.official
            ? country.translations.rus.official
            : country.name.official;

        const matchesSearch = countryName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    // Сортировка по населению
    if (sortOrder === "asc") {
        filteredCountries = filteredCountries?.sort((a, b) => parseInt(a.population) - parseInt(b.population));
    } else if (sortOrder === "desc") {
        filteredCountries = filteredCountries?.sort((a, b) => parseInt(b.population) - parseInt(a.population));
    }

    return (
        <div className={styled.countryList}>
            {filteredCountries?.map((country) => {
                const countryName = i18n.language === "ru" && country.translations?.rus?.official
                    ? country.translations.rus.official
                    : country.name.official;

                return (
                    <CountryItem
                        key={country.cca3}
                        code={country.cca3}
                        flagImage={country.flags.svg}
                        title={countryName} // Передаём локализованное название
                    />
                );
            })}
        </div>
    );
};
