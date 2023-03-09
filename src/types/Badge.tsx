import {render} from "react-dom";
import ReactDOM from "react-dom/client";

export class Badge {
    public label: string = 'Unnamed'
    public imgPath: string = 'collaborator.svg'
    public id: string = 'other'
    public onClickEvent: string = 'openUrl'

    public url?: string = 'https://www.youtube.com/watch?v=WmjbiWorNUo'

    private labelShown: boolean = false

    private openURL() {
        console.log(`openURL ran at ${this.label}`)
        window.open(this.url)
    }

    private showNotification() {
        console.log(`showNotification ran at ${this.label}`)
        window.alert('Tested!')
    }

    public onClick() {
        switch (this.onClickEvent) {
            case 'openUrl':
                this.openURL()
                break
            case 'showNotification':
                this.showNotification()
                break
        }
    }

    public showLabel(rect: DOMRect, label: string) {
        
    }


}