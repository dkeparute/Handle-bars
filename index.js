
import handlebars from "handlebars";

const html = `
<html>
<body>
Vardas: {{vardas}}<br>
Pavarde: {{pavarde}}<br>
{{#if alga}}
Uzdirba {{alga}}
{{/if}}
</body>
</html>
`;

const template = handlebars.compile(html);

const zmones = [
  {vardas: "Jonas", pavarde: "Jonaitis", alga: 100},
  {vardas: "Petras", pavarde: "Petraitis"},
  {vardas: "Antanas", pavarde: "Antanaitis"},
];

const jonoHtml = template(zmones[0]);
const petroHtml = template(zmones[1]);

console.log(jonoHtml);
console.log(petroHtml);

const html1 = `
<ul>
{{#each zmones}}
<li>{{vardas}} {{pavarde}}</li>
{{/each}}
</ul>
`;

const t1 = handlebars.compile(html1);

console.log(t1({zmones}));