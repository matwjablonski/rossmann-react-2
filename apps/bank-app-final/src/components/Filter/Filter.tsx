import { ChangeEvent, FC, useState } from 'react';
import Button from '../Button/Button';

export type FilterOption = {
  name: string;
  value: string;
}

interface FilterProps {
  options: FilterOption[];
  filterAction(filterValue: string): void;
}

const Filter: FC<FilterProps> = ({ options, filterAction }) => {
  const [ selectedFilter, setSelectedFilter ] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.currentTarget.value);
    filterAction(e.currentTarget.value);
  }

  const clearFilter = () => {
    setSelectedFilter('');
    filterAction('');
  }
  
  return (
    <div>
      <select value={selectedFilter} onChange={handleChange}>
        <option value=""></option>
        {options.map(({ name, value }) => <option value={value} key={value}>{name}</option>)}
      </select>

      {selectedFilter && <div>
        <span>{options.find(option => option.value === selectedFilter)!.name}</span>
        <Button type='button' label='Clear' onClick={clearFilter} />
      </div>}
    </div>
  )
}

export default Filter;
