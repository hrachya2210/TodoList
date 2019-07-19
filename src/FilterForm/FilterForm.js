import React, {Component} from 'react';
import './FilterForm.css';

class FilterForm extends Component {
    

    onFilterButtonClick = (event) => {
        const {filterOption} = this.props;
        filterOption(event.target.value);
    }

    render() {
        const {filterOptionName, filterOptionSelected} = this.props;
        let filterButton='';
        if (filterOptionName === filterOptionSelected) {
            filterButton='filterSelectedButton';
        }
        return (
            <div className='filterButtonCol'>
                <button onClick={this.onFilterButtonClick} className={filterButton} value = {filterOptionName}>{filterOptionName}</button>
            </div>   
        )
    }
}

export default FilterForm;