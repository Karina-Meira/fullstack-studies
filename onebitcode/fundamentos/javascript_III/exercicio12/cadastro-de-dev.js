let devs = []
const form = document.getElementById('form')
const addTechButton = document.getElementById('addTech')
const techsDiv = document.getElementById('techs')

addTechButton.addEventListener('click', function () {
  // Criar a div que vai agrupar os campos
  const techDiv = document.createElement('div')
  techDiv.className = 'techLine'

  // Input nome da tecnologia
  const techLabel = document.createElement('label')
  techLabel.innerText = 'Tecnologia: '
  const techInput = document.createElement('input')
  techInput.type = 'text'
  techInput.name = 'tech'
  techDiv.appendChild(techLabel)
  techDiv.appendChild(techInput)

  // Radios de experiência
  const expLabel = document.createElement('p')
  expLabel.innerText = 'Tempo de experiência: '
  techDiv.appendChild(expLabel)

  const expOptions = ['0-2 anos', '3-4 anos', '5+ anos']
  expOptions.forEach(exp => {
    const radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'exp-' + Date.now() // garante que cada grupo seja único
    radio.value = exp

    const label = document.createElement('label')
    label.innerText = exp

    techDiv.appendChild(radio)
    techDiv.appendChild(label)
  })

  // Botão remover
  const removeButton = document.createElement('button')
  removeButton.type = 'button'
  removeButton.innerText = 'Remover'
  removeButton.addEventListener('click', function () {
    techsDiv.removeChild(techDiv)
  }) 

  techsDiv.appendChild(document.createElement('br'))
  techDiv.appendChild(removeButton)
  techsDiv.appendChild(techDiv)
})

// Criando o evento do botão cadastrar

form.addEventListener('submit', function (ev) {
    ev.preventDefault() // impede o recarregamento da página

    // 1. Pegar o nome do dev
    const nameDev = form.querySelector("input[name='name']").value

    // 2. Pegar todas as linhas de tecnologia
    const techLines = techsDiv.querySelectorAll('.techLine')

    let techs = []

    techLines.forEach(line => {
        // nome da tecnologia
        const techName = line.querySelector("input[name='tech']").value

        // tempo de experiência selecionado
        const exp = line.querySelector("input[type='radio']:checked")?.value

        if (techName && exp) { // só adiciona se ambos foram preenchidos
        techs.push({ tech: techName, exp: exp })
        }
    })

    // 3. Montar o objeto do dev
    const newDev = { name: nameDev, techs: techs }

    // 4. Salvar no array
    devs.push(newDev)

    console.log(devs) // testar no console

    // Resetar o formulário
    form.reset()
   // document.getElementById('techs') = '' // Limpa as linhas de tecnologia
})
