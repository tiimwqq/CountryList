import React from 'react';
import styled from './FilterList.module.scss';
import { SearchBar } from '../../features/search/ui/SearchBar';
import { RegionFilter } from '../../features/regionFilter/ui/RegionFilter';
import { PopulationSort } from '../../features/populationSort/ui/PopulationSort';
export const FilterList: React.FC = () => {
    return (
        <div className={styled.filterList}>
            <SearchBar />
            {/* filters */}
            <div className={styled.filterList__rightSide}>
                <PopulationSort />
                <RegionFilter />
            </div>
        </div>
    );
};