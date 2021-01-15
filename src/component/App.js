import React from 'react';

import BirthTemplate from "./BirthTemplate";
import TimeBox from "./TimeBox";
import JuneSlick from "./JuneSlick";
import Congrate from "./Congrate";

const App = () => {
  return (
    <div>
      <BirthTemplate>
        <TimeBox />
        <JuneSlick />
        <Congrate />
      </BirthTemplate>
    </div>
  );
}

export default App;
