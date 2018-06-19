namespace feint{
    export class Resource extends Renderable{}

    export class ResourceManager{
        private _resourceMap:Map=new Map()

        save(resource:Resource):void{
            this._resourceMap.put(resource.Name,resource)
        }

        find(name:string):Resource{
            return <Resource>this._resourceMap.get(name)
        }

    }

    export class ImageResource extends Resource{
        constructor(name:string,src:string,size:Size){
            super()
            this.Name=name

            var canvasEle=document.createElement("canvas")
            this._canvas=new Canvas(canvasEle)
            this._canvas.resize(size)
            this._canvas.drawImage(src,size,this)
        }
        private _canvas:Canvas

        get Canvas():Canvas{
            return this._canvas
        }
    }


}