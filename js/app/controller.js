define(['app/model', 'app/Vertex'], function(model, Vertex){
    
    function findVertexBeingDragged(x, y){
        return model.find(function(vertex){
            return vertex.contains(x, y);
        });
    }

    canvas.addEventListener('mousedown', function(e){
        var vertexBeingDragged = findVertexBeingDragged(e.pageX, e.pageY);
        if(!vertexBeingDragged){
            model.add(new Vertex({
                x: e.pageX, 
                y: e.pageY,
            }));
        }
    });
});