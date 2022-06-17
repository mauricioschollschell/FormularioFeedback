const contairnerIndex = document.getElementById('header')
const ButtonsEstagios = document.getElementById('SelectorEstagio')
const ButtonEstagio1 = document.getElementById('Estagio1')
const ButtonEstagio3 = document.getElementById('Estagio3')
const containerEstagio1Mauricio = document.getElementById(
  'containerEstagio1Mauricio'
)
const containerEstagio1Mariana = document.getElementById(
  'containerEstagio1Mariana'
)
const containerEstagio3Mauricio = document.getElementById(
  'containerEstagio3Mauricio'
)
const containerEstagio3Bianca = document.getElementById(
  'containerEstagio3Bianca'
)

//Seleciona entre qual dos dois estágios será o feedback, aplica classeName que aplica dysplay=none e  retira classeName que aplica display=none para os próximos botões (botões de preceptores daquele estágio)
function selectorEstagio1() {
  ButtonEstagio1.className = 'navPreceptorEstagio1'
  ButtonsEstagios.className = 'navEstagio-hidden'
}

function selectorEstagio3() {
  ButtonEstagio3.className = 'navPreceptorEstagio3'
  ButtonsEstagios.className = 'navEstagio-hidden'
}

//Seleciona entre qual dos dois preceptores será o feedback, aplica classeName que aplcia dysplay=none eno header, retira classeName que aplica display=none no fomrmulário do precpetor respectivo

//Habilita formulário Estagio 1 Mauricio
function selectorEstagio1Mauricio() {
  ButtonEstagio1.className = 'navPreceptorEstagio1-hidden'
  contairnerIndex.className = 'containerIndex-hidden'
  containerEstagio1Mauricio.className = 'containerEstagio1Mauricio'
}

//Habilita formulário Estagio 1 Mariana
function selectorEstagio1Mariana() {
  ButtonEstagio1.className = 'navPreceptorEstagio1-hidden'
  contairnerIndex.className = 'containerIndex-hidden'
  containerEstagio1Mariana.className = 'containerEstagio1Mariana'
}

//Habilita formulário Estagio 3 Mauricio
function selectorEstagio3Mauricio() {
  ButtonEstagio3.className = 'navPreceptorEstagio3-hidden'
  contairnerIndex.className = 'containerIndex-hidden'
  containerEstagio3Mauricio.className = 'containerEstagio3Mauricio'
}

//Habilita formulário Estagio 3 Bianca

function selectorEstagio3Bianca() {
  ButtonEstagio3.className = 'navPreceptorEstagio3-hidden'
  contairnerIndex.className = 'containerIndex-hidden'
  containerEstagio3Bianca.className = 'containerEstagio3Bianca'
}
