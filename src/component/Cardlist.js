import React from 'react';
import Card from './Card';


const Cardlist = ({location}) =>{
	return(
		<div>
			{location.map((city, i)=>{
					return (
						<Card 
						key={i} 
						city={location[i].locationName} 
						starttime={location[i].weatherElement[0].time[0].startTime}
						endtime={location[i].weatherElement[0].time[0].endTime}
						condition={location[i].weatherElement[0].time[0].parameter.parameterName}
						icon={location[i].weatherElement[0].time[0].parameter.parameterValue}
						/>
					);
				})
			}
		</div>
	);
}

export default Cardlist;