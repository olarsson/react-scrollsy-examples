import { ScrollTrackerCustom, ScrollTracker } from "react-scrollsy";

import { useRef } from "react";
import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

function Overlay({ active = false }) {
  const refTest1 = useRef(null);

  return (
    <div className={`overlay overlay-${!active ? "inactive" : "active"}`} id='custom-scroll-container'>
      <ScrollTrackerCustom
        key={active.toString()} // forces a rerender of the tracker, use this if you hide the element with 'display: none'
        resizeThrottle={150}
        scrollingElement='#custom-scroll-container'>
        {({ scrollData }: IScrollData) => {
          return (
            <div className='App'>
              <p>Im an overlay, scroll tracking can also be performed inside of me.</p>

              <ScrollTracker
                scrollData={scrollData}
                elem={refTest1}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <div className='overlay-elem1-progress' ref={refTest1}>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}></div>
                    <strong>I do NOT use react-spring</strong>
                    <p>I track the scroll progress of this element in relation to this custom scroll container (the overlay in this case).</p>
                    <h2>progress: {scrollObject.progress}</h2>
                  </div>
                )}
              </ScrollTracker>
            </div>
          );
        }}
      </ScrollTrackerCustom>
    </div>
  );
}

export default Overlay;
