let renderer = new Renderer();

$('button').on('click', function () {
    const ingredient =$('input').val()
    $.get(`/recipes/${ingredient}`,function(data) {
        renderer.render(data)
    })
})


$('#container').on('click','img',function() {
    const firstEle = $(this).siblings('ul').find('li').html()
    console.log(firstEle)
})