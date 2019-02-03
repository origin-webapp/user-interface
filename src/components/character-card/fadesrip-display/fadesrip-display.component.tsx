import * as React from 'react';

import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from 'react-icons/gi';



export class FadesripDisplayComponent extends React.Component {

  public render() {
    return (

      <div id="fadesrip-container">
        <div className="flex-col">
          <GiMailedFist className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiRunningShoe className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiPocketBow className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiHeartBeats className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiWeightLiftingUp className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiJigsawPiece className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiPsychicWaves className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
        <div className="flex-col">
          <GiSheikahEye className="fadesrip-icon" />
          <p>
            20
              </p>
        </div>
      </div>
    );
  }
}

