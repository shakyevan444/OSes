
//Pre-Boot

//Variables
var SIP = 1;
var Security = 1;
var userid = getUserId();
var ownerID = "hOsr2WhaO5/nSyJYdT8RAoJGrjo";
var VersionVar = "1.4.1";
var ChromaVersionVar = "3.0";
var VersionCodeName = "Lollipop";
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
timedLoop(1000, function() {
  Securecode.newDateCheck();
  setText("Homescreen.1.time", date_hourMinute);
});

//Boot

var booted = 0;
setTimeout(function() {
  Securecode.Boot();
  if (userid == ownerID) {
    dev = 1;
    showElement("app.storeicon.dev");
  }
}, 1000);
setTimeout(function() {
  if (booted == 1) {
    
  } else {
    Securecode.checksecurity();
    setScreen("root.failed");
  }
}, 10000);

//after boot

onEvent("button1", "click", function( ) {
  hideElement("text_area9");
  hideElement("button1");
  hideElement("button2");
  hideElement("text_area8");
});
onEvent("button2", "click", function( ) {
  open("https://studio.code.org/projects/applab/U-44dk7LoDbBi9cncML6VdckTO7mwU5Rz0g8D2UTsTg/");
});
onEvent("app.settings.button.3", "click", function( ) {
  open("https://studio.code.org/projects/applab/U-44dk7LoDbBi9cncML6VdckTO7mwU5Rz0g8D2UTsTg/");
});
//terminal
onEvent("run", "click", function( ) {
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
                  setText("text_area3", "Invalid Command! / >");
                  getKeyValue("oos" + getText("param1"), function (val1) {
                    getKeyValue("oosi" + getText("param1"), function (val2) {
                      if (val2 == 1) {
                        open(val1);
                      } else {
                        setScreen(val1);
                      }
                    });
                  });
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
  Securecode.checksecurity();
  readRecords(getText("account.login.input.1"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      Securecode.checksecurity();
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
  Securecode.Homescreen();
  Securecode.checksecurity();
});
//Homescreen
onEvent("app.icon.20uas", "click", function( ) {
  open("https://studio.code.org/projects/applab/yHZAF3Kc5Z4Q0JUknOz5EknpjbmtATh-0cer359JfXc");
  Securecode.checksecurity();
});
onEvent("app.icon.tips", "click", function( ) {
  setScreen("app.tips");
  Securecode.checksecurity();
});
onEvent("app.icon.notes", "click", function( ) {
  setScreen("app.notes");
  Securecode.checksecurity();
});
onEvent("app.icon.dev", "click", function( ) {
  setScreen("dev.");
  Securecode.checksecurity();
});
onEvent("app.icon.music", "click", function( ) {
  setScreen("app.music");
  Securecode.checksecurity();
});
onEvent("app.icon.appstore", "click", function( ) {
  setScreen("app.appstore.1");
  Securecode.checksecurity();
});
onEvent("app.icon.paint", "click", function( ) {
  setScreen("app.paint");
  Securecode.checksecurity();
});
onEvent("app.icon.settings", "click", function( ) {
  setScreen("app.settings");
  Securecode.checksecurity();
});
//Appstore
onEvent("app.storeicon.tips.delete", "click", function( ) {
  showElement("app.storeicon.tips");
  hideElement("app.icon.tips");
  hideElement("app.storeicon.tips.delete");
});
onEvent("app.storeicon.tips", "click", function( ) {
  Securecode.checksecurity();
  showElement("app.icon.tips");
  showElement("app.storeicon.tips.delete");
});
onEvent("app.storeicon.20uas.delete", "click", function( ) {
  showElement("app.storeicon.20uas");
  hideElement("app.icon.20uas");
  hideElement("app.storeicon.20uas.delete");
});
onEvent("app.storeicon.20uas", "click", function( ) {
  Securecode.checksecurity();
  showElement("app.icon.20uas");
  showElement("app.storeicon.20uas.delete");
});
onEvent("homebutton.2", "click", function( ) {
  Securecode.Homescreen();
});
onEvent("app.storeicon.paint.delete", "click", function( ) {
  showElement("app.storeicon.paint");
  hideElement("app.icon.paint");
  hideElement("app.storeicon.paint.delete");
  Securecode.stopmusic();
});
onEvent("app.storeicon.paint", "click", function( ) {
  Securecode.checksecurity();
  showElement("app.icon.paint");
  showElement("app.storeicon.paint.delete");
});
onEvent("app.storeicon.notes.delete", "click", function( ) {
  showElement("app.storeicon.notes");
  hideElement("app.icon.notes");
  hideElement("app.storeicon.notes.delete");
  Securecode.stopmusic();
});
onEvent("app.storeicon.notes", "click", function( ) {
  Securecode.checksecurity();
  showElement("app.icon.notes");
  showElement("app.storeicon.notes.delete");
});
onEvent("app.storeicon.music.delete", "click", function( ) {
  showElement("app.storeicon.music");
  hideElement("app.icon.music");
  hideElement("app.storeicon.music.delete");
  Securecode.stopmusic();
});
onEvent("app.storeicon.music", "click", function( ) {
  Securecode.checksecurity();
  showElement("app.icon.music");
  showElement("app.storeicon.music.delete");
});
onEvent("app.storeicon.dev", "click", function( ) {
  Securecode.checksecurity();
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
  Securecode.Homescreen();
});
onEvent("app.music.button.song.1", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.2", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/L_X.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.3", "click", function( ) {
  Securecode.stopmusic();
  playSound("Beluga---Belupacito-(Official-Audio).mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.4", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/On-Little-Cat-Feet---OneShot-World-Machine-Edition.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.5", "click", function( ) {
  Securecode.stopmusic();
  playSound("Title-Music-(Party-Time).mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.6", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.7", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.8", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.song.9", "click", function( ) {
  Securecode.stopmusic();
  playSound("assets/Rainy-night.mp3", getChecked("app.music.check"));
  Securecode.checksecurity();
});
onEvent("app.music.button.1", "click", function( ) {
  Securecode.stopmusic();
});
onEvent("widget.music.1", "click", function( ) {
  Securecode.stopmusic();
});
//Dev
onEvent("button.eb", "click", function( ) {
  Securecode.checksecurity();
  Securecode.UnBlockAppstore();
});
onEvent("b5", "click", function( ) {
  Securecode.checksecurity();
  Securecode.Homescreen();
});
onEvent("DEV_1", "click", function( ) {
  Securecode.checksecurity();
  setScreen("root.terminal");
});
onEvent("DEV_2", "click", function( ) {
  Securecode.checksecurity();
  open("https://forms.gle/zYiewQwiWj5hpDna6");
});
onEvent("DEV_3", "click", function( ) {
  Securecode.checksecurity();
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
  Securecode.Homescreen();
});
//app.settings
onEvent("app.settings.button.2", "click", function( ) {
  setScreen("app.customizer");
  Securecode.checksecurity();
});
onEvent("button.1", "click", function( ) {
  Rcolor = 219;
  Gcolor = 84;
  Bcolor = 97;
  Securecode.Setcolor();
});
onEvent("button.2", "click", function( ) {
  Rcolor = 245;
  Gcolor = 204;
  Bcolor = 232;
  Securecode.Setcolor();
});
onEvent("button.3", "click", function( ) {
  Rcolor = 102;
  Gcolor = 195;
  Bcolor = 255;
  Securecode.Setcolor();
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
  Securecode.Homescreen();
});
onEvent("root.setup.1.button.1", "click", function( ) {
  Rcolor = getNumber("_r1");
  Gcolor = getNumber("_g1");
  Bcolor = getNumber("_b1");
  Securecode.checksecurity();
  Securecode.Setcolor();
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
onEvent("app.customizer.button.5", "click", function( ) {
  setScreen("app.customizer.2");
});
onEvent("app.customizer.2.button.4", "click", function( ) {
  setScreen("app.customizer");
});
onEvent("app.customizer.2.button.1", "click", function( ) {
  setProperty("Homescreen.1", "image", "assets/walper4.png");
});
onEvent("app.customizer.2.button.2", "click", function( ) {
  setProperty("Homescreen.1", "image", "assets/pride_flag_black_tamkj3.png");
});
function Seasonalwallpaper() {
  setProperty("Homescreen.1", "image", "assets/pride_flag_black_tamkj3.png");
  onEvent("app.customizer.2.button.3", "click", function( ) {
    setProperty("Homescreen.1", "image", "assets/CleanShot-2023-06-21-at-13.40.52-2x.png");
  });
}
Seasonalwallpaper();
//app.paint
setActiveCanvas("app.paint.canvas");
var currentColor = "black";
var isDragging = false;
var previousX, previousY;
onEvent("app.paint.red", "input", function(event) {
  var redValue = getProperty("app.paint.red", "value");
  updateColor(redValue, null, null);
});
onEvent("app.paint.green", "input", function(event) {
  var greenValue = getProperty("app.paint.green", "value");
  updateColor(null, greenValue, null);
});
onEvent("app.paint.blue", "input", function(event) {
  var blueValue = getProperty("app.paint.blue", "value");
  updateColor(null, null, blueValue);
});
onEvent("app.paint.canvas", "mousemove", function(event) {
  if (isDragging) {
    var x = event.x - getXPosition("app.paint.canvas");
    var y = event.y - getYPosition("app.paint.canvas");
    var squareSize = 10;
    var lineWidth = 3;
    drawLine(previousX, previousY, x, y, lineWidth, currentColor);
    previousX = x;
    previousY = y;
  }
});
onEvent("app.paint.canvas", "mousedown", function(event) {
  isDragging = true;
  previousX = event.x - getXPosition("app.paint.canvas");
  previousY = event.y - getYPosition("app.paint.canvas");
});
onEvent("app.paint.canvas", "mouseup", function() {
  isDragging = false;
});
onEvent("app.paint.button.clear", "click", function() {
  clearCanvas("app.paint.canvas");
});
function paintRect(x, y) {
  rect(x, y, 10, 10);
}
function drawLine(x1, y1, x2, y2, lineWidth) {
  setStrokeWidth(lineWidth);
  setStrokeColor(currentColor);
  line(x1, y1, x2, y2);
}
function updateColor(red, green, blue) {
  red = getNumber("app.paint.red");
  green = getNumber("app.paint.green");
  blue = getNumber("app.paint.blue");
  currentColor = rgb(red, green, blue);
}
onEvent("homebutton.4", "click", function( ) {
  Securecode.Homescreen();
});
//app.notes
onEvent("homebutton.5", "click", function( ) {
  Securecode.Homescreen();
});
