export default class routeNoLink {
  LASTWELCOMESCREEN =
    '<div class="welcomeHalfone fancyDiv bg-light"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/30164b183734465.6544ea924110a.jpg" alt=""></div><div class="welcomeHalftwo p-5" style="background:white !important;"><h1 class="p-2">  <span class="text-muted">Discorver</span> and Find Your Perfect  <span class="text-muted">Dream House</span></h1><p>exQ App search to discorver the most suitable place for you to stay.</p><button class="text-muted p-3 py-4" style="border-radius: 100px;">Let\'s Get Started</button><p class="pb">  Already have an account? <a href="" class="text-muted"> Sign In</a></p><br></div>';
  FIRSTWELCOMESCREEN =
  '<div class="welcomeHalfone fancyDiv bg-light"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/30164b183734465.6544ea924110a.jpg" alt=""></div><div class="welcomeHalftwo p-5" style="background:white !important;"><h1 class="p-2">  <span class="text-muted">Spend</span> Base On Your Budget  <span class="text-muted">Dream House</span></h1><p>exQ App search to discorver the most suitable price base on your budget.</p><button class="text-muted p-3 py-4" style="border-radius: 100px;">Let\'s Get Started</button><p class="pb">  Already have an account? <a href="" class="text-muted"> Sign In</a></p><br></div>';
  SECONDWELCOMESCREEN =
  '<div class="welcomeHalfone fancyDiv bg-light"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/30164b183734465.6544ea924110a.jpg" alt=""></div><div class="welcomeHalftwo p-5" style="background:white !important;"><h1 class="p-2">  <span class="text-muted">Instalment</span> You Can Rent On Instalment With No Disturb <span class="text-muted">Dream House</span></h1><p>exQ App give you access to rent house on half payment complete later.</p><button class="text-muted p-3 py-4" style="border-radius: 100px;">Let\'s Get Started</button><p class="pb">  Already have an account? <a href="" class="text-muted"> Sign In</a></p><br></div>';

  constructor(screenName) {
    this.welcome = document.getElementById("welcome");
    this.screenName = screenName;
    switch (this.screenName) {
      case 0:
        this.welcome.innerHTML = this.FIRSTWELCOMESCREEN;
        break;
      case 1:
        this.welcome.innerHTML = this.SECONDWELCOMESCREEN;
        break;
      case 2:
        this.welcome.innerHTML = this.LASTWELCOMESCREEN;
        break;

      default:
        this.welcome.innerHTML = this.LASTWELCOMESCREEN;
        break;
    }
  }
}
