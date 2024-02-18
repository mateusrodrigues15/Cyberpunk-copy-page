
const johnnyImg = document.querySelector ('.johnny-a-c'),
    vImg = document.querySelector ('.v-a-c'),
    buttonAppearCharacters = document.querySelector ('.button-appear-characters'),
    listCharacters = document.querySelector ('.list-characters-a-c'),
    changeClickCharactersContent = document.querySelector ('.change-click-button-characters'),
    choiceAssociation = document.querySelector ('#choice-association'),
    testCharacters = document.querySelectorAll ('.test-characters'),
    buttonAppearCharactersModal = document.querySelector ('.button-appear-characters-modal'),
    modalForCharactersAppear = document.querySelector ('.box-modal-for-characters-appear'),
    exitModalCharacters = document.querySelector ('.exit-modal-characters'),
    nameCharacterModal = document.querySelector ('.name-character-modal'),
    statusCharacter = document.querySelector ('.status-character'),
    associationCharacter = document.querySelector ('.association-character'),
    imgModalCharacter = document.querySelector ('.img-modal-character'),
    prevButton = document.querySelector ('.prev-button'),
    descriptionCharacter = document.querySelector ('.description-character'),
    nextButton = document.querySelector ('.next-button')

    let myCharactersLi = ``,
    numberModal = 0


