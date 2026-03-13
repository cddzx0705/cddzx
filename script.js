window.onload = function() {
  var elements = document.getElementsByClassName('color-effect');
  var index = 0;
  /* ===== IOS BATTERY REALTIME ===== */

if ('getBattery' in navigator) {

navigator.getBattery().then(function(battery){

const fill = document.getElementById("batteryFill")
const text = document.getElementById("batteryText")
const bolt = document.getElementById("batteryBolt")

function updateBattery(){

let level = Math.round(battery.level * 100)

text.innerText = level + "%"

fill.style.width = level + "%"

/* ===== COLOR LIKE IOS ===== */
if(level <= 20){
fill.style.background="#ff3b30"   // đỏ
}
else if(level <= 50){
fill.style.background="#ffcc00"   // vàng
}
else{
fill.style.background="#34c759"   // xanh iOS
}

/* ===== CHARGING ===== */
if(battery.charging){
bolt.style.display="block"
}else{
bolt.style.display="none"
}

}

updateBattery()

battery.addEventListener("levelchange",updateBattery)
battery.addEventListener("chargingchange",updateBattery)

})

}

updateBattery()

battery.addEventListener("levelchange", updateBattery)
battery.addEventListener("chargingchange", updateBattery)

})

}
  
  setInterval(function() {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = getRandomColor();
    }
  }, 2000);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Kiểm tra xem trình duyệt và thiết bị có hỗ trợ API Battery Status không
  if ('getBattery' in navigator) {
    navigator.getBattery().then(function (battery) {
      updateBatteryLevel(battery.level * 100);
      battery.addEventListener('levelchange', function () {
        updateBatteryLevel(battery.level * 100);
      });
    });
  }

  // Cập nhật thời gian hiện tại và thứ trong tuần
  function updateCurrentTime() {
    var currentTime = document.getElementById("currentTime");
    var currentDay = document.getElementById("currentDay");
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();

    currentDay.textContent = "Times: " + getDayOfWeek(day);
    currentTime.textContent = "" + hours + ":" + minutes + ":" + seconds;
  }

  // Lấy tên thứ trong tuần
  function getDayOfWeek(day) {
    var daysOfWeek = ["Chủ Nhật","Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    return daysOfWeek[day];
  }

  // Cập nhật thời gian hiện tại và thứ trong tuần mỗi giây
  setInterval(updateCurrentTime, 1000);

  var cpuCount = window.navigator.hardwareConcurrency; // Thay navigator thành window.navigator để tránh lỗi liên quan đến global Navigator interface
  var cpuInfoElement = document.getElementById("cpuInfo");
  cpuInfoElement.innerText = "Total Cpu: " + cpuCount;
  
  var frameCount = 0;
  var fps = 0;

  function calculateFPS() {
    requestAnimationFrame(function() {
      frameCount++;
      calculateFPS();
    });
  }

  function updateFPS() {
    setTimeout(function() {
      fps = frameCount;
      frameCount = 0;
      document.getElementById("fps-value").textContent = "Fps Game: " + fps;
      updateFPS();
    }, 1000);
  }

  calculateFPS();
  updateFPS();
}
      
        function openLink(url) {
            window.open(url, "_blank");
        }

h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");
if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);

    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

    

//0x33538D0


var codeStatus = false;

// thả code chức năng ở đây//

function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;
    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32');
            modifiedCount++;
            if (searchValue === Chao) Chao = replaceValue;
            if (searchValue === Votay) Votay = replaceValue;
            if (searchValue === khieukhich) khieukhich = replaceValue;
            if (searchValue === Buoc1) Buoc1 = replaceValue;
            if (searchValue === Buoc2) Buoc2 = replaceValue;
            if (searchValue === Buoc3) Buoc3 = replaceValue;

        }
    });
    if (modifiedCount > 0) {
        if (alertMessage) alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}
