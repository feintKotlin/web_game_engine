namespace feint {

    export abstract class GameObject extends Renderable {
        constructor(name: string, bounding: Rect) {
            super()
            this._position = new Position(bounding.X, bounding.Y)
            this._size = new Size(bounding.Width, bounding.Height)
            this._bounding = bounding
            this.Name = name
        }

        private _position: Position
        private _size: Size
        private _bounding: Rect
        // layer的值越大，则物体越靠前。游戏物体的Layer的最小值为1
        private _layer: Number = 1




        private _keyDownEvent: Function = function () { }
        private _keyUpEvent: Function = function () { }
        private _keyDownEventMap: { "keyCode": Number, "event": Function }[] = []
        private _keyUpEventMap: { "keyCode": Number, "event": Function }[] = []
        private _mouseDownEvent = function (pos:Position) { }



        set Position(position: Position) {
            this._position = position
            this._bounding.X = position.X
            this._bounding.Y = position.Y
        }

        get Position(): Position {
            return this._position
        }

        get Bounding(): Rect {
            return this._bounding
        }

        onKeyDown(keyCode: Number, event: Function) {
            this._keyDownEventMap.push({ "keyCode": keyCode, "event": event })
        }

        onKeyUp(keyCode: Number, event: Function) {
            this._keyUpEventMap.push({ "keyCode": keyCode, "event": event })
        }

        onMouseDown(event: (pos:Position)=>void) {
            this._mouseDownEvent = event
        }

        mouseDown(position:Position) {
            this._mouseDownEvent(position)
        }

        getKeyDownEvent(keyCode: Number): Function {
            var event: Function = function () { }
            this._keyDownEventMap.forEach(obj => {
                if (obj.keyCode == keyCode) {
                    event = obj.event
                }
            })

            return event
        }

        getKeyUpEvent(keyCode: Number): Function {
            var event: Function = function () { }
            this._keyUpEventMap.forEach(obj => {
                if (obj.keyCode == keyCode) {
                    event = obj.event
                }
            })

            return event
        }

        abstract draw(canvas: Canvas): void
    }

    export class Sprite extends GameObject {

        constructor(img: string, name: string, bounding: Rect) {
            super(name, bounding)
            this._img = img
        }

        private _img: string

        draw(canvas: Canvas): void {
            canvas.drawImageWithCanvas((<ImageResource>resourceManager.find(this._img)).Canvas.Canvas,
                this.Bounding,this)
        }
    }

    export class BaseShape extends GameObject {

        private _fillColor: string = "#ccc"

        set FillColor(color: string) {
            this._fillColor = color
        }

        get FillColor(): string {
            return this._fillColor
        }

        draw(canvas: Canvas): void { }

    }

    export class Rectangle extends BaseShape {
        draw(canvas: Canvas): void {
            canvas.FillStyle = this.FillColor
            canvas.fillRect(this.Bounding)
        }
    }

}

