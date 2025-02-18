import { useNavigate } from "react-router-dom";
import styled from "./CountryItem.module.scss";

type CountryItemProps = {
  flagImage: string;
  title: string;
  code: string;
};

export const CountryItem: React.FC<CountryItemProps> = ({ flagImage, title, code }) => {
    const navigate = useNavigate();

  return (
    <div className={styled.country} onClick={() => navigate(`/country/${code}`)}>
      <img src={flagImage} alt="flag" className={styled.country__flag} />
      <h3 className={styled.country__title}>{title}</h3>
    </div>
  );
};