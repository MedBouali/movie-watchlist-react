import { db } from "./config"
import {
    collection,
    doc,
    setDoc,
    deleteDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore"

export const addToWatchlist = async (userId, media) => {
    const ref = doc(db, "users", userId, "watchlist", media.id.toString())

    const mediaToSave = {
        id: media.id,
        title: media.title || media.name || "Untitled",
        poster_path: media.poster_path || null,
        media_type: media.title ? "movie" : "tv",
        overview: media.overview || "",
        vote_average: media.vote_average ?? 0,
        release_date: media.release_date || media.first_air_date || "",
        genre_ids: media.genre_ids || [],
        watched: false,
        addedAt: new Date(),
    }

    await setDoc(ref, mediaToSave, { merge: true })
}

export const removeFromWatchlist = async (userId, movieId) => {
    const ref = doc(db, "users", userId, "watchlist", movieId.toString())
    await deleteDoc(ref)
}

export const toggleWatched = async (userId, mediaId, watched) => {
    const ref = doc(db, "users", userId, "watchlist", mediaId.toString())

    await updateDoc(ref, {
        watched: !watched
    })
}

export const getWatchlist = async (userId) => {
    const ref = collection(db, "users", userId, "watchlist")
    const snapshot = await getDocs(ref)

    return snapshot.docs.map(doc => doc.data())
}