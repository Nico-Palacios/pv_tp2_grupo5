export function seleccionar(pais){
    switch (pais) {
        case "argentina":
            document.getElementById('capital').selectedIndex = 0;
            break;
        case "brasil":
            document.getElementById('capital').selectedIndex = 1;
            break;
        case "colombia":
            document.getElementById('capital').selectedIndex = 2;
            break;
        case "uruguay":
            document.getElementById('capital').selectedIndex = 3;
            break;
        case "paraguay":
            document.getElementById('capital').selectedIndex = 4;
            break;
        case "peru":
            document.getElementById('capital').selectedIndex = 5;
            break;
        case "chile":
            document.getElementById('capital').selectedIndex = 6;
            break;
        case "venezuela":
            document.getElementById('capital').selectedIndex = 7;
            break;
        case "ecuador":
            document.getElementById('capital').selectedIndex = 8;
            break;
        case "mexico":
            document.getElementById('capital').selectedIndex = 9;
            break;
    }
}

