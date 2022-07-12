// --- positionGameOver --- //

function GameOverPosition() {}

GameOverPosition.prototype.draw = function (play) {
  ctx.clearRect(0, 0, play.width, play.height);
  ctx.font = "40px Comic Sans MS";
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Game Over!", play.width / 2, play.height / 2 - 120);

  ctx.font = "36px Comic Sans MS";
  ctx.fillStyle = "#D7DF01";
  ctx.fillText(
    "YOU'VE DIED IN  " + play.level + " YOUR SCORE IS " + play.score + ".",
    play.width / 2,
    play.height / 2 - 40
  );

  ctx.font = "36px Comic Sans MS";
  ctx.fillStyle = "#D7DF01";
  ctx.fillText(
    "PRESS 'Space' TO CONTINUE",
    play.width / 2,
    play.height / 2 + 40
  );
};

GameOverPosition.prototype.keyDown = function (play, keyboardCode) {
  if (keyboardCode == 32) {
    play.goToPosition(new OpeningPosition());
  }
};
