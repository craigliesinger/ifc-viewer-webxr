import { IfcViewerAPI } from 'web-ifc-viewer-root/viewer/dist/ifc-viewer-api';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, webXR: true });
viewer.axes.setAxes();
viewer.grid.setGrid();

const renderer = viewer.context.getRenderer();
renderer.xr.enabled = true;
document.body.appendChild( VRButton.createButton( renderer ) );

const input = document.getElementById("file-input");

input.addEventListener("change",

  async (changed) => {
   
    const file = changed.target.files[0];
    const ifcURL = URL.createObjectURL(file);
    viewer.IFC.loadIfcUrl(ifcURL);
  },

  false
);


