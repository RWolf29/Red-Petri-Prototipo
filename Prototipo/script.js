const button = document.getElementById('btn');
const token1 = document.getElementById('svg_36'); //cuero
const token2 = document.getElementById('svg_12'); //molde
const token3 = document.getElementById('svg_72'); //piezas cortadas
const token4 = document.getElementById('svg_73'); //maquina cortadora
const token5 = document.getElementById('svg_100'); //almacen de piezas cortadas

const token6 = document.getElementById('svg_50'); //piezas devastadas
const token7 = document.getElementById('svg_44'); //maquina devastadora
const token8 = document.getElementById('svg_142'); //almacen de piezas devastadas

const token9 = document.getElementById('svg_146'); //pegamento
const token10 = document.getElementById('svg_144'); //martillo1
const token11 = document.getElementById('svg_42'); //tijera
const token12 = document.getElementById('svg_4033'); //piezas perfiladas
const token13 = document.getElementById('svg_4034'); //maquina de coser
const token14 = document.getElementById('svg_4184'); //almacen de piezas perfiladas

const token15 = document.getElementById('svg_4233'); //horma
const token16 = document.getElementById('svg_4186'); //suelas
const token17 = document.getElementById('svg_4185'); //falsas plantillas
const token18 = document.getElementById('svg_4187'); //clavitos
const token19 = document.getElementById('svg_4188'); //martillo2
const token20 = document.getElementById('svg_4218'); //calzado armado con horma
const token21 = document.getElementById('svg_4219'); //maquina armadora
const token22 = document.getElementById('svg_4239'); //almacen de calzado armado   

const token23 = document.getElementById('svg_4123'); //martillo3
const token24 = document.getElementById('svg_4156'); //calzado armado sin horma
const token25 = document.getElementById('svg_4157'); //maquina retira horma
const token26 = document.getElementById('svg_4050'); //almacen de calzado sin horma

const token27 = document.getElementById('svg_4104'); //detalle
const token28 = document.getElementById('svg_4052'); //lona
const token29 = document.getElementById('svg_4051'); //bencina
const token30 = document.getElementById('svg_4097'); //caja
const token31 = document.getElementById('svg_4053'); //tinte
const token32 = document.getElementById('svg_4082'); //calzado terminado
const token33 = document.getElementById('svg_4083'); //maquina alistadora
const token34 = document.getElementById('svg_4122'); //almacen de calzado terminado y alistado

const redContainer = document.getElementById('container-red');

let i = 1;
let isPosible = true;
btn.addEventListener("click", () => {
    setToken(i);
});

function setToken (i) {
    if (isPosible) {
        if(i == 1) {
            token1.setAttribute("class", "token-off");
            token2.setAttribute("class", "token-off");
            token3.setAttribute("class", "token-on");
            token4.setAttribute("class", "token-off");
        } else {
            if (i == 2) {
                token1.setAttribute("class", "token-off");
                token2.setAttribute("class", "token-off");
                token3.setAttribute("class", "token-off");
                token4.setAttribute("class", "token-on");
                token5.setAttribute("class", "token-on");
            } else {
                if (i == 3) {
                    token5.setAttribute("class", "token-off");
                    token6.setAttribute("class", "token-on");
                    token7.setAttribute("class", "token-off");
                } else {
                    if (i == 4) {
                        token6.setAttribute("class", "token-off");
                        token7.setAttribute("class", "token-on");
                        token8.setAttribute("class", "token-on");
                        redContainer.scrollTo(600, 0);
                    } else {
                        if (i == 5) {
                            token8.setAttribute("class", "token-off");
                            token9.setAttribute("class", "token-off");
                            token10.setAttribute("class", "token-off");
                            token11.setAttribute("class", "token-off");
                            token12.setAttribute("class", "token-on");
                            token13.setAttribute("class", "token-off");
                        } else {
                            if (i == 6) {
                                token12.setAttribute("class", "token-off");
                                token13.setAttribute("class", "token-on");
                                token14.setAttribute("class", "token-on");
                            } else {
                                if (i == 7) {
                                    token14.setAttribute("class", "token-off");
                                    token15.setAttribute("class", "token-off");
                                    token16.setAttribute("class", "token-off");
                                    token17.setAttribute("class", "token-off");
                                    token18.setAttribute("class", "token-off");
                                    token19.setAttribute("class", "token-off");
                                    token20.setAttribute("class", "token-on");
                                    token21.setAttribute("class", "token-off");
                                } else {
                                    if (i == 8) {
                                        token20.setAttribute("class", "token-off");
                                        token21.setAttribute("class", "token-on");
                                        token22.setAttribute("class", "token-on");
                                        redContainer.scrollTo(1800, 0);
                                    } else {
                                        if (i == 9) {
                                            token22.setAttribute("class", "token-off");
                                            token23.setAttribute("class", "token-off");
                                            token24.setAttribute("class", "token-on");
                                            token25.setAttribute("class", "token-off");
                                        } else {
                                            if (i == 10) {
                                                token24.setAttribute("class", "token-off");
                                                token25.setAttribute("class", "token-on");
                                                token26.setAttribute("class", "token-on");
                                            } else {
                                                if (i == 11) {
                                                    token26.setAttribute("class", "token-off");
                                                    token27.setAttribute("class", "token-off");
                                                    token28.setAttribute("class", "token-off");
                                                    token29.setAttribute("class", "token-off");
                                                    token30.setAttribute("class", "token-off");
                                                    token31.setAttribute("class", "token-off");
                                                    token32.setAttribute("class", "token-on");
                                                    token33.setAttribute("class", "token-off");
                                                } else {
                                                    if (i == 12) {
                                                        token32.setAttribute("class", "token-off");
                                                        token33.setAttribute("class", "token-on");
                                                        token34.setAttribute("class", "token-on");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    i++;
    if (i == 13) {
        isPosible = false;
    }

    var loop = setTimeout(setToken, 4000, i);
}