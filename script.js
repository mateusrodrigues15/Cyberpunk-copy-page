for (const buttonDocument of buttonClickToDocument) {

    buttonDocument.addEventListener ('click', function () {

        if (buttonDocument.innerHTML === 'Introdução') {

            titleToScroll[0].scrollIntoView({behavior: 'smooth'})
        }

        if (buttonDocument.innerHTML === 'Rumo de vida') {

            titleToScroll[1].scrollIntoView({behavior: 'smooth'})
        }

        if (buttonDocument.innerHTML === 'Sobre Personagens') {

            titleToScroll[2].scrollIntoView({behavior: 'smooth'})
        }

        if (buttonDocument.innerHTML === 'Anime e dlc') {

            titleToScroll[3].scrollIntoView({behavior: 'smooth'})
        }

        if (buttonDocument.innerHTML === 'Comprar Cyberpunk 2077') {

            titleToScroll[4].scrollIntoView({behavior: 'smooth'})
        }
    })
}
const changeImgHeaderAndLinks = () => {

    
    setInterval(() => {

        

        if(imgHeaderOne.className === 'img-header') {

            imgHeaderTwo.classList.add('img-header')

                imgHeaderTwo.classList.remove('img-header-seccond')

                imgHeaderOne.classList.add('img-header-seccond')
            
                imgHeaderOne.classList.remove('img-header')
            
                header.style = `background-image: url('./src/cyber-header-two-img.gif'); background-size: cover;
                transition: background-image 3s;`

            linksChangeColorBottom[0].style = `transition: color 5s;
            color: rgb(57, 255, 20);`
            
                linksChangeColorBottom[1].style = `transition: color 5s;
                color: rgb(57, 255, 20);`
            
                linksChangeColorTop[0].style = `transition: color 5s;
                color: rgb(252, 238, 10);`
            
                linksChangeColorTop[1].style = `transition: color 5s;
                color: rgb(252, 238, 10);`
            
                linksChangeColorTop[2].style = `transition: color 5s;
                color: rgb(252, 238, 10);`

                if(johnnyImg.name === 'johnny') {

                    johnnyImg.src = './src/about-characters/v.png'
                    johnnyImg.setAttribute('name', 'v')
                    vImg.src = './src/about-characters/johnny.png'
                    vImg.setAttribute('name', 'johnny')
                }
            }

        else if(imgHeaderTwo.className === 'img-header') {

            imgHeaderOne.classList.add('img-header')

                imgHeaderOne.classList.remove('img-header-seccond')

                imgHeaderTwo.classList.remove('img-header')

                imgHeaderTwo.classList.add('img-header-seccond')

                header.style = `transition: background-image 3s;`

                linksChangeColorBottom[0].style = `transition: color 5s;
                color: rgb(0, 240, 255);`
                
                    linksChangeColorBottom[1].style = `transition: color 5s;
                    color: rgb(0, 240, 255);`
                
                    linksChangeColorTop[0].style = `transition: color 5s;
                    color: rgb(229, 9, 20);`
                
                    linksChangeColorTop[1].style = `transition: color 5s;
                    color: rgb(229, 9, 20);`
                
                    linksChangeColorTop[2].style = `transition: color 5s;
                    color: rgb(229, 9, 20);`

                    if(johnnyImg.name === 'v') {

                        johnnyImg.src = './src/about-characters/johnny.png'
                        johnnyImg.setAttribute ('name', 'johnny')
                        vImg.src = './src/about-characters/v.png'
                        vImg.setAttribute('name', 'v')
                    }
        }

    }, timeForChangeImgHeader);

}

