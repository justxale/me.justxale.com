import {Badge} from "../../types/Badge";
import React from "react";
import {CDNLink} from "../../data/consts";

export class ProfileBadges {
    public profileBadges: Badge[] = []

    public addBadge(badge: Badge) {
        this.profileBadges.push(badge)
    }

    public parseArray(arr: {label: string, imgPath: string, id: string, onClickEvent: any}[]) {
        arr.forEach((badge) => {
            let badgeToAdd = new Badge
            badgeToAdd.label = badge.label
            badgeToAdd.imgPath = badge.imgPath
            badgeToAdd.id = badge.id
            badgeToAdd.onClickEvent = badge.onClickEvent

            this.addBadge(badgeToAdd)
        })
    }

    public createBadgesElement() {
        return (
            <div className={'profile-badges'}>
                {this.profileBadges.map((badge) => (
                    <div onMouseEnter={(e) => this.onMouseEnter(badge, e)}
                         onMouseOut={this.onMouseOut}
                         onClick={(e) => this.onClick(badge, e)}
                         
                         aria-label={badge.label}
                         role={'button'}
                         className={'badgeContainer'}
                         id={badge.id}
                    >
                        <img className={'badge-icon'} src={CDNLink + 'svg/icons/badges/' + badge.imgPath}/>
                    </div>
                ))}
            </div>
        )
    }

    private onMouseEnter = (badge: Badge, e: any) => {
        console.log(`entered at ${badge.label}, ${badge.onClickEvent}`)
        const elem = document.getElementById(badge.id)
        if (elem !== null) {
            const rect = elem.getBoundingClientRect()
            badge.showLabel(rect, badge.label)
        } else {
            console.log('Invalid id')
        }

    }

    private onMouseOut = () => (
        console.log('out')
    )

    private onClick = (badge: Badge, e: any) => {
        badge.onClick()
        console.log('clicked')
    }
}