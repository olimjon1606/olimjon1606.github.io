$(document).ready(function () {
  var entries = [
    {
      image: "./img/js (4).png",
      width: "35",
      height: "35",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "JavaScript",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/html-5 (2).png",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "HTML5",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/css-3.png",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "CSS3",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/nodejs.png",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "Node.JS",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/typescript.png",
      width: "35",
      height: "35",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "TypeScript",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/c-.png",
      width: "40",
      height: "40",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "C++",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/bootstrap.png",
      width: "35",
      height: "35",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "Bootstrap",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    
    {
      label: "jQuery",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/github.png",
      width: "35",
      height: "35",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "Git/GitHub",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/library.png",
      width: "40",
      height: "40",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "React.js",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/internet.png",
      width: "35",
      height: "35",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "ChatGPT",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/linux-platform.png",
      width: "40",
      height: "40",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "Linux",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      label: "Next.js",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
    {
      image: "./img/python.png",
      width: "40",
      height: "40",
      url: "http://jquery-plugins.net/",
      target: "_top",
    },
    {
      label: "Python",
      url: "http://niklasknaack.blogspot.de/",
      target: "_top",
    },
  ];

  var settings = {
    entries: entries,
    width: 600,
    height: 600,
    radius: "65%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "#0a192f",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: "monospace",
    fontSize: "17",
    fontColor: "#64ffda",
    fontWeight: "bold", //bold
    fontStyle: "normal", //italic
    fontStretch: "expanded", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    // fontToUpperCase: true,
    tooltipFontFamily: "SF Mono, Fira Code,Fira Mono, Roboto Mono, monospace",
    tooltipFontSize: "5",
    tooltipFontColor: "#64ffda",
    tooltipFontWeight: "normal", //bold
    tooltipFontStyle: "normal", //italic
    tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: "left",
    tooltipDiffX: 0,
    tooltipDiffY: 100,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#holder").svg3DTagCloud(settings);
});
