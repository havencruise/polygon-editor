require(['app/model', 'app/view', 'app/controller', 'app/Vertex'], 
  function(model, view, controller, Vertex){
    model.on('add', function(){
        console.log('added');
    });

    model.add(new Vertex({
        x: 100, 
        y: 100,
    }));
});