const addInfAndRotateImg = () => {

    buttonActiveMoreInfAndRotateImgs.classList.remove('to-appear')
    buttonRemoveInf.classList.remove('to-vanish')
    imgRotate[0].style = `transition: transform 4s; transform: rotate(360deg);`
    imgRotate[1].style = `transition: transform 4s; transform: rotate(360deg);`
    adicionalInfIntro[0].classList.remove('to-vanish')
    adicionalInfIntro[1].classList.remove('to-vanish')
    adicionalInfIntro[0].style =`display: flex;`;
    adicionalInfIntro[1].style = `display: flex;`;
    buttonActiveMoreInfAndRotateImgs.classList.add('to-vanish')
    adicionalInfIntro[0].classList.add('to-appear')
    adicionalInfIntro[1].classList.add('to-appear')
    buttonRemoveInf.classList.add('to-appear')

    setTimeout(function () {
        
        buttonActiveMoreInfAndRotateImgs.style.display = `none`
        buttonRemoveInf.style.display = `block`
        adicionalInfIntro[0].scrollIntoView({behavior: 'smooth'})
    },1500)

}

const removeInf = () => {

    imgRotate[0].style = `transition: transform 4s; transform: rotate(-360deg);`
    imgRotate[1].style = `transition: transform 4s; transform: rotate(-360deg);`
    buttonActiveMoreInfAndRotateImgs.classList.remove('to-vanish')
    adicionalInfIntro[0].classList.remove('to-appear')
    adicionalInfIntro[1].classList.remove('to-appear')
    adicionalInfIntro[0].classList.add('to-vanish')
    adicionalInfIntro[1].classList.add('to-vanish')
    buttonRemoveInf.classList.remove('to-appear')
    buttonRemoveInf.classList.add('to-vanish')
    buttonActiveMoreInfAndRotateImgs.classList.add('to-appear')

     setTimeout (function () {

        adicionalInfIntro[0].style.display =`none`;
        adicionalInfIntro[1].style.display = `none`;
        buttonRemoveInf.style.display = `none`
        buttonActiveMoreInfAndRotateImgs.style.display = `block`
     }, 1500)

}

