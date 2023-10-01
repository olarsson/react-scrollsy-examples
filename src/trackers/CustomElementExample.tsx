import Overlay from "../Overlay";

import { useState } from "react";
import { SourceCodeReference } from "../SourceCodeReference";

function CustomElementExample() {
  const [overlay, toggleOverlay] = useState(false);

  return (
    <>
      <SourceCodeReference name='CustomElementExample' filePath='trackers/CustomElementExample.tsx' />

      <Overlay active={overlay} />

      <button className='btn-toggle-overlay' onClick={() => toggleOverlay(!overlay)}>
        Toggle overlay
      </button>
    </>
  );
}

export default CustomElementExample;
