// 1 - white
// 2 - yellow
// 3 - blue 
// 4 = green
// 5 - orange
// 6 - gray

export const iPiece:object = {
  one: [
    [1, 1, 1, 1]
  ],
  two: [
    [1],
    [1],
    [1],
    [1]
  ],
  three: [
    [1, 1, 1, 1]
  ],
  four: [
    [1],
    [1],
    [1],
    [1]
  ],
  color: "white",
};


export const oPiece:object = {
  one: [
    [2, 2],
    [2, 2]
  ],
  color: "yellow"
};

export const tPiece: object = {
  one: [
    [0, 3, 0],
    [3, 3, 3]
  ],
  two: [
    [0, 3],
    [3, 3],
    [0, 3]
  ],
  three: [
    [3, 3, 3],
    [0, 3, 0]
  ],
  four: [
    [3, 0],
    [3, 3],
    [3, 0]
  ],
  color: "blue"
};

export const sPiece: object = {
  one: [
    [ 0, 4, 4],
    [ 4, 4, 0]
  ],
  two: [
    [ 4, 0],
    [ 4, 4],
    [ 0, 4]
  ],
  three: [
    [4, 4, 0],
    [0, 4, 4]
  ],
  four: [
    [0, 4],
    [4, 4],
    [4, 0]
  ],
  color: "green"
};

export const zPiece: object = {
  one: [
    [5, 5, 0],
    [0, 5, 5]
  ],
  two: [
    [0, 5],
    [5, 5],
    [5, 0]
  ],
  three: [
    [0, 5, 5],
    [5, 5, 0]
  ],
  four: [
    [5, 0],
    [5, 5],
    [0, 5]
  ],
  color: "orange"
};

export const jPiece: object = {
  one: [
    [6, 0, 0],
    [6, 6, 6]
  ],
  two: [
    [6, 6],
    [6, 0],
    [6, 0]
  ],
  three: [
    [6, 6, 6],
    [6, 0, 0]
  ],
  four: [
    [0, 6],
    [0, 6],
    [6, 6]
  ],
  color: "gray"
};
