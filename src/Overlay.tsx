import { ScrollTrackerCustom, ScrollTracker } from "react-scrollsy";
import { useRef } from "react";
import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

function Overlay({ active = false }) {
  const refElem = useRef(null);
  const refCustomScrollContainer = useRef(null);

  return (
    <div ref={refCustomScrollContainer} className={`overlay overlay--${!active ? "inactive" : "active"}`} id='custom-scroll-container'>
      <ScrollTrackerCustom
        key={active.toString()} // forces a rerender of the component, use this if you hide the element with 'display: none', otherwise height calculation of elements inside the container becomes convoluted
        scrollingElement='#custom-scroll-container'>
        {/* // scrollingElement={refCustomScrollContainer}> */}
        {({ scrollData }: IScrollData) => {
          return (
            <div className='App'>
              <p>Im an overlay, scroll tracking can also be performed inside of me.</p>
              <ScrollTracker
                scrollData={scrollData}
                elem={refElem}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => (
                  <div className='elem overlay--progress' ref={refElem}>
                    <div
                      className='elem__progress-bar'
                      style={{
                        width: `${scrollObject.progress * 100}%`,
                      }}></div>
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
