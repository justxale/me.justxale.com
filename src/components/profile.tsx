import '../css/profile.css'
import '../css/labels.css'
import {badgesArray, connections, CDNLink} from "../data/consts";
import {ProfileIntegrations} from "../classes/profile/ProfileIntegrations";
import {ProfileBadges} from "../classes/profile/ProfileBadges";

function Profile() {
    const links = new ProfileIntegrations
    links.parseArray(connections)

    const badges = new ProfileBadges
    badges.parseArray(badgesArray)

    return (
        <div className="profile-container">
            <div className={'profile'} id={'profile'}>
                <div className={'profile-images'}>
                    <div className={'profile-avatar'}>
                        <img src={CDNLink + 'png/profile/avatar.png'}></img>
                    </div>
                    <div id={'badgeLabels'}>

                    </div>
                    {badges.createBadgesElement()}
                </div>
                <div className={'profile-info'}>
                    <div className={'tab profileNick'}>
                        <div className={'profileNickname'}>
                            <span>JustXale</span>
                        </div>
                        <div className={'profileStatus'}>
                            <span>Dancin' thru it all~</span>
                        </div>
                    </div>
                    <div className={'tab profileAbout'}>
                        <h4>About</h4>
                        <p>Xale Justy | He/Him<br/>Web/Python Dev </p>
                    </div>
                    <div className={'tab profileConnections'}>
                        <h4>Links</h4>
                        {links.createLinksElement()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
