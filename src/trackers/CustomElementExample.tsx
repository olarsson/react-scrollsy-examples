import Overlay from "../Overlay";

import { useState } from "react";

function CustomElementExample() {
  const [overlay, toggleOverlay] = useState(false);

  return (
    <>
      <Overlay active={overlay} />

      <button className='btn-toggle-overlay' onClick={() => toggleOverlay(!overlay)}>
        Toggle overlay
      </button>
    </>
  );
}

export default CustomElementExample;
