
window.onload = function () {
  new fullpage("#fullpage", {
    licenseKey: "YOUR KEY HERE",
    // css:false,
    // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
  });

  setTimeout(() => {
    var nodes = document.getElementById('about').childNodes[1].children;
    // console.log(nodes)
    for(var i=0; i<nodes.length; i++){
      nodes[i].classList.remove('animateL')
    }
    var nodes1 = document.getElementById('about').childNodes[3].children;
    for(var i=0; i<nodes1.length; i++){
      nodes1[i].classList.remove('animateR')
    }
  }, 1000)
};





