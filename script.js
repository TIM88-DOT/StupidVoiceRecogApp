const btn = document.querySelector('.speak'); 
const content = document.querySelector('.content'); 

//speech arrays 

const array1 = ['Im doing good and you ?' ,
'all good g',
'better than ever'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => console.log('working yaay, you can talk now !')

recognition.onresult = (event) => {
const index = event.resultIndex;
const result = event.results[index][0].transcript;
content.textContent = result;
this.readOutLoud(result);
} 

// add listenter
btn.addEventListener('click', ()=> recognition.start());

// read function

function readOutLoud(message)
{
const speech = new SpeechSynthesisUtterance;

speech.text='i dont feel like talking right now';

if(message.includes('how are you')){
    const speechText = array1[Math.floor(Math.random() * array1.length )];
    speech.text=speechText;
}

if(message == 'close the window please')
{
window.close();
}

if(message == 'dark mode on')
{
    document.body.style.background = 'black';
}
speech.lang= "en";
speech.pitch = 1;
speech.rate = 1;
speech.volume = 1;
window.speechSynthesis.speak(speech);

}