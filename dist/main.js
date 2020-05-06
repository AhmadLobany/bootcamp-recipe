

$('button').on('click', function () {
    const ingredient =$('input').val()
    $.get(`/recipes/${ingredient}`,function(data) {
        recipes = data
    })
})