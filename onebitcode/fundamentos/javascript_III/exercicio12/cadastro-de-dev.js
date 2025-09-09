const form = document.getElementById('form')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const nameDev = document.querySelector("input[name='name']").value 

    form.appendChild(document.createElement('label')).innerHTML = 'Nome da tecnologia:'
    const inputTech = document.createElement('input')
    inputTech.id = 'nameTech'
    form.appendChild(inputTech)

    form.appendChild(document.createElement('label'))
    const experiece = document.createElement('p')
    experiece.innerText = 'Tempo de experiência:'
    const inputYears = document.createElement('input')
    inputYears.type = 'radio'
    inputYears.name = 'years'
    const labelYears1 = document.createElement('label')
    labelYears1.innerText = '0-2 anos'
    const inputYears2 = document.createElement('input')
    inputYears2.type = 'radio'
    inputYears2.name = 'years'
    
    
 
    

    
    
    form.appendChild(experiece)
    form.appendChild(inputYears)
    form.appendChild(labelYears1)
    form.appendChild(inputYears2)
    form.appendChild(document.createElement('label')).innerText = '3-4 anos'
 

    
})