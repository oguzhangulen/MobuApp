import { City } from './City';
import { User } from './User';
import { Solution } from './Solution';
import { Comments } from './Comments';

export class Event {
    id:number;
    ImageUrl:string;
    UserId:number;
    Description:string;
    EventDate:Date;
    CityId:number;
    Up:number;
    City:City;
    User:User;
    Solution:Solution;
    Comments:Comments[];
}
