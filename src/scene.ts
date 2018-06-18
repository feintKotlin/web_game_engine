namespace feint{
    export class Scene{
        constructor(canvas:Canvas){
            this._width=800
            this._height=800
            this._canvas=canvas
        }
        private _width:number
        private _height:number
        _canvas:Canvas
        _update:Function=function(){}
        private _gameobjects:GameObject[]=[]
        _render:Render=new Render(this)

        get GameObjects():GameObject[]{
            return this._gameobjects
        }

        get Canvas():Canvas{
            return this._canvas
        }

        get Size():Size{
            return new Size(this._width,this._height)
        }

        set Size(size:Size){
            this._width=size.Width
            this._height=size.Height
        }

        addGameObject(gameObject:GameObject){
            this._gameobjects.push(gameObject)
        }
        removeGameObject(gameObject:GameObject){
            this._gameobjects.splice(this._gameobjects.indexOf(gameObject),1)
        }

        clearGameObjects(){
            this._gameobjects=[]
        }

        find(name:string):GameObject|null{
            var gameObject=null
            for(var i=0;i<this._gameobjects.length;++i){
                if(this._gameobjects[i].Name==name){
                    gameObject=this._gameobjects[i]
                }
            }

            return gameObject
        }
        onUpdate(event:Function){
            this._update=event
        }

        run(){
            this.beforeStart()
            setInterval(()=>{
                this._update()
                this._render.render()
            },100)
        }

        private beforeStart(){
            this._canvas.MouseDownEvent=(event:MouseEvent)=>{
                var clickPos:Position=new Position(event.offsetX,event.offsetY)
                this._gameobjects.forEach((gameobject)=>{
                    if(isInArea(clickPos,gameobject.Bounding)){
                        gameobject.mouseDown()
                    }
                })
            }

            this._canvas.openListener()
        }
        preview(){
            this._render.render()
        }
    }
}