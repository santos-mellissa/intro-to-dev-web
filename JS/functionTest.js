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

function testReceiver (testName) {
    let resposta = []
    for (let index = 0; index < testName.length; index += 1) {
        for (let i = 0; i < testName[index].options.length; i += 1) {
            if (testName[index].options[i].correct === true) {
                resposta.push(testName[index].options[i].opcao)
            }
        }
    }
    return resposta;
}

console.log(testReceiver (exame));