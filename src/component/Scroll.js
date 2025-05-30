import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{ overflowY: 'scroll', height:'500px', width:'80%',margin: 'auto'}}>
			{props.children}
		</div>
	)
}

export default Scroll;