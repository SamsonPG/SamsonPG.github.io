const n=`:root {\r
  --color-blue: #014AC8;\r
  --color-dark-blue: #0A5A92;\r
  --color-grey: #494949;\r
  --color-white: #fff;\r
  --color-black: #2D2D2D;\r
  --color-orange: #F68A22;\r
  --color-l-gray: #F7F7F7;\r
  --gradient: linear-gradient(-90deg, rgba(0, 52, 189, 1) 0%, rgba(1, 166, 252, 1) 100%);\r
  --gradient2: linear-gradient(45deg, rgba(7, 132, 219, 1) 0%, rgba(0, 150, 255, 1) 100%);\r
  --font: "Poppins", sans-serif;\r
}\r
\r
body {\r
  background: var(--color-white);\r
  font-size: 16px;\r
  color: var(--text-grey);\r
  font-weight: 300;\r
  overflow-x: hidden;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
  text-rendering: optimizeLegibility;\r
  font-family: var(--font);\r
}\r
\r
strong {\r
  font-weight: 600 !important;\r
}\r
\r
::selection {\r
  background: #666;\r
  color: var(--color-white);\r
}\r
\r
::-webkit-scrollbar {\r
  width: 5px;\r
  height: 10px;\r
}\r
\r
::-webkit-scrollbar-track {\r
  background: var(--color-grey-1);\r
}\r
\r
::-webkit-scrollbar-thumb {\r
  background: var(--color-red);\r
  border-radius: 15px;\r
}\r
\r
a {\r
  text-decoration: none;\r
  color: #41ABE1;\r
}\r
\r
ul {\r
  margin: 0;\r
  padding: 0;\r
  list-style: none;\r
}\r
\r
img {\r
  max-width: 100%;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
  margin: 0;\r
  padding: 0;\r
  font-weight: 300;\r
  color: var(--color-dark-blue);\r
  line-height: normal;\r
  font-size: 30px;\r
}\r
\r
\r
\r
@media (max-width: 767px) {\r
  h2 {\r
    font-size: 22px;\r
  }\r
\r
  .text-center-mobile {\r
    text-align: center;\r
  }\r
}\r
\r
ul.txt-list {\r
  list-style: disc;\r
  padding-left: 30px;\r
}\r
\r
ul.txt-list li {\r
  margin-bottom: 5px;\r
}\r
\r
.terms-box {\r
  margin-bottom: 30px;\r
}\r
\r
figure {\r
  margin: 0;\r
}\r
\r
p {\r
  margin-bottom: 10px;\r
}\r
\r
iframe {\r
  display: block;\r
}\r
\r
button:focus {\r
  outline: none;\r
  box-shadow: none;\r
}\r
\r
section {\r
  overflow-x: clip;\r
}\r
\r
.form-control {\r
  border: solid 1px #ddd;\r
  border-radius: 5px;\r
  font-size: 14px;\r
  padding: 10px 15px;\r
  background: var(--color-white);\r
  color: var(--color-black);\r
}\r
\r
textarea {\r
  height: 85px;\r
  resize: none;\r
}\r
\r
.img-cover {\r
  object-fit: cover;\r
  object-position: center;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.heading-One {\r
  font-size: 20px;\r
  font-weight: 700;\r
  color: var(--color-black);\r
}\r
\r
.heading-Two {\r
  font-size: 22px;\r
  font-weight: 600;\r
  color: var(--color-black);\r
}\r
\r
.heading-Three {\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: #8F8F8F;\r
}\r
\r
.heading-four {\r
  font-size: 18px;\r
  font-weight: 700;\r
  color: var(--color-black);\r
}\r
\r
.heading-five {\r
  font-size: 16px;\r
  font-weight: 700;\r
  color: var(--color-black);\r
}\r
\r
.image-round {\r
  border-radius: 50%;\r
  width: 50px;\r
  height: 50px;\r
  overflow: hidden;\r
}\r
\r
.font-12 {\r
  font-size: 12px;\r
}\r
\r
.font-13 {\r
  font-size: 13px;\r
}\r
\r
.font-14 {\r
  font-size: 14px;\r
}\r
\r
.font-15 {\r
  font-size: 15px;\r
}\r
\r
.font-16 {\r
  font-size: 16px;\r
}\r
\r
.font-17 {\r
  font-size: 17px;\r
}\r
\r
.font-18 {\r
  font-size: 16px;\r
}\r
\r
@media (min-width: 1200px) {\r
  .font-18 {\r
    font-size: 18px;\r
  }\r
}\r
\r
.font-20 {\r
  font-size: 18px;\r
}\r
\r
@media (min-width: 1366px) {\r
  .font-20 {\r
    font-size: 20px;\r
  }\r
}\r
\r
.font-22 {\r
  font-size: 20px;\r
}\r
\r
@media (min-width: 1366px) {\r
  .font-22 {\r
    font-size: 22px;\r
  }\r
}\r
\r
.font-30 {\r
  font-size: 30px;\r
}\r
\r
@media (min-width: 1366px) {\r
  .font-30 {\r
    font-size: 28px;\r
  }\r
}\r
\r
.font-50 {\r
  font-size: 32px;\r
}\r
\r
@media (min-width: 576px) {\r
  .font-50 {\r
    font-size: 36px;\r
  }\r
}\r
\r
@media (min-width: 1024px) {\r
  .font-50 {\r
    font-size: 42px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .font-50 {\r
    font-size: 50px;\r
  }\r
}\r
\r
.font-70 {\r
  font-size: 40px;\r
}\r
\r
@media (min-width: 768px) {\r
  .font-70 {\r
    font-size: 48px;\r
  }\r
}\r
\r
@media (min-width: 1024px) {\r
  .font-70 {\r
    font-size: 55px;\r
  }\r
}\r
\r
@media (min-width: 1200px) {\r
  .font-70 {\r
    font-size: 62px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .font-70 {\r
    font-size: 70px;\r
  }\r
}\r
\r
.fw-300 {\r
  font-weight: 300 !important;\r
}\r
\r
.fw-400 {\r
  font-weight: 400 !important;\r
}\r
\r
.fw-500 {\r
  font-weight: 500 !important;\r
}\r
\r
.fw-600 {\r
  font-weight: 600 !important;\r
}\r
\r
.fw-700 {\r
  font-weight: 700 !important;\r
}\r
\r
.fw-800 {\r
  font-weight: 800 !important;\r
}\r
\r
.gap-1x {\r
  gap: 1px;\r
}\r
\r
.gap-2x {\r
  gap: 2px;\r
}\r
\r
.gap-3x {\r
  gap: 3px;\r
}\r
\r
.gap-4x {\r
  gap: 4px;\r
}\r
\r
.gap-5x {\r
  gap: 5px;\r
}\r
\r
.text-black {\r
  color: var(--color-black) !important;\r
}\r
\r
.text-red {\r
  color: var(--color-red) !important;\r
}\r
\r
.text-white {\r
  color: var(--color-white) !important;\r
}\r
\r
.text-left {\r
  text-align: left !important;\r
}\r
\r
.text-center {\r
  text-align: center !important;\r
}\r
\r
.text-right {\r
  text-align: right !important;\r
}\r
\r
@media (min-width: 1400px) {\r
  .container {\r
    max-width: 1170px;\r
  }\r
}\r
\r
.default-padding {\r
  padding-block: 60px;\r
}\r
\r
@media (min-width: 1024px) {\r
  .default-padding {\r
    padding-block: 90px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .default-padding {\r
    padding-block: 110px;\r
  }\r
}\r
\r
.default-margin {\r
  margin-block: 50px 60px;\r
}\r
\r
@media (min-width: 1024px) {\r
  .default-margin {\r
    margin-block: 90px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .default-margin {\r
    margin-block: 110px;\r
  }\r
}\r
\r
.vertical {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.y-center {\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.down-arrow {\r
  width: 0;\r
  height: 0;\r
  border-left: 5px solid transparent;\r
  border-right: 5px solid transparent;\r
  border-top: 5px solid #8a8a8d;\r
  transition: border-color 0.3s ease;\r
}\r
\r
.flip-x {\r
  transform: scaleX(-100%);\r
}\r
\r
.ul-primary {\r
  gap: 15px;\r
}\r
\r
.ul-primary li {\r
  display: flex;\r
  gap: 11px;\r
}\r
\r
.ul-primary li::before {\r
  content: "";\r
  flex: 0 0 auto;\r
  width: 10px;\r
  height: 10px;\r
  background: var(--color-red);\r
  margin-top: 7px;\r
}\r
\r
.orangTitle {\r
  color: #a4a4a3;\r
  font-size: 20px;\r
  font-weight: 300;\r
  margin-top: 10px;\r
}\r
\r
.gradient {\r
  background: var(--gradient);\r
}\r
\r
.border-radius-25 {\r
  border-radius: 20px;\r
}\r
\r
.btn-primary {\r
  background: var(--gradient);\r
  color: var(--color-white);\r
  padding: 12px 25px;\r
  white-space: nowrap;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-weight: 500;\r
  border: 0;\r
  font-size: 14px;\r
  border-radius: 8px;\r
}\r
\r
.btn-primary:hover {\r
  background: var(--color-blue);\r
}\r
\r
.btn-secondary {\r
  background: var(--gradient2) !important;\r
  color: var(--color-white) !important;\r
  padding: 10px 15px;\r
  white-space: nowrap;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-weight: 400;\r
  border: 0;\r
  font-size: 14px;\r
  border-radius: 8px;\r
}\r
\r
.btn-secondary:hover {\r
  background: var(--color-blue) !important;\r
  color: var(--color-white);\r
}\r
\r
.btn-sm {\r
  background: var(--gradient);\r
  color: var(--color-white);\r
  padding: 6px 15px;\r
  white-space: nowrap;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-weight: 300;\r
  border: 0;\r
  font-size: 12px;\r
  border-radius: 8px;\r
}\r
\r
.btn-sm:hover {\r
  background: var(--color-blue);\r
}\r
\r
.text-decoration {\r
  text-decoration: underline;\r
}\r
\r
.bg-text {\r
  color: #eee;\r
  font-size: 100px;\r
  font-weight: 800;\r
  text-transform: uppercase;\r
  width: fit-content;\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  z-index: -1;\r
  line-height: 1;\r
}\r
\r
.border-shape {\r
  width: 555px;\r
  height: 555px;\r
  border: solid 20px #f4f4f4;\r
  position: relative;\r
}\r
\r
.border-shape::after {\r
  content: "";\r
  width: 47px;\r
  height: 37px;\r
  background: #f4f4f4;\r
  outline: solid 28px var(--color-white);\r
  border-right: solid 10px #fff;\r
  position: absolute;\r
  top: 8px;\r
  right: 8px;\r
}\r
\r
.border-shape .bg-text {\r
  left: calc(100% + 3px);\r
  top: -45px;\r
  z-index: 1;\r
  font-size: 60px;\r
}\r
\r
@media (min-width: 1024px) {\r
  .border-shape .bg-text {\r
    font-size: 75px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .border-shape .bg-text {\r
    top: -75px;\r
    font-size: 100px;\r
  }\r
}\r
\r
.shape-wrap {\r
  position: absolute;\r
  top: 0;\r
  z-index: -1;\r
}\r
\r
.shape-wrap .shape {\r
  width: 60px;\r
  height: 85px;\r
  display: block;\r
}\r
\r
.shape-wrap .shape:nth-child(1) {\r
  background: var(--color-red);\r
}\r
\r
.shape-wrap .shape:nth-child(2),\r
.shape-wrap .shape:nth-child(3) {\r
  width: 70px;\r
  background: var(--color-grey-1);\r
  position: absolute;\r
}\r
\r
.shape-wrap .shape:nth-child(2) {\r
  top: 100%;\r
}\r
\r
.shape-wrap .shape:nth-child(3) {\r
  bottom: 100%;\r
}\r
\r
@media (min-width: 1200px) {\r
  .shape-wrap .shape {\r
    width: 80px;\r
    height: 110px;\r
  }\r
\r
  .shape-wrap .shape:nth-child(2),\r
  .shape-wrap .shape:nth-child(3) {\r
    width: 100px;\r
  }\r
}\r
\r
@media (min-width: 1366px) {\r
  .shape-wrap .shape {\r
    width: 140px;\r
    height: 180px;\r
  }\r
\r
  .shape-wrap .shape:nth-child(2),\r
  .shape-wrap .shape:nth-child(3) {\r
    width: 190px;\r
  }\r
}\r
\r
@media (max-width: 767px) {\r
  .shape-wrap .shape {\r
    width: 30px;\r
    height: 40px;\r
  }\r
\r
  .shape-wrap .shape:nth-child(2),\r
  .shape-wrap .shape:nth-child(3) {\r
    width: 40px;\r
  }\r
}\r
\r
.shape-wrap.left {\r
  left: 0;\r
}\r
\r
.shape-wrap.left .shape:nth-child(2),\r
.shape-wrap.left .shape:nth-child(3) {\r
  left: 100%;\r
}\r
\r
.shape-wrap.left .shape:nth-child(2) {\r
  left: 100%;\r
}\r
\r
.shape-wrap.right {\r
  right: 0;\r
}\r
\r
.shape-wrap.right .shape:nth-child(2),\r
.shape-wrap.right .shape:nth-child(3) {\r
  right: 100%;\r
}\r
\r
.shape-wrap.right .shape:nth-child(2) {\r
  right: 100%;\r
}\r
\r
.shape.red {\r
  background: var(--color-red);\r
}\r
\r
.shape.white {\r
  background: var(--color-white);\r
}\r
\r
.shape.grey {\r
  background: var(--color-grey-1);\r
}\r
\r
.w-bg-block {\r
  background: #fff;\r
  padding: 15px 20px;\r
  border-radius: 5px;\r
  box-shadow: 0 3px 2px 0px rgba(0, 0, 0, 0.0588235294);\r
}\r
\r
hr {\r
  border: 0;\r
  background-color: #a7c9db;\r
  height: 2px;\r
}\r
\r
.to-top {\r
  background: transparent;\r
  border: none;\r
  margin: 45px auto;\r
  display: flex;\r
  padding: 3px;\r
}\r
\r
@media (min-width: 1024px) {\r
  .to-top {\r
    margin-block: 70px;\r
  }\r
}\r
\r
@media (max-width: 767px) {\r
  .to-top img {\r
    max-width: 50px;\r
  }\r
}\r
\r
.color-w {\r
  color: var(--color-white) !important;\r
}\r
\r
.bg-w {\r
  background: var(--color-white) !important;\r
}\r
\r
.bg-b {\r
  background: var(--color-black) !important;\r
}\r
\r
.bg-o {\r
  background: var(--color-orange) !important;\r
}\r
\r
.bg-g {\r
  background: var(--color-l-gray) !important;\r
}\r
\r
.tableView th {\r
  background: transparent;\r
  font-size: 12px;\r
  text-transform: uppercase;\r
  font-weight: 600;\r
  color: #757575;\r
}\r
\r
.tableView tr {\r
  border-bottom-width: 3px;\r
  border-color: #EFF7FF;\r
  margin-bottom: 5px;\r
  font-size: 12px;\r
  font-weight: 600;\r
  vertical-align: middle;\r
}\r
\r
.z-index {\r
  z-index: 1;\r
  position: relative;\r
}\r
\r
.bSpace100 {\r
  margin-bottom: 100px;\r
}\r
\r
.bSpace70 {\r
  margin-bottom: 70px;\r
}\r
\r
.preloader {\r
  position: fixed;\r
  background: #fff;\r
  z-index: 99999;\r
  border-radius: 0px;\r
  padding: 15px 15px 10px 15px;\r
  width: 100%;\r
  height: 100%;\r
  opacity: 0.9;\r
}\r
\r
.preloader .loader {\r
  display: inline-block;\r
  width: 40px;\r
  height: 40px;\r
  border-radius: 50%;\r
  animation: pulse 1s infinite;\r
  left: 50%;\r
  top: 50%;\r
  position: absolute;\r
  transform: translate(-50%, -50%);\r
}\r
\r
header {\r
  background: #fff;\r
  border-radius: 10px;\r
  padding: 10px 15px;\r
  box-shadow: 0 6px 10px 0px rgba(0, 0, 0, 0.0392156863);\r
  position: absolute;\r
  top: 30px;\r
  z-index: 99;\r
  width: 100%;\r
  transform: translate(-50%);\r
  left: 50%;\r
  max-width: 1170px;\r
  width: 100%;\r
  transition: all 0.5s;\r
}\r
\r
header.newClass {\r
  transition: all 0.5s;\r
  position: fixed;\r
}\r
\r
@media (max-width: 767px) {\r
  header {\r
    width: 100%;\r
    top: 0px;\r
    border: 0;\r
  }\r
\r
  .bSpace100 {\r
    margin-bottom: 50px;\r
  }\r
}\r
\r
header .btn-secondary {\r
  font-size: 12px;\r
}\r
\r
header .tabNav {\r
  padding: 20px;\r
  background: rgb(236, 250, 255);\r
  background: linear-gradient(180deg, rgb(236, 250, 255) 0%, rgb(255, 255, 255) 100%);\r
  -webkit-border-top-left-radius: 10px;\r
  -webkit-border-bottom-left-radius: 10px;\r
  -moz-border-radius-topleft: 10px;\r
  -moz-border-radius-bottomleft: 10px;\r
  border-top-left-radius: 10px;\r
  border-bottom-left-radius: 10px;\r
}\r
\r
header .tabNav a {\r
  color: #000;\r
  padding: 10px 15px;\r
  display: block;\r
  margin-bottom: 3px;\r
  border: 1px solid transparent;\r
  font-size: 14px;\r
}\r
\r
header .tabNav a:hover {\r
  background: #fff;\r
  padding: 10px 15px;\r
  border: 1px solid #ABD8E9;\r
  border-radius: 10px;\r
}\r
\r
header .tabNav .tabact {\r
  background: #fff;\r
  padding: 10px 15px;\r
  border: 1px solid #ABD8E9;\r
  border-radius: 10px;\r
  margin-bottom: 3px;\r
}\r
\r
header .menuContent {\r
  padding: 0px;\r
}\r
\r
header .menuContent .bdr-right {\r
  border-right: 1px solid #eee;\r
}\r
\r
header .menuContent .menuHeading {\r
  margin-bottom: 25px;\r
  padding-bottom: 25px;\r
  border-bottom: 1px solid #eee;\r
}\r
\r
header .menuContent .menuHeading img {\r
  width: 60px;\r
  height: 60px;\r
  object-fit: contain;\r
}\r
\r
header .menuContent .menuHeading a {\r
  border-radius: 10px;\r
  border: 1px solid #D8DADB;\r
  padding: 10px 25px;\r
  color: #000;\r
  display: inline-block;\r
}\r
\r
header .menuContent .menuHeading a:hover {\r
  background: #000;\r
  color: #fff;\r
}\r
\r
header .menuContent h3 {\r
  font-size: 16px;\r
  color: #494949;\r
  font-weight: 700;\r
  margin-top: 20px;\r
  position: relative;\r
}\r
\r
header .menuContent h3::after {\r
  content: "";\r
  width: 35px;\r
  height: 1px;\r
  background: #1B75BC;\r
  position: absolute;\r
  left: 0;\r
  bottom: -20px;\r
}\r
\r
header .menuContent ul {\r
  margin-top: 35px;\r
  column-count: 2;\r
}\r
\r
header .menuContent ul li {\r
  margin-bottom: 10px;\r
  position: relative;\r
  padding-left: 25px;\r
  font-size: 14px;\r
}\r
\r
header .menuContent ul li::before {\r
  content: "";\r
  position: absolute;\r
  width: 10px;\r
  height: 10px;\r
  top: 6px;\r
  left: 0;\r
  border-radius: 50%;\r
  background: #00A3FF;\r
}\r
\r
header .menuContent .menuTesti {\r
  padding-right: 10px;\r
}\r
\r
header .menuContent .menuTesti .block {\r
  border: 1px solid #eee;\r
  border-radius: 10px;\r
  padding: 20px;\r
  margin-top: 20px;\r
}\r
\r
header .menuContent .menuTesti h3::after {\r
  display: none;\r
}\r
\r
header .menuContent .menuTesti h4 {\r
  font-size: 16px;\r
}\r
\r
.bannerArea {\r
  padding-top: 150px;\r
  position: relative;\r
  height: 100%;\r
  padding-bottom: 150px;\r
  margin-bottom: 150px;\r
  overflow: hidden;\r
  -webkit-border-bottom-right-radius: 100px;\r
  -webkit-border-bottom-left-radius: 100px;\r
  -moz-border-radius-bottomright: 100px;\r
  -moz-border-radius-bottomleft: 100px;\r
  border-bottom-right-radius: 100px;\r
  border-bottom-left-radius: 100px;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea {\r
    padding-top: 130px;\r
    -webkit-border-bottom-right-radius: 0px;\r
    -webkit-border-bottom-left-radius: 0px;\r
    -moz-border-radius-bottomright: 0px;\r
    -moz-border-radius-bottomleft: 0px;\r
    border-bottom-right-radius: 0px;\r
    border-bottom-left-radius: 0px;\r
    padding-bottom: 30px;\r
    margin-bottom: 50px;\r
  }\r
\r
  .bannerArea span {\r
    display: block;\r
    width: 100%;\r
  }\r
}\r
\r
.bannerArea::before {\r
  content: "";\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  background: #E8F7FF;\r
  height: 100%;\r
  width: 100%;\r
  -webkit-border-bottom-right-radius: 100px;\r
  -webkit-border-bottom-left-radius: 100px;\r
  -moz-border-radius-bottomright: 100px;\r
  -moz-border-radius-bottomleft: 100px;\r
  border-bottom-right-radius: 100px;\r
  border-bottom-left-radius: 100px;\r
  z-index: -1;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea::before {\r
    -webkit-border-bottom-right-radius: 0px;\r
    -webkit-border-bottom-left-radius: 0px;\r
    -moz-border-radius-bottomright: 0px;\r
    -moz-border-radius-bottomleft: 0px;\r
    border-bottom-right-radius: 0px;\r
    border-bottom-left-radius: 0px;\r
  }\r
}\r
\r
.bannerArea .roundshade {\r
  border-radius: 100%;\r
  z-index: -1;\r
  filter: blur(150px);\r
  position: absolute;\r
  width: 500px;\r
  height: 500px;\r
}\r
\r
.bannerArea .roundshade-1 {\r
  background: #C0D1FF;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
}\r
\r
.bannerArea .roundshade-2 {\r
  background: #3312FF;\r
  position: absolute;\r
  right: 150px;\r
  bottom: 0;\r
  opacity: 0.3;\r
}\r
\r
.bannerArea .roundshade-3 {\r
  background: #00A3FF;\r
  position: absolute;\r
  left: 150px;\r
  bottom: 0;\r
  opacity: 0.5;\r
}\r
\r
.bannerArea h1 {\r
  font-size: 50px;\r
  margin-bottom: 30px;\r
}\r
\r
.bannerArea h1 span {\r
  background: linear-gradient(45deg, rgb(1, 153, 244) 0%, rgb(1, 71, 199) 100%);\r
  -webkit-background-clip: text;\r
  -webkit-text-fill-color: transparent;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea h1 {\r
    font-size: 30px;\r
  }\r
}\r
\r
.bannerArea .tabSection {\r
  padding: 30px 0 0;\r
}\r
\r
.bannerArea .tabSection .owl-stage {\r
  margin: auto;\r
}\r
\r
.bannerArea .tabSection #tabs-nav {\r
  list-style: none;\r
  margin: 0 auto;\r
  overflow: auto;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  max-width: 700px;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection #tabs-nav {\r
    align-items: start;\r
    justify-content: left;\r
  }\r
}\r
\r
.bannerArea .tabSection #tabs-nav .icons {\r
  font-weight: bold;\r
  margin: 0 0px;\r
  padding: 8px 10px;\r
  cursor: pointer;\r
  text-align: center;\r
}\r
\r
.bannerArea .tabSection #tabs-nav .icons span {\r
  display: block;\r
  height: 57px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 60px;\r
  border-radius: 12px;\r
  margin: 0 auto 0px;\r
}\r
\r
.bannerArea .tabSection #tabs-nav .icons span img {\r
  width: 40px;\r
  object-fit: contain;\r
  height: 30px;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection #tabs-nav .icons span img {\r
    filter: brightness(0) invert(1);\r
  }\r
}\r
\r
.bannerArea .tabSection #tabs-nav .icons a {\r
  text-decoration: none;\r
  color: #454545;\r
  font-weight: 500;\r
  font-size: 12px;\r
  text-transform: uppercase;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection #tabs-nav .icons a {\r
    color: #fff;\r
    opacity: 0.8;\r
  }\r
}\r
\r
.bannerArea .tabSection #tabs-nav .owl-item.active {\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection #tabs-nav .owl-item.active:hover {\r
  margin-top: -5px;\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection #tabs-nav .owl-item.active.center a {\r
  text-decoration: none;\r
  color: #454545;\r
  font-weight: 500;\r
  font-size: 12px;\r
  text-transform: uppercase;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection #tabs-nav .owl-item.active.center a {\r
    color: #fff;\r
    opacity: 1;\r
  }\r
}\r
\r
.bannerArea .tabSection #tabs-nav .owl-item.active.center span {\r
  background: var(--color-blue);\r
  opacity: 1;\r
}\r
\r
.bannerArea .tabSection #tabs-nav .owl-item.active.center span img {\r
  filter: brightness(0) invert(1);\r
  opacity: 1;\r
}\r
\r
.bannerArea .tabSection tabs-nav .icons a {\r
  text-decoration: none;\r
  color: #454545;\r
  font-weight: 300;\r
  font-size: 14px;\r
  text-transform: uppercase;\r
}\r
\r
.bannerArea .tabSection .tab-content {\r
  padding: 0px 0 50px;\r
  background: transparent;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection .tab-content {\r
    padding: 0px;\r
  }\r
}\r
\r
.bannerArea .tabSection .tab-content .bigImage {\r
  text-align: center;\r
  bottom: 0;\r
  opacity: 0;\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection .tab-content .smallImage {\r
  position: absolute;\r
  right: 0;\r
  bottom: -50px;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection .tab-content .smallImage {\r
    position: absolute;\r
    right: 30px;\r
    bottom: 10px;\r
    width: 70%;\r
  }\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock {\r
  position: absolute;\r
  left: 0;\r
  bottom: 50px;\r
  border-radius: 20px;\r
  padding: 50px;\r
  background: var(--gradient2);\r
  opacity: 0;\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock h2 {\r
  font-size: 20px;\r
  color: var(--color-white);\r
  line-height: 26px;\r
  margin-bottom: 20px;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock h2 span {\r
  font-size: 16px;\r
  display: block;\r
  font-weight: 300;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock ul li {\r
  font-size: 16px;\r
  color: #fff;\r
  position: relative;\r
  padding-left: 35px;\r
  margin: 8px 0;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock ul li::before {\r
  content: "";\r
  width: 20px;\r
  height: 20px;\r
  background: url(../images/tick.svg);\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock .sm-bttn {\r
  border: 1px solid #fff;\r
  padding: 6px 12px;\r
  border-radius: 10px;\r
  color: #fff;\r
  font-size: 14px;\r
  margin-top: 15px;\r
  display: inline-block;\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection .tab-content .contentBlock .sm-bttn:hover {\r
  background: #fff;\r
  color: var(--color-blue);\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection .tab-content .contentBlock {\r
    display: none;\r
  }\r
}\r
\r
.bannerArea .tabSection .tab-content.first .contentBlock {\r
  position: absolute;\r
  left: 0;\r
  bottom: 100px;\r
  border-radius: 20px;\r
  padding: 50px;\r
  background: var(--gradient2);\r
  opacity: 1;\r
}\r
\r
.bannerArea .tabSection .tab-content.first .bigImage {\r
  position: relative;\r
  bottom: -50px;\r
  transition: all 0.5s;\r
  opacity: 1;\r
}\r
\r
@media (max-width: 767px) {\r
  .bannerArea .tabSection .tab-content.first .bigImage {\r
    bottom: 0;\r
  }\r
}\r
\r
.bannerArea .tabSection .tab-content.act .contentBlock {\r
  position: absolute;\r
  left: 0;\r
  bottom: 60px;\r
  border-radius: 20px;\r
  padding: 50px;\r
  background: var(--gradient2);\r
  opacity: 1;\r
  transition: all 0.5s;\r
}\r
\r
.bannerArea .tabSection .tab-content.act .bigImage {\r
  position: relative;\r
  bottom: -50px;\r
  transition: all 0.5s;\r
  opacity: 1;\r
}\r
\r
.byteriverTitle {\r
  padding-bottom: 20px;\r
  margin-bottom: 40px;\r
  position: relative;\r
}\r
\r
.byteriverTitle::before {\r
  content: "";\r
  position: absolute;\r
  left: 0;\r
  bottom: 0;\r
  width: 70px;\r
  height: 1px;\r
  background: var(--color-dark-blue);\r
}\r
\r
.foldTwo {\r
  margin: 0 0 100px;\r
  padding: 0;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo {\r
    padding: 0 15px;\r
    margin-bottom: 50px;\r
  }\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo h2 br {\r
    display: none;\r
  }\r
}\r
\r
.foldTwo .productSec {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr auto;\r
  gap: 0px;\r
  padding: 10px;\r
  position: relative;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo .productSec {\r
    display: block;\r
    column-count: 3;\r
    padding-top: 260px;\r
  }\r
}\r
\r
.foldTwo .productSec::before {\r
  content: "";\r
  left: -70px;\r
  top: -60px;\r
  width: 388px;\r
  height: 388px;\r
  background: url(../images/productImage.jpg);\r
  border-radius: 25px;\r
  position: absolute;\r
  z-index: -1;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo .productSec::before {\r
    left: 0;\r
    top: 20px;\r
    width: 100%;\r
  }\r
}\r
\r
.foldTwo .productSec .logoItem {\r
  border: 1px solid #C5DDEA;\r
  width: 250px;\r
  height: 250px;\r
  border-radius: 20px;\r
  background: #fff;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo .productSec .logoItem {\r
    width: 100px;\r
    height: 100px;\r
    border-radius: 10px !important;\r
    margin-bottom: 15px;\r
  }\r
\r
  .foldTwo .productSec .logoItem img {\r
    width: 50px;\r
    height: 50px;\r
    object-fit: contain;\r
  }\r
}\r
\r
.foldTwo .productSec .logoItem:first-child {\r
  background: transparent !important;\r
}\r
\r
.foldTwo .productSec .bdr-left-bottom {\r
  border-bottom-left-radius: 0px;\r
}\r
\r
.foldTwo .productSec .bdr-right-top {\r
  border-top-right-radius: 0px;\r
}\r
\r
.foldTwo .productSec .bdr-right-bottom {\r
  border-bottom-right-radius: 0px;\r
}\r
\r
.foldTwo .productSec .bdr-left-top {\r
  border-top-left-radius: 0px;\r
}\r
\r
.foldTwo .productSec .left-pos {\r
  position: relative;\r
  left: -25px;\r
  top: -25px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo .productSec .left-pos {\r
    left: 0;\r
    top: 0;\r
  }\r
}\r
\r
.foldTwo .productSec .right-pos {\r
  position: relative;\r
  right: -25px;\r
  top: 25px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldTwo .productSec .right-pos {\r
    left: 0;\r
    top: 0;\r
  }\r
}\r
\r
.foldTwo .productSec .blueBg {\r
  background: #F0F6FE;\r
}\r
\r
.foldThree {\r
  margin: 0 0 100px;\r
  padding: 0;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldThree {\r
    padding: 0 15px;\r
    margin-bottom: 50px;\r
  }\r
}\r
\r
.foldThree .swiper-slide {\r
  text-align: center;\r
}\r
\r
.foldThree .darkblueBox {\r
  background: rgb(0, 24, 87);\r
  background-image: conic-gradient(from 36deg, #001857, #0776C3);\r
  padding: 20px;\r
  font-size: 14px;\r
  border-radius: 15px;\r
  color: #fff;\r
  text-align: center;\r
  max-width: 185px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldThree .darkblueBox {\r
    max-width: 100%;\r
    margin-bottom: 25px;\r
  }\r
}\r
\r
.foldThree .darkblueBox strong {\r
  font-weight: 700;\r
}\r
\r
.foldThree .darkblueBox i {\r
  font-size: 30px;\r
}\r
\r
.foldThree .mySwiper {\r
  padding-bottom: 0px;\r
}\r
\r
.foldThree .swiper-pagination {\r
  top: 60px;\r
  text-align: left;\r
}\r
\r
.foldFour {\r
  margin: 0 0 100px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFour {\r
    padding: 0 15px;\r
    margin-bottom: 50px;\r
  }\r
}\r
\r
.foldFour .blueboxBig {\r
  background: rgb(0, 95, 212);\r
  background: linear-gradient(45deg, rgb(0, 95, 212) 27%, rgb(29, 57, 108) 93%);\r
  padding: 70px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFour .blueboxBig {\r
    padding: 50px 25px;\r
  }\r
}\r
\r
.foldFour .blueboxBig .title {\r
  font-size: 37px;\r
  color: #fff;\r
  margin-bottom: 20px;\r
}\r
\r
.foldFour .blueboxBig .title span {\r
  display: block;\r
  font-size: 16px;\r
  letter-spacing: 4px;\r
  text-transform: uppercase;\r
}\r
\r
.foldFour .blueboxBig p {\r
  color: #fff;\r
}\r
\r
.foldFour .blueboxBig .logoImage {\r
  position: absolute;\r
  left: 50%;\r
  top: 50%;\r
  transform: translate(-50%, -50%);\r
  width: 300px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFour .blueboxBig .logoImage {\r
    display: none;\r
  }\r
}\r
\r
.foldFive {\r
  margin: 0 0 50px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFive {\r
    padding: 0 15px;\r
    margin-bottom: 0;\r
  }\r
}\r
\r
.foldFive .customerBlock {\r
  padding: 25px 0px 0 25px;\r
  border-radius: 10px;\r
  background: rgb(236, 250, 255);\r
  background: linear-gradient(0deg, rgb(236, 250, 255) 0%, rgb(207, 222, 253) 100%);\r
}\r
\r
.foldFive .customerBlock h3 {\r
  font-size: 18px;\r
  font-weight: 700;\r
  margin-bottom: 0px;\r
  line-height: 20px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFive .customerBlock h3 {\r
    font-size: 14px;\r
  }\r
}\r
\r
.foldFive .customerBlock h3 span {\r
  display: block;\r
  font-size: 12px;\r
  font-weight: 300;\r
}\r
\r
.foldFive .tabSection {\r
  padding: 0px 0 30px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFive .tabSection {\r
    margin-top: 35px;\r
  }\r
}\r
\r
.foldFive .tabSection h3 {\r
  font-size: 14px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFive .tabSection h3 {\r
    display: none;\r
  }\r
}\r
\r
.foldFive .tabSection ul#tabs-nav1 {\r
  list-style: none;\r
  margin: 0 auto;\r
  overflow: auto;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.foldFive .tabSection ul#tabs-nav1 li {\r
  float: left;\r
  font-weight: bold;\r
  margin: 0 15px;\r
  padding: 8px 10px;\r
  cursor: pointer;\r
  text-align: center;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 12px;\r
  margin: 0 auto 10px;\r
  height: 50px;\r
  font-size: 12px;\r
}\r
\r
@media (max-width: 767px) {\r
  .foldFive .tabSection ul#tabs-nav1 li {\r
    padding: 8px 0;\r
  }\r
}\r
\r
.foldFive .tabSection ul#tabs-nav1 li span {\r
  padding: 0 10px;\r
}\r
\r
.foldFive .tabSection ul#tabs-nav1 li span img {\r
  height: 40px;\r
  width: 40px;\r
  margin-bottom: 10px;\r
}\r
\r
.foldFive .tabSection ul#tabs-nav1 li:hover img,\r
.foldFive .tabSection ul#tabs-nav1 li.active img {\r
  filter: sepia(100%) hue-rotate(190deg) saturate(1000%);\r
}\r
\r
.foldFive .tabSection #tabs-nav1 li a {\r
  text-decoration: none;\r
  color: #454545;\r
  font-weight: 300;\r
  font-size: 12px;\r
  text-transform: uppercase;\r
}\r
\r
.foldFive .tabSection .tab-content1 {\r
  padding: 0px 0;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block {\r
  padding: 30px 37px;\r
  border-radius: 20px;\r
  background: rgb(255, 255, 255);\r
  background: linear-gradient(0deg, rgb(246, 246, 246) 0%, rgb(255, 255, 255) 100%);\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block h4 {\r
  font-size: 14px;\r
  font-weight: 700;\r
  margin: 0 0 0 0px;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block h4 span {\r
  display: block;\r
  font-weight: 300;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block ul {\r
  margin-top: 15px;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block ul li {\r
  font-size: 14px;\r
  padding-left: 30px;\r
  position: relative;\r
  margin-bottom: 5px;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block ul li::before {\r
  content: "";\r
  left: 0;\r
  top: 0;\r
  position: absolute;\r
  background: url(../images/green-tick.svg);\r
  width: 20px;\r
  height: 20px;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block .client {\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.foldFive .tabSection .tab-content1 .testi-block .client .userimage {\r
  width: 50px;\r
  height: 50px;\r
  border-radius: 35px;\r
  background: #000;\r
  margin-right: 15px;\r
}\r
\r
.letstartSec {\r
  background: #014BC9;\r
  border-radius: 50px;\r
}\r
\r
.swiper-wrapper {\r
  padding-bottom: 80px;\r
}\r
\r
.navigationwrap {\r
  position: absolute;\r
  bottom: 25px;\r
  width: 100px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  z-index: 99;\r
  background: #fff;\r
  border-radius: 15px;\r
}\r
\r
.navigationwrap .swiper-button-next,\r
.navigationwrap .swiper-button-prev {\r
  width: 35px;\r
  height: 35px;\r
  border-radius: 25px;\r
  background: #fff;\r
  border: 1px solid #acacac;\r
}\r
\r
.navigationwrap .swiper-button-next:after,\r
.navigationwrap .swiper-button-prev:after {\r
  font-size: 10px;\r
  color: #525252;\r
  font-weight: 700;\r
}\r
\r
.blueStrip {\r
  background: #014BC9;\r
  padding: 10px 10px 10px 55px;\r
  border-radius: 45px;\r
  margin-top: 0px;\r
  max-width: 100%;\r
  width: 600px;\r
  margin: 0 auto 50px;\r
  align-items: center;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
@media (max-width: 767px) {\r
  .blueStrip {\r
    display: block;\r
    text-align: center;\r
    border-radius: 0;\r
    padding: 20px;\r
  }\r
}\r
\r
.blueStrip h3 {\r
  color: #fff;\r
  font-size: 20px;\r
}\r
\r
@media (max-width: 767px) {\r
  .blueStrip h3 {\r
    margin-bottom: 15px;\r
    display: block;\r
  }\r
}\r
\r
.blueStrip .btn-primary {\r
  border-radius: 35px;\r
  background: #013AC0;\r
}\r
\r
.blueStrip .btn-primary:hover {\r
  background: var(--gradient);\r
}\r
\r
.blogSection {\r
  margin: 0 0 100px;\r
  padding: 0;\r
}\r
\r
@media (max-width: 767px) {\r
  .blogSection {\r
    margin-bottom: 50px;\r
  }\r
}\r
\r
.blogSection .title {\r
  text-align: center;\r
  font-size: 18px;\r
  text-transform: uppercase;\r
  font-weight: 400;\r
  letter-spacing: 5px;\r
}\r
\r
.blogSection .gradient-blue {\r
  background: rgb(236, 250, 255);\r
  background: linear-gradient(180deg, rgb(236, 250, 255) 0%, rgb(207, 222, 253) 100%);\r
}\r
\r
.blogSection .blogstyleOne {\r
  border: 1px solid #B9D4E4;\r
  border-radius: 15px;\r
  padding: 30px;\r
}\r
\r
@media (max-width: 767px) {\r
  .blogSection .blogstyleOne {\r
    margin-bottom: 25px;\r
  }\r
}\r
\r
.blogSection .blogstyleOne .logo-icon {\r
  background: #013AC0;\r
  padding: 10px 20px;\r
  border-radius: 10px;\r
  width: fit-content;\r
}\r
\r
.blogSection .blogstyleOne .logo-icon img {\r
  height: 15px;\r
  object-fit: contain;\r
}\r
\r
.blogSection .blogstyleOne span {\r
  color: #0138BF;\r
  font-size: 14px;\r
  font-weight: 500;\r
  display: block;\r
}\r
\r
.blogSection .blogstyleOne h3 {\r
  font-size: 16px;\r
  color: #2D2D2D;\r
  font-weight: 700;\r
  line-height: 24px;\r
}\r
\r
.blogSection .blogstyleOne p {\r
  font-size: 14px;\r
  margin: 10px 0;\r
}\r
\r
.blogSection .blogstyleOne .blogimg {\r
  height: 140px;\r
  object-fit: cover;\r
  border-radius: 15px;\r
  width: 100%;\r
  margin-top: 25px;\r
}\r
\r
.blogSection .blogstyleTwo {\r
  border-radius: 15px;\r
  padding: 0px;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.blogSection .blogstyleTwo img {\r
  height: 360px;\r
  width: 100%;\r
  object-fit: cover;\r
}\r
\r
.blogSection .blogstyleTwo .whiteblock {\r
  background: #fff;\r
  position: absolute;\r
  padding: 20px;\r
  bottom: 20px;\r
  left: 50%;\r
  width: 90%;\r
  border-radius: 10px;\r
  transform: translate(-50%);\r
}\r
\r
.blogSection .blogstyleTwo .whiteblock span {\r
  color: #0138BF;\r
  font-size: 14px;\r
  font-weight: 500;\r
  display: block;\r
  margin-bottom: 20px;\r
}\r
\r
.blogSection .blogstyleTwo .whiteblock h3 {\r
  font-size: 16px;\r
  color: #2D2D2D;\r
  font-weight: 700;\r
  line-height: 24px;\r
}\r
\r
.footer {\r
  background: #242424;\r
  padding: 70px 0 25px;\r
}\r
\r
.footerlogos {\r
  text-align: center;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 15px;\r
}\r
\r
.footerlogos img {\r
  height: 40px;\r
  object-fit: contain;\r
}\r
\r
@media (max-width: 767px) {\r
  .footer .footerlink {\r
    display: none;\r
  }\r
\r
  .footerlogos {\r
    text-align: center;\r
    align-items: center;\r
    justify-content: center !important;\r
    gap: 5px;\r
    margin-top: 15px;\r
  }\r
}\r
\r
.footer h3 {\r
  color: #fff;\r
  font-weight: 200;\r
  font-size: 24px;\r
  line-height: 32px;\r
}\r
\r
.footer .btn-primary {\r
  background: #0138BF;\r
}\r
\r
.footer .title {\r
  color: #fff;\r
  font-weight: 600;\r
  margin-top: 18px;\r
}\r
\r
.footer p {\r
  color: #fff;\r
  font-size: 14px;\r
}\r
\r
.footer ul {\r
  margin-top: 25px;\r
}\r
\r
.footer ul li {\r
  margin-bottom: 10px;\r
}\r
\r
.footer ul li a {\r
  color: #fff;\r
  font-size: 14px;\r
}\r
\r
.footer ul li a:hover {\r
  text-decoration: underline;\r
}\r
\r
.footer .copyright {\r
  border-top: 1px solid #000000;\r
  padding-top: 25px;\r
}\r
\r
.innerbanner {\r
  padding-top: 165px;\r
  position: relative;\r
  height: 100%;\r
  padding-bottom: 50px;\r
  margin-bottom: 100px;\r
}\r
\r
@media (max-width: 767px) {\r
  .innerbanner {\r
    padding-top: 130px;\r
    padding-bottom: 30px;\r
    margin-bottom: 50px;\r
  }\r
\r
  .innerbanner span {\r
    display: block;\r
    width: 100%;\r
  }\r
\r
  .footer .copyright {\r
    text-align: center;\r
  }\r
}\r
\r
.innerbanner::before {\r
  content: "";\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  background: #E8F7FF;\r
  height: 250px;\r
  width: 100%;\r
  display: none;\r
  z-index: -1;\r
}\r
\r
.innerbanner .roundshade {\r
  border-radius: 100%;\r
  z-index: -1;\r
  filter: blur(150px);\r
  position: absolute;\r
  width: 800px;\r
  height: 600px;\r
}\r
\r
.innerbanner .roundshade-1 {\r
  background: #C0D1FF;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner .roundshade-2 {\r
  background: #3312FF;\r
  position: absolute;\r
  right: 150px;\r
  bottom: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner .roundshade-3 {\r
  background: #00A3FF;\r
  position: absolute;\r
  left: 150px;\r
  bottom: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner h1 {\r
  font-size: 50px;\r
  margin-bottom: 0px;\r
}\r
\r
.innerbanner h1 span {\r
  background: linear-gradient(45deg, rgb(1, 153, 244) 0%, rgb(1, 71, 199) 100%);\r
  -webkit-background-clip: text;\r
  -webkit-text-fill-color: transparent;\r
  display: block;\r
}\r
\r
@media (max-width: 767px) {\r
  .innerbanner h1 {\r
    font-size: 26px;\r
  }\r
}\r
\r
.innerbanner .innebannerSection {\r
  max-width: 1170px;\r
  width: 100%;\r
  margin: 50px auto 0px;\r
}\r
\r
.innerbanner .innebannerSection h2 {\r
  line-height: 36px;\r
}\r
\r
@media (max-width: 767px) {\r
  .innerbanner .innebannerSection {\r
    max-width: 1240px;\r
    width: 100%;\r
    margin: 50px auto 0px;\r
    padding: 0 30px;\r
    text-align: center;\r
  }\r
\r
  .innerbanner .innebannerSection h2 {\r
    line-height: normal;\r
    font-size: 18px;\r
  }\r
}\r
\r
.bgTitle {\r
  background: #fff;\r
  border-radius: 35px;\r
  padding: 6px 25px;\r
  color: rgb(72, 72, 72);\r
  box-shadow: 0 10px 10px 0 #e5e5e5;\r
  margin: auto;\r
  display: table;\r
  font-weight: 500;\r
}\r
\r
.accSection {\r
  max-width: 1200px;\r
  width: 100%;\r
  margin: 0 auto 100px;\r
}\r
\r
\r
.tab-content {\r
  width: 100%;\r
\r
  padding: 0px 0 0 0px;\r
  border-radius: 24px;\r
}\r
\r
.tab-content-1 {\r
  width: 100%;\r
  background: #0149C7;\r
  padding: 20px 20px 0 20px;\r
  border-radius: 24px;\r
}\r
\r
.shaped-image {\r
  border-radius: 24px 24px 0 0;\r
}\r
\r
.acc-container {\r
  gap: 20px;\r
}\r
\r
.acc-container .current {\r
  border-color: #5BC7FF;\r
  background: #F4FBFF;\r
}\r
\r
.acc-item {\r
  background: #fff;\r
  border: solid 1px #E1E1E1;\r
  border-radius: 15px;\r
}\r
\r
.acc-head {\r
  color: #565454;\r
  padding: 10px 20px;\r
  font-size: 14px;\r
  font-weight: 600;\r
  gap: 18px;\r
  cursor: pointer;\r
  line-height: 1.3;\r
  transition: padding-block 0.5s ease, font-weight 0.5s ease;\r
}\r
\r
.acc-head.open {\r
  font-weight: 500;\r
  padding-block: 25px 15px;\r
}\r
\r
.acc-content {\r
  padding: 0px 38px 15px 60px;\r
  font-size: 14px;\r
  font-weight: 300;\r
  display: none;\r
}\r
\r
@media (min-width: 1366px) {\r
  .acc-container {\r
    gap: 10px;\r
  }\r
\r
  .acc-head {\r
    padding: 10px 20px;\r
    font-size: 14px;\r
    text-transform: capitalize;\r
  }\r
\r
  .acc-head.open {\r
    padding-block: 20px 20px;\r
    color: var(--color-blue);\r
    font-weight: 600;\r
  }\r
\r
  .acc-content {\r
    padding: 0px 38px 15px 60px;\r
  }\r
}\r
\r
.tab-item {\r
  display: none;\r
}\r
\r
.tab-item.current {\r
  display: block;\r
}\r
\r
.sectorSec .block {\r
  border: 1px solid #5BC7FF;\r
  background: #F4FBFF;\r
  padding: 25px;\r
  border-radius: 15px;\r
  margin-bottom: 15px;\r
}\r
\r
.sectorSec .block h3 {\r
  color: #1D396C;\r
  font-size: 16px;\r
  font-weight: 600;\r
}\r
\r
.sectorSec .block p {\r
  font-size: 14px;\r
  color: #494949;\r
}\r
\r
.sectorSec .knowmore {\r
  border: 1px solid #5BC7FF;\r
  background: var(--gradient);\r
  padding: 25px;\r
  border-radius: 15px;\r
  margin-bottom: 15px;\r
  text-align: center;\r
  height: 90%;\r
  align-items: center;\r
  justify-content: center;\r
  display: flex;\r
  transition: all 0.5s;\r
}\r
\r
.sectorSec .knowmore a {\r
  color: #fff;\r
}\r
\r
.sectorSec .knowmore a i {\r
  transition: all 0.5s;\r
}\r
\r
.sectorSec .knowmore a:hover i {\r
  margin-left: 10px;\r
  transition: all 0.5s;\r
}\r
\r
.no-bg::before {\r
  display: none;\r
}\r
\r
.imageblock {\r
  width: 100%;\r
  background: #0149C7;\r
  padding: 30px 0 0 30px;\r
  border-radius: 30px;\r
}\r
\r
.graditentTitle {\r
  background: linear-gradient(45deg, rgb(1, 153, 244) 0%, rgb(1, 71, 199) 100%);\r
  -webkit-background-clip: text;\r
  -webkit-text-fill-color: transparent;\r
  display: block;\r
  font-weight: 600;\r
  line-height: 38px;\r
}\r
\r
@media (max-width: 767px) {\r
  .graditentTitle {\r
    line-height: 28px;\r
    font-size: 22px;\r
  }\r
}\r
\r
.innerbanner .fullshade {\r
  /* border-radius: 100%; */\r
  z-index: -1;\r
  filter: blur(150px);\r
  position: absolute;\r
  width: 800px;\r
  height: 600px;\r
}\r
\r
\r
\r
.innerbanner .fullshade-1 {\r
  background: #C0D1FF;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner .fullshade-2 {\r
  background: #3312FF;\r
  position: absolute;\r
  right: 150px;\r
  bottom: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner .fullshade-3 {\r
  background: #00A3FF;\r
  position: absolute;\r
  left: 150px;\r
  bottom: 0;\r
  opacity: 0.2;\r
}\r
\r
.innerbanner h2 {\r
  /*\r
  font-size: 20px;\r
  letter-spacing: 3px;\r
  */\r
  margin-bottom: 0px;\r
\r
}\r
\r
.innerbanner h2 span {\r
  color: var(--color-black);\r
  -webkit-background-clip: text;\r
  display: block;\r
}\r
\r
.innerbanner_img {\r
  height: 480px;\r
  width: 100%;\r
  object-fit: cover;\r
  transform: scaleX(-1);\r
  transform-origin: center;\r
  border-radius: 10px;\r
}\r
\r
.bottom-left-div {\r
  position: absolute;\r
  bottom: 35px;\r
  left: 50px;\r
  background-color: #0C4D9E;\r
  color: white;\r
  padding: 10px;\r
  width: 330px;\r
  padding: 25px;\r
  border-radius: 10px;\r
}\r
\r
.bottom-left-div h1 {\r
  font-size: 20px;\r
  font-weight: 700;\r
  line-height: 26px;\r
  color: #fff;\r
  margin-bottom: 1rem;\r
}\r
\r
.bottom-left-div p {\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: #fff;\r
}\r
\r
.bottom-left-div button {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #4F4F4F;\r
  align-self: flex-end;\r
  border-radius: 10px;\r
  padding: 10px;\r
  border: none;\r
}\r
\r
.blog-container h1 {\r
  font-size: 18px;\r
  font-weight: 500;\r
  color: var(--color-black);\r
  margin-bottom: 1rem;\r
}\r
\r
.blog-container .article-box {\r
  border: 1px solid #B9D4E4;\r
  border-radius: 10px;\r
  padding: 25px 15px;\r
  margin: 20px 0px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
}\r
\r
.blog-container .article-box h1 {\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: #0138BF;\r
\r
}\r
\r
.blog-container .article-box h2 {\r
  font-size: 20px;\r
  font-weight: 700;\r
  color: var(--color-black);\r
  margin-bottom: 1rem;\r
}\r
\r
.blog-container .article-box p {\r
  font-size: 14px;\r
  font-weight: 400;\r
  color: var(--color-black);\r
}\r
\r
.blog-container .article-box button {\r
  align-self: flex-start;\r
  background: linear-gradient(85.52deg, #0195F2 -1.49%, #013DC1 107.63%);\r
  padding: 10px 15px;\r
  border-radius: 10px;\r
  border: none;\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: var(--color-white);\r
  margin-top: 1.5rem;\r
}\r
\r
.pagination {\r
  display: inline-block;\r
  margin: 2rem 0px;\r
}\r
\r
.pagination a {\r
  color: black;\r
  float: left;\r
  padding: 8px 16px;\r
  text-decoration: none;\r
}\r
\r
.pagination a.active {\r
  background-color: #0147C6;\r
  color: white;\r
  border-radius: 50%;\r
}\r
\r
.pagination a:hover:not(.active) {\r
  background-color: #ddd;\r
  border-radius: 50%;\r
}\r
\r
.innerbanner button {\r
    background: var(--gradient);\r
    color: var(--color-white);\r
    padding: 12px 25px;\r
    white-space: nowrap;\r
    display: inline-flex;\r
    align-items: center;\r
    justify-content: center;\r
    font-weight: 500;\r
    border: 0;\r
    font-size: 14px;\r
    border-radius: 8px;\r
  }\r
\r
.innerbanner .banner-heading {\r
  font-size: 36px;\r
  font-weight: 400;\r
  color: var(--color-black);\r
  width: 800px;\r
}\r
\r
.innerbanner .arrow-text {\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: #0148C7;\r
  margin: 0;\r
\r
}\r
\r
.blog-open {\r
  margin-bottom: 5rem;\r
}\r
\r
.blog-open h1 {\r
  font-size: 20px;\r
  font-weight: 500;\r
  color: var(--color-black);\r
  margin: 3rem 0;\r
}\r
\r
.blog-open h2 {\r
  font-size: 16px;\r
  font-weight: 500;\r
  color: var(--color-black);\r
  margin-bottom: 1.5rem;\r
}\r
\r
.blog-open p {\r
  font-size: 16px;\r
  font-weight: 300;\r
  color: var(--color-black);\r
  margin-bottom: 1.5rem;\r
}\r
\r
.innerbanner .innebannerSection .product-box {\r
\r
  position: absolute;\r
  top: -48px;\r
  left: -72px;\r
\r
}\r
\r
.innerbanner .innebannerSection .client-box {\r
  background: linear-gradient(85.52deg, #0195F2 -1.49%, #013DC1 107.63%);\r
  border-radius: 10px;\r
  padding: 20px;\r
  position: absolute;\r
  bottom: 202px;\r
  left: -35px;\r
  width: 155px;\r
}\r
\r
.innerbanner .innebannerSection .client-box h1 {\r
  font-size: 28px;\r
  font-weight: 500;\r
  color: var(--color-white);\r
}\r
\r
.innerbanner .innebannerSection .client-box p {\r
  font-size: 13px;\r
  font-weight: 400;\r
  color: var(--color-white);\r
}\r
\r
.innerbanner .innebannerSection .product-box-2 {\r
  position: absolute;\r
  bottom: 177px;\r
  right: -79px;\r
  z-index: 1;\r
}\r
\r
.product-box_img {\r
  height: 100%;\r
  width: 100%;\r
  object-fit: cover;\r
  /* transform: scaleX(-1); */\r
  transform-origin: center;\r
  border-radius: 50%;\r
}\r
\r
.innerbanner .innebannerSection .right-box-content {\r
  margin-left: 150px;\r
}\r
\r
.innerbanner .innebannerSection .right-box-content h2 {\r
  font-size: 60px;\r
  font-weight: 275;\r
  color: var(--color-black);\r
  margin-bottom: 1rem;\r
}\r
\r
.innerbanner .innebannerSection .right-box-content h1 {\r
  font-size: 60px;\r
  font-weight: 700;\r
  margin-bottom: 1rem;\r
  color: linear-gradient(90deg, #0199F4 0%, #0147C7 100%);\r
\r
}\r
\r
.innerbanner .innebannerSection .right-box-content p {\r
  font-size: 16px;\r
  font-weight: 300;\r
  color: var(--color-black);\r
  margin-bottom: 1rem;\r
}\r
\r
.innerbanner .innebannerSection .right-box-content button {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: var(--color-white);\r
  border-radius: 10px;\r
  padding: 10px 15px;\r
  border: none;\r
}\r
\r
.securityPolicy .securityTitle {\r
  font-size: 26px;\r
  font-weight: 600;\r
  color: var(--color-white);\r
  background-color: #0669E3;\r
  padding: 25px 45px;\r
  width: 360px;\r
  border-radius: 20px 20px 0 0;\r
\r
}\r
\r
.underline {\r
  display: inline-block;\r
  position: relative;\r
}\r
\r
.underline::after {\r
  content: '';\r
  display: block;\r
  width: 25%;\r
  height: 2px;\r
  background-color: #FFF;\r
  position: absolute;\r
  bottom: 0;\r
}\r
\r
.securityPolicy .securityPolicy-innerbox {\r
  background-color: #0669E3;\r
  padding: 45px;\r
  border-radius: 0px 20px 20px 20px;\r
}\r
\r
.securityPolicy .securityPolicy-innerbox h5 {\r
  font-size: 18px;\r
  font-weight: 600;\r
  color: var(--color-white);\r
\r
}\r
\r
.securityPolicy .securityPolicy-innerbox span {\r
  font-size: 18px;\r
  font-weight: 400;\r
  color: var(--color-white);\r
\r
}\r
\r
.securityPolicy .securityPolicy-innerbox p {\r
  font-size: 18px;\r
  font-weight: 400;\r
  color: var(--color-white);\r
  margin-top: 1rem;\r
}\r
\r
.securityPolicy .devTitle {\r
  font-size: 26px;\r
  font-weight: 600;\r
  color: var(--color-white);\r
  background-color: #0C4D9E;\r
  padding: 25px 45px;\r
  width: 360px;\r
  border-radius: 20px 20px 0 0;\r
}\r
\r
.securityPolicy .devpolicy-innerbox {\r
  background-color: #0C4D9E;\r
  ;\r
  padding: 45px;\r
  border-radius: 0px 20px 20px 20px;\r
  margin-bottom: 1rem;\r
}\r
\r
.securityPolicy .devpolicy-innerbox p {\r
  font-size: 18px;\r
  font-weight: 400;\r
  color: var(--color-white);\r
  margin-bottom: 1rem;\r
}\r
\r
\r
\r
.byteriver_Title {\r
  font-size: 18px;\r
  font-weight: 400;\r
  color: var(--color-dark-blue);\r
  letter-spacing: 3px;\r
}\r
\r
.byteriver_SubTitle {\r
  font-size: 40px;\r
  font-weight: 300;\r
  color: var(--color-black);\r
  margin-top: 1rem;\r
}\r
\r
.securityPolicy .gdpr-innerbox {\r
  background-color: #0C4D9E;\r
  ;\r
  /* padding: 45px; */\r
  border-radius: 0px 20px 20px 20px;\r
  margin-bottom: 1rem;\r
}\r
\r
.securityPolicy .gdpr-innerbox p {\r
  font-size: 18px;\r
  font-weight: 400;\r
  padding: 6px 45px;\r
  color: var(--color-white);\r
  margin-bottom: 1rem;\r
\r
}\r
\r
.securityPolicy .gdpr-innerbox img {\r
  object-fit: cover;\r
  border-radius: 0 0 20px 20px;\r
}\r
\r
.innebannerSection .bottom-right-div {\r
  position: absolute;\r
  top: -140px;\r
  background: #1D396C;\r
  color: white;\r
  padding: 70px 150px 70px 70px;\r
  border-radius: 0 230px 0 0;\r
}\r
\r
.innebannerSection .bottom-right-div h2 {\r
  font-size: 36px;\r
  font-weight: 300;\r
  color: var(--color-white);\r
  width: 300px;\r
}\r
\r
.innebannerSection .bottom-right-div span {\r
  font-size: 36px !important;\r
  font-weight: 600 !important;\r
  color: #fff !important;\r
}\r
\r
.innebannerSection .bottom-right-div p {\r
  font-size: 14px;\r
  font-weight: 300;\r
  color: #fff;\r
  margin: 2rem 0;\r
}\r
\r
.innebannerSection .bottom-right-div select {\r
  background: linear-gradient(85.52deg, #0195F2 -1.49%, #013DC1 107.63%);\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #fff;\r
  /* margin: 1.5rem 0; */\r
  border: none;\r
  padding: 10px 15px;\r
  border-radius: 10px;\r
}\r
\r
.dashboard-banner-img {\r
  border-radius: 0px 0 0 0;\r
}\r
\r
.twinboxSection {\r
  max-width: 1000px;\r
  width: 100%;\r
  margin: 0 auto 100px;\r
}\r
\r
.twinboxSection p {\r
  font-size: 16px;\r
  font-weight: 300;\r
  color: var(--color-black);\r
  margin-bottom: 1.5rem;\r
}\r
\r
.twinboxSection button {\r
  font-size: 16px;\r
  font-weight: 600;\r
  color: #fff;\r
  background: linear-gradient(85.52deg, #0195F2 -1.49%, #013DC1 107.63%);\r
  padding: 10px 15px;\r
  border: none;\r
  border-radius: 10px;\r
}\r
\r
@media only screen and (max-width: 600px) {\r
\r
  .twinboxSection {\r
    text-align: center;\r
  }\r
\r
  .twinboxSection button {\r
    margin-bottom: 20px\r
  }\r
\r
\r
  .innerbanner .innebannerSection .product-box {\r
    width: 200px;\r
    top: -25px;\r
    left: 30px;\r
  }\r
\r
  .innerbanner .innebannerSection .product-box-2 {\r
    width: 200px;\r
    bottom: 98px;\r
    right: 5px;\r
  }\r
\r
  .innerbanner .innebannerSection .client-box {\r
    bottom: 100px;\r
    left: 2px;\r
\r
  }\r
\r
  .innerbanner .innebannerSection .right-box-content {\r
    margin-left: 40px;\r
    margin-top: 70px;\r
  }\r
\r
  .innebannerSection .bottom-right-div {\r
    position: relative !important;\r
    top: 0;\r
    border-radius: 20px;\r
    padding: 25px;\r
    margin-bottom: 25px;\r
  }\r
\r
\r
  .dashboard-banner-img {\r
    border-radius: 0;\r
  }\r
\r
  .securityPolicy .securityTitle {\r
\r
    width: 100% !important;\r
    font-size: 24px;\r
\r
  }\r
\r
  .securityPolicy .securityPolicy-innerbox {\r
    border-radius: 0px 0px 20px 20px;\r
  }\r
\r
  .securityPolicy .devTitle {\r
    width: 100% !important;\r
    font-size: 24px;\r
  }\r
\r
  .securityPolicy .devpolicy-innerbox {\r
    border-radius: 0px 0px 20px 20px;\r
  }\r
\r
  .securityPolicy .gdpr-innerbox {\r
    border-radius: 0px 0px 20px 20px;\r
  }\r
\r
  .securityPolicy .securityPolicy-innerbox h5 {\r
    font-size: 16px;\r
  }\r
\r
  .securityPolicy .securityPolicy-innerbox p {\r
    font-size: 16px;\r
  }\r
\r
  .securityPolicy .devpolicy-innerbox p {\r
    font-size: 16px;\r
  }\r
\r
  .byteriver_SubTitle {\r
    font-size: 35px;\r
  }\r
\r
  .securityPolicy .gdpr-innerbox p {\r
    font-size: 16px;\r
  }\r
}\r
\r
.reviews i {\r
  color: orange;\r
}\r
\r
.chatIcon {\r
  text-align: right;\r
}\r
\r
.blog-detail-ctn h3 {\r
  font-size: 23px;\r
  margin-bottom: 15px;\r
}\r
\r
.blog-detail-ctn strong {\r
  font-weight: 700;\r
}\r
\r
.border {\r
  border: 1px solid #eee;\r
  padding: 40px;\r
  border-radius: 15px;\r
  background: #fff;\r
}\r
\r
.map {\r
  border-radius: 25px;\r
}\r
\r
.formSection input {\r
  width: 100%;\r
  padding: 15px;\r
  margin-bottom: 20px;\r
  border-radius: 10px;\r
  border: 1px solid #cccccc;\r
}\r
\r
.formSection label {\r
  margin-bottom: 8px;\r
}\r
\r
.formSection textarea {\r
  width: 100%;\r
  padding: 15px;\r
  margin-bottom: 10px;\r
  height: 100px;\r
  border-radius: 10px;\r
  border: 1px solid #cccccc;\r
}`,r=`:root {\r
  --site-header-height: 0px;\r
}\r
\r
html {\r
  scroll-behavior: smooth;\r
  scroll-padding-top: 40px;\r
  /* Adjust as needed for desired gap */\r
}\r
\r
.bg-white {\r
  background-color: #fff;\r
}\r
\r
.text-darkblue {\r
  color: #1D396C;\r
}\r
\r
.text-white {\r
  color: #fff;\r
}\r
\r
.font-14 {\r
  font-size: 14px;\r
}\r
\r
.font-16 {\r
  font-size: 16px;\r
}\r
\r
.font-22 {\r
  font-size: 22px;\r
}\r
\r
.font-30 {\r
  font-size: 30px;\r
}\r
\r
.font-36 {\r
  font-size: 36px;\r
}\r
\r
.fw-300 {\r
  font-weight: 300;\r
}\r
\r
.fw-400 {\r
  font-weight: 400;\r
}\r
\r
.fw-600 {\r
  font-weight: 600;\r
}\r
\r
.fw-700 {\r
  font-weight: 700;\r
}\r
\r
.banner-section {\r
  /* min-height: 100vh; */\r
  background-color: #E8F7FF;\r
}\r
\r
.banner-section-frow {\r
  padding-top: 140px;\r
  margin-bottom: 50px;\r
}\r
\r
.banner-section-srow {\r
  margin-bottom: 50px;\r
}\r
\r
.btn-share {\r
  background: linear-gradient(86.35deg, #000000 -4.26%, #646566 110.48%);\r
}\r
\r
.sc-author-updated {\r
  display: flex;\r
  align-items: end;\r
  font-size: 14px;\r
  color: #333;\r
  margin-left: 15px;\r
}\r
\r
.sc-author-name {\r
  white-space: nowrap;\r
  line-height: 1.2;\r
}\r
\r
.sc-author-divider {\r
  display: flex;\r
  width: 35px;\r
  /* length of the line */\r
  height: 1px;\r
  /* thickness of the line */\r
  background-color: black;\r
  margin: 0 10px;\r
  /* space around the line */\r
  margin-bottom: 8px;\r
}\r
\r
.sc-author-date {\r
  white-space: nowrap;\r
  color: black;\r
  font-size: 14px;\r
  font-weight: 400;\r
}\r
\r
/* Make left section sticky */\r
.sticky-sidebar {\r
  position: sticky;\r
  top: 50px;\r
  /* adjust this offset as needed */\r
}\r
\r
/* Basic style for clickable link in left section */\r
.sticky-sidebar a.intro-link {\r
  display: block;\r
  cursor: pointer;\r
  text-decoration: none;\r
  color: #000;\r
  margin-bottom: 20px;\r
  font-size: 14px;\r
}\r
\r
.sticky-sidebar a.intro-link:hover {\r
  text-decoration: underline;\r
}\r
\r
/* Container to hold the truncated paragraph and the blur for the intro paragraph */\r
.paragraph-container {\r
  position: relative;\r
  margin-top: 20px;\r
}\r
\r
.limited-text {\r
  margin: 0;\r
  line-height: 1.6;\r
  font-size: 14px;\r
  max-height: 600px;\r
  /* initial visible height for the intro text */\r
  overflow: hidden;\r
  transition: max-height 0.3s ease;\r
}\r
\r
.show-full-text {\r
  max-height: 1000px;\r
  /* large enough to display full text */\r
}\r
\r
.blur-overlay {\r
  content: "";\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 50px;\r
  /* height of the fade area */\r
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\r
  pointer-events: none;\r
  transition: opacity 0.3s ease;\r
}\r
\r
.no-blur {\r
  opacity: 0;\r
}\r
\r
/* Container with limited height for "Core Challenges" content */\r
.limited-height {\r
  max-height: 850px;\r
  /* initial visible height for the section */\r
  overflow: hidden;\r
  position: relative;\r
  transition: max-height 0.3s ease;\r
}\r
\r
.limited-height.expanded {\r
  max-height: 100%;\r
  /* large enough to display full section */\r
}\r
\r
/* Fade overlay for that section */\r
.fade-overlay {\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 50px;\r
  background: linear-gradient(transparent, #fff);\r
  pointer-events: none;\r
  transition: opacity 0.3s ease;\r
}\r
\r
.fade-overlay.hide-overlay {\r
  opacity: 0;\r
}\r
\r
/* Button styling */\r
.read-more-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  background: linear-gradient(86.35deg,\r
      #000000 -4.26%,\r
      #646566 110.48%);\r
  color: #ffffff;\r
  padding: 6px 12px;\r
  border: none;\r
  cursor: pointer;\r
  border-radius: 4px;\r
  font-size: 14px;\r
  font-weight: 500;\r
  margin-top: 10px;\r
}\r
\r
.read-more-btn i {\r
  margin-left: 8px;\r
  transition: transform 0.3s ease;\r
}\r
\r
.read-more-btn.expanded i {\r
  transform: rotate(180deg);\r
}\r
\r
/* Additional toggles for top 5 solutions */\r
.toggle-item {\r
  background-color: #F6FBFF;\r
  border-radius: 8px;\r
  margin-bottom: 15px;\r
  cursor: pointer;\r
}\r
\r
.toggle-header {\r
  background-color: transparent;\r
}\r
\r
.toggle-header h5 {\r
  font-size: 16px;\r
  margin: 0;\r
}\r
\r
.toggle-body {\r
  transition: all 0.3s ease;\r
}\r
\r
.toggle-body .row {\r
  margin-bottom: 8px;\r
}\r
\r
.toggle-body .row:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.toggle-body .divider {\r
  border-bottom: 1px solid #C7DDE5;\r
}\r
\r
/* Table Custom Styles */\r
.table-custom {\r
  width: 100%;\r
  border-collapse: separate;\r
  border-spacing: 0;\r
  /* border: 1px solid #C9E0EE; */\r
  border-radius: 5px;\r
  overflow: hidden;\r
  margin-bottom: 2rem;\r
  margin-top: 3rem;\r
}\r
\r
.table-custom thead {\r
  position: sticky;\r
  top: 0;\r
  z-index: 1000;\r
  background: #fff;\r
  /* border: 1px solid #1D396C; */\r
}\r
\r
.table-custom th {\r
  position: sticky;\r
  top: 0;\r
  z-index: 1000;\r
  background: #1D396C;\r
  /* border-top: 2px solid #1D396C; */\r
  /* border-bottom: 2px solid #1D396C; */\r
  border-left: 1px solid #ffffff;\r
  padding: 10px 8px !important;\r
  text-align: left;\r
  font-size: 12px;\r
  vertical-align: top;\r
  font-weight: 600;\r
  color: #fff;\r
}\r
\r
.table-custom th:last-child {\r
  border-right: 1px solid #1D396C;\r
}\r
\r
.table-custom th:first-child {\r
  border-left: 1px solid #1D396C !important;\r
}\r
\r
.table-custom td {\r
  /* border-top: 2px solid #C9E0EE; */\r
  border-bottom: 1px solid #C9E0EE;\r
  border-left: 1px solid #C9E0EE;\r
  /* border: 1px solid #C9E0EE; */\r
  padding: 10px 8px !important;\r
  text-align: left;\r
  font-size: 12px;\r
  vertical-align: top;\r
  color: #333;\r
}\r
\r
.table-custom td:last-child {\r
  border-right: 1px solid #C9E0EE;\r
}\r
\r
.table-custom td strong {\r
  color: #1D396C;\r
  font-weight: 600;\r
}\r
\r
.table-custom tr:hover {\r
  background-color: #f8f9fa;\r
}\r
\r
.table-custom td:first-child {\r
  font-weight: 500;\r
  color: #1D396C;\r
}\r
\r
.tc-table-tough {\r
  overflow-x: auto;\r
  -webkit-overflow-scrolling: touch;\r
  /* Smooth scrolling on iOS */\r
}\r
\r
@media (max-width: 767px) {\r
  .tc-table-tough {\r
    width: 100%;\r
  }\r
\r
  .sc-20x-timeline-box {\r
    min-width: 700px;\r
    /* Minimum width to maintain content layout */\r
  }\r
\r
  .sc-20x-label-row {\r
    min-width: 700px;\r
  }\r
}\r
\r
/* Responsive table styles */\r
@media (max-width: 992px) {\r
  .table-custom {\r
    display: block;\r
    overflow-x: auto;\r
    white-space: nowrap;\r
  }\r
\r
  .table-custom thead {\r
    position: sticky;\r
    top: 0;\r
  }\r
\r
  .table-custom th,\r
  .table-custom td {\r
    min-width: 150px;\r
  }\r
\r
  .table-custom td:first-child {\r
    min-width: 200px;\r
  }\r
}\r
\r
.sc-20x-timeline-box {\r
  width: 100%;\r
  border: 1px solid #C9E0EE;\r
  border-radius: 5px;\r
  overflow: hidden;\r
}\r
\r
/* Label row above the first data row */\r
.sc-20x-label-row {\r
  display: flex;\r
  /* match horizontal padding of data rows */\r
}\r
\r
.sc-20x-label-col {\r
  flex: 1;\r
  text-align: center;\r
  border: 1px solid #fff;\r
}\r
\r
/* Data rows */\r
.sc-20x-timeline-row {\r
  display: flex;\r
}\r
\r
/* border between row1 and row2 */\r
.sc-20x-timeline-row+.sc-20x-timeline-row {\r
  border-top: 1px solid #C9E0EE;\r
}\r
\r
/* Columns in data rows */\r
.sc-20x-timeline-col {\r
  flex: 1;\r
  padding: 20px;\r
  position: relative;\r
}\r
\r
/* Time and heading */\r
.sc-20x-time {\r
  font-weight: 700;\r
  margin-bottom: 8px;\r
  font-size: 26px;\r
  color: #1D396C;\r
}\r
\r
.sc-20x-heading {\r
  margin-bottom: 12px;\r
  font-size: 14px;\r
  font-weight: 400;\r
  color: #1D396C;\r
}\r
\r
/* Body text */\r
.sc-20x-text {\r
  line-height: 1.5;\r
  font-size: 12px;\r
  font-weight: 300;\r
}\r
\r
/* Labels styling */\r
.sc-20x-before-label,\r
.sc-20x-with-label {\r
  display: inline-block;\r
  padding: 10px 15px;\r
  color: #fff;\r
  font-size: 18px;\r
  font-weight: bold;\r
  border-radius: 12px 12px 0 0;\r
  text-align: start;\r
}\r
\r
.sc-20x-before-label {\r
  background-color: #F37025;\r
}\r
\r
.sc-20x-with-label {\r
  background-color: #24B25D;\r
}\r
\r
/* Container for the two boxes */\r
.tc-section {\r
  display: flex;\r
  gap: 20px;\r
  /* space between left and right box */\r
  width: 100%;\r
  box-sizing: border-box;\r
}\r
\r
/* Shared box styles */\r
.tc-box {\r
  flex: 1;\r
  background-color: #1D396C;\r
  border-radius: 5px;\r
  padding: 28px;\r
  color: #ffffff;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  box-sizing: border-box;\r
}\r
\r
/* Icon at top of each box */\r
.tc-box-icon {\r
  width: 40px;\r
  height: 40px;\r
  margin-bottom: 16px;\r
  flex-shrink: 0;\r
}\r
\r
/* Heading inside each box */\r
.tc-box-heading {\r
  font-size: 20px;\r
  font-weight: 500;\r
  margin-bottom: 12px;\r
  line-height: 1.3;\r
  color: #fff;\r
}\r
\r
/* Paragraph text */\r
.tc-box-text {\r
  font-size: 16px;\r
  font-weight: 300;\r
  line-height: 1.5;\r
  margin-bottom: 24px;\r
}\r
\r
/* Button shared styles */\r
.tc-box-button {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  background-color: #fff;\r
  border: none;\r
  border-radius: 10px;\r
  color: black;\r
  font-size: 16px;\r
  font-weight: 400;\r
  padding: 10px 20px;\r
  cursor: pointer;\r
  text-decoration: none;\r
  margin-top: auto;\r
  /* push button to bottom if box grows */\r
}\r
\r
.tc-box-button img {\r
  width: 20px;\r
  height: 20px;\r
  margin-left: 8px;\r
  flex-shrink: 0;\r
}\r
\r
.sc-demo-section {\r
  width: 100%;\r
  background-color: #EDF3FF;\r
  border-radius: 5px;\r
  padding: 60px 80px;\r
  box-sizing: border-box;\r
  text-align: center;\r
  margin-top: 80px;\r
}\r
\r
.sc-demo-heading {\r
  font-size: 30px;\r
  font-weight: 300;\r
  margin-bottom: 30px;\r
  line-height: 1.2;\r
  color: black;\r
}\r
\r
.sc-demo-text {\r
  font-size: 16px;\r
  color: black;\r
  font-weight: 300;\r
  margin: 0 auto 30px;\r
  line-height: 1.5;\r
}\r
\r
.sc-demo-button {\r
  background-color: #1D396C;\r
  color: #FFFFFF;\r
  border: none;\r
  border-radius: 10px;\r
  padding: 15px 30px;\r
  font-size: 16px;\r
  font-weight: 400;\r
  cursor: pointer;\r
  text-decoration: none;\r
}\r
\r
.sc-demo-button:hover {\r
  background-color: #162B4E;\r
}\r
\r
.rounded-circle-div {\r
  width: 50px;\r
  height: 50px;\r
  background-color: #fff;\r
}\r
\r
.intro-intro {\r
  border: 1px solid #C7DCEA;\r
  border-radius: 10px;\r
  padding: 15px;\r
}\r
\r
.intro-main-container {\r
  background-color: #F3FAFF;\r
  border-radius: 10px;\r
  padding: 10px;\r
  margin-bottom: 15px;\r
}\r
\r
.business-consult-contain {\r
  padding: 18px 18px 24px 18px;\r
  margin-top: 20px;\r
  border-radius: 10px;\r
  background-color: #1D396C;\r
}\r
\r
.req-demo {\r
  background: linear-gradient(86.35deg,\r
      #0784DB -4.26%,\r
      #0096FF 110.48%);\r
  color: #fff;\r
  font-size: 16px;\r
  font-weight: 500;\r
}\r
\r
/* Container for the two boxes */\r
.tc-section {\r
  display: flex;\r
  gap: 20px;\r
  /* space between left and right box */\r
  width: 100%;\r
  box-sizing: border-box;\r
}\r
\r
/* Shared box styles */\r
.tc-box {\r
  flex: 1;\r
  background-color: #1D396C;\r
  border-radius: 5px;\r
  padding: 28px;\r
  color: #ffffff;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  box-sizing: border-box;\r
}\r
\r
/* Icon at top of each box */\r
.tc-box-icon {\r
  width: 40px;\r
  height: 40px;\r
  margin-bottom: 16px;\r
  flex-shrink: 0;\r
}\r
\r
/* Heading inside each box */\r
.tc-box-heading {\r
  font-size: 20px;\r
  font-weight: 500;\r
  margin-bottom: 12px;\r
  line-height: 1.3;\r
  color: #fff;\r
}\r
\r
/* Paragraph text */\r
.tc-box-text {\r
  font-size: 16px;\r
  font-weight: 300;\r
  line-height: 1.5;\r
  margin-bottom: 24px;\r
}\r
\r
/* Button shared styles */\r
.tc-box-button {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space\r
}\r
\r
.font-600 {\r
  font-weight: 600;\r
}\r
\r
\r
\r
\r
/* Responsive improvements */\r
@media (max-width: 991px) {\r
  .sticky-sidebar {\r
    position: relative !important;\r
    top: 0 !important;\r
  }\r
  .introduction-container {\r
    margin-bottom: 30px;\r
    padding-right: 0 !important;\r
  }\r
  .right-side-content {\r
    padding-left: 0 !important;\r
  }\r
  .pe-lg-5 {\r
    padding-right: 0 !important;\r
  }\r
  .ps-lg-5 {\r
    padding-left: 0 !important;\r
  }\r
}\r
\r
@media (max-width: 800px) {\r
  .logo-author {\r
    margin-bottom: 30px;\r
  }\r
\r
  .introduction-container {\r
    padding-right: 10px !important;\r
  }\r
\r
  .image-padding-intro {\r
    padding: 0px !important;\r
    padding-top: 10px;\r
  }\r
\r
  .right-side-content {\r
    padding-left: 20px !important;\r
    margin-top: 20px !important;\r
  }\r
\r
  .tc-table-tough {\r
    overflow-x: scroll;\r
  }\r
\r
  .tc-section {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 20px;\r
    /* space between left and right box */\r
    width: 100%;\r
    box-sizing: border-box;\r
  }\r
\r
  .sc-demo-section {\r
    width: 100%;\r
    background-color: #EDF3FF;\r
    border-radius: 5px;\r
    padding: 60px 20px;\r
    box-sizing: border-box;\r
    text-align: center;\r
    margin-top: 100px;\r
  }\r
\r
  .sc-20x-with-label {\r
    height: 100%;\r
  }\r
  .img-fluid{\r
    width: 100% !important;\r
    max-width: 100% !important;\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
  .font-36 {\r
    font-size: 24px !important;\r
  }\r
  .font-30 {\r
    font-size: 20px !important;\r
  }\r
  .font-22 {\r
    font-size: 18px !important;\r
  }\r
  .font-18 {\r
    font-size: 16px !important;\r
  }\r
  .font-16 {\r
    font-size: 14px !important;\r
  }\r
  .font-14 {\r
    font-size: 12px !important;\r
  }\r
  .banner-section-frow {\r
    padding-top: 100px !important;\r
    margin-bottom: 30px !important;\r
  }\r
  .banner-section-srow {\r
    margin-bottom: 30px !important;\r
  }\r
  .sc-author-updated {\r
    flex-direction: column;\r
    align-items: flex-start !important;\r
    margin-left: 10px !important;\r
  }\r
  .sc-author-divider {\r
    display: none !important;\r
  }\r
  .sc-author-date {\r
    margin-top: 5px;\r
  }\r
  .table-custom {\r
    font-size: 11px;\r
    display: block;\r
    overflow-x: auto;\r
    -webkit-overflow-scrolling: touch;\r
  }\r
  .table-custom th,\r
  .table-custom td {\r
    padding: 6px 4px !important;\r
    white-space: nowrap;\r
  }\r
  .table-custom th:first-child,\r
  .table-custom td:first-child {\r
    position: sticky;\r
    left: 0;\r
    background: #1D396C;\r
    z-index: 10;\r
  }\r
  .table-custom td:first-child {\r
    background: #fff;\r
  }\r
  .sc-demo-section {\r
    padding: 40px 20px !important;\r
    margin-top: 60px !important;\r
  }\r
  .sc-demo-heading {\r
    font-size: 24px !important;\r
  }\r
  .sc-demo-text {\r
    font-size: 14px !important;\r
  }\r
  .tc-box {\r
    padding: 20px !important;\r
  }\r
  .tc-box-heading {\r
    font-size: 18px !important;\r
  }\r
  .tc-box-text {\r
    font-size: 14px !important;\r
  }\r
}\r
\r
@media (max-width: 576px) {\r
  .container {\r
    padding-left: 15px !important;\r
    padding-right: 15px !important;\r
  }\r
  .btn-share {\r
    min-width: auto !important;\r
    padding: 6px 12px !important;\r
    font-size: 12px !important;\r
  }\r
  .banner-section-frow {\r
    padding-top: 80px !important;\r
  }\r
  .sc-demo-section {\r
    padding: 30px 15px !important;\r
    margin-top: 40px !important;\r
  }\r
  .sc-demo-heading {\r
    font-size: 20px !important;\r
    margin-bottom: 20px !important;\r
  }\r
  .sc-demo-button {\r
    padding: 12px 24px !important;\r
    font-size: 14px !important;\r
  }\r
  .tc-box {\r
    padding: 16px !important;\r
  }\r
  .legend-row {\r
    flex-direction: column;\r
    gap: 10px !important;\r
  }\r
}\r
\r
\r
/* Add new icon styles */\r
.table-icon {\r
  font-size: 1.2rem;\r
  vertical-align: middle;\r
  margin-right: 3px;\r
}\r
\r
.icon-legend {\r
  padding: 15px 0;\r
  margin: 20px 0;\r
\r
}\r
\r
.legend-row {\r
  display: flex;\r
  flex-wrap: wrap;\r
\r
  gap: 20px;\r
}\r
\r
.legend-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  font-size: 14px;\r
  color: #495057;\r
}\r
\r
.legend-item i {\r
  font-size: 16px;\r
}\r
\r
/* Icon color classes */\r
.icon-yes {\r
  color: #28a745;\r
}\r
\r
.icon-no {\r
  color: #dc3545;\r
}\r
\r
.icon-partial {\r
  color: #ffc107;\r
}\r
\r
.icon-limited {\r
  color: #ffc107;\r
}\r
\r
.icon-basic {\r
  color: #17a2b8;\r
}\r
\r
.icon-low {\r
  color: #6c757d;\r
}\r
\r
.icon-medium {\r
  color: #007bff;\r
}\r
\r
.icon-high {\r
  color: #6610f2;\r
}\r
\r
`,t=`/* ================== Desktop Main Menu CSS ================== */\r
.wsmenuexpandermain{\r
  position: relative;\r
}\r
.wsmenu {\r
    width: fit-content;\r
    margin-left: auto;\r
}\r
.wsmenu>.wsmenu-list {\r
    display: flex;\r
    align-items: center;\r
    padding: 10px;\r
    \r
    gap: 12px;\r
}\r
@media(min-width: 992px){\r
  .wsmenu>.wsmenu-list {\r
    border-radius: 30px;\r
}\r
}\r
.wsmenu>.wsmenu-list>li>a {\r
    display: flex;\r
    align-items: center;\r
    color: #444444;\r
    font-size: 14px;\r
    padding: 9px 15px;\r
    line-height: normal;\r
    text-decoration: none;\r
    position: relative;\r
    background: rgba(255, 255, 255, 0.1);\r
    font-weight: 400;\r
\r
}\r
.wsmenu>.wsmenu-list>li>a::after{\r
    content: "";\r
    position: absolute;\r
    inset: 0 0 -40px 0;\r
}\r
\r
.wsmenu>.wsmenu-list>li>a img{\r
    width: 10px;\r
    filter: brightness(0) invert(1);\r
    margin-top: 2px;\r
}\r
\r
.wsmenu>.wsmenu-list>li>a .wsarrow:after {\r
    border-left: 4px solid rgba(0, 0, 0, 0);\r
    border-right: 4px solid rgba(0, 0, 0, 0);\r
    border-top: 4px solid;\r
    content: "";\r
    height: 0;\r
    margin: 4px 0 0 7px;\r
    display: block;\r
}\r
\r
/* ================== Desktop Drop Down Menu CSS ================== */\r
.wsmenu>.wsmenu-list>li>ul.sub-menu {\r
  position: absolute;\r
  top: 70px;\r
  z-index: 1000;\r
  margin: 0px;\r
  padding: 0px;\r
  min-width: 190px;\r
  background-color: #fff;\r
  border: solid 1px #eeeeee;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li {\r
  position: relative;\r
  margin: 0px;\r
  padding: 0px;\r
  display: block;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>a {\r
  background-image: none;\r
  color: #666666;\r
  border-right: 0 none;\r
  text-align: left;\r
  display: block;\r
  line-height: 22px;\r
  padding: 8px 12px;\r
  text-transform: none;\r
  font-size: 13px;\r
  letter-spacing: normal;\r
  border-right: 0px solid;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>a:hover {\r
  text-decoration: none;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>a>i {\r
  margin-right: 9px;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu {\r
  min-width: 220px;\r
  position: absolute;\r
  left: 100%;\r
  top: 0;\r
  margin: 0;\r
  padding: 0;\r
  list-style: none;\r
  background-color: #fff;\r
  border: solid 1px #eeeeee;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li {\r
  position: relative;\r
  margin: 0px;\r
  padding: 0px;\r
  display: block;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a {\r
  background-image: none;\r
  color: #666666;\r
  border-right: 0 none;\r
  text-align: left;\r
  display: block;\r
  line-height: 22px;\r
  padding: 8px 12px;\r
  text-transform: none;\r
  font-size: 13px;\r
  letter-spacing: normal;\r
  border-right: 0px solid;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a:hover {\r
  text-decoration: none;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a>i {\r
  margin-right: 9px;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu {\r
  min-width: 220px;\r
  position: absolute;\r
  left: 100%;\r
  top: 0;\r
  margin: 0px;\r
  list-style: none;\r
  padding: 0px;\r
  background-color: #fff;\r
  border: solid 1px #eeeeee;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li {\r
  position: relative;\r
  margin: 0px;\r
  padding: 0px;\r
  display: block;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a {\r
  background-image: none;\r
  color: #666666;\r
  border-right: 0 none;\r
  text-align: left;\r
  display: block;\r
  line-height: 22px;\r
  padding: 8px 12px;\r
  text-transform: none;\r
  font-size: 13px;\r
  letter-spacing: normal;\r
  border-right: 0px solid;\r
}\r
\r
.wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a:hover {\r
  text-decoration: none;\r
}\r
\r
/* ================== Desktop Mega Menus CSS  ================== */\r
.wsmenu>.wsmenu-list>li>.wsmegamenu {\r
\r
	position: absolute;\r
	top: 90px;\r
	color: #000;\r
	z-index: 1000;\r
	margin: 0;\r
	text-align: left;\r
	font-size: 15px;\r
	background: #fff;\r
  border-radius: 10px;\r
  font-weight: 400;\r
}\r
\r
\r
/*==============================================================================\r
                              Start Mobile CSS\r
===============================================================================*/\r
/* ================== Mobile Menu Change Brake Point ================== */\r
@media only screen and (max-width: 991px) {\r
\r
  .wsmenu {\r
    width: 100%;\r
    background:#1d396c;\r
    left: 0;\r
    overflow-y: hidden;\r
    padding: 0;\r
    top: 0;\r
    visibility: hidden;\r
    position: fixed;\r
    margin: 0px;\r
    height: 100vh;\r
  }\r
\r
  .wsmenu>.wsmenu-list {\r
    height: auto;\r
    min-height: 100%;\r
    padding: 0;\r
    width: 240px;\r
    background: #1d396c;\r
    padding-bottom: 0;\r
    margin-left: -240px;\r
    display: block;\r
    text-align: center;\r
    -webkit-transition: all 0.25s ease-in-out;\r
    -moz-transition: all 0.25s ease-in-out;\r
    -o-transition: all 0.25s ease-in-out;\r
    -ms-transition: all 0.25s ease-in-out;\r
    transition: all 0.25s ease-in-out;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li {\r
    width: 100%;\r
    display: block;\r
    float: none;\r
    border-right: none;\r
    background-color: transparent;\r
    position: relative;\r
    white-space: inherit;\r
    clear: right;\r
  }\r
\r
  @supports (-webkit-overflow-scrolling: touch) {\r
    .wsmenu>.wsmenu-list>li:last-child {\r
      padding-bottom: 110px;\r
    }\r
  }\r
\r
\r
  .wsmenu>.wsmenu-list>li>a {\r
    padding: 15px 33px 15px 15px;\r
    font-size: 18px;\r
    text-align: left;\r
    background-color: transparent;\r
    color: #fff;\r
    line-height: normal;\r
    position: static;\r
    font-weight: 400;\r
    letter-spacing: -.3px;\r
    border-radius: 0;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>a .wsarrow:after,\r
  .wsmenu>.wsmenu-list>li>a img,\r
  .wsmenu>.wsmenu-list>li>a::after {\r
    display: none;\r
  }\r
\r
  /* ================== Mobile Slide Down Links CSS ================== */\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu {\r
    display: none;\r
    position: relative;\r
    top: 0px;\r
    background-color: #fff;\r
    border: none;\r
    padding: 0px;\r
    opacity: 1;\r
    visibility: visible;\r
    -webkit-transform: none;\r
    -moz-transform: none;\r
    -ms-transform: none;\r
    -o-transform: none;\r
    transform: none;\r
    -webkit-transition: inherit;\r
    -moz-transition: inherit;\r
    transition: inherit;\r
    -webkit-transform-style: flat;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>a {\r
    line-height: 20px;\r
    font-size: 13px;\r
    padding: 10px 0px 10px 16px;\r
    color: #383838;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li span+a {\r
    padding-right: 30px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>a>i {\r
    display: none;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>a:hover {\r
    background-color: #e7e7e7;\r
    color: #666666;\r
    text-decoration: underline;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu li:hover>a {\r
    background-color: #e7e7e7;\r
    color: #666666;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu {\r
    width: 100%;\r
    position: static;\r
    left: 100%;\r
    top: 0;\r
    display: none;\r
    margin: 0px;\r
    padding: 0px;\r
    border: solid 0px;\r
    transform: none;\r
    opacity: 1;\r
    visibility: visible;\r
    -webkit-transform: none;\r
    -moz-transform: none;\r
    -ms-transform: none;\r
    -o-transform: none;\r
    transform: none;\r
    -webkit-transition: inherit;\r
    -moz-transition: inherit;\r
    transition: inherit;\r
    -webkit-transform-style: flat;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li {\r
    margin: 0px 0px 0px 0px;\r
    padding: 0px;\r
    position: relative;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a {\r
    line-height: 20px;\r
    font-size: 13px;\r
    padding: 10px 0px 10px 26px;\r
    color: #383838;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li span+a {\r
    padding-right: 30px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a>i {\r
    display: none;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a:hover {\r
    background-color: #e7e7e7;\r
    color: #666666;\r
    text-decoration: underline;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a.active {\r
    color: #000;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li:hover>a {\r
    color: #000;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu {\r
    width: 100%;\r
    position: static;\r
    left: 100%;\r
    top: 0;\r
    display: none;\r
    margin: 0px;\r
    padding: 0px;\r
    border: solid 0px;\r
    transform: none;\r
    opacity: 1;\r
    visibility: visible;\r
    -webkit-transform: none;\r
    -moz-transform: none;\r
    -ms-transform: none;\r
    -o-transform: none;\r
    transform: none;\r
    -webkit-transition: inherit;\r
    -moz-transition: inherit;\r
    transition: inherit;\r
    -webkit-transform-style: flat;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li {\r
    margin: 0px 0px 0px 0px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a {\r
    line-height: 20px;\r
    font-size: 13px;\r
    padding: 10px 0px 10px 34px;\r
    color: #383838;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li span+a {\r
    padding-right: 30px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a>i {\r
    display: none;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a:hover {\r
    background-color: #e7e7e7;\r
    color: #666666;\r
    text-decoration: underline;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a.active {\r
    color: #000;\r
  }\r
\r
  /* ================== Mobile Mega Menus CSS  ================== */\r
  .wsmenu>.wsmenu-list>li>.wsmegamenu {\r
    color: #666666;\r
    display: none;\r
    position: relative;\r
    top: 0px;\r
    padding: 0;\r
    /* border: solid 0px; */\r
    transform: none;\r
    opacity: 1 !important;\r
    visibility: visible !important;\r
    -webkit-transform: none;\r
    -moz-transform: none;\r
    -ms-transform: none;\r
    -o-transform: none;\r
    transform: none !important;\r
    -webkit-transition: inherit;\r
    -moz-transition: inherit;\r
    transition: inherit;\r
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.13); */\r
    -webkit-transform-style: flat;\r
    background: #fff;\r
    padding: 5px;\r
  }\r
\r
  /* ================== Mobile Header CSS ================== */\r
\r
  .wsactive .wsanimated-arrow {\r
    padding: 7px 30px 24px 8px;\r
}\r
\r
  .wsmobileheader .smllogo {\r
    display: inline-block;\r
    margin-top: 12px;\r
  }\r
\r
  /* Mobile Toggle Menu icon (X ICON) */\r
  .wsanimated-arrow {\r
    position: absolute;\r
    left: 0;\r
    top: -17px;\r
    z-index: 9999;\r
    -webkit-transition: all 0.4s ease-in-out;\r
    -moz-transition: all 0.4s ease-in-out;\r
    -o-transition: all 0.4s ease-in-out;\r
    -ms-transition: all 0.4s ease-in-out;\r
    transition: all 0.4s ease-in-out;\r
  }\r
\r
  .wsanimated-arrow {\r
    cursor: pointer;\r
    padding: 17px 30px 17px 8px;\r
    margin: 0;\r
    left: auto;\r
    right: 0;\r
  }\r
\r
  .wsanimated-arrow span,\r
  .wsanimated-arrow span:before,\r
  .wsanimated-arrow span:after {\r
    cursor: pointer;\r
    height: 2px;\r
    width: 17px;\r
    background: #000;\r
    position: absolute;\r
    display: block;\r
    content: '';\r
    right: 0;\r
  }\r
\r
  .wsanimated-arrow span:before {\r
    top: -8px;\r
    width: 23px;\r
  }\r
\r
  .wsanimated-arrow span:after {\r
    bottom: -8px;\r
    width: 23px;\r
  }\r
\r
  .wsanimated-arrow span,\r
  .wsanimated-arrow span:before,\r
  .wsanimated-arrow span:after {\r
    transition: all 500ms ease-in-out;\r
  }\r
\r
  .wsactive .wsanimated-arrow span:after {\r
    width: 23px;\r
    background: #fff;\r
  }\r
\r
  .wsactive .wsanimated-arrow span {\r
    background-color: transparent;\r
  }\r
\r
  .wsactive .wsanimated-arrow span:before,\r
  .wsactive .wsanimated-arrow.active span:after {\r
    top: 8px;\r
    background: #fff;\r
  }\r
\r
  .wsactive .wsanimated-arrow span:before {\r
    transform: rotate(45deg);\r
    -moz-transform: rotate(45deg);\r
    -ms-transform: rotate(45deg);\r
    -o-transform: rotate(45deg);\r
    -webkit-transform: rotate(45deg);\r
    bottom: 0px;\r
  }\r
\r
  .wsactive .wsanimated-arrow span:after {\r
    transform: rotate(-45deg);\r
    -moz-transform: rotate(-45deg);\r
    -ms-transform: rotate(-45deg);\r
    -o-transform: rotate(-45deg);\r
    -webkit-transform: rotate(-45deg);\r
  }\r
\r
  /* ================== Mobile Overlay/Drawer CSS ================== */\r
  .overlapblackbg {\r
    right: 0;\r
    width: 100%;\r
    height: 100vh;\r
    min-height: 100%;\r
    position: fixed;\r
    top: 0;\r
    opacity: 0;\r
    visibility: hidden;\r
    z-index: -1;\r
    /* backdrop-filter: blur(12px); */\r
    cursor: pointer;\r
  }\r
\r
  .wsactive .wsmenu .overlapblackbg {\r
    opacity: 1;\r
    visibility: visible;\r
    -webkit-transition: opacity 0.25s ease-in-out;\r
    -moz-transition: opacity 0.25s ease-in-out;\r
    -ms-transition: opacity 0.25s ease-in-out;\r
    -o-transition: opacity 0.25s ease-in-out;\r
  }\r
\r
  .wsactive .wsmenu {\r
    visibility: visible;\r
    z-index: 1000;\r
    top: 0;\r
  }\r
\r
  .wsactive .wsmenu>.wsmenu-list {\r
    -webkit-transition: all 0.25s ease-in-out;\r
    -moz-transition: all 0.25s ease-in-out;\r
    -o-transition: all 0.25s ease-in-out;\r
    -ms-transition: all 0.25s ease-in-out;\r
    transition: all 0.25s ease-in-out;\r
    margin-left: 0;\r
    display: flex;\r
    flex-direction: column;\r
    gap: 0px;\r
    width: 100%;\r
    padding: 30px;\r
  }\r
\r
  /* ================== Mobile Sub Menu Expander Arrows  ================== */\r
  .wsmenu>.wsmenu-list>li>.wsmenu-click {\r
    position: absolute;\r
    inset: 0;\r
    cursor: pointer;\r
    z-index: 1;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li .wsmenu-click.ws-activearrow>i {\r
    transform: rotate(-45deg);\r
    margin-top: 26px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>.wsmenu-click>i {\r
    display: block;\r
    height: 13px;\r
    width: 13px;\r
    float: right;\r
    transform: rotate(-225deg);\r
    margin: 24px 15px 0px 0px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>.wsmenu-click>i:before {\r
    content: "";\r
    width: 100%;\r
    height: 100%;\r
    border-width: 1.5px 1.5px 0 0;\r
    border-style: solid;\r
    border-color: rgba(255, 255, 255, 1);\r
    transition: 0.2s ease;\r
    display: block;\r
    transform-origin: 100% 0;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li .wsmenu-click02 {\r
    height: 41px;\r
    position: absolute;\r
    top: 0;\r
    right: 0;\r
    display: block;\r
    cursor: pointer;\r
    width: 100%;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li .wsmenu-click02>i {\r
    display: block;\r
    height: 8px;\r
    width: 8px;\r
    float: right;\r
    transform: rotate(-225deg);\r
    margin: 14px 18px 0px 0px;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li .wsmenu-click02>i:before {\r
    content: "";\r
    width: 100%;\r
    height: 100%;\r
    border-width: 1.5px 1.5px 0 0;\r
    border-style: solid;\r
    border-color: rgba(0, 0, 0, 0.40);\r
    transition: 0.2s ease;\r
    display: block;\r
    transform-origin: 100% 0;\r
  }\r
\r
  .wsmenu>.wsmenu-list>li>ul.sub-menu>li .wsmenu-click02>i.wsmenu-rotate {\r
    transform: rotate(-45deg);\r
    margin-top: 19px;\r
  }\r
  /*End Media Query*/\r
}\r
\r
.wsmenu > .wsmenu-list > li > ul.sub-menu {\r
	opacity: 0;\r
	visibility: hidden;\r
	-o-transform-origin: 0% 0%;\r
	-ms-transform-origin: 0% 0%;\r
	-moz-transform-origin: 0% 0%;\r
	-webkit-transform-origin: 0% 0%;\r
	-o-transition: -o-transform 0.3s, opacity 0.3s;\r
	-ms-transition: -ms-transform 0.3s, opacity 0.3s;\r
	-moz-transition: -moz-transform 0.3s, opacity 0.3s;\r
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\r
	transform-style: preserve-3d;\r
	-o-transform-style: preserve-3d;\r
	-moz-transform-style: preserve-3d;\r
	-webkit-transform-style: preserve-3d;\r
	transform: rotateX(-75deg);\r
	-o-transform: rotateX(-75deg);\r
	-moz-transform: rotateX(-75deg);\r
	-webkit-transform: rotateX(-75deg);\r
  }\r
  \r
  .wsmenu > .wsmenu-list > li:hover > ul.sub-menu {\r
	opacity: 1;\r
	visibility: visible;\r
	transform: rotateX(0deg);\r
	-o-transform: rotateX(0deg);\r
	-moz-transform: rotateX(0deg);\r
	-webkit-transform: rotateX(0deg);\r
  }\r
  \r
  .wsmenu > .wsmenu-list > li  > ul.sub-menu > li > ul.sub-menu {\r
	opacity: 0;\r
	visibility: hidden;\r
	transform-style: preserve-3d;\r
	-o-transform-style: preserve-3d;\r
	-moz-transform-style: preserve-3d;\r
	-webkit-transform-style: preserve-3d;\r
	transform: rotateX(-75deg);\r
	-o-transform: rotateX(-75deg);\r
	-moz-transform: rotateX(-75deg);\r
	-webkit-transform: rotateX(-75deg);\r
  }\r
  \r
  .wsmenu > .wsmenu-list > li > ul.sub-menu > li:hover > ul.sub-menu {\r
  opacity: 1;\r
  visibility: visible;\r
  -o-transform-origin: 0% 0%;\r
  -ms-transform-origin: 0% 0%;\r
  -moz-transform-origin: 0% 0%;\r
  -webkit-transform-origin: 0% 0%;\r
  -o-transition: -o-transform 0.4s, opacity 0.4s;\r
  -ms-transition: -ms-transform 0.4s, opacity 0.4s;\r
  -moz-transition: -moz-transform 0.4s, opacity 0.4s;\r
  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;\r
  transform: rotateX(0deg);\r
  -o-transform: rotateX(0deg);\r
  -moz-transform: rotateX(0deg);\r
  -webkit-transform: rotateX(0deg);\r
  }\r
  \r
  .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu {\r
	opacity: 0;\r
	visibility: hidden;\r
	-o-transform-origin: 0% 0%;\r
	-ms-transform-origin: 0% 0%;\r
	-moz-transform-origin: 0% 0%;\r
	-webkit-transform-origin: 0% 0%;\r
	-o-transition: -o-transform 0.4s, opacity 0.4s;\r
	-ms-transition: -ms-transform 0.4s, opacity 0.4s;\r
	-moz-transition: -moz-transform 0.4s, opacity 0.4s;\r
	-webkit-transition: -webkit-transform 0.4s, opacity 0.4s;\r
	transform-style: preserve-3d;\r
	-o-transform-style: preserve-3d;\r
	-moz-transform-style: preserve-3d;\r
	-webkit-transform-style: preserve-3d;\r
	transform: rotateX(-75deg);\r
	-o-transform: rotateX(-75deg);\r
	-moz-transform: rotateX(-75deg);\r
	-webkit-transform: rotateX(-75deg);\r
  }\r
  \r
  .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li:hover > ul.sub-menu {\r
	opacity: 1;\r
	visibility: visible;\r
	transform: rotateX(0deg);\r
	-o-transform: rotateX(0deg);\r
	-moz-transform: rotateX(0deg);\r
	-webkit-transform: rotateX(0deg);\r
  }\r
\r
.wsmenu > .wsmenu-list > li > .wsmegamenu {\r
	opacity: 0;\r
	visibility: hidden;\r
	-o-transform-origin: 0% 0%;\r
	-ms-transform-origin: 0% 0%;\r
	-moz-transform-origin: 0% 0%;\r
	-webkit-transform-origin: 0% 0%;\r
	-o-transition: -o-transform 0.3s, opacity 0.3s;\r
	-ms-transition: -ms-transform 0.3s, opacity 0.3s;\r
	-moz-transition: -moz-transform 0.3s, opacity 0.3s;\r
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\r
	transform-style: preserve-3d;\r
	-o-transform-style: preserve-3d;\r
	-moz-transform-style: preserve-3d;\r
	-webkit-transform-style: preserve-3d;\r
	transform: rotateX(-75deg);\r
	-o-transform: rotateX(-75deg);\r
	-moz-transform: rotateX(-75deg);\r
	-webkit-transform: rotateX(-75deg);\r
}\r
  \r
  .wsmenu > .wsmenu-list > li:hover > .wsmegamenu {\r
	opacity: 1;\r
	visibility: visible;\r
	transform: rotateX(0deg);\r
	-o-transform: rotateX(0deg);\r
	-moz-transform: rotateX(0deg);\r
	-webkit-transform: rotateX(0deg);\r
  }\r
\r
\r
  `;export{n as a,r as b,t as c};
