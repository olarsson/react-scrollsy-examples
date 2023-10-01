import { ScrollTrackerDocument, ScrollTracker } from "react-scrollsy";

import { IScrollData, IScrollObject } from "react-scrollsy/dist/types";

import { useRef } from "react";
import { BackgroundColorSpring } from "../spring-components/advanced/BackgroundColorSpring";
import { MultipleStagesSpring } from "../spring-components/advanced/MultipleStagesSpring";
import { MultipleStagesSpringTwo } from "../spring-components/advanced/MultipleStagesSpringTwo";
import { SourceCodeReference } from "../SourceCodeReference";

function AdvancedSpringsExample() {
  const refElem1 = useRef(null);
  const refElem2 = useRef(null);
  const refElem3 = useRef(null);

  return (
    <>
      <SourceCodeReference name='AdvancedSpringsExample' filePath='trackers/AdvancedSpringsExample.tsx' />

      <ScrollTrackerDocument>
        {({ scrollData }: IScrollData) => {
          return (
            <>
              <ScrollTracker
                scrollData={scrollData}
                elem={refElem3}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                  offsetTop: {
                    distance: 50,
                    unit: "%",
                    basedOn: "vp",
                  },
                  offsetBottom: {
                    distance: 10,
                    unit: "%",
                    basedOn: "vp",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => {
                  return <MultipleStagesSpringTwo progress={scrollObject.progress} ref={refElem3} />;
                }}
              </ScrollTracker>
              <ScrollTracker
                scrollData={scrollData}
                elem={refElem1}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => {
                  return <BackgroundColorSpring progress={scrollObject.progress} ref={refElem1} />;
                }}
              </ScrollTracker>
              <ScrollTracker
                scrollData={scrollData}
                elem={refElem2}
                settings={{
                  duration: {
                    distance: 100,
                    unit: "%",
                    basedOn: "elem",
                  },
                }}>
                {({ scrollObject }: IScrollObject) => {
                  return <MultipleStagesSpring progress={scrollObject.progress} ref={refElem2} />;
                }}
              </ScrollTracker>
            </>
          );
        }}
      </ScrollTrackerDocument>
    </>
  );
}

export default AdvancedSpringsExample;
