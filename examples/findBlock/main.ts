
namespace feint {
    var c: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("world")

    c.width=document.body.clientWidth
    c.height=document.body.clientHeight

    var scene = new Scene(new feint.Canvas(c))
    scene.Size=new Size(c.width,c.width)

    function levelScene(level:number,scene:Scene):number{
        scene.clearGameObjects()
        var cols=Math.pow(2,Math.ceil(level/5))
        var rectWidth=scene.Size.Width/cols
        var delta=(15-3*((level-1)%5))
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
                    j*rectWidth,i*rectWidth,rectWidth,rectWidth)
                )
            
                if(i*cols+j==answer){
                    rect.FillColor=Color.rgb(r_del,g_del,b_del)
                }else
                    rect.FillColor=Color.rgb(r,g,b)
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