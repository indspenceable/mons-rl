import Game from './game.jsx';

function bresenhem(x0, y0, x1, y1){
  var dx = Math.abs(x1-x0);
  var dy = Math.abs(y1-y0);

  var sx = (x0 < x1) ? 1 : -1;
  var sy = (y0 < y1) ? 1 : -1;
  var err = dx-dy;

  var line = []
  for (var i = 0; i < 1000; i+=1){
     line.push(Point.at([x0,y0]));  // Do what you need to for this

     if ((x0==x1) && (y0==y1)) return line;
     var e2 = 2*err;
     if (e2 >-dy){ err -= dy; x0 += sx; }
     if (e2 < dx){ err += dx; y0 += sy; }
  }
}

function validConnection(line) {
  return !pointOfError(line);
}

function pointOfError(line) {
  return line.reverse().find(p => !Game.getTile(p).isWalkable());
}


function toGray(hexColor) {
  const colorArray = ROT.Color.fromString(hexColor);
  const intensity = Math.floor(0.2126 * colorArray[0]) +
                    Math.floor(0.7152 * colorArray[1]) +
                    Math.floor(0.0722 * colorArray[2]);
  return ROT.Color.toHex([intensity, intensity, intensity])
}

function multColor(c1,c2) {
  return ROT.Color.toHex(
    ROT.Color.add(
      ROT.Color.multiply(ROT.Color.fromString(c1), c2),
      [0,30,10]
    )
  )
}


export  {
  bresenhem,
  validConnection,
  pointOfError,
  toGray,
  multColor,
}
