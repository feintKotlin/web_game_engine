namespace feint{
    export class Transform{

    }
    export class Position{
        constructor(x:number,y:number) {
            this._x=x
            this._y=y
        }

        private _x:number=0
        private _y:number=0

        set X(x:number){ 
            this._x=x
        }

        get X():number{
            return this._x
        }

        set Y(y:number){
            this._y=y
        }

        get Y():number{
            return this._y
        }
    }

    export class Size{
        constructor(width:number, height:number){
            this._width=width
            this._height=height
        }

        private _width:number
        private _height:number

        get Width():number{
            return this._width
        }

        get Height():number{
            return this._height
        }
    }

    export class Rect{
        constructor(x:number,y:number,width:number,height:number){
            this._x=x
            this._y=y
            this._width=width
            this._height=height
        }

        private _x:number
        private _y:number
        private _width:number
        private _height:number

        get X(){
            return this._x
        }

        set X(x:number){
            this._x=x
        }

        get Y(){
            return this._y
        }

        set Y(y:number){
            this._y=y
        }

        get Width(){
            return this._width
        }

        get Height(){
            return this._height
        }
    }
}

