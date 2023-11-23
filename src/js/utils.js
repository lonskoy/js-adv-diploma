export function calcTileType(index, boardSize) {
  if (index === 0) {
    // Условие для верхний левый угол
    return "top-left";
  }

  if (index > 0 && index < boardSize - 1) {
    // Условие для верха рамки
    return "top";
  }

  if (index === boardSize - 1) {
    // Условие для верхний правый угол
    return "top-right";
  }

  if (      //Условие для левой стороны
    index === boardSize ||
    index === boardSize * 2 ||
    index === boardSize * 3 ||
    index === boardSize * 4 ||
    index === boardSize * 5 ||
    index === boardSize * 6
  ) {
    return "left";
  }

  if (
    index === boardSize - 1 ||
    index === boardSize * 2 - 1 ||
    index === boardSize * 3 - 1 ||
    index === boardSize * 4 - 1 ||
    index === boardSize * 5 - 1 ||
    index === boardSize * 6 - 1 ||
    index === boardSize * 7 - 1
  ) {
    return "right";
  }

  if (index === boardSize ** 2 - boardSize) {
    //Условие для нижний левый угол
    return "bottom-left";
  }

  if (index > boardSize ** 2 - 1 - boardSize && index < boardSize ** 2 - 1) {
    // Условие для низа рамки
    return "bottom";
  }

  if (index === boardSize ** 2 - 1) {
    // Условие для нижний правый угол
    return "bottom-right";
  } else {
    return "center";
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return "critical";
  }

  if (health < 50) {
    return "normal";
  }

  return "high";
}
