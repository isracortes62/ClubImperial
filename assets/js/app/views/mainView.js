var MainView = Backbone.View.extend({
    
    el: '#APPContainer',

    events: {
        "click .altaSocioShow"                  :   "renderFormSocio",
    },

    initialize: function(){},

    renderFormSocio: function(e){
        if($("#formSocio").length == 0){
            $("#mainDisplayer").html(_.template(TEMPLATES.formSocio));
            $(".datePicker").datepicker();
        }
        var lastActive = $(".active", ".mainNav");
        $(lastActive).removeClass("active");
        var addSocio = $("ul", ".mainNav");
        $("li:nth-child(2)", addSocio).addClass("active");
    },
});  
