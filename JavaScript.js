// font - family: 'Courgette', cursive;
{/* <p id="demo"></p>


document.getElementById("demo").innerHTML = 
"Screen width is " + window.innerWidth; */}
// console.log(window.innerWidth);
//
// alert(`Eni: ${window.innerWidth}  Boyi: ${window.innerHeight}`);
// alert(window.innerHeight);

// MyF = () => {
//     document.getElementsByClassName('responsiv_1').style =
// }
function MyF() {
    document.getElementById("Salom").style.display = "block";
    document.getElementById("Salom").style.transition = "3s";
    // document.getElementById("Salom").style.top = 0;

}


function MyF_2() {
    document.getElementById('Salom').style.display = "none";
}

// log_in

function Oxiri() {
    document.getElementById('Salom').style.display = "none";
    document.getElementById('id01').style.display = 'block';
    document.getElementById('id01').style.width = '100%';

}

var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}