const dayjs = require('dayjs')

function birthday(birth) {
    const birthday = dayjs(birth)
    const now = dayjs()
    const ageInYears = now.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(now, 'day') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo Aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday('1995-10-25')

