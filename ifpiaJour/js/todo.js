
function affichage() {
    let tache = document.getElementById("nom").value;
    // Si la longueur de la tache est null alors retournez une alert
    let ret = '';
    if (localStorage.getItem("todotab")) {
        let texte = localStorage.getItem("todotab");
        let tab = texte.split(',')
        tab[tab.length] = tache;
        ret = '<ol>';
        for(let i=0; i<tab.length; i++) {
            ret += '<li>'+tab[i]+'</li>';
        }
        ret += '</ol>';
        
        texte = tab.join(",");
        localStorage.setItem("todotab", texte);
        document.getElementById("affichage").innerHTML = ret
    } else {
        let tab = tache;
        localStorage.setItem("todotab", tab);
        document.getElementById("affichage").innerHTML = tache;
    }
}