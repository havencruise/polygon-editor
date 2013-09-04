require(['app/model', 'app/view', 'app/Vertex'], function(model, view, Vertex){
    model.on('add', function(){
        console.log('added');
    });

    model.add(new Vertex({
        x: 100, 
        y: 100,
    }));

});
