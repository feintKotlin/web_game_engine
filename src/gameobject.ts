namespace feint{
    export abstract class GameObject{
        constructor(name:String,bounding:Rect){
            this._position=new Position(bounding.X,bounding.Y)
            this._size=new Size(bounding.Width,bounding.Height)
            this._bounding=bounding
            this._name=name
        }

        private _position:Position
        private _size:Size
        private _bounding:Rect
        private _name:String
        private _keyDownEvent:Function=function(){}
        private _keyUpEvent:Function=function(){}
        private _keyDownEventMap:{"keyCode":Number,"event":Function}[]=[]
        private _keyUpEventMap:{"keyCode":Number,"event":Function}[]=[]
        private _mouseDownEvent:Function=function(){}

        set Position(position:Position){
            this._position=position
            this._bounding.X=position.X
            this._bounding.Y=position.Y
        }

        get Position():Position{
            return this._position
        }

        get Bounding():Rect{
            return this._bounding
        }

        get Name():String{
            return this._name
        }

        onKeyDown(keyCode:Number,event:Function){
            this._keyDownEventMap.push({"keyCode":keyCode,"event":event})
        }

        onKeyUp(keyCode:Number,event:Function){
            this._keyUpEventMap.push({"keyCode":keyCode,"event":event})
        }

        onMouseDown(event:Function){
            this._mouseDownEvent=event
        }

        mouseDown(){
           this._mouseDownEvent(this)
        }

        getKeyDownEvent(keyCode:Number):Function{
            var event:Function=function(){}
            this._keyDownEventMap.forEach(obj=>{
                if(obj.keyCode==keyCode){
                    event=obj.event
                }
            })

            return event
        }

        getKeyUpEvent(keyCode:Number):Function{
            var event:Function=function(){}
            this._keyUpEventMap.forEach(obj=>{
                if(obj.keyCode==keyCode){
                    event=obj.event
                }
            })

            return event
        }

        abstract draw(canvas:Canvas):void
    }

    export class BaseShape extends GameObject{
        
        private _fillColor:string="#ccc"

        set FillColor(color:string){
            this._fillColor=color
        }

        get FillColor():string{
            return this._fillColor
        }

        draw(canvas:Canvas):void{}
        
    }

    export class Rectangle extends BaseShape{
        draw(canvas:Canvas):void{
            canvas.FillStyle=this.FillColor
            canvas.fillRect(this.Bounding)
        }
    }
}

