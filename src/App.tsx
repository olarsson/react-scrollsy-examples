import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import Overlay from "./Overlay";

import { BasicProgress } from "./spring-components/BasicProgress";
import { SvgAnimation } from "./spring-components/SvgAnimation";

import { useRef, useState } from "react";

function App() {
  const refPageProgress = useRef(null);
  const refElemProgress = useRef(null);
  const refSvgAnimation = useRef(null);
  const refSideElementConnection = useRef(null);

  const [overlay, toggleOverlay] = useState(false);

  return (
    <>
      <Overlay active={overlay} />

      <ScrollTrackerDocument resizeThrottle={150}>
        {({ scrollData }: IScrollData) => {
          return (
            <>
              <button
                className='btn-toggle-overlay'
                onClick={() => toggleOverlay(!overlay)}>
                Toggle overlay
              </button>

              <ScrollTracker
                scrollData={scrollData}
                elem={refPageProgress}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "doc",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <BasicProgress
                    progress={scrollObject.progress}
                    ref={refPageProgress}
                  />
                )}
              </ScrollTracker>

              <ScrollTracker
                scrollData={scrollData}
                elem={refSvgAnimation}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                  offsetTop: {
                    distance: 25,
                    unit: "%",
                    basedOn: "vp",
                  },
                  offsetBottom: {
                    distance: -200,
                    unit: "px",
                    basedOn: "",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <SvgAnimation
                    progress={scrollObject.progress}
                    ref={refSvgAnimation}
                  />
                )}
              </ScrollTracker>

              <ScrollTracker
                scrollData={scrollData}
                elem={refElemProgress}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}
                onStart={() => {
                  console.log(
                    "scroll progress begins for this element (offset affects this)"
                  );
                }}
                onEnd={() => {
                  console.log(
                    "scroll progress ends for this element (offset affects this)"
                  );
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <div className='elem-elem1-progress' ref={refElemProgress}>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}></div>
                    <strong>I do NOT use react-spring</strong>
                    <p>
                      I track the scroll progress of this element in relation to
                      the viewport.
                    </p>
                    <h2>progress: {scrollObject.progress}</h2>
                  </div>
                )}
              </ScrollTracker>

              <div
                className='elem-elem3-progress'
                ref={refSideElementConnection}>
                <p>
                  Something else tracks my scroll progress (the fixed element to
                  the right).
                </p>
              </div>

              <ScrollTracker
                scrollData={scrollData}
                elem={refSideElementConnection}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <div className='elem-side'>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}></div>
                    <strong>I do NOT use react-spring</strong>
                    <p>
                      I reflect the scroll progress of another element (the
                      green one), not my own.
                    </p>
                    <h2>progress: {scrollObject.progress}</h2>
                  </div>
                )}
              </ScrollTracker>
            </>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default App;
