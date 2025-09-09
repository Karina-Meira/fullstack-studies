let devs = []

const form = document.getElementById('form')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    let dev = {}

    const nameDev = document.querySelector("input[name='name']").value 

    form.appendChild(document.createElement('label')).innerHTML = 'Nome da tecnologia:'
    const inputTech = document.createElement('input')
    inputTech.id = 'nameTech'
    form.appendChild(inputTech)

    form.appendChild(document.createElement('p')).innerText = 'Tempo de experiência:'

    
    const inputYears1 = document.createElement('input')
    inputYears1.type = 'radio'
    inputYears1.name = 'years'
    form.appendChild(inputYears1)
    form.appendChild(document.createElement('label')).innerText = '0-2 anos'

   
    const inputYears2 = document.createElement('input')
    inputYears2.type = 'radio'
    inputYears2.name = 'years'
    form.appendChild(inputYears2)
    form.appendChild(document.createElement('label')).innerText = '3-4 anos'
    
    
    const inputYears3 = document.createElement('input')
    inputYears3.type = 'radio'
    inputYears3.name = 'years'
    form.appendChild(inputYears3)
    form.appendChild(document.createElement('label')).innerText = '5+ anos  '   
    form.appendChild(document.createElement('br'))
    form.appendChild(document.createElement('br'))
    
    const buttonRemove = document.createElement('input')
    buttonRemove.type = 'button'
    buttonRemove.value = 'Cadastrar'  
    buttonRemove.id = 'cadastro'
    buttonRemove.onclick = 'cadastrar()'  
    form.appendChild(buttonRemove)

    form.appendChild(document.createElement('br'))
    form.appendChild(document.createElement('br'))

})



