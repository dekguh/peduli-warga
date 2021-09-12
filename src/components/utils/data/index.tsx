import LogoOrganization from '../../../images/logo/organization-1.svg'
import dataIndonesiaJSON from './indonesia.json'

import LogoRsSukaMiskin from '../../../images/vaksinasi/rs-suka-miskin.svg'
import LogoBadung from '../../../images/vaksinasi/logo-badung.png'
import LogoDenpasar from '../../../images/vaksinasi/logo-kota-denpasar.jpg'
import LogoPuskesmas from '../../../images/vaksinasi/logo-puskesmas.png'

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

export type TDataVaksinasiLocation = Array<{
    name: string;
    province: string;
    district: string;
    lang: number;
    long: number;
    description: string;
    quote: number;
    date: string;
    time: string;
    logo: string;
}>

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

export function getListProvince() : Array<string> {
    const list = dataIndonesiaJSON.map(data => data.data.province)
    return list
}

export function getListDistrict(province?: string) : Array<string> | undefined {
    const list = dataIndonesiaJSON.find(data => data.data.province.toLowerCase() === province?.toLowerCase())
    return list?.data.district
}

export const dataVaksinasiLocation: TDataVaksinasiLocation = [
    {
        name: 'RS. Suka Miskin',
        province: 'bali',
        district: 'badung',
        lang: -8.792072,
        long: 115.216641,
        description: 'tempat vaksinasi gratis untuk rakyat berlokasi di jalan bypass ngurah rai nusa dua',
        quote: 200,
        date: '26/9/2021',
        time: '09.00 Wita',
        logo: LogoRsSukaMiskin
    },
    {
        name: 'Puskesmas Kuta Selatan',
        province: 'bali',
        district: 'badung',
        lang: -8.803307,
        long: 115.222980,
        description: 'tempat vaksinasi gratis untuk rakyat berlokasi di jalan srikandi, kuta selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas Desa Kutuh',
        province: 'bali',
        district: 'badung',
        lang: -8.828867,
        long: 115.175001,
        description: 'tempat vaksinasi gratis berlokasi di jalan dharmawangsa, kuta selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas Jimbaran',
        province: 'bali',
        district: 'badung',
        lang: -8.771032,
        long: 115.174119,
        description: 'tempat vaksinasi gratis berlokasi di jalan ulun suwi, kuta selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas Ungasan',
        province: 'bali',
        district: 'badung',
        lang: -8.827131,
        long: 115.165855,
        description: 'tempat vaksinasi gratis berlokasi di jalan bali cliff, kuta selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas 1 Denpasar Selatan',
        province: 'bali',
        district: 'denpasar',
        lang: -8.704514,
        long: 115.217940,
        description: 'tempat vaksinasi gratis berlokasi di jalan pulau moyo, denpasar selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas Sidakarya',
        province: 'bali',
        district: 'denpasar',
        lang: -8.703288,
        long: 115.234225,
        description: 'tempat vaksinasi gratis berlokasi di jl. kertha winangun, denpasar selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    },
    {
        name: 'Puskesmas Panjer',
        province: 'bali',
        district: 'denpasar',
        lang: -8.683851,
        long: 115.226237,
        description: 'tempat vaksinasi gratis berlokasi di jl. tukad pakerisan, denpasar selatan',
        quote: 100,
        date: '29/9/2021',
        time: '09.00 Wita',
        logo: LogoPuskesmas
    }
]