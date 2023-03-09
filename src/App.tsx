import './css/media.css'
import {linktree} from "./consts/links";

function App() {
    return (
        <div className={'linktree'}>
            <div className={'profile'}>
                <img src={'https://cdn.justxale.com/png/profile/avatar.png'} id={'avatar'}/> <p id={'profile-name'}> JustXale</p>
            </div>
            <div className={'profile-desc'}>
                <p>Just another fluffy creator</p>
            </div>
            <div>
                <ul className={'links'}>
                    {linktree.map((tab, i) => (
                        <li key={i}>
                            <a href={tab.link} target={'_blank'}><img src={tab.icon_url}
                                                                      className={tab.class}/> {tab.title}</a>
                            <p id={'description'}>{tab.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default App
