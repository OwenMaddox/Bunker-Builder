var Wood = localStorage.wood;
var displayWood = document.getElementById("Wood");

var Steel = localStorage.wood;
var displaySteel = document.getElementById("Steel");

var population = localStorage.population;
var displaypopulation = document.getElementById("population");

var rebirths = localStorage.rebirths;
var displayrebirth = document.getElementById("rebirth");

var timer = localStorage.timer;
var displaytimer = document.getElementById('timer');

var clicks = localStorage.clicks;


function makeWood() {
  if (localStorage.wood) {
    localStorage.wood = Number(localStorage.wood) + 4 * rebirths * clicks;
  } else {
    localStorage.wood = 2 * rebirths * clicks;
  }
  document.getElementById("Wood").innerHTML = localStorage.wood;
}




function makeSteel() {
  if (localStorage.steel) {
    localStorage.steel = Number(localStorage.steel) + 2 * rebirths * clicks;
  } else {
    localStorage.steel = 1 * rebirths * clicks;
  }
  document.getElementById("Steel").innerHTML = localStorage.steel;
}

function Rebirth() {
  var Wood = localStorage.wood;
  var displayWood = document.getElementById("Wood");

  var Steel = localStorage.wood;
  var displaySteel = document.getElementById("Steel");

  var population = localStorage.population;
  var displaypopulation = document.getElementById("population");

  var rebirths = localStorage.rebirths;
  var displayrebirth = document.getElementById("rebirth");
  if (Wood > 49999) {
    if (Steel > 49999) {
      if (population > 14999) {
        alert("You just bought a Multiplyer");
        localStorage.rebirths = Number(localStorage.rebirths) + 1;

        localStorage.population = 0;

        localStorage.wood = 0;

        localStorage.steel = 0;

        localStorage.clicks = 1;

        clicks = 1;

        location.reload();
      } else {
        alert("Not enough people 15k needed");
      }
    } else {
      alert("Not enough steel 50k needed");
    }
  } else {
    alert("Not enough wood 50k needed");
  }
  document.getElementById("rebirth").innerHTML = localStorage.rebirths;
}

//document.onkeydown = checkkey;
function checkkey(e) {
  e = e || window.event;
  if (e.keyCode == "79") {
    if (localStorage.wood) {
      localStorage.wood = Number(localStorage.wood) + 25000;
    } else {
      localStorage.wood = 1;
    }
    document.getElementById("Wood").innerHTML = localStorage.wood;

    if (localStorage.steel) {
      localStorage.steel = Number(localStorage.steel) + 12000;
    } else {
      localStorage.steel = 0.25;
    }
    document.getElementById("Steel").innerHTML = localStorage.steel;

    if (localStorage.population) {
      localStorage.population = Number(localStorage.population) + 6000;
    } else {
      localStorage.population = 1;
    }
    document.getElementById("population").innerHTML = localStorage.population;
  }
}

function Reset() {
  localStorage.steel = 0;

  document.getElementById("Steel").innerHTML = localStorage.steel;

  localStorage.wood = 0;

  document.getElementById("Wood").innerHTML = localStorage.wood;

  localStorage.population = 0;

  document.getElementById("population").innerHTML = localStorage.population;

  localStorage.rebirths = 1;

  document.getElementById("rebirth").innerHTML = localStorage.rebirths;

  localStorage.timer = 0;

  document.getElementById("timer").innerHTML = localStorage.timer;

  localStorage.clicks = 1;

  clicks = 1;

  location.reload();
}



