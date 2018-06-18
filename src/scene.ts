namespace feint {
    export class Scene extends Renderable {
        constructor(canvas: Canvas) {
            super()
            this._width = document.documentElement.clientWidth
            this._height = document.documentElement.clientHeight
            this._canvas = canvas
            this._canvas.resize(this.Size)
        }
        private _width: number
        private _height: number
        private _canvas: Canvas
        private _update: Function = function () { }
        private _resize=function(size:Size){}
        private _gameobjects: GameObject[] = []
        private _gameObjectMap: Map = new Map()
        private _render: Render = new Render(this)
        private _backGround: string = ""
        private _resourceManager: ResourceManager = new ResourceManager()

        get ResourceManager() {
            return this._resourceManager
        }

        set BackGround(background: string) {
            this._backGround = background
        }


        get BackGround(): string {
            return this._backGround
        }


        get GameObjects(): GameObject[] {
            return this._gameobjects
        }

        get Canvas(): Canvas {
            return this._canvas
        }

        get Size(): Size {
            return new Size(this._width, this._height)
        }

        set Size(size: Size) {
            this._width = size.Width
            this._height = size.Height
        }

        resize(size: Size) {
            this._width = size.Width
            this._height = size.Height
            this._canvas.resize(size)
        }

        addGameObject(gameObject: GameObject) {
            this._gameobjects.push(gameObject)
            this._gameObjectMap.put(gameObject.Name, gameObject)
        }
        removeGameObject(gameObject: GameObject) {
            this._gameobjects.splice(this._gameobjects.indexOf(gameObject), 1)
        }

        clearGameObjects() {
            this._gameobjects = []
            this._gameObjectMap = new Map()
        }

        find(name: string): GameObject | null {
            if (this._gameObjectMap.get(name) != null)
                return <GameObject>this._gameObjectMap.get(name)
            else
                return null
        }
        onUpdate(event: Function) {
            this._update = event
        }

        onResize(event: (size:Size)=>void){
            this._resize=event
        }

        run() {
            this.beforeStart()
            setInterval(() => {
                this._resize(new Size(
                    document.documentElement.clientWidth,
                    document.documentElement.clientHeight
                ))
                this._update()
                this._render.render()
            }, 100)
        }

        private beforeStart() {
            this._canvas.MouseDownEvent = (event: MouseEvent) => {
                var clickPos: Position = new Position(event.offsetX, event.offsetY)
                this._gameobjects.forEach((gameobject) => {
                    if (isInArea(clickPos, gameobject.Bounding)) {
                        gameobject.mouseDown()
                    }
                })
            }

            this._canvas.openListener()
        }

        private loadResource() {

        }
        preview() {
            this._render.render()
        }
    }
}