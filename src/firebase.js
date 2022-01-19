/* eslint-disable eol-last */
/* eslint-disable indent */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyB_5W4gnYpsP8Otp64OALO1dK0DD-tzi2w',
    authDomain: 'cambialo-eoi.firebaseapp.com',
    projectId: 'cambialo-eoi',
    storageBucket: 'cambialo-eoi.appspot.com',
    messagingSenderId: '397315851228',
    appId: '1:397315851228:web:22a4bbcedd0926fb768519',
    measurementId: 'G-K1J4FQQSB7'
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
export const auth = getAuth(app)
export const storage = getStorage(app)