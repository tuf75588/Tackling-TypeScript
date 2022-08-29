interface Point {
  x: number;
  y: number;
}

function pointToString(pt: Point) {
  return `(${pt.x}, ${pt.y})`;
}


interface HasMethodDef {
  simpleMethod(flag: boolean): void;
}

interface HasFuncProps {
  simpleMethod: (flag: boolean) => void;
}

const objWithMethod: HasMethodDef = {
  simpleMethod: function (flag: boolean): void {},
};

const objWithArrowFunction: HasMethodDef = {
  simpleMethod: (flag: boolean): void => {},
};