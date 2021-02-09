var canvas = new fabric.Canvas("myCanvas")
var bpart_width = 30;
var bpart_height = 30;
player_x = 100;
player_y = 100;
var player_object = "";
bpart_object = "";

function update_player() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function update_bodypart(part) {
    fabric.Image.fromURL(part,function(Img){
        bpart_object = Img;
        bpart_object.scaleToWidth(bpart_width);
        bpart_object.scaleToHeight(bpart_height);
        bpart_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(bpart_object)
    });
}

window.addEventListener("keydown",kd)
function kd(e){
    x = e.keyCode
    console.log(x)

    if (x == '70') {
        update_bodypart("iron.png")
        console.log("f is pressed")
    }
   
    if (x == '66') {
        update_bodypart("b.JPG")
        console.log("b is pressed")
    }

    if (x == '72') {
        update_bodypart("ground.png")
        console.log("g is pressed")
    }

    if (x == '76') {
        update_bodypart("l.JPG")
        console.log("l is pressed")
    }

    if (x == 82) {
        update_bodypart("han.png")
        console.log("r is pressed")
    }

    
    if (e.shiftKey == true && x == 80) {
        console.log("p and shift are pressed together")
        bpart_width = bpart_width + 10 
        bpart_height = bpart_height + 10
        document.getElementById("width").innerHTML = bpart_width
        document.getElementById("height").innerHTML = bpart_height
    
    }

    if (e.shiftKey == true && x == 77) {
        console.log("m and shift are pressed together")
        bpart_width = bpart_width - 10
        bpart_height = bpart_height - 10
        document.getElementById("width").innerHTML = bpart_width
        document.getElementById("height").innerHTML = bpart_height
    }


    if (x == 37) {
        left()
        console.log("left key is pressed")
    }

    if (x == 38) {
        up()
        console.log("up key is pressed")
    }

    if (x == 39) {
        right()
        console.log("right key is pressed")
    }

    if (x == 40) {
        down()
        console.log("down key is pressed")
    }

}

function right() {
    if (player_x <= 700) {
        player_x = player_x + bpart_width
        canvas.remove(player_object)
        update_player()

    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - bpart_width
        canvas.remove(player_object)
        update_player()
    }

}

function up() {
    if (player_y > 0) {
     player_y = payer_y + bpart_height
     canvas.remove(player_object)  
     update_player() 
    }
}

function down() {
    if (player_y <= 600) {
        player_y = player_y - bpart_height
        canvas.remove(player_object)
        update_player()
    }
}