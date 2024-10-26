export function formatDate(date: Date): string {
	const weekday = date.toLocaleString('en-US', { weekday: 'long' });
	const month = date.toLocaleString('en-US', { month: 'short' });
	const dayOfMonth = date.getDate();
	const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

	// const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

	// return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix}, ${time} ${timeZone}`;
	return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix}, ${time}`;
}

function getOrdinalSuffix(day: number): string {
	if (day >= 11 && day <= 13) {
		return 'th';
	}
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}
