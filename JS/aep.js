// Array é uma lista entre [] com valores separados por vírgula
// Objeto é uma estrutura de dados composta de chaves e valores. Entre {}, declaro a chave e : e depois declaro um valor (Separado por vírgula)
// Uma prova é um teste com várias questões e cada questão pode ter uma ou mais respostas corretas

const test =    [
    {
        question: 'question1',
        options: [
            {opcao: 'A', correct: true},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: false}
        ]
    },
    {
        question: 'question2',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: true}
        ]
    },
    {
        question: 'question3',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: true},
            {opcao: 'C', correct: false}
        ]
    },
    {
        question: 'question4',
        options: [
            {opcao: 'A', correct: true},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: false}
        ]
    }
]

const prova =    [
    {
        question: 'question1',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: true},
            {opcao: 'C', correct: false}
        ]
    },
    {
        question: 'question2',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: true}
        ]
    },
    {
        question: 'question3',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: true},
            {opcao: 'C', correct: false}
        ]
    },
    {
        question: 'question4',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: true}
        ]
    },
    {
        question: 'question5',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: true}
        ]
    }
]

const exame =    [
    {
        question: 'question1',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: true},
            {opcao: 'C', correct: false}
        ]
    },
    {
        question: 'question2',
        options: [
            {opcao: 'A', correct: false},
            {opcao: 'B', correct: false},
            {opcao: 'C', correct: true}
        ]
    }
]


for (let index = 0; index < test.length; index += 1) {
    for (let i = 0; i < test[index].options.length; i += 1) {
        if (test[index].options[i].correct === true) {
            console.log(test[index].options[i].opcao)
        }
    }
}
