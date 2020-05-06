class Renderer {

    constructor() {
        this._data = []
    }

    render(data) {
        this._data = data
        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        $('#container').empty()
        const newHTML = template({ recipes: this._data});
        $('#container').append(newHTML);

    }
}