import albertoGleizes from '../../assets/cubism/albert-gleizes.jpg';
import fernandoLege from '../../assets/cubism/fernande-lege.jpg';
import francisPicabia from '../../assets/cubism/francis-picabia.jpg';
import georgeBraque from '../../assets/cubism/george-braque.jpg';

const Cubism = [
  {
    image: albertoGleizes,
    answers: [
      {id: '1', text: 'Henri Le Fauconnier', correct: false},
      {id: '2', text: 'Alberto Gleizes', correct: true},
      {id: '3', text: 'Pablo Picasso', correct: false},
      {id: '4', text: 'Georges Braque', correct: false},
    ],
  },
  {
    image: fernandoLege,
    answers: [
      {id: '5', text: 'Fernando Lege', correct: true},
      {id: '6', text: 'Paul Klee', correct: false},
      {id: '7', text: 'Jean Metzinger', correct: false},
      {id: '8', text: 'Juan Gris', correct: false},
    ],
  },
  {
    image: francisPicabia,
    answers: [
      {id: '9', text: 'Henri Le Fauconnier', correct: false},
      {id: '10', text: 'Paul Klee', correct: false},
      {id: '11', text: 'Francis Picabia', correct: true},
      {id: '12', text: 'Fernand Léger', correct: false},
    ],
  },
  {
    image: georgeBraque,
    answers: [
      {id: '9', text: 'Juan Gris', correct: false},
      {id: '10', text: 'Piet Mondrian', correct: false},
      {id: '11', text: 'Henri Le Fauconnier', correct: false},
      {id: '12', text: 'George Braque', correct: true},
    ],
  },
];

export default Cubism;
