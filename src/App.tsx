import './css/App.css'
import {linktree} from "./consts/links";

function App() {
  return (
      <div className={'linktree'}>
          <div className={'profile'}>
              <img src={'https://cdn.justxale.com/png/profile/avatar.png'} id={'avatar'}/> <p id={'profile-name'}> JustXale</p>
          </div>
          <p>Just another fluffy creator</p>
          <div>
              <ul className={'links'}>
                  {linktree.map((tab, i) => (
                      <li key={i}>
                          <a href={tab.link} target={'_blank'}><img src={tab.icon_url} id={'icon'} style={tab.style}/> {tab.title}</a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>

  )
}

export default App
