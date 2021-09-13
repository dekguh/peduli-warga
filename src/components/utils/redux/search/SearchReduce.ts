import { UPDATE_SEARCH_CEKCOVID_DISTRICT, UPDATE_SEARCH_CEKCOVID_PROVINCE, UPDATE_SEARCH_DONATION_DISTRICT, UPDATE_SEARCH_DONATION_PROVINCE, UPDATE_SEARCH_VAKSINASI_DISTRICT, UPDATE_SEARCH_VAKSINASI_PROVINCE } from "./SearchAction";

export type TInitStateSearch = {
    donationProvince: string;
    donationDistrict: string;
    vaksinasiProvince: string;
    vaksinasiDistrict: string;
    cekcovidProvince: string;
    cekcovidDistrict: string;
};

export type TAction = {
    type: string;
    payload: string;
}

export interface IMapDispatch {
    updateSearchProvinceAct: (search: string) => void,
    updateSearchDistrictAct: (search: string) => void,
}

const initState: TInitStateSearch = {
    donationProvince: '',
    donationDistrict: '',
    vaksinasiProvince: '',
    vaksinasiDistrict: '',
    cekcovidProvince: '',
    cekcovidDistrict: ''
}

export default function SearchReducer(state = initState, action: TAction) {
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
        case UPDATE_SEARCH_VAKSINASI_PROVINCE:
            return {
                ...state,
                vaksinasiProvince: action.payload
            }
        case UPDATE_SEARCH_VAKSINASI_DISTRICT:
            return {
                ...state,
                vaksinasiDistrict: action.payload
            }
        case UPDATE_SEARCH_CEKCOVID_PROVINCE:
            return {
                ...state,
                cekcovidProvince: action.payload
            }
        case UPDATE_SEARCH_CEKCOVID_DISTRICT:
            return {
                ...state,
                cekcovidDistrict: action.payload
            }
        default:
            return state
    }
}