for (let i = 0; i <buttonLifePathModal.length; i++) {
    
    buttonLifePathModal[i].addEventListener('click', function(){

        document.body.style.overflow = 'hidden'

         if(buttonLifePathModal[i].name === 'nomad') {

            modalColor.style = `background: linear-gradient(to bottom, rgb(183, 174, 200), rgb(208, 189, 207), rgb(81, 125, 142));`
            letterModal.children[0].src = lifePathContent[0].imgLifePath
            letterModal.children[0].style = `background:  linear-gradient(to bottom, rgb(183, 174, 200), rgb(208, 189, 207), rgb(81, 125, 142));`
            buttonExitModal.children[0].style = `background: linear-gradient(to bottom, rgb(183, 174, 200), rgb(208, 189, 207), rgb(81, 125, 142));`
            namechangeLifePath.innerHTML = lifePathContent[0].nameMale
            namechangeLifePath.style = `color: rgb(137, 30, 57);`
            buttonModal[0].style = `color: rgba(137, 30, 57, .9);`
            buttonModal[1].style = `color: rgba(137, 30, 57, .9);`
            buttonModal[2].style = `color: rgba(137, 30, 57, .9);`
            buttonModal[3].style = `color: rgba(137, 30, 57, .9);`
            imgchangeLifePath.src = lifePathContent[0].imgMale
            contentItemsModal[0].innerHTML = lifePathContent[0].history
            contentItemsModal[1].innerHTML = lifePathContent[0].prologue
            contentItemsModal[2].innerHTML = lifePathContent[0].exclusiveMission
            contentItemsModal[3].innerHTML = lifePathContent[0].dialogOptions


            rightArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[0].imgFemale
                namechangeLifePath.innerHTML = lifePathContent[0].nameFemale
                rightArrow.disabled = true
                leftArrow.disabled = false
            })

            leftArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[0].imgMale
                namechangeLifePath.innerHTML = lifePathContent[0].nameMale
                rightArrow.disabled = false
                leftArrow.disabled = true
            })
        }

        else if (buttonLifePathModal[i].name === 'street') {

            modalColor.style = `background: linear-gradient(to bottom, rgb(60, 133, 128), rgb(218, 184, 70), rgb(43, 22, 63));`
            letterModal.children[0].src = lifePathContent[1].imgLifePath
            letterModal.children[0].style = `background: linear-gradient(to bottom, rgb(60, 133, 128), rgb(218, 184, 70), rgb(43, 22, 63));`
            buttonExitModal.children[0].style = `background: linear-gradient(to bottom, rgb(60, 133, 128), rgb(218, 184, 70), rgb(43, 22, 63));`
            namechangeLifePath.innerHTML = lifePathContent[1].nameFemale
            buttonModal[0].style = `color: #1C1C1C;`
            buttonModal[1].style = `color: #1C1C1C;`
            buttonModal[2].style = `color: #1C1C1C;`
            buttonModal[3].style = `color: #1C1C1C;`
            namechangeLifePath.style = `color: #1C1C1C;`
            imgchangeLifePath.src = lifePathContent[1].imgFemale
            contentItemsModal[0].innerHTML = lifePathContent[1].history
            contentItemsModal[1].innerHTML = lifePathContent[1].prologue
            contentItemsModal[2].innerHTML = lifePathContent[1].exclusiveMission
            contentItemsModal[3].innerHTML = lifePathContent[1].dialogOptions

            rightArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[1].imgMale
                namechangeLifePath.innerHTML = lifePathContent[1].nameMale
                rightArrow.disabled = true
                leftArrow.disabled = false
            })

            leftArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[1].imgFemale
                namechangeLifePath.innerHTML = lifePathContent[1].nameFemale
                rightArrow.disabled = false
                leftArrow.disabled = true
            })
        }

        else if (buttonLifePathModal[i].name === 'corp') {

            modalColor.style = `background: linear-gradient(to bottom, rgb(20, 32, 76), rgb(128, 86, 121), rgb(155, 35, 87));`
            letterModal.children[0].src = lifePathContent[2].imgLifePath
            letterModal.children[0].style = `background: linear-gradient(to bottom, rgb(20, 32, 76), rgb(128, 86, 121), rgb(155, 35, 87));`
            buttonExitModal.children[0].style = `background: linear-gradient(to bottom, rgb(20, 32, 76), rgb(128, 86, 121), rgb(155, 35, 87));`
            namechangeLifePath.innerHTML = lifePathContent[2].nameMale
            namechangeLifePath.style = `color: #ffffff;`
            buttonModal[0].style = `color: #7B68EE;`
            buttonModal[1].style = `color: #7B68EE;`
            buttonModal[2].style = `color: #7B68EE;`
            buttonModal[3].style = `color: #7B68EE;`
            imgchangeLifePath.src = lifePathContent[2].imgMale
            contentItemsModal[0].innerHTML = lifePathContent[2].history
            contentItemsModal[1].innerHTML = lifePathContent[2].prologue
            contentItemsModal[2].innerHTML = lifePathContent[2].exclusiveMission
            contentItemsModal[3].innerHTML = lifePathContent[2].dialogOptions

            rightArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[2].imgFemale
                namechangeLifePath.innerHTML = lifePathContent[2].nameFemale
                rightArrow.disabled = true
                leftArrow.disabled = false
            })

            leftArrow.addEventListener('click', function() {

                imgchangeLifePath.src = lifePathContent[2].imgMale
                namechangeLifePath.innerHTML = lifePathContent[2].nameMale
                rightArrow.disabled = false
                leftArrow.disabled = true
            })
        }

        setTimeout (function () {

            modalItems.style.display = `flex`
        
        }, 500)

        buttonExitModal.addEventListener('click', function () {
            document.body.style.overflow = 'auto'
            modalItems.style.display = `none`
            rightArrow.disabled = false
            leftArrow.disabled = true
            boxForItemsModal[0].style.display = ''
            boxForItemsModal[1].style.display = ''
            boxForItemsModal[2].style.display = ''
            boxForItemsModal[3].style.display = ''
            contentItemsModal[0].classList.add('content-hidden')
            contentItemsModal[0].classList.remove('content-appear')
            contentItemsModal[1].classList.add('content-hidden')
            contentItemsModal[1].classList.remove('content-appear')
            contentItemsModal[2].classList.add('content-hidden')
            contentItemsModal[2].classList.remove('content-appear')
            contentItemsModal[3].classList.add('content-hidden')
            contentItemsModal[3].classList.remove('content-appear')
        })
    })
}

