const faqDiv = document.querySelector(".fAQs");

fetch('./FAQs/faqs.json')
    .then(res => res.json())
    .then(data => {addFaqs(data)});

const addFaqs = (data) =>{
    console.log(data.questions)

    data.questions.map(question => {
        
        const headingFaq = document.createElement('div');
        const eachQuestion = document.createElement('div');
        const button = document.createElement('div');
    
        const HorzLine = document.createElement('div');
        const vertLine = document.createElement('div');

        headingFaq.classList.add('headingFaq')
        button.classList.add(`button-${question.qno}`)
        HorzLine.classList.add('HorzLine')
        vertLine.classList.add('vertLine')
    
        eachQuestion.innerHTML = question.q;
        button.appendChild(HorzLine)
        button.appendChild(vertLine)
    
        headingFaq.appendChild(eachQuestion)
        headingFaq.appendChild(button)
    
        faqDiv.append(headingFaq)

        const ansDiv = document.createElement('div');
        ansDiv.classList.add(`ansDiv-${question.qno}`, 'closed')

        if(question.ansP2 !== ''){
            ansDiv.innerHTML = '<br />' + question.ans + '<br />' + question.ansP2
        }else{
            ansDiv.innerHTML = '<br />' + question.ans
        }

        faqDiv.appendChild(ansDiv)
    })

    const buttonToggle1 = document.querySelector('.button-one').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-one')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-one').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-one').classList.remove('closeBtn')
        }
    })
    const buttonToggle2 = document.querySelector('.button-two').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-two')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-two').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-two').classList.remove('closeBtn')
        }
    })
    const buttonToggle3 = document.querySelector('.button-three').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-three')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-three').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-three').classList.remove('closeBtn')
        }
    })
    const buttonToggle4 = document.querySelector('.button-four').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-four')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-four').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-four').classList.remove('closeBtn')
        }
    })
    const buttonToggle5 = document.querySelector('.button-five').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-five')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-five').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-five').classList.remove('closeBtn')
        }
    })
    const buttonToggle6 = document.querySelector('.button-six').addEventListener('click', (e) => {
        const ansDiv = document.querySelector('.ansDiv-six')
        if(ansDiv.classList[1] === 'closed'){
            ansDiv.classList.remove('closed')
            ansDiv.classList.add('open')
            document.querySelector('.button-six').classList.add('closeBtn')
        }else{
            ansDiv.classList.remove('open')
            ansDiv.classList.add('closed')
            document.querySelector('.button-six').classList.remove('closeBtn')
        }
    })

    
    
}








