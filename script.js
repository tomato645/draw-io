<script src="fabric"></script>

function reload(){
  location.reload()
};

// const canvas = new fabric.Canvas("canvas", {isDrawingMode: true});
const canvas = new fabric.Canvas("canvas");

function square(){
  console.log("square");

  canvas.add(new fabric.Rect({
    width: 100,
    height: 50,
    left: 100,
    top: 100,
    fill: "green"
  }));
};
