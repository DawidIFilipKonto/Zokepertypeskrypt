import {User} from "../models/User";


class UserService {
    private users: Array<User> = [
        { id: 1, name: "Simba,", species: "Lion", age: 5, isEndangered: true, habitat: "Savanna"},
        { id: 2, name: "Panda,", species: "Bear", age: 51, isEndangered: false, habitat: "Forest"},
    ]


    getAllUsers(): Array<User> {
        return this.users;
    }

    createUser(name:string, species:string, age: number, isEndangered: boolean, habitat: string): User | null {
        const newUsers: User = {id: this.users.length+1, name, species, age, isEndangered, habitat}
        this.users.push(newUsers);
        return newUsers;
    }

    updateUser(id:number, name:string, species:string, age: number, isEndangered: boolean, habitat: string): User | null{
        const userIndex: number = this.users.findIndex(user => user.id === id)
        if (userIndex === -1) {
            return null;
        }

        this.users[userIndex] = {...this.users[userIndex], name, species, age, isEndangered, habitat};

        return  this.users[userIndex]
    }

    getUserById(userId: number): User | null {
        const userIndex: number = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return null;
        }
        return this.users[userIndex];
    }

}

export const userService = new UserService();