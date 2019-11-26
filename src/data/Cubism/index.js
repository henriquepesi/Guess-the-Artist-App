import jeanMetzinger from '../../assets/cubism/jean-metzinger.jpg';
import pabloPicasso from '../../assets/cubism/pablo-picasso.jpg';
import robertDelaunay from '../../assets/cubism/robert-delaunay.jpg';
import fernandLeger from '../../assets/cubism/fernand-leger.jpg';

const Cubism = [
  {
    image: jeanMetzinger,
    answers: [
      {id: '1', text: 'Henri Le Fauconnier', correct: false},
      {id: '2', text: 'Jean Metzinger', correct: true},
      {id: '3', text: 'Pablo Picasso', correct: false},
      {id: '4', text: 'Georges Braque', correct: false},
    ],
  },
  {
    image: pabloPicasso,
    answers: [
      {id: '5', text: 'Pablo Picasso', correct: true},
      {id: '6', text: 'Paul Klee', correct: false},
      {id: '7', text: 'Jean Metzinger', correct: false},
      {id: '8', text: 'Juan Gris', correct: false},
    ],
  },
  {
    image: robertDelaunay,
    answers: [
      {id: '9', text: 'The result is 4', correct: false},
      {id: '10', text: 'Paul Klee', correct: false},
      {id: '11', text: 'Robert Delaunay', correct: true},
      {id: '12', text: 'Fernand Léger', correct: false},
    ],
  },
  {
    image: fernandLeger,
    answers: [
      {id: '9', text: 'Juan Gris', correct: false},
      {id: '10', text: 'Piet Mondrian', correct: false},
      {id: '11', text: 'Henri Le Fauconnier', correct: false},
      {id: '12', text: 'Fernand Léger', correct: true},
    ],
  },
];

export default Cubism;
