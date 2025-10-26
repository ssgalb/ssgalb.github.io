function filterlist() {
    const input = document.getElementById("search-input");
    const filter = input.ariaValueMax.toUpperCase();
    const ul = document.getElementById("myUL")
    const li = ul.getElementsByTagName("li")

    for (let i = 0; i < li.length; i++) {
        const textValue = li[i].textContent || li[i].innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}   

document.getElementById(search-input).addEventListener("keyup", filterList);