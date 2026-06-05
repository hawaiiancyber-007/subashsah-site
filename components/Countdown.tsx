"use client";

export default function Countdown() {
  const nativeScriptHTML = `
    <div style="
      text-align: center; 
      position: relative;
      overflow: hidden;
      max-width: 100%;
      width: 750px;
      margin: 0 auto;
      padding: 20px 10px;
      box-sizing: border-box;
    ">
      
      <div style="
        width: 100%; 
        height: 35px; 
        position: relative; 
        margin-bottom: 5px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
      ">
        <span class="running-dino" style="
          font-size: 1.8rem; 
          position: absolute; 
          bottom: 0;
          animation: dinoRun 6s linear infinite;
        ">🦖</span>
      </div>

      <p style="
        font-size: clamp(0.95rem, 2.2vw, 1.2rem); 
        font-weight: 700; 
        letter-spacing: 1px; 
        color: #ffffff; 
        margin-bottom: 15px; 
        text-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        white-space: nowrap;
      ">
        SBOLC-005-26 Graduation Countdown
      </p>

      <div id="graduation-countdown" style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        white-space: nowrap;
        gap: clamp(4px, 1.2vw, 12px);
        font-size: clamp(1rem, 3.4vw, 2.2rem); 
        font-weight: 700; 
        font-family: monospace; 
        color: #ffffff;
        width: 100%;
      ">
        00 Days : 00 Hours : 00 Minutes : 00 Seconds
      </div>
    </div>

    <style>
      @keyframes dinoRun {
        0% {
          left: -10%;
          transform: scaleX(1); /* Facing Right */
        }
        49% {
          transform: scaleX(1);
        }
        50% {
          left: 110%;
          transform: scaleX(-1); /* Flip horizontally to run back left */
        }
        99% {
          transform: scaleX(-1);
        }
        100% {
          left: -10%;
          transform: scaleX(1);
        }
      }
    </style>
    
    <script>
      (function() {
        const targetTime = new Date("2026-08-27T11:00:00").getTime();
        const container = document.getElementById("graduation-countdown");
        
        const pad = (num) => String(num).padStart(2, '0');
        
        function tick() {
          const now = Date.now();
          const difference = targetTime - now;
          
          if (difference <= 0) {
            if (container) container.innerHTML = "00 Days : 00 Hours : 00 Minutes : 00 Seconds";
            return;
          }
          
          const days = Math.floor(difference / 86400000);
          const hours = Math.floor((difference / 3600000) % 24);
          const minutes = Math.floor((difference / 60000) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          
          if (container) {
            container.innerHTML = 
              '<span class="countdown-unit" style="white-space: nowrap;">' + pad(days) + ' d</span>' +
              '<span style="padding: 0 2px;">:</span>' +
              '<span class="countdown-unit" style="white-space: nowrap;">' + pad(hours) + ' h</span>' +
              '<span style="padding: 0 2px;">:</span>' +
              '<span class="countdown-unit" style="white-space: nowrap;">' + pad(minutes) + ' m</span>' +
              '<span style="padding: 0 2px;">:</span>' +
              '<span class="countdown-unit" style="white-space: nowrap;">' + pad(seconds) + ' s</span>';
          }
        }
        
        tick();
        setInterval(tick, 1000);
      })();
    </script>
  `;

  return (
    <div 
      className="hero-countdown"
      dangerouslySetInnerHTML={{ __html: nativeScriptHTML }} 
    />
  );
}