function Aim180() {
    // Define the searchAndReplace function inside AimCope
    function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }

    // Call searchAndReplace with specified parameters
    searchAndReplace(1057048494, -2000, 'I32');
    searchAndReplace(1054951342, -2000, 'I32');
    searchAndReplace(1053273620, -2000, 'I32');
}


function Norecoil() {
    // Define the searchAndReplace function inside AimCope
    function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }

    // Call searchAndReplace with specified parameters
    searchAndReplace(1016018816, 6018816, 'I32');


	function AimCope() {
        function searchAndReplace(searchValue,
        replaceValue,
        type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue,
        type,
        '0x100000000',
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(0.09, 180, 'F32')}









/*

h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");
if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);

    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}
*/

var app = new Vue({
			el: "#app",
			data() {
				return {
					ifshow: true,
					checked: false,
					radio: '1',
					activeSelect: '',
					selectOption: [{
				
					}],
					input: "",
					showOption: false,
					tabValue: "one",
				}
			},
			mounted() {
				this.setRect(360, 320);

				//设置不可拖动
				setWindowDrag(0, 0, 0, 0);
    
				var layout = function()
				{
					//window.orientation是设备握持方向, 不是屏幕显示方向
					if(window.lastorientation==window.orientation) return;
					window.lastorientation=window.orientation;
				
					//window.screen中的宽高不会随着屏幕旋转更新(只会在初始化的时候固定)
					if(Math.abs(window.orientation)==90) {
						//横屏模式
						setWindowRect(0,0,window.screen.height,window.screen.width);
					} else {
						//竖屏模式
						setWindowRect(0,0,window.screen.width,window.screen.height);
					}
				}
	
				layout(); //设置旋转屏幕时自动调整布局和画布
				window.addEventListener("orientationchange", layout, false);

				setButtonAction(function () {
					var menu = document.querySelector("#app");
					if (menu.style.display == 'none') {
						menu.style.display = 'block';
						//显示菜单之后, 设置触控不可穿透悬浮窗口
						setWindowTouch(true);
					} else {
						menu.style.display = 'none';
						//隐藏菜单之后, 设置触控穿透悬浮窗口
						setWindowTouch(false);
					}
				});
			},

			methods: {
				setRect(w, h, x = -1, y = -1) {
					var boxW = w;
					var boxH = h;

					var ayMenu = this.$refs.menuMain;
					ayMenu.style.width = `${boxW}px`;
					ayMenu.style.height = `${boxH}px`;
					if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
					if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;

	ayMenu.style.width= "520px";
	ayMenu.style.height= "290px";

    ayMenu.style.borderBottomLeftRadius = "10px";
    ayMenu.style.borderBottomRightRadius = "10px";
    ayMenu.style.borderTopLeftRadius = "10px";
    ayMenu.style.borderTopRightRadius = "10px";              
				},
				titleTouchStart(event) {
					this.touchStartX = parseInt(event.touches[0].clientX);
					this.touchStartY = parseInt(event.touches[0].clientY);

					var ayMenu = this.$refs.menuMain;
					this.menuLastX = ayMenu.offsetLeft;
					this.menuLastY = ayMenu.offsetTop;
				},
				titleTouchMove(event) {
					event.preventDefault();
					var distanceX = event.touches[0].clientX - this.touchStartX;
					var distanceY = event.touches[0].clientY - this.touchStartY;

					var ayMenu = this.$refs.menuMain;
					ayMenu.style.left = this.menuLastX + distanceX + "px";
					ayMenu.style.top = this.menuLastY + distanceY + "px";
				},
				//切换导航栏
				changeTab(v) {
					this.tabValue = v;
				},
				closeimgui() {
               var menu = 
document.querySelector("#app");
        menu.style.display='none';
        
        //隐藏菜单之后, 设置触控穿透悬浮窗口
        setWindowTouch(false);

				}
			}
		});/* VUE */
new Vue({
el:"#app",
data:{
tab:"home",
show:true,
sens:50,

/* TOAST */
toasts:[],

/* DEVICE INFO */
device:{
ios:"Detecting...",
model:"Detecting...",
browser:"Detecting..."
},

/* OPTIMIZER */
optimizer:{
show:false,
progress:0,
logs:[]
},
startRunner:{
show:false,
progress:0,
logs:[]
},

/* ⭐ START FILES */
startRunner:{
show:false,
progress:0,
logs:[]
}

},
methods:{
changeSens(){
this.notify("Sensitivity "+this.sens+"%",true)
}
/* ===== RUNG NHẸ ===== */
haptic(){
if(navigator.vibrate) navigator.vibrate(20)
},

/* ===== TOAST ===== */
notify(name,state){

this.haptic()

const id=Date.now()

this.toasts.push({
id:id,
text:name + (state?" Đã bật":" Đã tắt"),
type:state?"on":"off"
})

setTimeout(()=>{
this.toasts =
this.toasts.filter(t=>t.id!==id)
},1800)

},

/* ===== OPTIMIZE CPU ===== */
optimizeCPU(state){

if(!state){
this.notify("Optimize CPU",false)
return
}

this.optimizer.show=true
this.optimizer.progress=0
this.optimizer.logs=[]

const steps=[
"Initializing system...",
"Scanning CPU cores...",
"Cleaning RAM cache...",
"Stopping background tasks...",
"Boosting performance...",
"Applying tweaks...",
"Completed!"
]

let i=0

const run=setInterval(()=>{

if(i<steps.length){

this.optimizer.logs.push("> "+steps[i])
this.optimizer.progress+=14
i++

}else{

clearInterval(run)

setTimeout(()=>{
this.optimizer.show=false
this.notify("Optimize CPU",true)
},800)

}

},500)

},

/* ===== FREE FIRE ===== */
runGame(game,state){

if(!state){
this.notify(game,false)
return
}

let link=""

/* ===== iOS APP LINK ===== */
if(game==="Free Fire"){
link="https://apps.apple.com/app/id1300146617"
}

if(game==="Free Fire MAX"){
link="https://apps.apple.com/app/id1480516829"
}

/* chạy terminal giống optimizer */
this.runTerminal(
game,
[
"Checking device...",
"Loading FASTTOP engine...",
"Applying iOS tweaks...",
"Unlocking FPS...",
"Optimizing GPU...",
"Preparing launch...",
"Opening "+game+"...",
"Completed!"
],
game
)

/* mở game sau khi chạy xong */
setTimeout(()=>{
window.location.href = link
},3500)

}

/* DRAG MENU */

let menu=document.querySelector(".menu")

let isDown=false
let offset=[0,0]

menu.addEventListener("mousedown",e=>{
isDown=true
offset=[
menu.offsetLeft-e.clientX,
menu.offsetTop-e.clientY
]
})

document.addEventListener("mouseup",()=>isDown=false)

document.addEventListener("mousemove",e=>{
if(isDown){
menu.style.left=e.clientX+offset[0]+"px"
menu.style.top=e.clientY+offset[1]+"px"
menu.style.transform="none"
}
})new Vue({
el:"#app",
data:{
tab:"home",
show:true,
sens:50,
startRunner:{
show:false,
progress:0,
logs:[]
},
methods:{
  changeSens(){
this.notify("Sensitivity "+this.sens+"%",true)
}
  runGame(game,state){

if(!state){
this.notify(game,false)
return
}

this.optimizer.show=true
this.optimizer.progress=0
this.optimizer.logs=[]

const steps=[
"Checking game files...",
"Loading resources...",
"Injecting FASTOP modules...",
"Applying graphics tweaks...",
"Optimizing memory...",
"Launching "+game+"...",
"Completed!"
]

let i=0

const run=setInterval(()=>{

if(i<steps.length){

this.optimizer.logs.push("> "+steps[i])
this.optimizer.progress+=14
i++

}else{

clearInterval(run)

setTimeout(()=>{
this.optimizer.show=false
this.notify(game,true)
},800)

}

},450)

}
openLink(url){
window.open(url,"_blank")
}
}
})/* VUE */

new Vue({
el:"#app",

data:{
tab:"home",
show:true,
versionSelect:false,

toasts:[]
},

methods:{
  changeSens(){
this.notify("Sensitivity "+this.sens+"%",true)
}
  runGame(game,state){

if(!state){
this.notify(game,false)
return
}

this.optimizer.show=true
this.optimizer.progress=0
this.optimizer.logs=[]

const steps=[
"Checking game files...",
"Loading resources...",
"Injecting FASTOP modules...",
"Applying graphics tweaks...",
"Optimizing memory...",
"Launching "+game+"...",
"Completed!"
]

let i=0

const run=setInterval(()=>{

if(i<steps.length){

this.optimizer.logs.push("> "+steps[i])
this.optimizer.progress+=14
i++

}else{

clearInterval(run)

setTimeout(()=>{
this.optimizer.show=false
this.notify(game,true)
},800)

}

},450)

}
  runGame(game,state){

if(!state){
this.notify(game,false)
return
}

this.optimizer.show=true
this.optimizer.progress=0
this.optimizer.logs=[]

const steps=[
"Checking game files...",
"Loading resources...",
"Injecting FASTOP modules...",
"Applying graphics tweaks...",
"Optimizing memory...",
"Launching "+game+"...",
"Completed!"
]

let i=0

const run=setInterval(()=>{

if(i<steps.length){

this.optimizer.logs.push("> "+steps[i])
this.optimizer.progress+=14
i++

}else{

clearInterval(run)

setTimeout(()=>{
this.optimizer.show=false
this.notify(game,true)
},800)

}

},450)

}
  
  /* ===== START FILES ===== */

openVersion(){
this.haptic()
this.versionSelect = true
},

selectVersion(v){

this.versionSelect = false

this.notify("FastTop iOS ("+v+")",true)

}

notify(name,state){

const id=Date.now()

this.toasts.push({
id,
text: name + (state ? " Enabled" : " Disabled"),
type: state ? "on" : "off"
})

setTimeout(()=>{
this.toasts=this.toasts.filter(t=>t.id!==id)
},1800)

}
mounted(){

const ua = navigator.userAgent

/* ===== Detect iOS Version ===== */
let iosMatch = ua.match(/OS (\d+)_?(\d+)?/)
if(iosMatch){
this.device.ios = "iOS " + iosMatch[1] + "." + (iosMatch[2]||0)
}else{
this.device.ios = "Unknown"
}

/* ===== Detect Device ===== */
if(/iPhone/.test(ua)) this.device.model="iPhone"
else if(/iPad/.test(ua)) this.device.model="iPad"
else this.device.model="Desktop"

/* ===== Detect Browser ===== */
if(ua.includes("CriOS")) this.device.browser="Chrome iOS"
else if(ua.includes("Safari")) this.device.browser="Safari"
else this.device.browser="Unknown"
startFiles(){

this.haptic()

this.startRunner.show = true
this.startRunner.progress = 0
this.startRunner.logs = []

const steps=[
"Mounting system files...",
"Loading bypass modules...",
"Injecting FastTop kernel...",
"Preparing graphics tweak...",
"Initializing Free Fire support...",
"Optimizing memory...",
"Finalizing startup..."
]

let i=0

const run=setInterval(()=>{

if(i<steps.length){

this.startRunner.logs.push("> "+steps[i])
this.startRunner.progress += 14
i++

}else{

clearInterval(run)

setTimeout(()=>{

this.startRunner.show=false

// mở chọn version
this.versionSelect=true

this.notify("FastTop iOS",true)

},700)

}

},450)

},
}

}

})