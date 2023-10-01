import { Routes, Route, Outlet, Link } from "react-router-dom";

import DocumentScrollExample from "./trackers/DocumentScrollExample";
import CustomElementExample from "./trackers/CustomElementExample";
import ElementWithOffsetsExample from "./trackers/ElementWithOffsetsExample";
import ElementEventsViewportExample from "./trackers/ElementEventsViewportExample";
import ElementExternalReferenceExample from "./trackers/ElementExternalReferenceExample";
import BasicExample from "./trackers/BasicExample";
import MultipleAndNestedTrackersExample from "./trackers/MultipleAndNestedTrackersExample";
import AdvancedSpringsExample from "./trackers/AdvancedSpringsExample";
import LogoExample from "./trackers/LogoExample";
import BasicTriggerExample from "./trackers/BasicTriggerExample";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/react-scrollsy-examples' element={<Layout />} />
        <Route path='/react-scrollsy-examples/trigger' element={<BasicTriggerExample />} />
        <Route path='/react-scrollsy-examples/advanced-springs' element={<AdvancedSpringsExample />} />
        <Route path='/react-scrollsy-examples/multiple-and-nested-trackers' element={<MultipleAndNestedTrackersExample />} />
        <Route path='/react-scrollsy-examples/basic-example' element={<BasicExample />} />
        <Route path='/react-scrollsy-examples/track-document-scroll' element={<DocumentScrollExample />} />
        <Route path='/react-scrollsy-examples/custom-element' element={<CustomElementExample />} />
        <Route path='/react-scrollsy-examples/element-offsets-svg' element={<ElementWithOffsetsExample />} />
        <Route path='/react-scrollsy-examples/element-events-viewport' element={<ElementEventsViewportExample />} />
        <Route path='/react-scrollsy-examples/element-external-reference' element={<ElementExternalReferenceExample />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <LogoExample />
      <nav>
        <ul>
          <li>
            <Link to='/react-scrollsy-examples/basic-example'>Basic example</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/trigger'>Basic example with trigger</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/advanced-springs'>
              Advanced springs (mulitple animations with interpolations)
            </Link>
            <span>
              Dependencies: <span className='color-blush'>react-spring</span>
            </span>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/multiple-and-nested-trackers'>
              Mulitple and nested trackers
            </Link>
            <span>
              Dependencies: <span className='color-blush'>react-spring</span> / none
            </span>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/track-document-scroll'>
              Track document scroll
            </Link>
            <span>
              Dependencies: <span className='color-blush'>react-spring</span>
            </span>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/custom-element'>Track scrolling inside a custom element (overlay)</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-offsets-svg'>
              Track element with offsets and SVG transformation
            </Link>
            <span>
              Dependencies: <span className='color-blush'>react-spring</span>, <span className='color-blush'>flubber</span>
            </span>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-events-viewport'>Track element with events, and viewport tracking</Link>
          </li>
          <li>
            <Link to='/react-scrollsy-examples/element-external-reference'>Track element outside of ScrollTracker</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
