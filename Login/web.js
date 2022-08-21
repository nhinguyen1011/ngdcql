let apiUser = "http://localhost:3000/user"

const ipnElement = document.querySelector('#pw')
const btnElement = document.querySelector('#btnPassword')
//con mắt
btnElement.addEventListener('click', function() {
  const currentType = ipnElement.getAttribute('type')
  ipnElement.setAttribute('type',
    currentType === 'password' ? 'text' : 'password'
  )
})

//kiểm tra rỗng hay không
function signup(e) {
  var id = document.getElementById("txtID").value;
  var password = document.getElementById("pw").value;
    if (id == 0){
        document.getElementById("empty").style.display = "block";
      } else{
        //if(id == user[i].id && password == )
        document.getElementById("empty").style.display = "none";
      }
      if (password == 0){
        document.getElementById("p_empty").style.display = "block";
      }
      else{
        document.getElementById("p_empty").style.display = "none";
      }
  }

function login(e){
  getUser(handle);
} 

function getUser(callback){
  fetch(apiUser).then(function(res){
    return res.json().then(callback)
  })
}
//kiểm tra dữ liệu đầu vào
function handle(data){
  //event.preventDefault();
  var input = signup()
  input.querySelector("input")
  var id = document.getElementById("txtID").value;
  var password = document.getElementById("pw").value;
    data.forEach((data) => {
    if(data.id == id && data.pw == password){
      window.location.href = "./next.html"
      alert("success")
    }
    // else{
    //   alert("enter again")
    // }
  });
}
