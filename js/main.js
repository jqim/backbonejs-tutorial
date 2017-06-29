var Song = Backbone.Model.extend({
    initialize: function(){
        console.log("A new song has been created.");
    },
    defaults:{
        genre: "Jazz"
    }
});

var song = new Song({
        artist: "Miles Davis",
        title: "blue river"
});
