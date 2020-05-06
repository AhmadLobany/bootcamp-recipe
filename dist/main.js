let renderer = new Renderer();

$('button').on('click', function () {
    const ingredient =$('input').val()
    $.get(`/recipes/${ingredient}`,function(data) {
        renderer.render(data)
    })
})