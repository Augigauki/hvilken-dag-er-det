'use client'

import styles from './page.module.css';
import computus from './calcEaster';
import {addDays, addHours} from './addDays';
import fromToday from './fromToday';
import DayViewer from './(components)/dayViewer';

const Page = ({}) => {
	let currDate = new Date();
	currDate = addHours(currDate, 2);
	let christmas = new Date(`24 Dec ${currDate.getFullYear()} 00:00:00`);
	if (currDate < christmas) {
		christmas = new Date(`24 Dec ${currDate.getFullYear() - 1} 00:00:00`);
	}
	let newYears = new Date(`31 Dec ${currDate.getFullYear()} 00:00:00`);
	if(currDate < newYears){
		newYears = new Date(`31 Dec ${currDate.getFullYear()-1} 00:00:00`)
	}
	let easter = computus(currDate.getFullYear());
	if (currDate < easter){
		easter = computus(currDate.getFullYear()-1);
	}
	
	easter = addDays(easter, 6);
	let pentecost = easter;
	pentecost = addDays(pentecost, 49);
	if(currDate < pentecost){
		let prevEaster = computus(currDate.getFullYear()-1);
		prevEaster = addDays(prevEaster, 6);
		pentecost = addDays(prevEaster, 49);
	}
	
	const daysSinceChristmas = fromToday(currDate, christmas);
	const daysSinceNewYears = fromToday(currDate, newYears);
	const daysSinceEaster = fromToday(currDate, easter);
	const daysSincePentecost = fromToday(currDate, pentecost);

	return (
		<div className={styles.page}>
			<DayViewer
				days={daysSinceChristmas}
				day={'juledag'}
			>
				Juledag
			</DayViewer>
			<DayViewer
				days={daysSinceNewYears}
				day={'nyttårsdag'}
			>
				Nyttårsdag
			</DayViewer>
			<DayViewer
				days={daysSinceEaster}
				day={'påskedag'}
			>
				Påskedag
			</DayViewer>
			<DayViewer
				days={daysSincePentecost}
				day={'pinsedag'}
			>
				Pinsedag
			</DayViewer>
		</div>
	);
};

export default Page;
