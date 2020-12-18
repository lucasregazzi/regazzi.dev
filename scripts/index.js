const regazziDev = {};

regazziDev.prependHTMLOnDOM = () => {
    $('body').prepend(`
    <nav class="scroll"><div class="header"><a href="#Top" id="initialTab" tabindex="0"><span class="long">Back to the top </span><i class="fas fa-arrow-up"></i></a></div> <div class="aboutMe"><a href="#About" tabindex="0">About<span class="long"> Lucas</span></a></div> <div class="skillsIHave"><a href="#Skills" tabindex="0">Skills</a></div> <div class="recentProjects"><a href="#Projects" tabindex="0"><span class="long">Recent </span>Projects</a></div> <div class="contactMe"><a href="#Contact" tabindex="0">Contact</a></div></nav>
        <header id="Top">
        <div class="wrapper">
            <h1>
                <div class="Lucas"><a href="#About" title="Clicking this navigates to the about section of this webpage">Lucas Regazzi</a></div> <div class="isAnArtistCoder">is a <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" title="Clicking this navigates to the wikipedia page for Web Developer">web developer</a></div> <div class="basedInBrooklyn">currently based in <a href="https://en.wikipedia.org/wiki/Brooklyn" target="_blank" title="Clicking this navigates to the wikipedia page for Brooklyn, New York">Brooklyn, USA</a>.</div> <div class="hePrograms">His programmatic</div> <div class="websites"><a href="#Skills">work</a></div> <div class="forArtsSake"><span class="emphatic">expands</span> the <span class="emphatic">accessibility of art</span></div> <div class="throughScreens">through <span class="emphatic">digital means</span>.</div> <div class="ifYoureCurious">Navigate to</div> <div class="viewHisProjects"><a href="#Projects">recent projects</a></div> <div class="toSenseHisVibe">to experience his mission in action,</div> <div class="ya">otherwise</div> <div class="please">feel free to</div> <div class="emailHim"><a href="#Contact" title="Clicking this navigates to the contact form on this webpage">drop him a line</a>.</div>
            </h1>
        </div>
    </header>
    <main>
        <div class="wrapper about" id="About">
            <section class="aboutHeading">
                <img src="./assets/sunnyWaveFinal.gif" alt="An illustration of me waving from my home office.">
            </section>
            <section class="aboutContent">
                <p>Hey! Prior to becoming a developer I worked in the art world, in both commercial and non-profit sectors. When I'm not designing or creating on the web, I'm in my studio making paintings, drawings and poems. You can view that portfolio <a href="http://lucasregazzi.work" target="_blank" title="A link to my art portfolio.">here</a>.</p>
            </section>
        </div>
        <div class="wrapper skills" id="Skills">
            <div class="skills">
                <div class="list">
                    <i class="fi fi-html5" title="This is the logo for HTML 5.">
                        <div class="type">HTML 5</div>
                    </i>
                    <i class="fi fi-css3" title="This is the logo for CSS 3.">
                        <div class="type">CSS 3</div>
                    </i>
                    <i class="fi fi-java" title="This is the logo for Javascript.">
                        <div class="type">Javascript</div>
                    </i>
                    <i class="fi fi-jquery" title="This is the logo for jQuery.">
                        <div class="type">jQuery</div>
                    </i>
                    <i class="fi fi-sass" title="This is the logo for SCSS/SASS.">
                            <div class="type">Sass</div>
                    </i>
                    <i class="fi fi-react" title="This is the logo for React.">
                        <div class="type">React</div>
                    </i>
                    <i class="fi fi-nodejs" title="This is the logo for Node.js.">
                        <div class="type">Node.js</div>
                    </i>
                    <i class="fi fi-npm" title="This is the logo for npm.">
                        <div class="type">npm</div>
                    </i>
                </div>
            </div>
        </div>
        <div class="wrapper projects" id="Projects">
            <div class="project1">
                <section class="projectHeading">
                    <div class="desktopWindow"><a href="https://lucasregazzi.github.io/lucasRegazziProject3/" target="_blank" title="Click here to navigate to the live site for this application."><img src="assets/project3Gif.gif" alt="This is a gif that illustrates my still-life painting application."></a></div>
                </section>
                <section class="projectContent">
                    <div class="contentTitle"><h2>Still-life painting generator</h2></div>
                    <p>I built this application using jQuery.</p>
                    <p>Its interface facilitates the selection of two objects from two seperate lists to compose a user-generated still-life painting.</p>
                </section>
            </div>
            <div class="project2">
                <section class="projectContent">
                    <div class="contentTitle">
                        <h2>A new curatorial tool</h2>
                    </div>
                    <p>I built this application using React and Firebase.</p>
                    <p>It saves and organizes curatorial projects submitted by the user.</p>
                </section>
                <section class="projectHeading">
                    <div class="desktopWindow"><a href="https://lucasregazzi.github.io/project5/" target="_blank" title="Click here to navigate to the live site for this application."><img src="assets/project5.gif" alt="This is a gif that illustrates my application which functions as an organizational tool for curators."></a></div>
                </section>
            </div>
            <div class="project3">
                <section class="projectHeading">
                    <div class="desktopWindow"><a href="https://lucasclarkecollab.github.io/lucasClarkeProject4/" target="_blank" title="Click here to navigate to the live site for this application."><img src="assets/project6Clarke.gif" alt="This is a gif that illustrates a weather application I built with another programmer."></a></div>
                </section>
                <section class="projectContent">
                    <div class="contentTitle">
                        <h2>What's the weather?</h2>
                    </div>
                    <p>I pair-programmed this application using jQuery and restful APIs.</p>
                    <p>It pulls information from the Open Weather API to visualize the weather conditions in the user’s specified location.</p>
                </section>
            </div>
        </div>
    </main>
    <section class="contactForm" id="Contact">
        <div class="wrapper">
            <form action="https://formspree.io/f/mgepngey" method="POST" id="contact">
                <label for="contact">Drop me a line</label>
                <label for="email" class="srOnly">Write your email below</label>
                <input type="email" id="email" placeholder="What's your email address?" name="_replyto"/>
                <label for="phone" class="srOnly">Write your phone number below</label>
                <input type="text" placeholder="Do you have a phone number I can reach you at?" name="phone" id="phone"/>
                <label for="message" class="srOnly">Introduce yourself! I love meeting new people.</label>
                <textarea name="message" placeholder="Introduce yourself! I love meeting new people." id="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
    `);
    $('#initialTab').focus();
}


