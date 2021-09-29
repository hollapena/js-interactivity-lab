console.log('hello world');

const message=document.querySelector('#message');

function addMovie(event){
    event.preventDefault();
    const inputField=document.querySelector('input').value;
    const movie = document.createElement('li');
    const movieTitle= document.createElement('span');
    movieTitle.textContent=inputField;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    const list = document.querySelector('ul').appendChild(movie);
    document.querySelector('input').value='';
    
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event){
    event.target.parentNode.remove();
    const theMovie =event.target.parentNode.firstChild.textContent;
    message.textContent=`${theMovie} has been Deleted!`;
    revealMessage();
}

function crossOffMovie(event){
    event.target.classList.toggle('checked');
    const theMovie=event.target.textContent;
    if(event.target.classList.contains('checked')){
        message.textContent=`${theMovie} has been Watched!`;
    }else{
        message.textContent=`${theMovie} has been added back to the list!`;
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');
    setTimeout(()=>{message.classList.add('hide')},1000);
    
}

