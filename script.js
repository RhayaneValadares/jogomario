const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const start = document.querySelector('.start')
const gameover = document.querySelector('.game-over')

audioStart = new Audio('./songs/start.mp3')
audioGameOver = new Audio('./songs/Gamerover.mp3')

const startGame=() =>{
    pipe.classList.add('pipe-animation')
    start.style.display= 'none'

    audioStart.play()
}
const restartGame = () =>{
    gameover.style.display='none'
    pipe.style.left ='none'
    pipe.style.right ='0'
    mario.src ='./imgs/mario1.png' 
    mario.style.width ='150px'
    mario.style.bottom = '0'

    start.style.display='none'

    audioGameOver.pause()
    audioGameOver.currentTime = 0;

    audioStart.play()   
    audioStart.currentTime = 0;
}
const jump =()=>{
    console.log("SALTA")
    mario.classList.add('jump')
    setTimeout(()=>{
        mario.classList.remove('jump')
    },800) 

}

const loop = ()=>{
    const intervalld=setInterval (()=> { 
        const pipePosition = pipeoffsetLeft
        const marioPosition= window.getComputedStyle(mario)
        .bottom.replace('px','');
        if(pipePosition<=120 && pipePosition >0 && marioPosition<80){
            pipe.classList.remove('.pipe-animation')
            pipe.style.left =`${pipePosition}px`

            mario.classList.remove('.jump')
            mario.style.bottom =`${marioPosition}px`

            mario.src ='./imgs/Mario-game-over.jpg'
            mario.style.width = '80px'
            mario.style.marginLeft = '50px'

            function stopAudioStart() {
                audioStart.pause()
                
            }
            audioGameOver.play()
            function stopAudio() {
                audioGameOver.pause()  
            }
            setTimeout(stopAudio,7000)
            gameover.style.display='flex'

            clearInterval(intervalld)
        }
        
    },10)
  
}
document.addEventListener('keypress', e => {
    const tecla = e.key; // Obtemos a tecla pressionada
    if (tecla === ' ') { // Verificamos se a tecla é um espaço
        jump(); // Chama a função jump
    }
});

document.addEventListener('touchstart', e => {
    if (e.touches.length) {
        jump(); // Chama a função jump se houver toques na tela
    }
});

document.addEventListener('keypress', e => {
    const tecla = e.key; // Obtemos a tecla pressionada
    if (tecla === 'Enter') { // Verificamos se a tecla é Enter
        startGame(); // Chama a função startGame
    }  
});

