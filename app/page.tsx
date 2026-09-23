import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Nubo — One product, done right.",
};

export default function Page() {
  return (
<>
<div className="kicker hero-kicker">
    <span className="ico"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
    <span className="kicker-label">Always kind. Mostly invisible.</span>
  </div>

  <main>
    <section className="hero">
      <div className="hero-media">
        <video autoPlay muted loop playsInline poster="/assets/RsmD0uXOZJYBslfUERbIV3G8gI.jpeg">
          <source src="https://framerusercontent.com/assets/Q2DKMhSOptiVNCBb9PEzxJGqUSQ.mp4" type="video/mp4" />
        </video>
      </div>
      <img className="intro-bg" src="/assets/7zvJcZFEoNeRM7azD4VctYeHHk8.jpeg" alt="" />
      <div className="hero-stage">
      <div className="hero-content">
        <h1 className="display h110"><span className="h1-line">A <em>quieter</em> kind of</span><span className="h1-line">help at home.</span></h1>
        <p className="hero-desc">Nubo takes the small daily work off your hands,<br />without asking for your attention.</p>
        <div className="hero-ctas">
          <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Reserve from €3,290</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          <a className="btn btn-ghost scramble" href="#showreel" data-hash="showreel"><span className="btn-label">Watch showreel</span><img className="btn-dots" src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></a>
        </div>
      </div>
      <div className="logo-parallax">
      <div className="logo-carousel" aria-label="3D Carousel">
        <div className="logo-track">
          <div className="logo-item"><img src="/assets/JR16Wnm2JkeTHcVPEX3S7WVNFg.svg" alt="Cocon Celeste" /></div>
          <div className="logo-item"><img src="/assets/TJ003JDsSJE7C6VKZUbvHthZ8.svg" alt="Blackwell" /></div>
          <div className="logo-item"><img src="/assets/n1acNoJpE3PitOhxU9zE0YcTwI.svg" alt="Medusa" /></div>
          <div className="logo-item"><img src="/assets/VhTfKnHZtIpMVs3VADrRqOyjGow.svg" alt="Elasticpath" /></div>
          <div className="logo-item"><img src="/assets/7xS8Rt4FjfwULJ8yFtyB8VNKk7g.svg" alt="Stackbit" /></div>
          <div className="logo-item"><img src="/assets/UbaKaav5HnzZM46qW0QTDdfG8.svg" alt="Singlestore" /></div>
          <div className="logo-item"><img src="/assets/71FzDvsSeAYv16imstJKrF3dxUE.svg" alt="Bird" /></div>
          <div className="logo-item"><img src="/assets/7wCZMfnpNUs98Rv9Tg4oZvQS8UQ.svg" alt="Sveltekit" /></div>
        </div>
      </div>
      </div>
      </div>
    </section>

    <section className="intro" id="showreel">
      <h2 className="display h110">Hello, I'm Nubo.</h2>
      <div className="intro-card">
        <img src="/assets/3VIglJhUObdpgghYlY45YqNKE.jpg" alt="Robot is waving in the living room" />
        <div className="intro-mark" aria-hidden="true">
          <img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" />
        </div>
      </div>
    </section>

    <section className="capabilities">
      <div className="section-head">
        <div className="kicker">
          <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <span className="kicker-label">Capabilities</span>
        </div>
        <h2 className="display h110">What Nubo<br />does <span className="grey">quietly.</span></h2>
        <p className="lede">Nubo learns your rooms in an afternoon and your routines within the week, down to<br />what tidy means in your house rather than the showroom.</p>
      </div>
      <div className="slideshow">
        <div className="slides">
          <div className="slide"><video muted loop playsInline poster="/assets/3VIglJhUObdpgghYlY45YqNKE.jpg" src="https://framerusercontent.com/assets/x8b2649ZG1Q5jZczpQ86ny436Qg.mp4"></video></div>
          <div className="slide"><img src="/assets/0MwqppnigTZLAWvCcVydrTCXZCw.jpg" alt="Robot is vacuum cleaning the living room" /></div>
          <div className="slide"><img src="/assets/xKSEviCkA9W32EBCPeuGUDGWbwY.jpg" alt="Nubo humanoid robot loading the fridge" /></div>
          <div className="slide"><img src="/assets/AkfqDuVkjktmahEsR0a0ezx9rlE.jpeg" alt="Robot escorting the child to the schoolbus" /></div>
          <div className="slide"><img src="/assets/AezYeaUC8DVKEnzisFc9DHQOM.jpeg" alt="Robot walks the dog" /></div>
          <div className="slide"><img src="/assets/qd4gM5krrDfPSJ05Fg8CYcXz304.jpeg" alt="Robot is harvesting tomatos" /></div>
          <div className="slide"><img src="/assets/Nr2QL5KepfsOCmTOEveYMqp7lo.jpeg" alt="Robot is charging the ebike in the garage" /></div>
        </div>
        <div className="slide-ui">
          <button className="pause" type="button" aria-label="Pause"><i></i><i></i></button>
          <div className="dots">
            <button className="on" type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
          </div>
        </div>
      </div>
    </section>

    <section className="athome">
      <div className="section-head">
        <div className="kicker">
          <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <span className="kicker-label">At home</span>
        </div>
        <h2 className="display h110">One robot.<br /><span className="grey">Every room.</span></h2>
        <p className="lede lede-dark">Discover every use case from the kitchen to the front door, the garage to the school run.</p>
      </div>
      <div className="cards-3">
        <article className="ucard">
          <div className="ucard-media">
            <img src="/assets/JMZeDArAPMmVlXUSb59AM4S6Y.jpeg" alt="Nubo robot lending a hand at the dinner table" />
            <span className="ucard-tag">The kitchen</span>
          </div>
          <div className="ucard-body">
            <h3 className="display">A second pair of hands at dinner.</h3>
            <p className="caps">Nubo learns the order your household wakes in — surfaces cleared the night before, the shopping list built from what actually ran out.</p>
          </div>
          <div className="ucard-foot">
            <span>One less thing at 6pm</span>
            <a href="/cases/kitchen">Read the kitchen story <img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" width="8" alt="" /></a>
          </div>
        </article>
        <article className="ucard">
          <div className="ucard-media">
            <img src="/assets/CVVlOgRCvoT9Fmob3rgBrs6XY.jpeg" alt="Nubo robot gently helping with a young child" />
            <span className="ucard-tag">The School Run</span>
          </div>
          <div className="ucard-body">
            <h3 className="display">Gentle with the small ones.</h3>
            <p className="caps">Finds the lost Lego, tidies the floor before bed, reads a story on a loop. Force-sensing hands and quiet hours keep it safe and calm.</p>
          </div>
          <div className="ucard-foot">
            <span>Out the door on time</span>
            <a href="/cases/family">Read the family story <img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" width="8" alt="" /></a>
          </div>
        </article>
        <article className="ucard">
          <div className="ucard-media">
            <img src="/assets/Rp50382nl4MlTtEW6DKbCXt39uE.jpeg" alt="Nubo robot taking a parcel at the front door" />
            <span className="ucard-tag">The Front Door</span>
          </div>
          <div className="ucard-body">
            <h3 className="display">Takes the parcel when you can't.</h3>
            <p className="caps">Greets the courier, signs for the box, sets it inside. You get a photo and a note — no missed-delivery card on the mat.</p>
          </div>
          <div className="ucard-foot">
            <span>Nothing missed</span>
            <a href="/cases/daily-duties">Read the daily duties story <img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" width="8" alt="" /></a>
          </div>
        </article>
      </div>
      <div className="athome-cta">
        <p className="lede lede-dark">Discover every use case from the kitchen to the front door, the garage to the school run.</p>
        <a className="btn btn-fill scramble" href="cases/"><span className="btn-label">All use cases</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
      </div>
    </section>

    <section className="signals">
      <div className="section-head split">
        <div>
          <div className="kicker kicker-left">
            <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <span className="kicker-label">Early signals</span>
          </div>
          <h2 className="display h60">The first numbers, from the first homes.</h2>
        </div>
        <p className="lede">Nubo is in beta. These are early readings from the households living with it now, not launch-day promises.</p>
      </div>
      <div className="stat-hero">
        <div className="stat-hero-copy">
          <div className="big-num"><span className="odo" data-value="94">0</span><small>%</small></div>
          <p>Run without ever opening the app.<br />Nubo reads the routine and acts before it's asked.</p>
        </div>
        <figure>
          <div className="stat-photo">
            <img src="/assets/Xx2LmnG1YXgOw3GPqhbOj30qJQ.jpeg" alt="Hand pressing a Nubo wall-mounted circular control device" />
          </div>
          <figcaption>Of beta homes keep Nubo running daily, four weeks after delivery.</figcaption>
        </figure>
      </div>
      <div className="live-bar">
        <span className="live-bar-label"><span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span> Live beta data</span>
        <span className="live-bar-line" aria-hidden="true"></span>
        <span className="live-bar-note">Updated as the program grows. Small sample, honestly reported, and changing week to week.</span>
      </div>
      <div className="metric-grid">
        <article className="metric">
          <div className="metric-top"><span>Self-sufficiency</span><span>so far</span></div>
          <div className="val"><span className="odo" data-value="94">0</span><small>%</small></div>
          <p className="note">Run without ever opening the app. Nubo reads the routine and acts before it's asked.</p>
          <div className="metric-bot"><span>BETA - 140 homes</span><span>Ongoing</span></div>
        </article>
        <article className="metric">
          <div className="metric-top"><span>Word of mouth</span><span>so far</span></div>
          <div className="val"><span className="odo" data-value="9.2">0</span><small>/10</small></div>
          <p className="note">Average score when owners are asked how likely they'd recommend Nubo to a friend.</p>
          <div className="metric-bot"><span>Beta Survey</span><span>Ongoing</span></div>
        </article>
        <article className="metric">
          <div className="metric-top"><span>Time returned</span><span>so far</span></div>
          <div className="val"><span className="odo" data-value="6.4">0</span><small>hrs</small></div>
          <p className="note">Median time owners say they get back each week on chores Nubo quietly takes over.</p>
          <div className="metric-bot"><span>Self-Reported</span><span>Ongoing</span></div>
        </article>
      </div>
      <div className="accordion">
        <div className="acc-h">
          <h3 className="display h32">How we measure</h3>
          <p className="caps">What each number means, who it comes from, and how often it changes.</p>
        </div>
        <div className="acc-item open">
          <button className="acc-btn" type="button">What counts as "still running"? <span className="acc-glyph">•</span></button>
          <div className="acc-panel">A home is counted as active if Nubo completes at least one task a day, on its own, without being opened in the app.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button">Who's in the sample? <span className="acc-glyph">⋮</span></button>
          <div className="acc-panel">140 beta households across mixed home types and sizes. No cherry-picking; every active beta home is included.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button">How often it updates? <span className="acc-glyph">⋮</span></button>
          <div className="acc-panel">Figures refresh as the program grows, so they move week to week. The date on each stat shows how current it is.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button">What we don't do? <span className="acc-glyph">⋮</span></button>
          <div className="acc-panel">No paid reviews, no curated quotes, no rounding up. When a number dips, it dips here too.</div>
        </div>
      </div>
    </section>

    <section className="materials">
      <div>
        <div className="kicker kicker-left">
          <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <span className="kicker-label">Materials &amp; Craft</span>
        </div>
        <h2 className="display h60">Made in Como.<br /><span className="grey">Worn like a favorite jumper.</span></h2>
        <p className="lede">Nubo's shell is a single piece of seamless knit, woven in Como from a cotton and recycled nylon blend.</p>
        <div className="chips">
          <span className="chip">Machine washable</span>
          <span className="chip">Replaceable</span>
          <span className="chip">5 Tones</span>
          <span className="chip">Recycled yarn</span>
        </div>
        <table className="spec">
          <tr><td>Shell</td><td>Fine-gauge merino blend · 18GG</td></tr>
          <tr><td>Weight</td><td>540 g/m²</td></tr>
          <tr><td>Color</td><td>Chalk / Flax / Graphite</td></tr>
          <tr><td>Care</td><td>Removable · 30°C wash</td></tr>
          <tr><td>Origin</td><td>Como, Italy</td></tr>
        </table>
      </div>
      <div>
        <img className="mat-main" src="/assets/S4oLeqj0sxUIqgM2rpSfZv66U.jpg" alt="Exploded view of Nubo magnetic snap connector" />
        <div className="thumbs">
          <img className="on" src="/assets/S4oLeqj0sxUIqgM2rpSfZv66U.jpg" alt="" />
          <img src="/assets/E2n5khFlJdULm3BD8fX00lMpFo0.jpg" alt="" />
          <img src="/assets/YetUAup4jptITWPYGrWTFFSrdhY.jpg" alt="" />
          <img src="/assets/nyO5Isu6JYyNy1MMnr3MbKvguo.jpg" alt="" />
        </div>
        <div className="progress"><span></span></div>
        <p className="mat-copy">Quiet against the ear, soft to the touch, and simple to change when you want something different.</p>
        <div className="mat-cta">
          <a className="btn btn-fill scramble" href="/contact"><span className="btn-label">Request swatch</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          <p className="mat-note">Fabric swatch available on request.<br />Ships with every unit.</p>
        </div>
      </div>
    </section>

    <section className="everyone">
      <div className="section-head split">
        <div>
          <div className="kicker kicker-left">
            <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <span className="kicker-label">For everyone</span>
          </div>
          <h2 className="display h60">Simple to live with.<br /><span className="grey">Not simple inside.</span></h2>
          <p className="lede">Nubo keeps a low profile. Underneath the quiet is a robot that does considerably more than it shows.</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p className="lede">Not the numbers on the box — the things you only notice once it's living with you.</p>
          <a className="btn btn-ghost scramble" href="cases/"><span className="btn-label">Full spec sheet</span><img className="btn-dots" src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></a>
        </div>
      </div>
      <div className="bento">
        <article className="tile photo tile-hero-photo">
          <img src="/assets/If4pRssEcvthH3fHnvDMdCuvCY.jpg" alt="Nubo carrying a floral bouquet up marble stairs" />
          <img className="mark" src="/assets/A0CcQJv0IZlTkjHjya0nF8wuqic.svg" alt="nubo" />
        </article>
        <article className="tile">
          <p className="eye">On its feet</p>
          <h3 className="display h48">Takes the stairs like the rest of the family.</h3>
          <p>Walks, balances, and steps over the rug instead of dragging it. Thresholds, steps, and a shoe left in the hall are not a problem.</p>
        </article>
        <article className="tile dark">
          <span className="tile-ico"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <h3 className="display h48">More mind than machine</h3>
          <div className="neural-wrap">
            <img className="neural" src="/assets/VvAV5s1odu91BXUwqucczGPJrOg.png" alt="" />
            <div className="neural-field" role="img" aria-label="Slowly rotating sphere formed from numbers"></div>
          </div>
          <p>neural engine reads the room in real time and learns more every day.</p>
        </article>
        <article className="tile tile-center">
          <span className="tile-ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <h3 className="display h48">No one gets in.<br />Not even us.</h3>
          <img className="tile-fig" src="/assets/LwXdOQrg9Njn933qmQhTtuROFa8.png" alt="Nubo smart home wall panel" />
          <p>Zero cloud dependency.<br />Encrypted on-device, with no back door.</p>
        </article>
        <article className="tile photo">
          <img src="/assets/5VO9mzGI3gqMY9ORdJKW6YyvuiE.jpg" alt="Hand pressing a Nubo wall-mounted circular control device" />
        </article>
        <article className="tile">
          <p className="eye">All-day power</p>
          <h3 className="display h48">A full day, then it charges itself.</h3>
          <div className="tile-power">
            <img src="/assets/S2FubOroGW9HrPJVkBaF3N2AEM.png" alt="Battery" />
            <div>
              <h3 className="display h48">23hrs</h3>
              <p>When it runs low, Nubo finds the dock on its own. usually before you'd notice it was gone</p>
            </div>
          </div>
        </article>
        <div className="bento-stack">
          <article className="tile photo tile-short">
            <img src="/assets/wDnx0a64qhbvVP3gO7VIbLt37pU.jpg" alt="Range of motion on Nubo's back" />
            <div className="tile-overlay">
              <h3 className="display h32">Range of Motion</h3>
              <p>Reaches the top shelf, kneels for the bottom drawer.</p>
            </div>
          </article>
          <article className="tile photo tile-alum">
            <img src="/assets/gLSHsAiXoBeDO7bNDlSHwQ6ROtc.jpg" alt="Recycled aluminium base plates" />
            <div className="tile-overlay alum">
              <div className="alum-num"><span className="odo" data-value="76">0</span><small>%</small></div>
              <p>Recycled aluminium<br />in the base unit</p>
            </div>
          </article>
        </div>
        <article className="tile tile-review">
          <div className="review-top"><span className="eye">Customer review</span><span className="stars">★★★★☆ 4.5/5</span></div>
          <p className="quote">“It doesn't do tricks. It clears the table, it charges itself, it stays out of the kitchen when we're cooking. My last three smart home purchases wanted applause. This one just wants a dock.”</p>
          <div className="who">
            <img src="/assets/OMxT7VxFxEPzPiX1lkTp6jw51Q.jpg" alt="Joanna Erikson" />
            <div>Joanna Erikson<small>Bergen/Norway</small></div>
            <span className="pill-mini">Beta tester</span>
          </div>
        </article>
        <article className="tile tile-center" id="reserve">
          <div className="tile-top">
            <span className="tile-ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <h3 className="display h48">Bring one home.</h3>
            <p>Reserve now, pay when we ship.</p>
            <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Reserve Nubo</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          </div>
          <img className="tile-kb" src="/assets/vd2qjCg4yrshiOJhibVl4IDPD0.png" alt="Hands typing on a compact mechanical keyboard" />
        </article>
      </div>
    </section>

    <section className="faq">
      <div className="section-head">
        <div className="kicker">
          <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <span className="kicker-label">Before you pre-order</span>
        </div>
        <h2 className="display h110">The <span className="grey">practical</span><br />answers.</h2>
        <p className="lede">Shipping, returns, warranty, compatibility. What our support team gets asked most often, answered without the fluff.</p>
      </div>
      <div className="accordion">
        <div className="acc-item open">
          <button className="acc-btn" type="button"><span className="acc-q">When will Nubo ship?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">Beta units are in homes now. Reserved units ship in allocation order from early next year, and we'll confirm your window before charging anything beyond the deposit.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">Is it safe around children and pets?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">Yes. Its hands are force-sensing and stop at the lightest resistance, so it can hold a child's toy or a full glass without crushing either. It moves slowly near people and keeps to the edges of a room. Quiet hours stop it moving at all when the house is asleep.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">What happens to my data?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">It stays in your house. No cloud footage, no remote access, no third parties. If you sell or return Nubo, one press wipes everything it ever learned.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">Does it need the internet?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">Only for overnight updates. Everything else — perception, decisions, your household model — runs on-device and keeps working if your connection doesn't.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">How long does the battery last, and do I have to charge it?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">About 23 hours on a charge — a full day for most homes. You don't manage it: when it runs low, Nubo returns to its dock on its own, usually before you'd notice it was goe.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">How hard is it to set up?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">Around 42 minutes from box to working. Unpack, place the dock, pair it once, walk it through your home, and let it learn. After that, it's designed to be left alone.</div>
        </div>
        <div className="acc-item">
          <button className="acc-btn" type="button"><span className="acc-q">Do I own it, or is there a subscription?</span><span className="acc-glyph" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle className="g-top" cx="12" cy="6" r="2.3" fill="rgb(38, 38, 38)" /><circle cx="12" cy="12" r="2.3" fill="rgb(38, 38, 38)" /><circle className="g-bot" cx="12" cy="18" r="2.3" fill="rgb(38, 38, 38)" /></svg></span></button>
          <div className="acc-panel">You own it. One purchase, the robot is yours. The only optional cost is the Care plan, and you can add or cancel that whenever you like.</div>
        </div>
      </div>
    </section>

    <section className="stats">
      <div className="stats-grid">
        <article className="tile radar">
          <img src="/assets/YRQ6KPzA3mnznHpTGnPS2O8dk.jpg" alt="Nubo from behind with concentric listening rings" />
          <div className="radar-copy top">
            <div className="stats-num"><span className="odo" data-value="0.2">0.0</span><span className="stats-unit">sec</span></div>
            <p className="stats-kicker">Understands before you finish</p>
          </div>
          <div className="radar-copy bot">
            <h3>Hears the room,<br />not just the command.</h3>
          </div>
        </article>
        <article className="tile stats-main">
          <div>
            <div className="stats-label">
              <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="#fff"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg></span>
              <span>Quick stats</span>
            </div>
            <h2 className="display h52">Designed around <span className="grey">behavior</span>,<br />not a spec sheet.</h2>
          </div>
          <div className="stats-main-foot">
            <p>Most home robots are engineered to impress in a demo.<br />Nubo is engineered to be tolerable on a Tuesday — which turns out to be the harder problem.</p>
            <a className="btn btn-fill scramble" href="cases/"><span className="btn-label">Full specification</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          </div>
        </article>
        <div className="stack-tiles">
          <article className="tile">
            <div className="stats-label">
              <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.4"><rect x="1.5" y="4" width="13" height="9.5" rx="2"/><circle cx="8" cy="8.8" r="2.3"/><path d="M5.8 4.1 7 2.2h2l1.2 1.9"/></svg></span>
              <span>Availability</span>
            </div>
            <div className="stats-num"><span className="odo" data-value="23">0</span><span className="stats-unit">h</span></div>
            <p className="stats-caption stats-caption-sm">A full waking day of help on one overnight charge.</p>
          </article>
          <article className="tile">
            <div className="stats-label">
              <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.4"><path d="M8 1.6c2.2 1.6 3.6 3.8 3.6 6.4 0 2.8-1.6 5.2-3.6 6.4-2-1.2-3.6-3.6-3.6-6.4 0-2.6 1.4-4.8 3.6-6.4z"/><path d="M8 4.2c1.2 1 2 2.4 2 4.1S9.2 11 8 12c-1.2-1-2-2.5-2-4.1s.8-3.1 2-4.1z"/></svg></span>
              <span>Setup</span>
            </div>
            <div className="stats-num"><span className="odo" data-value="42">0</span><span className="stats-unit">min</span></div>
            <p className="stats-caption">From opening the box to the first finished task.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="pricing" id="pricing">
      <div className="section-head split">
        <div>
          <div className="kicker kicker-left">
            <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <span className="kicker-label">Pricing</span>
          </div>
          <h2 className="display h60">Choose how you<br /><span className="grey">bring it home.</span></h2>
          <p className="lede">No tiers locked behind subscriptions. The robot is yours.<br />The care plan is optional.</p>
        </div>
        <div className="pricing-right">
          <p className="lede">Works with what you already have.</p>
          <div className="partners">
            <img src="/assets/uVeVj7mjk9TfsCDtiEXl7m3DqB0.svg" alt="Automation" />
            <img src="/assets/Q0Jv68GOBi7bG1xR17PlcjRElo.svg" alt="Alexa" />
            <img src="/assets/1sPgcyj9kZE210EDGx6GfZDQJaY.svg" alt="Google Home" />
            <img src="/assets/dZcRqf783DOlWAPuBxUs0kLlmRk.svg" alt="NB" />
          </div>
        </div>
      </div>
      <div className="plans">
        <article className="plan">
          <span className="plan-ring" aria-hidden="true"></span>
          <div className="plan-top">
            <div>
              <h3 className="display">Nubo</h3>
              <p className="caps">The standard home system. Everything most homes need.</p>
            </div>
            <video className="plan-face" src="/assets/52N1vwNH5hAFnm14eYBRB6HZc.mp4" loop muted playsInline preload="auto"></video>
          </div>
          <div className="plan-tag">
            <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="#fff"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg></span>
            <span>Essentials</span>
          </div>
          <div className="plan-body">
            <div className="price">€3,290</div>
            <span className="chip">One-time · free shipping</span>
            <ul>
              <li>Routine support</li>
              <li>Home awareness</li>
              <li>3 finishes</li>
              <li>18-hour battery</li>
              <li>2-year warranty</li>
            </ul>
            <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Choose plan</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          </div>
        </article>
        <article className="plan">
          <span className="plan-ring" aria-hidden="true"></span>
          <div className="plan-top">
            <div>
              <h3 className="display">Nubo Pro</h3>
              <p className="caps">Extended sensing, all finishes, longer battery. Recommended for larger homes.</p>
            </div>
            <video className="plan-face" src="/assets/Yg3ihSrZHZqWehvwQ78VpbH84s.mp4" loop muted playsInline preload="auto"></video>
          </div>
          <div className="plan-tag">
            <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="#fff"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg></span>
            <span>Most popular</span>
          </div>
          <div className="plan-body">
            <div className="price">€4,490</div>
            <span className="chip">One-time · free shipping</span>
            <ul>
              <li>Everything in standard</li>
              <li>Carries and fetches</li>
              <li>5 finishes</li>
              <li>23-hour battery</li>
              <li>3-year warranty</li>
              <li>Priority support</li>
            </ul>
            <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Choose plan</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          </div>
        </article>
        <article className="plan">
          <span className="plan-ring" aria-hidden="true"></span>
          <div className="plan-top">
            <div>
              <h3 className="display">Nubo Care</h3>
              <p className="caps">Optional service plan. Software updates, repair, and replacement covered.</p>
            </div>
            <video className="plan-face" src="/assets/m62WVtJSoNF86QzpnMUgL1mPhJY.mp4" loop muted playsInline preload="auto"></video>
          </div>
          <div className="plan-tag">
            <span className="ico dark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="#fff"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1"/><rect x="9" y="9" width="5.5" height="5.5" rx="1"/></svg></span>
            <span>Optional cover</span>
          </div>
          <div className="plan-body">
            <div className="price">€14 <span>/month</span></div>
            <span className="chip">Add to any Nubo</span>
            <ul>
              <li>Annual home check</li>
              <li>Cover damage</li>
              <li>Software updates</li>
              <li>Replacement loan unit</li>
              <li>Add anytime, cancel anytime</li>
            </ul>
            <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Choose plan</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          </div>
        </article>
      </div>
      <div className="int-row">
        <p className="caps">Services integrated with Nubo</p>
        <div className="logo-carousel">
          <div className="logo-track">
            <div className="logo-item"><img src="/assets/JR16Wnm2JkeTHcVPEX3S7WVNFg.svg" alt="Cocon Celeste" /></div>
            <div className="logo-item"><img src="/assets/TJ003JDsSJE7C6VKZUbvHthZ8.svg" alt="Blackwell" /></div>
            <div className="logo-item"><img src="/assets/n1acNoJpE3PitOhxU9zE0YcTwI.svg" alt="Medusa" /></div>
            <div className="logo-item"><img src="/assets/VhTfKnHZtIpMVs3VADrRqOyjGow.svg" alt="Elasticpath" /></div>
            <div className="logo-item"><img src="/assets/7xS8Rt4FjfwULJ8yFtyB8VNKk7g.svg" alt="Stackbit" /></div>
            <div className="logo-item"><img src="/assets/UbaKaav5HnzZM46qW0QTDdfG8.svg" alt="Singlestore" /></div>
            <div className="logo-item"><img src="/assets/71FzDvsSeAYv16imstJKrF3dxUE.svg" alt="Bird" /></div>
            <div className="logo-item"><img src="/assets/7wCZMfnpNUs98Rv9Tg4oZvQS8UQ.svg" alt="Sveltekit" /></div>
          </div>
        </div>
      </div>
    </section>

    <section className="reviews">
      <div className="section-head split">
        <div>
          <div className="kicker kicker-left">
            <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <span className="kicker-label">Living with Nubo</span>
          </div>
          <h2 className="display h60">From the homes already <span className="grey">running Nubo.</span></h2>
          <p className="lede">Real homes have been living with Nubo for months. Here's what the first testers make of it.</p>
        </div>
        <div className="reviews-right">
          <p className="lede">Part of the beta program? Tell us how Nubo is settling in.</p>
          <a className="btn btn-review scramble" href="/contact"><span className="btn-label">Write review</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
        </div>
      </div>
      <div className="rev-wrap">
        <div className="rev-track">
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="4.8 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "20%" } as CSSProperties}></span><span className="rev-score">4.8/5</span></div>
              <p className="rev-quote">"It took the dog three days. It took my husband three weeks."</p>
              <p className="rev-body">We expected a gadget. What we got was closer to a very polite housemate who happens to be excellent at finding lost things. My husband came around — mostly since it started remembering where he leaves his glasses.</p>
            </div>
            <div className="who"><img src="/assets/7bdsxktA8TA18dvBB8qT3K4jBzM.jpg" alt="Portrait of Natalie K." /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Natalie K.<small>Florence, ITALY</small></div></div></div>
          </article>
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="5 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="rev-score">5/5</span></div>
              <p className="rev-quote">"It knows my daughter better than I remembered to."</p>
              <p className="rev-body">She likes the blinds half-open, I like them shut. Nubo picked up on both within a week and stopped asking. I've lived with people who took longer to learn that.</p>
            </div>
            <div className="who"><img src="/assets/qPEWq9SJLmV3AALrm6vUsLuqYA.jpg" alt="Portrait of Joan P." /><div className="who-text"><span className="pill-mini">Verified owner</span><div className="who-meta">Joan P.<small>Göteborg, Sweden</small></div></div></div>
          </article>
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="4.9 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "10%" } as CSSProperties}></span><span className="rev-score">4.9/5</span></div>
              <p className="rev-quote">"My kids named it before I did."</p>
              <p className="rev-body">It's Barnaby now, apparently, and there's no walking that back. What surprised me wasn't the tech, it was how fast it stopped feeling like tech. Three weeks in, it's just the thing that gets the door.</p>
            </div>
            <div className="who"><img src="/assets/2SI2XKuW8EvnDbjuCzCZ0wFDZk.jpg" alt="Portrait of Daniel O." /><div className="who-text"><span className="pill-mini">Early access</span><div className="who-meta">Daniel O.<small>Portland, Oregon</small></div></div></div>
          </article>
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="5 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="rev-score">5/5</span></div>
              <p className="rev-quote">"I braced for another device to babysit."</p>
              <p className="rev-body">Instead I got a system that runs itself. No app I have to open, no light that blinks until I pay attention to it. It does the job and gets out of the room, which is more than I can say for most of my houseguests.</p>
            </div>
            <div className="who"><img src="/assets/FEC00aJXEqbNB2IKFqC4wmuh8.jpg" alt="Portrait of Nao F." /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Nao F.<small>TOKYIO, JAPAN</small></div></div></div>
          </article>
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="4.3 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "70%" } as CSSProperties}></span><span className="rev-score">4.3/5</span></div>
              <p className="rev-quote">"Six weeks in, and the novelty still hasn't worn off — because there wasn't much novelty to wear off."</p>
              <p className="rev-body">It doesn't do tricks. It clears the table, it charges itself, it stays out of the kitchen when we're cooking. My last three smart home purchases wanted applause. This one just wants a dock.</p>
            </div>
            <div className="who"><img src="/assets/ORC919ko6vIFOwECMaQE4MDx3g.jpg" alt="Portrait of Marcus W." /><div className="who-text"><span className="pill-mini">Smart home skeptic</span><div className="who-meta">Marcus W.<small>Austin, Texas</small></div></div></div>
          </article>
          <article className="rev">
            <div className="rev-top">
              <div className="rev-stars" aria-label="4.7 out of 5"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "30%" } as CSSProperties}></span><span className="rev-score">4.7/5</span></div>
              <p className="rev-quote">"The first robot I've owned that doesn't ask to be noticed."</p>
              <p className="rev-body">That's rarer than it sounds. Everything else in this house beeps, glows, or asks me to rate my experience. Nubo has opinions about none of that. It just does the thing and moves on.</p>
            </div>
            <div className="who"><img src="/assets/TdxnsVxJyv3GWx8JjF9eZnotVto.jpg" alt="Portrait of Freya H." /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Freya H.<small>Copenhagen, Denmark</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "20%" } as CSSProperties}></span><span className="rev-score">4.8/5</span></div>
              <p className="rev-quote">"It took the dog three days. It took my husband three weeks."</p>
              <p className="rev-body">We expected a gadget. What we got was closer to a very polite housemate who happens to be excellent at finding lost things. My husband came around — mostly since it started remembering where he leaves his glasses.</p>
            </div>
            <div className="who"><img src="/assets/7bdsxktA8TA18dvBB8qT3K4jBzM.jpg" alt="" /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Natalie K.<small>Florence, ITALY</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="rev-score">5/5</span></div>
              <p className="rev-quote">"It knows my daughter better than I remembered to."</p>
              <p className="rev-body">She likes the blinds half-open, I like them shut. Nubo picked up on both within a week and stopped asking. I've lived with people who took longer to learn that.</p>
            </div>
            <div className="who"><img src="/assets/qPEWq9SJLmV3AALrm6vUsLuqYA.jpg" alt="" /><div className="who-text"><span className="pill-mini">Verified owner</span><div className="who-meta">Joan P.<small>Göteborg, Sweden</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "10%" } as CSSProperties}></span><span className="rev-score">4.9/5</span></div>
              <p className="rev-quote">"My kids named it before I did."</p>
              <p className="rev-body">It's Barnaby now, apparently, and there's no walking that back. What surprised me wasn't the tech, it was how fast it stopped feeling like tech. Three weeks in, it's just the thing that gets the door.</p>
            </div>
            <div className="who"><img src="/assets/2SI2XKuW8EvnDbjuCzCZ0wFDZk.jpg" alt="" /><div className="who-text"><span className="pill-mini">Early access</span><div className="who-meta">Daniel O.<small>Portland, Oregon</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="rev-score">5/5</span></div>
              <p className="rev-quote">"I braced for another device to babysit."</p>
              <p className="rev-body">Instead I got a system that runs itself. No app I have to open, no light that blinks until I pay attention to it. It does the job and gets out of the room, which is more than I can say for most of my houseguests.</p>
            </div>
            <div className="who"><img src="/assets/FEC00aJXEqbNB2IKFqC4wmuh8.jpg" alt="" /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Nao F.<small>TOKYIO, JAPAN</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "70%" } as CSSProperties}></span><span className="rev-score">4.3/5</span></div>
              <p className="rev-quote">"Six weeks in, and the novelty still hasn't worn off — because there wasn't much novelty to wear off."</p>
              <p className="rev-body">It doesn't do tricks. It clears the table, it charges itself, it stays out of the kitchen when we're cooking. My last three smart home purchases wanted applause. This one just wants a dock.</p>
            </div>
            <div className="who"><img src="/assets/ORC919ko6vIFOwECMaQE4MDx3g.jpg" alt="" /><div className="who-text"><span className="pill-mini">Smart home skeptic</span><div className="who-meta">Marcus W.<small>Austin, Texas</small></div></div></div>
          </article>
          <article className="rev" aria-hidden="true">
            <div className="rev-top">
              <div className="rev-stars"><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star on"></span><span className="star" style={{ ["--cut"]: "30%" } as CSSProperties}></span><span className="rev-score">4.7/5</span></div>
              <p className="rev-quote">"The first robot I've owned that doesn't ask to be noticed."</p>
              <p className="rev-body">That's rarer than it sounds. Everything else in this house beeps, glows, or asks me to rate my experience. Nubo has opinions about none of that. It just does the thing and moves on.</p>
            </div>
            <div className="who"><img src="/assets/TdxnsVxJyv3GWx8JjF9eZnotVto.jpg" alt="" /><div className="who-text"><span className="pill-mini">Beta tester</span><div className="who-meta">Freya H.<small>Copenhagen, Denmark</small></div></div></div>
          </article>
        </div>
      </div>
    </section>

    <section className="final">
      <img className="bg" src="/assets/92rcfs7KQc6SbN12YQxjpMpHMo.jpg" alt="Nubo delivering a branded box outside a modern home" />
      <div className="inner">
        <div className="kicker">
          <span className="ico"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
          <span className="kicker-label" style={{ color: "#fff" }}>You'll wonder how the house ran without it.</span>
        </div>
        <h2 className="display h110">Make room for<br />your Nubo.</h2>
        <div className="hero-ctas">
          <a className="btn btn-fill scramble" href="/waitlist"><span className="btn-label">Reserve Nubo</span><img className="btn-dots" src="/assets/b9O43LsocAQ52jvJ9COAErbnr0.svg" alt="" /></a>
          <a className="btn btn-ghost scramble" href="/contact"><span className="btn-label">Get in touch</span><img className="btn-dots" src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></a>
        </div>
      </div>
    </section>
  </main>
</>
  );
}
