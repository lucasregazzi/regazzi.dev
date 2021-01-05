const regazziDev = {};

regazziDev.prependHTMLOnDOM = () => {
    $('body').prepend(`
        <nav class="scroll">
        <ul>
            <li class="header"><a href="#Top" id="initialTab" tabindex="0"><span class="long">Back to the top </span><i class="fas fa-arrow-up"></i></a></li>
            <li class="aboutMe"><a href="#About" tabindex="0">About<span class="long"> Lucas</span></a></li>
            <li class="skillsIHave"><a href="#Skills" tabindex="0">Skills</a></li>
            <li class="recentProjects"><a href="#Projects" tabindex="0"><span class="long">Recent </span>Projects</a></li>
            <li class="contactMe"><a href="#Contact" tabindex="0">Contact</a></li>
            <ul>
    </nav>
    <header id="Top">
        <div class="wrapper">
            <h1>
                <div class="Lucas"><a href="#About" title="Clicking this navigates to the about section of this webpage.">Lucas Regazzi</a></div>
                <div class="isAnArtistCoder">is a web developer</div>
                <div class="basedInBrooklyn">currently based in New York, USA.</div>
                <div class="hePrograms">His programmatic</div>
                <div class="websites"><a href="#Skills" title="Clicking this navigates to the skills section of this webpage.">work</a></div>
                <div class="forArtsSake"><span class="emphatic">expands</span> the <span class="emphatic">accessibility of art</span></div>
                <div class="throughScreens">through <span class="emphatic">digital means</span>.</div>
                <div class="ifYoureCurious">Navigate to</div>
                <div class="viewHisProjects"><a href="#Projects" title="Clicking this navigates to the projects section of this webpage.">recent projects</a></div>
                <div class="toSenseHisVibe">to experience his mission in action,</div>
                <div class="ya">otherwise</div>
                <div class="please">feel free to</div>
                <div class="peruseCV"><span class="restyle">peruse</span> his <a href="https://drive.google.com/file/d/1yungmOtzML77saO9fva-XzP-61-axfyZ/view" target="_blank" title="Clicking this navigates to an externally hosted C.V. .pdf document">C.V.</a> or</div>
                <div class="emailHim"><a href="#Contact" title="Clicking this navigates to the contact form on this webpage.">drop him a line</a>.</div>
            </h1>
        </div>
    </header>
    <main>
        <div class="wrapper about" id="About">
            <section class="aboutHeading">
                <img src="./assets/sunnyWaveFinal.gif" alt="An illustration of me waving from my home office." title="An actual picture of me waving to you from my home office.">
            </section>
            <section class="aboutContent">
                <p>Hey! Lucas here. Prior to becoming a developer I worked in the art world, in both commercial and non-profit sectors. When I'm not designing and creating accessible, beautiful web-based interfaces, I'm in my studio, making paintings, drawings and poems. You can view that portfolio of work <a href="http://lucasregazzi.work" target="_blank" title="Clicking this navigates to my distinctive art portfolio.">here</a>.</p>
            </section>
        </div>
        <div class="wrapper skills" id="Skills">
            <div class="skills">
                <div class="list">
                    <i class="fi fi-universal-acces" title="This icon represents accessibility standards.">
                        <div class="type">Accessibility</div>
                    </i>
                    <i class="fi fi-mobile-alt" title="This icon represents mobile/desktop web design responsiveness.">
                        <div class="type">Responsive Design</div>
                    </i>
                    <i class="fi fi-html5" title="This is the logo for HTML 5.">
                        <div class="type">HTML 5</div>
                    </i>
                    <i class="fi fi-css3" title="This is the logo for CSS 3.">
                        <div class="type">CSS 3</div>
                    </i>
                    <i class="devicon-javascript-plain" title="This is the logo for JavaScript.">
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
                    <i class="fi fi-github" title="This is the logo for Github.">
                        <div class="type">Github</div>
                    </i>
                </div>
            </div>
        </div>
        <div class="wrapper projects" id="Projects">
            <div class="project1">
                <section class="projectHeading">
                    <div class="desktopWindow"><a href="https://lucasregazzi.github.io/lucasRegazziProject3/"
                            target="_blank" title="Click here to navigate to the live site for this application."><img
                                src="assets/project3Gif.gif"
                                alt="This is a gif that illustrates my still-life painting application."></a></div>
                </section>
                <section class="projectContent">
                    <div class="contentTitle">
                        <h2>Still-life painting generator</h2>
                    </div>
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
                    <div class="desktopWindow"><a href="https://lucasregazzi.github.io/project5/" target="_blank"
                            title="Click here to navigate to the live site for this application."><img
                                src="assets/project5.gif"
                                alt="This is a gif that illustrates my application which functions as an organizational tool for curators."></a>
                    </div>
                </section>
            </div>
            <div class="project3">
                <section class="projectHeading">
                    <div class="desktopWindow"><a href="https://lucasclarkecollab.github.io/lucasClarkeProject4/"
                            target="_blank" title="Click here to navigate to the live site for this application."><img
                                src="assets/project6Clarke.gif"
                                alt="This is a gif that illustrates a weather application I built with another programmer."></a>
                    </div>
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
                <input type="email" id="email" placeholder="What's your email address?" name="_replyto" />
                <label for="phone" class="srOnly">Write your phone number below</label>
                <input type="text" placeholder="Do you have a phone number I can reach you at?" name="phone" id="phone" />
                <label for="message" class="srOnly">Introduce yourself! I love meeting new people.</label>
                <textarea name="message" placeholder="Introduce yourself! I love meeting new people."
                    id="message"></textarea>
                <button type="submit">Send</button>
                <div class="contactOtherwise">
                    <p>Otherwise, email me at <a href="mailto:hello@regazzi.dev" title="Clicking this will open your mail app to write me.">hello@regazzi.dev</a>, or find me on <a href="https://twitter.com/regazzidev" target="_blank" title="Clicking this navigates to my Twitter profile.">Twitter</a>, <a href="https://www.linkedin.com/in/lucasregazzi/" target="_blank" title="Clicking this navigates to my LinkedIn profile.">LinkedIn</a> and <a href="https://github.com/lucasregazzi" target="_blank" title="Clicking this navigates to my Github profile.">Github</a>.
                </div>
                <div class="copyright">
                    <p>2021 © Lucas Regazzi</p>
                </div>
            </form>
        </div>
    </section>
    `);
    $('#initialTab').focus();
}

