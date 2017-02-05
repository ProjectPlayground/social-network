export class User {
    $key?: string;
    email: string;
    name: string;
    username: string;
    feed?:string[];
    password?: string;
    followers?: string[];
    following?:string[];
}