window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  // adiciona um scroll na tela quando for maior que o ponto zero se não remove o scroll no ponto zero //
}

function activateMenuAtCurrentSection(section) {
  //palavra reservada constante: alvo linha é igual a borda scroll superior mais a  borda inferior dividida por dois
  const targetLine = scrollY + innerHeight / 2
  // verificar se a seção passou da linha
  // quais dados vou precisar?
  // o topo a seção
  const sectionTop = section.offsetTop
  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //informação dos dados e da lógica
  //console.log('O topo da seção chegou ou passou da linha?',sectionTopReachOrPassedTargetline)

  // verificar se a base está abaixo da linha alvo
  //quais os dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTagetLine = sectionEndsAt <= targetLine

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTagetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTagetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
function showNavOnScroll() {
  if (scrollY > 50) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  /*abre o menu do elemento menu-expanded*/
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  /*retira o menu do elemento menu-expanded*/
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
/*cria interação de revelação com o conteùdo da tela*/
