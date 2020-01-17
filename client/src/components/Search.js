import React, {useState, useEffect} from 'react';
import useDropDown from '../hooks/useDropDown';

const options = [100,99,18,11,9,8,7,6,5,4,3,2,1,0]

const Search = props => {
    const [rank, RankDropDown] = useDropDown('ALL', options)

    


    useEffect(() => {
        RankDropDown(props.state)
    })

    return(<div><RankDropDown /></div>)
}

export default Search;