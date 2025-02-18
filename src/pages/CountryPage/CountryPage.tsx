import { useParams, useNavigate, Link } from "react-router-dom";
import { useGetCountryByCodeQuery } from "../../entities/country/api/countryApi";
import styled from "./CountryPage.module.scss";
import { useTranslation } from "react-i18next";
import { Country } from "../../entities/country/model/types/country";

export const CountryPage: React.FC = () => {
    const { code } = useParams<{ code: string | undefined }>(); // Получаем код страны из URL
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    if (!code) {
        // Handle the case where code is undefined
        return <p>{t("Invalid country code")}</p>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: country, isLoading, error } = useGetCountryByCodeQuery(code);

    // Проверяем загрузку и ошибки
    if (isLoading) return <p>{t("Loading...")}</p>;
    if (error || !country || !Array.isArray(country) || country.length === 0) {
        return <p>{t("Error loading country details")}</p>;
    }

    // Теперь TypeScript понимает, что country — это массив, и можно безопасно взять [0]
    const countryData: Country = country[0];

    // Проверяем, что у countryData есть name
    if (!countryData.name) return <p>{t("Invalid country data")}</p>;

    // Локализация названия страны
    const countryName = i18n.language === "ru" && countryData.translations?.rus?.official
        ? countryData.translations.rus.official
        : countryData.name.official;

    return (
        <div className={styled.details}>
            <h1>{countryName}</h1>
            <img src={countryData.flags.svg} alt={`${countryName} flag`} className={styled.flag} />

            <p><strong>{t("Capital")}:</strong> {countryData.capital?.[0] || t("No data")}</p>
            <p><strong>{t("Region")}:</strong> {countryData.region}</p>
            <p><strong>{t("Population")}:</strong> {countryData.population.toLocaleString()}</p>

            {/* Границы */}
            {countryData.borders?.length ? (
                <div className={styled.borders}>
                    <h3>{t("Borders with")}:</h3>
                    <div className={styled.borderList}>
                        {countryData.borders.map((border) => (
                            <Link to={`/country/${border}`} key={border}>
                                <button key={border} className={styled.borderButton}>
                                    {border}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <p>{t("No borders")}</p>
            )}

            <button onClick={() => navigate(-1)} className={styled.backButton}>
                {t("Back")}
            </button>
        </div>
    );
};
