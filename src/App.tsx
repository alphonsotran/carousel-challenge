import React from "react";
import CarouselContainer from "./containers/CarouselContainer";

const SAMPLE_IMAGES = [
  "https://www.flickr.com/photos/cameralabs/38054606355",
  "https://imaging.nikon.com/lineup/dslr/df/sample.htm",
];

function App() {
  return (
    <div className="App">
      <CarouselContainer images={SAMPLE_IMAGES} />
    </div>
  );
}

export default App;