for (let i = 0; i <buttonModal.length; i++) {

    buttonModal[i].addEventListener ('click', function() {

        const paragraph = this.nextElementSibling
        
        if (buttonModal[i].name === 'history') {

            const boxSafe = buttonModal[i].name

            paragraph.classList.remove('content-hidden')
            paragraph.classList.add('content-appear')

            boxForItemsModal[1].style.display = 'none'
            boxForItemsModal[2].style.display = 'none'
            boxForItemsModal[3].style.display = 'none'

            setTimeout (function () {

                buttonModal[i].setAttribute('name', 'closed')

            }, 500)

            buttonModal[i].addEventListener('click', function() {

                if(buttonModal[i].name === 'closed'){

                    buttonModal[i].setAttribute('name', boxSafe)

                    boxForItemsModal[1].style.display = ''
                    boxForItemsModal[2].style.display = ''
                    boxForItemsModal[3].style.display = ''
                    paragraph.classList.add('content-hidden')
                    paragraph.classList.remove('content-appear')
                }
            })
        }

        else if (buttonModal[i].name === 'prologue') {

            const boxSafe = buttonModal[i].name

            paragraph.classList.remove('content-hidden')
            paragraph.classList.add('content-appear')

            boxForItemsModal[0].style.display = 'none'
            boxForItemsModal[2].style.display = 'none'
            boxForItemsModal[3].style.display = 'none'

            setTimeout (function () {

                buttonModal[i].setAttribute('name', 'closed')

            }, 500)

            buttonModal[i].addEventListener('click', function() {

                if(buttonModal[i].name === 'closed'){

                    buttonModal[i].setAttribute('name', boxSafe)

                    boxForItemsModal[0].style.display = ''
                    boxForItemsModal[2].style.display = ''
                    boxForItemsModal[3].style.display = ''
                    paragraph.classList.add('content-hidden')
                    paragraph.classList.remove('content-appear')
                }
            })
        }

        else if (buttonModal[i].name === 'mission') {

            const boxSafe = buttonModal[i].name

            paragraph.classList.remove('content-hidden')
            paragraph.classList.add('content-appear')

            boxForItemsModal[0].style.display = 'none'
            boxForItemsModal[1].style.display = 'none'
            boxForItemsModal[3].style.display = 'none'

            setTimeout (function () {

                buttonModal[i].setAttribute('name', 'closed')

            }, 500)

            buttonModal[i].addEventListener('click', function() {

                if(buttonModal[i].name === 'closed'){

                    buttonModal[i].setAttribute('name', boxSafe)

                    boxForItemsModal[0].style.display = ''
                    boxForItemsModal[1].style.display = ''
                    boxForItemsModal[3].style.display = ''
                    paragraph.classList.add('content-hidden')
                    paragraph.classList.remove('content-appear')
                }
            })
        }

        else if (buttonModal[i].name === 'dialog') {

            const boxSafe = buttonModal[i].name

            paragraph.classList.remove('content-hidden')
            paragraph.classList.add('content-appear')

            boxForItemsModal[0].style.display = 'none'
            boxForItemsModal[1].style.display = 'none'
            boxForItemsModal[2].style.display = 'none'

            setTimeout (function () {

                buttonModal[i].setAttribute('name', 'closed')

            }, 500)

            buttonModal[i].addEventListener('click', function() {

                if(buttonModal[i].name === 'closed'){

                    buttonModal[i].setAttribute('name', boxSafe)

                    boxForItemsModal[0].style.display = ''
                    boxForItemsModal[1].style.display = ''
                    boxForItemsModal[2].style.display = ''
                    paragraph.classList.add('content-hidden')
                    paragraph.classList.remove('content-appear')
                }
            })
        }
    })
}

