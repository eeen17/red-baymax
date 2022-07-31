import {
    addDoc,
    collection,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

const usersCollectionRef = collection(db, "users");

export type User = UserInfo & {
    id: string;
};

type UserInfo = {
    name: string;
    age: number;
};

// firebase CRUD functions:

async function fetchUsers() {
    const data = await getDocs(usersCollectionRef);
    // automatically adds ID by fetching from firebase
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as User));
}

async function createUser(user: UserInfo) {
    if (user.age != 0 && user.name != "")
        await addDoc(usersCollectionRef, { age: user.age, name: user.name });
    else throw "Invalid User";
}

async function updateUserAge(id: string, age: number) {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { age: age + 1 });
}

async function deleteUser(id: string) {
    const userDoc = doc(db, "users", id);
    deleteDoc(userDoc);
}

export { fetchUsers, createUser, updateUserAge, deleteUser };
