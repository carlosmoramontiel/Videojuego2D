'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')
    

h2.forEach( ( cadaH2 , i )=>{
    h2[i].addEventListener('click', ()=>{

        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')

    })
})




const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})






const li2        = document.querySelectorAll('.li2')
const bloque2    = document.querySelectorAll('.bloque2')


// Recorriendo todos los LI
li2.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    console.log("aaaaa");
    li2[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li2.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li2[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque2[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li2[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque2[i].classList.add('activo')

    })
})

const li3        = document.querySelectorAll('.li3')
const bloque3    = document.querySelectorAll('.bloque3')


// Recorriendo todos los LI
li3.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li3[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li3.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li3[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque3[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li3[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque3[i].classList.add('activo')

    })
})




const grande2    = document.querySelector('.grande2')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20

        // MOVEMOS el grand
        grande2.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})









( condicion ) ? 'hola' : 'adiós'