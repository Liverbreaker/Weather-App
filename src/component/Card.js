import React from 'react';
// const Card = ({name, email, id}) => {
// 	return (
// 		<div className='tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
// 			<img alt='robot' src={`https://robohash.org/${id}?200*200`}/>
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 	);
// }

const Card = ({city, starttime, endtime, condition, icon}) => {
	return (
		<div className='tc bg-light-blue dib br3 pd3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{city}</h2>
				<img alt='weather' className='w4 h3' src={icon < 10 ?`https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/0${icon}.svg`
				:`https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${icon}.svg`}/>
				<p>{starttime.substring(5,10)}</p>
				<p>{starttime.substring(11,16)}-{endtime.substring(11,16)}</p>
				<p>{condition}</p>
			</div>
		</div>
	);
}

export default Card;