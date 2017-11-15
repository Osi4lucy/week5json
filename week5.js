function myButton(){
  console.log("You clickd me!");
  //const url = "https://api.github.com/users/" + username + "/repos";
  const buttonElement = document.querySelector('.button');
  const url = 'https://api.github.com/orgs/HackYourFuture/repos';
  const req = new XMLHttpRequest();
  req.addEventListener('load', function (data) {
      if (this.status === 200) {
      const responseText = req.responseText;
      const data = JSON.parse(responseText);
    //  const logo = document.querySelector('#logo');
    //  logo.src = repositoryList[0].owner.avatar_url;
      console.log(data);
  data.forEach(function (myLi){
    const li = document.createElement('li');
    const nameText=document.createTextNode(myLi.name);
    li.appendChild(nameText);
    hyfrepos.appendChild(li);
  });
  console.log(hyfrepos);

  } else {
          console.log('Something is probably wrong with the url');
      }
  });
  req.addEventListener('error', function () {
      console.log('Server error like timeout');
  });

  req.open("GET", url);
  req.send();
  console.log(buttonElement);
