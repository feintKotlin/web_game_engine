namespace feint {
    export class Render {
        constructor(scene: Scene) {
            this._scene = scene
        }

        _scene: Scene

        render() {
            this._scene.Canvas.clear()
            if (this._scene.State == RenderState.NoRender)
                this.renderScene()
            this.renderObjects()

            if (this._scene.State == RenderState.Rendered)
                this._scene.State = RenderState.NoRender
        }

        private renderObjects() {
            var gameObjects = this._scene.GameObjects
            gameObjects.forEach((gameObject) => {
                this.renderObject(gameObject)
            })
        }

        private renderObject(gameObject: GameObject) {
            //console.log("update gameobject:["+gameObject.Name+"]")

            if (DEBUG) {
                // 渲染边框线，在DEBUG模式下开启
                this._scene.Canvas.StrokeStyle = "#00ff00"
                this._scene.Canvas.strokeRect(gameObject.Bounding)
            }

            // 渲染游戏物件的实际图像
            gameObject.draw(this._scene.Canvas)
        }


        private renderScene() {
            this._scene.State = RenderState.Rendering
            if (Color.isColor(this._scene.BackGround)) {
                this._scene.Canvas.FillStyle = this._scene.BackGround
                this._scene.Canvas.fillRect(new Rect(0, 0,
                    this._scene.Size.Width, this._scene.Size.Height))
                this._scene.State = RenderState.Rendered
            } else {
                this._scene.Canvas.drawImageWithCanvas(
                    (<ImageResource>resourceManager.find(this._scene.BackGround)).Canvas.Canvas,
                    new Rect(0, 0, this._scene.Size.Width, this._scene.Size.Height), this._scene)
            }
        }
    }

    export enum RenderState {
        NoRender = 10, Rendering = 20, Rendered = 30
    }

    export class Nameable extends Object {
        private _name: string = "untitle"

        set Name(name: string) {
            this._name = name
        }

        get Name(): string {
            return this._name
        }

    }

    export class Renderable extends Nameable {
        private _state: RenderState = RenderState.NoRender

        set State(state: RenderState) {
            this._state = state
        }

        get State(): RenderState {
            return this._state
        }
    }
}