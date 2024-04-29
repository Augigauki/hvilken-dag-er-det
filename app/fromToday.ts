const fromToday = (currDate: Date, day: Date) => {
    const timeDiff = currDate.getTime() - day.getTime();
    console.log(timeDiff / (1000 * 3600 * 24))
	const daysDiff = Math.trunc(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

export default fromToday;