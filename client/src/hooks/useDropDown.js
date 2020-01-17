import React, {useState} from 'react';

const useDropDown = (defaultState, options) => {
    const [state, setState] = useState(defaultState);

    const Dropdown = () => (
            <select
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={options.length === 0}
            >
                <option>All</option>
                {options.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
    )
    
    return [state,setState];
}

export default useDropDown;