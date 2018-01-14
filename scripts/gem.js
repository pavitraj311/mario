Quintus.gemComponent = function(Q){
	Q.Sprite.extend("Gem",{
		init: function(p){
			this._super(p,{
				sheet: "power"
			});
			
			this.on("hit.sprite", function(col){
				if(col.obj.isA("Player")){
					this.destroy();
					Q.stageScene("level1");
					alert("you won!!!");
				}
			});
		}
	});
}