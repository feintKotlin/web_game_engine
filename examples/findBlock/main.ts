
namespace feint {
    var c: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("world")

    var scene = new Scene(new feint.Canvas(c))
    scene.Name="bg"
    resourceManager.save(new ImageResource("bg","../../img/bg.jpg",scene.Size))

    function levelScene(level:number,scene:Scene):number{
        var padding=200
        scene.clearGameObjects()
        var cols=Math.pow(2,Math.ceil(level/5))
        var line=scene.Size.Width>scene.Size.Height?scene.Size.Height:scene.Size.Width
        var rectWidth=(line-padding)/cols
        var delta=(18-3*((level-1)%5))
        var r=Math.random()*(255-delta)
        var g=Math.random()*(255-delta)
        var b=Math.random()*(255-delta)

        var r_del=r+delta
        var g_del=g+delta
        var b_del=b+delta

        var answer=Math.floor(Math.random()*(cols*cols))

        for(var i=0;i<cols;++i){
            for(var j=0;j<cols;++j){
                var rect=new Rectangle("rect_"+String(i*cols+j),new Rect(
                    padding/2+j*rectWidth+(j-1)*5,padding/2+i*rectWidth+(i-1)*5,rectWidth,rectWidth)
                )
            
                if(i*cols+j==answer){
                    rect.FillColor=Color.rgba(r_del,g_del,b_del,0.98)
                }else
                    rect.FillColor=Color.rgba(r,g,b,0.98)
                scene.addGameObject(rect) 
            }
        }

        return answer
    }

    var answer=0
    var level=1
    answer=levelScene(1,scene)

    // 游戏的运行逻辑
    scene.onUpdate(() => {
       scene.GameObjects.forEach((gameObject)=>{
           var rect=<Rectangle>gameObject

           rect.onMouseDown(()=>{
               if(rect.Name=="rect_"+answer){
                   level++
                   answer=levelScene(level,scene)
               }
               else{
                   alert("Game Failed")
                   level=1
                   answer=levelScene(level,scene)
               }
           })
       })
    })

    scene.run()
    //scene.preview()
}