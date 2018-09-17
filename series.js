let series = [
  {
      name: "Better Call Saul",
      link: "https://www.imdb.com/title/tt3032476/episodes?season=4&ref_=ttep_ep_sn_nx"
  },
  {
      name: "The Big Bang Theory",
      link: "https://www.imdb.com/title/tt0898266/episodes?season=12&ref_=ttep_ep_sn_nx"
  },
  {
      name: "Family Guy",
      link: "https://www.imdb.com/title/tt0182576/episodes?season=17&ref_=ttep_ep_sn_nx"
  },
  {
      name: "Modern Family",
      link: "https://www.imdb.com/title/tt1442437/episodes?season=10&ref_=ttep_ep_sn_nx"
  },
  {
      name: "Daredevil",
      link: "https://www.imdb.com/title/tt3322312/episodes?season=3"
  },
  {
    name: "True Detective",
    link: "https://www.imdb.com/title/tt2356777/episodes?season=3&ref_=tt_eps_sn_3"
  },
  {
      name: "Watchmen",
      link: "https://www.imdb.com/title/tt7049682/episodes?season=1&ref_=tt_eps_sn_1"
  },
  {
      name: "Mr. Robot",
      link: "https://www.imdb.com/title/tt4158110/episodes?season=4"
  },
  {
      name: "Big Little Lies",
      link: "https://www.imdb.com/title/tt3920596/episodes?season=2&ref_=tt_eps_sn_2"
  },
  {
      name: "Agents of S.H.I.E.L.D.",
      link: "https://www.imdb.com/title/tt2364582/episodes?season=6&ref_=ttep_ep_sn_nx"
  },
  {
      name: "Game of Thrones",
      link: "https://www.imdb.com/title/tt0944947/episodes?season=8"
  },
  {
      name: "Legion",
      link: "https://www.imdb.com/title/tt5114356/episodes?season=3&ref_=ttep_ep_sn_nx"
  },
  {
      name: "Fargo",
      link: "https://www.imdb.com/title/tt2802850/episodes?season=4&ref_=tt_eps_sn_4"
  },
  {
      name: "Rick and Morty",
      link: "https://www.imdb.com/title/tt2861424/episodes?season=4"
  }
]


let uls = document.getElementById("series");

series.forEach((item) => {
  let el = document.createElement('li');
  let a = document.createElement('a');
  let text = document.createTextNode(item.name);

  a.target = "_blank";
  a.href = item.link;
  
  a.appendChild(text);
  el.appendChild(a);
  uls.appendChild(el);
});