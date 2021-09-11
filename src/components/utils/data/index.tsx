import LogoOrganization from '../../../images/logo/organization-1.svg'
import dataIndonesiaJSON from './indonesia.json'


export type IWebInfo = {
    title: string;
    phone: string;
    phoneAmbulance: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    openDay: string;
    openTime: string;
    location: string;
}

export type IDataMenuNav = Array<{
    text: string;
    url: string;
    path: string;
    active: boolean;
}>

export type IDataDonationLocation = Array<{
    id: number;
    lang: number;
    long: number;
    organization: string;
    description: string;
    openTime: string;
    province: string;
    district: string;
    subdistrict: string;
    logo: string;
}>

export type TDataQuickLink = Array<{
    text: string;
    url: string;
}>

export type TGetListProvince = () => Array<{}>
export type TGetListDistrict = (province?: string) => Array<string>

export const webInfo: IWebInfo = {
    title: 'Peduli Warga',
    phone: '(0361) 123456',
    phoneAmbulance: '+62 123-456-7890',
    email: 'service@dekguh.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    openDay: 'Senin - Minggu',
    openTime: '08.00 Wita - 12.00 Wita',
    location: 'Nusa Dua, Bali'
}

export const dataMenuNav: IDataMenuNav = [
    {
        text: 'Beranda',
        url: '/',
        path: '/',
        active: false,
    },
    {
        text: 'Cek Covid',
        url: '/cek-covid',
        path: 'cek-covid',
        active: false,
    },
    {
        text: 'Vaksinasi',
        url: '/vaksinasi',
        path: 'vaksinasi',
        active: false,
    },
    {
        text: 'Donasi',
        url: '/donasi',
        path: 'donasi',
        active: false,
    },
    {
        text: 'Kontak Kami',
        url: '/kontak',
        path: 'kontak',
        active: false,
    }
]

export const dataDonationLocation: IDataDonationLocation = [
    {
        id: 1,
        lang: -8.792710,
        long: 115.214958,
        organization: 'Bali Jengah (posko 1)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'badung',
        subdistrict: 'kuta selatan',
        description: 'tempat pembagian sembako berlokasi di jalan bypass ngurah rai nusa dua',
        logo: LogoOrganization
    },
    {
        id: 2,
        lang: -8.783408,
        long: 115.166612,
        organization: 'Bali Jengah (posko 2)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'badung',
        subdistrict: 'kuta selatan',
        description: 'tempat pembagian sembako berlokasi di jalan uluwatu jimbaran',
        logo: LogoOrganization
    },
    {
        id: 3,
        lang: -8.716160,
        long: 115.210952,
        organization: 'Bali Jengah (posko 3)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar selatan',
        description: 'tempat pembagian sembako berlokasi di jalan bypass pesanggaran',
        logo: LogoOrganization
    },
    {
        id: 4,
        lang: -8.704907,
        long: 115.183811,
        organization: 'Bali Jengah (posko 4)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar barat',
        description: 'tempat pembagian sembako berlokasi di jalan imam bonjol',
        logo: LogoOrganization
    },
    {
        id: 5,
        lang: -8.673115,
        long: 115.232579,
        organization: 'Bali Jengah (posko 5)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar timur',
        description: 'tempat pembagian sembako berlokasi di jalan puputan',
        logo: LogoOrganization
    },
    {
        id: 6,
        lang: -8.638966,
        long: 115.150141,
        organization: 'Bali Jengah (posko 6)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'badung',
        subdistrict: 'kuta utara',
        description: 'tempat pembagian sembako berlokasi di jalan raya canggu',
        logo: LogoOrganization
    },
    {
        id: 7,
        lang: -8.638756,
        long: 115.202266,
        organization: 'Bali Jengah (posko 7)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar utara',
        description: 'tempat pembagian sembako berlokasi di jalan gatsu',
        logo: LogoOrganization
    },
    {
        id: 8,
        lang: -8.665420,
        long: 115.189572,
        organization: 'Bali Jengah (posko 8)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar barat',
        description: 'tempat pembagian sembako berlokasi di jalan mahendradatta',
        logo: LogoOrganization
    },
    {
        id: 9,
        lang: -8.701550,
        long: 115.231354,
        organization: 'Bali Jengah (posko 9)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'denpasar',
        subdistrict: 'denpasar selatan',
        description: 'tempat pembagian sembako berlokasi di jalan sidakarya',
        logo: LogoOrganization
    },
    {
        id: 10,
        lang: -8.829049,
        long: 115.174635,
        organization: 'Bali Jengah (posko 10)',
        openTime: '10.00 - 13.00',
        province: 'bali',
        district: 'badung',
        subdistrict: 'kuta selatan',
        description: 'tempat pembagian sembako berlokasi di jalan dharma wangsa',
        logo: LogoOrganization
    }
]

export const dataQuickLink: TDataQuickLink = [
    {
        text: 'Tes Covid',
        url: '#'
    },
    {
        text: 'Donasi',
        url: '#'
    },
    {
        text: 'Vaksinasi',
        url: '#'
    }
]

export function getListProvince<TGetListProvince>() {
    const list = dataIndonesiaJSON.map(data => data.data.province)
    return list
}

export function getListDistrict<TGetListDistrict>(province?: string) {
    const list = dataIndonesiaJSON.find(data => data.data.province.toLowerCase() === province?.toLowerCase())
    return list?.data.district
}