
let modalItems = document.querySelector ('#modal-for-life-path'),
    modalColor = document.querySelector ('.box-for-modal-life-path'),
    letterModal = document.querySelector ('.letter-modal-life-path'),
    buttonExitModal = document.querySelector ('.button-exit-modal-life-path'),
    namechangeLifePath = document.querySelector ('.change-name-modal'),
    imgchangeLifePath = document.querySelector ('.img-change-arrow'),
    leftArrow = document.querySelector('.left-arrow'),
    rightArrow = document.querySelector ('.right-arrow'),
    imgChangeArrow = document.querySelector ('.img-change-arrow'),
    changeNameModal = document.querySelector ('.change-name-modal'),
    contentItemsModal = document.querySelectorAll ('.content-hidden')
    

const buttonModal = document.querySelectorAll('.button-modal'),
      buttonLifePathModal = document.querySelectorAll('.button-life-path-img'),
      boxForItemsModal = document.querySelectorAll ('.content-box-life-path')


const lifePathContent = [{

    imgLifePath: `./src/life-path-modal/letter_n_.png`, imgMale: `./src/life-path-modal/v-nomad-male-img.png`, 
    imgFemale: `./src/life-path-modal/v-nomad-female-img.jpg`, nameMale: `Nômade masculino`, nameFemale: `Nômade feminina`, history: `O V nômade 
    é um personagem que deixou seu clã e está procurando um novo propósito na vida. Ele começa o jogo em uma oficina mecânica em uma pequena cidade 
    no meio do nada, e tem que consertar seu carro e encontrar seu cliente, Jackie Welles.`, prologue: `O prólogo do V nômade é chamado de 
    “O Nômade” e envolve levar uma carga ilegal pela fronteira, enfrentando a segurança e os guardas da Arasaka. Nesse caminho, V forma uma 
    parceria improvável com Jackie e entra em Night City.`, exclusiveMission: `A missão exclusiva do V nômade é chamada de “These Boots Are 
    Made For Walking” e aparece após a segunda visita ao bar Afterlife. Nessa missão, V recupera seu carro da introdução e encontra a personagem 
    da criadora de conteúdo Alanah Pearce.`, dialogOptions: `As opções de diálogo do V nômade permitem que ele use seu conhecimento e experiência 
    fora da cidade para negociar, obter informações ou se relacionar com outros personagens. Por exemplo, V pode sugerir que os Moxes e os nômades 
    não são tão diferentes, ou que entende o motivo de Yorinobu Arasaka ter deixado sua vida corporativa. Essas opções podem mudar o rumo das 
    conversas e das missões.`},

    { imgLifePath: `./src/life-path-modal/letter_m_.png`, imgMale: `./src/life-path-modal/male-v-street-kid-img.jpg`, 
    imgFemale: `./src/life-path-modal/v-street-kid-female-img.jpg`,  nameMale: `Marginal masculino`, nameFemale: `Marginal feminina`, 
    history: `O V marginal é um personagem que cresceu nas duras ruas de Night City, conhecendo a cidade, as gangues e os truques para sobreviver.
    Ele começa o jogo no bar El Coyote Cojo, em Heywood, onde tem muitos amigos e contatos. Ele tem que lidar com um problema com um agiota 
    chamado Kirk e seu parceiro Jackie.`, prologue: `O prólogo do V marginal é chamado de “O Marginal” e envolve roubar um carro de luxo para 
    Kirk, mas as coisas dão errado quando o carro pertence a um poderoso corporativo. V e Jackie têm que fugir da polícia e dos capangas do 
    corporativo, e acabam se envolvendo com um fixer chamado Dexter DeShawn.`, exclusiveMission: `A missão exclusiva do V marginal é chamada de 
    “Eu Sou Free” e aparece após completar a missão “Playing For Time”. Nessa missão, V reencontra Kirk, que está em apuros com um gangster 
    chamado Maelstrom. V pode escolher ajudar Kirk ou entregá-lo para Maelstrom, com diferentes consequências.`, dialogOptions: `As opções de 
    diálogo do V marginal permitem que ele use seu conhecimento e experiência das ruas para obter vantagens, informações ou intimidação. 
    Por exemplo, V pode reconhecer as tatuagens de uma gangue, saber como lidar com um crachá ou ter mais credibilidade com os marginais. 
    Essas opções podem mudar o rumo das conversas e das missões.` },
    
    { imgLifePath: `./src/life-path-modal/letter_c_.png`, imgMale: `./src/life-path-modal/v-male-corporate-img.jpg`, 
    imgFemale: `./src/life-path-modal/v-corporate-female-img.jpg`, nameMale: `Corporativo masculino`, nameFemale: `Corporativa feminina`, 
    history: `O V corporativo é um personagem que trabalha para a poderosa corporação Arasaka, lidando com intrigas, sabotagens e espionagem. 
    Ele começa o jogo no banheiro VIP da torre Arasaka, após uma missão fracassada que o deixou doente. Ele tem que enfrentar seu chefe, Jenkins, 
    e receber uma nova tarefa arriscada.`, prologue: `O prólogo do V corporativo é chamado de “O Corporativo” e envolve sabotar uma rival interna, 
    Abernathy, usando um fragmento de dados que contém informações comprometedoras. No entanto, as coisas saem do controle quando V é traído por 
    Jenkins e demitido da Arasaka. Ele tem que fugir com a ajuda de seu amigo Jackie e se tornar um mercenário nas ruas de Night City.`, 
    exclusiveMission: `A missão exclusiva do V corporativo é chamada de “Homem Primata” e aparece após completar a missão “Playing For Time”. 
    Nessa missão, V reencontra Jenkins, que está desesperado por ajuda e oferece uma recompensa por um favor. V pode escolher ajudar Jenkins 
    ou entregá-lo para a Arasaka, com diferentes consequências.`, dialogOptions: `As opções de diálogo do V corporativo permitem que ele use seu 
    conhecimento e experiência do mundo corporativo para obter vantagens, informações ou persuasão. Por exemplo, V pode reconhecer os interesses 
    de uma corporação, saber como lidar com um executivo ou ter mais credibilidade com os corporativos. Essas opções podem mudar o rumo das 
    conversas e das missões.`}
];

