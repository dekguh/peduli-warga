import { TAction } from "./SearchReduce"

export const UPDATE_SEARCH_DONATION_PROVINCE = 'UPDATE_SEARCH_DONATION_PROVINCE'
export const UPDATE_SEARCH_DONATION_DISTRICT = 'UPDATE_SEARCH_DONATION_DISTRICT'

export const UPDATE_SEARCH_VAKSINASI_PROVINCE = 'UPDATE_SEARCH_VAKSINASI_PROVINCE'
export const UPDATE_SEARCH_VAKSINASI_DISTRICT = 'UPDATE_SEARCH_VAKSINASI_DISTRICT'

export function updateDonationSearchProvince (search: string) : TAction {
    return {
        type: UPDATE_SEARCH_DONATION_PROVINCE,
        payload: search
    }
}

export function updateDonationSearchDistrict (search: string) : TAction {
    return {
        type: UPDATE_SEARCH_DONATION_DISTRICT,
        payload: search
    }
}

export function updateVaksinasiSearchProvince (search: string) : TAction {
    return {
        type: UPDATE_SEARCH_VAKSINASI_PROVINCE,
        payload: search
    }
}

export function updateVaksinasiSearchDistrict (search: string) : TAction {
    return {
        type: UPDATE_SEARCH_VAKSINASI_DISTRICT,
        payload: search
    }
}