import { DateRange } from 'react-date-range';

const Calender = ({ value, handleSelect }) => {
    return (
        <DateRange
        rangeColors={['#F43F5E']}
        direction='vertical'
        showDateDisplay={false}
        
      />
    );
};

export default Calender;