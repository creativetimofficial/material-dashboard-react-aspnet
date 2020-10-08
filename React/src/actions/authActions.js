import {
    STORE_USER,
    USER_SIGNED_OUT,
    USER_EXPIRED,
    STORE_USER_ERROR,
    LOADING_USER
} from './types'
import store from "store";
import { loadUserFromStorage } from "../services/oauth";

export function storeUser(user) {
    return {
        type: STORE_USER,
        payload: user
    }
}

export function loadingUser() {
    return {
        type: LOADING_USER
    }
}

export function storeUserError() {
    return {
        type: STORE_USER_ERROR
    }
}

export function userExpired() {
    return {
        type: USER_EXPIRED
    }
}

export function userSignedOut() {
    localStorage.removeItem("access_token");
    loadUserFromStorage(store);
    return {
        type: USER_SIGNED_OUT
    }
}