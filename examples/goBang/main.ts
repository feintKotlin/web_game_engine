
namespace feint {
    var c: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("world")

    var scene = new Scene(new feint.Canvas(c))

    scene.BackGround="#568cee"
    
    resourceManager.save(new ImageResource("white","../../img/white.png",new Size(50,50)))

    resourceManager.save(new ImageResource("black","../../img/black.png",new Size(50,50)))

    resourceManager.save(new ImageResource("qipan","../../img/qipan.png",new Size(600,600)))

    var startX=(scene.Size.Width-600)/2
    var startY=(scene.Size.Height-600)/2

    var qiPan=new Sprite("qipan","qipan",new Rect(startX,startY,600,600))

    scene.addGameObject(qiPan)

    function toStandardPos(pos:Position):Position{
        var x=pos.X
        var y=pos.Y
        x=qiPan.Bounding.X+Math.floor(x/50+0.5)*50-25
        y=qiPan.Bounding.Y+Math.floor(y/50+0.5)*50-25

        return new Position(x,y)
    }

    var times=0

    qiPan.onMouseDown((pos:Position)=>{
        var stdPos=toStandardPos(pos)
        var hasPieces=false;
        scene.GameObjects.forEach((piece)=>{
            if(piece.Position.equals(stdPos)){
                hasPieces=true
            }
        })
        if(hasPieces) return
        if(times%2==0){
            scene.addGameObject(new Sprite("black","black"+times,new Rect(stdPos.X,stdPos.Y,50,50)))
        }else{
            scene.addGameObject(new Sprite("white","white"+times,new Rect(stdPos.X,stdPos.Y,50,50)))
        }
        times++
    })

    scene.onUpdate(()=>{
        

    })

    scene.run()
    
    //scene.preview()
}