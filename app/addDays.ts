export const addDays = (date: Date, days: number) => {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

export const addHours = (date: Date, hours: number) => {
    const result = new Date(date);
    result.setTime(result.getTime() + (hours*60*60*1000));
    return result;
}