<template>
  <div class="home">
    <div v-if="$store.state.showLogin" class="login">
      <form @submit.prevent="login" action="">
        <h2>Login</h2>
        <div class="field field--email">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field field--password">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password">
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <div class="field field--login">
          <button>Login</button>
        </div>
      </form>
    </div>
    <div v-if="showMap" :class="['hmap', { blur: $store.state.showLogin }]">
      <div class="hmap__map">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 725.1 350.6" style="enable-background:new 0 0 725.1 350.6;" xml:space="preserve">

        <g>
          <defs>
            <rect id="SVGID_1_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_2_">
            <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st0" d="M663.7,316.3c0,0,49,10.1,49-24.5V165.1c0,0-1.4-18.5-31-18.5H475.9c0,0-33.2-4.6-33.2,28.5v103.7
            c0,0,4,26.9-32,26.9H245.1c0,0-17.1-0.8-23.4-15.1c-14-31.9-42-81-42-81s-8.6-27-27.4-27H55.8c0,0-31.3,5.5-30.2-21.9V55.8
            c0,0,1.4-14.4,30.2-14.4h60.4"/>
        </g>
        <g>
          <defs>
            <path id="SVGID_3_" d="M125.7,207.2H9.8L8.6,335.3h177.1c20.2,1.4,13-17.3,13-17.3l-41-90.7c-8.3-19.1-26.9-20.2-31.1-20.2
              C126,207.2,125.7,207.2,125.7,207.2"/>
          </defs>
          <clipPath id="SVGID_4_">
            <use xlink:href="#SVGID_3_"  style="overflow:visible;"/>
          </clipPath>
          <line class="st1" x1="-44.8" y1="-4.8" x2="237.4" y2="277.4"/>
          <line class="st1" x1="-44.8" y1="4.2" x2="237.4" y2="286.4"/>
          <line class="st1" x1="-44.8" y1="13.2" x2="237.4" y2="295.4"/>
          <line class="st1" x1="-44.8" y1="22.2" x2="237.4" y2="304.4"/>
          <line class="st1" x1="-44.8" y1="31.2" x2="237.4" y2="313.4"/>
          <line class="st1" x1="-44.8" y1="40.2" x2="237.4" y2="322.4"/>
          <line class="st1" x1="-44.8" y1="49.2" x2="237.4" y2="331.4"/>
          <line class="st1" x1="-44.8" y1="58.2" x2="237.4" y2="340.4"/>
          <line class="st1" x1="-44.8" y1="67.2" x2="237.4" y2="349.4"/>
          <line class="st1" x1="-44.8" y1="76.2" x2="237.4" y2="358.4"/>
          <line class="st1" x1="-44.8" y1="85.2" x2="237.4" y2="367.4"/>
          <line class="st1" x1="-44.8" y1="94.2" x2="237.4" y2="376.4"/>
          <line class="st1" x1="-44.8" y1="103.2" x2="237.4" y2="385.4"/>
          <line class="st1" x1="-44.8" y1="112.2" x2="237.4" y2="394.4"/>
          <line class="st1" x1="-44.8" y1="121.2" x2="237.4" y2="403.4"/>
          <line class="st1" x1="-44.8" y1="130.2" x2="237.4" y2="412.4"/>
          <line class="st1" x1="-44.8" y1="139.2" x2="237.4" y2="421.4"/>
          <line class="st1" x1="-44.8" y1="148.2" x2="237.4" y2="430.4"/>
          <line class="st1" x1="-44.8" y1="157.2" x2="237.4" y2="439.4"/>
          <line class="st1" x1="-44.8" y1="166.2" x2="237.4" y2="448.4"/>
          <line class="st1" x1="-44.8" y1="175.2" x2="237.4" y2="457.4"/>
          <line class="st1" x1="-44.8" y1="184.2" x2="237.4" y2="466.4"/>
          <line class="st1" x1="-44.8" y1="193.2" x2="237.4" y2="475.4"/>
          <line class="st1" x1="-44.8" y1="202.2" x2="237.4" y2="484.4"/>
          <line class="st1" x1="-44.8" y1="211.2" x2="237.4" y2="493.4"/>
          <line class="st1" x1="-44.8" y1="220.2" x2="237.4" y2="502.4"/>
          <line class="st1" x1="-44.8" y1="229.2" x2="237.4" y2="511.4"/>
          <line class="st1" x1="-44.8" y1="238.2" x2="237.4" y2="520.4"/>
          <line class="st1" x1="-44.8" y1="247.2" x2="237.4" y2="529.4"/>
          <line class="st1" x1="-44.8" y1="256.2" x2="237.4" y2="538.4"/>
          <line class="st1" x1="-44.8" y1="265.2" x2="237.4" y2="547.4"/>
        </g>
        <g>
          <defs>
            <rect id="SVGID_5_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_6_">
            <use xlink:href="#SVGID_5_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st2" d="M669.9,316.1c12.4,1.4,41,1.8,43.1-22.4"/>
          <line class="st3" x1="713.2" y1="284.7" x2="713.2" y2="167.1"/>
          <path class="st4" d="M711.4,158.7c-2.7-5.2-9.4-12.4-26.4-13.1"/>
          <line class="st5" x1="676.2" y1="145.6" x2="479.4" y2="145.6"/>
          <path class="st6" d="M470.1,145.4c-9.2,0.5-25.3,4.4-26.8,25.5"/>
          <line class="st7" x1="443.2" y1="180.2" x2="443.2" y2="274.8"/>
          <path class="st8" d="M443.1,283.8c-1.1,7.6-6.4,19.9-28.9,20.9"/>
          <line class="st9" x1="405.3" y1="304.7" x2="248.6" y2="304.7"/>
          <path class="st10" d="M239.8,303.7c-5-1.3-12.1-4.4-16.3-11.5"/>
          <path class="st11" d="M219.7,284c-12.5-27.1-32.4-62.9-38-72.8"/>
          <path class="st12" d="M178.1,203.2c-3.4-7.3-10.6-19.6-22.3-21.4"/>
          <line class="st13" x1="146.9" y1="181.6" x2="59.4" y2="181.6"/>
          <path class="st14" d="M50.1,182c-8.6,0-23-2.5-24-19.2"/>
          <line class="st15" x1="26.1" y1="153.6" x2="26.1" y2="57.9"/>
          <path class="st16" d="M28.7,49.5c3.1-3.8,9.9-8.4,24.7-9"/>
          <line class="st17" x1="62.4" y1="40.4" x2="113.7" y2="40.4"/>
          <path class="st18" d="M116.8,40.4L116.8,40.4 M56.4,40.4L56.4,40.4 M26.1,54.8L26.1,54.8 M26.1,159.7L26.1,159.7 M56.4,181.6
            L56.4,181.6 M152.9,181.6L152.9,181.6 M180.2,208.6L180.2,208.6 M222.2,289.6L222.2,289.6 M245.6,304.7L245.6,304.7 M411.2,304.7
            L411.2,304.7 M443.2,277.8L443.2,277.8 M443.2,174.1L443.2,174.1 M476.4,145.6L476.4,145.6 M682.2,145.6L682.2,145.6 M713.2,164.1
            L713.2,164.1 M713.2,290.8L713.2,290.8 M664.2,315.3L664.2,315.3"/>
        </g>
        <text transform="matrix(1 0 0 1 207.6713 231.6792)"><tspan x="0" y="0" class="st19 st20 st21 st22">AV</tspan><tspan x="15" y="0" class="st19 st20 st21">AILABLE INCOME</tspan></text>
        <text transform="matrix(1 0 0 1 321.4125 231.6792)" class="st19 st23 st24"> </text>
        <text transform="matrix(1 0 0 1 236.8524 249.6792)" class="st19 st23 st25">{{ mapAvailableIncome }}</text>
        <text transform="matrix(1 0 0 1 44.9369 106.9771)"><tspan x="0" y="0" class="st26 st20 st24 st22">T</tspan><tspan x="4.7" y="0" class="st26 st20 st24">a</tspan><tspan x="10" y="0" class="st26 st20 st24">x</tspan><tspan x="15.1" y="0" class="st26 st20 st24">es Income </tspan></text>
        <text transform="matrix(1 0 0 1 58.9969 117.9771)" class="st26 st20 st24">&amp; FICA</text>
        <text transform="matrix(1 0 0 1 90.6268 117.9771)" class="st26 st23 st24"> </text>
        <text transform="matrix(1 0 0 1 92.557 117.9771)" class="st26 st23 st24"> </text>
        <text transform="matrix(1 0 0 1 50.8168 131.9771)" class="st26 st23 st27">{{ mapTaxes }}</text>
        <text transform="matrix(1 0 0 1 578.2924 308.3589)" class="st19 st20 st21">SPENDING</text>
        <text transform="matrix(1 0 0 1 638.6527 308.3589)" class="st19 st28 st21"> </text>
        <text transform="matrix(1 0 0 1 580.786 326.3589)" class="st19 st23 st25">{{ spending }}</text>
        <text transform="matrix(1 0 0 1 315.2094 326.6695)"><tspan x="0" y="0" class="st26 st20 st24">Mon</tspan><tspan x="20.7" y="0" class="st26 st20 st24">e</tspan><tspan x="25.9" y="0" class="st26 st20 st24">y S</tspan><tspan x="38.5" y="0" class="st26 st20 st24">a</tspan><tspan x="43.6" y="0" class="st26 st20 st24">v</tspan><tspan x="48.7" y="0" class="st26 st20 st24">ed</tspan></text>
        <text transform="matrix(1 0 0 1 374.9545 326.6695)" class="st26 st29 st24"> </text>
        <text transform="matrix(1 0 0 1 317.1869 340.6695)" class="st26 st23 st27">({{ mapMoneySaved }})</text>
        <text transform="matrix(1 0 0 1 635.1317 169.0289)"><tspan x="0" y="0" class="st26 st20 st24">Debt </tspan><tspan x="24.3" y="0" class="st26 st20 st24">P</tspan><tspan x="30.3" y="0" class="st26 st20 st24">aid</tspan></text>
        <text transform="matrix(1 0 0 1 679.0912 169.0289)" class="st26 st20 st24"> </text>
        <text transform="matrix(1 0 0 1 629.2167 183.0289)" class="st26 st23 st27">({{ mapDebtPaid }})</text>
        <g>
          <defs>
            <rect id="SVGID_7_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_8_">
            <use xlink:href="#SVGID_7_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st30" d="M345.4,288.2c2.1,0,3.8-1.5,3.8-3.3c0-1.8-1.7-3.3-3.8-3.3c-2.1,0-3.9,1.5-3.9,3.3
            C341.5,286.7,343.2,288.2,345.4,288.2"/>
          <path class="st31" d="M356,298.1c0,0,1.2,6.3-3.9,8l0.4,5.3l-4-0.4l-1.1-3.2h-4l-1,3.6h-4.4l0.4-4.3l-2.7-4l-3.8-1.1v-3.6l2.9-1.4
            l3.2-3.7l-0.1-3.6l3,1.8C340.9,291.6,352.5,288.7,356,298.1"/>
          <path class="st32" d="M338.9,296.5c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3
            C337.6,297.1,338.2,296.5,338.9,296.5 M345.3,292.6c1.5,0,2.9,0.3,4.1,0.8c0.3,0.1,0.5,0.5,0.4,0.8c-0.1,0.3-0.5,0.5-0.8,0.4
            c0,0,0,0,0,0c-1.1-0.4-2.3-0.7-3.6-0.7c-0.8,0-1.7,0.1-2.4,0.3c-0.3,0.1-0.7-0.1-0.8-0.5c-0.1-0.3,0.1-0.7,0.5-0.8c0,0,0,0,0,0
            C343.5,292.8,344.4,292.6,345.3,292.6 M338.5,290.6l0.4,2.5c0,0.2-0.1,0.5-0.3,0.6c-1.4,1-2.4,2.2-3,3.6c-0.1,0.2-0.2,0.3-0.4,0.4
            l-2.6,0.7v3.2l2.8,0.7c0.2,0,0.3,0.2,0.4,0.3c0.6,1.3,1.6,2.4,2.9,3.3c0.2,0.1,0.3,0.3,0.3,0.5v4.3h3l0.7-2.6
            c0.1-0.3,0.4-0.5,0.7-0.5c0.6,0.1,1.3,0.2,1.9,0.2c0.7,0,1.3-0.1,1.9-0.2c0.3,0,0.6,0.2,0.7,0.5l0.7,2.6h3v-4.3
            c0-0.2,0.1-0.4,0.3-0.5c2.2-1.5,3.6-3.7,3.6-6.1c0-4.3-4.5-8-10.3-8c-1.2,0-2.3,0.2-3.4,0.4c-0.2,0-0.3,0-0.5,0L338.5,290.6z
            M337.7,288.8c0.1,0,0.2,0,0.2,0.1l4,2c1.1-0.3,2.2-0.4,3.4-0.4c5.4,0,9.9,2.9,11.2,7c0.9-0.1,1.6-0.7,1.6-1.9
            c0-0.4,0.3-0.6,0.6-0.7c0,0,0.1,0,0.1,0c0.3,0,0.6,0.3,0.6,0.7c0,1.7-1.2,2.9-2.6,3.1c0,0.3,0.1,0.7,0.1,1c0,2.8-1.5,5.2-3.8,6.9
            v4.7c0,0.4-0.3,0.6-0.6,0.6h-4.2c-0.3,0-0.5-0.2-0.6-0.5l-0.7-2.5c-0.5,0.1-1,0.1-1.5,0.1c-0.5,0-1-0.1-1.5-0.1l-0.7,2.5
            c-0.1,0.3-0.3,0.5-0.6,0.5h-4.2c-0.4,0-0.6-0.3-0.6-0.6v-4.6c-1.2-0.9-2.3-2-2.9-3.3l-3-0.8c-0.3-0.1-0.5-0.3-0.5-0.6v-4.2
            c0-0.3,0.2-0.5,0.5-0.6l2.8-0.7c0.6-1.4,1.7-2.6,3-3.6l-0.5-3.3c-0.1-0.4,0.2-0.7,0.5-0.7C337.6,288.8,337.6,288.8,337.7,288.8z
            M345.3,281.7c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2C348.5,283.2,347.1,281.7,345.3,281.7
            M345.3,280.5c2.5,0,4.5,2,4.5,4.5c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5C340.8,282.5,342.9,280.5,345.3,280.5"/>
          <path class="st33" d="M111.1,49.9c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C123.5,44.3,117.9,49.9,111.1,49.9"/>
        </g>
        <g>
          <defs>
            <path id="SVGID_9_" d="M98.8,37.5c0,6.8,5.5,12.3,12.3,12.3c6.8,0,12.3-5.5,12.3-12.3c0-6.8-5.5-12.3-12.3-12.3
              C104.3,25.2,98.8,30.7,98.8,37.5"/>
          </defs>
          <clipPath id="SVGID_10_">
            <use xlink:href="#SVGID_9_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st34" d="M107.6,49.8c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C119.9,44.2,114.4,49.8,107.6,49.8"/>
        </g>
        <g>
          <defs>
            <rect id="SVGID_11_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_12_">
            <use xlink:href="#SVGID_11_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st35" d="M111.1,49.9c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C123.5,44.3,117.9,49.9,111.1,49.9z"/>
        </g>
        <rect x="248.1" y="181" class="st36" width="34.6" height="28"/>
        <rect x="269" y="189" class="st37" width="14.4" height="11.1"/>
        <rect x="246.7" y="175.6" class="st37" width="37.4" height="6.4"/>
        <g>
          <defs>
            <rect id="SVGID_13_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_14_">
            <use xlink:href="#SVGID_13_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st38" d="M281.5,190.6v10.2h-8.1c-2.8,0-5.1-2.3-5.1-5.1c0-2.8,2.3-5.1,5.1-5.1H281.5z M250,208.9c-1.1,0-2-0.9-2-2
            v-25c0.6,0.3,1.3,0.6,2,0.6h31.5v6.1h-8.1c-3.9,0-7.1,3.2-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1h8.1v6.1H250z M250,176.3h31.5v4.1H250
            c-1.1,0-2-0.9-2-2C248,177.2,248.9,176.3,250,176.3 M283.6,181.4v-6.1c0-0.6-0.5-1-1-1H250c-2.2,0-4.1,1.8-4.1,4.1v28.5
            c0,2.2,1.8,4.1,4.1,4.1h32.6c0.6,0,1-0.5,1-1V181.4z"/>
          <path class="st38" d="M274.4,195.7c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1C274,194.6,274.4,195.1,274.4,195.7
            M270.4,195.7c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1C271.7,192.6,270.4,194,270.4,195.7"/>
          <path class="st38" d="M258.1,189.6v-2.1h-2v2.1c-1.7,0.2-3.1,1.7-3.1,3.5c0,2,1.6,3.6,3.6,3.6h1c0.8,0,1.5,0.7,1.5,1.5
            c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-0.5h-2v0.5c0,1.8,1.3,3.3,3.1,3.5v2.1h2v-2.1c1.7-0.2,3.1-1.7,3.1-3.5
            c0-2-1.6-3.6-3.6-3.6h-1c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h1c0.8,0,1.5,0.7,1.5,1.5v0.5h2v-0.5
            C261.2,191.3,259.9,189.9,258.1,189.6"/>
          <path class="st39" d="M663,243.6c0,0,13.5-8.6,23.3,0l-3.7,18.6l-14.7,1L663,243.6z"/>
          <path class="st40" d="M648.7,266.3c0,0,14.8-8.3,16.9-8.3c2.7,0,1.1,4.2,1.1,4.2l17.1,1c0,0,3.7,3.2-3.7,4.9c0,0,5.1,5.3,0.2,6.5
            c0,0,4.7,5.8-1.4,5.8c0,0,4.9,6.1-2.4,6.1h-19.6l-8.3-1.1V266.3z"/>
        </g>
        <rect x="641.2" y="263.2" class="st37" width="7.3" height="23.3"/>
        <g>
          <defs>
            <rect id="SVGID_15_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_16_">
            <use xlink:href="#SVGID_15_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st41" d="M683.4,267.1c-0.4,0.4-1,0.7-1.6,0.7l-2.7,0.1c-0.5,0-0.8,0.4-0.8,0.9c0,0.5,0.4,0.8,0.9,0.8
            c1.2,0,2.2,0.9,2.2,2.1c0,0,0,0,0,0c0,1.2-0.9,2.2-2.1,2.2c0,0,0,0,0,0h-1c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.9,0.8,0.9
            c1.2,0,2.2,0.9,2.2,2.1c0,1.2-0.9,2.2-2.1,2.2h-1.7c-0.5,0-0.9,0.4-0.9,0.8c0,0.5,0.4,0.9,0.9,0.9h0c1.2,0,2.2,1,2.2,2.2
            c0,1.2-1,2.2-2.2,2.2l-17.9,0.2h-0.2c-2-0.2-3.9-0.8-5.6-1.7c-0.1-0.1-0.3-0.1-0.4-0.1h-3.5v-18h2.2c0.2,0,0.4-0.1,0.5-0.2
            c0.7-0.5,1.5-1,2.3-1.3c3.8-2,7.4-4.2,10.9-6.7l0.7,3.7h-1.9c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9l7.8-0.1l10.1-0.2
            c1.2,0,2.2,0.9,2.3,2.1c0,0,0,0,0,0.1C684,266.1,683.8,266.7,683.4,267.1 M641.4,286.2v-22.1h6.9v1.4c0,0,0,0,0,0.1v19.7
            c0,0,0,0,0,0.1v0.9L641.4,286.2z M683.9,243.8l-3.5,17.9H679l2-12c0-0.2-0.1-0.4-0.3-0.5c-0.8-0.3-1.4-1.1-1.4-1.9
            c0-0.4,0.1-0.7,0.3-1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1-0.1-0.2-0.2-0.3c-1.6-0.8-3.3-1.3-5.1-1.3c-0.2,0-0.4,0.2-0.4,0.4
            c0,0.2,0.2,0.4,0.4,0.4c1.5,0,3,0.3,4.3,1c-0.1,0.3-0.2,0.7-0.2,1c0,1.1,0.6,2.1,1.6,2.6l-1.9,11.9l-6.5,0.1h-2.1l-1.7-12
            c1.4-0.6,2.1-2.1,1.6-3.6c0.7-0.3,1.3-0.5,2-0.7c0.2-0.1,0.4-0.3,0.3-0.5c-0.1-0.2-0.3-0.4-0.5-0.3c-0.9,0.2-1.7,0.6-2.6,1
            c-0.1,0.1-0.2,0.1-0.2,0.2c0,0.1,0,0.2,0,0.3c0.4,0.8,0.2,1.7-0.4,2.4c-0.3,0.3-0.6,0.4-0.9,0.5c-0.2,0.1-0.4,0.3-0.3,0.5l1.7,12.2
            h-1.2L664,244C666.5,243,676.1,239.3,683.9,243.8 M685.7,265.6c0-2-1.6-3.7-3.5-3.8l3.5-18.1c0.1-0.3-0.1-0.7-0.4-0.8
            c-9.8-6.3-22.1-0.2-22.6,0c-0.3,0.2-0.5,0.5-0.5,0.9l2.4,12.8l-0.4,0.3c-3.5,2.5-7.1,4.8-10.9,6.7c-0.8,0.4-1.6,0.8-2.4,1.3H650
            v-1.5c0-0.5-0.4-0.8-0.9-0.8h-8.6c-0.5,0-0.9,0.4-0.9,0.8v23.8c0,0.5,0.4,0.9,0.9,0.9h8.6c0.5,0,0.9-0.4,0.9-0.9v-1h2.4
            c1.9,0.9,3.9,1.6,6,1.8h0.1c0.1,0,0.2,0,0.2,0l17.9-0.2c2.1,0,3.9-1.8,3.8-3.9c0-0.9-0.3-1.7-0.9-2.4c2-0.8,3-3,2.3-5
            c-0.2-0.5-0.5-1-0.8-1.3c0.3-0.2,0.6-0.4,0.9-0.7c0.7-0.7,1.1-1.7,1.1-2.8c0-0.8-0.3-1.6-0.8-2.3c2-0.2,3.4-1.9,3.4-3.9
            L685.7,265.6z"/>
          <path class="st41" d="M670.9,252.3c0,0.7,0.2,1.4,0.7,1.9c0.6,0.6,1.4,1,2.2,1.2c0.4,0.1,0.8,0.3,1.1,0.6c0.2,0.2,0.3,0.5,0.3,0.8
            c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.2-0.6,0.4-0.9,0.3c-0.4,0-0.8-0.1-1-0.4c-0.2-0.2-0.4-0.5-0.4-0.9c0-0.2-0.2-0.4-0.5-0.4h-1.4
            c-0.1,0.8,0.2,1.6,0.8,2.2c0.5,0.4,1,0.7,1.6,0.9c0.2,0,0.4,0.2,0.4,0.5v0.9h1.1v-0.9c0-0.2,0.2-0.4,0.4-0.5
            c0.6-0.1,1.1-0.4,1.5-0.8c0.5-0.5,0.7-1.2,0.7-1.8c0-0.7-0.2-1.4-0.7-1.8c-0.6-0.5-1.4-1-2.2-1.2c-0.4-0.1-0.8-0.4-1.1-0.6
            c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.3,0.1-0.6,0.3-0.9c0.2-0.2,0.5-0.4,0.8-0.3c0.3,0,0.7,0.2,0.8,0.4c0.2,0.2,0.3,0.5,0.3,0.9
            c0,0.2,0.2,0.4,0.5,0.4h1.5c0-0.8-0.2-1.5-0.7-2.1c-0.4-0.4-0.9-0.8-1.5-0.9c-0.2,0-0.4-0.2-0.4-0.5v-1.1h-1v1
            c0,0.2-0.2,0.4-0.4,0.5c-0.6,0.1-1.1,0.4-1.5,0.8C671.1,250.9,670.9,251.6,670.9,252.3"/>
          <path class="st41" d="M675.4,267.9H673c-0.5,0-0.8,0.4-0.8,0.9s0.4,0.9,0.8,0.9h2.4c0.5,0,0.8-0.4,0.8-0.9S675.8,267.9,675.4,267.9
            "/>
          <path class="st41" d="M675.2,274h-0.4c-0.5,0-0.8,0.4-0.8,0.9s0.4,0.9,0.8,0.9h0.4c0.5,0,0.8-0.4,0.8-0.9S675.7,274,675.2,274"/>
        </g>
        <polygon class="st42" points="22.3,104.7 25.5,109 25.1,112.2 21.6,115 19.6,122.5 19.2,126.8 17.6,128 18.4,129.6 31.4,129.6 
          35.8,122.5 34.6,116.6 31,112.2 30.2,108.2 33,104.7 30.6,103.5 30.6,102.7 24.7,102.7 24.7,103.5 "/>
        <rect x="25.3" y="110" class="st43" width="5.2" height="0.5"/>
        <g>
          <defs>
            <rect id="SVGID_17_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_18_">
            <use xlink:href="#SVGID_17_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st44" d="M33.7,125.1c0.5,0,0.9-0.4,0.9-0.8c0-0.5-0.4-0.8-0.9-0.8c-0.5,0-0.9,0.4-0.9,0.8
            C32.8,124.7,33.2,125.1,33.7,125.1"/>
        </g>
        <polygon class="st45" points="25,111.8 21.6,115.7 34.6,116.1 30.4,111.8 "/>
        <g>
          <defs>
            <rect id="SVGID_19_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_20_">
            <use xlink:href="#SVGID_19_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st46" d="M28.2,123.8v-3c0.8,0,1.5,0.6,1.5,1.5C29.7,123.1,29,123.8,28.2,123.8 M25.7,118.3c0-0.8,0.6-1.5,1.5-1.5v3
            C26.3,119.8,25.7,119.1,25.7,118.3 M28.2,119.8v-3c0.8,0,1.5,0.6,1.5,1.5h1c0-1.4-1.1-2.5-2.5-2.5v-1h-1v1c-1.4,0-2.5,1.1-2.5,2.5
            c0,1.4,1.1,2.5,2.5,2.5v3c-0.8,0-1.5-0.6-1.5-1.5h-1c0,1.4,1.1,2.5,2.5,2.5v1h1v-1c1.4,0,2.5-1.1,2.5-2.5
            C30.7,120.9,29.6,119.8,28.2,119.8"/>
          <path class="st46" d="M33.7,123.3c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1C34.7,123.7,34.2,123.3,33.7,123.3 M33.7,126.3
            c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C35.7,125.4,34.8,126.3,33.7,126.3"/>
          <path class="st46" d="M39.2,127.8c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1C40.2,128.2,39.7,127.8,39.2,127.8 M39.2,130.8
            c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C41.2,129.9,40.3,130.8,39.2,130.8"/>
          <path class="st46" d="M23.1,104.9l1.8-0.9l0.8,2l0.9-0.4l-1.2-2.8h4.5l-1.2,2.8l0.9,0.4l0.8-2l1.8,0.9c-1.6,1.4-2.6,2.7-3,3.9H26
            C25.7,107.6,24.7,106.3,23.1,104.9 M29.7,110.8h-4c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5
            C30.2,110.6,30,110.8,29.7,110.8 M32.6,129.2H19c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.4-0.7,0.7-0.7h0.7l0.7-7.5c0.2-2.7,1.5-5.2,3.6-7
            l1.9-1.5h3.6l1.9,1.5c2.1,1.7,3.4,4.2,3.6,7l0.1,1.3c0.4,0.2,0.8,0.6,1.1,1.1l-0.2-2.5c-0.2-3-1.7-5.8-4-7.6l-1.4-1.1
            c0.3-0.3,0.5-0.7,0.5-1.1c0-0.6-0.3-1.1-0.8-1.3c0.4-1.1,1.4-2.3,3.2-3.7l0.6-0.5L31,103l0.4-1.2H24l0.5,1.3l-3.2,1.6l0.6,0.5
            c1.7,1.4,2.8,2.7,3.2,3.7c-0.5,0.2-0.9,0.7-0.9,1.3c0,0.4,0.2,0.8,0.5,1.1l-1.4,1.1c-2.3,1.9-3.7,4.7-4,7.6l-0.6,6.5
            c-0.9,0.1-1.5,0.8-1.5,1.7c0,0.9,0.8,1.7,1.7,1.7h12.9L32.6,129.2z"/>
        </g>
        <rect x="30.1" y="126.3" transform="matrix(0.5731 -0.8195 0.8195 0.5731 -88.4387 83.7695)" class="st47" width="12.2" height="1"/>
        <rect x="19.3" y="229.6" class="st48" width="130" height="87.8"/>
        <text transform="matrix(1 0 0 1 29.8114 254.4498)" class="st19 st20 st49">KEY METRICS</text>
        <text transform="matrix(1 0 0 1 55.2465 273.4498)"><tspan x="0" y="0" class="st50 st20 st21">S</tspan><tspan x="6.4" y="0" class="st50 st20 st21">A</tspan><tspan x="14" y="0" class="st50 st20 st21">VED 14%</tspan></text>
        <text transform="matrix(1 0 0 1 28.5223 292.4459)" class="st50 st20 st21">DEBT REDUCED  20%</text>
        <text transform="matrix(1 0 0 1 55.8822 311.441)" class="st50 st20 st21">SPENT 51%</text>
        <text transform="matrix(1 0 0 1 41.0941 25.7876)" class="st51 st23 st52">{{ year }}</text>
        <text transform="matrix(1 0 0 1 121.1351 72.7476)"><tspan x="0" y="0" class="st19 st20 st21">G</tspan><tspan x="8.7" y="0" class="st19 st20 st21">R</tspan><tspan x="16.2" y="0" class="st19 st20 st21">OSS INCOME</tspan></text>
        <text transform="matrix(1 0 0 1 210.6791 72.7476)" class="st19 st23 st21"> </text>
        <text transform="matrix(1 0 0 1 210.7152 72.7476)" class="st19 st23 st21"> </text>
        <text transform="matrix(1 0 0 1 133.8676 90.7476)" class="st19 st23 st25">{{ mapGrossIncome }}</text>
        <rect x="144.2" y="20.1" class="st37" width="43.6" height="29.3"/>
        <polygon class="st36" points="145.5,31.6 145.5,50.9 189.1,50.9 189.1,31.6 166.6,36.6 "/>
        <g>
          <defs>
            <rect id="SVGID_21_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_22_">
            <use xlink:href="#SVGID_21_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st53" d="M186.3,49.9h-39.5c-0.9,0-1.6-0.7-1.6-1.6V32.8c5.9,2.5,11.8,4.1,17.7,4.5v0.2c0,2,1.6,3.6,3.6,3.6
            s3.6-1.6,3.6-3.6v-0.2c5.9-0.4,11.8-1.9,17.7-4.5v15.5C187.8,49.2,187.1,49.9,186.3,49.9 M168.1,37.4c0,0.9-0.7,1.6-1.6,1.6
            s-1.6-0.7-1.6-1.6H168.1z M146.7,20.8h10.9h17.7h10.9c0.9,0,1.6,0.7,1.6,1.6v8.2c-7.1,3.2-14.2,4.8-21.3,4.8
            c-7.1,0-14.2-1.6-21.3-4.8v-8.2C145.2,21.4,145.9,20.8,146.7,20.8 M158.7,17.6c0-0.9,0.7-1.6,1.6-1.6h12.5c0.9,0,1.6,0.7,1.6,1.6v1
            h-15.6V17.6z M186.3,18.7h-9.9v-1c0-2-1.6-3.6-3.6-3.6h-12.5c-2,0-3.6,1.6-3.6,3.6v1h-9.9c-2,0-3.6,1.6-3.6,3.6v26
            c0,2,1.6,3.6,3.6,3.6h39.5c2,0,3.6-1.6,3.6-3.6v-26C189.9,20.3,188.3,18.7,186.3,18.7"/>
        </g>
        <text transform="matrix(1 0 0 1 454.5521 262.0298)"><tspan x="0" y="0" class="st26 st20 st24">Mon</tspan><tspan x="20.7" y="0" class="st26 st20 st24">e</tspan><tspan x="25.9" y="0" class="st26 st20 st24">y Borrowed</tspan></text>
        <text transform="matrix(1 0 0 1 532.6722 262.0298)" class="st26 st20 st24"> </text>
        <text transform="matrix(1 0 0 1 469.6166 276.0298)" class="st26 st23 st27">{{ mapMoneyBorrowed }}</text>
        <text transform="matrix(1 0 0 1 505.9247 169.9097)"><tspan x="0" y="0" class="st26 st20 st24">S</tspan><tspan x="5.4" y="0" class="st26 st20 st24">a</tspan><tspan x="10.4" y="0" class="st26 st20 st24">vings Used</tspan></text>
        <text transform="matrix(1 0 0 1 564.2445 169.9097)" class="st26 st29 st24"> </text>
        <text transform="matrix(1 0 0 1 511.0868 183.9097)" class="st26 st23 st27">{{ mapSavingsUsed }}</text>
        <polygon class="st45" points="457.9,235.3 461.3,235.2 461.5,245.7 457.1,245.7 "/>
        <polygon class="st42" points="462.5,236 464.7,234.9 467.9,236 471.2,236.3 473.7,236 475.5,237.1 474.1,238.5 469.7,239.9 
          472.5,241 477.3,240.3 482,239.2 484.1,239.6 484.9,240.7 483.1,242.5 474.4,246.1 462.2,244.2 "/>
        <g>
          <defs>
            <rect id="SVGID_23_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_24_">
            <use xlink:href="#SVGID_23_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st54" d="M483.9,240.8l-9.3,4.1c-0.3,0.1-0.8,0.2-1.2,0.1l-11.1-1.9v-6c0.6-0.4,1.3-1,1.7-1.2c1.2-0.6,2.6-0.4,4.2,0.3
            c0.7,0.3,1.5,0.5,2.2,0.5l4-0.1c0.2,0,0.4,0.2,0.4,0.5c0,0.2-0.1,0.4-0.4,0.5l-6.7,1.7l5.6,2.2l10.2-2c0.3,0,0.6,0.1,0.6,0.4
            C484.3,240.4,484.2,240.7,483.9,240.8 M460.9,245h-2.8v-9.7h2.8V245z M483.4,238.4l-9.9,1.9l-1.3-0.6l2.5-0.6
            c0.9-0.2,1.5-1,1.5-1.9c0-1-0.8-1.8-1.7-1.9h-0.1l-4.1,0.1c-0.6,0-1.1-0.1-1.6-0.3c-2-1-3.8-1.1-5.4-0.4c-0.3,0.1-0.7,0.4-1,0.6
            v-1.4h-5.6v12.5h5.6v-1.9l10.9,1.8c0.1,0.1,0.3,0.1,0.6,0.1c0.5,0,1-0.1,1.5-0.2l9.3-4.1c0.9-0.4,1.4-1.5,1-2.4
            C485.3,238.8,484.4,238.2,483.4,238.4"/>
          <path class="st54" d="M478.3,226.3c1.5,0,2.8,1.2,2.8,2.8s-1.2,2.8-2.8,2.8V226.3z M474.1,222.1c0-1.5,1.2-2.8,2.8-2.8v5.6
            C475.4,224.9,474.1,223.6,474.1,222.1 M474.1,229.1h-1.4c0,2.3,1.9,4.2,4.2,4.2v1.4h1.4v-1.4c2.3,0,4.2-1.9,4.2-4.2
            s-1.9-4.2-4.2-4.2v-5.6c1.5,0,2.8,1.2,2.8,2.8h1.4c0-2.3-1.9-4.2-4.2-4.2v-1.4h-1.4v1.4c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2
            v5.6C475.4,231.8,474.1,230.6,474.1,229.1"/>
        </g>
        <polygon class="st45" points="534.2,138 535.3,134.8 536.3,134.8 541.4,133 541.4,136.2 543.9,139.5 547.2,140.2 547.2,146.3 
          545,146.3 543.5,148.1 542.8,151 541.7,153.5 539.2,153.5 536.7,151.7 532.7,152.1 529.2,153.5 526.3,152.8 525.2,150.5 
          525.9,148.5 524.1,145.2 524.7,140.9 526.3,138 528.1,136.2 529.5,135.5 530.2,141.3 532,141.6 533.1,146.3 536.3,140.2 "/>
        <g>
          <defs>
            <rect id="SVGID_25_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_26_">
            <use xlink:href="#SVGID_25_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st55" d="M546.6,145.7l-2.2,0.2c-0.2,0-0.5,0.1-0.6,0.4c-0.3,0.7-0.8,1.3-1.3,1.9c-0.2,0.2-0.2,0.5-0.1,0.8
            c0.5,1.1,0.2,2.4-0.7,3.1c-1.2,0.9-2.9,0.9-4-0.2l-0.5-0.5c-0.2-0.2-0.4-0.2-0.6-0.2c-1.4,0.3-2.9,0.2-4.4-0.1
            c-0.2-0.1-0.5,0-0.6,0.2l-0.8,0.7c-0.6,0.5-1.3,0.8-2,0.8h-0.1c-0.8,0-1.5-0.4-2.1-0.9c-0.9-0.9-0.9-2.4-0.1-3.4
            c0.2-0.2,0.2-0.6,0-0.8c-1-1.3-1.5-2.8-1.6-4.4v-0.4c0.1-0.9,0.3-1.7,0.7-2.5l0.4-0.8c0.7-1.2,1.7-2.2,2.9-2.9l0.6,5.3
            c0,0.3,0.3,0.6,0.7,0.5c0,0,0,0,0,0l1.4-0.2l0.8,4.5c0,0.3,0.3,0.4,0.5,0.5h0.1c0.2,0,0.4-0.1,0.5-0.3l3.5-6.8
            c0.2-0.3,0-0.7-0.2-0.8l-1.9-1.1l0.7-3.1l1,0.1h0.2c0.1,0,0.3,0,0.4-0.1c0.6-0.3,3-1.4,4.1-1.4c0,0.3-0.1,1-0.1,1.4l-0.2,1.4
            c0,0.2,0.1,0.5,0.3,0.6c1.1,0.8,1.9,1.8,2.5,3c0.1,0.2,0.3,0.4,0.6,0.4l2.2,0.2L546.6,145.7z M547.8,146v-5.5
            c0-0.5-0.3-0.9-0.8-0.9l-2.2-0.2c-0.6-1.2-1.5-2.2-2.5-3l0.1-1.1c0.1-1.2,0.2-1.5,0.1-1.7c-0.1-0.6-0.6-1-1.1-1
            c-1.4,0-3.9,1.1-4.5,1.5h-0.1l-1.6-0.2c-0.3,0-0.6,0.2-0.6,0.4l-0.9,4.1c-0.1,0.3,0.1,0.5,0.3,0.7l1.8,1l-2.5,4.8l-0.6-3.4
            c-0.1-0.3-0.4-0.5-0.7-0.5l-1.3,0.2l-0.6-5.5c0-0.3-0.3-0.6-0.7-0.5c0,0,0,0,0,0l-0.2,0.1h-0.1c-1.5,0.8-2.8,1.9-3.8,3.3
            c-0.9,0.9-2.4,0.9-3.3,0c-0.9-0.9-0.9-2.4,0-3.3c0.3-0.2,0.3-0.6,0.1-0.8c-0.2-0.3-0.6-0.3-0.8-0.1c0,0-0.1,0.1-0.1,0.1
            c-1.4,1.4-1.4,3.6,0,5c0.7,0.7,1.6,1,2.5,1l0.7-0.1c-0.3,0.8-0.5,1.6-0.6,2.5v0.5c0,1.8,0.5,3.5,1.6,4.9c-0.9,1.5-0.8,3.4,0.4,4.6
            c0.8,0.8,1.8,1.3,2.9,1.3h0.1c1.1,0,2.1-0.4,2.9-1.1l0.5-0.5c1.4,0.3,2.9,0.3,4.4,0.1l0.4,0.4c1.6,1.5,4,1.6,5.6,0.2
            c1.3-1,1.7-2.7,1.1-4.3c0.4-0.5,0.8-1.1,1.1-1.7l2.2-0.2C547.4,146.8,547.8,146.4,547.8,146"/>
          <path class="st55" d="M539.7,141.6c-0.1,0-0.3-0.1-0.3-0.3c0-0.1,0.1-0.3,0.3-0.3c0.1,0,0.3,0.1,0.3,0.3
            C540,141.4,539.9,141.5,539.7,141.6L539.7,141.6z M539.7,139.8c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5
            c0.8,0,1.5-0.7,1.5-1.5C541.2,140.5,540.5,139.8,539.7,139.8"/>
        </g>
        <rect x="648.6" y="134.4" class="st56" width="19.9" height="11.7"/>
        <line class="st57" x1="649.9" y1="142.7" x2="651.7" y2="142.7"/>
        <line class="st57" x1="652.8" y1="142.7" x2="657.8" y2="142.7"/>
        <rect x="648.6" y="133.2" class="st36" width="19.9" height="2.5"/>
        <g>
          <defs>
            <rect id="SVGID_27_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_28_">
            <use xlink:href="#SVGID_27_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st58" d="M649.1,132.9c0,0-0.9,0-0.9,0.9V145c0,0,0,0.9,0.9,0.9h19.2c0,0,0.9,0,0.9-0.9v-11.2c0,0,0-0.9-0.9-0.9H649.1
            z"/>
        </g>
        <line class="st57" x1="648" y1="136.3" x2="668.9" y2="136.3"/>
        <line class="st59" x1="659.8" y1="145.8" x2="657.5" y2="147.9"/>
        <g>
          <defs>
            <rect id="SVGID_29_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_30_">
            <use xlink:href="#SVGID_29_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st60" d="M652,156.3c1.5,0,2.6-1.2,2.6-2.6c0-1.5-1.2-2.6-2.6-2.6c-1.5,0-2.7,1.2-2.7,2.6
            C649.4,155.1,650.5,156.3,652,156.3z"/>
          <path class="st60" d="M663.9,156.3c1.5,0,2.6-1.2,2.6-2.6c0-1.5-1.2-2.6-2.6-2.6c-1.5,0-2.7,1.2-2.7,2.6
            C661.2,155.1,662.4,156.3,663.9,156.3z"/>
        </g>
        <line class="st57" x1="653.8" y1="151.5" x2="665.3" y2="140.3"/>
        <line class="st57" x1="661.8" y1="151.5" x2="658.1" y2="147.5"/>
        <g>
          <defs>
            <rect id="SVGID_31_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_32_">
            <use xlink:href="#SVGID_31_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st61" d="M179.5,221.6c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C191.9,216.1,186.3,221.6,179.5,221.6"/>
        </g>
        <g>
          <defs>
            <path id="SVGID_33_" d="M167.2,209.2c0,6.8,5.5,12.3,12.3,12.3c6.8,0,12.3-5.5,12.3-12.3c0-6.8-5.5-12.3-12.3-12.3
              C172.7,196.9,167.2,202.4,167.2,209.2"/>
          </defs>
          <clipPath id="SVGID_34_">
            <use xlink:href="#SVGID_33_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st62" d="M176,221.5c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C188.3,216,182.8,221.5,176,221.5"/>
        </g>
        <g>
          <defs>
            <rect id="SVGID_35_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_36_">
            <use xlink:href="#SVGID_35_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st63" d="M179.5,221.6c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C191.9,216.1,186.3,221.6,179.5,221.6z"/>
          <path class="st64" d="M663.7,326.2c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C676.1,320.7,670.5,326.2,663.7,326.2"/>
        </g>
        <g>
          <defs>
            <path id="SVGID_37_" d="M651.4,313.9c0,6.8,5.5,12.3,12.3,12.3c6.8,0,12.3-5.5,12.3-12.3c0-6.8-5.5-12.3-12.3-12.3
              C656.9,301.5,651.4,307.1,651.4,313.9"/>
          </defs>
          <clipPath id="SVGID_38_">
            <use xlink:href="#SVGID_37_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st65" d="M660.2,326.1c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C672.5,320.6,667,326.1,660.2,326.1"/>
        </g>
        <g>
          <defs>
            <rect id="SVGID_39_" x="7.1" y="2.7" width="718.1" height="343.5"/>
          </defs>
          <clipPath id="SVGID_40_">
            <use xlink:href="#SVGID_39_"  style="overflow:visible;"/>
          </clipPath>
          <path class="st66" d="M663.7,326.2c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3c6.8,0,12.3,5.5,12.3,12.3
            C676.1,320.7,670.5,326.2,663.7,326.2z"/>
        </g>
        </svg>
      </div>
      <div class="hmap__details">
        <div class="hmap__money-in">
          <h2>Details:</h2>
          <div class="catagory hmap__household">
            <h3>Household</h3>
            <div>
              <p>Family Members: {{ familyMembers }}</p>
            </div>
            <div>
              <p>Members Ages</p>
              <p>
                <span class="age" v-for="(age, key) in birthDates" :key="key">{{ age }}, </span>
              </p>
              
            </div>
          </div>
          <div class="catagory hmap__bank-accounts">
            <h3>Bank Accounts</h3>
            <div>
              <p>Jan. 1 <span>{{ bankAccountTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ bankAccountTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__investments">
            <h3>Investments</h3>
            <div>
              <p>Jan. 1 <span>{{ investmentTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Contributions <span>{{ investmentTotals.contributions }}</span></p>
              <p>Distributions <span>{{ investmentTotals.distributions }}</span></p>
            </div>
            <div>
              <p>Up/Down <span>{{ investmentTotals.upDown }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ investmentTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__college-savings">
            <h3>College Savings</h3>
            <div>
              <p>Jan. 1 <span>{{ collegeSavingsTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Contributions <span>{{ collegeSavingsTotals.contributions }}</span></p>
              <p>Distributions <span>{{ collegeSavingsTotals.distributions }}</span></p>
            </div>
            <div>
              <p>Up/Down <span>{{ collegeSavingsTotals.upDown }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ collegeSavingsTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__retirement">
            <h3>Retirement Accounts</h3>
            <div>
              <p>Jan. 1 <span>{{ retirementTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Contributions <span>{{ retirementTotals.contributions }}</span></p>
              <p>Distributions <span>{{ retirementTotals.distributions }}</span></p>
            </div>
            <div>
              <p>Up/Down <span>{{ retirementTotals.upDown }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ retirementTotals.endBalance }}</span></p>
            </div>
          </div>
        </div>
        <div class="hmap__money-out">
          <div class="catagory hmap__mortgages">
            <h3>Mortgages</h3>
            <div>
              <p>Jan. 1 <span>{{ mortgageTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ mortgageTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__student-loans">
            <h3>Student Loans</h3>
            <div>
              <p>Jan. 1 <span>{{ studentLoanTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ studentLoanTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__credit-cards">
            <h3>Credit Cards</h3>
            <div>
              <p>Jan. 1 <span>{{ creditCardTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ creditCardTotals.endBalance }}</span></p>
            </div>
          </div>
          <div class="catagory hmap__auto-laons">
            <h3>Auto Loans</h3>
            <div>
              <p>Jan. 1 <span>{{ autoLoanTotals.startBalance }}</span></p>
            </div>
            <div>
              <p>Dec. 31 <span>{{ autoLoanTotals.endBalance }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section v-if="!showLogin" :class="['sidebar',  { openTray: openTray }]">
      <div class="tab" @click="toggleTray" >Info</div>
      <div class="close" @click="toggleTray" >X</div>
      <DataForm v-bind:selectedUser = "selectedUser" />
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import Hmap from '@/components/Hmap.vue'
import Login from '@/components/Login.vue'
import DataForm from '@/components/DataForm.vue'
import moneyFormat from '@/js/moneyFormat.js'
import { mapState } from 'vuex'


export default {
  name: 'home',
  components: {
    Hmap,
    Login,
    DataForm
  },
  data() {
    return {
      customYear: this.$store.state.year,
      currentYear: new Date().getFullYear(),
      loggedinUser: this.$store.state.loggedinUser,
      email: null,
      password: null,
      feedback: null,
      showMap: true,
      showLogin: this.$store.state.showLogin,
      userId: null,
      allQuestions: [],
      msg: 'You must enter a value in all fields',
      firstName: null,
      lastName: null,
      feedback: null,
      showSelectedClient: false, 
      anotherClient: {
        name: null,
        dateOfBirth: null
      },
      clients: [],
      clientMsg: null,
      anotherBankAccount: {
        startBalance: 0,
        endBalance: 0
      },
      bankAccounts: [],
      bankAccountMsg: null,
      anotherMortgage: {
        startBalance: 0,
        endBalance: 0
      },
      mortgages: [],
      mortgageMsg: null,
      financialGifts: null,
      childSupport: null,
      grossIncome: null,
      taxes: null,
      newMortgages: null,
      newStudentLoans: null,
      newAutoLoans: null,
      anotherCreditCard: {
        startBalance: 0,
        endBalance: 0
      },
      creditCards: [],
      creditCardMsg: null,
      alimony: null,
      another529Plan: {
        startBalance: 0,
        contributions: 0,
        withdrawals: 0,
        endBalance: 0
      },
      plan529Accounts: [],
      plan529AccountMsg: null,
      anotherChild: {
        name: null,
        dateOfBirth: null
      },
      children: [],
      childMsg: null,
      anotherInvestmentAccount: {
        startBalance: 0,
        contributions: 0,
        withdrawals: 0,
        endBalance: 0
      },
      investmentAccounts: [],
      investmentAccountMsg: null,
      anotherAutoLoan: {
        startBalance: 0,
        endBalance: 0
      },
      autoLoans: [],
      autoLoanMsg: null,
      anotherStudentLoan: {
        startBalance: 0,
        endBalance: 0
      },
      studentLoans: [],
      studentLoanMsg: null,
      anotherRetirementAccount: {
        startBalance: 0,
        contributions: 0,
        withdrawals: 0,
        endBalance: 0
      },
      retirementAccounts: [],
      retirementAccountMsg: null,
      anotherHSAAccount: {
        startBalance: 0,
        contributions: 0,
        withdrawals: 0,
        endBalance: 0
      },
      hsaAccounts: [],
      hsaAccountMsg: null,
    }
  },
  methods: {
    toggleTray() {
      this.$store.commit('toggleTray')
    },
    login() {
      if(this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {          
          this.$store.state.userId = cred.user.uid
        }).then(() => {
          let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              this.$store.state.loggedinUser = doc.data()
              this.$store.state.loggedinUser.id = doc.id
              localStorage.setItem('user', this.$store.state.userId)
            })
          }).then(() => {
            if(this.$store.state.loggedinUser) {
              if(this.$store.state.loggedinUser.role === 'admin') {
                this.$router.push({ name: 'admin' })
              } else if(this.$store.state.loggedinUser.role === 'user') {
                this.$router.push({ name: 'client' })
              }
              this.$store.state.showLogin = false
            }
          })
        }).catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    },
    getAge(a) {
      let strippedDate = a.replace(/[^0-9 ]/g, "")
      var dob = strippedDate;
      var year = Number(dob.substr(4, 4));
      var month = Number(dob.substr(0, 2)) - 1;
      var day = Number(dob.substr(2, 2));
      var today = new Date();
      var age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }
      return age;
    }
  },
  created() {
    
    if(localStorage.getItem('user')) {
      this.$store.state.userId = localStorage.getItem('user')
      let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.$store.state.loggedinUser = doc.data()
          this.$store.state.loggedinUser.id = doc.id
        })
      }).then(() => {
        if(this.$store.state.loggedinUser.role === 'user') {
          this.$router.push({ name: 'client' })
        }
        this.$store.state.showLogin = false
      })
    }
    else {
      this.$store.state.showLogin = true
    }
    
    if(this.$store.state.selectedUser) {
      this.slug = this.selectedUser.slug
      this.clients = this.selectedUser.questions[14].questions
      this.children = this.selectedUser.questions[12].questions        
      this.bankAccounts = this.selectedUser.questions[1].questions        
      this.mortgages = this.selectedUser.questions[4].questions        
      this.financialGifts = this.selectedUser.questions[5].answer        
      this.childSupport = this.selectedUser.questions[7].answer        
      this.creditCards = this.selectedUser.questions[8].questions        
      this.alimony = this.selectedUser.questions[9].answer        
      this.plan529Accounts = this.selectedUser.questions[10].questions        
      this.investmentAccounts = this.selectedUser.questions[13].questions
      this.autoLoans = this.selectedUser.questions[15].questions        
      this.studentLoans = this.selectedUser.questions[16].questions        
      this.retirementAccounts = this.selectedUser.questions[17].questions        
      this.hsaAccounts = this.selectedUser.questions[19].questions   
      this.grossIncome = this.selectedUser.questions[11].answer
      this.taxes = this.selectedUser.questions[18].answer
      this.newAutoLoans = this.selectedUser.questions[0].answer
      this.newStudentLoans = this.selectedUser.questions[6].answer
      this.newMortgages = this.selectedUser.questions[3].answer

  }
    if(this.$store.state.loggedinUser) {
      this.loggedinUser = this.$store.state.loggedinUser
    } else {
      this.showLogin = true
    }
    if(!this.selectedUser) {
      this.showLogin = true
    } else {
      this.showLogin = false
    }

    db.collection('questions').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let question = doc.data()
        question.id = doc.id
        question.checked = false
        question.show = true
        this.allQuestions.push(question)
      })
    })
  },
  computed: {
    year() {
      if(this.$store.state.year) {
        return this.$store.state.year
      } else {
        return new Date().getFullYear()
      }
    },
    ignoreNewDebt() {
      return this.$store.state.ignoreNewDebt
    },
    openTray() {
      return this.$store.state.openTray
    },
    mapGrossIncome() {
      let grossIncome = 0
      if(this.grossIncome) {
        grossIncome = this.grossIncome
        grossIncome = Number(grossIncome.replace(/[^0-9 ]/g, ""))
      }
      return grossIncome.formatMoney(0, "$")
    },
    mapTaxes() {
      let taxes = 0
      if(this.taxes) {
        taxes = Number(this.taxes.replace(/[^0-9 ]/g, ""))
      }
      return taxes.formatMoney(0, "$")
    },
    mapAvailableIncome() {
      let income = 0
      if(this.grossIncome && this.taxes) {
        income = Number(this.grossIncome.replace(/[^0-9 ]/g, "")) - Number(this.taxes.replace(/[^0-9 ]/g, ""))
      }
      return income.formatMoney(0, "$")
    },
    mapMoneySaved() {
      let investmentSavings = 0
      let collegeSavings = 0
      let retirementSavings = 0
      let bankAccountStart = 0
      let bankAccountEnd = 0
      let totalSavings
      if(this.investmentAccounts) {
        for(let account of this.investmentAccounts) {
          investmentSavings = investmentSavings + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.plan529Accounts) {
        for(let account of this.plan529Accounts) {
          collegeSavings = collegeSavings + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.retirementAccounts) {
        for(let account of this.retirementAccounts) {
          retirementSavings = retirementSavings + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.bankAccounts) {
        for(let account of this.bankAccounts) {
          bankAccountStart = bankAccountStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          bankAccountEnd = bankAccountEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }      
      totalSavings = (investmentSavings + collegeSavings + retirementSavings) + (bankAccountEnd - bankAccountStart)

      return totalSavings.formatMoney(0, "$")
    },
    mapMoneyBorrowed() {
      let creditCardsStart = 0
      let creditCardsEnd = 0
      let creditCardTotals
      let totalBorrowed

      if(this.creditCards) {
        for(let account of this.creditCards) {
          creditCardsStart = creditCardsStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          creditCardsEnd = creditCardsEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
        creditCardTotals = creditCardsEnd - creditCardsStart
      }
      
      if(creditCardTotals <= 0) {
        totalBorrowed = 0
      } else {
        totalBorrowed = creditCardTotals 
      }
      return totalBorrowed.formatMoney(0, "$")
    },
    mapSavingsUsed() {
      let investmentDistributions = 0
      let retirementDistributions = 0
      let collegeDistributions = 0
      let bankAccountStart = 0
      let bankAccountEnd = 0
      let totalSavingsUsed = 0
      let totalDistibutions = 0
      let totalBankAccount = 0

      if(this.investmentAccounts) {
        for(let account of this.investmentAccounts) {
          investmentDistributions = investmentDistributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.plan529Accounts) {
        for(let account of this.plan529Accounts) {
          collegeDistributions = collegeDistributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.retirementAccounts) {
        for(let account of this.retirementAccounts) {
          retirementDistributions = retirementDistributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }
      }
      if(this.bankAccounts) {
        for(let account of this.bankAccounts) {
          bankAccountStart = bankAccountStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          bankAccountEnd = bankAccountEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      totalDistibutions = investmentDistributions - collegeDistributions - retirementDistributions
      totalBankAccount = bankAccountEnd - bankAccountStart

      if(totalDistibutions < 0) {
        totalDistibutions = totalDistibutions * -1
      } else {
        totalDistibutions = 0
      }

      if(totalBankAccount < 0) {
        totalBankAccount = totalBankAccount * -1
      } else {
        totalBankAccount = 0
      }

      totalSavingsUsed = totalDistibutions + totalBankAccount
      return totalSavingsUsed.formatMoney(0, "$")
    },
    mapDebtPaid() {
      let mortgagesEnd = 0
      let mortgagesStart = 0
      let newMortgages
      if(this.newMortgages) {
        newMortgages = Number(this.newMortgages.replace(/[^0-9 ]/g, ""))
      } else {
        newMortgages = 0
      }
      let studentLoansEnd = 0
      let studentLoansStart = 0
      let newStudentLoans
      if(this.newStudentLoans) {
        newStudentLoans = Number(this.newStudentLoans.replace(/[^0-9 ]/g, ""))
      } else {
        newStudentLoans = 0
      }
      
      let autoLoansEnd = 0
      let autoLoansStart = 0
      let newAutoLoans
      if(this.newAutoLoans) {
        newAutoLoans = Number(this.newAutoLoans.replace(/[^0-9 ]/g, ""))
      } else {
        newAutoLoans = 0
      }
      let creditCardsEnd = 0
      let creditCardsStart = 0
      let creditCardTotals = 0
      let totalDebtPaid = 0

        if(this.mortgages) {
          for(let account of this.mortgages) {
            mortgagesEnd = mortgagesEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
            mortgagesStart = mortgagesStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          }
        }
        if(this.studentLoans) {
          for(let account of this.studentLoans) {
            studentLoansEnd = studentLoansEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
            studentLoansStart = studentLoansStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          }
        }
        if(this.autoLoans) {
          for(let account of this.autoLoans) {
            autoLoansEnd = autoLoansEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
            autoLoansStart = autoLoansStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
          }
        }
        if(this.creditCards) {
          for(let account of this.creditCards) {
            creditCardsStart = creditCardsStart + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
            creditCardsEnd = creditCardsEnd + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
          }
          creditCardTotals = creditCardsEnd - creditCardsStart
        }
        if (this.ignoreNewDebt) {
          totalDebtPaid = ((mortgagesEnd - mortgagesStart)) + ((studentLoansEnd - studentLoansStart)) + ((autoLoansEnd - autoLoansStart)) + ((creditCardTotals))
        } else {
          totalDebtPaid = ((mortgagesEnd - mortgagesStart)) + ((studentLoansEnd - studentLoansStart)) + ((autoLoansEnd - autoLoansStart)) + ((creditCardTotals)) + newAutoLoans + newStudentLoans + newMortgages
        }
        
      // }
      if(totalDebtPaid < 0) {
        totalDebtPaid = totalDebtPaid * -1
      }

      return totalDebtPaid.formatMoney(0, "$")
    },
    spending() {
      let availableSpending = 0
      let creditCards = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.creditCards) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      let totalCreditCard = endBalance - startBalance
      if(totalCreditCard < 0) {
        totalCreditCard = 0
      }

      availableSpending = Number(this.mapAvailableIncome.replace(/[^0-9 ]/g, "")) - Number(this.mapMoneySaved.replace(/[^0-9 ]/g, "")) + totalCreditCard + Number(this.mapSavingsUsed.replace(/[^0-9 ]/g, "")) - Number(this.mapDebtPaid.replace(/[^0-9 ]/g, ""))
      return availableSpending.formatMoney(0, "$")

    },
    familyMembers() {
      let numberOfClients = 0
      let numberOfChildren = 0
      
      for(let client of this.clients) {
        if(client.name) {
          numberOfClients++
        }
      }
      for(let child of this.children) {
        if(child.name) {
          numberOfChildren++
        }
      }
      return numberOfClients + numberOfChildren
    },
    birthDates() {
      let birthDates = []
      for(let client of this.clients) {
        if(client.dateOfBirth) {
          let age = this.getAge(client.dateOfBirth)
          birthDates.push(age)
        }
      }
      for(let child of this.children) {
        if(child.dateOfBirth) {
          let age = this.getAge(child.dateOfBirth)
          birthDates.push(age)
        }
      }
      return birthDates
    },
    bankAccountTotals() {
      let bankAccounts = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.bankAccounts) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      bankAccounts.startBalance = startBalance.formatMoney(0, "$")
      bankAccounts.endBalance = endBalance.formatMoney(0, "$")
      return bankAccounts
      
    },
    investmentTotals() {
      let investmentAccounts = {}
      let startBalance = 0
      let endBalance = 0
      let contributions = 0
      let distributions = 0
      let inOut = 0
      let upDown = 0
      for(let account of this.investmentAccounts) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.contributions) {
          contributions = contributions + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
        if(account.withdrawals) {
          distributions = distributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }

        if(account.contributions && account.withdrawals) {
          inOut = Number(account.contributions.replace(/[^0-9 ]/g, "")) - Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
          upDown = endBalance - (startBalance + inOut)        
        }
        investmentAccounts.startBalance = startBalance.formatMoney(0, "$")
        investmentAccounts.endBalance = endBalance.formatMoney(0, "$") 
        investmentAccounts.contributions = contributions.formatMoney(0, "$")
        investmentAccounts.distributions = distributions.formatMoney(0, "$")
        investmentAccounts.upDown = upDown.formatMoney(0, "$")
      }
        return investmentAccounts      
    },
    collegeSavingsTotals() {
      let collegeSavingsAccounts = {}
      let startBalance = 0
      let endBalance = 0
      let contributions = 0
      let distributions = 0
      let inOut = 0
      let upDown = 0
      for(let account of this.plan529Accounts) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.contributions) {
          contributions = contributions + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
        if(account.withdrawals) {
          distributions = distributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }
        if(account.contributions && account.withdrawals) {
          inOut = Number(account.contributions.replace(/[^0-9 ]/g, "")) - Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
          upDown = endBalance - (startBalance + inOut)        
        }
        collegeSavingsAccounts.startBalance = startBalance.formatMoney(0, "$")
        collegeSavingsAccounts.endBalance = endBalance.formatMoney(0, "$")  
        collegeSavingsAccounts.contributions = contributions.formatMoney(0, "$")
        collegeSavingsAccounts.distributions = distributions.formatMoney(0, "$")
        collegeSavingsAccounts.upDown = upDown.formatMoney(0, "$")
      }
        return collegeSavingsAccounts      
    },
    retirementTotals() {
      let retirementAccounts = {}
      let startBalance = 0
      let endBalance = 0
      let contributions = 0
      let distributions = 0
      let inOut = 0
      let upDown = 0
      for(let account of this.retirementAccounts) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.contributions) {
          contributions = contributions + Number(account.contributions.replace(/[^0-9 ]/g, ""))
        }
        if(account.withdrawals) {
          distributions = distributions + Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
        }
        if(account.contributions && account.withdrawals) {
          inOut = Number(account.contributions.replace(/[^0-9 ]/g, "")) - Number(account.withdrawals.replace(/[^0-9 ]/g, ""))
          upDown = endBalance - (startBalance + inOut)        
        }
        retirementAccounts.startBalance = startBalance.formatMoney(0, "$")
        retirementAccounts.endBalance = endBalance.formatMoney(0, "$")  
        retirementAccounts.contributions = contributions.formatMoney(0, "$")
        retirementAccounts.distributions = distributions.formatMoney(0, "$") 
        retirementAccounts.upDown = upDown.formatMoney(0, "$")
      }
        return retirementAccounts      
    },
    mortgageTotals() {
      let mortgages = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.mortgages) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      mortgages.startBalance = startBalance.formatMoney(0, "$")
      mortgages.endBalance = endBalance.formatMoney(0, "$") 
      return mortgages
    },
    studentLoanTotals() {
      let studentLoans = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.studentLoans) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      studentLoans.startBalance = startBalance.formatMoney(0, "$")
      studentLoans.endBalance = endBalance.formatMoney(0, "$")  
      return studentLoans
    },
    creditCardTotals() {
      let creditCards = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.creditCards) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      creditCards.startBalance = startBalance.formatMoney(0, "$")
      creditCards.endBalance = endBalance.formatMoney(0, "$")  
      return creditCards
    },
    autoLoanTotals() {
      let autoLoans = {}
      let startBalance = 0
      let endBalance = 0
      for(let account of this.autoLoans) {
        if(account.startBalance) {
          startBalance = startBalance + Number(account.startBalance.replace(/[^0-9 ]/g, ""))
        }
        if(account.endBalance) {
          endBalance = endBalance + Number(account.endBalance.replace(/[^0-9 ]/g, ""))
        }
      }
      autoLoans.startBalance = startBalance.formatMoney(0, "$")
      autoLoans.endBalance = endBalance.formatMoney(0, "$")  
      return autoLoans
    },
    ...mapState(['selectedUser'])
  },
  watch: {
    selectedUser() {
      this.slug = this.selectedUser.slug
      this.clients = this.selectedUser.questions[14].questions
      this.children = this.selectedUser.questions[12].questions        
      this.bankAccounts = this.selectedUser.questions[1].questions        
      this.mortgages = this.selectedUser.questions[4].questions        
      this.financialGifts = this.selectedUser.questions[5].answer        
      this.childSupport = this.selectedUser.questions[7].answer        
      this.creditCards = this.selectedUser.questions[8].questions        
      this.alimony = this.selectedUser.questions[9].answer        
      this.plan529Accounts = this.selectedUser.questions[10].questions        
      this.investmentAccounts = this.selectedUser.questions[13].questions
      this.autoLoans = this.selectedUser.questions[15].questions        
      this.studentLoans = this.selectedUser.questions[16].questions        
      this.retirementAccounts = this.selectedUser.questions[17].questions        
      this.hsaAccounts = this.selectedUser.questions[19].questions   
      this.grossIncome = this.selectedUser.questions[11].answer
      this.taxes = this.selectedUser.questions[18].answer
      this.newAutoLoans = this.selectedUser.questions[0].answer
      this.newStudentLoans = this.selectedUser.questions[6].answer
      this.newMortgages = this.selectedUser.questions[3].answer
    }
  }
}
</script>
<style lang="scss">

  $color-green-light: #b0c986;
  $color-green: #7ba636;
  $color-green-dark: #577937;
  $color-blue: #b5c7e8;
  $color-white: #fff;
  $color-black: #333333;
  $color-grey: #666;
  $color-grey-light: #999;
  $color-blue-dark: #014584;
  .home {
    position: relative;
    overflow: hidden;
  }
  .login {
    position: absolute;
    padding: 100px;
    left: 50%;
    top: 33%;
    background-color: $color-white;
    border: 2px solid $color-green-light;
    transform: translate(-50%, -50%);
    z-index: 2;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    h2 {
      align-self: center;
      margin-bottom: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
    .field {
      margin-bottom: 10px;
      text-align: left;

      &--email, 
      &--password,
      &--login {
        border-bottom: none;
      }
      &:last-child {
        margin-top: 10px;
        align-self: center;
      }

      input {
        margin-left: 5px;
        border: none;
        border-bottom: 1px solid $color-black;
      }
    }
  }
  .hmap {
    &.blur {
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -o-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(10px);
    }
    &__map {
      height: 100%;
      width: calc(100% - 40px);
      max-width: 1280px;
      margin: 0 auto 60px;
    }
    &__details {
      display: flex;
      justify-content: center;
      align-content: flex-start;
      flex-wrap: wrap;

      h2 {
        display: inline-block;
        align-self: flex-start;
        margin-top: 15px;
        padding: 8px 20px;
        width: auto;
        background-color: $color-green-dark;
        color: $color-white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
      }
    }
    &__money-in,
    &__money-out {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 316px;

      .catagory {
        width: auto;
        margin: 8px 15px;

        p {
          width: 100%;
          min-height: 15px;
          padding: 3px 5px;
          margin: 3px 0;
          background-color: $color-white;
          font-size: 13px;

          span {
            color: $color-green-dark;
            font-weight: bold;
          }
        }
        &:last-child {
          margin-right: 25px;
        }
      }
    }
    &__money-in {
      background-color: $color-green-light;
      width: 66%;
    }
    &__money-out {
      background-color: $color-blue;
      width: 34%;

      .catagory {
        p {
          span {
            color: $color-blue-dark;
            font-weight: bold;
          }
        }
      }
    }
  }
  .sidebar {
    position: absolute;
    padding: 40px;
    padding-right: 0;
    width: 80%;
    height: calc(100% - 78px);
    right: 0;
    top: 0;
    background: $color-white;
    border-left: 1px solid $color-grey-light;
    transform: translateX(100%);
    transition: all .5s ease-out;

    &.openTray {
      transform: translateX(0);
    }

    .tab {
      position: absolute;
      left: -69px;
      top: 100px;
      background: $color-white;
      border-left: 1px solid $color-grey-light;
      border-top: 1px solid $color-grey-light;
      border-bottom: 1px solid $color-grey-light;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 20px;
      width: auto;
      z-index: 2;
      cursor: pointer;
      transition: .3s;

      &:hover {
        border-left: 1px solid $color-green;
        border-top: 1px solid $color-green;
        border-bottom: 1px solid $color-green;
        color: $color-green;
      }
    }
    .close {
      display: inline-block;
      position: absolute;
      top: 40px;
      right: 65px;
      padding: 10px 12px;
      border-radius: 50%;
      border: 1px solid $color-green-dark;
      color: $color-green-dark;
      font-size: 14px;
      font-weight: 700;
      background-color: $color-white;
      cursor: pointer;
      transition: all .3s ease-out;

      &:hover {
        background-color: $color-green-dark;
        color: $color-white;
      }
    }
    .field {
      margin-bottom: 20px;

      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 700;
      }
      .questions {
        li {
          display: flex;
          margin-bottom: 5px;
        }
        label {
          margin-right: 5px;
        }
        input {
          border: none;
          border-bottom: 1px solid $color-black;
        }
      }
    }
  }
	.st0{clip-path:url(#SVGID_2_);fill:none;stroke:#EDF3E4;stroke-width:7;}
	.st1{clip-path:url(#SVGID_4_);fill:none;stroke:#D0D2D3;stroke-width:0.5;}
	
		.st2{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,5.781;}
	
		.st3{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.034;}
	
		.st4{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,5.621;}
	
		.st5{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.053;}
	
		.st6{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.327;}
	
		.st7{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.099;}
	
		.st8{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.007;}
	
		.st9{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,5.913;}
	
		.st10{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,5.853;}
	
		.st11{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.084;}
	
		.st12{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,5.838;}
	
		.st13{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.033;}
	
		.st14{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.274;}
	
		.st15{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.172;}
	
		.st16{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.005;}
	
		.st17{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0,6.04;}
	.st18{clip-path:url(#SVGID_6_);fill:none;stroke:#231F20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
	.st19{fill:#404041;}
	.st20{font-family:'Lato'; font-weight: bold}
	.st21{font-size:12px;}
	.st22{letter-spacing:-1;}
	.st23{font-family:'Lato';}
	.st24{font-size:10px;}
	.st25{font-size:15px;}
	.st26{fill:#231F20;}
	.st27{font-size:13px;}
	.st28{font-family:'Lato-Light';}
	.st29{font-family:'Helvetica-Bold';}
	.st30{clip-path:url(#SVGID_8_);fill:#7BA536;}
	.st31{clip-path:url(#SVGID_8_);fill:#AFC885;}
	.st32{clip-path:url(#SVGID_8_);fill:#231F20;}
	.st33{clip-path:url(#SVGID_8_);fill:#C7D9AB;}
	.st34{clip-path:url(#SVGID_10_);fill:#7BA536;}
	.st35{clip-path:url(#SVGID_12_);fill:none;stroke:#231F20;stroke-width:1.12;}
	.st36{fill:#7BA536;}
	.st37{fill:#C7D9AB;}
	.st38{clip-path:url(#SVGID_14_);fill:#333333;}
	.st39{clip-path:url(#SVGID_14_);fill:#C7D9AB;}
	.st40{clip-path:url(#SVGID_14_);fill:#7BA536;}
	.st41{clip-path:url(#SVGID_16_);fill:#333333;}
	.st42{fill:#EFF3F9;}
	.st43{fill:none;stroke:#8EACC8;stroke-width:1.097;}
	.st44{clip-path:url(#SVGID_18_);fill:#FFFFFF;}
	.st45{fill:#8EACC8;}
	.st46{clip-path:url(#SVGID_20_);fill:#333333;}
	.st47{fill:#333333;}
	.st48{fill:#FFFFFF;}
	.st49{font-size:18px;}
	.st50{fill:#577937;}
	.st51{fill:#58595B;}
	.st52{font-size:20px;}
	.st53{clip-path:url(#SVGID_22_);fill:#333333;}
	.st54{clip-path:url(#SVGID_24_);fill:#333333;}
	.st55{clip-path:url(#SVGID_26_);}
	.st56{fill:#AFC885;}
	.st57{fill:none;stroke:#333333;stroke-width:1.2;}
	.st58{clip-path:url(#SVGID_28_);fill:none;stroke:#333333;stroke-width:1.2;}
	.st59{fill:none;stroke:#FFFFFF;stroke-width:3;}
	.st60{clip-path:url(#SVGID_30_);fill:none;stroke:#333333;stroke-width:1.2;}
	.st61{clip-path:url(#SVGID_32_);fill:#C7D9AB;}
	.st62{clip-path:url(#SVGID_34_);fill:#7BA536;}
	.st63{clip-path:url(#SVGID_36_);fill:none;stroke:#231F20;stroke-width:1.12;}
	.st64{clip-path:url(#SVGID_36_);fill:#C7D9AB;}
	.st65{clip-path:url(#SVGID_38_);fill:#7BA536;}
	.st66{clip-path:url(#SVGID_40_);fill:none;stroke:#231F20;stroke-width:1.12;}
</style>
