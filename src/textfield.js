/*eslint no-unused-vars: 0*/
'use strict';

import FabricCanvasTool from './fabrictool'
const fabric = require('fabric').fabric;

class TextField extends FabricCanvasTool {
    constructor(context, removeObject) {
        super(context, removeObject);
        
        this.onExitEdit = this.onExitEdit.bind(this);
    }

    configureCanvas(props) {
        let canvas = this._canvas;
        canvas.isDrawingMode = canvas.selection = false;
        canvas.forEachObject((o) => o.selectable = o.evented = false);
        this._color = props.lineColor;              
    }

    doMouseDown(o) {
        let canvas = this._canvas;
        let pointer = canvas.getPointer(o.e);
        this.startX = pointer.x;
        this.startY = pointer.y;
        this.itext = new fabric.IText('', {
            left: this.startX,
            top: this.startY,
            originX: 'left',
            originY: 'center',
            fontFamily: 'verdana',
            fill: '#333',
            fontSize: 30,
            cursorColor: '#777',
            cursorDelay: 2000,
            cursorDuration: 500,
            cursorWidth: 3,
            editingBorderColor: '#f00',
            stroke: this._color,
            fill: this._color,
            objName: 'iText',            
        });
        this.itext.on('editing:exited', this.onExitEdit);

        canvas.add(this.itext);
        canvas.setActiveObject(this.itext);
        this.itext.enterEditing();
        this.itext.hiddenTextarea.focus();
        canvas.renderAll();
    }

    onExitEdit() {
        // if the user clicks off the textfield and it is empty, send message to the SketchField parent to remove it
        if(this.itext.getText().length === 0) {
            this.removeObject();
        }
    }

    doMouseMove(o) {
    }

    doMouseUp(o) {
    }
}

export default TextField;
