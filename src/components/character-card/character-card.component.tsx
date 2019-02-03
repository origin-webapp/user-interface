import * as React from 'react';

import { FadesripDisplayComponent } from './fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from './powers-display/powers-display.component';



export class CharacterCardComponent extends React.Component {

  public render() {
    return (
      <div id="character-card" className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Character</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Abilities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" aria-disabled="true">About</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <FadesripDisplayComponent />
        </div>
        <div className="card-body">
          <PowersDisplayComponent />
        </div>
      </div>
    );
  }
}

