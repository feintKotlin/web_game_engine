namespace feint{
    export class Render{
        constructor(scene:Scene){
            this._scene=scene
        }

        _scene:Scene

        render(){
            this._scene.Canvas.clear()
            this.renderScene()
            var gameObjects=this._scene.GameObjects
            gameObjects.forEach((gameObject)=>{
                this._scene.Canvas.FillStyle="#ffffff"
                this.renderObject(gameObject)
            })
        }

        private renderObject(gameObject:GameObject){
            //console.log("update gameobject:["+gameObject.Name+"]")

            // 渲染边框线，在DEBUG模式下开启
            this._scene.Canvas.StrokeStyle="#00ff00"
            this._scene.Canvas.strokeRect(gameObject.Bounding)

            // 渲染游戏物件的实际图像
            gameObject.draw(this._scene.Canvas)
        }

        private renderScene(){
            this._scene.Canvas.FillStyle="#000"
            this._scene.Canvas.fillRect(new Rect(0,0,
                this._scene.Size.Width,this._scene.Size.Height))
        }
    }
}