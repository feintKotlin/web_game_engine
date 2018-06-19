namespace feint{
    export function isInArea(pos:Position,rect:Rect):Boolean{
        return pos.X>=rect.X&&pos.X<=(rect.X+rect.Width)&&pos.Y>=rect.Y&&pos.Y<=(rect.Y+rect.Height)
    }

    export namespace Color{
        export function rgb(r:number,g:number,b:number):string{
            return "rgb("+Math.floor(r)+","+Math.floor(g)+","+Math.floor(b)+")"
        }

        export function rgba(r:number,g:number,b:number,a:number):string{
            return "rgba("+Math.floor(r)+","+Math.floor(g)+","+Math.floor(b)+","+a+")"
        }

        export function isColor(color:string):Boolean{
            return (color.indexOf("rgb")==0||(color.indexOf("#")==0))
        }
    }

    export class Object{
        clone():Object{
            return new Object()
        }

        toString():string{
            return ""
        }

        equals(obj:Object):Boolean{
            return false
        }

        hashcode():number{
            return 0
        }
    }
    export class Map{
        private _capacity=16
        private _pairList:Renderable[][]=[]

        constructor(){
            for(var i=0;i<this._capacity;++i){
                this._pairList.push([])
            }
        }
        put(key:string, value:Renderable){
            this._pairList[this.hashcode(key)].push(value)
        }

        get(key:string):Renderable|null{
            var hash=this.hashcode(key)
            var resutlList:Renderable[]=this._pairList[hash]
            if(resutlList.length==1)
                return resutlList[0]
            else if(resutlList.length>1){
                var resultIndex=0
                for(var i=0;i<resutlList.length;++i){
                    if(resutlList[i].Name==key){
                        resultIndex=i
                        break
                    }
                }

                return resutlList[resultIndex]
            }else{
                return null
            }
        }

        private hashcode(key:string):number{
            var hash=0
            for(var i=0;i<key.length;++i){
                hash+=Number(key.charAt(i))<<i
            }

            return hash%this._capacity
        }
    }
}