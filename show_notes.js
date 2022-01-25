const input = document.getElementById("link");
const player = document.getElementById("player");
const submit = document.getElementById("submit_note");
const note_submit = document.getElementById("notes_input");
const notes_box = document.getElementById("notes");

function addNote(){
    let time = player.currentTime;
    let timeClean = new Date(time * 1000).toISOString().substring(11,19);

    let outString = `${timeClean}: ${note_submit.value}`
    
    let para = document.createElement("p");
    para.textContent = outString;

    notes_box.appendChild(para);
}

input.addEventListener('input', (e)=>{
    player.setAttribute('src', e.target.value);
});

submit.addEventListener('click', addNote)
note_submit.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addNote();
    };
});

