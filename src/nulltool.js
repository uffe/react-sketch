'use strict';

import FabricCanvasTool from './fabrictool'
const fabric = require('fabric').fabric;

class NullTool extends FabricCanvasTool {

    configureCanvas(props) {
        let canvas = this._canvas;
        canvas.isDrawingMode = canvas.selection = false;
        canvas.forEachObject((o) => o.selectable = o.evented = false);
        canvas.defaultCursor = 'move';
    }
}

export default NullTool;