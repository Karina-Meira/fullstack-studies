class Component {
    #element //atributo privado

     // definição do construtor da classe, que recebe tagName (ex: 'div', 'input') em subclasses.
    constructor(tagName) {
        this.tagName = tagName 
        this.build() 
    }
    
    // Esse método é responsável por criar o elemento DOM a partir do tagName.
    build() {
        this.#element = document.createElement(this.tagName)
    }

    getElement() {
        return this.#element
    }

    render(parent = documento.body) {
        parent.appendChild(this.#element)
    }
}

class Input extends Componet {
    constructor(type = 'text', name = '', value = '') {
        super('input')
        this.getElement().type = type
        this.getElement().name = name
        this.getElement().value = value
    }
}

class Label extends Component {
    constructor(text) {
        super('label')
        this.getElement().textContent = text
    }
}

class Form extends Component {
    constructor() {
        super('form')
    }

    addChild(child) {
        this.getElement().appendChild(child.getElement())
    }
}

const form = new Form()

const label = new Label('Nome: ')
const input = new Input("text", 'nome')
const submit = new Input('submit', 'enviar', 'Enviar')

// adiciona elementos ao formulário
form.addChild(label)
form.addChild(input)
form.addChild(submit)

// renderizando o formulário na página
form.render()