const appearCharacters = () => {

    charactersCyberpunk.map(value => {

        buttonAppearCharacters.classList.add('to-appear')

        changeClickCharactersContent.style = `opacity: 0;  transition: opacity 1s`

        
        
        myCharactersLi += 

        `<li>

            <img src= ${value.imgBox} alt="img-click"></img>
            <span>${value.name}</span>

        </li>`

        listCharacters.innerHTML = myCharactersLi

        listCharacters.classList.add('to-appear')
        listCharacters.classList.remove('to-vanish')
        choiceAssociation.classList.add('to-appear')

        setTimeout(() => {

            listCharacters.style.display = `grid`
            changeClickCharactersContent.style = `opacity: 1; transition: opacity 2s`
            changeClickCharactersContent.innerHTML = `Escolha pela associação abaixo`
            choiceAssociation.style = `display: block;` 
            buttonAppearCharacters.style.display = `none`
            listCharacters.scrollIntoView({behavior: `smooth`})
            buttonAppearCharacters.setAttribute('disabled', 'true')


            
        }, 100);

    })

}

const ChoiceAsso = (characters) => {

    let arasaka = ``,
    afterlife = ``,
    nenhuma = ``,
    nusa = ``

    characters.filter(value => {

        if(value.association === 'Arasaka') {

        arasaka += `
            
            <li>

                <img src= ${value.imgBox} alt="img-click"></img>
                <span>${value.name}</span>

            </li>`

            return arasaka
        }

        if(value.association === 'Afterlife') {

            afterlife += `
                
                <li>
    
                    <img src= ${value.imgBox} alt="img-click"></img>
                    <span>${value.name}</span>
    
                </li>`
    
                return afterlife
        }

        if(value.association === 'Nenhuma') {

            nenhuma += `
                
                <li>
    
                    <img src= ${value.imgBox} alt="img-click"></img>
                    <span>${value.name}</span>
    
                </li>`
    
                return afterlife
        }

        if(value.association === 'NUSA') {

            nusa += `
                
                <li>
    
                    <img src= ${value.imgBox} alt="img-click"></img>
                    <span>${value.name}</span>
    
                </li>`
    
                return afterlife
        }
    })

    if(choiceAssociation.value === 'Arasaka') {

        listCharacters.innerHTML = arasaka

        
    }

    if(choiceAssociation.value === 'Afterlife') {

        listCharacters.innerHTML = afterlife
    }

    if(choiceAssociation.value === 'Nenhuma') {

        listCharacters.innerHTML = nenhuma
    }

    if(choiceAssociation.value === 'NUSA') {

        listCharacters.innerHTML = nusa
    }

    if(choiceAssociation.value === 'Todos(a)') {

        listCharacters.innerHTML = myCharactersLi
    }

    if(choiceAssociation.value === 'Ocultar') {

        choiceAssociation.classList.add('to-vanish')
        choiceAssociation.classList.remove('to-appear')
        listCharacters.classList.add('to-vanish')
        listCharacters.classList.remove('to-appear')
    
        setTimeout(() => {

            buttonAppearCharacters.style = `opacity: 1;`
            changeClickCharactersContent.innerHTML = `Alguns dos personagens principais são:`
            choiceAssociation.style = `display: none;`
            listCharacters.style.display = `none`
            buttonAppearCharacters.style.display = `block`
            buttonAppearCharacters.removeAttribute('disabled', 'true')
            myCharactersLi = ``
            choiceAssociation.classList.remove('to-vanish')
        }, 1000);

       

    }
}

