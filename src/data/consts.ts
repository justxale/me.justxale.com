import Discord from '../icons/social/discord.svg'
import YouTube from '../icons/social/youtube.svg'
import Github from '../icons/social/github.svg'
import Telegram from '../icons/social/telegram.svg'
import Boosty from '../icons/social/boosty.svg'
import Twitch from '../icons/social/twitch.svg'
import Other from '../icons/social/other.svg'
import Contributor from '../icons/badges/contributor.svg'
import Creator from '../icons/badges/creator.svg'
import Verified from '../icons/badges/verified.svg'
import Supporter from '../icons/badges/supporter.svg'



export const badgesArray = [
    {
        label: 'Site Developer',
        img: Creator,
        id: 'developer',
        onClickEvent: 'showNotification',
    },
    {
        label: 'Verified',
        img: Verified,
        id: 'verified',
        onClickEvent: 'showNotification',
    },
    {
        label: 'Supporter',
        img: Supporter,
        id: 'supporter',
        onClickEvent: 'openUrl',
    },
    {
        label: 'Contributor',
        img: Contributor,
        id: 'collaborator',
        onClickEvent: 'openUrl',
    },
]

export const connections = [
    {
        label: 'Discord',
        img: Discord,
        title: 'JustXale#1124',
    },
    {
        label: 'YouTube',
        img: YouTube,
        title: '@JustXale',
        link: 'https://youtube.com/@JustXale',
    },
    {
        label: 'Github',
        img: Github,
        link: 'https://github.com/JustXale',
    },
    {
        label: 'Telegram',
        img: Telegram,
        link: 'https://t.me/justficial',
    },
    {
        label: 'Boosty',
        img: Boosty,
        link: 'https://boosty.to/xalethecat',
    },
    /*{
        label: 'Ko-Fi',
        imgPath: 'ko-fi.svg',
        link: '',
    },*/
    /*{
        label: 'Patreon',
        imgPath: 'patreon.svg',
        link: '',
    },*/
    {
        label: 'Twitch',
        img: Twitch,
        link: 'https://twitch.com/justyxale',
    },
    {
        label: 'other',
        img: Other,
        title: 'My Site',
        link: 'https://justxale.com',
    },
    /*{
        label: 'other',
        imgPath: 'corpora.svg',
        title: 'My Projects',
        link: 'https://justxale.com/projects',
    },*/ // future xd
]

export const CDNLink: string = 'https://cdn.justxale.com/'