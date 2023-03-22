const crypto = require('crypto');
const argon2 = require('argon2');

import {users} from "./users";

// Define a function to generate unique IDs
const generateId = () => crypto.randomBytes(16).toString('hex');

// Iterate through the list of users and add a unique ID to each
for (const user of users) {
    user.id = generateId();
}

// Iterate through the list of users and hash the passwords using Argon2
for (const user of users) {
    const password = user.password;
    const salt = crypto.randomBytes(16);

    const argon2Hash = await argon2.hash(password, {salt});
    user.password = {
        argon2: argon2Hash
    };
}

// Display the modified list of users
console.log(users);