const appearCharactersModal = () => {

    document.body.style.overflow = 'hidden'

    modalForCharactersAppear.style.display = `flex`

    nameCharacterModal.innerHTML = charactersCyberpunk[0].name
    imgModalCharacter.src = charactersCyberpunk[0].imgModal
    descriptionCharacter.innerHTML = charactersCyberpunk[0].description
    statusCharacter.innerHTML = charactersCyberpunk[0].status
    associationCharacter.innerHTML = charactersCyberpunk[0].association 
}

consoleButtons.forEach(consoles => {

    consoles.addEventListener('change', function () {

        buttonBuyCyberpunk.removeAttribute ('disabled')

        if(consoles.value === 'xbox-series') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Xbox Series X/S`
            buttonBuyCyberpunk.style = `background-color: rgb(57, 255, 20);`
        }

        if(consoles.value === 'xbox-one') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Xbox One`
            buttonBuyCyberpunk.style = `background-color: rgb(57, 255, 20);`

            
        }

        if(consoles.value === 'ps4') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Playstation 4`
            buttonBuyCyberpunk.style = `background-color: rgb(0, 98, 189);`

            
        }

        if(consoles.value === 'ps5') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Playstation 5`
            buttonBuyCyberpunk.style = `background-color: rgb(250, 250, 250);`

            

        }

        if(consoles.value === 'steam') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Steam`
            buttonBuyCyberpunk.style = `background-color: rgb(255, 211, 57);`

        
        }

        if(consoles.value === 'epic') {
            buttonBuyCyberpunk.innerHTML = `Comprar para<br>Epic Store`
            buttonBuyCyberpunk.style = `background-color: rgb(255, 211, 57);`

        }        
    })

    
})

for (let i = 0; i <giftsChoice.length; i++) {

    let descontPrice = 0
    
    giftsChoice[i].addEventListener('click', function() {

        if(giftsChoice[i].name === 'black') {

           descontPrice = priceCyber * 0.1

           newPriceCyber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            priceCyber - descontPrice,
        );

            appearDescont.innerHTML = `O desconto foi de 10%`
            boxForGifts.style.display = `none`
            descontForPrice.innerHTML = `${newPriceCyber}<br> Desconto de (R$ ${descontPrice},00)`

        }
        if(giftsChoice[i].name === 'red') {

            descontPrice = priceCyber * 0.05
 
            newPriceCyber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
             priceCyber - descontPrice,
         );
 
             appearDescont.innerHTML = `O desconto foi de 5%`
             boxForGifts.style.display = `none`
             descontForPrice.innerHTML = `${newPriceCyber}<br> Desconto de (R$ 17,50)`
 
         }
         if(giftsChoice[i].name === 'white') {
 
            newPriceCyber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
             priceCyber,
         );
 
             appearDescont.innerHTML = `Nenhum desconto<br>:(`
             descontForPrice.innerHTML = `${newPriceCyber}<br> Nenhum desconto`
             boxForGifts.style.display = `none`
 
         }
    })
}

const appearSongBird = () => {
    songAppearModal.style.display = `flex`

    buttonReloadPage.addEventListener('click', function () {

        location.reload();
    })
}

window.addEventListener('load', changeImgHeaderAndLinks)
buttonActiveMoreInfAndRotateImgs.addEventListener('click', addInfAndRotateImg)
buttonRemoveInf.addEventListener('click', removeInf)
buttonAppearCharacters.addEventListener('click', appearCharacters)
choiceAssociation.addEventListener ('change', ()=> ChoiceAsso(charactersCyberpunk))
buttonAppearCharactersModal.addEventListener ('click', appearCharactersModal)
exitModalCharacters.addEventListener('click', function () {

    modalForCharactersAppear.style.display = `none`
    document.body.style.overflow = 'auto'
    numberModal = 0
    nextButton.removeAttribute('disabled', true)
    prevButton.setAttribute('disabled', true)
})
nextButton.addEventListener('click', function() {
    numberModal++

    charactersCyberpunk.map((value, index) => {

        if(numberModal === index) {

            nameCharacterModal.innerHTML = value.name
            imgModalCharacter.src = value.imgModal
            descriptionCharacter.innerHTML = value.description
            statusCharacter.innerHTML = value.status
            associationCharacter.innerHTML = value.association
        }

        else if(numberModal >0) {
            prevButton.removeAttribute('disabled', true)

        }
        
    })

    if(numberModal === 39) {
        nextButton.setAttribute('disabled', true)
    }

    console.log(numberModal)
})
prevButton.addEventListener('click', function () {

    numberModal --

    charactersCyberpunk.map((value, index) => {

        if(numberModal === index) {

            nameCharacterModal.innerHTML = value.name
            imgModalCharacter.src = value.imgModal
            descriptionCharacter.innerHTML = value.description
            statusCharacter.innerHTML = value.status
            associationCharacter.innerHTML = value.association
        }

        else if(numberModal === 38) {
            nextButton.removeAttribute('disabled', true)
        }
        
    })

    if(numberModal ===0) {
        prevButton.setAttribute('disabled', true)
    }

    console.log(numberModal)

})
animeOneVideo.addEventListener('click', function() {

    document.body.style.overflow = 'hidden'
    modalAnimeVideos.style.display = `flex`
    titleAnimeVideo.innerHTML = `Temporada 1 (Teaser): Cyberpunk: Mercenários`
    videoAnimeChoice.src = `./src/anime-and-dlc/Cyberpunk_ Mercenários _ video_1.mp4`
    videoAnimeChoice.play()
})
animeTwoVideo.addEventListener('click', function() {

    document.body.style.overflow = 'hidden'
    modalAnimeVideos.style.display = `flex`
    titleAnimeVideo.innerHTML = `Temporada 1 (Teaser 2): Cyberpunk: Mercenários`
    videoAnimeChoice.src = `./src/anime-and-dlc/cyberpunk_ Mercenários_video_2.mp4`
    videoAnimeChoice.play()
})
buttonExitAnime.addEventListener('click', function() {

    modalAnimeVideos.style.display = `none`
    videoAnimeChoice.src = ``
    document.body.style.overflow = 'auto'

})
dlcOneVideo.addEventListener('click', function () {
    document.body.style.overflow = 'hidden'
    modalDlcVideos.style.display = `flex`;
    titleDlcVideo.innerHTML = `Phantom Liberty — Trailer Oficial`
    videoDlcChoice.src = `./src/anime-and-dlc/Cyberpunk 2077_ Phantom Liberty — Trailer Oficial.mp4`
    videoDlcChoice.play()
})
dlcTwoVideo.addEventListener('click', function () {
    document.body.style.overflow = 'hidden'
    modalDlcVideos.style.display = `flex`;
    titleDlcVideo.innerHTML = `Phantom Liberty — Trailer de Lançamento`
    videoDlcChoice.src = `./src/anime-and-dlc/Cyberpunk 2077_ Phantom Liberty — Trailer de Lançamento Oficial.mp4`
    videoDlcChoice.play()
})
buttonExitDlc.addEventListener('click', function() {

    modalDlcVideos.style.display = `none`
    videoDlcChoice.src = ``
    document.body.style.overflow = 'auto'

})
viewImgButton.addEventListener('click', function () {

    imgCoverCyber.style = `z-index: 2;
    filter: none;`

    
    setTimeout(() => {

        imgCoverCyber.style = `z-index: -1;
        filter: blur(30px);`


        
    }, 5000);
})
buttonBuyCyberpunk.addEventListener('click', appearSongBird)




