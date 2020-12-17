const regazziDev = {};

regazziDev.prependHTMLOnDOM = () => {
    $('body').prepend(`
        <header id="Top">
        <div class="wrapper">
            <h1>
                <div class="Lucas"><a href="#About">Lucas Regazzi</a></div> <div class="isAnArtistCoder">is a <span class="emphatic">web developer</span></div> <div class="basedInBrooklyn">currently based in <span class="emphatic">Brooklyn, USA</span>.</div> <div class="hePrograms">His programmatic</div> <div class="websites"><a href="#Skills">work</a></div> <div class="forArtsSake"><span class="emphatic">expands</span> the <span class="emphatic">accessibility of art</span></div> <div class="throughScreens">through <span class="emphatic">digital means</span>.</div> <div class="ifYoureCurious">Navigate to</div> <div class="viewHisProjects"><a href="#Projects">recent projects</a></div> <div class="toSenseHisVibe">to <span class="emphatic">experience his mission</span> in action,</div> <div class="ya">otherwise</div> <div class="please">feel free to</div> <div class="emailHim"><a href="#Contact">drop him a line</a>.</div>
            </h1>
        </div>
    </header>
    <nav class="scroll"><div class="header"><a href="#Top"><span class="long">Back to the top </span><i class="fas fa-arrow-up"></i></a></div> <div class="aboutMe"><a href="#About">About<span class="long"> Lucas</span></a></div> <div class="skillsIHave"><a href="#Skills">Skills</a></div> <div class="recentProjects"><a href="#Projects"><span class="long">Recent </span>Projects</a></div> <div class="contactMe"><a href="#Contact">Contact</a></div></nav>
    <main>
        <div class="wrapper about" id="About">
            <section class="aboutHeading">
                <img src="./assets/waving.gif" alt="A simplistic depiction of a being regarding a flower.">
            </section>
            <section class="aboutContent">
                <p>Prior to becoming a developer I worked in the art world, in both commercial and non-profit sectors. It was within these roles that I learned how to work in a team, with the goal of supporting culture, making art accessible, and forming relationships with the public for the greater good of art.</p>
            </section>
        </div>
        <div class="wrapper skills" id="Skills">
            <div class="skills">
                <div class="list">
                    <i class="fi fi-html5">
                        <div class="type">HTML 5</div>
                    </i>
                    <i class="fi fi-css3">
                        <div class="type">CSS 3</div>
                    </i>
                    <i class="fi fi-java">
                        <div class="type">Javascript</div>
                    </i>
                    <i class="fi fi-jquery">
                        <div class="type">jQuery</div>
                    </i>
                    <i class="fi fi-sass">
                            <div class="type">Sass</div>
                    </i>
                    <i class="fi fi-react">
                        <div class="type">React</div>
                    </i>
                    <i class="fi fi-nodejs">
                        <div class="type">Node.js</div>
                    </i>
                    <i class="fi fi-npm">
                        <div class="type">npm</div>
                    </i>
                </div>
            </div>
        </div>
        <div class="wrapper projects" id="Projects">
            <div class="project1">
                <section class="projectHeading">
                    <div class="desktopWindow"><img src="assets/project3Gif.gif"></div>
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
                    <div class="desktopWindow"><img src="assets/project5.gif"></div>
                </section>
            </div>
            <div class="project3">
                <section class="projectHeading">
                    <div class="desktopWindow"><img src="assets/project6Clarke.gif"></div>
                </section>
                <section class="projectContent">
                    <div class="contentTitle">
                        <h2>What's the weather?</h2>
                    </div>
                    <p>I pair-programmed this application using jQuery.</p>
                    <p>It pulls information from the Open Weather API to visualize the weather conditions in the user’s specified location.</p>
                </section>
            </div>
        </div>
    </main>
    <section class="contactForm" id="Contact">
        <div class="wrapper">
            <form id="contact">
                <label>Drop me a line</label>
                <input type="email" placeholder="What's your email address?"/>
                <input type="text" placeholder="Do you have a phone number I can reach you at?"/>
                <textarea id="message" for="contact">Introduce yourself! I love meeting new people.</textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
    `);
}

regazziDev.stickyMenu = () => {
    let positionAfterHeader = ($('#About').offset().top - 250);
    let positionAfterBio = ($('#Skills').offset().top - 250);
    let positionAfterSkills = ($('#Projects').offset().top - 250);
    let positionAfterProjects = ($('#Contact').offset().top - 300);
    const horizontalScreenSize = window.innerWidth;
    $(window).scroll(function () {
        if ($(window).scrollTop() > positionAfterHeader) {
            $('nav.scroll').addClass('visible');
        } else if ($(window).scrollTop() < positionAfterHeader && $('nav.scroll').hasClass('visible')) {
            $('nav.scroll').removeClass('visible');
        }
    });
    if (horizontalScreenSize >= 801) {
        positionAfterHeader = ($('#About').offset().top - 100);
        positionAfterBio = ($('#Skills').offset().top - 100);
        positionAfterSkills = ($('#Projects').offset().top - 100);
        positionAfterProjects = ($('#Contact').offset().top - 100);
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