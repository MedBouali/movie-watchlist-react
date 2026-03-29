import { auth } from "./config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"

export async function register(email, password) {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
    return userCredential.user
}

export async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    return userCredential.user
}

export async function logout() {
    await signOut(auth)
}

export function subscribeToAuthChanges(callback) {
    return onAuthStateChanged(auth, callback)
}