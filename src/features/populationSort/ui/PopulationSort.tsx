import { useDispatch, useSelector } from "react-redux";
import { setSortOrder } from "../model/populationSortSlice";
import { RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import styled from "./PopulationSort.module.scss";
import React from "react";

export const PopulationSort = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const sortOrder = useSelector((state: RootState) => state.populationSort.sortOrder);


    // Сохраняем в локалсторадж при изменении порядка сортировки
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortOrder = e.target.value as "asc" | "desc" | "none";
        dispatch(setSortOrder(newSortOrder));
        localStorage.setItem("sortOrder", newSortOrder); // Сохраняем в localStorage
    };

    // восстанавливаем значение из локалсторадж при загрузке компонента
    React.useEffect(() => {
        const savedSortOrder = localStorage.getItem("sortOrder") as "asc" | "desc" | "none";
        if (savedSortOrder) {
            dispatch(setSortOrder(savedSortOrder));
        }
    }, [dispatch]);


    return (
        <div className={styled.populationSort}>
            <span>{t("Population")}:</span>
            <select
                className={styled.select}
                value={sortOrder}
                onChange={(e) => handleSortChange(e)}
            >
                <option value="none">{t("Without sorting")}</option>
                <option value="desc">{t("Descending")}</option>
                <option value="asc">{t("Ascending")}</option>
            </select>
        </div>
    );
};