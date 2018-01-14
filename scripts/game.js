window.addEventListener("load",function() {
  var Q = window.Q = new Quintus()
                          .include("Sprites, Scenes, 2D, Touch , TMX , Input")
                          .include("playerComponent, enemyComponent, beeComponent, gemComponent")
                          .setup({
                          	width: 320,
                          	height: 240,
                          	scaleToFit: true
                          })
                          .controls(true).touch();

                          Q.setImageSmoothing(false);

                          Q.scene("level1",function(stage){
                          	var player;
                          	Q.stageTMX("level.tmx", stage);
                            player = Q("Player").first();
                            stage.add("viewport").follow(player, {x:true,y:true});
                          });

                          Q.loadTMX("level.tmx, sprites.png, sprites.json",function(){
                          	Q.compileSheets("sprites.png","sprites.json");
                          	Q.stageScene("level1");
                          });
});