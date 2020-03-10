/* splashes.js
Creates splash text for marg.es.
Jack Margeson, 07/30/2019 */

var splashes = [
  // quotes
  "\"The risk I took was calculated, but man, am I bad at math.\" - Unknown",
  "\"\"You miss 100% of the shots you don\'t take.\" - Wayne Gretzky\" - Michael Scott",
  "\"Now I am become Death, destroyer of worlds.\" - J. Robert Oppenheimer",
  // generic splashes
  "... a sucker for placeholder text!",
  "It\'s a secret to everybody.",
  "This splash text has been left intentionally blank.",
  "1% evil, 99% hot gas!",
  "As seen on TV!",
  "100% open sourced!",
  "100% freshly squeezed!",
  "Pulp-free!",
  "if not ok then return end",
  "sqrt(-1) love you!",
  "Turing complete!",
  "{this.props.splash}!",
  "I\'m using tilt controls!",
  "I want to take a nap!",
  "Bump it, brother!",
  "Sometimes it be like it is, and this time, it do.",
  // song snippets
  "🎵 Honey pieeee... 🎵",
  "🎵 I'm soooo tired... 🎵",
  "🎵 It's obsession!",
  "🎵 I'm movin\' out! 🎵",
  "🎵 Turn and face the strange... 🎵",
  "🎵 Alas, my murdered remains are incapable of learning anything... 🎵",
  "🎵 No hypnosis like a mass hypnosis \'cause a mass hypnosis isn\'t happenin\'... 🎵",
  "🎵 You're a nut! You're crazy in the coconut! 🎵",
  "🎵 People always say, \"Man, at least you're on the radio\". 🎵"
];

document.getElementById('splash').innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
