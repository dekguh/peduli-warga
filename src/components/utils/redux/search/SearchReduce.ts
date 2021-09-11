import { UPDATE_SEARCH_DONATION_DISTRICT, UPDATE_SEARCH_DONATION_PROVINCE } from "./SearchAction";

export type TInitStateSearch = {
    donationProvince: string;
    donationDistrict: string;
};

export type TAction = {
    type: string;
    payload: string;
}

type TSearchReduce = (state: TInitStateSearch, action: TAction) => void

export interface IMapDispatch {
    updateSearchProvinceAct: (search: string) => void,
    updateSearchDistrictAct: (search: string) => void,
}

const initState: TInitStateSearch = {
    donationProvince: '',
    donationDistrict: '',
}

export default function SearchReducer<TSearchReduce>(state = initState, action: TAction) {
    switch(action.type) {
        case UPDATE_SEARCH_DONATION_PROVINCE:
            return {
                ...state,
                donationProvince: action.payload
            }
        case UPDATE_SEARCH_DONATION_DISTRICT:
            return {
                ...state,
                donationDistrict: action.payload
            }
        default:
            return state
    }
}