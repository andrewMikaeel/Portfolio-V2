import { IconDefinition } from '@fortawesome/fontawesome-common-types';
export class Education {
    constructor(
        public header:string,
        public  description: string,
        public selected: boolean,
        public id: number,
        public icon: IconDefinition,
        public points?: Array<string>
    ) {}
}