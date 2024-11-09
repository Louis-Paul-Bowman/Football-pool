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
interface DatedObject {
	date: string | Date;
}

export function chronologicalSort<T extends DatedObject>(games: T[]): T[] {
	return [...games].sort((a, b) => {
		const dateA = typeof a.date === 'string' ? new Date(a.date) : a.date;
		const dateB = typeof b.date === 'string' ? new Date(b.date) : b.date;

		if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
			throw new Error('Invalid date format');
		}

		return dateA.getTime() - dateB.getTime();
	});
}

export function selectable(weekStart: string | Date): boolean {
	let now = new Date(Date.now());
	let cutoffTime = new Date(weekStart);
	cutoffTime.setHours(cutoffTime.getHours() - 2);
	return now < cutoffTime;
}

// export function selectable(weekStart: string | Date): boolean {
// 	return true;
// }

export function unflattenWeeks<T extends { week: number }>(flat: T[]): Record<number, T[]> {
	let weeks: number[] = [];
	let unflattenedWeeks: Record<number, T[]> = {};

	flat.forEach((obj) => {
		if (!weeks.includes(obj.week)) {
			weeks.push(obj.week);
		}
	});
	weeks.sort((a, b) => a - b);
	weeks.forEach((week) => {
		unflattenedWeeks[week] = [];
	});

	flat.forEach((obj) => {
		unflattenedWeeks[obj.week].push(obj);
	});
	return unflattenedWeeks;
}
