import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue w-20'
				type='search' 
				placeholder='搜尋縣市'
				onChange={searchChange}
			/>
		</div>	
	); 
}

export default SearchBox;