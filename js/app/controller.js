define(['app/model', 'app/Vertex'], function(model, Vertex){
    var vertexBeingDragged,
        dragX, dragY;

    function findVertexBeingDragged(x, y){
        return model.find(function(vertex){
            return vertex.contains(x, y);
        });
    }

    canvas.addEventListener('mousedown', function(e){
        vertexBeingDragged = findVertexBeingDragged(e.pageX, e.pageY);
        if(vertexBeingDragged){
            dragX = vertexBeingDragged.get('x');
            dragY = vertexBeingDragged.get('y');
        } else {
            model.add(new Vertex({
                x: e.pageX, 
                y: e.pageY,
            }));
        }
    });

    canvas.addEventListener('mousemove', function(e){
        if(vertexBeingDragged){
            vertexBeingDragged.set({
                x: e.pageX,
                y: e.pageY
            });
        }
    });

    canvas.addEventListener('mouseup', function(){
        if(vertexBeingDragged){
            if(dragX == vertexBeingDragged.get('x') && 
                  dragY == vertexBeingDragged.get('y')){
                model.remove(vertexBeingDragged);
            }
        }
        vertexBeingDragged = null;
    });
});

