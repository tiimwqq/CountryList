import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../model/searchSlice';
import { RootState } from '../../../app/store';
import styled from './SearchBar.module.scss';
import { useTranslation } from 'react-i18next';

export const SearchBar: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

    return (
        <input
            type="text"
            className={styled.searchInput}
            placeholder={t("search")}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            value={searchQuery}
        />
    );
};