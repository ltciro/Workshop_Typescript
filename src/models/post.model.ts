import moment  from 'moment';

type section = 
	| "Entretainment"
	| "International" 
	| "Politics" 

export class Post {
	id: number;
	title: string;
	headline: string;
	date: moment.Moment;
	content: string;
	section: section;
}
