/* eslint no-unused-vars: 0 */
'use strict';

/**
 * "Abstract" like base class for a Canvas tool
 */
class FabricCanvasTool {
    constructor(canvas, removeObject=null) {
        this._canvas = canvas;
        this.removeObject = removeObject;
    }

    configureCanvas(props) {

    }

    doMouseUp(event) {

    }

    doMouseDown(event) {

    }

    doMouseMove(event) {

    }

    doMouseOut(event) {

    }
}

export default FabricCanvasTool;