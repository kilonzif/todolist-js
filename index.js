fetch("http://localhost:3000/items")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(data => {
    

    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    const title = document.querySelector('#taskItems h4');
    const summary = document.querySelector('#taskItems p');

    title.innerText = data[i].text;
    summary.innerText = data[i].tags;
    }
    
  });



document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      

 
    }
}