import m from "mithril";
import tagl from "tagl-mithril";

const { keys } = Object;

const {
  span,
  br,
  hr,
  button,
  link,
  body,
  html,
  head,
  div,
  h1,
  p,
  table,
  tr,
  td,
  th,
  input,
  option,
  select,
} = tagl(m);

const range = (n) => [...Array(n).keys()];

const categories = ["wo", "tut", "wer", "wen", "mit"];

const state = {
  count: 0,
  frags: [
    {
      wo: "am Bahnhof",
      tut: "kontrolliert",
      wer: "der Schaffner",
      wen: "meinen Vater",
    },
  ],
  pattern: "Wo tut Wer wen?",
  sentences: [],
};

if (localStorage.getItem("satzwerft")) {
  state.frags = JSON.parse(localStorage.getItem("satzwerft"));
}

if (localStorage.getItem("satzwerft_")) {
  state.sentences = JSON.parse(localStorage.getItem("satzwerft_"));
}

const themes = [
  {
    name: "water",
    homepage: "https://watercss.kognise.dev/",
    url: "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css",
  },
  {
    name: "pico",
    homepage: "https://picocss.com/",
    url: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
  },
  {
    name: "milligram",
    homepage: "https://milligram.io/",
    url: "https://cdn.jsdelivr.net/npm/milligram@1/dist/milligram.min.css",
  },
  {
    name: "sakura",
    homepage: "https://oxal.org/projects/sakura/",
    url: "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css",
  },
  {
    name: "sakura-dark",
    homepage: "https://oxal.org/projects/sakura/",
    url: "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-dark.css",
  },
  {
    name: "bolt",
    homepage: "https://boltcss.com/",
    url: "https://unpkg.com/boltcss/bolt.min.css",
  },
];
let theme = localStorage.getItem("theme") || 0;

m.mount(document.head, {
  view: (vnode) => [link({ rel: "stylesheet", href: `${themes[theme].url}` })],
});

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const shakeit = () => {
  const { pattern, frags } = state;
  state.sentences.push(
    categories.reduce((acc, v) => {
      acc[v] = randomElement(frags)[v];
      return acc;
    }, {})
  );
  m.redraw();
};

const map = (sentence) => {
  const { pattern, frags } = state;
  const parts = pattern
    .toLowerCase()
    .replace(/[^a-z ]/, "")
    .split(" ");
  const result = parts
    .map((part) => (categories.includes(part) ? sentence[part] : part))
    .join(" ");
  if (result.length > 0) result[0] = result[0].toUpperCase();
  return result + ".";
};

m.mount(document.body, {
  view: (vnode) =>
    div.container([
      h1("Satzwerft"),
      table(
        tr(
          th(),
          categories.map((cat) => th(cat))
        ),
        state.frags.map((frag) =>
          tr([
            td(
              button(
                {
                  onclick: () => {
                    state.frags = state.frags.filter((f) => f !== frag);
                  },
                },
                "×"
              )
            ),
            categories.map((cat) =>
              td(
                input({
                  value: frag[cat],
                  oninput: (e) => (frag[cat] = e.target.value),
                })
              )
            ),
          ])
        )
      ),
      button({ onclick: () => state.frags.push({}) }, "Neue Zeile"),
      button(
        {
          onclick: () => {
            localStorage.setItem("satzwerft", JSON.stringify(state.frags));
            localStorage.setItem("satzwerft_", JSON.stringify(state.sentences));
          },
        },
        "Speichern"
      ),
      hr(),
      "Satzbau: ",
      input({
        value: state.pattern,
        oninput: (e) => (state.pattern = e.target.value),
      }),
      button({ onclick: () => shakeit() }, "Schütteln"),
      hr(),

      table(
        state.sentences.map((sentence) =>
          tr(
            td(
              button(
                {
                  onclick: () => {
                    state.sentences = state.sentences.filter(
                      (s) => s !== sentence
                    );
                  },
                },
                "×"
              )
            ),
            td(span(map(sentence)))
          )
        )
      ),

      hr(),

      select(
        {
          onchange: (e) => {
            theme = e.target.value;
            localStorage.setItem("theme", theme);
            m.redraw();
          },
        },
        themes.map((t, i) => option({ value: i, selected: i == theme }, t.name))
      ),
    ]),
});
