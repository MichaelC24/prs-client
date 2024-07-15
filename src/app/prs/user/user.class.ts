export class User { //all of the property names need to match what you have in c# but the first letter must be lowercase no matter what you have in c#
    id: number = 0; //id is the name number declares the variable type make sure to have the : to seperate the name from the variable type decleration
    username: string = "";
    password: string = "";
    firstname: string = "";
    lastname: string = "";
    phone: string | null = null; //since this is nullable it has | null the "|" means OR
    email: string | null = null;
    isReviewer: boolean  = false;
    isAdmin: Boolean = false; 
}