let charactersCyberpunk = [{name: `Adam Smasher`, description: `Adam Smasher é um dos principais antagonistas de Cyberpunk 2077. Ele é um 
ciborgue gigantesco, que trabalha como mercenário para a corporação Arasaka. Ele é conhecido por ter matado Johnny Silverhand, o antigo 
líder da banda Samurai e ativista anti-corporação. É um personagem complexo e controverso, que representa os extremos da modificação cibernética 
e da lealdade corporativa. Ele é o último obstáculo que V deve enfrentar para alcançar seu objetivo de sobreviver ao biochip Relic.`, 
association:`Arasaka`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/adamsmasher.webp`, 
imgBox: `./src/about-characters/for-button-click/adam-smasher.webp`},

{name: `Alt Cunningham`, description: `Alt Cunningham é uma das personagens mais importantes de Cyberpunk 2077. Ela é uma programadora genial 
e ex-namorada de Johnny Silverhand, que criou o biochip capaz de armazenar a consciência humana. Ela foi sequestrada e morta pela Arasaka, mas 
seu fantasma cibernético ainda existe na rede. Uma personagem complexa e misteriosa, que representa os temas de transumanismo e imortalidade 
em Cyberpunk 2077. Ela é uma das possíveis aliadas de V, mas também tem seus próprios interesses e objetivos.`, 
association:`Nenhuma`, status:`Indefinido`, imgModal: `./src/about-characters/for-modal/altcunningham.webp`, 
imgBox: `./src/about-characters/for-button-click/alt-cunningham.webp`},

{name: `Anders Hellman`, description: `Anders Hellman é um homem arrogante e ambicioso, que se considera insubstituível e muito valioso para a 
Arasaka. Ele tem uma opinião negativa sobre Johnny Silverhand, o antigo líder da banda Samurai e ativista anti-corporação, que ele acredita ser 
um terrorista. Ele também tem um conflito com Yorinobu Arasaka, o filho rebelde do líder da Arasaka, que assassinou seu pai e roubou o Relic.  Ele 
é o principal bioengenheiro da corporação Arasaka, especializado em redes neurais. Ele é o responsável por criar o Relic, um biochip que usa 
o programa Soulkiller de Alt Cunningham para armazenar a consciência humana. Se junta a Kang Tao para enviar dados sobre a Arasaka.`, 
association:`Kang Tao`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/andershellman.webp`, 
imgBox: `./src/about-characters/for-button-click/hellman.webp`},

{name: `Claire Russell`, description: `Claire Russell é uma das personagens secundárias que V pode conhecer e interagir no jogo. Ela oferece 
a V uma série de missões chamadas The Beast in Me, nas quais eles participam de várias corridas de rua contra outros competidores. Ela tem uma 
rivalidade com um piloto chamado Sampson, que ela culpa pela morte de seu marido. Ela é a bartender do Afterlife, um dos bares mais famosos 
de Night City, e também uma mecânica e piloto de corridas ilegais. Ela é uma mulher trans que não tem nenhum implante cibernético em seu corpo.`, 
association:`Afterlife`, status:`Viva`, imgModal: `./src/about-characters/for-modal/clairerussell.webp`, 
imgBox: `./src/about-characters/for-button-click/claire.webp`},

{name: `Dexter DeShawn`, description: `Dexter DeShawn, ou simplesmente Dex, é um dos principais antagonistas de Cyberpunk 2077, servindo como 
o antagonista secundário do Ato 1. Ele é um fixador conhecido em Night City, que contrata mercenários para realizar trabalhos perigosos e 
lucrativos. Em 2077, ele havia retornado recentemente à cidade depois de passar alguns anos fora do radar. Dex é um personagem ambicioso 
e manipulador, que não se importa com a lealdade ou o bem-estar de seus subordinados. Ele tem uma rivalidade com Meredith Stout, uma 
agente da corporação Militech, que tenta interferir no seu plano. Ele também tem um conflito com Yorinobu Arasaka, o filho rebelde do líder 
da corporação Arasaka, que assassinou seu pai e roubou o Relic.`, 
association:`Afterlife`, status:`Morto`, imgModal: `./src/about-characters/for-modal/dexterdeShawn.webp`, 
imgBox: `./src/about-characters/for-button-click/dexter-deshawn.png`},

{name: `Evelyn Parker`, description: `Evelyn Parker é uma prostituta de luxo e espiã corporativa, que trabalha para a Clouds, um clube de 
realidade virtual. Ela é a responsável por envolver V e Jackie no roubo do biochip Relic, que contém a consciência de Johnny Silverhand. Evelyn 
Parker é uma personagem trágica e ambiciosa, que representa os temas de exploração e manipulação em Cyberpunk 2077. Ela é uma das possíveis 
aliadas de V, mas também tem seus próprios interesses e segredos. Ela é uma das personagens que podem influenciar o final do jogo, dependendo 
das escolhas do jogador.`, 
association:`Clouds`, status:`Morta`, imgModal: `./src/about-characters/for-modal/evelynparker.webp`, 
imgBox: `./src/about-characters/for-button-click/evellyn-parker.webp`},

{name: `Goro Takemura`, description: `Goro Takemura é o ex-guarda-costas do líder da Arasaka, Saburo Arasaka, que se torna um fugitivo após 
o assassinato de seu chefe. Ele se alia a V para buscar justiça e vingança. É um homem honrado e leal, que segue o código samurai de seu clã. 
Ele é um guerreiro habilidoso, que usa uma katana e uma pistola. Aparece em várias missões principais do jogo, como Playing for Time, 
Down on the Street, Play It Safe, Gimme Danger, Search and Destroy e Where Is My Mind. Ele é um dos possíveis aliados de V, mas também 
tem seus próprios conflitos e dilemas. Ele é um dos personagens que podem influenciar o final do jogo, dependendo das escolhas do jogador.`, 
association:`Arasaka`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/gorotakemura.webp`, 
imgBox: `./src/about-characters/for-button-click/takemura.webp`},

{name: `Jackie Welles`, description: `Jackie Welles é um dos personagens principais de Cyberpunk 2077, ele é um parceiro de crime e amigo de V, 
o protagonista do jogo. Ele é um mercenário leal e carismático, que sonha em se tornar rico e famoso. É um personagem divertido e leal, que 
representa os temas de amizade e sonhos em Cyberpunk 2077. Ele é um dos personagens mais queridos pelos fãs do jogo. Ele tem uma família que 
o ama, e uma moto chamada Arch Nazare, que ele deixa para V após sua morte`, 
association:`Afterlife`, status:`Morto`, imgModal: `./src/about-characters/for-modal/jackiewelles.webp`, 
imgBox: `./src/about-characters/for-button-click/jaquito-welles.webp`},

{name: `Johnny Silverhand`, description: `Johnny Silverhand é um roqueiro rebelde e ativista que morreu há 50 anos, mas cuja consciência 
digitalizada está presa no biochip implantado na cabeça de V, o protagonista do jogo. Ele é dublado por Keanu Reeves. É um personagem carismático 
e sarcástico, que tem uma forte oposição às corporações que dominam o mundo. Ele foi o líder da banda Samurai, que fez sucesso com músicas 
como Chippin In e Never Fade Away. Ele também foi um veterano da Quarta Guerra Corporativa, onde ele participou de um ataque à torre da Arasaka, 
uma das maiores corporações do mundo. Ele foi morto por Adam Smasher, um ciborgue gigantesco que trabalha para a Arasaka.`, 
association:`Samurai`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/silverhand.webp`, 
imgBox: `./src/about-characters/for-button-click/johnny-silverhand.png`},

{name: `Judy Alvarez`, description: `Judy Alvarez é uma hacker especialista em realidade virtual, que trabalha para as Moxes, uma gangue formada 
por prostitutas e trabalhadores sexuais. Ela é uma das possíveis romances de V, se ele for uma mulher. Uma mulher inteligente e corajosa, que 
usa um moicano azul e um casaco de couro. Ela é uma das principais aliadas de V, e o ajuda em várias missões relacionadas ao clube de realidade 
virtual Clouds, onde ela tenta proteger as garotas que trabalham lá.`, 
association:`Moxes`, status:`Viva`, imgModal: `./src/about-characters/for-modal/judyalvarez.webp`, 
imgBox: `./src/about-characters/for-button-click/judy-alvarez.webp`},

{name: `Kerry Eurodyne`, description: `Kerry Eurodyne é um personagem que pode ser um parceiro romântico para um V 
masculino. Ele era o baixista da banda Samurai, que tinha Johnny Silverhand como vocalista. Depois que Johnny desapareceu, Kerry seguiu uma 
carreira solo de sucesso e se tornou uma das maiores celebridades de Night City.`, 
association:`Samurai`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/kerryeurodyne.webp`, 
imgBox: `./src/about-characters/for-button-click/kerry-eurodyne.webp`},

{name: `Misty Olszewski`, description: `Misty Olszewski é uma personagem do jogo Cyberpunk 2077, que é amiga de V e namorada de Jackie Welles. 
Ela é uma espiritualista da nova era e dona da loja Mistys Esoterica, onde vende itens como incenso, cartas de tarô e pingentes da sorte. 
Ela também é capaz de ler o tarô e prever o futuro de V.`, 
association:`Nenhuma`, status:`Viva`, imgModal: `./src/about-characters/for-modal/misty.webp`, 
imgBox: `./src/about-characters/for-button-click/misty-olszewski.webp`},

{name: `Panam Palmer`, description: `Panam Palmer é uma personagem que pode ser um parceiro romântico para um V masculino. 
Ela é uma nômade, membro dos Aldecaldos, uma família de espíritos livres que vivem fora de Night City. Ela tem uma personalidade 
forte, independente e leal, e se importa muito com seus amigos e sua família. Ela também é uma excelente piloto e mecânica, capaz de consertar 
e modificar veículos para diferentes situações.`, 
association:`Aldecaldos`, status:`Viva`, imgModal: `./src/about-characters/for-modal/panampalmer.webp`, 
imgBox: `./src/about-characters/for-button-click/panam-palmer.webp`},

{name: `Rogue Amendiares`, description: `Rogue Amendiares é uma personagem que foi uma mercenária e parceira de 
Johnny Silverhand no passado. Agora, ela é uma fixadora que opera na boate The Afterlife, e tem uma grande influência sobre os 
mercenários de Night City. Ela pode ser uma opção de romance para Johnny, mas não para V. Ela também tem um papel importante em um dos 
finais possíveis do jogo.`, 
association:`Afterlife`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/rogue.webp`, 
imgBox: `./src/about-characters/for-button-click/rogue.webp`},

{name: `River Ward`, description: `River Ward é um personagem que pode ser um parceiro romântico para uma V feminina. 
Ele é um detetive do Departamento de Polícia de Night City que conhece V pela primeira vez durante a missão secundária I Fought The Law. Ele tem 
uma personalidade gentil, determinada e idealista, e se preocupa com a justiça e a proteção dos inocentes.`, 
association:`Polícia de Night city`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/riverward.webp`, 
imgBox: `./src/about-characters/for-button-click/river-ward.webp`},

{name: `Viktor Vector`, description: `Viktor Vector é um personagem que é um ripperdoc e amigo de V e Jackie Welles. 
Ele é um dos melhores ripperdocs de Watson, e tem uma clínica no bairro de Little China. Ele também é uma lenda viva de Night City, pois foi 
um ex-boxeador do clube Night City Devils. Ele não pode ser um parceiro romântico de V, mas pode aparecer nos créditos finais do jogo, 
dependendo das escolhas do jogador.`, 
association:`Ripperdoc`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/viktorvektor.webp`, 
imgBox: `./src/about-characters/for-button-click/viktor.webp`},

{name: `Yorinobu Arasaka`, description: `Yorinobu Arasaka é o principal antagonista do jogo Cyberpunk 2077. Ele é o segundo filho de 
Saburo Arasaka, o líder da Arasaka Corporation, uma das maiores e mais poderosas corporações do mundo. Ele é um rebelde que se opõe ao 
império de seu pai e tenta destruí-lo por dentro. Ele é responsável pelo assassinato de Saburo e pelo roubo do Relic, um dispositivo que 
contém a personalidade de Johnny Silverhand, um roqueiro lendário e inimigo de Arasaka. Ele é um personagem complexo e ambíguo, que tem 
seus próprios motivos e ideais, mas também é cruel e implacável com seus inimigos.`, 
association:`Arasaka`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/yorinobuarasaka.webp`, 
imgBox: `./src/about-characters/for-button-click/yorinobu-arasaka.webp`},

{name: `Delamain`, description: `Delamain é um serviço de táxi gerenciado por uma inteligência artificial. Ele tem uma personalidade refinada, 
educada e humorística, e se preocupa com a segurança e o conforto dos seus passageiros. Ele também é um parceiro comercial de V, que o ajuda a 
recuperar seus táxis que se tornaram rebeldes e a resolver um problema com um vírus que ameaça sua existência. Dependendo das escolhas do 
jogador, Delamain pode ter diferentes finais, que afetam seu relacionamento com V e o desfecho do jogo.`, 
association:`Nenhuma`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/delamain.png`, 
imgBox: `./src/about-characters/for-button-click/delamain.webp`},

{name: `David Martinez`, description: `David Martinez é o protagonista do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. 
Ele é um garoto de rua que se torna um mercenário, ou edgerunner, depois de perder tudo em um tiroteio. Ele usa vários implantes cibernéticos 
e armas para sobreviver no mundo distópico de Night City. Se torna uma lenda na Afterlife ao entrar na torre Arasaka para salvar sua amada Lucy Ku
shinada, e, enfrentar Adam Smasher. Acaba sendo morto por Adam Smasher.`, 
association:`Afterlife`, status:`Morto`, imgModal: `./src/about-characters/for-modal/davidmartinez.webp`, 
imgBox: `./src/about-characters/for-button-click/david_martinez_.webp`},

{name: `Rebecca`, description: `Rebecca é uma personagem secundária do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. 
Ela é uma Solo, uma mercenária especializada em combate, que tem uma personalidade afiada, imprevisível e leal. Ela faz parte da equipe de Maine, 
um fixador que contrata edgerunners, ou mercenários do submundo, para realizar trabalhos perigosos. Ela se interessa por David Martinez. Ela 
também tem uma rivalidade com seu irmão Pilar, outro Solo que trabalha com Maine.`, 
association:`Afterlife`, status:`Morta`, imgModal: `./src/about-characters/for-modal/rebecca-edgerunners.webp`, 
imgBox: `./src/about-characters/for-button-click/rebecca.webp`},

{name: `Falco`, description: `Falco é um personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. Ele é um ex-nômade 
que serve como piloto e mecânico para a equipe de David Martinez.  Ele tem uma aparência de caubói e usa uma arma chamada 
Techtronika RT-46 Burya. Ele aparece na missão secundária Over the Edge em Cyberpunk 2077, onde ele envia uma mensagem para V sobre o destino 
de David.`, 
association:`Afterlife`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/falco.png`, 
imgBox: `./src/about-characters/for-button-click/falco.webp`},

{name: `Lucy Kushinada`, description: `Lucy Kushinada é uma personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. 
Ela é uma netrunner misteriosa e introvertida que se envolve romanticamente com David Martinez, o protagonista do anime. Ela trabalhava como 
netrunner para a Arasaka quando era criança, mas perdeu seus colegas em um incidente com um vírus. Ela tem um ódio pela Arasaka e sonha em 
viajar para a Lua.`, 
association:`Afterlife`, status:`Viva`, imgModal: `./src/about-characters/for-modal/lucy.png`, 
imgBox: `./src/about-characters/for-button-click/lucy.webp`},

{name: `kiwi`, description: `Kiwi é uma personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. Ela é uma netrunner 
experiente e a mentora de Lucy, uma das parceiras de David Martinez, o protagonista do anime. Ela tem um comportamento frio e misterioso, 
e usa um implante ocular que lhe permite acessar a rede com facilidade.`, 
association:`Afterlife`, status:`Morta`, imgModal: `./src/about-characters/for-modal/kiwi.png`, 
imgBox: `./src/about-characters/for-button-click/kiwi.webp`},

{name: `Maine`, description: `Maine é um personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. Ele é um fixador que 
contrata edgerunners, ou mercenários do submundo, para realizar trabalhos perigosos em Night City. Ele costumava ser um soldado militar antes de 
se tornar um mercenário. Agora um veterano em Night City, Maine sonha em “tornar-se grande”, embora ele valorize suas amizades com sua equipe mais 
do que sua própria glória.`, 
association:`Afterlife`, status:`Morto`, imgModal: `./src/about-characters/for-modal/maine.png`, 
imgBox: `./src/about-characters/for-button-click/maine.png`},

{name: `Dorio`, description: `Dorio é uma personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. Ela é uma mercenária 
veterana e o braço direito de Maine, um fixador que contrata edgerunners, ou mercenários do submundo. Ela é forte, mas apesar de seu exterior 
duro, Dorio tem um lado suave que ela só mostra para as pessoas em quem confia.`, 
association:`Afterlife`, status:`Morta`, imgModal: `./src/about-characters/for-modal/dorio.png`, 
imgBox: `./src/about-characters/for-button-click/dorio.webp`},

{name: `Pilar`, description: `Pilar é um personagem do anime Cyberpunk: Edgerunners, que é baseado no jogo Cyberpunk 2077. Ele é um Solo, um 
mercenário especializado em combate, que tem uma personalidade afiada, imprevisível e leal. Ele faz parte da equipe de Maine, um fixador que 
contrata edgerunners, ou mercenários do submundo, para realizar trabalhos perigosos em Night City. Tem uma rivalidade com sua irmã Rebecca, 
outra Solo que trabalha com Maine.`, 
association:`Afterlife`, status:`Morto`, imgModal: `./src/about-characters/for-modal/pilar.png`, 
imgBox: `./src/about-characters/for-button-click/pilar.webp`},

{name: `Gloria Martinez`, description: `Gloria Martinez é a mãe de David Martinez, o protagonista do anime Cyberpunk: Edgerunners, que é baseado 
no jogo Cyberpunk 2077. Ela é uma técnica médica de emergência que trabalha no Centro Médico de Night City e que vende implantes cibernéticos 
roubados de cadáveres para edgerunners, ou mercenários do submundo. Ela se esforça para dar uma vida melhor para seu filho, mas acaba se 
endividando com a Arasaka, uma poderosa corporação que controla a cidade.`, 
association:`Nenhuma`, status:`Morta`, imgModal: `./src/about-characters/for-modal/gloria.png`, 
imgBox: `./src/about-characters/for-button-click/gloria.webp`},

{name: `Solomon Reed`, description: `Solomon Reed é um personagem que é um agente ativo da Agência Federal de Inteligência 
da NUSA, a nação que se formou após a guerra de unificação dos Estados Unidos. Ele possui uma vasta experiência em operações de inteligência 
secreta, sendo capaz de identificar espiões e netrunners, extrair informações valiosas e infiltrar-se em locais altamente fortificados. Ele tem 
uma lealdade inabalável e um forte senso de responsabilidade, sendo um recurso valioso para sua organização. Ele também aparece em algumas missões 
secundárias do jogo, como Phantom Liberty e Over the Edge, onde ele se alia a V, um mercenário, para resgatar a presidente da NUSA, 
Rosalind Myers, que caiu em Night City após um acidente espacial.`, 
association:`NUSA`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/solomon-reed.webp`, 
imgBox: `./src/about-characters/for-button-click/solomon.webp`},

{name: `Song So Mi`, description: `Song So Mi, também conhecida como Songbird, é uma personagem netrunner da FIA, a Agência Federal de 
Inteligência da NUSA, que trabalha com a presidente Rosalind Myers. Ela é uma ex-hacker que foi recrutada pela FIA depois de um roubo ousado. 
Ela tem uma grande habilidade para invadir fortalezas de dados corporativos e se comunicar com outras inteligências artificiais.`, 
association:`NUSA`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/songbird.webp`, 
imgBox: `./src/about-characters/for-button-click/songbird.webp`},

{name: `Rosalind Myers`, description: `Rosalind Myers é a presidente da NUSA, a nação que se formou após a guerra de unificação dos Estados 
Unidos. Ela é uma ex-CEO da Militech, uma das maiores corporações militares do mundo. Ela se envolve em um acidente espacial que a faz cair em 
Night City, uma cidade dominada pelo crime e pela corrupção. Ela conta com a ajuda de V, um mercenário, para escapar dos seus inimigos e 
recuperar sua netrunner, Songbird, que foi sequestrada. Ela também tem um papel importante em um dos finais possíveis do jogo, dependendo das 
escolhas do jogador.`, 
association:`NUSA`, status:`Viva`, imgModal: `./src/about-characters/for-modal/rosalind.png`, 
imgBox: `./src/about-characters/for-button-click/myers.png`},

{name: `Kurt Hansen`, description: `Kurt Hansen é um personagem do jogo Cyberpunk 2077. Ele é um ex-coronel da NUSA que se tornou o líder de 
Dogtown e da facção Barghest. Ele é um antagonista que entra em conflito com V. Principal vilão da expansão Phantom Liberty.`, 
association:`Barghest`, status:`Morto`, imgModal: `./src/about-characters/for-modal/kurt.webp`, 
imgBox: `./src/about-characters/for-button-click/colonel-kurt-hansen.webp`},

{name: `Alena Xenakis`, description: `Alena Xenakis, também conhecida como Alex, é uma personagem do jogo Cyberpunk 2077. Ela é uma agente secreta 
da FIA, a Agência Federal de Inteligência da NUSA, que trabalha com a presidente Rosalind Myers. Ela tem um grande talento para assumir diferentes 
identidades, mas seu tempo passado infiltrada em Dogtown só a tornou mais implacável.`, 
association:`NUSA`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/alena.webp`, 
imgBox: `./src/about-characters/for-button-click/alena-alex.png`},

{name: `Maman Brigitte`, description: `Maman Brigitte é a líder dos Voodoo Boys, uma gangue de netrunners que domina a comunidade haitiana de 
Pacifica em Cyberpunk 2077. Ela é uma netrunner habilidosa que contratou Evelyn para roubar o Relic, um dispositivo que contém a personalidade 
de Johnny Silverhand. Ela tem seus próprios planos para o biochip e entra em conflito com V, um mercenário que possui o Relic.`, 
association:`Garotos Vodu`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/brigitte.webp`, 
imgBox: `./src/about-characters/for-button-click/brigitte.webp`},

{name: `Placide`, description: `Placide é um personagem do jogo Cyberpunk 2077. Ele é um dos líderes dos Voodoo Boys, uma gangue de netrunners 
que domina a comunidade haitiana de Pacifica. Ele é um netrunner habilidoso que contratou V, um mercenário, para ajudá-lo a invadir a rede da 
Arasaka, uma poderosa corporação. Ele tem uma personalidade fria, calculista e desconfiada, e não gosta de ajudar estranhos. `, 
association:`Garotos Vodu`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/placide.webp`, 
imgBox: `./src/about-characters/for-button-click/placide.webp`},

{name: `Saburo Arasaka`, description: `Saburo Arasaka é o principal antagonista da franquia de ficção científica Cyberpunk. Ele é o CEO da Arasaka 
Corporation e um dos homens mais poderosos do mundo, que pretende controlá-lo através de sua empresa. Ele é um líder ambicioso, pragmático e 
implacável, que não hesita em usar a força para defender seus interesses. Pai de Yorinobu Arasaka e Hanako Arasaka.`, 
association:`Arasaka`, status:`Morto`, imgModal: `./src/about-characters/for-modal/saburo.webp`, 
imgBox: `./src/about-characters/for-button-click/saburo.webp`},

{name: `Hanako Arasaka`, description: `Hanako Arasaka é uma personagem do jogo, filha de Saburo Arasaka e irmã mais nova de Yorinobu. Ela é uma 
das figuras mais enigmáticas da corporação Arasaka, e sua vida é cercada de segredos e protegida por uma equipe de advogados. Ela também é uma 
netrunner habilidosa, que mantém contato com o mundo exterior através da rede. Ela tem um papel importante na história do jogo, dependendo das 
escolhas do jogador.`, 
association:`Arasaka`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/hanako.webp`, 
imgBox: `./src/about-characters/for-button-click/hanako.webp`},

{name: `Lizzy Wizzy`, description: `Lizzy Wizzy é uma personagem do jogo Cyberpunk 2077, interpretada pela cantora Grimes. Ela é uma estrela 
do pop cyborg, que substituiu todo o seu corpo por implantes cibernéticos depois de um incidente traumático. Ela é conhecida por suas músicas, 
sua aparência e sua personalidade excêntrica. Ela também tem uma relação complicada com seu namorado e empresário, Liam Northam, que envolve 
traição, violência e manipulação.`, 
association:`Nenhuma`, status:`Viva`, imgModal: `./src/about-characters/for-modal/lizzy.webp`, 
imgBox: `./src/about-characters/for-button-click/lizzy.webp`},

{name: `Olhos Azuis`, description: `Olhos Azuis é um personagem misterioso do jogo Cyberpunk 2077, que aparece em algumas missões e tem uma 
influência oculta sobre os acontecimentos de Night City. Ele tem olhos azuis brilhantes, que podem indicar que ele é um hospedeiro de uma 
inteligência artificial desonesta. Ele também pode ter alguma relação com o lendário mercenário Morgan Blackhand, que desapareceu após a 
Quarta Guerra Corporativa`, 
association:`Nenhuma`, status:`Vivo`, imgModal: `./src/about-characters/for-modal/blue-eyes.png`, 
imgBox: `./src/about-characters/for-button-click/blue-eyes.webp`},

{name: `Meredith Stout`, description: `Meredith Stout é uma personagem do jogo Cyberpunk 2077, uma agente sênior da Militech. Ela é uma das opções 
de romance do jogo, mas apenas para um encontro casual. Ela aparece na missão principal “The Pickup”, onde oferece ao jogador um credchip 
infectado para comprar um drone da gangue Maelstrom. Dependendo das escolhas do jogador, ela pode se tornar hostil ou amigável, e enviar uma 
mensagem mais tarde para marcar um encontro em um motel. Ela é conhecida por sua personalidade fria e autoritária, e seu estilo de luta 
agressivo.`, 
association:`Militech`, status:`Depende do jogador`, imgModal: `./src/about-characters/for-modal/meredith.png`, 
imgBox: `./src/about-characters/for-button-click/stout.webp`},

{name: `Morgan Blackhand`, description: `Morgan Blackhand é um personagem do jogo Cyberpunk 2077, um lendário mercenário e solo. Ele é conhecido 
por seu braço cibernético preto, que lhe dá o nome, e por sua habilidade em combate. Ele participou da Quarta Guerra Corporativa, onde enfrentou 
o líder da Arasaka, Saburo Arasaka, em uma batalha épica no topo da Torre Arasaka. Seu destino após a guerra é um mistério, mas há rumores de que 
ele ainda está vivo e escondido em algum lugar.`, 
association:`Afterlife`, status:`Indefinido`, imgModal: `./src/about-characters/for-modal/morgan.png`, 
imgBox: `./src/about-characters/for-button-click/morgan-blackhand.png`}]



