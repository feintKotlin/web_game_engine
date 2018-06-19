namespace feint {
    export class Canvas {
        constructor(canvas: HTMLCanvasElement) {
            this._canvas = canvas
            this._context = <CanvasRenderingContext2D>canvas.getContext("2d")
        }
        private _canvas: HTMLCanvasElement
        private _context: CanvasRenderingContext2D
        private _mouseDownEvent = function (event: MouseEvent) { }

        resize(size: Size) {
            this._canvas.width = size.Width
            this._canvas.height = size.Height
        }

        get Canvas():HTMLCanvasElement{
            return this._canvas
        }

        set Width(width: number) {
            this._canvas.width = width
        }
        get Width(): number {
            return this._canvas.width
        }

        set Height(height: number) {
            this._canvas.height = height
        }

        get Height(): number {
            return this._canvas.height
        }

        set FillStyle(style: string) {
            this._context.fillStyle = style
        }

        set MouseDownEvent(event: (event: MouseEvent) => void) {
            this._mouseDownEvent = event
        }

        fillRect(rect: Rect) {
            this._context.fillRect(rect.X, rect.Y, rect.Width, rect.Height)
        }

        strokeRect(rect: Rect) {
            this._context.strokeRect(rect.X, rect.Y, rect.Width, rect.Height)
        }

        set StrokeStyle(style: string) {
            this._context.strokeStyle = style
        }

        drawImage(src: string, size: Size, rederable: Renderable) {
            var img = new Image(size.Width, size.Height)
            img.src = src
            
            img.onload = () => {
                this._context.drawImage(img, 0, 0,size.Width,size.Height)
                rederable.State = RenderState.Rendered
            }
        }

        drawImageWithCanvas(canvas:HTMLCanvasElement,rect:Rect, rederable: Renderable){
            this._context.drawImage(canvas,rect.X,rect.Y,rect.Width,rect.Height)
            rederable.State=RenderState.Rendered
        }



        clear() {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
        }

        openListener() {
            this._canvas.onmousedown = (event) => {
                this._mouseDownEvent(event)
            }
        }

    }
}