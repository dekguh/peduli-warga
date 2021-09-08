export type IWebInfo = {
    title: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    openDay: string;
    openTime: string;
}

export type IDataMenuNav = Array<{
    text: string;
    url: string;
    active: boolean;
}>

export type IDataDonationLocation = Array<{
    id: number;
    lang: number;
    long: number;
    organization: string;
    description: string;
}>

export const webInfo: IWebInfo = {
    title: 'Peduli Warga',
    phone: '(0361) 123456',
    email: 'service@dekguh.com',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    openDay: 'Senin - Minggu',
    openTime: '08.00 Wita - 12.00 Wita'
}

export const dataMenuNav: IDataMenuNav = [
    {
        text: 'Beranda',
        url: '#',
        active: false,
    },
    {
        text: 'Tentang Kami',
        url: '#',
        active: false,
    },
    {
        text: 'Vaksinasi',
        url: '#',
        active: false,
    },
    {
        text: 'Donasi',
        url: '#',
        active: false,
    },
    {
        text: 'Kontak Kami',
        url: '#',
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