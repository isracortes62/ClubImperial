var NavMainView = Backbone.View.extend({
    
    el: ".mainNav",

    events:{
        "click ul li"   :   "render", 
    },

    initialize: function(){
        $("#mainDisplayer").html(_.template(TEMPLATES.index));
    },

    render: function(e){

        var target = $(e.target).text();
        var lastActive = $(".active", this.el);
        $(lastActive).removeClass("active");
        var ulTag = $(e.target).parent();
        $(ulTag).addClass("active");
        switch(target){
            case "Inicio" : 
                this.initialize()
                break;
            case "Socios" :
                this.renderSociosTemplate(e)
                break;
            case "Bienvenido" :
                alert("Bienvenido!! :D")
                break;
        }
    },

    renderSociosTemplate: function(e){

        $("#mainDisplayer").html(TEMPLATES.socioNav);

        var template = TEMPLATES.allSocios;
        var compiledTemplate = _.template($(template).html());
        var collectionSocios = new CollectionSocios(); 
        collectionSocios.fetch({
            success: function(){
                var data = collectionSocios.toJSON();
                var socios = {socios: data};
                $(".socioBody").html(compiledTemplate(socios));
            }
        });

    }
    
    
});
