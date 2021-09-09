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
}>

export type TDataQuickLink = Array<{
    text: string;
    url: string;
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
        organization: 'Yayasan Kasih',
        description: 'tempat pembagian sembako berlokasi di jalan bypass ngurah rai nusa dua'
    },
    {
        id: 2,
        lang: -8.783408,
        long: 115.166612,
        organization: 'Yayasan Kasih',
        description: 'tempat pembagian sembako berlokasi di jalan uluwatu jimbaran'
    },
    {
        id: 3,
        lang: -8.716160,
        long: 115.210952,
        organization: 'Yayasan Kasih',
        description: 'tempat pembagian sembako berlokasi di jalan uluwatu jimbaran'
    },
    {
        id: 4,
        lang: -8.704907,
        long: 115.183811,
        organization: 'Yayasan Kasih',
        description: 'tempat pembagian sembako berlokasi di jalan imam bonjol'
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