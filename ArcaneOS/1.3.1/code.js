
//Pre-Boot

console.clear();
//Variables
var SIP = 1;
var Security = 1;
var userid = getUserId();
var ownerID = "hOsr2WhaO5/nSyJYdT8RAoJGrjo";
var VersionVar = "1.3.1";
var ChromaVersionVar = "3.0";
var VersionCodeName = "Cookie";
console.log("Version " + VersionVar);
console.log("Chroma Version " + ChromaVersionVar);
setText("Ver_Num", "V:" + VersionVar);
setText("ver_chroma", "CUI " + ChromaVersionVar);
setText("ver_codename", "AOS "  + VersionCodeName);
console.log(userid);
var zerno = SIP;
var AB;
AB = 0;
var Rcolor = 102;
var Gcolor = 195;
var Bcolor = 255;
var dev = 0;
var dateCheck;
var minutes;
var month;
var year;
var date_monthDay;
var date_hourMinute;
//time
function newDateCheck(){
  dateCheck = new Date();
  month = dateCheck.getMonth() + 1;
  day = dateCheck.getDate();
  hours = dateCheck.getHours();
  year = dateCheck.getFullYear();
  minutes = dateCheck.getMinutes();
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  date_monthDay = (((month + "/") + day) + "/") + year;
  date_hourMinute = hours + ":" + minutes;
}
timedLoop(1000, function() {
  newDateCheck();
  setText("Homescreen.1.time", date_hourMinute);
});
//Functions
function Homescreen() {
  setScreen("Homescreen.1");
}
function checksecurity() {
  if (dev == 0) {
    getKeyValue("1", function (v1) {
      getKeyValue("2", function (v2) {
        getKeyValue("3", function (v3) {
          getKeyValue("4", function (v4) {
            getKeyValue("5", function (v5) {
              getKeyValue("0", function (v0) {
                if ((v2 - v1) / v3 + v5 * v4 + v0 == 939.5) {
                  
                } else {
                  if ((v2 - v1) / v3 + v5 * v4 + v0 == 940.5) {
                    setText("label1", "Unlocking/booting disabled please contact Arcane");
                    setScreen("root.failed");
                    for (var i = 0; i < 4; i++) {
                      setScreen("root.failed");
                    }
                  } else {
                    for (var i = 0; i < 4; i++) {
                      setScreen("root.failed");
                    }
                  }
                }
              });
            });
          });
        });
      });
    });
  } else {
    
  }
}
function BlockAppstore() {
  hideElement("app.storeicon.music");
  showElement("text_area1");
  hideElement("app.storeicon.tips");
  hideElement("app.storeicon.20uas");
}
function UnBlockAppstore() {
  hideElement("text_area1");
  showElement("app.storeicon.music");
  showElement("app.storeicon.tips");
  showElement("app.storeicon.20uas");
}
function stopmusic() {
  stopSound("assets/Rainy-night.mp3");
  stopSound("assets/L_X.mp3");
  stopSound("Beluga---Belupacito-(Official-Audio).mp3");
  stopSound("assets/On-Little-Cat-Feet---OneShot-World-Machine-Edition.mp3");
  stopSound("Title-Music-(Party-Time).mp3");
}
function Setcolor() {
  setProperty("Homescreen.1", "background-color", rgb(Rcolor, Gcolor, Bcolor, 100));
  setProperty("app.settings", "background-color", rgb(Rcolor, Gcolor, Bcolor, 100));
  setProperty("app.appstore.1", "background-color", rgb(Rcolor, Gcolor, Bcolor, 100));
  setProperty("app.tips", "background-color", rgb(Rcolor, Gcolor, Bcolor, 100));
}

//Boot


//after boot

