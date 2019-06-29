# Flappy-Cat-game

Clone de Flappy Bird

## Description

Clone del juego Flappy bird para

## MVP (DOM - CANVAS)

CANVAS. Lienzo de fondo de scroll horizontal con obstaculos. Personaje (pajaro/gato) cuadrado que sube y baja según obstaculos.

## Backlog

-Definir imagen de fondo.

-Definir imagen personaje.

-Hacerlo dinamico(que cambie de día a noche).

-Añadir contador de tubos pasados.

## Data structure

Canvas:
Propiedad
-Ancho y alto

Game:
Metodo
-start
-game over
-pausa

Propiedad
-gravedad
-2 arrays, una superior y una inferior

Clase personaje:
Metodo:
-movimiento up
Propiedad:
-x e y

Clase obsaculos:
Propiedad
-diferentes tamaños de obstaculos
-random

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen:
  Pantalla inicio con botón start
- gameScreen:
  Pantalla de juego con personaje, fondo, obstaculos y puntuación en la parte superior.
- gameoverScreen:
  Pantalla resuemen de puntuación con botón restart
- winScreen:
  En principio no tiene por ser scroll infinito

## Links

### Trello

[Link url](https://trello.com/invite/b/LHaNQd3Y/24e01c15cd944f66a28a30e9bcb7e01e/flappy-bird-game)

### Git

URls for the project repo and deploy
[Link Repo](https://github.com/jofremoreno/Flappy-Cat-game)
[Link Deploy](https://jofremoreno.github.io/Flappy-Cat-game/)

### Slides

URls for the project presentation (slides)
[Link Slides.com](https://slides.com/noquarter)