regazziDev.stickyMenu = () => {
    regazziDev.onWindowListen = () => {
        window.addEventListener("resize", function() {
            let horizontalScreenSize = window.innerWidth;
            console.log(horizontalScreenSize);
            return horizontalScreenSize;
        });
    }
    let positionAfterHeader = ($('#About').offset().top - 250);
    let positionAfterBio = ($('#Skills').offset().top - 250);
    let positionAfterSkills = ($('#Projects').offset().top - 250);
    let positionAfterProjects = ($('#Contact').offset().top - 250);
    let horizontalScreenSize = regazziDev.onWindowListen();
    $(window).scroll(function () {
        if ($(window).scrollTop() > positionAfterHeader) {
            $('nav.scroll').addClass('visible');
        } else if ($(window).scrollTop() < positionAfterHeader && $('nav.scroll').hasClass('visible')) {
            $('nav.scroll').removeClass('visible');
        }
    });
    if (horizontalScreenSize >= 801) {
        positionAfterHeader = ($('#About').offset().top);
        positionAfterBio = ($('#Skills').offset().top);
        positionAfterSkills = ($('#Projects').offset().top);
        positionAfterProjects = ($('#Contact').offset().top);
            $(window).scroll(function () {
            if ($(window).scrollTop() > positionAfterHeader && $(window).scrollTop() < positionAfterBio) {
                $('.skillsIHave').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.aboutMe').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterBio && $(window).scrollTop() < positionAfterSkills) {
                $('.aboutMe').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.skillsIHave').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterSkills && $(window).scrollTop() < positionAfterProjects) {
                $('.aboutMe').removeClass('emphasized');
                $('.skillsIHave').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.recentProjects').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterProjects) {
                $('.aboutMe').removeClass('emphasized');
                $('.skillsIHave').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').addClass('emphasized');
            }
        })
    } else {
        $(window).scroll(function () {
            if ($(window).scrollTop() > positionAfterHeader && $(window).scrollTop() < positionAfterBio) {
                $('.skillsIHave').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.aboutMe').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterBio && $(window).scrollTop() < positionAfterSkills) {
                $('.aboutMe').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.skillsIHave').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterSkills && $(window).scrollTop() < positionAfterProjects) {
                $('.aboutMe').removeClass('emphasized');
                $('.skillsIHave').removeClass('emphasized');
                $('.contactMe').removeClass('emphasized');
                $('.recentProjects').addClass('emphasized');
            } else if ($(window).scrollTop() > positionAfterProjects) {
                $('.aboutMe').removeClass('emphasized');
                $('.skillsIHave').removeClass('emphasized');
                $('.recentProjects').removeClass('emphasized');
                $('.contactMe').addClass('emphasized');
            }
        })
    }
}

regazziDev.backgroundChangeOnHover = () => {
    $('body').mousemove(function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let r = Math.floor(x / 3);
        let g = Math.floor(y / 2);
        let b = Math.floor(y / 5);
        let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        $('body').css('background-color', color);
        let hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );
        if (hsp > 127.5) {
            $('body').css('color', '#000');
            $('.about img').removeClass('invert');
            $('form').removeClass('invert');
        }
        else {
            $('body').css('color', '#fff');
            $('.about img').addClass('invert');
            $('form').addClass('invert');
        }
    });
}

regazziDev.init = () => {
    regazziDev.prependHTMLOnDOM();
    regazziDev.stickyMenu();
    regazziDev.backgroundChangeOnHover();
}

$(function () {
    regazziDev.init();
});