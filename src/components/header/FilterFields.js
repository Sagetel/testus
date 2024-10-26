import styled from 'styled-components';
import { useData } from '../providers';

const FilterFields = () => {
  const { filters, setFilters, setActivePage } = useData();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    setActivePage(0);
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        name="name"
        placeholder="Filter by name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <Select
        name="status"
        onChange={handleFilterChange}
        value={filters.status}
      >
        <Option value="">All Statuses</Option>
        <Option value="alive">Alive</Option>
        <Option value="dead">Dead</Option>
        <Option value="unknown">Unknown</Option>
      </Select>

      <Select
        name="species"
        onChange={handleFilterChange}
        value={filters.species}
      >
        <Option value="">All Species</Option>
        <Option value="human">Human</Option>
        <Option value="alien">Alien</Option>
        <Option value="robot">Robot</Option>
        <Option value="animal">Animal</Option>
        <Option value="humanoid">Humanoid</Option>
        <Option value="poopybutthole">Poopybutthole</Option>
        <Option value="mythological creature">Mythological Creature</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
      <Input
        type="text"
        name="type"
        placeholder="Filter by type"
        value={filters.type}
        onChange={handleFilterChange}
      />
      <FullWidthInput
        name="gender"
        onChange={handleFilterChange}
        value={filters.gender}
      >
        <Option value="">All Genders</Option>
        <Option value="female">Female</Option>
        <Option value="male">Male</Option>
        <Option value="genderless">Genderless</Option>
        <Option value="unknown">Unknown</Option>
      </FullWidthInput>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 990px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 663px) {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 5px;
  background-color: #001832;
  border: 2px solid #00aec6;
  border-radius: 7px;
  color: white;
`;

const Select = styled.select`
  padding: 5px;
  background-color: #001832;
  border: 2px solid #00aec6;
  border-radius: 7px;
  color: #757575;
`;

const FullWidthInput = styled.select`
  padding: 5px;
  background-color: #001832;
  border: 2px solid #00aec6;
  border-radius: 7px;
  color: #757575;
  @media (max-width: 990px) {
    grid-column: span 2;
  }
`;

const Option = styled.option`
  background-color: #001832;
  color: white;
`;

export default FilterFields;
