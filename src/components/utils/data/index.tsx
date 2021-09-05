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
        text: 'Dokter',
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