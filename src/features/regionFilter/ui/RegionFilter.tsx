import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../model/regionFilterSlice";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import styled from "./RegionFilter.module.scss";
import React from "react";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export const RegionFilter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const selectedRegion = useSelector((state: RootState) => state.regionFilter.selectedRegion);

    // Сохраняем в localStorage при изменении выбранного региона
    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newRegion = e.target.value;
        dispatch(setRegion(newRegion));
        localStorage.setItem("selectedRegion", newRegion); // Сохраняем в localStorage
    };

    // Восстанавливаем значение из localStorage при загрузке компонента
    React.useEffect(() => {
        const savedRegion = localStorage.getItem("selectedRegion");
        if (savedRegion) {
            dispatch(setRegion(savedRegion));
        }
    }, [dispatch]);

    return (
        <div className={styled.regionFilter}>
            <span>{t("Region")}:</span>
            <select
                className={styled.select}
                value={selectedRegion}
                onChange={handleRegionChange}
            >
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {t(region)}
                    </option>
                ))}
            </select>
        </div>
    );
};