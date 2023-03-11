import {Integration} from "../../types/Integration";
import {CDNLink} from "../../data/consts";

export class ProfileIntegrations {
    public titledConnections: Integration[] = []
    public untitledConnections: Integration[] = []

    public sort() {
        this.titledConnections.sort()
        this.untitledConnections.sort()
    }

    public addIntegration(integration: Integration) {
        if (integration.title != undefined) {
            let toPush: Integration = {
                title: integration.title,
                label: integration.label,
                id: integration.id,
                imgPath: integration.imgPath,
                link: integration.link
            }
            this.titledConnections.push(toPush)
        }
        else {
            let toPush: Integration = {
                label: integration.label,
                id: integration.id,
                imgPath: integration.imgPath,
                link: integration.link
            }
            this.untitledConnections.push(toPush)
        }
        this.sort()
    }

    public parseArray(integrations: {label: string, imgPath: string, title?: string, link?: string}[]) {
        integrations.forEach((integration) => {
            let toAdd: Integration  = {
                label: integration.label,
                imgPath: integration.imgPath,
                title: integration.title,
                id: getIdByLabel(integration.label),
                link: integration.link
            }

            this.addIntegration(toAdd)
        })
    }

    private createTitledIntegration(integration: Integration) {
        let linker = (<></>)
        if (integration.link != undefined) {
            linker = (
                <a href={integration.link} className={'conn-linker'}><img src={CDNLink + 'svg/icons/ui/linker.svg'}></img></a>
            )
        }
        return (
            <div aria-label={integration.label} role={'button'} className={'conn-container titledConnectionContainer'}>
                <img className={'conn-icon'} src={CDNLink + 'svg/icons/social/' + integration.imgPath}/>
                <p>{integration.title}</p>
                {linker}
            </div>
        )
    }

    private createUntitledIntegration(integration: Integration) {
        return (
            <div aria-label={integration.label} role={'button'} className={'conn-container'}>
                <a href={integration.link}>
                    <img className={'conn-icon'} src={CDNLink + 'svg/icons/social/' + integration.imgPath}/>
                </a>
            </div>
        )
    }

    public createLinksElement() {
        if (this.titledConnections.length > 0 && this.untitledConnections.length > 0) {
            return (
                <div className={'profile-connections'}>
                    <div className={'titledConnections'}>
                        {this.titledConnections.map((integration) => (
                            this.createTitledIntegration(integration)
                        ))}
                    </div>
                    <div className={'integrationTab untitledConnections'}>
                        {this.untitledConnections.map((integration) => (
                            this.createUntitledIntegration(integration)
                        ))}
                    </div>
                </div>
            )
        }
        else if (this.titledConnections.length > 0 && this.untitledConnections.length == 0) {
            return (
                <div className={'profile-connections'}>
                    <div className={'titledConnections'}>
                        {this.titledConnections.map((integration) => (
                            this.createTitledIntegration(integration)
                        ))}
                    </div>
                </div>
            )
        }
        else if (this.titledConnections.length == 0 && this.untitledConnections.length > 0) {
            return (
                <div className={'profile-connections'}>
                    <div className={'untitledConnections'}>
                        {this.untitledConnections.map((integration) => (
                            this.createUntitledIntegration(integration)
                        ))}
                    </div>
                </div>
            )
        }
    }
}

function getIdByLabel(label: string) {
    switch (label.toLowerCase()) {
        case 'youtube': return 'youtube'
        case 'telegram': return 'telegram'
        case 'github': return 'github'
        case 'discord': return 'discord'
        case 'ko-fi': return 'kofi'
        case 'patreon': return 'patreon'
        case 'boosty': return 'boosty'
        case 'twitch': return 'twitch'
    }
    return 'other'
}