window.onload = function load() {
  var one = document.getElementById("level1");
  one.style.display = "none";
  var two = document.getElementById("level2");
  two.style.display = "none";
  var three = document.getElementById("level3");
  three.style.display = "none";
  var four = document.getElementById("level4");
  four.style.display = "none";
  var five = document.getElementById("level5");
  five.style.display = "none";
  var six = document.getElementById("level6");
  six.style.display = "none";
  var seven = document.getElementById("level7");
  seven.style.display = "none";
  var eight = document.getElementById("level8");
  eight.style.display = "none";
  var nine = document.getElementById("level9");
  nine.style.display = "none";
  var ten = document.getElementById("level10");
  ten.style.display = "none";
  var eleven = document.getElementById("level11");
  eleven.style.display = "none";
  var twelve = document.getElementById("level12");
  twelve.style.display = "none";
  var thirteen = document.getElementById("level13");
  thirteen.style.display = "none";
  var fourteen = document.getElementById("level14");
  fourteen.style.display = "none";
  var fifteen = document.getElementById("level15");
  fifteen.style.display = "none";
  document.getElementById("Wood").innerHTML = localStorage.wood;
  document.getElementById("Steel").innerHTML = localStorage.steel;
  document.getElementById("population").innerHTML = localStorage.population;
  document.getElementById("rebirth").innerHTML = localStorage.rebirths;
  document.getElementById("timer").innerHTML = localStorage.timer;

  var Wood = localStorage.wood;
  var displayWood = document.getElementById("Wood");

  var Steel = localStorage.wood;
  var displaySteel = document.getElementById("Steel");

  var population = localStorage.population;
  var displaypopulation = document.getElementById("population");

  var rebirths = localStorage.rebirths;
  var displayrebirth = document.getElementById("rebirth");

  var timer = localStorage.timer;
  var displaytimer = document.getElementById("timer");

  var timer = document.getElementById("timer");
  document.getElementById("timer").innerHTML = localStorage.timer;
 
  setInterval(function () {
   
    localStorage.timer =
        Number(localStorage.timer) + 1;
    document.getElementById("timer").innerHTML =
      localStorage.timer;
  }, 1000);    

};


