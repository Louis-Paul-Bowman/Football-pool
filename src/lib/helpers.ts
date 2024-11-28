export function formatDate(d: Date): string {
	// Drizzle dates are being fucky, wrap in a new Date before using
	let date = new Date(d);
	const weekday = date.toLocaleString('en-US', { weekday: 'long' });
	const month = date.toLocaleString('en-US', { month: 'short' });
	const dayOfMonth = date.getDate();
	const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

	// const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

	// return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix}, ${time} ${timeZone}`;
	return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix}, ${time}`;
	// return `${weekday} ${time}`;
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
	// Drizzle dates are being fucky, wrap in a new Date before using
	return [...games].sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
			throw new Error('Invalid date format');
		}

		return dateA.getTime() - dateB.getTime();
	});
}

export function selectable(weekStart: string | Date): boolean {
	// Drizzle dates are being fucky, wrap in a new Date before using
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


export function parseCookies() {
	const cookies: Record<string, string> = {};
	document.cookie.split(';').forEach(cookie => {
	  const [key, value] = cookie.trim().split('=');
	  cookies[key] = decodeURIComponent(value);
	});
	return cookies;
  }

export function checkCookie(name:string): string | undefined {
	const cookies = parseCookies();
	return cookies[name]
  }