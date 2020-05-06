const renderer = new Renderer();

$('button').on('click', function () {
    const ingredient = $('input').val()
    $.get(`/recipes/${ingredient}`, (data) => renderer.render(data))
})


$('#container').on('click', 'img', function () {console.log($(this).siblings('ul').find('li').html())})