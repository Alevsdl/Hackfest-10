import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

// const color = hsl($hue % 360}deg 39% 70%)

export function Marcadores() {
  const [hue, setHue] = useState(0);

  return (
    <Map
      height={300}
      defaultCenter={[14.844623950713178, -91.52317425152974]}
      defaultZoom={11}
    >
      <Marker
        width={50}
        anchor={[14.842016686771387, -91.51708397510988]}
        color={'green'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.834535546698815, -91.51828772752644]}
        color={'red'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.833487999079466, -91.5186283419088]}
        color={'brown'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.847686612719752, -91.53454557360092]}
        color={'violet'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.846271720405818, -91.53361131651893]}
        color={'orange'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.844249151589421, -91.51923474248738]}
        color={'pink'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.836619312176996, -91.51767568731938]}
        color={'purple'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.838047206806657, -91.51878302536157]}
        color={'blue'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.83083901232468, -91.50269711492624]}
        color={'magenta'}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[14.836624202952938, -91.5263891591346]}
        color={'green'}
        onClick={() => setHue(hue + 20)}
      />
    </Map>
  );
}

export default Marcadores;
