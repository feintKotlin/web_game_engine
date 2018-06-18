namespace feint{
    export function isInArea(pos:Position,rect:Rect):Boolean{
        return pos.X>=rect.X&&pos.X<=(rect.X+rect.Width)&&pos.Y>=rect.Y&&pos.Y<=(rect.Y+rect.Height)
    }

    export namespace Color{
        export function rgb(r:number,g:number,b:number):string{
            return "rgb("+r+","+g+","+b+")"
        }
    }
}