function bronze() {
  if (localStorage.wood > 1499) {
    if (localStorage.steel > 1499) {
      localStorage.wood = Number(localStorage.wood) - 1500;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 1500;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 2 
      clicks = 2
      alert('You bought bronze clicks')
      document.getElementById('bronze').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}

function silver() {
  if (localStorage.wood > 2499) {
    if (localStorage.steel > 2499) {
      localStorage.wood = Number(localStorage.wood) - 2500;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 2500;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 3 
      clicks = 3
      alert('You bought silver clicks')
      document.getElementById('silver').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}

function gold() {
  if (localStorage.wood > 4999) {
    if (localStorage.steel > 4999) {
      localStorage.wood = Number(localStorage.wood) - 5000;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 5000;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 5 
      clicks = 5
      alert('You bought gold clicks')
      document.getElementById('gold').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}

function diamond() {
  if (localStorage.wood > 14999) {
    if (localStorage.steel > 14999) {
      localStorage.wood = Number(localStorage.wood) - 15000;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 15000;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 8 
      clicks = 8
      alert('You bought diamond clicks')
      document.getElementById('diamond').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}

function platinum() {
  if (localStorage.wood > 24999) {
    if (localStorage.steel > 24999) {
      localStorage.wood = Number(localStorage.wood) - 25000;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 25000;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 10 
      clicks = 10
      alert('You bought platinum clicks')
      document.getElementById('platinum').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}

function omega() {
  if (localStorage.wood > 49999) {
    if (localStorage.steel > 49999) {
      localStorage.wood = Number(localStorage.wood) - 50000;
      document.getElementById("Wood").innerHTML = localStorage.wood;
      localStorage.steel = Number(localStorage.steel) - 50000;
      document.getElementById("Steel").innerHTML = localStorage.steel;
      localStorage.clicks = 20 
      clicks = 20
      alert('You bought OMEGA clicks')
      document.getElementById('omega').setAttribute("disabled", "disabled");
      
    } else {
      alert('Not enough steel')
    }
  } else {
    alert('Not enough wood')
  }
}


//Level 1
function Level1() {
  if (localStorage.wood > 99) {
    if (localStorage.steel > 24) {
      var one = document.getElementById("level1");
      
      if (localStorage.wood) {
        localStorage.wood = Number(localStorage.wood) - 100;
      } else {
        localStorage.wood = 1;
      }
      document.getElementById("Wood").innerHTML = localStorage.wood;

      if (localStorage.steel) {
        localStorage.steel = Number(localStorage.steel) - 25;
      } else {
        localStorage.steel = 0;
      }
      document.getElementById("Steel").innerHTML = localStorage.steel;

      setInterval(function () {
        if (localStorage.population) {
          localStorage.population =
            Number(localStorage.population) + 2 * rebirths;
        } else {
          localStorage.population = 1;
        }
        document.getElementById("population").innerHTML =
          localStorage.population;
      }, 35000);
      setInterval(function () {
        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) + 4 * rebirths;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) + 1 * rebirths;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;
      }, 5000);
      if (one.style.display === "block") {
        one.style.display = "none";
      } else {
        one.style.display = "block";
        button1.style.display = "none";
      }
    } else {
      alert("Not Enough Steel");
    }
  } else {
    alert("Not Enough Wood");
  }
}

//level 2
function Level2() {
  if (localStorage.population > 6) {
    if (localStorage.steel > 99) {
      if (localStorage.wood > 299) {
        var two = document.getElementById("level2");
        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 300;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 100;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;
        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 2 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 6 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 2 * rebirths;
          } else {
            localStorage.steel = 0.5;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (two.style.display === "block") {
          two.style.display = "none";
        } else {
          two.style.display = "block";
          button2.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//Level 3

function Level3() {
  if (localStorage.population > 24) {
    if (localStorage.steel > 199) {
      if (localStorage.wood > 499) {
        var three = document.getElementById("level3");
        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 500;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 200;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;
        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 2 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 12 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 6 * rebirths;
          } else {
            localStorage.steel = 0.75;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (three.style.display === "block") {
          three.style.display = "none";
        } else {
          three.style.display = "block";
          button3.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//Level 4
function Level4() {
  if (localStorage.population > 49) {
    if (localStorage.steel > 399) {
      if (localStorage.wood > 1199) {
        var four = document.getElementById("level4");
        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 1200;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 400;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;
        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 1 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 15 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;
        }, 5000);
        if (four.style.display === "block") {
          four.style.display = "none";
        } else {
          four.style.display = "block";
          button4.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//Level 5

function Level5() {
  if (localStorage.population > 74) {
    if (localStorage.steel > 999) {
      if (localStorage.wood > 999) {
        var five = document.getElementById("level5");
        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 1000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 1000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;
        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 1 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 15 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (five.style.display === "block") {
          five.style.display = "none";
        } else {
          five.style.display = "block";
          button5.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//Level 6

function Level6() {
  if (localStorage.population > 99) {
    if (localStorage.steel > 799) {
      if (localStorage.wood > 1499) {
        var six = document.getElementById("level6");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 1500;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 800;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 5 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 5 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 1 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (six.style.display === "block") {
          six.style.display = "none";
        } else {
          six.style.display = "block";
          button6.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//Level 7

function Level7() {
  if (localStorage.population > 149) {
    if (localStorage.steel > 1199) {
      if (localStorage.wood > 1999) {
        var seven = document.getElementById("level7");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 2000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 1200;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 6 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 10 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 5 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (seven.style.display === "block") {
          seven.style.display = "none";
        } else {
          seven.style.display = "block";
          button7.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 8

function Level8() {
  if (localStorage.population > 199) {
    if (localStorage.steel > 1999) {
      if (localStorage.wood > 2999) {
        var eight = document.getElementById("level8");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 3000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 2000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 8 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 30 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 10 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (eight.style.display === "block") {
          eight.style.display = "none";
        } else {
          eight.style.display = "block";
          button8.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 9

function Level9() {
  if (localStorage.population > 599) {
    if (localStorage.steel > 2999) {
      if (localStorage.wood > 2499) {
        var nine = document.getElementById("level9");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 2500;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 3000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 10 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 35 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 50 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (nine.style.display === "block") {
          nine.style.display = "none";
        } else {
          nine.style.display = "block";
          button9.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 10

function Level10() {
  if (localStorage.population > 799) {
    if (localStorage.steel > 1499) {
      if (localStorage.wood > 2799) {
        var ten = document.getElementById("level10");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 2800;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 1500;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 2 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 80 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 5 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (ten.style.display === "block") {
          ten.style.display = "none";
        } else {
          ten.style.display = "block";
          button10.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 11

function Level11() {
  if (localStorage.population > 1199) {
    if (localStorage.steel > 2999) {
      if (localStorage.wood > 1999) {
        var eleven = document.getElementById("level11");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 2000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 3000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 3 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 5 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 100 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (eleven.style.display === "block") {
          eleven.style.display = "none";
        } else {
          eleven.style.display = "block";
          button11.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 12
function Level12() {
  if (localStorage.population > 1499) {
    if (localStorage.steel > 2499) {
      if (localStorage.wood > 2499) {
        var twelve = document.getElementById("level12");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 2500;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 2500;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 100 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 20 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 10 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (twelve.style.display === "block") {
          twelve.style.display = "none";
        } else {
          twelve.style.display = "block";
          button12.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 13
function Level13() {
  if (localStorage.population > 1999) {
    if (localStorage.steel > 5499) {
      if (localStorage.wood > 5499) {
        var thirteen = document.getElementById("level13");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 5500;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 5500;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 30 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 120 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 120 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (thirteen.style.display === "block") {
          thirteen.style.display = "none";
        } else {
          thirteen.style.display = "block";
          button13.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 14
function Level14() {
  if (localStorage.population > 3999) {
    if (localStorage.steel > 9999) {
      if (localStorage.wood > 11999) {
        var fourteen = document.getElementById("level14");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 12000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 10000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 45 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 350 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 350 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (fourteen.style.display === "block") {
          fourteen.style.display = "none";
        } else {
          fourteen.style.display = "block";
          button14.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}

//level 15
function Level15() {
  if (localStorage.population > 5999) {
    if (localStorage.steel > 11999) {
      if (localStorage.wood > 24999) {
        var fifteen = document.getElementById("level15");

        if (localStorage.wood) {
          localStorage.wood = Number(localStorage.wood) - 25000;
        } else {
          localStorage.wood = 1;
        }
        document.getElementById("Wood").innerHTML = localStorage.wood;

        if (localStorage.steel) {
          localStorage.steel = Number(localStorage.steel) - 12000;
        } else {
          localStorage.steel = 0.25;
        }
        document.getElementById("Steel").innerHTML = localStorage.steel;

        setInterval(function () {
          if (localStorage.population) {
            localStorage.population =
              Number(localStorage.population) + 175 * rebirths;
          } else {
            localStorage.population = 1;
          }
          document.getElementById("population").innerHTML =
            localStorage.population;
        }, 35000);
        setInterval(function () {
          if (localStorage.wood) {
            localStorage.wood = Number(localStorage.wood) + 500 * rebirths;
          } else {
            localStorage.wood = 1;
          }
          document.getElementById("Wood").innerHTML = localStorage.wood;

          if (localStorage.steel) {
            localStorage.steel = Number(localStorage.steel) + 500 * rebirths;
          } else {
            localStorage.steel = 0.25;
          }
          document.getElementById("Steel").innerHTML = localStorage.steel;
        }, 5000);
        if (fifteen.style.display === "block") {
          fifteen.style.display = "none";
        } else {
          fifteen.style.display = "block";
          button15.style.display = "none";
        }
      } else {
        alert("Not enough Wood");
      }
    } else {
      alert("Not enough Steel");
    }
  } else {
    alert("Not enough people");
  }
}