regazziDev.checkPositions = () => {
    regazziDev.positionAfterHeader = ($('#About').offset().top - 100);
    regazziDev.positionAfterBio = ($('#Skills').offset().top - 200);
    regazziDev.positionAfterSkills = ($('#Projects').offset().top - 250);
    regazziDev.positionAfterProjects = ($('#Contact').offset().top - 250);
}

regazziDev.setEmphasis = (about, skills, projects, contact) => {
    regazziDev.setEmphasisItem(about, '.aboutMe');
    regazziDev.setEmphasisItem(skills, '.skillsIHave');
    regazziDev.setEmphasisItem(projects, '.recentProjects');
    regazziDev.setEmphasisItem(contact, '.contactMe');
}

regazziDev.setEmphasisItem = (flag, item) => {
    if (flag) $(item).addClass('emphasized');
    else $(item).removeClass('emphasized');
}

regazziDev.stickyMenu = () => {
    $(window).scroll(function () {
        regazziDev.checkPositions();
        //window scroll is evaluated to trigger the visibility of the nav menu
        if ($(window).scrollTop() > regazziDev.positionAfterHeader) {
            $('nav.scroll').addClass('visible');
        } else if ($(window).scrollTop() < regazziDev.positionAfterHeader && $('nav.scroll').hasClass('visible')) {
            $('nav.scroll').removeClass('visible');
        }
        //once visible, this window scroll evaluates where exactly the user is on the page to emphasize the correct heading for each section
        if ($(window).scrollTop() > regazziDev.positionAfterHeader && $(window).scrollTop() < regazziDev.positionAfterBio) {
            regazziDev.setEmphasis(true, false, false, false);
        } else if ($(window).scrollTop() > regazziDev.positionAfterBio && $(window).scrollTop() < regazziDev.positionAfterSkills) {
            regazziDev.setEmphasis(false, true, false, false);
        } else if ($(window).scrollTop() > regazziDev.positionAfterSkills && $(window).scrollTop() < regazziDev.positionAfterProjects) {
            regazziDev.setEmphasis(false, false, true, false);
        } else if ($(window).scrollTop() > regazziDev.positionAfterProjects) {
            regazziDev.setEmphasis(false, false, false, true);
        }
    })
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
        }
        else {
            $('body').css('color', '#fff');
            $('.about img').addClass('invert');
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