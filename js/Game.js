class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   console.log("game.getStat() is called");
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
}
