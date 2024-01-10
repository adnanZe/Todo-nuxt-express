import User from '../models/user';

const users: User[] = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

export const getUsers = () => users;

export const createUser = (user: User) => {
    const newUser = { ...user };
    users.push(newUser);
    return newUser;
};

export const getUserByUsername = (username: string) => {
    return users.find(user => user.username === username);
};

export const updateUser = (userId: number, updatedUser: User) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    }
    return undefined;
};

export const deleteUser = (userId: number) => {
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
    }
};