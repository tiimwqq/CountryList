import React from 'react';
import styled from './HomePage.module.scss';
import { Container } from '../../shared/ui/Container/Container';
import { CountryList } from '../../widgets/CountryList/CountryList';
import { FilterList } from '../../widgets/FilterList/FilterList';

export const Home: React.FC = () => {
  return (
    <div className={styled.home}>
      <Container>
        <FilterList/>
        <CountryList/>
      </Container>
    </div>
  );
};