//Setup
//terminal
setScreen("root.terminal");
var Homeplus = 0;
setTimeout(function() {
  setText("command", "oos");
  setTimeout(function() {
    setText("param1", "AUF");
    setTimeout(function() {
      commands();
    }, 250);
  }, 250);
}, 250);
function Code() {
  setScreen("AUF.page.preboot");
  //AUF / Boot
  var booted = 0;
  function AUFboot() {
    onEvent("AUF.button.1", "click", function( ) {
      appendItem(DevIDS, userid);
      EA();
      onEvent("AUF.button.3", "click", function( ) {
        Devmode();
      });
    });
    onEvent("AUF.button.5", "click", function( ) {
      showElement("app.icon.AUF");
    });
    onEvent("AUF.button.4", "click", function( ) {
      setScreen("root");
      setTimeout(function() {
        setScreen("root.login.taptounlock");
        Setcolor();
      }, 2000);
    });
  }
  //bootAUF
  function boot() {
    setTimeout(function() {
      setScreen("AUF.page.preboot");
    }, 1000);
    setTimeout(function() {
      onEvent("AUF.button.1", "click", function( ) {
        hideElement("text_area1");
        showElement("app.storeicon.music");
        showElement("app.storeicon.tips");
        //showElement("app.storeicon.20uas");
      });
      onEvent("AUF.button.5", "click", function( ) {
        showElement("app.icon.AUF");
      });
      onEvent("AUF.button.4", "click", function( ) {
        setScreen("root");
        setTimeout(function() {
          setScreen("root.login.taptounlock");
          Setcolor();
        }, 2000);
      });
      booted = 1;
    }, 1000);
    setTimeout(function() {
      if (booted == 1) {
        
      } else {
        setScreen("root.failed");
      }
    }, 10000);
    //AUF app
    onEvent("app.icon.AUF", "click", function( ) {
      setScreen("AUF.app");
    });
    onEvent("AUF.app.button.1", "click", function( ) {
      if (Homeplus == 1) {
        setScreen("Home+1");
      } else {
        setScreen("Homescreen.1");
      }
    });
    onEvent("AUF.app.button.3", "click", function() {
      setProperty("Homescreen.1", "image", "https://wallpaper.dog/large/10859802.jpg");
      ChromaVersionVar = 2.2;
    });
    var zilaobypass = getChecked("zilao.check.1");
    onEvent("AUF.app.button.2", "click", function( ) {
      setScreen("zilao.page.home");
    });
    //Zilao
    onEvent("zilao.check.1", "click", function( ) {
      zilaobypass = getChecked("zilao.check.1");
      if (zilaobypass == true) {
        hideElement("app.icon.zilao");
      } else {
        showElement("app.icon.zilao");
      }
    });
    onEvent("zilao.button.4", "click", function( ) {
      if (Homeplus == 1) {
        setScreen("Home+1");
      } else {
        setScreen("Homescreen.1");
      }
    });
  }
  boot();
  var zilaobypass = getChecked("zilao.check.1");
  function Zilao() {
    onEvent("app.zilao.home+patcher", "click", function( ) {
      setScreen("zilao.home+patcher");
    });
  }
  Zilao();
  function ZilaoApps() {
    //Home+
    onEvent("zilao.home+patcher.button.1", "click", function( ) {
      setScreen("root.loading");
      setTimeout(function() {
        Homeplus = 1;
        showElement("zilao.home+patcher.text.2");
        setScreen("zilao.home+patcher");
      }, 3294);
    });
    onEvent("zilao.home+patcher.button.back", "click", function( ) {
      setScreen("zilao.page.home");
    });
    onEvent("Home+.AUF", "click", function( ) {
      setScreen("AUF.app");
    });
    onEvent("Home+.Zilao", "click", function( ) {
      setScreen("zilao.page.home");
    });
    onEvent("Home+.appstore", "click", function( ) {
      setScreen("app.appstore.1");
    });
    onEvent("Home+.dev", "click", function( ) {
      setScreen("dev.");
    });
    onEvent("Home+.music", "click", function( ) {
      setScreen("app.music");
    });
    onEvent("Home+.settings", "click", function( ) {
      setScreen("app.settings");
    });
    onEvent("Home+.tips", "click", function( ) {
      setScreen("app.tips");
    });
    //RePatch
  }
  ZilaoApps();
}
function commands() {
  if (getText("command") == "test" ) {
    setText("text_area3", "Test! / >");
  } else {
    if (getText("command") == "setscr" ) {
      setText("text_area3", "/ >");
      setScreen(getText("param1"));
    } else {
      if (getText("command") == "settext" ) {
        setText(getText("param1"), getText("param2"));
      } else {
        if (getText("command") == "print" ) {
          setText("text_area3", getText("param1") + " / >");
        } else {
          if (getText("command") == "version" ) {
            setText("text_area3", VersionVar + " / >");
          } else {
            if (getText("command") == "home" ) {
              setScreen("root.login.taptounlock");
            } else {
              if (getText("command") == "recovery" ) {
                setScreen("root.recovery");
              } else {
                if (getText("command") == "oos" ) {
                  if (getText("param1") == "AUF") {
                    Code();
                  } else {
                    getKeyValue("oos" + getText("param1"), function (val1) {
                      getKeyValue("oosi" + getText("param1"), function (val2) {
                        if (val2 == 1) {
                          open(val1);
                        } else {
                          setScreen(val1);
                        }
                      });
                    });
                  }
                } else {
                  setText("text_area3", "Invalid Command! / >");
                }
              }
            }
          }
        }
      }
    }
  }
}
onEvent("run", "click", function( ) {
  commands();
});
//Account Login
onEvent("app.settings.button.1", "click", function( ) {
  setScreen("account.login");
});
onEvent("account.signup.button.1", "click", function( ) { 
  if (getText("account.signup.input.1") == getColumn(getText("account.signup.input.1"), "Username")) {
    console.log("Account already exists");
  } else {
    createRecord(getText("account.signup.input.1"), {terminated: 0, dev: 0, USERID: userid, ColorID:0, Username:(getText("account.signup.input.1")), Password:(getText("account.signup.input.2")), }, function(record) {
      
    });
  }
  setScreen("account.login");
});
onEvent("account.login.button.2", "click", function( ) {
  setScreen("account.signup");
});
var loggedin = 0;
var Username = "NULL";
onEvent("account.login.button.1", "click", function( ) {
  checksecurity();
  readRecords(getText("account.login.input.1"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      checksecurity();
      if ((records[i]).dev == 1) {
        dev = 1;
        showElement("app.storeicon.dev");
        if (records.terminated == 1) {
          
        } else {
          if((records[i]).Password == getText("account.login.input.2") ){
           Username = records.Username;
           loggedin = 1;
           setScreen("Homescreen.1");
          }else{
            console.log("Incorrect Email or Password");
          }
        }
      } else {
        dev = 0;
        if (records.terminated == 1) {
          
        } else {
          if((records[i]).Password == getText("account.login.input.2") ){
           Username = records.Username;
           loggedin = 1;
           setScreen("Homescreen.1");
          }else{
            console.log("Incorrect Email or Password");
          }
        }
      }
      }
  });
});
//Login
onEvent("stu1", "click", function( ) {
  Homescreen();
  checksecurity();
});
//Homescreen
onEvent("app.icon.tips", "click", function( ) {
  setScreen("app.tips");
  checksecurity();
});
onEvent("app.icon.dev", "click", function( ) {
  setScreen("dev.");
  checksecurity();
});
onEvent("app.icon.music", "click", function( ) {
  setScreen("app.music");
  checksecurity();
});
onEvent("app.icon.appstore", "click", function( ) {
  setScreen("app.appstore.1");
  checksecurity();
});
onEvent("app.icon.settings", "click", function( ) {
  setScreen("app.settings");
  checksecurity();
});
//Appstore
onEvent("app.storeicon.tips.delete", "click", function( ) {
  showElement("app.storeicon.tips");
  hideElement("app.icon.tips");
  hideElement("app.storeicon.tips.delete");
});
onEvent("app.storeicon.tips", "click", function( ) {
  checksecurity();
  showElement("app.icon.tips");
  showElement("app.storeicon.tips.delete");
});
onEvent("app.storeicon.20uas.delete", "click", function( ) {
  showElement("app.storeicon.20uas");
  hideElement("app.icon.20uas");
  hideElement("app.storeicon.20uas.delete");
});
onEvent("app.storeicon.20uas", "click", function( ) {
  checksecurity();
  showElement("app.icon.20uas");
  showElement("app.storeicon.20uas.delete");
});
onEvent("homebutton.2", "click", function( ) {
  Homescreen();
});
onEvent("app.storeicon.music.delete", "click", function( ) {
  showElement("app.storeicon.music");
  hideElement("app.icon.music");
  hideElement("app.storeicon.music.delete");
  stopmusic();
});
onEvent("app.storeicon.music", "click", function( ) {
  checksecurity();
  showElement("app.icon.music");
  showElement("app.storeicon.music.delete");
});
onEvent("app.storeicon.dev", "click", function( ) {
  checksecurity();
  showElement("app.icon.dev");
});
//app.music
onEvent("app.music.button.2", "click", function( ) {
  hideElement("widget.music.1");
});
onEvent("app.music.button.3", "click", function( ) {
  showElement("widget.music.1");
});
onEvent("homebutton.1", "click", function( ) {
  Homescreen();
});
onEvent("app.music.button.song.1", "click", function( ) {
  stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.2", "click", function( ) {
  stopmusic();
  playSound("assets/L_X.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.3", "click", function( ) {
  stopmusic();
  playSound("Beluga---Belupacito-(Official-Audio).mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.4", "click", function( ) {
  stopmusic();
  playSound("assets/On-Little-Cat-Feet---OneShot-World-Machine-Edition.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.5", "click", function( ) {
  stopmusic();
  playSound("Title-Music-(Party-Time).mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.6", "click", function( ) {
  stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.7", "click", function( ) {
  stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.8", "click", function( ) {
  stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.song.9", "click", function( ) {
  stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  checksecurity();
});
onEvent("app.music.button.1", "click", function( ) {
  stopmusic();
});
onEvent("widget.music.1", "click", function( ) {
  stopmusic();
});
//Dev
onEvent("button.eb", "click", function( ) {
  checksecurity();
  UnBlockAppstore();
});
onEvent("b5", "click", function( ) {
  checksecurity();
  Homescreen();
});
onEvent("DEV_1", "click", function( ) {
  checksecurity();
  setScreen("root.terminal");
});
onEvent("DEV_2", "click", function( ) {
  checksecurity();
  open("https://forms.gle/zYiewQwiWj5hpDna6");
});
onEvent("DEV_3", "click", function( ) {
  checksecurity();
  setScreen("dev.app.oos");
});
//dev.app.oos
onEvent("dev.app.oos.button.1", "click", function( ) {
  getKeyValue("oos" + getText("dev.app.oos.input.1"), function (val1) {
    getKeyValue("oosi" + getText("dev.app.oos.input.1"), function (val2) {
      if (val2 == 1) {
        open(val1);
      } else {
        setScreen(val1);
      }
    });
  });
});
//app.tips
onEvent("homebutton.3", "click", function( ) {
  Homescreen();
});
//app.settings
onEvent("app.settings.button.2", "click", function( ) {
  setScreen("app.customizer");
  checksecurity();
});
onEvent("button.1", "click", function( ) {
  Rcolor = 219;
  Gcolor = 84;
  Bcolor = 97;
  Setcolor();
});
onEvent("button.2", "click", function( ) {
  Rcolor = 245;
  Gcolor = 204;
  Bcolor = 232;
  Setcolor();
});
onEvent("button.3", "click", function( ) {
  Rcolor = 102;
  Gcolor = 195;
  Bcolor = 255;
  Setcolor();
});
onEvent("button.4", "click", function( ) {
  Rcolor = 245;
  Gcolor = 187;
  Bcolor = 0;
  Setcolor();
});
onEvent("button.5", "click", function( ) {
  Rcolor = 55;
  Gcolor = 255;
  Bcolor = 139;
  Setcolor();
});
onEvent("button.back.2", "click", function( ) {
  Homescreen();
});
onEvent("root.setup.1.button.1", "click", function( ) {
  Rcolor = getNumber("_r1");
  Gcolor = getNumber("_g1");
  Bcolor = getNumber("_b1");
  checksecurity();
  Setcolor();
});
//app.customizer
onEvent("app.customizer.button.3", "click", function( ) {
  setScreen("app.settings");
});
onEvent("app.customizer.button.4", "click", function( ) {
  setProperty("Homescreen.1", "image", "assets/CleanShot-2023-03-28-at-19.42.29-2x.png");
});
onEvent("app.customizer.button.1", "click", function( ) {
  setProperty("Homescreen.1", "image", "https://wallpapers.com/images/featured/wltnz5o1xymafqmo.jpg");
});
onEvent("app.customizer.button.2", "click", function( ) {
  setProperty("Homescreen.1", "image", "https://r1.ilikewallpaper.net/iphone-wallpapers/download/37952/Blue-sea-beach-iphone-wallpaper-ilikewallpaper_com.jpg");
});
