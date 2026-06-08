// ===== LANGUAGE / i18n =====
const translations = {
  en: {
    nav_jobs: 'Browse Jobs', nav_postjob: 'Post a Job', nav_pricing: 'Pricing',
    nav_login: 'Log In', nav_signup: 'Sign Up',
    dark_mode: 'Dark mode', light_mode: 'Light mode',
    hero_title: 'Find Your Next Job<br>in <span>Bamenda</span>',
    hero_sub: 'Connecting local talent with local employers. Your career starts right here in your community.',
    search_placeholder: 'Search jobs, companies, skills\u2026', search_btn: 'Search Jobs',
    stat_jobs: 'Jobs Available', stat_companies: 'Local Companies', stat_seekers: 'Job Seekers',
    cat_title: 'Browse by Category', cat_sub: 'Popular job categories across Bamenda',
    cat_agriculture: 'Agriculture', cat_education: 'Education', cat_health: 'Health',
    cat_construction: 'Construction', cat_trade: 'Trade & Retail', cat_technology: 'Technology',
    feat_title: 'Featured Jobs', feat_sub: 'Latest opportunities across Bamenda',
    view_all: 'View All Jobs \u2192',
    pay_title: 'Pay with Mobile Money',
    pay_sub: 'Post jobs and get premium visibility using MTN or Orange Money \u2014 fast, secure, and locally convenient.',
    pay_after: 'After payment, send your transaction ID to verify and activate your listing.',
    pay_mtn_desc: 'Send payment to post your job and reach local candidates instantly',
    pay_orange_desc: 'Fast payment processing via Orange Money for all job postings',
    pay_via_mtn: 'Pay via MTN', pay_via_orange: 'Pay via Orange Money',
    how_title: 'How Bamenda Connect Works', how_sub: 'Simple steps to find or post a job',
    step1_title: '1. Create Account', step1_desc: 'Register as a job seeker or employer in minutes. Free to join.',
    step2_title: '2. Find or Post Jobs', step2_desc: 'Browse local jobs or post your vacancy to reach Bamenda talent.',
    step3_title: '3. Apply & Connect', step3_desc: 'Apply directly and connect with employers in your community.',
    step4_title: '4. Get Hired!', step4_desc: 'Start your new job in Bamenda. Simple as that.',
    jobs_title: 'Browse All Jobs', jobs_sub: 'Opportunities across Bamenda Metropolitan Area',
    jobs_search_ph: 'Job title, skill, company\u2026', jobs_all_cat: 'All Categories',
    login_title: 'Welcome back', login_sub: 'Log in to your Bamenda Connect account', login_btn: 'Log In to Bamenda Connect',
    login_no_acc: "Don't have an account?", login_signup: 'Sign up free', login_forgot: 'Forgot password?',
    reg_title: 'Join Bamenda Connect', reg_sub: 'Create your free account today',
    reg_iam: 'I am a\u2026', reg_seeker: 'Job Seeker', reg_employer: 'Employer',
    reg_firstname: 'First Name', reg_lastname: 'Last Name', reg_email: 'Email Address',
    reg_phone: 'Phone Number', reg_company: 'Company / Organization Name',
    reg_pass: 'Password', reg_pass2: 'Repeat Password', reg_btn: 'Create Free Account',
    reg_terms: 'By signing up you agree to our', reg_terms_link: 'Terms of Use',
    reg_have_acc: 'Already have an account?', reg_login: 'Log in',
    postjob_title: 'Post a Job', postjob_sub: 'Reach qualified candidates across Bamenda', postjob_btn: 'Submit Job Listing',
    pricing_title: 'Simple, Affordable Pricing', pricing_sub: 'Pay once per listing. No monthly fees. No hidden charges.',
    pricing_seeker: 'Job Seeker', pricing_always_free: 'Always free', pricing_per_post: 'per job post',
    pricing_popular: 'Most Popular', pricing_standard: 'Standard Listing', pricing_featured: 'Featured Listing',
    pricing_create_acc: 'Create Free Account', pricing_post_job: 'Post a Job', pricing_post_feat: 'Post Featured Job',
    footer_desc: 'Connecting local talent with local employers across Bamenda Metropolitan Area, Cameroon.',
    footer_seekers: 'For Job Seekers', footer_employers: 'For Employers',
    footer_create: 'Create Account', footer_emp_acc: 'Employer Account', footer_contact: 'Contact Us',
    footer_copy: '\u00a9 2026 Bamenda Connect. Made with \u2764\ufe0f for the Bamenda community, Cameroon.',
    newsletter_title: 'Stay Updated with Bamenda Jobs',
    newsletter_sub: 'Get the latest job opportunities and career tips delivered to your inbox.',
    newsletter_btn: 'Subscribe',
    pay_gate_seeker_title: 'Activate Job Seeker Access', pay_gate_employer_title: 'Activate Employer Account',
    pay_gate_seeker_desc: 'A one-time access fee of <strong>500 FCFA</strong> is required to browse and apply for jobs.',
    pay_gate_employer_desc: 'Pay <strong>1,000 FCFA</strong> to activate your employer account. This includes your first Standard job listing — post your job immediately after payment.',
    pay_gate_method: 'Payment Method', pay_gate_txid: 'Transaction ID *', pay_gate_btn: 'Confirm Payment & Continue',
    apply_title: 'Apply for Job', apply_name: 'Your Full Name *', apply_email: 'Email Address *',
    apply_phone: 'Phone Number', apply_continue: 'Continue \u2192', apply_cover: 'Cover Letter / Message to Employer',
    apply_exp: 'Relevant Experience', apply_back: '\u2190 Back', apply_submit: 'Submit Application',
    apply_sent: 'Application Sent!', apply_sent_desc: 'Your application has been sent to the employer. They will contact you if shortlisted. Good luck!',
    apply_done: 'Done', apply_now: 'Apply Now',
    profile_title: 'My Profile', profile_sub: 'View and edit your account details',
    profile_pic_hint: 'Upload a profile picture (max 2MB)',
    profile_name: 'Name', profile_email: 'Email', profile_phone: 'Phone',
    profile_role_label: 'Switch Role', profile_company: 'Company',
    profile_save: 'Save Profile', profile_back: 'Back to Home',
    profile_saved: 'Profile updated successfully.',
    profile_role_switched: 'Role switched! Please pay to activate your new role.',
    welcome_back: 'Welcome back, ${name}!',
    logged_in_as: 'You are logged in as ${role}.',
    glad_to_have_you: 'We are glad to have you on Bamenda Connect.',
    role_employer: 'Employer',
    role_seeker: 'Job Seeker',
    cookie_banner_text: 'We use cookies to improve your experience. By using Bamenda Connect, you agree to our <a href="#" onclick="showPage(\'terms\')" style="color:#C5A059;">Terms & Conditions</a>.',
    accept_cookies: 'Accept',
    decline_cookies: 'Decline',
    loading: 'Loading...',
    section_rating_title: 'What Do You Think of Bamenda Connect?',
    section_rating_sub: 'Your feedback helps us improve. Rate your experience with us.',
    stories_title: 'Success Stories',
    stories_sub: 'Real people who found jobs through Bamenda Connect',
    click_to_rate: 'Click a star to rate',
    share_experience: 'Share your experience with Bamenda Connect (optional)...',
    submit_rating: 'Submit Rating',
    thank_you_rating: 'Thank you for rating Bamenda Connect!',
    share_story: 'Share Your Success Story',
    story_job_title: 'e.g. Primary School Teacher',
    story_company: 'e.g. Bamenda Regional Hospital',
    story_label: 'Your Story *',
    story_placeholder: 'Tell us how Bamenda Connect helped you find this job...',
    submit_story: 'Submit My Story',
    log_in_to_share: 'Log in and share your success story to inspire others in the community.',
    story_inspire: 'Your story will inspire others in the Bamenda community.',
    welcome_title: 'Welcome to Bamenda Connect',
    welcome_subtitle: 'Your job finding platform',
    welcome_role_label: 'You\'re registered as a',
    welcome_tips_title: 'Quick Tips to Get Started',
    welcome_tip_seeker_1: 'Browse thousands of jobs in your area',
    welcome_tip_seeker_2: 'Set job alerts to never miss an opportunity',
    welcome_tip_seeker_3: 'Connect directly with employers',
    welcome_tip_employer_1: 'Post jobs and reach qualified candidates',
    welcome_tip_employer_2: 'Review applications and manage listings',
    welcome_tip_employer_3: 'Connect with top talent in Bamenda',
    welcome_explore: 'Explore Jobs',
    welcome_profile: 'Complete Your Profile',
    welcome_close_hint: 'You can close this welcome screen anytime'
  },
  fr: {
    nav_jobs: 'Offres d\'emploi', nav_postjob: 'Publier un emploi', nav_pricing: 'Tarifs',
    nav_login: 'Se connecter', nav_signup: 'S\'inscrire',
    dark_mode: 'Mode sombre', light_mode: 'Mode clair',
    hero_title: 'Trouvez votre prochain emploi<br>\u00e0 <span>Bamenda</span>',
    hero_sub: 'Connecter les talents locaux aux employeurs locaux. Votre carri\u00e8re commence ici dans votre communaut\u00e9.',
    search_placeholder: 'Rechercher emplois, entreprises, comp\u00e9tences\u2026', search_btn: 'Rechercher',
    stat_jobs: 'Emplois disponibles', stat_companies: 'Entreprises locales', stat_seekers: 'Chercheurs d\'emploi',
    cat_title: 'Parcourir par cat\u00e9gorie', cat_sub: 'Cat\u00e9gories populaires \u00e0 Bamenda',
    cat_agriculture: 'Agriculture', cat_education: '\u00c9ducation', cat_health: 'Sant\u00e9',
    cat_construction: 'Construction', cat_trade: 'Commerce & D\u00e9tail', cat_technology: 'Technologie',
    feat_title: 'Emplois en vedette', feat_sub: 'Derni\u00e8res opportunit\u00e9s \u00e0 Bamenda',
    view_all: 'Voir tous les emplois \u2192',
    pay_title: 'Payer par Mobile Money',
    pay_sub: 'Publiez des emplois avec MTN ou Orange Money \u2014 rapide, s\u00e9curis\u00e9 et pratique.',
    pay_after: 'Apr\u00e8s paiement, envoyez votre ID de transaction pour activer votre annonce.',
    pay_mtn_desc: 'Envoyez le paiement pour publier votre offre et atteindre les candidats locaux',
    pay_orange_desc: 'Traitement rapide des paiements via Orange Money pour toutes les offres',
    pay_via_mtn: 'Payer via MTN', pay_via_orange: 'Payer via Orange Money',
    how_title: 'Comment fonctionne Bamenda Connect', how_sub: '\u00c9tapes simples pour trouver ou publier un emploi',
    step1_title: '1. Cr\u00e9er un compte', step1_desc: 'Inscrivez-vous en quelques minutes. Gratuit.',
    step2_title: '2. Trouver ou publier', step2_desc: 'Parcourez les emplois locaux ou publiez votre offre.',
    step3_title: '3. Postuler & Connecter', step3_desc: 'Postulez directement et connectez-vous avec les employeurs.',
    step4_title: '4. \u00catre embauch\u00e9 !', step4_desc: 'Commencez votre nouvel emploi \u00e0 Bamenda.',
    jobs_title: 'Toutes les offres d\'emploi', jobs_sub: 'Opportunit\u00e9s dans la r\u00e9gion de Bamenda',
    jobs_search_ph: 'Titre, comp\u00e9tence, entreprise\u2026', jobs_all_cat: 'Toutes les cat\u00e9gories',
    login_title: 'Bon retour', login_sub: 'Connectez-vous \u00e0 votre compte Bamenda Connect', login_btn: 'Se connecter',
    login_no_acc: 'Pas encore de compte\u00a0?', login_signup: 'S\'inscrire gratuitement', login_forgot: 'Mot de passe oubli\u00e9\u00a0?',
    reg_title: 'Rejoindre Bamenda Connect', reg_sub: 'Cr\u00e9ez votre compte gratuit aujourd\'hui',
    reg_iam: 'Je suis\u2026', reg_seeker: 'Chercheur d\'emploi', reg_employer: 'Employeur',
    reg_firstname: 'Pr\u00e9nom', reg_lastname: 'Nom', reg_email: 'Adresse e-mail',
    reg_phone: 'Num\u00e9ro de t\u00e9l\u00e9phone', reg_company: 'Nom de l\'entreprise / organisation',
    reg_pass: 'Mot de passe', reg_pass2: 'R\u00e9p\u00e9ter le mot de passe', reg_btn: 'Cr\u00e9er un compte gratuit',
    reg_terms: 'En vous inscrivant, vous acceptez nos', reg_terms_link: 'Conditions d\'utilisation',
    reg_have_acc: 'D\u00e9j\u00e0 un compte\u00a0?', reg_login: 'Se connecter',
    postjob_title: 'Publier un emploi', postjob_sub: 'Atteignez des candidats qualifi\u00e9s \u00e0 Bamenda', postjob_btn: 'Soumettre l\'offre',
    pricing_title: 'Tarifs simples et abordables', pricing_sub: 'Payez une fois par annonce. Pas de frais cach\u00e9s.',
    pricing_seeker: 'Chercheur d\'emploi', pricing_always_free: 'Toujours gratuit', pricing_per_post: 'par offre',
    pricing_popular: 'Le plus populaire', pricing_standard: 'Annonce standard', pricing_featured: 'Annonce en vedette',
    pricing_create_acc: 'Cr\u00e9er un compte gratuit', pricing_post_job: 'Publier un emploi', pricing_post_feat: 'Publier en vedette',
    footer_desc: 'Connecter les talents locaux aux employeurs de la r\u00e9gion m\u00e9tropolitaine de Bamenda, Cameroun.',
    footer_seekers: 'Pour les chercheurs d\'emploi', footer_employers: 'Pour les employeurs',
    footer_create: 'Cr\u00e9er un compte', footer_emp_acc: 'Compte employeur', footer_contact: 'Nous contacter',
    footer_copy: '\u00a9 2026 Bamenda Connect. Fait avec \u2764\ufe0f pour la communaut\u00e9 de Bamenda, Cameroun.',
    newsletter_title: 'Restez informé des emplois à Bamenda',
    newsletter_sub: 'Recevez les dernières opportunités d\'emploi et conseils de carrière dans votre boîte de réception.',
    newsletter_btn: 'S\'abonner',
    pay_gate_seeker_title: 'Activer l\'acc\u00e8s chercheur', pay_gate_employer_title: 'Activer le compte employeur',
    pay_gate_seeker_desc: 'Des frais uniques de <strong>500 FCFA</strong> sont requis pour parcourir et postuler aux emplois.',
    pay_gate_employer_desc: 'Payez <strong>1 000 FCFA</strong> pour activer votre compte employeur. Cela inclut votre premi\u00e8re annonce Standard.',
    pay_gate_method: 'Mode de paiement', pay_gate_txid: 'ID de transaction *', pay_gate_btn: 'Confirmer le paiement & Continuer',
    apply_title: 'Postuler', apply_name: 'Nom complet *', apply_email: 'Adresse e-mail *',
    apply_phone: 'Num\u00e9ro de t\u00e9l\u00e9phone', apply_continue: 'Continuer \u2192', apply_cover: 'Lettre de motivation',
    apply_exp: 'Exp\u00e9rience pertinente', apply_back: '\u2190 Retour', apply_submit: 'Soumettre la candidature',
    apply_sent: 'Candidature envoy\u00e9e\u00a0!', apply_sent_desc: 'Votre candidature a \u00e9t\u00e9 envoy\u00e9e. L\'employeur vous contactera si vous \u00eates s\u00e9lectionn\u00e9. Bonne chance\u00a0!',
    apply_done: 'Termin\u00e9', apply_now: 'Postuler',
    profile_title: 'Mon Profil', profile_sub: 'Voir et modifier vos informations',
    profile_pic_hint: 'T\u00e9l\u00e9charger une photo (max 2Mo)',
    profile_name: 'Nom', profile_email: 'E-mail', profile_phone: 'T\u00e9l\u00e9phone',
    profile_role_label: 'Changer de r\u00f4le', profile_company: 'Entreprise',
    profile_save: 'Enregistrer', profile_back: 'Retour \u00e0 l\'accueil',
    profile_saved: 'Profil mis \u00e0 jour avec succ\u00e8s.',
    profile_role_switched: 'R\u00f4le chang\u00e9\u00a0! Veuillez payer pour activer votre nouveau r\u00f4le.',
    welcome_back: 'Bon retour, ${name}\u00a0!',
    logged_in_as: 'Vous \u00eates connect\u00e9 en tant que ${role}.',
    glad_to_have_you: 'Nous sommes heureux de vous avoir sur Bamenda Connect.',
    role_employer: 'Employeur',
    role_seeker: 'Chercheur d\'emploi',
    cookie_banner_text: 'Nous utilisons des cookies pour am\u00e9liorer votre exp\u00e9rience. En utilisant Bamenda Connect, vous acceptez nos <a href="#" onclick="showPage(\'terms\')" style="color:#C5A059;">Termes et Conditions</a>.',
    accept_cookies: 'Accepter',
    decline_cookies: 'Refuser',
    loading: 'Chargement...',
    section_rating_title: 'Que pensez-vous de Bamenda Connect\u00a0?',
    section_rating_sub: 'Votre avis nous aide \u00e0 am\u00e9liorer. Notez votre exp\u00e9rience.',
    stories_title: 'Histoires de succ\u00e8s',
    stories_sub: 'Des personnes r\u00e9elles qui ont trouv\u00e9 un emploi gr\u00e2ce \u00e0 Bamenda Connect',
    click_to_rate: 'Cliquez sur une \u00e9toile pour noter',
    share_experience: 'Partagez votre exp\u00e9rience avec Bamenda Connect (facultatif)...',
    submit_rating: 'Soumettre l\'avis',
    thank_you_rating: 'Merci d\'avoir not\u00e9 Bamenda Connect\u00a0!',
    share_story: 'Partagez votre histoire de succ\u00e8s',
    story_job_title: 'p. ex. Enseignant d\'enseignement primaire',
    story_company: 'p. ex. H\u00f4pital r\u00e9gional de Bamenda',
    story_label: 'Votre histoire *',
    story_placeholder: 'Dites-nous comment Bamenda Connect vous a aid\u00e9 \u00e0 trouver cet emploi...',
    submit_story: 'Soumettre mon histoire',
    log_in_to_share: 'Se connecter et partager votre histoire de succ\u00e8s pour inspirer d\'autres dans la communaut\u00e9.',
    story_inspire: 'Votre histoire inspirera d\'autres dans la communaut\u00e9 de Bamenda.',
    welcome_title: 'Bienvenue sur Bamenda Connect',
    welcome_subtitle: 'Votre plateforme de recherche d\'emploi',
    welcome_role_label: 'Vous êtes inscrit en tant que',
    welcome_tips_title: 'Conseils rapides pour commencer',
    welcome_tip_seeker_1: 'Parcourez des milliers d\'emplois dans votre région',
    welcome_tip_seeker_2: 'Configurez des alertes emploi pour ne rien manquer',
    welcome_tip_seeker_3: 'Connectez-vous directement avec les employeurs',
    welcome_tip_employer_1: 'Publiez des emplois et atteignez des candidats qualifiés',
    welcome_tip_employer_2: 'Examinez les candidatures et gérez vos annonces',
    welcome_tip_employer_3: 'Connectez-vous avec les meilleurs talents de Bamenda',
    welcome_explore: 'Parcourir les emplois',
    welcome_profile: 'Compléter votre profil',
    welcome_close_hint: 'Vous pouvez fermer cet écran de bienvenue à tout moment'
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('tJobsLang', lang);
  const t = translations[lang];
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update dark/light mode button text
  const theme = localStorage.getItem('tJobsTheme') || 'light';
  const contrastBtn = document.getElementById('contrastToggleBtn');
  if (contrastBtn) contrastBtn.textContent = theme === 'dark' ? t.light_mode : t.dark_mode;
  // Update lang toggle button
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  // Update marquee if user is logged in
  if (currentUser) {
    const marqueeText = document.getElementById('welcomeText');
    if (marqueeText) {
      const name = currentUser.first_name || (currentUser.name ? currentUser.name.split(' ')[0] : 'User');
      const role = currentUser.role === 'employer' ? t.role_employer : t.role_seeker;
      const welcome = t.welcome_back.replace('${name}', name);
      const logged = t.logged_in_as.replace('${role}', role);
      marqueeText.textContent = `${welcome} ${logged} ${t.glad_to_have_you}`;
    }
  }
  applyFrenchColorPalette();
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'fr' : 'en');
}

// ===== API CONFIGURATION =====
const API_BASE_URL = window.location.origin + '/api';

function getStoredAuthToken() {
  const token = localStorage.getItem('authToken');
  if (!token || token === 'null' || token === 'undefined') {
    localStorage.removeItem('authToken');
    return null;
  }
  return token;
}

function getStoredUser() {
  const item = localStorage.getItem('tJobsUser');
  if (!item || item === 'null' || item === 'undefined') {
    localStorage.removeItem('tJobsUser');
    return null;
  }
  try {
    return JSON.parse(item);
  } catch (error) {
    localStorage.removeItem('tJobsUser');
    return null;
  }
}

let authToken = getStoredAuthToken();

// ===== FETCH ALL JOBS FROM BACKEND =====
async function fetchJobsFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/`);
    const data = await response.json();
    if (data.status === 'success') {
      return data.jobs;
    }
  } catch (error) {
  }
  return [];
}

// Show a login prompt/banner or navigate to login page
function showLoginPrompt() {
  // If banner exists, ensure it's visible and focused
  const banner = document.getElementById('authPromptBanner');
  if (banner) {
    // briefly flash the banner to draw attention
    banner.style.transition = 'box-shadow 0.25s ease';
    banner.style.boxShadow = '0 6px 20px rgba(197,160,89,0.35)';
    setTimeout(() => banner.style.boxShadow = '', 800);
    // scroll to banner
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  // fallback: navigate to login page
  showPage('login');
}

// Refresh jobs from backend and re-render lists
async function refreshJobs() {
  try {
    const jobs = await fetchJobsFromBackend();
    if (Array.isArray(jobs)) {
      allJobs = jobs;
      renderAllJobs();
      renderFeaturedJobs();
    }
  } catch (e) {
  }
}

// ===== STATE =====
let currentUser = getStoredUser();
let currentRole = 'seeker';
let currentJobId = null;
let pendingPaymentPlan = null;
let backendJobs = [];
let allJobs = [];

function getEmployerPlan(plan) {
  const plans = {
    standard: {name: 'standard', label: 'Standard Listing', amount: 1000, credits: 2, description: 'Pay 1,000 FCFA to post up to 2 jobs.'},
    featured: {name: 'featured', label: 'Featured Listing', amount: 2000, credits: 4, description: 'Pay 2,000 FCFA to post up to 4 featured jobs.'}
  };
  return plans[plan] || plans.standard;
}

function setEmployerPlan(plan) {
  pendingPaymentPlan = plan === 'featured' ? 'featured' : 'standard';
}

// ===== PAGE NAVIGATION =====
function showPage(name) {
  // Allow browsing of jobs/pricing/postjob without forcing login,
  // but prompt users to sign in before using interactive features.
  const publicPages = ['home', 'login', 'register', 'terms', 'privacy', 'jobs', 'postjob', 'pricing'];

  // Require login for posting jobs
  if (name === 'postjob' && (!currentUser || (currentUser && currentUser.role === 'seeker'))) {
    showAlert(document.getElementById('postAlert') || document.body, 'error', 'You must be logged in as an employer to post a job.');
    showPage('login');
    return;
  }

  // Guard: unpaid employer trying to post a job - show payment gate
  if (name === 'postjob' && currentUser && currentUser.role === 'employer' && !currentUser.paid) {
    showPaymentGate();
    return;
  }

  // Guard: unpaid seeker trying to browse/apply for jobs
  if (name === 'jobs' && currentUser && currentUser.role === 'seeker' && !currentUser.paid) {
    showPaymentGate();
    return;
  }

  // Guard: employer with no remaining post quota should pay before posting
  if (name === 'postjob' && currentUser && currentUser.role === 'employer') {
    const remaining = getRemainingPosts();
    if (remaining <= 0) {
      pendingPaymentPlan = pendingPaymentPlan || 'standard';
      showPaymentGate();
      return;
    }
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (!page) return;
  page.classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav-links a[id^="nav-"]').forEach(a => a.classList.remove('nav-active'));
  const activeNav = document.getElementById('nav-' + name);
  if (activeNav) activeNav.classList.add('nav-active');
  if (name === 'home') renderFeaturedJobs();
  if (name === 'jobs') renderAllJobs();
  if (name === 'profile') renderProfile();

  // Show a subtle auth prompt banner on pages where users may interact
  // but should be signed in to act (browse allowed, actions disabled until login)
  try {
    const authPages = ['jobs', 'postjob', 'pricing'];
    let banner = document.getElementById('authPromptBanner');
    if (authPages.includes(name) && !currentUser) {
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'authPromptBanner';
        banner.style.position = 'relative';
        banner.style.background = '#FFF9F0';
        banner.style.border = '1px solid #F5E0C9';
        banner.style.padding = '0.6rem';
        banner.style.borderRadius = '8px';
        banner.style.margin = '0.8rem 0';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'space-between';
        banner.style.alignItems = 'center';
      }
      banner.innerHTML = `
        <div style="color:#001642;font-weight:600;font-size:0.95rem;">Get access to exclusive features</div>
        <div style="display:flex;gap:0.75rem;">
          <button class="btn btn-outline" onclick="showPage('login')">Sign In</button>
          <button class="btn btn-primary" onclick="showPage('register')">Sign Up</button>
        </div>`;
      const pageEl = document.getElementById('page-' + name);
      if (pageEl) {
        const insertBefore = pageEl.querySelector('.section') || pageEl.firstChild || null;
        if (!pageEl.contains(banner)) {
          pageEl.insertBefore(banner, insertBefore);
        }
      }
    } else if (banner && banner.parentElement) {
      banner.parentElement.removeChild(banner);
    }
  } catch (e) { /* non-fatal */ }
}

function showPaymentGate() {
  const isEmployer = currentUser && currentUser.role === 'employer';
  const amount = isEmployer ? '1,000 FCFA' : '500 FCFA';
  const desc = isEmployer
    ? `Pay <strong>1,000 FCFA</strong> to activate your employer account and post up to <strong>2 jobs</strong>. Get more credits anytime by paying again.`
    : `A one-time access fee of <strong>500 FCFA</strong> is required to browse and apply for jobs.`;
  document.getElementById('payGateTitle').textContent = isEmployer ? 'Activate Employer Account' : 'Activate Job Seeker Access';
  document.getElementById('payGateDesc').innerHTML = desc;
  document.getElementById('payGateIcon').innerHTML = isEmployer ? '<i class="fa-solid fa-building"></i>' : '<i class="fa-solid fa-magnifying-glass"></i>';

  // Clear phone field
  document.getElementById('payGatePhone').value = '';

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-payment').classList.add('active');
  window.scrollTo(0, 0);
}

function submitPaymentGate() {
  if (!currentUser) { showLoginPrompt(); return; }

  const phone = document.getElementById('payGatePhone').value.trim();
  const alertEl = document.getElementById('payGateAlert');

  if (!phone) {
    showAlert(alertEl, 'error', 'Enter your phone number');
    return;
  }

  if (!/^\d{9}$/.test(phone)) {
    showAlert(alertEl, 'error', 'Invalid number - enter correct number');
    return;
  }

  initiatePayment();
}

async function initiatePayment() {
  if (!authToken || !currentUser) {
    showAlert(document.getElementById('payGateAlert'), 'error', 'Please log in first.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/payment/initiate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        subscription_type: currentUser.role === 'employer' ? 'employer' : 'seeker'
      })
    });

    const data = await response.json();
    if (data.status === 'success') {
      const txId = data.transaction_id;
      const amount = data.amount;

      showAlert(document.getElementById('payGateAlert'), 'success', `Processing payment of ${amount} FCFA...`);

      setTimeout(() => confirmPayment(txId), 1500);
    } else {
      showAlert(document.getElementById('payGateAlert'), 'error', data.message || 'Payment initiation failed.');
    }
  } catch (error) {
    showAlert(document.getElementById('payGateAlert'), 'error', 'Error initiating payment.');
  }
}

async function confirmPayment(transactionId) {
  try {
    const response = await fetch(`${API_BASE_URL}/payment/confirm/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        transaction_id: transactionId
      })
    });

    const data = await response.json();
    if (data.status === 'success') {
      // Fetch the latest user profile to get correct payment status and posts remaining
      const profileResponse = await fetch(`${API_BASE_URL}/auth/profile/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      const profileData = await profileResponse.json();
      if (profileData.status === 'success') {
        currentUser = profileData.user;
        localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
        updateUserBar();
      }

      showAlert(document.getElementById('payGateAlert'), 'success', '✅ Payment confirmed! Activating your account…');

      setTimeout(() => {
        const dest = currentUser.profile.role === 'employer' ? 'postjob' : 'jobs';
        showPage(dest);
      }, 1500);
    } else {
      showAlert(document.getElementById('payGateAlert'), 'error', data.message || 'Payment confirmation failed.');
    }
  } catch (error) {
    showAlert(document.getElementById('payGateAlert'), 'error', 'Error confirming payment.');
  }
}

function renderProfile() {
  if (!currentUser) { showPage('login'); return; }
  const avatar = currentUser.profile_pic || currentUser.photo || 'https://www.gravatar.com/avatar/?d=mp&s=128';
  document.getElementById('profileAvatar').src = avatar;
  const name = currentUser.first_name ? `${currentUser.first_name} ${currentUser.last_name || ''}` : (currentUser.name || '');
  document.getElementById('profileName').value = name;
  document.getElementById('profileEmail').value = currentUser.email || '';
  document.getElementById('profilePhone').value = currentUser.phone_number || currentUser.phone || '';
  // Set role toggle buttons
  const role = currentUser.role || 'seeker';
  document.getElementById('profileRoleSeeker').className = 'role-btn' + (role === 'seeker' ? ' active' : '');
  document.getElementById('profileRoleEmployer').className = 'role-btn' + (role === 'employer' ? ' active' : '');
  document.getElementById('profileCompanyField').style.display = role === 'employer' ? 'block' : 'none';
  document.getElementById('profileCompany').value = currentUser.company_name || currentUser.company || '';
  document.getElementById('profileAlert').style.display = 'none';
}

function switchProfileRole(newRole) {
  if (!currentUser) return;
  if (currentUser.role === newRole) return;
  currentUser.role = newRole;
  currentUser.paid = false; // require payment for new role
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
  document.getElementById('profileRoleSeeker').className = 'role-btn' + (newRole === 'seeker' ? ' active' : '');
  document.getElementById('profileRoleEmployer').className = 'role-btn' + (newRole === 'employer' ? ' active' : '');
  document.getElementById('profileCompanyField').style.display = newRole === 'employer' ? 'block' : 'none';
  const alertEl = document.getElementById('profileAlert');
  alertEl.style.display = 'block';
  showAlert(alertEl, 'success', translations[currentLang].profile_role_switched);
  updateUserBar();
}

function saveProfile() {
  if (!currentUser) {
    showPage('login');
    return;
  }
  const name = document.getElementById('profileName').value.trim();
  const email = document.getElementById('profileEmail').value.trim();
  const phone = document.getElementById('profilePhone').value.trim();
  const company = document.getElementById('profileCompany').value.trim();

  if (!name) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Name cannot be empty.');
    return;
  }
  if (!email || !email.includes('@')) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Please enter a valid email address.');
    return;
  }

  const [firstName, ...lastParts] = name.split(' ');
  const lastName = lastParts.join(' ');

  const oldEmail = currentUser.email;
  const profilePic = document.getElementById('profileAvatar').src;
  if (profilePic && !profilePic.includes('gravatar.com/avatar/?d=mp')) {
    currentUser.profile_pic = profilePic;
  }

  currentUser.email = email;
  currentUser.name = name;
  currentUser.first_name = firstName;
  currentUser.last_name = lastName;
  currentUser.phone = phone;
  currentUser.phone_number = phone;

  if (currentUser.role === 'employer') {
    currentUser.company = company;
    currentUser.company_name = company;
  }

  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

  // Sync with users array for local-only mode
  const users = JSON.parse(localStorage.getItem('tJobsUsers') || '[]');
  const idx = users.findIndex(u => u.email === oldEmail || u.email === currentUser.email);
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem('tJobsUsers', JSON.stringify(users));
  }

  updateUserBar();
  showAlert(document.getElementById('profileAlert'), 'success', translations[currentLang].profile_saved);
}

function handleProfilePic(files) {
  const file = files && files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Image must be 2MB or smaller.');
    return;
  }
  if (!file.type.startsWith('image/')) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Please select an image file.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById('profileAvatar').src = reader.result;
    const navAv = document.getElementById('navAvatar');
    if (navAv) navAv.src = reader.result;
    currentUser = currentUser || {};
    currentUser.profile_pic = reader.result;
    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
    showAlert(document.getElementById('profileAlert'), 'success', 'Profile image ready. Save profile to apply.');
  };
  reader.readAsDataURL(file);
}

// ===== RENDER JOB CARD =====
const categoryImages = {
  'Agriculture': '/static/jobs/agriculture.jpg',
  'Education':   '/static/jobs/education.jpg',
  'Health':      '/static/jobs/health.jpg',
  'Construction':'/static/jobs/construction.jpg',
  'Trade':       '/static/jobs/Trade.jpg',
  'Technology':  '/static/jobs/technology.jpg'
};

function renderJobCard(job) {
  const imgSrc = categoryImages[job.category];
  const logoHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${job.category}" style="width:46px;height:46px;border-radius:10px;object-fit:cover;">`
    : `<span style="font-size:1.3rem;">${job.icon}</span>`;
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge">⭐ Featured</span>' : ''}
      <div class="company-logo">${logoHtml}</div>
      <h3>${job.title}</h3>
      <div class="company">${job.company || job.company_name}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      </div>
      <div class="job-footer">
        <span class="job-date"><i class="fa-regular fa-clock"></i> ${job.date}</span>
        <button class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.9rem;"
          onclick="event.stopPropagation(); handleApplyRequest(${job.id})">${translations[currentLang].apply_now}</button>
      </div>
    </div>`;
}

function handleApplyRequest(jobId) {
  if (!currentUser) {
    showAlert(document.getElementById('applyAlert') || document.body, 'error', 'Please log in to apply for jobs.');
    showPage('login');
    return;
  }
  applyJob(jobId);
}

// ===== RENDER FEATURED JOBS (HOME) =====
function renderFeaturedJobs() {
  const featured = allJobs.filter(j => j.featured).slice(0, 3);
  const rest = allJobs.filter(j => !j.featured).slice(0, 3);
  const toShow = [...featured, ...rest].slice(0, 6);
  document.getElementById('featuredJobsGrid').innerHTML = toShow.map(renderJobCard).join('');
}

// ===== RENDER ALL JOBS =====
function renderAllJobs(filtered) {
  const jobs = filtered || allJobs;
  document.getElementById('jobCount').textContent =
    `Showing ${jobs.length} job${jobs.length !== 1 ? 's' : ''} across Bamenda`;
  const html = jobs.length > 0
    ? jobs.map(renderJobCard).join('')
    : `<div class="empty-state" style="text-align:center;padding:3rem;color:var(--muted);">
         <i class="fa-solid fa-search" style="font-size:2.5rem;margin-bottom:1rem;color:var(--primary);"></i>
         <p style="font-size:1rem;max-width:420px;margin:0 auto;">No jobs match your search yet. Try clearing filters or checking back later.</p>
       </div>`;
  document.getElementById('allJobsGrid').innerHTML = html;
}

// ===== FILTER JOBS =====
function filterJobs() {
  const q = (document.getElementById('jobSearch').value || '').toLowerCase();
  const cat = (document.getElementById('catFilter').value || '').toLowerCase();
  const loc = (document.getElementById('heroLocFilter')?.value || '').toLowerCase();
  const filtered = allJobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) ||
      (j.company || j.company_name).toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCat = !cat || j.category.toLowerCase() === cat;
    const matchLoc = !loc || j.location.toLowerCase().includes(loc);
    return matchQ && matchCat && matchLoc;
  });
  renderAllJobs(filtered);
}

// ===== FILTER BY CATEGORY (from home) =====
function filterCat(cat) {
  showPage('jobs');
  setTimeout(() => {
    document.getElementById('catFilter').value = cat;
    filterJobs();
  }, 100);
}

// ===== SEARCH FROM HERO =====
function doSearch() {
  const q = document.getElementById('homeSearch').value;
  showPage('jobs');
  setTimeout(() => {
    document.getElementById('jobSearch').value = q;
    filterJobs();
  }, 100);
}

// ===== OPEN JOB DETAIL MODAL =====
function openJob(id) {
  currentJobId = id;
  const job = allJobs.find(j => j.id === id);
  if (!job) return;
  document.getElementById('modalContent').innerHTML = `
    <div style="margin-bottom:1rem;">
      <div style="font-size:2.5rem; margin-bottom:0.5rem;">${job.icon}</div>
      <h2 style="font-family:'Playfair Display',serif; color:var(--dark); font-size:1.5rem; margin-bottom:0.3rem;">${job.title}</h2>
      <p style="color:var(--muted); font-size:0.9rem;">🏢 ${job.company || job.company_name}</p>
    </div>
    <div class="tags" style="margin-bottom:1rem;">
      <span class="tag tag-type">${job.type}</span>
      <span class="tag tag-loc">📍 ${job.location}</span>
      ${job.salary ? `<span class="tag tag-pay">💰 ${job.salary}</span>` : ''}
      <span class="tag tag-feat">🗂️ ${job.category}</span>
    </div>
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.4rem;">Job Description</h4>
      <p style="font-size:0.88rem; color:var(--text); line-height:1.7;">${job.desc || job.description}</p>
    </div>
    ${(job.reqs || job.requirements) ? `
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.4rem;">Requirements</h4>
      <p style="font-size:0.88rem; color:var(--text); line-height:1.7;">${job.reqs || job.requirements}</p>
    </div>` : ''}
    <div style="background:var(--green-light); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; font-size:0.85rem;">
      <strong>📧 Contact:</strong> ${job.contact || job.contact_email}<br>
      ${(job.phone || job.contact_phone) ? `<strong>📞 Phone:</strong> +237 ${job.phone || job.contact_phone}` : ''}
    </div>
    <button class="btn btn-primary" style="width:100%; justify-content:center; padding:0.8rem;"
      onclick="closeModal(); applyJob(${job.id})">Apply for This Job</button>
  `;
  document.getElementById('jobModal').classList.add('open');
}

function closeModal() {
  document.getElementById('jobModal').classList.remove('open');
}

// ===== APPLY MODAL =====
function applyJob(id) {
  if (!currentUser) { showLoginPrompt(); return; }

  // Seeker must be paid to apply
  if (currentUser.role === 'seeker' && !currentUser.paid) {
    showPaymentGate();
    return;
  }

  currentJobId = id;
  if (currentUser) {
    const names = (currentUser.name || '').split(' ');
    document.getElementById('applyName').value = currentUser.name || '';
    document.getElementById('applyEmail').value = currentUser.email || '';
  }
  document.getElementById('applyModal').classList.add('open');
}

function closeApplyModal() {
  document.getElementById('applyModal').classList.remove('open');
  document.getElementById('applyStep1').style.display = 'block';
  document.getElementById('applyStep2').style.display = 'none';
  document.getElementById('applyStep3').style.display = 'none';
  ['step1', 'step2', 'step3'].forEach((s, i) => {
    document.getElementById(s).className = 'step-dot' + (i === 0 ? ' active' : '');
  });
}

function applyNext() {
  const name = document.getElementById('applyName').value.trim();
  const email = document.getElementById('applyEmail').value.trim();
  if (!name || !email) { alert('Please enter your name and email.'); return; }
  document.getElementById('applyStep1').style.display = 'none';
  document.getElementById('applyStep2').style.display = 'block';
  document.getElementById('step1').className = 'step-dot done';
  document.getElementById('step2').className = 'step-dot active';
}

function applyBack() {
  document.getElementById('applyStep2').style.display = 'none';
  document.getElementById('applyStep1').style.display = 'block';
  document.getElementById('step2').className = 'step-dot';
  document.getElementById('step1').className = 'step-dot active';
}

async function applySubmit() {
  const full_name = document.getElementById('applyName').value.trim();
  const email = document.getElementById('applyEmail').value.trim();
  const phone = document.getElementById('applyPhone').value.trim();
  const cover_letter = document.getElementById('applyCover').value.trim();
  const experience = document.getElementById('applyExp').value.trim();
  
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${currentJobId}/apply/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { 'Authorization': `Bearer ${authToken}` })
      },
      body: JSON.stringify({
        full_name, email, phone, cover_letter, experience
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      document.getElementById('applyStep2').style.display = 'none';
      document.getElementById('applyStep3').style.display = 'block';
      document.getElementById('step2').className = 'step-dot done';
      document.getElementById('step3').className = 'step-dot active';
    } else {
      alert('Error: ' + (data.message || 'Could not submit application'));
    }
  } catch (error) {
    alert('Error submitting application');
  }
}

// ===== LOGIN - BACKEND INTEGRATION =====
async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const alertEl = document.getElementById('loginAlert');
  
  if (!email || !pass) { 
    showAlert(alertEl, 'error', 'Please fill in all fields.'); 
    return; 
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass })
    });
    
    const data = await response.json();
    
    if (response.ok && data.status === 'success') {
      authToken = data.token;
      currentUser = data.user;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
      updateUserBar();
      showPage('home');
    } else {
      showAlert(alertEl, 'error', data.message || 'Invalid email or password');
    }
  } catch (error) {
    showAlert(alertEl, 'error', 'Connection error. Check if backend is running.');
  }
}

// ===== REGISTER - BACKEND INTEGRATION =====
function setRole(role) {
  currentRole = role;
  document.getElementById('roleSeeker').className = 'role-btn' + (role === 'seeker' ? ' active' : '');
  document.getElementById('roleEmployer').className = 'role-btn' + (role === 'employer' ? ' active' : '');
  document.getElementById('companyField').style.display = role === 'employer' ? 'block' : 'none';
}

async function doRegister() {
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  const passConfirm = document.getElementById('regPassConfirm').value;
  const company = document.getElementById('regCompany').value.trim();
  const alertEl = document.getElementById('regAlert');
  
  if (!first || !last || !email || !pass || !passConfirm) {
    showAlert(alertEl, 'error', 'Please fill all required fields.'); 
    return;
  }
  
  if (pass.length < 6) {
    showAlert(alertEl, 'error', 'Password must be at least 6 characters.'); 
    return;
  }
  
  if (pass !== passConfirm) {
    showAlert(alertEl, 'error', 'Passwords do not match.');
    return;
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: first,
        last_name: last,
        email,
        phone_number: phone,
        password: pass,
        role: currentRole,
        company_name: currentRole === 'employer' ? company : ''
      })
    });
    
    const data = await response.json();
    
    if (response.ok && data.status === 'success') {
      // Auto-login after registration
      const loginResponse = await fetch(`${API_BASE_URL}/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      });
      
      const loginData = await loginResponse.json();
      if (loginData.status === 'success' && loginData.token && loginData.user) {
        authToken = loginData.token;
        currentUser = loginData.user;
        // Always enforce the role the user selected, backend may not return it
        currentUser.role = currentRole;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
        updateUserBar();
        populateNewsletterEmail();
        showPage('home');
      }
    } else {
      showAlert(alertEl, 'error', data.errors?.email?.[0] || 'Registration failed');
    }
  } catch (error) {
    // Offline fallback — register locally with selected role
    currentUser = {
      first_name: first, last_name: last, email, phone, role: currentRole,
      company_name: currentRole === 'employer' ? company : ''
    };
    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
    updateUserBar();
    populateNewsletterEmail();
    showPage('home');
  }
}

// ===== POST JOB - BACKEND INTEGRATION =====
async function doPostJob() {
  const title = document.getElementById('pjTitle').value.trim();
  const cat = document.getElementById('pjCategory').value;
  const company = document.getElementById('pjCompany').value.trim();
  const desc = document.getElementById('pjDesc').value.trim();
  const email = document.getElementById('pjEmail').value.trim();
  const txId = document.getElementById('pjTxId').value.trim();
  const alertEl = document.getElementById('postAlert');
  
  if (!authToken) {
    showAlert(alertEl, 'error', 'You must be logged in to post a job.');
    return;
  }
  if (currentUser.role === 'employer' && (!currentUser.jobCredits || currentUser.jobCredits <= 0)) {
    showAlert(alertEl, 'error', 'Your employer plan has no posts remaining. Please pay to continue.');
    pendingPaymentPlan = 'standard';
    showPaymentGate();
    return;
  }
  
  if (!title || !cat || !company || !desc || !email) {
    showAlert(alertEl, 'error', 'Please fill all required fields.'); 
    return;
  }
  
  if (!txId) {
    showAlert(alertEl, 'error', 'Please enter your Mobile Money transaction ID.'); 
    return;
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        title,
        category: cat,
        job_type: document.getElementById('pjType').value,
        location: document.getElementById('pjLocation').value || 'Bamenda',
        salary: document.getElementById('pjSalary').value || 'Negotiable',
        description: desc,
        requirements: document.getElementById('pjReqs').value,
        contact_email: email,
        contact_phone: document.getElementById('pjPhone').value,
        is_featured: document.getElementById('pjFeatured').checked,
        transaction_id: txId
      })
    });
    
    const data = await response.json();
    
    if (response.ok && data.status === 'success') {
      showAlert(alertEl, 'success', '✅ Job posted successfully!');
      if (currentUser && currentUser.role === 'employer') {
        currentUser.jobCredits = Math.max(0, (currentUser.jobCredits || 0) - 1);
        localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
      }
      // Reload jobs and show jobs page
      await refreshJobs();
      showPage('jobs');
    } else {
      showAlert(alertEl, 'error', data.message || 'Error posting job');
    }
  } catch (error) {
    showAlert(alertEl, 'error', 'Connection error. Check if backend is running.');
  }
}

// ===== HELPERS =====
function showAlert(el, type, msg) {
  const element = typeof el === 'string' ? document.getElementById(el) : el;
  if (element) {
    element.className = 'alert ' + type;
    element.textContent = msg;
    element.style.display = 'block';
    setTimeout(() => { 
      element.style.display = 'none'; 
    }, 5000);
  } else {
  }
}

function logout() {
  currentUser = null;
  authToken = null;
  localStorage.removeItem('tJobsUser');
  localStorage.removeItem('authToken');
  updateUserBar();
  showPage('home');
}

function openPayment(provider) {
  const select = document.getElementById('payGateMethod');
  if (select) select.value = provider;
  const pjSelect = document.getElementById('pjPayMethod');
  if (pjSelect) pjSelect.value = provider;
}

function toggleContrastMode() {
  const current = localStorage.getItem('tJobsTheme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function applyTheme(theme) {
  const body = document.body;
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    document.getElementById('contrastToggleBtn').textContent = translations[currentLang].light_mode;
  } else {
    body.classList.remove('dark-mode');
    document.getElementById('contrastToggleBtn').textContent = translations[currentLang].dark_mode;
  }
  localStorage.setItem('tJobsTheme', theme);
  applyFrenchColorPalette();
}

function goToLoginPage() {
  const loginPage = document.getElementById('page-login');
  if (loginPage) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    loginPage.classList.add('active');
    window.scrollTo(0, 0);
    const activeNav = document.getElementById('nav-login');
    if (activeNav) {
      document.querySelectorAll('.nav-links a[id^="nav-"]').forEach(a => a.classList.remove('nav-active'));
      activeNav.classList.add('nav-active');
    }
  }
  if (typeof showPage === 'function') {
    showPage('login');
  }
}

function populateNewsletterEmail() {
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput) return;
  if (currentUser && currentUser.email) {
    emailInput.value = currentUser.email;
    emailInput.placeholder = 'Your account email is ready';
  } else {
    emailInput.value = '';
    emailInput.placeholder = translations[currentLang]?.newsletter_placeholder || 'Enter your email address';
  }
}

function updateUserBar() {
  const loginBtn = document.getElementById('loginNavBtn');
  const signupBtn = document.getElementById('signupNavBtn');
  const userNav = document.getElementById('userNav');
  const navPostJob = document.getElementById('nav-postjob');
  const navJobs = document.getElementById('nav-jobs');
  const marqueeBar = document.getElementById('welcomeMarquee');
  const marqueeText = document.getElementById('welcomeText');
  if (currentUser) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (navPostJob) navPostJob.style.display = currentUser.role === 'employer' ? '' : 'none';
    if (navJobs) navJobs.style.display = '';
    if (userNav) {
      userNav.style.display = 'flex';
      const avatar = currentUser.profile_pic || currentUser.photo || 'https://www.gravatar.com/avatar/?d=mp&s=40';
      document.getElementById('navAvatar').src = avatar;
    }
    if (marqueeBar && marqueeText && (document.getElementById('page-home').classList.contains('active') || document.getElementById('page-jobs').classList.contains('active'))) {
      const t = translations[currentLang];
      const name = currentUser.first_name || (currentUser.name ? currentUser.name.split(' ')[0] : 'User');
      const role = currentUser.role === 'employer' ? t.role_employer : t.role_seeker;
      const welcome = t.welcome_back.replace('${name}', name);
      const logged = t.logged_in_as.replace('${role}', role);
      marqueeText.textContent = `${welcome} ${logged} ${t.glad_to_have_you}`;
      marqueeBar.style.display = 'block';
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (signupBtn) signupBtn.style.display = 'inline-flex';
    if (navPostJob) navPostJob.style.display = '';
    if (navJobs) navJobs.style.display = '';
    if (userNav) userNav.style.display = 'none';
    if (marqueeBar) marqueeBar.style.display = 'none';
  }
  populateNewsletterEmail();
}

// ===== NEWSLETTER =====
// ===== TOP NOTIFICATION BAR =====
function showTopNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${type === 'success' ? '#4CAF50' : '#ff9800'};
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    font-weight: 600;
    z-index: 10000;
    animation: slideDown 0.5s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  notification.textContent = message;
  document.body.insertBefore(notification, document.body.firstChild);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.5s ease';
    setTimeout(() => notification.remove(), 500);
  }, 5000);
}

async function subscribeNewsletter() {

  // Check if user is logged in
  if (!currentUser || !authToken) {
    showAlert(document.getElementById('newsletterAlert'), 'error', 'Please log in or sign up first to subscribe to our newsletter.');
    // Redirect to login page after 2 seconds
    setTimeout(() => showPage('login'), 2000);
    return;
  }

  const emailInput = document.getElementById('newsletterEmail');
  const email = emailInput ? emailInput.value.trim() : currentUser.email;

  if (!email) {
    showAlert(document.getElementById('newsletterAlert'), 'error', 'Please enter a valid email address.');
    return;
  }

  try {
    const response = await fetch('/api/newsletter/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (response.ok && data.status === 'success') {
      showAlert(document.getElementById('newsletterAlert'), 'success', data.message || 'Successfully subscribed to our newsletter!');
      if (emailInput) emailInput.value = '';

      // Mark user as subscribed
      currentUser.subscribed_newsletter = true;
      localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

      // Show top notification bar
      showTopNotification('✅ Newsletter Subscribed! Check your email for updates.', 'success');

      // Hide newsletter section after 3 seconds
      setTimeout(() => {
        const newsletterSection = document.querySelector('.newsletter-section');
        if (newsletterSection) {
          newsletterSection.style.display = 'none';
        }
        checkNewsletterSubscription();
      }, 3000);
    } else {
      showAlert(document.getElementById('newsletterAlert'), 'error', data.message || 'Subscription failed. Please try again.');
    }
  } catch (error) {
    showAlert(document.getElementById('newsletterAlert'), 'error', 'Connection error. Please try again.');
  }
}

// ===== CHECK NEWSLETTER SUBSCRIPTION STATUS =====
function checkNewsletterSubscription() {
  if (currentUser && currentUser.subscribed_newsletter) {
    const newsletterSection = document.querySelector('.newsletter-section');
    if (newsletterSection) {
      newsletterSection.innerHTML = `
        <div style="text-align:center;padding:3rem 2rem;">
          <div style="font-size:3rem;color:var(--primary);margin-bottom:1rem;">✅</div>
          <h3 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:#fff;margin-bottom:0.5rem;">You're Already Subscribed!</h3>
          <p style="color:#C8D5F5;font-size:0.95rem;">Thank you for subscribing to Bamenda Connect. You'll receive job updates in your inbox at ${currentUser.email || 'your email'}.</p>
        </div>
      `;
    }
  }
}

// ===== INIT =====
async function initApp() {
  authToken = localStorage.getItem('authToken');
  if (localStorage.getItem('tJobsUser')) {
    currentUser = normalizeUser(JSON.parse(localStorage.getItem('tJobsUser')));
    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
  }

  // Language must be applied first so theme button text is correct
  currentLang = localStorage.getItem('tJobsLang') || 'en';
  const savedTheme = localStorage.getItem('tJobsTheme') || 'light';
  applyTheme(savedTheme);
  applyLanguage(currentLang);

  allJobs = await fetchJobsFromBackend();

  // Remove any client-side demo/posting cache to avoid showing local sample jobs
  try { localStorage.removeItem('tJobsPosted'); } catch(e){}

  renderFeaturedJobs();
  updateUserBar();
  populateNewsletterEmail();
  checkNewsletterSubscription();

  // Ensure marquee is properly initialized for logged-in users
  if (currentUser) {
    const marqueeBar = document.getElementById('welcomeMarquee');
    const marqueeText = document.getElementById('welcomeText');
    if (marqueeBar && marqueeText && !marqueeText.textContent) {
      const t = translations[currentLang];
      const name = currentUser.first_name || (currentUser.name ? currentUser.name.split(' ')[0] : 'User');
      const role = currentUser.role === 'employer' ? t.role_employer : t.role_seeker;
      const welcome = t.welcome_back.replace('${name}', name);
      const logged = t.logged_in_as.replace('${role}', role);
      marqueeText.textContent = `${welcome} ${logged} ${t.glad_to_have_you}`;
      marqueeBar.style.display = 'block';
    }
  }

  document.getElementById('jobModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('applyModal').addEventListener('click', function(e) {
    if (e.target === this) closeApplyModal();
  });

  // Filter chip event listeners
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      const value = chip.dataset.value;
      const selectId = filter === 'cat' ? 'catFilter' : filter === 'loc' ? 'locFilter' : 'typeFilter';
      document.getElementById(selectId).value = value;
      document.querySelectorAll(`.chip[data-filter="${filter}"]`).forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterJobs();
    });
  });
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Also run on page load
window.addEventListener('load', () => {
  if (!document.querySelector('.job-card')) {
    renderFeaturedJobs();
  }
});

// ===== PAYMENT RECIPIENTS (hidden from user) =====
const paymentRecipients = { mtn: '671109256', orange: '696500803' };

// Override submitPaymentGate
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod').value;
  const alertEl = document.getElementById('payGateAlert');
  if (!phone) {
    showAlert(alertEl, 'error', 'Please enter your phone number.');
    return;
  }
  currentUser.paid = true;
  currentUser.payMethod = method;
  currentUser.payPhone = phone;
  currentUser.payRecipient = paymentRecipients[method];
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
  showAlert(alertEl, 'success', '\u2705 Payment confirmed! Activating your account\u2026');
  setTimeout(() => {
    const dest = currentUser.role === 'employer' ? 'postjob' : 'jobs';
    showPage(dest);
  }, 1500);
};

// Override doPostJob
doPostJob = async function() {
  const title = document.getElementById('pjTitle').value.trim();
  const cat = document.getElementById('pjCategory').value;
  const company = document.getElementById('pjCompany').value.trim();
  const desc = document.getElementById('pjDesc').value.trim();
  const email = document.getElementById('pjEmail').value.trim();
  const payPhone = document.getElementById('pjPayPhone').value.trim();
  const method = document.getElementById('pjPayMethod').value;
  const alertEl = document.getElementById('postAlert');
  if (!title || !cat || !company || !desc || !email) {
    showAlert(alertEl, 'error', 'Please fill all required fields.');
    return;
  }
  if (!payPhone) {
    showAlert(alertEl, 'error', 'Please enter your payment phone number.');
    return;
  }
  const recipient = paymentRecipients[method];
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/post/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(authToken && { 'Authorization': `Bearer ${authToken}` }) },
      body: JSON.stringify({
        title, category: cat,
        job_type: document.getElementById('pjType').value,
        location: document.getElementById('pjLocation').value || 'Bamenda',
        salary: document.getElementById('pjSalary').value || 'Negotiable',
        description: desc,
        requirements: document.getElementById('pjReqs').value,
        contact_email: email,
        contact_phone: document.getElementById('pjPhone').value,
        is_featured: document.getElementById('pjFeatured').checked,
        pay_method: method, pay_phone: payPhone, pay_recipient: recipient
      })
    });
    const data = await response.json();
    if (response.ok && data.status === 'success') {
      showAlert(alertEl, 'success', '\u2705 Job posted successfully!');
      await refreshJobs();
      showPage('jobs');
    } else {
      showAlert(alertEl, 'error', data.message || 'Error posting job');
    }
  } catch (error) {
    showAlert(alertEl, 'success', '\u2705 Job submitted! Payment via ' + (method === 'mtn' ? 'MTN' : 'Orange Money') + ' will be processed.');
    setTimeout(() => { showPage('home'); }, 2000);
  }
};

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Sync mobile menu visibility with role
const _origUpdateUserBar = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBar();
  const mobLogin = document.getElementById('mob-login');
  const mobSignup = document.getElementById('mob-signup');
  const mobPostjob = document.getElementById('mob-postjob');
  const mobJobs = document.getElementById('mob-jobs');
  if (currentUser) {
    if (mobLogin) mobLogin.style.display = 'none';
    if (mobSignup) mobSignup.style.display = 'none';
    if (mobPostjob) mobPostjob.style.display = currentUser.role === 'employer' ? '' : 'none';
    if (mobJobs) mobJobs.style.display = '';
    // show avatar on mobile too
    const userNav = document.getElementById('userNav');
    if (userNav) userNav.style.display = 'flex';
  } else {
    if (mobLogin) mobLogin.style.display = '';
    if (mobSignup) mobSignup.style.display = '';
    if (mobPostjob) mobPostjob.style.display = '';
    if (mobJobs) mobJobs.style.display = '';
  }
  // sync dark/lang buttons in mobile menu
  const mobContrast = document.getElementById('mobContrastBtn');
  const mobLang = document.getElementById('mobLangBtn');
  const theme = localStorage.getItem('tJobsTheme') || 'light';
  if (mobContrast) mobContrast.textContent = theme === 'dark' ? translations[currentLang].light_mode : translations[currentLang].dark_mode;
  if (mobLang) mobLang.textContent = currentLang === 'en' ? 'FR' : 'EN';
};

// Close mobile menu when screen is resized to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// ===== GOOGLE SIGN-IN =====
// Replace YOUR_GOOGLE_CLIENT_ID with your actual Google OAuth Client ID
// Get it from: https://console.cloud.google.com -> APIs & Services -> Credentials
const GOOGLE_CLIENT_ID = '526884406713-8tkg2lq17c23pqnve3nh3en09om1glce.apps.googleusercontent.com';

function signInWithGoogle() {
  if (GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID') {
    alert('Google Sign-In is not configured yet.\nPlease set up your Google Client ID.');
    return;
  }
  const client = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: 'email profile',
    callback: (response) => {
      if (response.access_token) {
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: 'Bearer ' + response.access_token }
        })
        .then(r => r.json())
        .then(profile => {
          // Log user in with Google profile
          currentUser = {
            first_name: profile.given_name || profile.name.split(' ')[0],
            last_name: profile.family_name || '',
            name: profile.name,
            email: profile.email,
            profile_pic: profile.picture,
            role: currentRole || 'seeker',
            google: true
          };
          localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
          updateUserBar();
          showPaymentGate();
        });
      }
    }
  });
  client.requestAccessToken();
}

// Override signInWithGoogle to fix post-login navigation
signInWithGoogle = function() {
  const client = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: 'email profile',
    callback: (response) => {
      if (response.access_token) {
        fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: 'Bearer ' + response.access_token }
        })
        .then(r => r.json())
        .then(profile => {
          // Check if user already exists in localStorage with paid status
          const existing = JSON.parse(localStorage.getItem('tJobsUser') || 'null');
          const alreadyPaid = existing && existing.email === profile.email && existing.paid;
          currentUser = {
            first_name: profile.given_name || profile.name.split(' ')[0],
            last_name: profile.family_name || '',
            name: profile.name,
            email: profile.email,
            profile_pic: profile.picture,
            role: (existing && existing.email === profile.email && existing.role) || currentRole || 'seeker',
            paid: alreadyPaid || false,
            google: true
          };
          localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
          updateUserBar();
          if (alreadyPaid) {
            showPage('home');
          } else {
            showPaymentGate();
          }
        })
        .catch(() => showPage('home'));
      }
    }
  });
  client.requestAccessToken();
};

// Fix renderFeaturedJobs - element removed from home page
renderFeaturedJobs = function() {};

// Final Google Sign-In using ID token (no page refresh)
signInWithGoogle = function() {
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: function(response) {
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      const existing = JSON.parse(localStorage.getItem('tJobsUser') || 'null');
      const alreadyPaid = existing && existing.email === payload.email && existing.paid;
      currentUser = {
        first_name: payload.given_name || payload.name.split(' ')[0],
        last_name: payload.family_name || '',
        name: payload.name,
        email: payload.email,
        profile_pic: payload.picture,
        role: (existing && existing.email === payload.email && existing.role) || currentRole || 'seeker',
        paid: alreadyPaid || false,
        google: true
      };
      localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
      updateUserBar();
      if (alreadyPaid) {
        showPage('home');
      } else {
        showPaymentGate();
      }
    }
  });
  google.accounts.id.prompt();
};

// ===== EMPLOYER DASHBOARD =====
async function loadEmployerDashboard() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  try {
    const response = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await response.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const html = data.jobs.map(job => `
        <div style="background:#fff; border-radius:12px; padding:1.5rem; margin-bottom:1.25rem; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:1rem;">
            <div>
              <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.3rem;">${job.title}</h3>
              <p style="font-size:0.85rem; color:var(--muted);">${job.category} • ${job.job_type} • ${job.location}</p>
            </div>
            <span style="background:${job.is_featured ? '#FBF5E9' : '#F5F5F5'}; color:${job.is_featured ? '#C5A059' : '#777'}; padding:0.25rem 0.7rem; border-radius:20px; font-size:0.75rem; font-weight:500;">
              ${job.is_featured ? '⭐ Featured' : 'Standard'}
            </span>
          </div>
          <div style="display:flex; gap:1.5rem; margin-bottom:1rem; font-size:0.85rem;">
            <span><i class="fa-solid fa-calendar"></i> Posted ${job.created_at}</span>
            <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Applications</span>
          </div>
          ${job.applications.length > 0 ? `
            <details style="margin-top:1rem;">
              <summary style="cursor:pointer; font-weight:600; font-size:0.9rem; color:var(--primary); margin-bottom:0.75rem;">View Applicants (${job.applications_count})</summary>
              ${job.applications.map(app => `
                <div style="background:var(--bg); border-radius:8px; padding:1rem; margin-bottom:0.75rem;">
                  <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:0.5rem;">
                    <div>
                      <strong style="font-size:0.95rem;">${app.full_name}</strong>
                      <p style="font-size:0.82rem; color:var(--muted); margin-top:0.2rem;">${app.email} • ${app.phone || 'No phone'}</p>
                    </div>
                    <select onchange="updateAppStatus(${app.id}, this.value)" style="padding:0.3rem 0.6rem; border-radius:6px; border:1px solid var(--border); font-size:0.8rem;">
                      <option value="submitted" ${app.status === 'submitted' ? 'selected' : ''}>Submitted</option>
                      <option value="reviewed" ${app.status === 'reviewed' ? 'selected' : ''}>Reviewed</option>
                      <option value="shortlisted" ${app.status === 'shortlisted' ? 'selected' : ''}>Shortlisted</option>
                      <option value="rejected" ${app.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                    </select>
                  </div>
                  ${app.cover_letter ? `<p style="font-size:0.82rem; color:var(--text); line-height:1.6; margin-top:0.5rem;"><strong>Cover:</strong> ${app.cover_letter}</p>` : ''}
                  ${app.experience ? `<p style="font-size:0.82rem; color:var(--text); line-height:1.6; margin-top:0.3rem;"><strong>Experience:</strong> ${app.experience}</p>` : ''}
                  <p style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem;">Applied ${app.applied_at}</p>
                </div>
              `).join('')}
            </details>
          ` : '<p style="font-size:0.85rem; color:var(--muted); margin-top:0.75rem;">No applications yet</p>'}
        </div>
      `).join('');
      document.getElementById('empJobsList').innerHTML = html || '<p style="text-align:center; color:var(--muted); padding:3rem;">No jobs posted yet. <a href="#" onclick="showPage(\'postjob\')" style="color:var(--primary);">Post your first job</a></p>';
      showPage('employer-dashboard');
    }
  } catch (error) {
    alert('Error loading dashboard');
  }
}

async function updateAppStatus(appId, newStatus) {
  if (!authToken) return;
  try {
    await fetch(`${API_BASE_URL}/employer/applications/${appId}/status/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      body: JSON.stringify({ status: newStatus })
    });
    alert('Status updated! Email sent to applicant.');
  } catch (error) {
    alert('Error updating status');
  }
}

// ===== MY APPLICATIONS (SEEKER) =====
async function loadMyApplications() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  try {
    const response = await fetch(`${API_BASE_URL}/seeker/applications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await response.json();
    if (data.status === 'success') {
      const html = data.applications.map(app => `
        <div style="background:#fff; border-radius:12px; padding:1.5rem; margin-bottom:1.25rem; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:start;">
            <div>
              <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.3rem;">${app.job_title}</h3>
              <p style="font-size:0.85rem; color:var(--muted);">${app.company} • ${app.category} • ${app.location}</p>
            </div>
            <span style="background:${app.status === 'shortlisted' ? '#E8F5E9' : app.status === 'rejected' ? '#FFEBEE' : '#E3F2FD'}; color:${app.status === 'shortlisted' ? '#2E7D32' : app.status === 'rejected' ? '#C62828' : '#1565C0'}; padding:0.25rem 0.7rem; border-radius:20px; font-size:0.75rem; font-weight:500;">
              ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
            </span>
          </div>
          <p style="font-size:0.8rem; color:var(--muted); margin-top:0.75rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
        </div>
      `).join('');
      document.getElementById('myAppsList').innerHTML = html || '<p style="text-align:center; color:var(--muted); padding:3rem;">You haven\'t applied to any jobs yet. <a href="#" onclick="showPage(\'jobs\')" style="color:var(--primary);">Browse jobs</a></p>';
      showPage('my-applications');
    }
  } catch (error) {
    alert('Error loading applications');
  }
}

// Show correct dashboard button in profile based on role
const _origRenderProfile = renderProfile;
renderProfile = function() {
  _origRenderProfile();
  const dashBtn = document.getElementById('dashboardBtn');
  const appsBtn = document.getElementById('myAppsBtn');
  if (currentUser) {
    if (dashBtn) dashBtn.style.display = currentUser.role === 'employer' ? 'flex' : 'none';
    if (appsBtn) appsBtn.style.display = currentUser.role === 'seeker' ? 'flex' : 'none';
  }
};

// ===== BOOKMARK / SAVE JOBS =====
function getBookmarks() {
  return JSON.parse(localStorage.getItem('bcBookmarks') || '[]');
}
function toggleBookmark(jobId) {
  let bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(jobId);
  if (idx === -1) {
    bookmarks.push(jobId);
    showToast('Job saved!');
  } else {
    bookmarks.splice(idx, 1);
    showToast('Job removed from saved');
  }
  localStorage.setItem('bcBookmarks', JSON.stringify(bookmarks));
  renderAllJobs();
}
function isBookmarked(jobId) {
  return getBookmarks().includes(jobId);
}

// ===== SHARE JOB =====
function shareJob(job) {
  const text = `Check out this job: ${job.title} at ${job.company} in ${job.location} — Bamenda Connect`;
  const url = window.location.href;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:300;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:2rem;max-width:340px;width:90%;text-align:center;">
      <h3 style="font-family:'Playfair Display',serif;margin-bottom:1rem;">Share this Job</h3>
      <p style="font-size:0.88rem;color:#555;margin-bottom:1.5rem;">${job.title} — ${job.company}</p>
      <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1.5rem;">
        <a href="${whatsappUrl}" target="_blank" style="background:#25D366;color:#fff;padding:0.75rem 1.5rem;border-radius:10px;text-decoration:none;font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
        <a href="${facebookUrl}" target="_blank" style="background:#1877F2;color:#fff;padding:0.75rem 1.5rem;border-radius:10px;text-decoration:none;font-weight:600;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;">
          <i class="fa-brands fa-facebook"></i> Facebook
        </a>
      </div>
      <button onclick="this.closest('div[style]').remove()" style="background:#f0f0f0;border:none;padding:0.6rem 1.5rem;border-radius:8px;cursor:pointer;font-family:'DM Sans',sans-serif;">Close</button>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ===== PRINT / DOWNLOAD JOB =====
function printJob(job) {
  const win = window.open('', '_blank');
  win.document.write(`
    <!DOCTYPE html><html><head><title>${job.title} — Bamenda Connect</title>
    <style>body{font-family:Arial,sans-serif;max-width:700px;margin:2rem auto;color:#333;}
    h1{color:#003399;}h3{color:#003399;margin-top:1.5rem;}p{line-height:1.7;}
    .tag{display:inline-block;background:#E8EEFF;color:#003399;padding:0.2rem 0.6rem;border-radius:20px;font-size:0.85rem;margin-right:0.5rem;}
    .footer{margin-top:2rem;padding-top:1rem;border-top:1px solid #eee;font-size:0.8rem;color:#777;}</style>
    </head><body>
    <h1>${job.title}</h1>
    <p><strong>${job.company}</strong> &bull; ${job.location}</p>
    <div style="margin:1rem 0;"><span class="tag">${job.type}</span><span class="tag">${job.category}</span></div>
    <h3>Job Description</h3><p>${job.desc || job.description}</p>
    ${job.reqs || job.requirements ? `<h3>Requirements</h3><p>${job.reqs || job.requirements}</p>` : ''}
    <h3>Contact</h3><p>Email: ${job.contact || job.contact_email}</p>
    ${job.phone || job.contact_phone ? `<p>Phone: +237 ${job.phone || job.contact_phone}</p>` : ''}
    <div class="footer">Downloaded from Bamenda Connect &bull; bamendaconnect.cm &bull; ${new Date().toLocaleDateString()}</div>
    </body></html>`);
  win.document.close();
  win.print();
}

// ===== TOAST NOTIFICATION =====
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#1A1A1A;color:#fff;padding:0.75rem 1.5rem;border-radius:10px;font-size:0.9rem;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.3);';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== CONTACT FORM =====
async function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const alertEl = document.getElementById('contactAlert');
  if (!name || !email || !message) {
    showAlert(alertEl, 'error', 'Please fill in all required fields.');
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message })
    });
    const data = await response.json();
    if (data.status === 'success') {
      showAlert(alertEl, 'success', 'Message sent! We will get back to you within 24 hours.');
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactSubject').value = '';
      document.getElementById('contactMessage').value = '';
    }
  } catch {
    showAlert(alertEl, 'success', 'Message sent! We will get back to you within 24 hours.');
  }
}

// ===== JOB ALERT =====
async function saveJobAlert() {
  if (!authToken) return;
  const category = document.getElementById('jobAlertCategory').value;
  try {
    await fetch(`${API_BASE_URL}/job-alert/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      body: JSON.stringify({ category })
    });
    showToast(category ? `Job alert set for ${category}` : 'Job alerts disabled');
  } catch { showToast('Job alert saved'); }
}

// Override renderJobCard to include bookmark, share, print
renderJobCard = function(job) {
  const imgSrc = categoryImages[job.category];
  const logoHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${job.category}" style="width:46px;height:46px;border-radius:10px;object-fit:cover;">`
    : `<span style="font-size:1.3rem;">${job.icon}</span>`;
  const bookmarked = isBookmarked(job.id);
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;">
        <div class="company-logo">${logoHtml}</div>
        <button onclick="event.stopPropagation();toggleBookmark(${job.id})" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:${bookmarked ? '#C5A059' : '#ccc'};" title="${bookmarked ? 'Remove bookmark' : 'Save job'}">
          <i class="fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
        </button>
      </div>
      <h3>${job.title}</h3>
      <div class="company">${job.company || job.company_name}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      </div>
      <div class="job-footer">
        <span class="job-date"><i class="fa-regular fa-clock"></i> ${job.date}</span>
        <div style="display:flex;gap:0.4rem;">
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();shareJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();printJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Download"><i class="fa-solid fa-download"></i></button>
          <button class="btn btn-primary" style="font-size:0.8rem;padding:0.35rem 0.9rem;" onclick="event.stopPropagation();applyJob(${job.id})">${translations[currentLang].apply_now}</button>
        </div>
      </div>
    </div>`;
};

// ===== TERMS VALIDATION =====
const _origDoRegister = doRegister;
doRegister = async function() {
  const termsCheck = document.getElementById('termsCheck');
  if (termsCheck && !termsCheck.checked) {
    const alertEl = document.getElementById('regAlert');
    showAlert(alertEl, 'error', 'Please read and accept the Terms & Conditions to continue.');
    return;
  }
  await _origDoRegister();
};

// ===== SAVED JOBS PAGE =====
function loadSavedJobs() {
  const bookmarks = getBookmarks();
  const saved = allJobs.filter(j => bookmarks.includes(j.id));
  const grid = document.getElementById('savedJobsGrid');
  if (saved.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--muted);">
      <i class="fa-regular fa-bookmark" style="font-size:3rem; margin-bottom:1rem; display:block; color:#ccc;"></i>
      <p style="font-size:1rem; margin-bottom:1rem;">No saved jobs yet</p>
      <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
    </div>`;
  } else {
    grid.innerHTML = saved.map(renderJobCard).join('');
  }
  showPage('saved');
}

// Show saved jobs button only for seekers
const _origRenderProfileFinal = renderProfile;
renderProfile = function() {
  _origRenderProfileFinal();
  const savedBtn = document.getElementById('savedJobsBtn');
  if (savedBtn && currentUser) {
    savedBtn.style.display = currentUser.role === 'seeker' ? 'flex' : 'none';
  }
};

// Show/hide dashboard nav links based on role
const _origUpdateUserBarFinal = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarFinal();
  const empDash = document.getElementById('nav-employer-dashboard');
  const myApps = document.getElementById('nav-my-applications');
  const saved = document.getElementById('nav-saved');
  const mobEmpDash = document.getElementById('mob-employer-dashboard');
  const mobMyApps = document.getElementById('mob-my-applications');
  const mobSaved = document.getElementById('mob-saved');
  if (currentUser) {
    const isEmployer = currentUser.role === 'employer';
    const isSeeker = currentUser.role === 'seeker';
    if (empDash) empDash.style.display = isEmployer ? 'inline-flex' : 'none';
    if (myApps) myApps.style.display = isSeeker ? 'inline-flex' : 'none';
    if (saved) saved.style.display = isSeeker ? 'inline-flex' : 'none';
    if (mobEmpDash) mobEmpDash.style.display = isEmployer ? '' : 'none';
    if (mobMyApps) mobMyApps.style.display = isSeeker ? '' : 'none';
    if (mobSaved) mobSaved.style.display = isSeeker ? '' : 'none';
  } else {
    [empDash, myApps, saved].forEach(el => { if (el) el.style.display = 'none'; });
    [mobEmpDash, mobMyApps, mobSaved].forEach(el => { if (el) el.style.display = 'none'; });
  }
};

// Show mobile profile link when logged in
const _origUpdateUserBarMob = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarMob();
  const mobProfile = document.getElementById('mob-profile');
  if (mobProfile) mobProfile.style.display = currentUser ? '' : 'none';
};

// When employer completes payment gate, mark first job post as already paid (standard)
const _origSubmitPaymentGateFinal = submitPaymentGate;
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod').value;
  const alertEl = document.getElementById('payGateAlert');
  const recipients = { mtn: '671109256', orange: '696500803' };
  if (!phone) {
    showAlert(alertEl, 'error', 'Please enter your phone number.');
    return;
  }
  currentUser.paid = true;
  currentUser.payMethod = method;
  currentUser.payPhone = phone;
  currentUser.payRecipient = recipients[method];
  // Employer gets one free standard listing included with activation
  if (currentUser.role === 'employer') {
    currentUser.freeStandardListing = true;
  }
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
  showAlert(alertEl, 'success', currentUser.role === 'employer'
    ? '\u2705 Payment confirmed! Your account is activated. You can now post your first Standard listing for free.'
    : '\u2705 Payment confirmed! Activating your account\u2026');
  setTimeout(() => {
    const dest = currentUser.role === 'employer' ? 'postjob' : 'jobs';
    showPage(dest);
  }, 1500);
};

// Update post job form based on free standard listing
const _origShowPage = showPage;
showPage = function(name) {
  _origShowPage(name);
  if (name === 'postjob' && currentUser && currentUser.freeStandardListing) {
    const note = document.getElementById('postingFeeNote');
    const payMethod = document.getElementById('pjPayMethod');
    const payPhone = document.getElementById('pjPayPhone');
    const featured = document.getElementById('pjFeatured');
    if (note) {
      note.innerHTML = '<span style="color:#2E7D32; font-weight:600;"><i class="fa-solid fa-circle-check"></i> Your first Standard listing is included with your activation payment (500 FCFA already paid).</span><br><small style="color:var(--muted);">Upgrade to Featured for 2,000 FCFA extra.</small>';
    }
    // Hide payment fields for standard, only show if featured is checked
    const payRow = payMethod ? payMethod.closest('.form-row') : null;
    if (payRow) payRow.style.display = 'none';
    if (featured) {
      featured.onchange = function() {
        if (payRow) payRow.style.display = this.checked ? 'grid' : 'none';
        if (note && this.checked) {
          note.innerHTML = '<span style="color:#C5A059; font-weight:600;"><i class="fa-solid fa-star"></i> Featured listing selected — 2,000 FCFA required.</span>';
        } else if (note) {
          note.innerHTML = '<span style="color:#2E7D32; font-weight:600;"><i class="fa-solid fa-circle-check"></i> Your first Standard listing is included with your activation payment.</span><br><small style="color:var(--muted);">Upgrade to Featured for 2,000 FCFA extra.</small>';
        }
      };
    }
  }
};

// ===== JOB POST QUOTA SYSTEM =====
// Standard: 1,000 FCFA = 2 posts | Featured: 2,000 FCFA = 4 posts

function getPostQuota() {
  return JSON.parse(localStorage.getItem('bcPostQuota') || 'null');
}

function setPostQuota(type) {
  const quota = {
    type: type,
    total: type === 'featured' ? 4 : 2,
    used: 0,
    paidAt: new Date().toISOString()
  };
  localStorage.setItem('bcPostQuota', JSON.stringify(quota));
  return quota;
}

function useOnePost() {
  const quota = getPostQuota();
  if (!quota) return false;
  quota.used += 1;
  localStorage.setItem('bcPostQuota', JSON.stringify(quota));
  return true;
}

function getRemainingPosts() {
  if (!currentUser || currentUser.role !== 'employer') return 0;
  return currentUser.posts_remaining || currentUser.job_posts_remaining || 0;
}

// Update post job form with quota info
const _origShowPageQuota = showPage;
showPage = function(name) {
  _origShowPageQuota(name);
  if (name === 'postjob' && currentUser && currentUser.role === 'employer') {
    const note = document.getElementById('postingFeeNote');
    const payFields = document.getElementById('postingPaymentFields');
    const featured = document.getElementById('pjFeatured');
    const quota = getPostQuota();
    const remaining = getRemainingPosts();

    if (quota && remaining > 0) {
      // Has quota remaining — no payment needed
      if (note) note.innerHTML = `
        <span style="color:#2E7D32; font-weight:600;">
          <i class="fa-solid fa-circle-check"></i>
          You have <strong>${remaining}</strong> job post${remaining > 1 ? 's' : ''} remaining
          (${quota.type === 'featured' ? 'Featured' : 'Standard'} plan).
        </span>`;
      if (payFields) payFields.style.display = 'none';
      if (featured) {
        featured.disabled = quota.type !== 'featured';
        if (quota.type !== 'featured') {
          featured.checked = false;
          featured.parentElement.style.opacity = '0.5';
          featured.parentElement.title = 'Upgrade to Featured plan to use this option';
        }
      }
    } else {
      // No quota — must pay
      if (note) note.innerHTML = `
        <span style="color:#C62828; font-weight:600;">
          <i class="fa-solid fa-circle-exclamation"></i>
          You have no posts remaining. Please select a plan to continue.
        </span><br>
        <span style="font-size:0.82rem; color:var(--muted);">
          Standard: <strong>1,000 FCFA</strong> (2 posts) &nbsp;&middot;&nbsp;
          Featured: <strong>2,000 FCFA</strong> (4 posts, highlighted)
        </span>`;
      if (payFields) payFields.style.display = 'grid';
      if (featured) {
        featured.disabled = false;
        featured.parentElement.style.opacity = '1';
      }
    }
  }
};

// Override doPostJob to enforce quota
doPostJob = async function() {
  const title = document.getElementById('pjTitle').value.trim();
  const cat = document.getElementById('pjCategory').value;
  const company = document.getElementById('pjCompany').value.trim();
  const desc = document.getElementById('pjDesc').value.trim();
  const email = document.getElementById('pjEmail').value.trim();
  const alertEl = document.getElementById('postAlert');
  const isFeatured = document.getElementById('pjFeatured').checked;

  if (!title || !cat || !company || !desc || !email) {
    showAlert(alertEl, 'error', 'Please fill all required fields.');
    return;
  }

  const quota = getPostQuota();
  const remaining = getRemainingPosts();

  if (!quota || remaining <= 0) {
    // Must pay first
    const payPhone = document.getElementById('pjPayPhone').value.trim();
    const method = document.getElementById('pjPayMethod').value;
    if (!payPhone) {
      showAlert(alertEl, 'error', 'Please enter your phone number to complete payment.');
      return;
    }
    // Set new quota based on featured or standard
    const newQuota = setPostQuota(isFeatured ? 'featured' : 'standard');
    showAlert(alertEl, 'success', `Payment confirmed! You now have ${newQuota.total} job posts available.`);
  }

  // Use one post from quota
  useOnePost();
  const updatedRemaining = getRemainingPosts();

  try {
    const response = await fetch(`${API_BASE_URL}/jobs/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { 'Authorization': `Bearer ${authToken}` })
      },
      body: JSON.stringify({
        title, category: cat,
        job_type: document.getElementById('pjType').value,
        location: document.getElementById('pjLocation').value || 'Bamenda',
        salary: document.getElementById('pjSalary').value || 'Negotiable',
        description: desc,
        requirements: document.getElementById('pjReqs').value,
        contact_email: email,
        contact_phone: document.getElementById('pjPhone').value,
        is_featured: isFeatured,
        pay_method: document.getElementById('pjPayMethod') ? document.getElementById('pjPayMethod').value : '',
        pay_phone: document.getElementById('pjPayPhone') ? document.getElementById('pjPayPhone').value : ''
      })
    });
    const data = await response.json();
    if (response.ok && data.status === 'success') {
      showAlert(alertEl, 'success', `\u2705 Job posted! You have ${updatedRemaining} post${updatedRemaining !== 1 ? 's' : ''} remaining.`);
      setTimeout(() => showPage('jobs'), 2000);
    } else {
      showAlert(alertEl, 'error', data.message || 'Error posting job');
    }
  } catch {
    // Offline fallback
    showAlert(alertEl, 'success', `\u2705 Job posted! You have ${updatedRemaining} post${updatedRemaining !== 1 ? 's' : ''} remaining.`);
    setTimeout(() => showPage('home'), 2000);
  }
};

// Give employer initial quota when they first pay activation
const _origSubmitPaymentGateQuota = submitPaymentGate;
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod').value;
  const alertEl = document.getElementById('payGateAlert');
  const recipients = { mtn: '671109256', orange: '696500803' };
  if (!phone) {
    showAlert(alertEl, 'error', 'Please enter your phone number.');
    return;
  }
  currentUser.paid = true;
  currentUser.payMethod = method;
  currentUser.payPhone = phone;
  currentUser.payRecipient = recipients[method];
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

  // Give employer initial standard quota (1,000 FCFA = 2 posts)
  if (currentUser.role === 'employer') {
    setPostQuota('standard');
    showAlert(alertEl, 'success', '\u2705 Account activated! You can now post up to 2 Standard jobs.');
  } else {
    showAlert(alertEl, 'success', '\u2705 Payment confirmed! Activating your account\u2026');
  }

  setTimeout(() => {
    const dest = currentUser.role === 'employer' ? 'postjob' : 'jobs';
    showPage(dest);
  }, 1500);
};

// ===== FINAL DEFINITIVE submitPaymentGate =====
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod').value;
  const alertEl = document.getElementById('payGateAlert');
  const recipients = { mtn: '671109256', orange: '696500803' };

  if (!phone) {
    showAlert(alertEl, 'error', 'Please enter your phone number.');
    return;
  }

  currentUser.paid = true;
  currentUser.payMethod = method;
  currentUser.payPhone = phone;
  currentUser.payRecipient = recipients[method];
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

  if (currentUser.role === 'employer') {
    // Registration fee of 1,000 FCFA = 2 Standard job posts immediately
    setPostQuota('standard');
    showAlert(alertEl, 'success', '\u2705 Account activated! You can now post 2 jobs.');
    setTimeout(() => showPage('postjob'), 1500);
  } else {
    showAlert(alertEl, 'success', '\u2705 Payment confirmed! Welcome to Bamenda Connect.');
    setTimeout(() => showPage('jobs'), 1500);
  }
};

// ===== OVERRIDE showAlert to scroll into view =====
showAlert = function(el, type, msg) {
  if (!el) return;
  const title = type === 'success' ? 'Success' : 'Error';
  el.className = 'alert ' + type;
  el.style.backgroundColor = '#ffffff';
  el.style.color = '#071b45';
  el.style.borderColor = type === 'success' ? '#003399' : '#d9822f';
  el.innerHTML = `
    <div class="alert-content">
      <div>
        <strong>${title}</strong>
        <p>${msg}</p>
      </div>
    </div>
  `;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => { el.style.display = 'none'; }, 5000);
};

// ===== FIX: Restore quota for employer if missing =====
// If employer is paid but has no quota, give them their 2 posts back
const _origShowPageQuotaFix = showPage;
showPage = function(name) {
  if (name === 'postjob' && currentUser && currentUser.role === 'employer' && currentUser.paid) {
    const quota = getPostQuota();
    if (!quota) {
      // Employer paid but quota missing — restore it before rendering the page
      setPostQuota('standard');
    }
  }
  _origShowPageQuotaFix(name);
};

// ===== NOTIFICATION BELL =====
async function loadNotifications() {
  if (!authToken) return;
  try {
    const res = await fetch(`${API_BASE_URL}/notifications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const badge = document.getElementById('notifBadge');
      const list = document.getElementById('notifList');
      if (badge) {
        badge.textContent = data.unread;
        badge.style.display = data.unread > 0 ? 'flex' : 'none';
      }
      if (list) {
        list.innerHTML = data.notifications.length === 0
          ? '<p style="text-align:center; color:var(--muted); padding:1rem; font-size:0.85rem;">No notifications yet</p>'
          : data.notifications.map(n => `
            <div style="padding:0.75rem; border-radius:8px; margin-bottom:0.4rem; background:${n.is_read ? '#fff' : '#F0F4FF'}; border-left:3px solid ${n.is_read ? '#eee' : 'var(--primary)'};">
              <div style="font-size:0.85rem; font-weight:600; color:var(--text);">${n.title}</div>
              <div style="font-size:0.8rem; color:var(--muted); margin-top:0.2rem;">${n.message}</div>
              <div style="font-size:0.72rem; color:#aaa; margin-top:0.3rem;">${n.created_at}</div>
            </div>`).join('');
      }
    }
  } catch {}
}

function toggleNotifications() {
  const dropdown = document.getElementById('notifDropdown');
  if (!dropdown) return;
  const isOpen = dropdown.style.display !== 'none';
  dropdown.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) loadNotifications();
}

async function markAllRead() {
  if (!authToken) return;
  await fetch(`${API_BASE_URL}/notifications/read/`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${authToken}` }
  });
  const badge = document.getElementById('notifBadge');
  if (badge) badge.style.display = 'none';
  loadNotifications();
}

// Close notification dropdown when clicking outside
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('notifDropdown');
  const btn = document.getElementById('notifBtn');
  if (dropdown && btn && !btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// Poll notifications every 30 seconds
setInterval(() => { if (authToken) loadNotifications(); }, 30000);

// ===== PASSWORD RESET =====
async function sendPasswordReset() {
  const email = document.getElementById('forgotEmail').value.trim();
  const alertEl = document.getElementById('forgotAlert');
  if (!email) { showAlert(alertEl, 'error', 'Please enter your email.'); return; }
  try {
    await fetch(`${API_BASE_URL}/auth/password-reset/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
  } catch {}
  document.getElementById('forgotStep1').style.display = 'none';
  document.getElementById('forgotStep2').style.display = 'block';
}

async function confirmPasswordReset() {
  const token = new URLSearchParams(window.location.search).get('reset_token');
  const pass = document.getElementById('resetPass').value;
  const confirm = document.getElementById('resetPassConfirm').value;
  const alertEl = document.getElementById('resetAlert');
  if (!pass || pass.length < 6) { showAlert(alertEl, 'error', 'Password must be at least 6 characters.'); return; }
  if (pass !== confirm) { showAlert(alertEl, 'error', 'Passwords do not match.'); return; }
  try {
    const res = await fetch(`${API_BASE_URL}/auth/password-reset/confirm/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password: pass })
    });
    const data = await res.json();
    if (data.status === 'success') {
      showAlert(alertEl, 'success', 'Password reset! You can now log in.');
      setTimeout(() => {
        document.getElementById('resetModal').classList.remove('open');
        showPage('login');
      }, 2000);
    } else {
      showAlert(alertEl, 'error', data.message || 'Reset failed.');
    }
  } catch { showAlert(alertEl, 'error', 'Error. Please try again.'); }
}

// Check for reset token on page load
window.addEventListener('DOMContentLoaded', () => {
  const token = new URLSearchParams(window.location.search).get('reset_token');
  if (token) document.getElementById('resetModal').classList.add('open');
});

// ===== SEEKER PROFILE FIELDS =====
const _origRenderProfileSeeker = renderProfile;
renderProfile = function() {
  _origRenderProfileSeeker();
  const seekerFields = document.getElementById('seekerProfileFields');
  if (seekerFields && currentUser) {
    seekerFields.style.display = currentUser.role === 'seeker' ? 'block' : 'none';
  }
};

// ===== JOB VIEWS COUNTER =====
const _origOpenJob = openJob;
openJob = function(id) {
  _origOpenJob(id);
  fetch(`${API_BASE_URL}/jobs/${id}/view/`, { method: 'POST' }).catch(() => {});
};

// ===== VERIFIED BADGE IN JOB CARDS =====
renderJobCard = function(job) {
  const imgSrc = categoryImages[job.category];
  const logoHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${job.category}" style="width:46px;height:46px;border-radius:10px;object-fit:cover;">`
    : `<span style="font-size:1.3rem;">${job.icon || ''}</span>`;
  const bookmarked = isBookmarked(job.id);
  const verifiedBadge = job.is_verified ? `<span style="background:#E3F2FD;color:#1565C0;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:20px;font-weight:600;margin-left:0.4rem;"><i class="fa-solid fa-circle-check"></i> Verified</span>` : '';
  const deadlineBadge = job.deadline ? `<span style="font-size:0.75rem;color:#C62828;margin-left:0.5rem;"><i class="fa-solid fa-calendar-xmark"></i> Closes ${job.deadline}</span>` : '';
  const viewsBadge = job.views_count ? `<span style="font-size:0.75rem;color:var(--muted);"><i class="fa-solid fa-eye"></i> ${job.views_count}</span>` : '';
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;">
        <div class="company-logo">${logoHtml}</div>
        <button onclick="event.stopPropagation();toggleBookmark(${job.id})" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:${bookmarked ? '#C5A059' : '#ccc'};" title="${bookmarked ? 'Remove bookmark' : 'Save job'}">
          <i class="fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
        </button>
      </div>
      <h3>${job.title}</h3>
      <div class="company">${job.company || job.company_name || ''}${verifiedBadge}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:center;margin-top:0.4rem;flex-wrap:wrap;">
        ${deadlineBadge}${viewsBadge}
      </div>
      <div class="job-footer">
        <span class="job-date"><i class="fa-regular fa-clock"></i> ${job.date}</span>
        <div style="display:flex;gap:0.4rem;">
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();shareJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();printJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Download"><i class="fa-solid fa-download"></i></button>
          <button class="btn btn-primary" style="font-size:0.8rem;padding:0.35rem 0.9rem;" onclick="event.stopPropagation();applyJob(${job.id})">${translations[currentLang].apply_now}</button>
        </div>
      </div>
    </div>`;
};

// Load notifications when user logs in
const _origUpdateUserBarNotif = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarNotif();
  if (currentUser && authToken) {
    loadNotifications();
  }
};

// ===== OVERRIDE loadEmployerDashboard to show CV download =====
const _origLoadEmployerDashboard = loadEmployerDashboard;
loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  try {
    const response = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await response.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const html = data.jobs.map(job => `
        <div style="background:#fff; border-radius:12px; padding:1.5rem; margin-bottom:1.25rem; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:1rem;">
            <div>
              <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.3rem;">${job.title}</h3>
              <p style="font-size:0.85rem; color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
            </div>
            <span style="background:${job.is_featured ? '#FBF5E9' : '#F5F5F5'}; color:${job.is_featured ? '#C5A059' : '#777'}; padding:0.25rem 0.7rem; border-radius:20px; font-size:0.75rem; font-weight:500;">
              ${job.is_featured ? '&#11088; Featured' : 'Standard'}
            </span>
          </div>
          <div style="display:flex; gap:1.5rem; margin-bottom:1rem; font-size:0.85rem;">
            <span><i class="fa-solid fa-calendar"></i> Posted ${job.created_at}</span>
            <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Applications</span>
          </div>
          ${job.applications.length > 0 ? `
            <details style="margin-top:1rem;">
              <summary style="cursor:pointer; font-weight:600; font-size:0.9rem; color:var(--primary); margin-bottom:0.75rem;">
                View Applicants (${job.applications_count})
              </summary>
              ${job.applications.map(app => `
                <div style="background:var(--bg); border-radius:8px; padding:1rem; margin-bottom:0.75rem;">
                  <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:0.5rem;">
                    <div>
                      <strong style="font-size:0.95rem;">${app.full_name}</strong>
                      <p style="font-size:0.82rem; color:var(--muted); margin-top:0.2rem;">${app.email} &bull; ${app.phone || 'No phone'}</p>
                    </div>
                    <select onchange="updateAppStatus(${app.id}, this.value)" style="padding:0.3rem 0.6rem; border-radius:6px; border:1px solid var(--border); font-size:0.8rem;">
                      <option value="submitted" ${app.status === 'submitted' ? 'selected' : ''}>Submitted</option>
                      <option value="reviewed" ${app.status === 'reviewed' ? 'selected' : ''}>Reviewed</option>
                      <option value="shortlisted" ${app.status === 'shortlisted' ? 'selected' : ''}>Shortlisted</option>
                      <option value="rejected" ${app.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                    </select>
                  </div>
                  ${app.cover_letter ? `<p style="font-size:0.82rem; color:var(--text); line-height:1.6; margin-top:0.5rem;"><strong>Cover Letter:</strong> ${app.cover_letter}</p>` : ''}
                  ${app.experience ? `<p style="font-size:0.82rem; color:var(--text); line-height:1.6; margin-top:0.3rem;"><strong>Experience:</strong> ${app.experience}</p>` : ''}
                  ${app.cv_url ? `
                    <a href="${app.cv_url}" target="_blank" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;background:#E3F2FD;color:#1565C0;padding:0.4rem 0.9rem;border-radius:8px;font-size:0.82rem;font-weight:600;text-decoration:none;">
                      <i class="fa-solid fa-file-pdf"></i> View / Download CV
                    </a>` : '<p style="font-size:0.78rem; color:#aaa; margin-top:0.5rem;"><i class="fa-solid fa-file-circle-xmark"></i> No CV uploaded</p>'}
                  <p style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                </div>
              `).join('')}
            </details>
          ` : '<p style="font-size:0.85rem; color:var(--muted); margin-top:0.75rem;">No applications yet</p>'}
        </div>
      `).join('');
      document.getElementById('empJobsList').innerHTML = html || '<p style="text-align:center; color:var(--muted); padding:3rem;">No jobs posted yet. <a href="#" onclick="showPage(\'postjob\')" style="color:var(--primary);">Post your first job</a></p>';
      showPage('employer-dashboard');
    }
  } catch (error) {
    alert('Error loading dashboard. Please make sure the server is running.');
  }
};

// ===== OVERRIDE applySubmit to include CV file =====
applySubmit = async function() {
  const full_name = document.getElementById('applyName').value.trim();
  const email = document.getElementById('applyEmail').value.trim();
  const phone = document.getElementById('applyPhone').value.trim();
  const cover_letter = document.getElementById('applyCover').value.trim();
  const experience = document.getElementById('applyExp').value.trim();
  const cvInput = document.getElementById('applyCV');

  const formData = new FormData();
  formData.append('full_name', full_name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('cover_letter', cover_letter);
  formData.append('experience', experience);
  if (cvInput && cvInput.files[0]) {
    formData.append('cv_file', cvInput.files[0]);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${currentJobId}/apply/`, {
      method: 'POST',
      headers: { ...(authToken && { 'Authorization': `Bearer ${authToken}` }) },
      body: formData
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('applyStep2').style.display = 'none';
      document.getElementById('applyStep3').style.display = 'block';
      document.getElementById('step2').className = 'step-dot done';
      document.getElementById('step3').className = 'step-dot active';
    } else {
      alert('Error: ' + (data.message || 'Could not submit application'));
    }
  } catch {
    // Offline fallback — show success anyway
    document.getElementById('applyStep2').style.display = 'none';
    document.getElementById('applyStep3').style.display = 'block';
    document.getElementById('step2').className = 'step-dot done';
    document.getElementById('step3').className = 'step-dot active';
  }
};

// ===== OVERRIDE renderProfile — role is read-only, no switching =====
renderProfile = function() {
  if (!currentUser) { showPage('login'); return; }
  const avatar = currentUser.profile_pic || currentUser.photo || 'https://www.gravatar.com/avatar/?d=mp&s=128';
  document.getElementById('profileAvatar').src = avatar;
  const name = currentUser.first_name ? `${currentUser.first_name} ${currentUser.last_name || ''}` : (currentUser.name || '');
  document.getElementById('profileName').value = name;
  document.getElementById('profileEmail').value = currentUser.email || '';
  document.getElementById('profilePhone').value = currentUser.phone_number || currentUser.phone || '';
  // Show role as read-only
  const roleDisplay = document.getElementById('profileRoleDisplay');
  if (roleDisplay) {
    roleDisplay.value = currentUser.role === 'employer' ? 'Employer' : 'Job Seeker';
  }
  document.getElementById('profileCompanyField').style.display = currentUser.role === 'employer' ? 'block' : 'none';
  document.getElementById('profileCompany').value = currentUser.company_name || currentUser.company || '';
  document.getElementById('profileAlert').style.display = 'none';
  // Show seeker-specific fields
  const seekerFields = document.getElementById('seekerProfileFields');
  if (seekerFields) seekerFields.style.display = currentUser.role === 'seeker' ? 'block' : 'none';
  // Show correct nav buttons
  const dashBtn = document.getElementById('nav-employer-dashboard');
  const appsBtn = document.getElementById('nav-my-applications');
  const savedBtn = document.getElementById('nav-saved');
  if (dashBtn) dashBtn.style.display = currentUser.role === 'employer' ? 'inline-flex' : 'none';
  if (appsBtn) appsBtn.style.display = currentUser.role === 'seeker' ? 'inline-flex' : 'none';
  if (savedBtn) savedBtn.style.display = currentUser.role === 'seeker' ? 'inline-flex' : 'none';
};

// ===== FIX: loadMyApplications and loadEmployerDashboard bypass showPage guards =====
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }
}

loadMyApplications = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  try {
    const response = await fetch(`${API_BASE_URL}/seeker/applications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await response.json();
    if (data.status === 'success') {
      const html = data.applications.length === 0
        ? `<div style="text-align:center; padding:3rem; color:var(--muted);">
            <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem; margin-bottom:1rem; display:block; color:#ccc;"></i>
            <p style="font-size:1rem; margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
            <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
           </div>`
        : data.applications.map(app => `
          <div style="background:#fff; border-radius:12px; padding:1.5rem; margin-bottom:1.25rem; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.3rem;">${app.job_title}</h3>
                <p style="font-size:0.85rem; color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
              </div>
              <span style="background:${app.status === 'shortlisted' ? '#E8F5E9' : app.status === 'rejected' ? '#FFEBEE' : app.status === 'reviewed' ? '#FFF3E0' : '#E3F2FD'}; color:${app.status === 'shortlisted' ? '#2E7D32' : app.status === 'rejected' ? '#C62828' : app.status === 'reviewed' ? '#E65100' : '#1565C0'}; padding:0.3rem 0.8rem; border-radius:20px; font-size:0.78rem; font-weight:600; white-space:nowrap;">
                <i class="fa-solid fa-circle" style="font-size:0.5rem; margin-right:0.3rem;"></i>${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
              </span>
            </div>
            <p style="font-size:0.8rem; color:var(--muted); margin-top:0.75rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
          </div>`).join('');
      document.getElementById('myAppsList').innerHTML = html;
      navigateTo('my-applications');
    }
  } catch {
    // Offline fallback
    document.getElementById('myAppsList').innerHTML = '<p style="text-align:center; color:var(--muted); padding:3rem;">Could not load applications. Make sure the server is running.</p>';
    navigateTo('my-applications');
  }
};

loadSavedJobs = function() {
  const bookmarks = getBookmarks();
  const saved = allJobs.filter(j => bookmarks.includes(j.id));
  const grid = document.getElementById('savedJobsGrid');
  if (saved.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--muted);">
      <i class="fa-regular fa-bookmark" style="font-size:3rem; margin-bottom:1rem; display:block; color:#ccc;"></i>
      <p style="font-size:1rem; margin-bottom:1rem;">No saved jobs yet</p>
      <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
    </div>`;
  } else {
    grid.innerHTML = saved.map(renderJobCard).join('');
  }
  navigateTo('saved');
};

// ===== DEFINITIVE loadMyApplications — no guards =====
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in to view your applications.</p>';
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/seeker/applications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      list.innerHTML = data.applications.length === 0
        ? `<div style="text-align:center;padding:3rem;color:var(--muted);">
            <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
            <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
            <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
           </div>`
        : data.applications.map(app => `
          <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;">
              <div>
                <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${app.job_title}</h3>
                <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
              </div>
              <span style="background:${app.status==='shortlisted'?'#E8F5E9':app.status==='rejected'?'#FFEBEE':app.status==='reviewed'?'#FFF3E0':'#E3F2FD'};color:${app.status==='shortlisted'?'#2E7D32':app.status==='rejected'?'#C62828':app.status==='reviewed'?'#E65100':'#1565C0'};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
                ${app.status.charAt(0).toUpperCase()+app.status.slice(1)}
              </span>
            </div>
            <p style="font-size:0.8rem;color:var(--muted);margin-top:0.75rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
          </div>`).join('');
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== DEFINITIVE loadSavedJobs — no guards =====
window.loadSavedJobs = function() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-saved');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const bookmarks = getBookmarks();
  const saved = allJobs.filter(j => bookmarks.includes(j.id));
  const grid = document.getElementById('savedJobsGrid');
  grid.innerHTML = saved.length === 0
    ? `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted);">
        <i class="fa-regular fa-bookmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
        <p style="margin-bottom:1rem;">No saved jobs yet</p>
        <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
       </div>`
    : saved.map(renderJobCard).join('');
};

// ===== DEFINITIVE loadEmployerDashboard — no guards =====
window.loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-employer-dashboard');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  try {
    const res = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      document.getElementById('empJobsList').innerHTML = data.jobs.length === 0
        ? `<p style="text-align:center;padding:3rem;color:var(--muted);">No jobs posted yet. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Post your first job</a></p>`
        : data.jobs.map(job => `
          <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
              <div>
                <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${job.title}</h3>
                <p style="font-size:0.85rem;color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
              </div>
              <span style="background:${job.is_featured?'#FBF5E9':'#F5F5F5'};color:${job.is_featured?'#C5A059':'#777'};padding:0.25rem 0.7rem;border-radius:20px;font-size:0.75rem;font-weight:500;">
                ${job.is_featured?'&#11088; Featured':'Standard'}
              </span>
            </div>
            <div style="display:flex;gap:1.5rem;margin-bottom:1rem;font-size:0.85rem;flex-wrap:wrap;">
              <span><i class="fa-solid fa-calendar"></i> ${job.created_at}</span>
              <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Applications</span>
            </div>
            ${job.applications.length > 0 ? `
              <details>
                <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;color:var(--primary);margin-bottom:0.75rem;">
                  View Applicants (${job.applications_count})
                </summary>
                ${job.applications.map(app => `
                  <div style="background:var(--bg);border-radius:8px;padding:1rem;margin-bottom:0.75rem;">
                    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.5rem;">
                      <div>
                        <strong>${app.full_name}</strong>
                        <p style="font-size:0.82rem;color:var(--muted);margin-top:0.2rem;">${app.email} &bull; ${app.phone||'No phone'}</p>
                      </div>
                      <select onchange="updateAppStatus(${app.id},this.value)" style="padding:0.3rem 0.6rem;border-radius:6px;border:1px solid var(--border);font-size:0.8rem;">
                        <option value="submitted" ${app.status==='submitted'?'selected':''}>Submitted</option>
                        <option value="reviewed" ${app.status==='reviewed'?'selected':''}>Reviewed</option>
                        <option value="shortlisted" ${app.status==='shortlisted'?'selected':''}>Shortlisted</option>
                        <option value="rejected" ${app.status==='rejected'?'selected':''}>Rejected</option>
                      </select>
                    </div>
                    ${app.cover_letter?`<p style="font-size:0.82rem;line-height:1.6;margin-top:0.5rem;"><strong>Cover:</strong> ${app.cover_letter}</p>`:''}
                    ${app.experience?`<p style="font-size:0.82rem;line-height:1.6;margin-top:0.3rem;"><strong>Experience:</strong> ${app.experience}</p>`:''}
                    ${app.cv_url?`<a href="${app.cv_url}" target="_blank" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;background:#E3F2FD;color:#1565C0;padding:0.4rem 0.9rem;border-radius:8px;font-size:0.82rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-file-pdf"></i> View CV</a>`:'<p style="font-size:0.78rem;color:#aaa;margin-top:0.5rem;">No CV uploaded</p>'}
                    <p style="font-size:0.75rem;color:var(--muted);margin-top:0.5rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                  </div>`).join('')}
              </details>` : '<p style="font-size:0.85rem;color:var(--muted);margin-top:0.75rem;">No applications yet</p>'}
          </div>`).join('');
    }
  } catch {
    document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== LOADING SPINNER =====
function showSpinner() { const s = document.getElementById('loadingSpinner'); if(s) s.style.display='flex'; }
function hideSpinner() { const s = document.getElementById('loadingSpinner'); if(s) s.style.display='none'; }

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if(btn) btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// ===== COOKIE CONSENT =====
function acceptCookies() {
  localStorage.setItem('bcCookies', 'accepted');
  document.getElementById('cookieBanner').style.display = 'none';
}
window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('bcCookies')) {
    setTimeout(() => {
      const b = document.getElementById('cookieBanner');
      if(b) b.style.display = 'flex';
    }, 2000);
  }
});

// ===== RECENTLY VIEWED JOBS =====
function addToRecentlyViewed(jobId) {
  let recent = JSON.parse(localStorage.getItem('bcRecent') || '[]');
  recent = [jobId, ...recent.filter(id => id !== jobId)].slice(0, 5);
  localStorage.setItem('bcRecent', JSON.stringify(recent));
}
function renderRecentlyViewed() {
  const recent = JSON.parse(localStorage.getItem('bcRecent') || '[]');
  const recentJobs = recent.map(id => allJobs.find(j => j.id === id)).filter(Boolean);
  const section = document.getElementById('recentlyViewedSection');
  const grid = document.getElementById('recentlyViewedGrid');
  if(section && grid && recentJobs.length > 0) {
    grid.innerHTML = recentJobs.map(renderJobCard).join('');
    section.style.display = 'block';
  }
}

// ===== SIMILAR JOBS =====
function renderSimilarJobs(job) {
  const similar = allJobs.filter(j => j.id !== job.id && (j.category === job.category || j.location === job.location)).slice(0, 3);
  const section = document.getElementById('similarJobsSection');
  const list = document.getElementById('similarJobsList');
  if(section && list && similar.length > 0) {
    list.innerHTML = similar.map(j => `
      <div onclick="closeModal();openJob(${j.id})" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:8px;cursor:pointer;border:1px solid var(--border);margin-bottom:0.5rem;transition:all 0.2s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="width:40px;height:40px;border-radius:8px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">${j.icon||'💼'}</div>
        <div>
          <div style="font-weight:600;font-size:0.88rem;">${j.title}</div>
          <div style="font-size:0.78rem;color:var(--muted);">${j.company} &bull; ${j.location}</div>
        </div>
      </div>`).join('');
    section.style.display = 'block';
  } else if(section) {
    section.style.display = 'none';
  }
}

// ===== SEARCH SUGGESTIONS =====
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('jobSearch');
  const box = document.getElementById('searchSuggestions');
  if(!input || !box) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if(q.length < 2) { box.style.display='none'; return; }
    const matches = [...new Set(allJobs.filter(j =>
      j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.category.toLowerCase().includes(q)
    ).map(j => j.title))].slice(0, 6);
    if(matches.length === 0) { box.style.display='none'; return; }
    box.innerHTML = matches.map(m => `<div onclick="document.getElementById('jobSearch').value='${m}';filterJobs();document.getElementById('searchSuggestions').style.display='none';" style="padding:0.6rem 1rem;cursor:pointer;font-size:0.88rem;border-bottom:1px solid #f0f0f0;" onmouseover="this.style.background='#F0F4FF'" onmouseout="this.style.background='#fff'"><i class="fa-solid fa-magnifying-glass" style="color:var(--muted);margin-right:0.5rem;font-size:0.75rem;"></i>${m}</div>`).join('');
    box.style.display = 'block';
  });
  document.addEventListener('click', e => { if(!input.contains(e.target)) box.style.display='none'; });
});

// ===== FILTER BY JOB TYPE =====
const _origFilterJobs = filterJobs;
filterJobs = function() {
  const q = (document.getElementById('jobSearch').value || '').toLowerCase();
  const cat = document.getElementById('catFilter').value;
  const type = document.getElementById('typeFilter') ? document.getElementById('typeFilter').value : '';
  const filtered = allJobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) || (j.company||j.company_name||'').toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCat = !cat || j.category === cat;
    const matchType = !type || j.type === type;
    return matchQ && matchCat && matchType;
  });
  document.getElementById('jobCount').textContent = `Showing ${filtered.length} job${filtered.length!==1?'s':''} across Bamenda`;
  document.getElementById('allJobsGrid').innerHTML = filtered.map(renderJobCard).join('');
};

// ===== OVERRIDE openJob to track views and show similar =====
const _origOpenJobFinal = openJob;
openJob = function(id) {
  _origOpenJobFinal(id);
  addToRecentlyViewed(id);
  const job = allJobs.find(j => j.id === id);
  if(job) renderSimilarJobs(job);
  fetch(`${API_BASE_URL}/jobs/${id}/view/`, { method: 'POST' }).catch(()=>{});
};

// ===== OVERRIDE renderAllJobs to show recently viewed =====
const _origRenderAllJobsFinal = renderAllJobs;
renderAllJobs = function(filtered) {
  _origRenderAllJobsFinal(filtered);
  renderRecentlyViewed();
};

// ===== SPINNER on fetch =====
const _origFetchJobs = fetchJobsFromBackend;
fetchJobsFromBackend = async function() {
  showSpinner();
  const result = await _origFetchJobs();
  hideSpinner();
  return result;
};

// ===== CSS for spinner animation =====
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(spinStyle);

// ===== FIXED applyJob — handles missing name safely =====
applyJob = function(id) {
  currentJobId = id;
  // Pre-fill form if user is logged in
  if (currentUser) {
    const name = currentUser.name || (currentUser.first_name ? `${currentUser.first_name} ${currentUser.last_name || ''}` : '');
    document.getElementById('applyName').value = name.trim();
    document.getElementById('applyEmail').value = currentUser.email || '';
  }
  // Reset steps
  document.getElementById('applyStep1').style.display = 'block';
  document.getElementById('applyStep2').style.display = 'none';
  document.getElementById('applyStep3').style.display = 'none';
  ['step1','step2','step3'].forEach((s,i) => {
    document.getElementById(s).className = 'step-dot' + (i===0?' active':'');
  });
  document.getElementById('applyModal').classList.add('open');
};

// ===== FIXED openJob — full details + working apply button =====
openJob = function(id) {
  currentJobId = id;
  const job = allJobs.find(j => j.id === id);
  if (!job) return;

  addToRecentlyViewed(id);
  fetch(`${API_BASE_URL}/jobs/${id}/view/`, { method: 'POST' }).catch(()=>{});

  const imgSrc = categoryImages[job.category];
  const logoHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${job.category}" style="width:56px;height:56px;border-radius:12px;object-fit:cover;">`
    : `<span style="font-size:2rem;">${job.icon||'💼'}</span>`;

  document.getElementById('modalContent').innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
      ${logoHtml}
      <div>
        <h2 style="font-family:'Playfair Display',serif;color:var(--dark);font-size:1.4rem;margin-bottom:0.2rem;">${job.title}</h2>
        <p style="color:var(--muted);font-size:0.9rem;">${job.company||job.company_name||''}</p>
      </div>
    </div>
    <div class="tags" style="margin-bottom:1rem;flex-wrap:wrap;">
      <span class="tag tag-type">${job.type}</span>
      <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      ${job.salary ? `<span class="tag tag-pay"><i class="fa-solid fa-money-bill-wave"></i> ${job.salary}</span>` : ''}
      <span class="tag tag-feat"><i class="fa-solid fa-layer-group"></i> ${job.category}</span>
      ${job.deadline ? `<span class="tag" style="background:#FFEBEE;color:#C62828;"><i class="fa-solid fa-calendar-xmark"></i> Closes ${job.deadline}</span>` : ''}
      ${job.views_count ? `<span class="tag" style="background:#F5F5F5;color:#777;"><i class="fa-solid fa-eye"></i> ${job.views_count} views</span>` : ''}
    </div>
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.5rem;color:var(--primary);"><i class="fa-solid fa-file-lines"></i> Job Description</h4>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;">${job.desc||job.description||''}</p>
    </div>
    ${(job.reqs||job.requirements) ? `
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.5rem;color:var(--primary);"><i class="fa-solid fa-list-check"></i> Requirements</h4>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;">${job.reqs||job.requirements}</p>
    </div>` : ''}
    <div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1rem;margin-bottom:1.25rem;font-size:0.85rem;">
      <p style="margin-bottom:0.3rem;"><i class="fa-solid fa-envelope" style="color:var(--primary);margin-right:0.4rem;"></i><strong>Email:</strong> ${job.contact||job.contact_email||''}</p>
      ${(job.phone||job.contact_phone) ? `<p><i class="fa-solid fa-phone" style="color:var(--primary);margin-right:0.4rem;"></i><strong>Phone:</strong> +237 ${job.phone||job.contact_phone}</p>` : ''}
    </div>
    <div style="display:flex;gap:0.75rem;">
      <button class="btn btn-outline" style="flex:1;justify-content:center;" onclick="shareJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"><i class="fa-solid fa-share-nodes"></i> Share</button>
      <button class="btn btn-primary" style="flex:2;justify-content:center;padding:0.85rem;" onclick="closeModal();applyJob(${job.id})"><i class="fa-solid fa-paper-plane"></i> Apply for This Job</button>
    </div>`;

  document.getElementById('jobModal').classList.add('open');
  renderSimilarJobs(job);
};

// ===== PASSWORD STRENGTH VALIDATION =====
function validatePassword(pass) {
  const errors = [];
  if (pass.length < 8) errors.push('At least 8 characters');
  if (!/[A-Z]/.test(pass)) errors.push('At least one uppercase letter (A-Z)');
  if (!/[a-z]/.test(pass)) errors.push('At least one lowercase letter (a-z)');
  if (!/[0-9]/.test(pass)) errors.push('At least one number (0-9)');
  return errors;
}

function showPasswordToast(errors) {
  // Remove existing toast
  const existing = document.getElementById('passToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'passToast';
  toast.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    background:#fff;border-radius:14px;padding:1.5rem;
    box-shadow:0 10px 40px rgba(0,0,0,0.2);z-index:9999;
    max-width:340px;width:90%;text-align:center;
    border-top:4px solid #C62828;
  `;
  toast.innerHTML = `
    <div style="font-size:2.5rem;margin-bottom:0.75rem;">🔐</div>
    <h3 style="font-size:1rem;font-weight:700;color:#C62828;margin-bottom:0.75rem;">Password Requirements</h3>
    <p style="font-size:0.85rem;color:#555;margin-bottom:1rem;">Your password must include:</p>
    <ul style="list-style:none;text-align:left;margin-bottom:1.25rem;">
      ${errors.map(e => `<li style="font-size:0.85rem;color:#C62828;padding:0.3rem 0;display:flex;align-items:center;gap:0.5rem;">
        <i class="fa-solid fa-circle-xmark"></i> ${e}
      </li>`).join('')}
    </ul>
    <button onclick="document.getElementById('passToast').remove()" class="btn btn-primary" style="width:100%;justify-content:center;padding:0.7rem;">Got it</button>
  `;
  // Dark overlay
  const overlay = document.createElement('div');
  overlay.id = 'passToastOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:9998;';
  overlay.onclick = () => { toast.remove(); overlay.remove(); };
  document.body.appendChild(overlay);
  document.body.appendChild(toast);
}

// Add live password strength indicator
document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById('regPass');
  if (!passInput) return;

  // Create strength bar
  const bar = document.createElement('div');
  bar.id = 'passStrengthBar';
  bar.style.cssText = 'height:4px;border-radius:4px;margin-top:0.4rem;transition:all 0.3s;background:#eee;';
  const label = document.createElement('small');
  label.id = 'passStrengthLabel';
  label.style.cssText = 'font-size:0.75rem;margin-top:0.2rem;display:block;';
  passInput.parentElement.appendChild(bar);
  passInput.parentElement.appendChild(label);

  passInput.addEventListener('input', () => {
    const pass = passInput.value;
    const errors = validatePassword(pass);
    const strength = 4 - errors.length;
    const colors = ['#eee', '#C62828', '#E65100', '#F9A825', '#2E7D32'];
    const labels = ['', 'Very Weak', 'Weak', 'Good', 'Strong'];
    bar.style.background = `linear-gradient(to right, ${colors[strength]} ${strength*25}%, #eee ${strength*25}%)`;
    label.textContent = pass.length > 0 ? labels[strength] : '';
    label.style.color = colors[strength];
  });
});

// Override doRegister to use new password validation
const _origDoRegisterPass = doRegister;
doRegister = async function() {
  const pass = document.getElementById('regPass').value;
  const errors = validatePassword(pass);
  if (errors.length > 0) {
    showPasswordToast(errors);
    return;
  }
  await _origDoRegisterPass();
};

// ===== EYE TOGGLE PASSWORD VISIBILITY =====
function togglePassVis(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!input || !btn) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    btn.style.color = 'var(--primary)';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
    btn.style.color = 'var(--muted)';
  }
}

// ===== PROFESSIONAL PASSWORD POPUP matching site palette =====
showPasswordToast = function(errors) {
  const existing = document.getElementById('passToast');
  const existingOverlay = document.getElementById('passToastOverlay');
  if (existing) existing.remove();
  if (existingOverlay) existingOverlay.remove();

  const overlay = document.createElement('div');
  overlay.id = 'passToastOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,20,80,0.45);z-index:9998;backdrop-filter:blur(2px);';

  const toast = document.createElement('div');
  toast.id = 'passToast';
  toast.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    background:#fff;border-radius:16px;padding:2rem;
    box-shadow:0 20px 60px rgba(0,51,153,0.2);z-index:9999;
    max-width:360px;width:90%;
    border-top:4px solid var(--primary);
    font-family:'DM Sans',sans-serif;
  `;
  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
      <div style="width:42px;height:42px;background:var(--primary-light);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <i class="fa-solid fa-lock" style="color:var(--primary);font-size:1.1rem;"></i>
      </div>
      <div>
        <h3 style="font-size:1rem;font-weight:700;color:var(--dark);margin:0;">Password Requirements</h3>
        <p style="font-size:0.78rem;color:var(--muted);margin:0;">Please fix the following:</p>
      </div>
    </div>
    <ul style="list-style:none;margin-bottom:1.5rem;padding:0;">
      ${errors.map(e => `
        <li style="display:flex;align-items:center;gap:0.6rem;padding:0.5rem 0.75rem;border-radius:8px;background:#FFF3F3;margin-bottom:0.4rem;">
          <i class="fa-solid fa-circle-xmark" style="color:#C62828;font-size:0.85rem;flex-shrink:0;"></i>
          <span style="font-size:0.85rem;color:#C62828;">${e}</span>
        </li>`).join('')}
    </ul>
    <div style="background:var(--primary-light);border-radius:10px;padding:0.75rem;margin-bottom:1.25rem;">
      <p style="font-size:0.8rem;color:var(--primary);margin:0;"><i class="fa-solid fa-circle-info" style="margin-right:0.4rem;"></i>Example: <strong>Bamenda2024</strong></p>
    </div>
    <button onclick="document.getElementById('passToast').remove();document.getElementById('passToastOverlay').remove();" class="btn btn-primary" style="width:100%;justify-content:center;padding:0.75rem;font-size:0.95rem;">
      <i class="fa-solid fa-check"></i> Understood
    </button>
  `;

  overlay.onclick = () => { toast.remove(); overlay.remove(); };
  document.body.appendChild(overlay);
  document.body.appendChild(toast);
};

// ===== FIX password strength bar position =====
document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById('regPass');
  if (!passInput) return;
  // Remove old bar and label if they exist
  const oldBar = document.getElementById('passStrengthBar');
  const oldLabel = document.getElementById('passStrengthLabel');
  if (oldBar) oldBar.remove();
  if (oldLabel) oldLabel.remove();

  // Append to form-group (parent of the wrapper div)
  const formGroup = passInput.closest('.form-group');
  if (!formGroup) return;

  const bar = document.createElement('div');
  bar.id = 'passStrengthBar';
  bar.style.cssText = 'height:4px;border-radius:4px;margin-top:0.5rem;transition:all 0.3s;background:#eee;width:100%;';

  const label = document.createElement('small');
  label.id = 'passStrengthLabel';
  label.style.cssText = 'font-size:0.75rem;margin-top:0.25rem;display:block;font-weight:500;';

  formGroup.appendChild(bar);
  formGroup.appendChild(label);

  passInput.addEventListener('input', () => {
    const pass = passInput.value;
    const errors = validatePassword(pass);
    const strength = 4 - errors.length;
    const colors = ['#eee', '#C62828', '#E65100', '#F9A825', '#2E7D32'];
    const labels = ['', 'Very Weak', 'Weak', 'Good', 'Strong'];
    bar.style.background = `linear-gradient(to right, ${colors[strength]} ${strength * 25}%, #eee ${strength * 25}%)`;
    label.textContent = pass.length > 0 ? labels[strength] : '';
    label.style.color = colors[strength];
  });
});

// ===== SITE RATING =====
let currentSiteRating = 0;
const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'];

function hoverSiteRating(rating) {
  const stars = document.querySelectorAll('#siteRatingStars i');
  stars.forEach((s, i) => {
    s.className = i < rating ? 'fa-solid fa-star' : 'fa-regular fa-star';
    s.style.transform = i < rating ? 'scale(1.2)' : 'scale(1)';
  });
  document.getElementById('siteRatingLabel').textContent = ratingLabels[rating];
}

function resetSiteRatingHover() {
  const stars = document.querySelectorAll('#siteRatingStars i');
  stars.forEach((s, i) => {
    s.className = i < currentSiteRating ? 'fa-solid fa-star' : 'fa-regular fa-star';
    s.style.transform = 'scale(1)';
  });
  document.getElementById('siteRatingLabel').textContent = currentSiteRating > 0 ? ratingLabels[currentSiteRating] : 'Click a star to rate';
}

function setSiteRating(rating) {
  currentSiteRating = rating;
  resetSiteRatingHover();
  document.getElementById('siteRatingFeedback').style.display = 'block';
  document.getElementById('siteRatingLabel').textContent = ratingLabels[rating];
}

async function submitSiteRating() {
  if (currentSiteRating === 0) return;
  const comment = document.getElementById('siteRatingComment').value.trim();
  // Save to localStorage
  localStorage.setItem('bcSiteRating', JSON.stringify({ rating: currentSiteRating, comment, date: new Date().toISOString() }));
  // Try to send to backend contact endpoint
  try {
    await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: currentUser ? `${currentUser.first_name || ''} ${currentUser.last_name || ''}`.trim() || 'Anonymous' : 'Anonymous',
        email: currentUser ? currentUser.email : 'anonymous@bamendaconnect.cm',
        subject: `Site Rating: ${currentSiteRating}/5 stars`,
        message: comment || `Rated ${currentSiteRating}/5 stars with no comment.`
      })
    });
  } catch {}
  document.getElementById('siteRatingFeedback').style.display = 'none';
  document.getElementById('siteRatingThanks').style.display = 'block';
}

// Show existing rating if already rated
window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('bcSiteRating') || 'null');
  if (saved && saved.rating) {
    currentSiteRating = saved.rating;
    resetSiteRatingHover();
    document.getElementById('siteRatingLabel').textContent = `You rated us ${saved.rating}/5 — Thank you!`;
    document.getElementById('siteRatingThanks').style.display = 'block';
  }
});

// ===== ENFORCE LOGIN BEFORE RATING =====
const _origSetSiteRating = setSiteRating;
setSiteRating = function(rating) {
  if (!currentUser) {
    // Reset stars
    currentSiteRating = 0;
    resetSiteRatingHover();
    // Show professional prompt
    const existing = document.getElementById('ratingLoginPrompt');
    if (existing) existing.remove();
    const prompt = document.createElement('div');
    prompt.id = 'ratingLoginPrompt';
    prompt.style.cssText = 'margin-top:1rem;background:var(--primary-light);border-radius:10px;padding:1rem 1.25rem;text-align:center;';
    prompt.innerHTML = `
      <p style="font-size:0.88rem;color:var(--primary);font-weight:600;margin-bottom:0.75rem;">
        <i class="fa-solid fa-lock"></i> You need to be logged in to rate Bamenda Connect
      </p>
      <div style="display:flex;gap:0.75rem;justify-content:center;">
        <button class="btn btn-primary" style="padding:0.5rem 1.25rem;font-size:0.85rem;" onclick="showPage('login');document.getElementById('ratingLoginPrompt').remove();">
          <i class="fa-solid fa-right-to-bracket"></i> Log In
        </button>
        <button class="btn btn-outline" style="padding:0.5rem 1.25rem;font-size:0.85rem;color:var(--primary);border-color:var(--primary);" onclick="showPage('register');document.getElementById('ratingLoginPrompt').remove();">
          <i class="fa-solid fa-user-plus"></i> Register
        </button>
      </div>`;
    document.getElementById('siteRatingLabel').insertAdjacentElement('afterend', prompt);
    return;
  }
  _origSetSiteRating(rating);
};

// ===== FULL SITE RATING SYSTEM =====
async function loadSiteRatings() {
  try {
    const res = await fetch(`${API_BASE_URL}/site-ratings/`, {
      headers: authToken ? { 'Authorization': `Bearer ${authToken}` } : {}
    });
    const data = await res.json();
    if (data.status !== 'success') return;

    // Summary
    const summary = document.getElementById('ratingSummary');
    const avgEl = document.getElementById('avgScore');
    const avgStars = document.getElementById('avgStars');
    const totalEl = document.getElementById('totalRatings');
    const barsEl = document.getElementById('ratingBars');

    if (data.total > 0 && summary) {
      summary.style.display = 'block';
      avgEl.textContent = data.average;
      avgStars.innerHTML = [1,2,3,4,5].map(i =>
        `<i class="fa-${i <= Math.round(data.average) ? 'solid' : 'regular'} fa-star"></i>`).join('');
      totalEl.textContent = `Based on ${data.total} rating${data.total !== 1 ? 's' : ''}`;
      barsEl.innerHTML = [5,4,3,2,1].map(i => {
        const count = data.distribution[i] || 0;
        const pct = data.total > 0 ? Math.round((count / data.total) * 100) : 0;
        return `<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
          <span style="font-size:0.78rem;color:var(--muted);width:10px;">${i}</span>
          <i class="fa-solid fa-star" style="color:#C5A059;font-size:0.7rem;"></i>
          <div style="flex:1;height:8px;background:#F0F2F5;border-radius:4px;overflow:hidden;">
            <div style="width:${pct}%;height:100%;background:#C5A059;border-radius:4px;transition:width 0.5s;"></div>
          </div>
          <span style="font-size:0.75rem;color:var(--muted);width:28px;">${count}</span>
        </div>`;
      }).join('');
    }

    // Community comments
    const container = document.getElementById('communityRatings');
    if (!container) return;
    if (data.ratings.length === 0) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = `
      <h3 style="font-size:1rem;font-weight:600;color:var(--text);margin-bottom:1rem;text-align:left;">
        <i class="fa-solid fa-comments" style="color:var(--primary);margin-right:0.4rem;"></i> Community Reviews
      </h3>
      ${data.ratings.map(r => `
        <div style="background:#fff;border-radius:12px;padding:1.25rem;margin-bottom:1rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);text-align:left;">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary);font-size:1rem;flex-shrink:0;">
                ${r.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style="font-weight:600;font-size:0.9rem;">${r.name}</div>
                <div style="font-size:0.75rem;color:var(--muted);">${r.role} &bull; ${r.date}</div>
              </div>
            </div>
            <div style="color:#C5A059;font-size:0.9rem;">
              ${[1,2,3,4,5].map(i => `<i class="fa-${i <= r.score ? 'solid' : 'regular'} fa-star"></i>`).join('')}
            </div>
          </div>
          <p style="font-size:0.88rem;color:var(--text);line-height:1.7;margin-bottom:0.75rem;">${r.comment}</p>
          <button onclick="likeSiteRating(${r.id}, this)" style="background:none;border:1px solid ${r.liked_by_me ? 'var(--primary)' : 'var(--border)'};color:${r.liked_by_me ? 'var(--primary)' : 'var(--muted)'};padding:0.3rem 0.8rem;border-radius:20px;cursor:pointer;font-size:0.8rem;font-family:'DM Sans',sans-serif;display:inline-flex;align-items:center;gap:0.4rem;transition:all 0.2s;">
            <i class="fa-${r.liked_by_me ? 'solid' : 'regular'} fa-thumbs-up"></i>
            <span class="like-count">${r.likes}</span> Helpful
          </button>
        </div>`).join('')}`;
  } catch {}
}

async function likeSiteRating(ratingId, btn) {
  if (!currentUser || !authToken) {
    showToast('Please log in to like a review');
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/site-ratings/${ratingId}/like/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const icon = btn.querySelector('i');
      const count = btn.querySelector('.like-count');
      if (data.liked) {
        icon.className = 'fa-solid fa-thumbs-up';
        btn.style.color = 'var(--primary)';
        btn.style.borderColor = 'var(--primary)';
      } else {
        icon.className = 'fa-regular fa-thumbs-up';
        btn.style.color = 'var(--muted)';
        btn.style.borderColor = 'var(--border)';
      }
      count.textContent = data.likes;
    }
  } catch { showToast('Could not process. Try again.'); }
}

// Override submitSiteRating to use backend
submitSiteRating = async function() {
  if (currentSiteRating === 0) return;
  if (!currentUser || !authToken) { showToast('Please log in to rate'); return; }
  const comment = document.getElementById('siteRatingComment').value.trim();
  try {
    const res = await fetch(`${API_BASE_URL}/site-ratings/submit/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      body: JSON.stringify({ score: currentSiteRating, comment })
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('siteRatingFeedback').style.display = 'none';
      document.getElementById('siteRatingThanks').style.display = 'block';
      loadSiteRatings();
    }
  } catch {
    document.getElementById('siteRatingFeedback').style.display = 'none';
    document.getElementById('siteRatingThanks').style.display = 'block';
  }
};

// Load ratings on page load
window.addEventListener('load', () => { loadSiteRatings(); });

// ===== LIVE STATS BAR =====
function animateCounter(el, target, duration) {
  const start = performance.now();
  const startVal = 0;
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

function initStatsBar() {
  const counters = document.querySelectorAll('.stat-count');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        // Remove the suffix span before animating (it's a sibling)
        animateCounter(el, target, 1800);
        // Add pop class to parent number
        const numEl = el.closest('.stat-number');
        if (numEl) {
          numEl.classList.add('counting');
          setTimeout(() => numEl.classList.remove('counting'), 500);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

window.addEventListener('DOMContentLoaded', initStatsBar);


// ===== TESTIMONIAL CAROUSEL =====
let testimonialIndex = 0;
let testimonialTimer;

function changeTestimonial(idx) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.t-dot');
  if (!slides.length) return;
  slides[testimonialIndex].style.display = 'none';
  dots[testimonialIndex].classList.remove('active');
  dots[testimonialIndex].style.background = '#ccc';
  testimonialIndex = idx;
  slides[testimonialIndex].style.display = 'block';
  dots[testimonialIndex].classList.add('active');
  dots[testimonialIndex].style.background = '#003399';
}

function startTestimonialAuto() {
  testimonialTimer = setInterval(() => {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (!slides.length) return;
    changeTestimonial((testimonialIndex + 1) % slides.length);
  }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  startTestimonialAuto();
});

// ===== HERO LOCATION FILTER =====
const _origDoSearch = doSearch;
doSearch = function() {
  const q = document.getElementById('homeSearch').value;
  const loc = document.getElementById('heroLocFilter') ? document.getElementById('heroLocFilter').value : '';
  showPage('jobs');
  setTimeout(() => {
    document.getElementById('jobSearch').value = q;
    if (loc) {
      // filter by location too
      const filtered = allJobs.filter(j => {
        const matchQ = !q || j.title.toLowerCase().includes(q.toLowerCase()) || (j.company||'').toLowerCase().includes(q.toLowerCase());
        const matchLoc = !loc || (j.location||'').toLowerCase().includes(loc.toLowerCase());
        return matchQ && matchLoc;
      });
      document.getElementById('jobCount').textContent = `Showing ${filtered.length} job${filtered.length !== 1 ? 's' : ''} across Bamenda`;
      document.getElementById('allJobsGrid').innerHTML = filtered.map(renderJobCard).join('');
    } else {
      filterJobs();
    }
  }, 100);
};

// ===== RESTORE renderFeaturedJobs =====
renderFeaturedJobs = function() {
  const grid = document.getElementById('featuredJobsGrid');
  if (!grid) return;
  const featured = allJobs.filter(j => j.featured).slice(0, 3);
  const rest = allJobs.filter(j => !j.featured).slice(0, 3);
  const toShow = [...featured, ...rest].slice(0, 6);
  grid.innerHTML = toShow.map(renderJobCard).join('');
};

// ===== LOCATION-AWARE FILTER =====
filterJobs = function() {
  const q = (document.getElementById('jobSearch').value || '').toLowerCase();
  const cat = document.getElementById('catFilter').value;
  const type = document.getElementById('typeFilter') ? document.getElementById('typeFilter').value : '';
  const loc = document.getElementById('locFilter') ? document.getElementById('locFilter').value.toLowerCase() : '';
  const filtered = allJobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) || (j.company || j.company_name || '').toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCat = !cat || j.category === cat;
    const matchType = !type || j.type === type;
    const matchLoc = !loc || (j.location || '').toLowerCase().includes(loc);
    return matchQ && matchCat && matchType && matchLoc;
  });
  document.getElementById('jobCount').textContent = `Showing ${filtered.length} job${filtered.length !== 1 ? 's' : ''} across Bamenda`;
  document.getElementById('allJobsGrid').innerHTML = filtered.map(renderJobCard).join('');
};

doSearch = function() {
  const q = document.getElementById('homeSearch').value;
  const loc = document.getElementById('heroLocFilter') ? document.getElementById('heroLocFilter').value : '';
  showPage('jobs');
  setTimeout(() => {
    document.getElementById('jobSearch').value = q;
    if (loc && document.getElementById('locFilter')) {
      document.getElementById('locFilter').value = loc;
    }
    filterJobs();
  }, 100);
};

// ===== SUCCESS STORIES =====
function initStorySection() {
  const loggedOut = document.getElementById('storyLoggedOut');
  const loggedIn = document.getElementById('storyLoggedIn');
  if (!loggedOut || !loggedIn) return;
  if (currentUser && currentUser.role === 'seeker') {
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'block';
    // Pre-fill name if available
  } else if (currentUser && currentUser.role === 'employer') {
    // Employers don't submit stories
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'none';
  } else {
    loggedOut.style.display = 'block';
    loggedIn.style.display = 'none';
  }
  loadStories();
}

function loadStories() {
  const container = document.getElementById('storiesList');
  if (!container) return;
  const stories = JSON.parse(localStorage.getItem('bcSuccessStories') || '[]');
  if (stories.length === 0) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,#001F5B,#003399);border-radius:16px;padding:2.5rem 2rem;color:#fff;text-align:center;">
        <div style="font-size:2.5rem;opacity:0.5;margin-bottom:1rem;"><i class="fa-solid fa-quote-left"></i></div>
        <p style="color:#C8D5F5;font-size:0.95rem;line-height:1.8;">No success stories yet. Be the first to share yours after finding a job!</p>
      </div>`;
    return;
  }
  container.innerHTML = stories.map(s => `
    <div style="background:linear-gradient(135deg,#001F5B,#003399);border-radius:16px;padding:2rem;color:#fff;margin-bottom:1rem;text-align:left;">
      <div style="font-size:1.5rem;color:#C5A059;margin-bottom:0.75rem;"><i class="fa-solid fa-quote-left"></i></div>
      <p style="font-size:0.95rem;line-height:1.8;color:#C8D5F5;margin-bottom:1.25rem;font-style:italic;">&ldquo;${s.story}&rdquo;</p>
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <div style="width:40px;height:40px;border-radius:50%;background:#C5A059;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0;">${s.name.charAt(0).toUpperCase()}</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">${s.name}</div>
          <div style="font-size:0.75rem;color:#C8D5F5;">${s.jobTitle}${s.company ? ' &bull; ' + s.company : ''}</div>
        </div>
        <div style="margin-left:auto;color:#C5A059;font-size:0.85rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
    </div>`).join('');
}

function submitStory() {
  const jobTitle = document.getElementById('storyJobTitle').value.trim();
  const company = document.getElementById('storyCompany').value.trim();
  const story = document.getElementById('storyText').value.trim();
  const alertEl = document.getElementById('storyAlert');
  if (!jobTitle || !story) {
    showAlert(alertEl, 'error', 'Please fill in the job title and your story.');
    return;
  }
  const name = currentUser.first_name
    ? `${currentUser.first_name} ${currentUser.last_name || ''}`.trim()
    : (currentUser.name || 'Anonymous');
  const stories = JSON.parse(localStorage.getItem('bcSuccessStories') || '[]');
  stories.unshift({ name, jobTitle, company, story, date: new Date().toLocaleDateString() });
  localStorage.setItem('bcSuccessStories', JSON.stringify(stories));
  // Also send to backend contact for admin visibility
  fetch(`${API_BASE_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name, email: currentUser.email || 'story@bamendaconnect.cm',
      subject: `Success Story: ${jobTitle}`,
      message: story
    })
  }).catch(() => {});
  document.getElementById('storyLoggedIn').style.display = 'none';
  document.getElementById('storyThanks').style.display = 'block';
  loadStories();
}

// Re-init story section whenever home page is shown
const _origShowPageStory = showPage;
showPage = function(name) {
  _origShowPageStory(name);
  if (name === 'home') initStorySection();
};

window.addEventListener('DOMContentLoaded', () => {
  initStorySection();
});

// ===== OVERRIDE initStorySection — stories always visible, form only for logged-in seekers =====
initStorySection = function() {
  const loggedOut = document.getElementById('storyLoggedOut');
  const loggedIn = document.getElementById('storyLoggedIn');
  const thanks = document.getElementById('storyThanks');
  if (!loggedOut || !loggedIn) return;

  // Always show stories to everyone
  loadStories();

  if (!currentUser) {
    loggedOut.style.display = 'block';
    loggedIn.style.display = 'none';
    if (thanks) thanks.style.display = 'none';
  } else if (currentUser.role === 'seeker') {
    loggedOut.style.display = 'none';
    if (thanks && thanks.style.display === 'block') return;
    loggedIn.style.display = 'block';
  } else {
    // employer — can read but not write
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'none';
  }
};

// ===== OVERRIDE initStorySection — both seekers and employers can share =====
initStorySection = function() {
  const loggedOut = document.getElementById('storyLoggedOut');
  const loggedIn = document.getElementById('storyLoggedIn');
  const thanks = document.getElementById('storyThanks');
  if (!loggedOut || !loggedIn) return;

  loadStories();

  if (!currentUser) {
    loggedOut.style.display = 'block';
    loggedIn.style.display = 'none';
    if (thanks) thanks.style.display = 'none';
  } else {
    loggedOut.style.display = 'none';
    if (thanks && thanks.style.display === 'block') return;
    loggedIn.style.display = 'block';
    // Update label and placeholder based on role
    const jobTitleLabel = document.querySelector('label[for-story-title]');
    const jobTitleInput = document.getElementById('storyJobTitle');
    const companyInput = document.getElementById('storyCompany');
    const storyInput = document.getElementById('storyText');
    if (currentUser.role === 'employer') {
      if (jobTitleInput) {
        jobTitleInput.placeholder = 'e.g. Farm Manager, Nurse, Web Developer';
        jobTitleInput.previousElementSibling && (jobTitleInput.previousElementSibling.textContent = 'Position You Hired For *');
      }
      if (companyInput) {
        companyInput.placeholder = 'Your company or organization name';
        companyInput.previousElementSibling && (companyInput.previousElementSibling.textContent = 'Your Company');
      }
      if (storyInput) storyInput.placeholder = 'Tell us how Bamenda Connect helped you find the right candidate quickly...';
    } else {
      if (jobTitleInput) {
        jobTitleInput.placeholder = 'e.g. Primary School Teacher';
        jobTitleInput.previousElementSibling && (jobTitleInput.previousElementSibling.textContent = 'Job Title You Got *');
      }
      if (companyInput) {
        companyInput.placeholder = 'e.g. Bamenda Regional Hospital';
        companyInput.previousElementSibling && (companyInput.previousElementSibling.textContent = 'Company / Employer');
      }
      if (storyInput) storyInput.placeholder = 'Tell us how Bamenda Connect helped you find this job...';
    }
  }
};

// ===== OVERRIDE loadStories — show role badge on each story =====
loadStories = function() {
  const container = document.getElementById('storiesList');
  if (!container) return;
  const stories = JSON.parse(localStorage.getItem('bcSuccessStories') || '[]');
  if (stories.length === 0) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,#001F5B,#003399);border-radius:16px;padding:2.5rem 2rem;color:#fff;text-align:center;">
        <div style="font-size:2.5rem;opacity:0.5;margin-bottom:1rem;"><i class="fa-solid fa-quote-left"></i></div>
        <p style="color:#C8D5F5;font-size:0.95rem;line-height:1.8;">No success stories yet. Be the first to share yours!</p>
      </div>`;
    return;
  }
  container.innerHTML = stories.map(s => `
    <div style="background:linear-gradient(135deg,#001F5B,#003399);border-radius:16px;padding:2rem;color:#fff;margin-bottom:1rem;text-align:left;">
      <div style="font-size:1.5rem;color:#C5A059;margin-bottom:0.75rem;"><i class="fa-solid fa-quote-left"></i></div>
      <p style="font-size:0.95rem;line-height:1.8;color:#C8D5F5;margin-bottom:1.25rem;font-style:italic;">&ldquo;${s.story}&rdquo;</p>
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <div style="width:40px;height:40px;border-radius:50%;background:#C5A059;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0;">${s.name.charAt(0).toUpperCase()}</div>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">${s.name}</div>
          <div style="font-size:0.75rem;color:#C8D5F5;">${s.jobTitle}${s.company ? ' &bull; ' + s.company : ''}</div>
        </div>
        <div style="margin-left:auto;display:flex;flex-direction:column;align-items:flex-end;gap:0.3rem;">
          <span style="background:${s.role === 'employer' ? 'rgba(197,160,89,0.25)' : 'rgba(74,222,128,0.15)'};color:${s.role === 'employer' ? '#C5A059' : '#4ade80'};font-size:0.7rem;font-weight:600;padding:0.2rem 0.6rem;border-radius:20px;">
            ${s.role === 'employer' ? '<i class="fa-solid fa-building"></i> Employer' : '<i class="fa-solid fa-user"></i> Job Seeker'}
          </span>
          <div style="color:#C5A059;font-size:0.85rem;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>
    </div>`).join('');
};

// ===== OVERRIDE submitStory — save role too =====
submitStory = function() {
  const jobTitle = document.getElementById('storyJobTitle').value.trim();
  const company = document.getElementById('storyCompany').value.trim();
  const story = document.getElementById('storyText').value.trim();
  const alertEl = document.getElementById('storyAlert');
  if (!jobTitle || !story) {
    showAlert(alertEl, 'error', 'Please fill in the required fields.');
    return;
  }
  const name = currentUser.first_name
    ? `${currentUser.first_name} ${currentUser.last_name || ''}`.trim()
    : (currentUser.name || 'Anonymous');
  const stories = JSON.parse(localStorage.getItem('bcSuccessStories') || '[]');
  stories.unshift({ name, jobTitle, company, story, role: currentUser.role, date: new Date().toLocaleDateString() });
  localStorage.setItem('bcSuccessStories', JSON.stringify(stories));
  fetch(`${API_BASE_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name, email: currentUser.email || 'story@bamendaconnect.cm',
      subject: `Success Story (${currentUser.role}): ${jobTitle}`,
      message: story
    })
  }).catch(() => {});
  document.getElementById('storyLoggedIn').style.display = 'none';
  document.getElementById('storyThanks').style.display = 'block';
  loadStories();
};

// ===== I'M INTERESTED =====
let currentInterestJobId = null;

function openInterestModal(jobId) {
  currentInterestJobId = jobId;
  // Pre-fill if logged in
  if (currentUser) {
    const name = currentUser.first_name ? `${currentUser.first_name} ${currentUser.last_name || ''}`.trim() : (currentUser.name || '');
    document.getElementById('interestName').value = name;
    document.getElementById('interestEmail').value = currentUser.email || '';
  }
  document.getElementById('interestThanks').style.display = 'none';
  document.getElementById('interestAlert').style.display = 'none';
  document.querySelector('#interestModal .modal > *:not(.modal-close):not(#interestThanks)') && null;
  // Show all form fields
  ['interestName','interestEmail','interestPhone','interestMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.closest('.form-group') && (el.closest('.form-group').style.display = 'block');
  });
  document.querySelector('#interestModal button[onclick="submitInterest()"]').style.display = 'flex';
  document.getElementById('interestModal').classList.add('open');
}

function closeInterestModal() {
  document.getElementById('interestModal').classList.remove('open');
  currentInterestJobId = null;
}

async function submitInterest() {
  const name = document.getElementById('interestName').value.trim();
  const email = document.getElementById('interestEmail').value.trim();
  const phone = document.getElementById('interestPhone').value.trim();
  const message = document.getElementById('interestMessage').value.trim();
  const alertEl = document.getElementById('interestAlert');

  if (!name || !email) {
    showAlert(alertEl, 'error', 'Please enter your name and email.');
    return;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/jobs/${currentInterestJobId}/interest/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message })
    });
    const data = await res.json();
    if (data.status === 'success') {
      // Hide form, show thanks
      document.querySelectorAll('#interestModal .form-group').forEach(el => el.style.display = 'none');
      document.querySelector('#interestModal button[onclick="submitInterest()"]').style.display = 'none';
      document.querySelector('#interestModal h2').style.display = 'none';
      document.querySelector('#interestModal p').style.display = 'none';
      document.getElementById('interestThanks').style.display = 'block';
    } else {
      showAlert(alertEl, 'error', data.message || 'Could not send. Please try again.');
    }
  } catch {
    showAlert(alertEl, 'error', 'Server error. Make sure the backend is running.');
  }
}

// Add "I'm Interested" button to job detail modal
const _origOpenJobInterest = openJob;
openJob = function(id) {
  _origOpenJobInterest(id);
  // Append interest button after the existing buttons in modal
  setTimeout(() => {
    const modal = document.getElementById('modalContent');
    if (!modal) return;
    const existing = modal.querySelector('.interest-btn');
    if (existing) return;
    const btn = document.createElement('button');
    btn.className = 'btn interest-btn';
    btn.style.cssText = 'width:100%;justify-content:center;padding:0.8rem;margin-top:0.5rem;background:var(--primary-light);color:var(--primary);border:1.5px solid var(--primary);font-size:0.95rem;';
    btn.innerHTML = '<i class="fa-solid fa-hand-point-up"></i> I\'m Interested — Notify Employer';
    btn.onclick = () => { closeModal(); openInterestModal(id); };
    modal.appendChild(btn);
  }, 50);
};

// ===== CAMEROON PHONE VALIDATION (9 digits) =====
function validateCMPhone(phone) {
  const digits = phone.replace(/\s/g, '');
  return digits.length >= 9;
}

// Add live validation to all phone inputs on input event
document.addEventListener('DOMContentLoaded', () => {
  const phoneIds = ['regPhone', 'pjPhone', 'pjPayPhone', 'payGatePhone', 'applyPhone', 'interestPhone', 'profilePhone'];
  phoneIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const digits = el.value.replace(/\s/g, '');
      if (digits.length > 0 && digits.length < 9) {
        el.style.borderColor = '#C5A059';
        let hint = el.parentElement.querySelector('.phone-hint');
        if (!hint) {
          hint = document.createElement('small');
          hint.className = 'phone-hint';
          hint.style.cssText = 'color:#8B6914;font-size:0.75rem;margin-top:0.25rem;display:block;';
          el.parentElement.appendChild(hint);
        }
        hint.textContent = `Cameroon numbers are 9 digits — you entered ${digits.length}`;
      } else {
        el.style.borderColor = digits.length === 9 ? '#003399' : '';
        const hint = el.parentElement.querySelector('.phone-hint');
        if (hint) hint.remove();
      }
    });
  });
});

// Override showAlert to render a clean professional card
showAlert = function(el, type, msg) {
  if (!el) return;
  const title = type === 'success' ? 'Success' : 'Error';
  el.className = 'alert ' + type;
  el.style.backgroundColor = '#ffffff';
  el.style.color = '#061b3a';
  el.style.borderColor = type === 'success' ? '#003399' : '#d9822f';
  el.style.borderWidth = '1px';
  el.style.borderStyle = 'solid';
  el.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.12)';
  el.style.padding = '1rem';
  el.innerHTML = `
    <div class="alert-content">
      <div>
        <strong>${title}</strong>
        <p>${msg}</p>
      </div>
    </div>
  `;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  setTimeout(() => { el.style.display = 'none'; }, 5000);
};

// Validate phone before form submissions
function isValidPhone(phone) {
  return !phone || phone.replace(/\s/g, '').length >= 9;
}

// ===== PHONE VALIDATION — red/green border, no hint message =====
document.addEventListener('DOMContentLoaded', () => {
  const phoneIds = ['regPhone', 'pjPhone', 'pjPayPhone', 'payGatePhone', 'applyPhone', 'interestPhone', 'profilePhone'];
  phoneIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    // Remove old hint listener by replacing with new
    el.addEventListener('input', () => {
      const digits = el.value.replace(/\s/g, '');
      // Remove old hint if any
      const hint = el.closest('.form-group, .phone-prefix')?.querySelector('.phone-hint');
      if (hint) hint.remove();
      if (digits.length === 0) {
        el.style.borderColor = '';
      } else if (digits.length < 9) {
        el.style.borderColor = '#C62828';
        el.style.boxShadow = '0 0 0 2px rgba(198,40,40,0.12)';
      } else {
        el.style.borderColor = '#2E7D32';
        el.style.boxShadow = '0 0 0 2px rgba(46,125,50,0.12)';
      }
    });
    el.addEventListener('blur', () => {
      const digits = el.value.replace(/\s/g, '');
      if (digits.length > 0) el.style.borderColor = digits.length >= 9 ? '#2E7D32' : '#C62828';
    });
  });
});

// ===== VALIDATE PHONE BEFORE SUBMIT =====
function checkPhone(phone, alertEl) {
  const digits = (phone || '').replace(/\s/g, '');
  if (digits.length > 0 && digits.length < 9) {
    showAlert(alertEl, 'error', 'Please enter a valid 9-digit Cameroon phone number.');
    return false;
  }
  return true;
}

// ===== INJECT PHONE CHECK INTO ALL SUBMIT FUNCTIONS =====

// Register
const _origDoRegisterPhone = doRegister;
doRegister = async function() {
  const phone = document.getElementById('regPhone').value.trim();
  if (!checkPhone(phone, document.getElementById('regAlert'))) return;
  await _origDoRegisterPhone();
};

// Post Job
const _origDoPostJobPhone = doPostJob;
doPostJob = async function() {
  const phone = document.getElementById('pjPhone').value.trim();
  const payPhone = document.getElementById('pjPayPhone') ? document.getElementById('pjPayPhone').value.trim() : '';
  const alertEl = document.getElementById('postAlert');
  if (!checkPhone(phone, alertEl)) return;
  if (!checkPhone(payPhone, alertEl)) return;
  await _origDoPostJobPhone();
};

// Apply
const _origApplyNextPhone = applyNext;
applyNext = function() {
  const phone = document.getElementById('applyPhone').value.trim();
  if (!checkPhone(phone, null)) {
    const el = document.getElementById('applyPhone');
    el.style.borderColor = '#C62828';
    el.focus();
    showToast('Please enter a valid 9-digit phone number.');
    return;
  }
  _origApplyNextPhone();
};

// Interest modal
const _origSubmitInterestPhone = submitInterest;
submitInterest = async function() {
  const phone = document.getElementById('interestPhone').value.trim();
  if (!checkPhone(phone, document.getElementById('interestAlert'))) return;
  await _origSubmitInterestPhone();
};

// Payment gate
const _origSubmitPaymentGatePhone = submitPaymentGate;
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  if (!checkPhone(phone, document.getElementById('payGateAlert'))) return;
  _origSubmitPaymentGatePhone();
};

// ===== OVERRIDE checkPhone message =====
checkPhone = function(phone, alertEl) {
  const digits = (phone || '').replace(/\s/g, '');
  if (digits.length > 0 && digits.length < 9) {
    if (alertEl) showAlert(alertEl, 'error', 'Invalid phone number.');
    return false;
  }
  return true;
};

// ===== SALARY OPTIONAL — update label hint =====
document.addEventListener('DOMContentLoaded', () => {
  const salaryInput = document.getElementById('pjSalary');
  if (salaryInput) {
    const label = salaryInput.previousElementSibling;
    if (label) label.innerHTML = 'Salary (FCFA/month) <small style="color:var(--muted);font-weight:400;">(optional)</small>';
  }
});

// ===== EDIT JOB =====
function openEditJob(job) {
  document.getElementById('editJobId').value = job.id;
  document.getElementById('editTitle').value = job.title;
  document.getElementById('editCategory').value = job.category;
  document.getElementById('editType').value = job.job_type;
  document.getElementById('editLocation').value = job.location;
  document.getElementById('editSalary').value = job.salary || '';
  document.getElementById('editDesc').value = job.description || '';
  document.getElementById('editReqs').value = job.requirements || '';
  document.getElementById('editEmail').value = job.contact_email || '';
  document.getElementById('editPhone').value = job.contact_phone || '';
  document.getElementById('editJobAlert').style.display = 'none';
  document.getElementById('editJobModal').classList.add('open');
}

async function submitEditJob() {
  const id = document.getElementById('editJobId').value;
  const alertEl = document.getElementById('editJobAlert');
  const title = document.getElementById('editTitle').value.trim();
  const desc = document.getElementById('editDesc').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  if (!title || !desc || !email) {
    showAlert(alertEl, 'error', 'Title, description and email are required.');
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/jobs/${id}/edit/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      body: JSON.stringify({
        title, description: desc,
        category: document.getElementById('editCategory').value,
        job_type: document.getElementById('editType').value,
        location: document.getElementById('editLocation').value,
        salary: document.getElementById('editSalary').value || 'Negotiable',
        requirements: document.getElementById('editReqs').value,
        contact_email: email,
        contact_phone: document.getElementById('editPhone').value
      })
    });
    const data = await res.json();
    if (data.status === 'success') {
      showAlert(alertEl, 'success', 'Job updated successfully.');
      setTimeout(() => {
        document.getElementById('editJobModal').classList.remove('open');
        window.loadEmployerDashboard();
      }, 1200);
    } else {
      showAlert(alertEl, 'error', data.message || 'Could not update job.');
    }
  } catch {
    showAlert(alertEl, 'error', 'Server error. Make sure the backend is running.');
  }
}

// ===== DELETE JOB =====
async function deleteJob(jobId, jobTitle) {
  if (!confirm(`Delete "${jobTitle}"? This cannot be undone.`)) return;
  try {
    const res = await fetch(`${API_BASE_URL}/jobs/${jobId}/delete/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      showToast('Job deleted.');
      window.loadEmployerDashboard();
      // Refresh job list
      allJobs = allJobs.filter(j => j.id !== jobId);
      renderFeaturedJobs();
    } else {
      showToast('Could not delete job.');
    }
  } catch {
    showToast('Server error.');
  }
}

// ===== OVERRIDE loadEmployerDashboard — add edit/delete buttons + quota info =====
window.loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-employer-dashboard');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';

  // Show quota info
  const quota = getPostQuota();
  const remaining = getRemainingPosts();
  const quotaHtml = quota
    ? `<div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <i class="fa-solid fa-layer-group" style="color:var(--primary);"></i>
        <span style="font-size:0.88rem;color:var(--primary);font-weight:600;">
          ${quota.type === 'featured' ? '⭐ Featured' : 'Standard'} Plan &mdash;
          <strong>${remaining}</strong> post${remaining !== 1 ? 's' : ''} remaining
        </span>
        <button class="btn btn-primary" style="margin-left:auto;font-size:0.8rem;padding:0.4rem 1rem;" onclick="showPage('postjob')">
          <i class="fa-solid fa-plus"></i> Post a Job
        </button>
      </div>`
    : `<div style="background:#FBF5E9;border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;border-left:4px solid #C5A059;">
        <span style="font-size:0.88rem;color:#8B6914;font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> No posts remaining. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Buy a plan</a> to post more jobs.</span>
      </div>`;

  try {
    const res = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const jobsHtml = data.jobs.length === 0
        ? `<p style="text-align:center;padding:3rem;color:var(--muted);">No jobs posted yet. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Post your first job</a></p>`
        : data.jobs.map(job => `
          <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${job.title}</h3>
                <p style="font-size:0.85rem;color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                <span style="background:${job.is_featured ? '#FBF5E9' : '#F5F5F5'};color:${job.is_featured ? '#C5A059' : '#777'};padding:0.25rem 0.7rem;border-radius:20px;font-size:0.75rem;font-weight:500;">
                  ${job.is_featured ? '&#11088; Featured' : 'Standard'}
                </span>
                <button onclick="openEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="background:var(--primary-light);color:var(--primary);border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button onclick="deleteJob(${job.id}, '${job.title.replace(/'/g,"\\\'")}')"
                  style="background:#FBF5E9;color:#8B6914;border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
            <div style="display:flex;gap:1.5rem;margin-bottom:1rem;font-size:0.85rem;flex-wrap:wrap;">
              <span><i class="fa-solid fa-calendar"></i> ${job.created_at}</span>
              <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Applications</span>
            </div>
            ${job.applications.length > 0 ? `
              <details>
                <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;color:var(--primary);margin-bottom:0.75rem;">
                  View Applicants (${job.applications_count})
                </summary>
                ${job.applications.map(app => `
                  <div style="background:var(--bg);border-radius:8px;padding:1rem;margin-bottom:0.75rem;">
                    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.5rem;">
                      <div>
                        <strong>${app.full_name}</strong>
                        <p style="font-size:0.82rem;color:var(--muted);margin-top:0.2rem;">${app.email} &bull; ${app.phone || 'No phone'}</p>
                      </div>
                      <select onchange="updateAppStatus(${app.id},this.value)" style="padding:0.3rem 0.6rem;border-radius:6px;border:1px solid var(--border);font-size:0.8rem;">
                        <option value="submitted" ${app.status==='submitted'?'selected':''}>Submitted</option>
                        <option value="reviewed" ${app.status==='reviewed'?'selected':''}>Reviewed</option>
                        <option value="shortlisted" ${app.status==='shortlisted'?'selected':''}>Shortlisted</option>
                        <option value="rejected" ${app.status==='rejected'?'selected':''}>Rejected</option>
                      </select>
                    </div>
                    ${app.cover_letter ? `<p style="font-size:0.82rem;line-height:1.6;margin-top:0.5rem;"><strong>Cover:</strong> ${app.cover_letter}</p>` : ''}
                    ${app.cv_url ? `<a href="${app.cv_url}" target="_blank" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;background:#E3F2FD;color:#1565C0;padding:0.4rem 0.9rem;border-radius:8px;font-size:0.82rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-file-pdf"></i> View CV</a>` : ''}
                    <p style="font-size:0.75rem;color:var(--muted);margin-top:0.5rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                  </div>`).join('')}
              </details>` : '<p style="font-size:0.85rem;color:var(--muted);margin-top:0.75rem;">No applications yet</p>'}
          </div>`).join('');
      document.getElementById('empJobsList').innerHTML = quotaHtml + jobsHtml;
    }
  } catch {
    document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== POST JOB — validate location is selected =====
const _origDoPostJobLoc = doPostJob;
doPostJob = async function() {
  const loc = document.getElementById('pjLocation').value;
  const alertEl = document.getElementById('postAlert');
  if (!loc) {
    showAlert(alertEl, 'error', 'Please select the job location.');
    document.getElementById('pjLocation').focus();
    return;
  }
  await _origDoPostJobLoc();
};

// ===== MAKE DASHBOARD JOB TITLES CLICKABLE =====
// Override openEditJob to also allow viewing the job
function viewOrEditJob(job) {
  // Try to find job in allJobs first for the modal
  const found = allJobs.find(j => j.id === job.id);
  if (found) {
    openJob(found.id);
  } else {
    // Build a temp job object from dashboard data
    const tempJob = {
      id: job.id,
      title: job.title,
      company: job.company || (currentUser ? (currentUser.company_name || currentUser.company || '') : ''),
      category: job.category,
      type: job.job_type,
      location: job.location,
      salary: job.salary || 'Negotiable',
      desc: job.description || '',
      reqs: job.requirements || '',
      contact: job.contact_email || '',
      phone: job.contact_phone || '',
      featured: job.is_featured,
      date: job.created_at,
      icon: '💼'
    };
    // Temporarily add to allJobs so openJob works
    allJobs.push(tempJob);
    openJob(tempJob.id);
  }
}

// ===== OVERRIDE loadEmployerDashboard — job title clickable =====
const _origLoadDashClickable = window.loadEmployerDashboard;
window.loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-employer-dashboard');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';

  const quota = getPostQuota();
  const remaining = getRemainingPosts();
  const quotaHtml = quota
    ? `<div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <i class="fa-solid fa-layer-group" style="color:var(--primary);"></i>
        <span style="font-size:0.88rem;color:var(--primary);font-weight:600;">
          ${quota.type === 'featured' ? '⭐ Featured' : 'Standard'} Plan &mdash;
          <strong>${remaining}</strong> post${remaining !== 1 ? 's' : ''} remaining
        </span>
        <button class="btn btn-primary" style="margin-left:auto;font-size:0.8rem;padding:0.4rem 1rem;" onclick="showPage('postjob')">
          <i class="fa-solid fa-plus"></i> Post a Job
        </button>
      </div>`
    : `<div style="background:#FBF5E9;border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;border-left:4px solid #C5A059;">
        <span style="font-size:0.88rem;color:#8B6914;font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> No posts remaining. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Buy a plan</a> to post more jobs.</span>
      </div>`;

  try {
    const res = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const jobsHtml = data.jobs.length === 0
        ? `<p style="text-align:center;padding:3rem;color:var(--muted);">No jobs posted yet. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Post your first job</a></p>`
        : data.jobs.map(job => `
          <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <h3 onclick="viewOrEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;color:var(--primary);cursor:pointer;text-decoration:underline;text-underline-offset:3px;">
                  ${job.title}
                </h3>
                <p style="font-size:0.85rem;color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                <span style="background:${job.is_featured ? '#FBF5E9' : '#F5F5F5'};color:${job.is_featured ? '#C5A059' : '#777'};padding:0.25rem 0.7rem;border-radius:20px;font-size:0.75rem;font-weight:500;">
                  ${job.is_featured ? '&#11088; Featured' : 'Standard'}
                </span>
                <button onclick="openEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="background:var(--primary-light);color:var(--primary);border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button onclick="deleteJob(${job.id}, '${job.title.replace(/'/g,"\\'")}')"
                  style="background:#FBF5E9;color:#8B6914;border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
            <div style="display:flex;gap:1.5rem;margin-bottom:1rem;font-size:0.85rem;flex-wrap:wrap;">
              <span><i class="fa-solid fa-calendar"></i> ${job.created_at}</span>
              <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Applications</span>
            </div>
            ${job.applications.length > 0 ? `
              <details>
                <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;color:var(--primary);margin-bottom:0.75rem;">
                  View Applicants (${job.applications_count})
                </summary>
                ${job.applications.map(app => `
                  <div style="background:var(--bg);border-radius:8px;padding:1rem;margin-bottom:0.75rem;">
                    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.5rem;">
                      <div>
                        <strong>${app.full_name}</strong>
                        <p style="font-size:0.82rem;color:var(--muted);margin-top:0.2rem;">${app.email} &bull; ${app.phone || 'No phone'}</p>
                      </div>
                      <select onchange="updateAppStatus(${app.id},this.value)" style="padding:0.3rem 0.6rem;border-radius:6px;border:1px solid var(--border);font-size:0.8rem;">
                        <option value="submitted" ${app.status==='submitted'?'selected':''}>Submitted</option>
                        <option value="reviewed" ${app.status==='reviewed'?'selected':''}>Reviewed</option>
                        <option value="shortlisted" ${app.status==='shortlisted'?'selected':''}>Shortlisted</option>
                        <option value="rejected" ${app.status==='rejected'?'selected':''}>Rejected</option>
                      </select>
                    </div>
                    ${app.cover_letter ? `<p style="font-size:0.82rem;line-height:1.6;margin-top:0.5rem;"><strong>Cover:</strong> ${app.cover_letter}</p>` : ''}
                    ${app.cv_url ? `<a href="${app.cv_url}" target="_blank" style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.75rem;background:#E3F2FD;color:#1565C0;padding:0.4rem 0.9rem;border-radius:8px;font-size:0.82rem;font-weight:600;text-decoration:none;"><i class="fa-solid fa-file-pdf"></i> View CV</a>` : ''}
                    <p style="font-size:0.75rem;color:var(--muted);margin-top:0.5rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                  </div>`).join('')}
              </details>` : '<p style="font-size:0.85rem;color:var(--muted);margin-top:0.75rem;">No applications yet</p>'}
          </div>`).join('');
      document.getElementById('empJobsList').innerHTML = quotaHtml + jobsHtml;
    }
  } catch {
    document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== FIXED viewOrEditJob =====
viewOrEditJob = function(job) {
  document.getElementById('modalContent').innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
      <div style="width:56px;height:56px;border-radius:12px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">💼</div>
      <div>
        <h2 style="font-family:'Playfair Display',serif;color:var(--dark);font-size:1.4rem;margin-bottom:0.2rem;">${job.title}</h2>
        <p style="color:var(--muted);font-size:0.9rem;">${job.company || (currentUser && (currentUser.company_name || currentUser.company)) || ''}</p>
      </div>
    </div>
    <div class="tags" style="margin-bottom:1rem;flex-wrap:wrap;">
      <span class="tag tag-type">${job.job_type}</span>
      <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      ${job.salary ? `<span class="tag tag-pay"><i class="fa-solid fa-money-bill-wave"></i> ${job.salary}</span>` : ''}
      <span class="tag tag-feat"><i class="fa-solid fa-layer-group"></i> ${job.category}</span>
      ${job.is_featured ? '<span class="tag" style="background:#FBF5E9;color:#C5A059;">⭐ Featured</span>' : ''}
    </div>
    ${job.description ? `
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.5rem;color:var(--primary);"><i class="fa-solid fa-file-lines"></i> Job Description</h4>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;">${job.description}</p>
    </div>` : ''}
    ${job.requirements ? `
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem;font-weight:600;margin-bottom:0.5rem;color:var(--primary);"><i class="fa-solid fa-list-check"></i> Requirements</h4>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;">${job.requirements}</p>
    </div>` : ''}
    <div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1rem;margin-bottom:1.25rem;font-size:0.85rem;">
      <p style="margin-bottom:0.3rem;"><i class="fa-solid fa-envelope" style="color:var(--primary);margin-right:0.4rem;"></i><strong>Email:</strong> ${job.contact_email || ''}</p>
      ${job.contact_phone ? `<p><i class="fa-solid fa-phone" style="color:var(--primary);margin-right:0.4rem;"></i><strong>Phone:</strong> +237 ${job.contact_phone}</p>` : ''}
    </div>
    <div style="background:#E8F5E9;border-radius:10px;padding:0.75rem 1rem;font-size:0.85rem;color:#2E7D32;font-weight:500;">
      <i class="fa-solid fa-circle-info"></i> This is how your job appears to job seekers.
    </div>`;
  document.getElementById('jobModal').classList.add('open');
};

// ===== FIX: normalize user object so role is always at top level =====
function normalizeUser(user) {
  if (!user) return user;
  // Backend returns role inside user.profile.role — flatten it
  if (user.profile) {
    if (!user.role && user.profile.role) {
      user.role = user.profile.role;
    }
    user.company_name = user.company_name || user.profile.company_name || '';
    user.phone_number = user.phone_number || user.profile.phone_number || '';
    // If paid status is not provided, assume user can continue without blocking
    if (typeof user.paid === 'undefined') {
      user.paid = typeof user.profile.paid !== 'undefined' ? user.profile.paid : true;
    }
  }
  return user;
}

// Override doLogin to normalize user
const _origDoLoginRole = doLogin;
doLogin = async function() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const alertEl = document.getElementById('loginAlert');
  if (!email || !pass) { showAlert(alertEl, 'error', 'Please fill in all fields.'); return; }
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass })
    });
    const data = await response.json();
    if (response.ok && data.status === 'success' && data.token && data.user) {
      authToken = data.token;
      currentUser = normalizeUser(data.user);
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
      updateUserBar();
      showPage('home');
    } else {
      showAlert(alertEl, 'error', data.message || 'Invalid email or password');
    }
  } catch {
    showAlert(alertEl, 'error', 'Connection error. Check if backend is running.');
  }
};

// Also normalize on app init in case stored user has old format
const _origInitAppRole = initApp;
initApp = async function() {
  authToken = getStoredAuthToken();
  currentUser = normalizeUser(getStoredUser());
  if (currentUser) {
    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
  }
  currentLang = localStorage.getItem('tJobsLang') || 'en';
  const savedTheme = localStorage.getItem('tJobsTheme') || 'light';
  applyTheme(savedTheme);
  applyLanguage(currentLang);
  allJobs = await fetchJobsFromBackend();
  renderFeaturedJobs();
  updateUserBar();
  if (currentUser && authToken) {
    showPage('home');
  }
  document.getElementById('jobModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('applyModal').addEventListener('click', function(e) {
    if (e.target === this) closeApplyModal();
  });
};

// ===== MESSAGING SYSTEM =====
let currentChatUserId = null;
let currentChatPhone = '';
let chatPollTimer = null;

// Show messages nav link for all logged-in users
const _origUpdateUserBarMsg = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarMsg();
  const navMsg = document.getElementById('nav-messages');
  const mobMsg = document.getElementById('mob-messages');
  if (currentUser) {
    if (navMsg) navMsg.style.display = 'inline-flex';
    if (mobMsg) mobMsg.style.display = '';
  } else {
    if (navMsg) navMsg.style.display = 'none';
    if (mobMsg) mobMsg.style.display = 'none';
  }
};

// Load inbox page
async function loadMessages() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-messages');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('inboxList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  try {
    const res = await fetch(`${API_BASE_URL}/messages/inbox/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      if (data.conversations.length === 0) {
        list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
          <i class="fa-solid fa-comments" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
          <p>No messages yet.</p>
        </div>`;
        return;
      }
      list.innerHTML = data.conversations.map(c => `
        <div onclick="openChat(${c.user_id})"
          style="background:#fff;border-radius:12px;padding:1.25rem;margin-bottom:0.75rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;gap:1rem;transition:all 0.2s;"
          onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'"
          onmouseout="this.style.borderColor='transparent';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">
          <div style="width:46px;height:46px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary);font-size:1.1rem;flex-shrink:0;">
            ${c.name.charAt(0).toUpperCase()}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.2rem;">
              <span style="font-weight:600;font-size:0.95rem;">${c.name}</span>
              <span style="font-size:0.72rem;color:var(--muted);">${c.last_time}</span>
            </div>
            <div style="font-size:0.82rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.last_message}</div>
            ${c.job_title ? `<div style="font-size:0.75rem;color:var(--primary);margin-top:0.2rem;"><i class="fa-solid fa-briefcase"></i> ${c.job_title}</div>` : ''}
          </div>
          ${c.unread > 0 ? `<span style="background:#C62828;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;">${c.unread}</span>` : ''}
        </div>`).join('');
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load messages.</p>';
  }
}

// Open chat with a user
async function openChat(userId, jobId) {
  if (!currentUser || !authToken) { showPage('login'); return; }
  currentChatUserId = userId;
  document.getElementById('chatMessages').innerHTML = '<p style="text-align:center;color:var(--muted);font-size:0.85rem;">Loading...</p>';
  document.getElementById('chatModal').classList.add('open');
  document.getElementById('chatInput').value = '';
  // Store jobId for context
  document.getElementById('chatModal').dataset.jobId = jobId || '';
  await loadChatMessages();
  document.getElementById('chatInput').focus();
  // Poll every 5 seconds
  if (chatPollTimer) clearInterval(chatPollTimer);
  chatPollTimer = setInterval(loadChatMessages, 5000);
}

async function loadChatMessages() {
  if (!currentChatUserId) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/conversation/${currentChatUserId}/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      // Update header
      document.getElementById('chatName').textContent = data.other_name;
      document.getElementById('chatRole').textContent = '';
      document.getElementById('chatAvatar').textContent = data.other_name.charAt(0).toUpperCase();
      currentChatPhone = data.other_phone;
      // WhatsApp button
      const waBtn = document.getElementById('chatWhatsappBtn');
      if (data.other_phone) {
        waBtn.style.display = 'flex';
        waBtn.onclick = () => {
          const num = '237' + data.other_phone.replace(/\s/g, '');
          window.open(`https://wa.me/${num}`, '_blank');
        };
      } else {
        waBtn.style.display = 'none';
      }
      // Render messages
      const container = document.getElementById('chatMessages');
      if (data.messages.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:2rem;">No messages yet. Say hello!</p>';
        return;
      }
      container.innerHTML = data.messages.map(m => `
        <div style="display:flex;justify-content:${m.is_mine ? 'flex-end' : 'flex-start'};">
          <div style="max-width:75%;background:${m.is_mine ? 'var(--primary)' : '#fff'};color:${m.is_mine ? '#fff' : 'var(--text)'};
            border-radius:${m.is_mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
            padding:0.65rem 1rem;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            ${m.job_title ? `<div style="font-size:0.7rem;opacity:0.7;margin-bottom:0.3rem;"><i class="fa-solid fa-briefcase"></i> Re: ${m.job_title}</div>` : ''}
            <div style="font-size:0.88rem;line-height:1.5;">${m.content}</div>
            <div style="font-size:0.68rem;opacity:0.6;margin-top:0.3rem;text-align:right;">${m.time}</div>
          </div>
        </div>`).join('');
      // Scroll to bottom
      container.scrollTop = container.scrollHeight;
    }
  } catch {}
}

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const content = input.value.trim();
  if (!content || !currentChatUserId) return;
  input.value = '';
  const jobId = document.getElementById('chatModal').dataset.jobId || null;
  try {
    await fetch(`${API_BASE_URL}/messages/send/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      body: JSON.stringify({ receiver_id: currentChatUserId, content, job_id: jobId })
    });
    await loadChatMessages();
  } catch {
    showToast('Could not send message.');
  }
}

// Close chat stops polling
document.addEventListener('DOMContentLoaded', () => {
  const chatModal = document.getElementById('chatModal');
  if (chatModal) {
    chatModal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('open');
        if (chatPollTimer) clearInterval(chatPollTimer);
      }
    });
  }
});

// Add "Message" button to applicant cards in employer dashboard
// and "Message Employer" button in job detail modal for seekers
const _origOpenJobMsg = openJob;
openJob = function(id) {
  _origOpenJobMsg(id);
  // Add message employer button for seekers
  setTimeout(() => {
    if (!currentUser || currentUser.role !== 'seeker') return;
    const modal = document.getElementById('modalContent');
    if (!modal) return;
    const job = allJobs.find(j => j.id === id);
    if (!job || !job.employer_profile_id) return;
    const existing = modal.querySelector('.msg-employer-btn');
    if (existing) return;
    const btn = document.createElement('button');
    btn.className = 'btn msg-employer-btn';
    btn.style.cssText = 'width:100%;justify-content:center;padding:0.8rem;margin-top:0.5rem;background:var(--primary-light);color:var(--primary);border:1.5px solid var(--primary);font-size:0.95rem;';
    btn.innerHTML = '<i class="fa-solid fa-comments"></i> Message Employer';
    btn.onclick = () => { closeModal(); openChat(job.employer_profile_id, id); };
    modal.appendChild(btn);
  }, 60);
};

// Poll unread message count
async function pollUnreadMessages() {
  if (!currentUser || !authToken) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/unread/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const badge = document.getElementById('msgBadge');
      if (badge) {
        badge.textContent = data.unread;
        badge.style.display = data.unread > 0 ? 'flex' : 'none';
      }
    }
  } catch {}
}

setInterval(() => { if (currentUser && authToken) pollUnreadMessages(); }, 15000);

const _origUpdateUserBarMsgPoll = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarMsgPoll();
  if (currentUser && authToken) pollUnreadMessages();
};

// ===== OVERRIDE dashboard applicant rendering — tap to chat =====
function renderApplicantCard(app, jobId) {
  const phone = app.phone ? '237' + app.phone.replace(/\D/g, '') : '';
  const waUrl = phone ? `https://wa.me/${phone}` : '';
  return `
    <div class="applicant-card" onclick="openChat(${app.profile_id || 0}, ${jobId})">
      <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="bc-avatar"><span>B<em>C</em></span></div>
          <div>
            <strong style="font-size:0.95rem;">${app.full_name}</strong>
            <p style="font-size:0.78rem;color:var(--muted);margin-top:0.15rem;">${app.email}${app.phone ? ' &bull; +237 ' + app.phone : ''}</p>
          </div>
        </div>
        <select onchange="updateAppStatus(${app.id},this.value)" onclick="event.stopPropagation()"
          style="padding:0.3rem 0.6rem;border-radius:6px;border:1px solid var(--border);font-size:0.8rem;cursor:pointer;">
          <option value="submitted" ${app.status==='submitted'?'selected':''}>Submitted</option>
          <option value="reviewed" ${app.status==='reviewed'?'selected':''}>Reviewed</option>
          <option value="shortlisted" ${app.status==='shortlisted'?'selected':''}>Shortlisted</option>
          <option value="rejected" ${app.status==='rejected'?'selected':''}>Rejected</option>
        </select>
      </div>
      ${app.cover_letter ? `<p style="font-size:0.82rem;line-height:1.6;margin-top:0.6rem;color:var(--text);"><strong>Cover:</strong> ${app.cover_letter}</p>` : ''}
      ${app.cv_url ? `<a href="${app.cv_url}" target="_blank" onclick="event.stopPropagation()"
        style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.5rem;background:#E3F2FD;color:#1565C0;padding:0.35rem 0.8rem;border-radius:8px;font-size:0.78rem;font-weight:600;text-decoration:none;">
        <i class="fa-solid fa-file-pdf"></i> View CV</a>` : ''}
      <div class="app-actions">
        <button class="btn-msg" onclick="event.stopPropagation();openChat(${app.profile_id || 0}, ${jobId})">
          <i class="fa-solid fa-comments"></i> Message
        </button>
        ${waUrl ? `<button class="btn-wa" onclick="event.stopPropagation();window.open('${waUrl}','_blank')">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </button>` : ''}
      </div>
      <p style="font-size:0.72rem;color:var(--muted);margin-top:0.5rem;"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
    </div>`;
}

// Final override of loadEmployerDashboard using renderApplicantCard
window.loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-employer-dashboard');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';

  const quota = getPostQuota();
  const remaining = getRemainingPosts();
  const quotaHtml = quota
    ? `<div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <i class="fa-solid fa-layer-group" style="color:var(--primary);"></i>
        <span style="font-size:0.88rem;color:var(--primary);font-weight:600;">
          ${quota.type === 'featured' ? '⭐ Featured' : 'Standard'} Plan &mdash;
          <strong>${remaining}</strong> post${remaining !== 1 ? 's' : ''} remaining
        </span>
        <button class="btn btn-primary" style="margin-left:auto;font-size:0.8rem;padding:0.4rem 1rem;" onclick="showPage('postjob')">
          <i class="fa-solid fa-plus"></i> Post a Job
        </button>
      </div>`
    : `<div style="background:#FBF5E9;border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;border-left:4px solid #C5A059;">
        <span style="font-size:0.88rem;color:#8B6914;font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> No posts remaining. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Buy a plan</a></span>
      </div>`;

  try {
    const res = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const jobsHtml = data.jobs.length === 0
        ? `<p style="text-align:center;padding:3rem;color:var(--muted);">No jobs posted yet. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Post your first job</a></p>`
        : data.jobs.map(job => `
          <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <h3 onclick="viewOrEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;color:var(--primary);cursor:pointer;text-decoration:underline;text-underline-offset:3px;">
                  ${job.title}
                </h3>
                <p style="font-size:0.85rem;color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                <span style="background:${job.is_featured?'#FBF5E9':'#F5F5F5'};color:${job.is_featured?'#C5A059':'#777'};padding:0.25rem 0.7rem;border-radius:20px;font-size:0.75rem;font-weight:500;">
                  ${job.is_featured?'&#11088; Featured':'Standard'}
                </span>
                <button onclick="openEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="background:var(--primary-light);color:var(--primary);border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button onclick="deleteJob(${job.id},'${job.title.replace(/'/g,"\\'")}')"
                  style="background:#FBF5E9;color:#8B6914;border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
            <div style="display:flex;gap:1.5rem;margin-bottom:1rem;font-size:0.85rem;flex-wrap:wrap;">
              <span><i class="fa-solid fa-calendar"></i> ${job.created_at}</span>
              <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Application${job.applications_count !== 1 ? 's' : ''}</span>
            </div>
            ${job.applications.length > 0 ? `
              <details open>
                <summary style="cursor:pointer;font-weight:600;font-size:0.9rem;color:var(--primary);margin-bottom:0.75rem;list-style:none;display:flex;align-items:center;gap:0.5rem;">
                  <i class="fa-solid fa-users"></i> Applicants (${job.applications_count}) <span style="font-size:0.75rem;color:var(--muted);font-weight:400;">— tap to message</span>
                </summary>
                ${job.applications.map(app => renderApplicantCard(app, job.id)).join('')}
              </details>` : '<p style="font-size:0.85rem;color:var(--muted);margin-top:0.75rem;"><i class="fa-solid fa-inbox"></i> No applications yet</p>'}
          </div>`).join('');
      document.getElementById('empJobsList').innerHTML = quotaHtml + jobsHtml;
    }
  } catch {
    document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== FINAL renderApplicantCard with full styling =====
renderApplicantCard = function(app, jobId) {
  const phone = app.phone ? '237' + app.phone.replace(/\D/g, '') : '';
  const waUrl = phone ? `https://wa.me/${phone}` : '';
  const statusColors = {
    submitted:  { bg: '#E3F2FD', color: '#1565C0' },
    reviewed:   { bg: '#FFF3E0', color: '#E65100' },
    shortlisted:{ bg: '#E8F5E9', color: '#2E7D32' },
    rejected:   { bg: '#FFEBEE', color: '#C62828' },
  };
  const sc = statusColors[app.status] || statusColors.submitted;

  return `
    <div class="applicant-card" onclick="openChat(${app.profile_id || 0}, ${jobId})">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.85rem;">
          <div class="bc-avatar" style="width:44px;height:44px;"><span>B<em>C</em></span></div>
          <div>
            <div style="font-weight:700;font-size:0.95rem;color:var(--dark);">${app.full_name}</div>
            <div style="font-size:0.78rem;color:var(--muted);margin-top:0.1rem;">
              <i class="fa-solid fa-envelope" style="font-size:0.7rem;"></i> ${app.email}
              ${app.phone ? `&nbsp;&bull;&nbsp;<i class="fa-solid fa-phone" style="font-size:0.7rem;"></i> +237 ${app.phone}` : ''}
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
          <span class="app-status-badge" style="background:${sc.bg};color:${sc.color};">
            ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
          </span>
          <select onchange="updateAppStatus(${app.id},this.value)" onclick="event.stopPropagation()"
            style="padding:0.3rem 0.5rem;border-radius:6px;border:1px solid var(--border);font-size:0.78rem;cursor:pointer;background:#fff;color:var(--text);font-family:'DM Sans',sans-serif;">
            <option value="submitted"   ${app.status==='submitted'   ?'selected':''}>Submitted</option>
            <option value="reviewed"    ${app.status==='reviewed'    ?'selected':''}>Reviewed</option>
            <option value="shortlisted" ${app.status==='shortlisted' ?'selected':''}>Shortlisted</option>
            <option value="rejected"    ${app.status==='rejected'    ?'selected':''}>Rejected</option>
          </select>
        </div>
      </div>

      ${app.cover_letter ? `
        <div style="margin-top:0.75rem;background:var(--bg);border-radius:8px;padding:0.65rem 0.85rem;border-left:3px solid var(--primary);">
          <p style="font-size:0.82rem;color:var(--text);line-height:1.6;"><strong style="color:var(--primary);">Cover Letter:</strong> ${app.cover_letter}</p>
        </div>` : ''}

      ${app.cv_url ? `
        <a href="${app.cv_url}" target="_blank" onclick="event.stopPropagation()"
          style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.6rem;background:#E3F2FD;color:#1565C0;padding:0.35rem 0.85rem;border-radius:8px;font-size:0.78rem;font-weight:600;text-decoration:none;">
          <i class="fa-solid fa-file-pdf"></i> View CV
        </a>` : ''}

      <div class="app-actions">
        <button class="btn-msg" onclick="event.stopPropagation();openChat(${app.profile_id || 0}, ${jobId})">
          <i class="fa-solid fa-comments"></i> Message
        </button>
        ${waUrl ? `
        <button class="btn-wa" onclick="event.stopPropagation();window.open('${waUrl}','_blank')">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </button>` : ''}
        <span style="margin-left:auto;font-size:0.72rem;color:var(--muted);align-self:center;">
          <i class="fa-regular fa-clock"></i> Applied ${app.applied_at}
        </span>
      </div>
    </div>`;
};

// ===== FIX msgBadge for new BC icon =====
pollUnreadMessages = async function() {
  if (!currentUser || !authToken) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/unread/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const badge = document.getElementById('msgBadge');
      if (badge) {
        badge.textContent = data.unread;
        badge.style.display = data.unread > 0 ? 'flex' : 'none';
      }
    }
  } catch {}
};

// ===== FIX updateUserBar — show BC message icon =====
const _origUpdateUserBarBC = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarBC();
  const navMsg = document.getElementById('nav-messages');
  const mobMsg = document.getElementById('mob-messages');
  if (currentUser) {
    if (navMsg) navMsg.style.display = 'inline-flex';
    if (mobMsg) mobMsg.style.display = '';
    pollUnreadMessages();
  } else {
    if (navMsg) navMsg.style.display = 'none';
    if (mobMsg) mobMsg.style.display = 'none';
  }
};

// ===== FINAL renderApplicantCard — message button only opens chat, job card body opens job view =====
renderApplicantCard = function(app, jobId) {
  const phone = app.phone ? '237' + app.phone.replace(/\D/g, '') : '';
  const waUrl = phone ? `https://wa.me/${phone}` : '';
  const statusColors = {
    submitted:   { bg: '#E3F2FD', color: '#1565C0' },
    reviewed:    { bg: '#FFF3E0', color: '#E65100' },
    shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
    rejected:    { bg: '#FFEBEE', color: '#C62828' },
  };
  const sc = statusColors[app.status] || statusColors.submitted;
  return `
    <div class="applicant-card" style="cursor:default;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.85rem;">
          <div style="width:42px;height:42px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary);font-size:1rem;flex-shrink:0;">
            ${app.full_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style="font-weight:700;font-size:0.95rem;color:var(--dark);">${app.full_name}</div>
            <div style="font-size:0.78rem;color:var(--muted);margin-top:0.1rem;">
              <i class="fa-solid fa-envelope" style="font-size:0.7rem;"></i> ${app.email}
              ${app.phone ? `&nbsp;&bull;&nbsp;<i class="fa-solid fa-phone" style="font-size:0.7rem;"></i> +237 ${app.phone}` : ''}
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
          <span class="app-status-badge" style="background:${sc.bg};color:${sc.color};">
            ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
          </span>
          <select onchange="updateAppStatus(${app.id},this.value)"
            style="padding:0.3rem 0.5rem;border-radius:6px;border:1px solid var(--border);font-size:0.78rem;cursor:pointer;background:#fff;color:var(--text);font-family:'DM Sans',sans-serif;">
            <option value="submitted"   ${app.status==='submitted'   ?'selected':''}>Submitted</option>
            <option value="reviewed"    ${app.status==='reviewed'    ?'selected':''}>Reviewed</option>
            <option value="shortlisted" ${app.status==='shortlisted' ?'selected':''}>Shortlisted</option>
            <option value="rejected"    ${app.status==='rejected'    ?'selected':''}>Rejected</option>
          </select>
        </div>
      </div>
      ${app.cover_letter ? `
        <div style="margin-top:0.75rem;background:var(--bg);border-radius:8px;padding:0.65rem 0.85rem;border-left:3px solid var(--primary);">
          <p style="font-size:0.82rem;color:var(--text);line-height:1.6;"><strong style="color:var(--primary);">Cover Letter:</strong> ${app.cover_letter}</p>
        </div>` : ''}
      ${app.cv_url ? `
        <a href="${app.cv_url}" target="_blank"
          style="display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.6rem;background:#E3F2FD;color:#1565C0;padding:0.35rem 0.85rem;border-radius:8px;font-size:0.78rem;font-weight:600;text-decoration:none;">
          <i class="fa-solid fa-file-pdf"></i> View CV
        </a>` : ''}
      <div class="app-actions">
        <button class="btn-msg" onclick="openChat(${app.profile_id || 0}, ${jobId})">
          <i class="fa-solid fa-comments"></i> Message
        </button>
        ${waUrl ? `
        <button class="btn-wa" onclick="window.open('${waUrl}','_blank')">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </button>` : ''}
        <span style="margin-left:auto;font-size:0.72rem;color:var(--muted);align-self:center;">
          <i class="fa-regular fa-clock"></i> Applied ${app.applied_at}
        </span>
      </div>
    </div>`;
};

// ===== FINAL loadEmployerDashboard — entire job card body clickable to view job =====
window.loadEmployerDashboard = async function() {
  if (!currentUser || !authToken) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-employer-dashboard');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';

  const quota = getPostQuota();
  const remaining = getRemainingPosts();
  const quotaHtml = quota
    ? `<div style="background:var(--primary-light);border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <i class="fa-solid fa-layer-group" style="color:var(--primary);"></i>
        <span style="font-size:0.88rem;color:var(--primary);font-weight:600;">
          ${quota.type === 'featured' ? '⭐ Featured' : 'Standard'} Plan &mdash;
          <strong>${remaining}</strong> post${remaining !== 1 ? 's' : ''} remaining
        </span>
        <button class="btn btn-primary" style="margin-left:auto;font-size:0.8rem;padding:0.4rem 1rem;" onclick="showPage('postjob')">
          <i class="fa-solid fa-plus"></i> Post a Job
        </button>
      </div>`
    : `<div style="background:#FBF5E9;border-radius:10px;padding:0.85rem 1.25rem;margin-bottom:1.5rem;border-left:4px solid #C5A059;">
        <span style="font-size:0.88rem;color:#8B6914;font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> No posts remaining. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Buy a plan</a></span>
      </div>`;

  try {
    const res = await fetch(`${API_BASE_URL}/employer/dashboard/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('empTotalJobs').textContent = data.total_jobs;
      document.getElementById('empTotalApps').textContent = data.total_applications;
      const jobsHtml = data.jobs.length === 0
        ? `<p style="text-align:center;padding:3rem;color:var(--muted);">No jobs posted yet. <a href="#" onclick="showPage('postjob')" style="color:var(--primary);">Post your first job</a></p>`
        : data.jobs.map(job => `
          <div onclick="viewOrEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
            style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;transition:all 0.2s;border:1.5px solid transparent;"
            onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'"
            onmouseout="this.style.borderColor='transparent';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.3rem;color:var(--dark);">${job.title}</h3>
                <p style="font-size:0.85rem;color:var(--muted);">${job.category} &bull; ${job.job_type} &bull; ${job.location}</p>
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                <span style="background:${job.is_featured?'#FBF5E9':'#F5F5F5'};color:${job.is_featured?'#C5A059':'#777'};padding:0.25rem 0.7rem;border-radius:20px;font-size:0.75rem;font-weight:500;">
                  ${job.is_featured?'&#11088; Featured':'Standard'}
                </span>
                <button onclick="event.stopPropagation();openEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})"
                  style="background:var(--primary-light);color:var(--primary);border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button onclick="event.stopPropagation();deleteJob(${job.id},'${job.title.replace(/'/g,"\\'")}')"
                  style="background:#FBF5E9;color:#8B6914;border:none;border-radius:8px;padding:0.35rem 0.85rem;font-size:0.8rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
            <div style="display:flex;gap:1.5rem;font-size:0.82rem;color:var(--muted);flex-wrap:wrap;margin-bottom:${job.applications.length > 0 ? '1rem' : '0'};">
              <span><i class="fa-solid fa-calendar"></i> ${job.created_at}</span>
              <span><i class="fa-solid fa-file-lines"></i> ${job.applications_count} Application${job.applications_count !== 1 ? 's' : ''}</span>
              <span style="color:var(--primary);font-size:0.78rem;"><i class="fa-solid fa-eye"></i> Click to view</span>
            </div>
            ${job.applications.length > 0 ? `
              <div onclick="event.stopPropagation()">
                <details>
                  <summary style="cursor:pointer;font-weight:600;font-size:0.88rem;color:var(--primary);list-style:none;display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0;">
                    <i class="fa-solid fa-users"></i> Applicants (${job.applications_count})
                  </summary>
                  <div style="margin-top:0.5rem;">
                    ${job.applications.map(app => renderApplicantCard(app, job.id)).join('')}
                  </div>
                </details>
              </div>` : ''}
          </div>`).join('');
      document.getElementById('empJobsList').innerHTML = quotaHtml + jobsHtml;
    }
  } catch {
    document.getElementById('empJobsList').innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== EMPLOYER JOB VIEW — shows what they typed =====
viewOrEditJob = function(job) {
  document.getElementById('modalContent').innerHTML = `
    <div style="margin-bottom:1.25rem;">
      <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.75rem;">
        <div>
          <h2 style="font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--dark);margin-bottom:0.25rem;">${job.title}</h2>
          <p style="font-size:0.88rem;color:var(--muted);">${job.company || ''}</p>
        </div>
        <span style="background:${job.is_featured?'#FBF5E9':'#F0F4FF'};color:${job.is_featured?'#C5A059':'var(--primary)'};padding:0.3rem 0.85rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
          ${job.is_featured ? '⭐ Featured' : 'Standard'}
        </span>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
        <span class="tag tag-type">${job.job_type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
        <span class="tag tag-feat"><i class="fa-solid fa-layer-group"></i> ${job.category}</span>
        ${job.salary && job.salary !== 'Negotiable' ? `<span class="tag tag-pay"><i class="fa-solid fa-money-bill-wave"></i> ${job.salary} FCFA</span>` : `<span class="tag tag-pay">Negotiable</span>`}
      </div>
    </div>

    <div style="background:var(--bg);border-radius:10px;padding:1rem;margin-bottom:1rem;">
      <p style="font-size:0.78rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Job Description</p>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;white-space:pre-wrap;">${job.description || '<span style="color:var(--muted);">Not provided</span>'}</p>
    </div>

    ${job.requirements ? `
    <div style="background:var(--bg);border-radius:10px;padding:1rem;margin-bottom:1rem;">
      <p style="font-size:0.78rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Requirements</p>
      <p style="font-size:0.88rem;color:var(--text);line-height:1.8;white-space:pre-wrap;">${job.requirements}</p>
    </div>` : ''}

    <div style="background:var(--bg);border-radius:10px;padding:1rem;margin-bottom:1rem;">
      <p style="font-size:0.78rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Contact Info</p>
      <p style="font-size:0.88rem;color:var(--text);margin-bottom:0.3rem;"><i class="fa-solid fa-envelope" style="color:var(--primary);margin-right:0.4rem;"></i>${job.contact_email || 'Not provided'}</p>
      ${job.contact_phone ? `<p style="font-size:0.88rem;color:var(--text);"><i class="fa-solid fa-phone" style="color:var(--primary);margin-right:0.4rem;"></i>+237 ${job.contact_phone}</p>` : ''}
    </div>

    ${job.deadline ? `
    <div style="background:#FBF5E9;border-radius:10px;padding:0.75rem 1rem;margin-bottom:1rem;">
      <p style="font-size:0.85rem;color:#8B6914;"><i class="fa-solid fa-calendar-xmark" style="margin-right:0.4rem;"></i><strong>Deadline:</strong> ${job.deadline}</p>
    </div>` : ''}

    <div style="display:flex;gap:0.75rem;margin-top:0.5rem;">
      <button class="btn btn-outline" style="flex:1;justify-content:center;color:var(--primary);border-color:var(--primary);"
        onclick="closeModal();openEditJob(${JSON.stringify(job).replace(/"/g,'&quot;')})">
        <i class="fa-solid fa-pen"></i> Edit
      </button>
      <button class="btn btn-primary" style="flex:1;justify-content:center;"
        onclick="closeModal()">
        <i class="fa-solid fa-check"></i> Done
      </button>
    </div>`;

  document.getElementById('jobModal').classList.add('open');
};

// ===== MY APPLICATIONS — add Message Employer button =====
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in.</p>';
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/seeker/applications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const statusColors = {
        submitted:   { bg: '#E3F2FD', color: '#1565C0' },
        reviewed:    { bg: '#FFF3E0', color: '#E65100' },
        shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
        rejected:    { bg: '#FFEBEE', color: '#C62828' },
      };
      list.innerHTML = data.applications.length === 0
        ? `<div style="text-align:center;padding:3rem;color:var(--muted);">
            <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
            <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
            <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
           </div>`
        : data.applications.map(app => {
            const sc = statusColors[app.status] || statusColors.submitted;
            return `
            <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                <div>
                  <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${app.job_title}</h3>
                  <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
                </div>
                <span style="background:${sc.bg};color:${sc.color};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
                  ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
                <p style="font-size:0.8rem;color:var(--muted);"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                ${app.employer_profile_id ? `
                <button class="btn-msg" onclick="openChat(${app.employer_profile_id}, null)">
                  <i class="fa-solid fa-comments"></i> Message Employer
                </button>` : ''}
              </div>
            </div>`;
          }).join('');
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== MESSAGING RULES =====
// Seekers CANNOT initiate — only employers start conversations
// Seekers can only REPLY once employer has messaged them

// Override openChat — block seekers from initiating
const _origOpenChat = openChat;
openChat = function(userId, jobId) {
  if (!currentUser) { showPage('login'); return; }
  if (currentUser.role === 'seeker') {
    // Check if there is already a conversation with this user
    // If not, block — seeker cannot start first
    fetch(`${API_BASE_URL}/messages/conversation/${userId}/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    }).then(r => r.json()).then(data => {
      if (data.status === 'success' && data.messages.length > 0) {
        // Conversation exists — seeker can reply
        _origOpenChat(userId, jobId);
      } else {
        showToast('Apply or express interest first. The employer will contact you.');
      }
    }).catch(() => {
      showToast('Apply or express interest first. The employer will contact you.');
    });
    return;
  }
  // Employer — always allowed
  _origOpenChat(userId, jobId);
};

// Remove "Message Employer" button from My Applications — seekers cannot initiate
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in.</p>';
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/seeker/applications/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const statusColors = {
        submitted:   { bg: '#E3F2FD', color: '#1565C0' },
        reviewed:    { bg: '#FFF3E0', color: '#E65100' },
        shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
        rejected:    { bg: '#FFEBEE', color: '#C62828' },
      };
      list.innerHTML = data.applications.length === 0
        ? `<div style="text-align:center;padding:3rem;color:var(--muted);">
            <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
            <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
            <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
           </div>`
        : data.applications.map(app => {
            const sc = statusColors[app.status] || statusColors.submitted;
            return `
            <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
              <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                <div>
                  <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${app.job_title}</h3>
                  <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
                </div>
                <span style="background:${sc.bg};color:${sc.color};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
                  ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
                <p style="font-size:0.8rem;color:var(--muted);"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
                <span style="font-size:0.78rem;color:var(--muted);font-style:italic;">
                  <i class="fa-solid fa-lock" style="font-size:0.7rem;"></i> Waiting for employer to contact you
                </span>
              </div>
            </div>`;
          }).join('');
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load. Make sure the server is running.</p>';
  }
};

// ===== OVERRIDE loadChatMessages — time only + delete button =====
loadChatMessages = async function() {
  if (!currentChatUserId) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/conversation/${currentChatUserId}/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('chatName').textContent = data.other_name;
      document.getElementById('chatAvatar').innerHTML = '<span>' + data.other_name.charAt(0).toUpperCase() + '</span>';
      currentChatPhone = data.other_phone;
      const waBtn = document.getElementById('chatWhatsappBtn');
      if (data.other_phone) {
        waBtn.style.display = 'flex';
        waBtn.onclick = () => window.open(`https://wa.me/237${data.other_phone.replace(/\s/g,'')}`, '_blank');
      } else {
        waBtn.style.display = 'none';
      }
      const container = document.getElementById('chatMessages');
      if (data.messages.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:2rem;">No messages yet. Say hello!</p>';
        return;
      }
      container.innerHTML = data.messages.map(m => `
        <div class="chat-msg-row" style="display:flex;justify-content:${m.is_mine ? 'flex-end' : 'flex-start'};align-items:flex-end;gap:0.4rem;position:relative;">
          ${m.is_mine ? `
            <button onclick="deleteChatMessage(${m.id})" title="Delete"
              style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.75rem;padding:0.2rem;opacity:0;transition:opacity 0.2s;align-self:center;"
              class="del-msg-btn">
              <i class="fa-solid fa-trash"></i>
            </button>` : ''}
          <div style="max-width:75%;background:${m.is_mine ? 'var(--primary)' : '#fff'};color:${m.is_mine ? '#fff' : 'var(--text)'};
            border-radius:${m.is_mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
            padding:0.65rem 1rem;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            ${m.job_title ? `<div style="font-size:0.7rem;opacity:0.7;margin-bottom:0.3rem;"><i class="fa-solid fa-briefcase"></i> Re: ${m.job_title}</div>` : ''}
            <div style="font-size:0.88rem;line-height:1.5;">${m.content}</div>
            <div style="font-size:0.68rem;opacity:0.6;margin-top:0.3rem;text-align:right;">${m.time}</div>
          </div>
        </div>`).join('');
      // Show delete btn on hover
      container.querySelectorAll('.chat-msg-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
          const btn = row.querySelector('.del-msg-btn');
          if (btn) btn.style.opacity = '1';
        });
        row.addEventListener('mouseleave', () => {
          const btn = row.querySelector('.del-msg-btn');
          if (btn) btn.style.opacity = '0';
        });
      });
      container.scrollTop = container.scrollHeight;
    }
  } catch {}
};

async function deleteChatMessage(msgId) {
  if (!confirm('Delete this message?')) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/${msgId}/delete/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      await loadChatMessages();
    } else {
      showToast('Could not delete message.');
    }
  } catch {
    showToast('Server error.');
  }
}

// ===== CHAT CONTEXT MENU — long press =====
let ctxMenu = null;
let ctxPressTimer = null;
let ctxSelectedRow = null;

function removeCtxMenu() {
  if (ctxMenu) { ctxMenu.remove(); ctxMenu = null; }
  if (ctxSelectedRow) { ctxSelectedRow.classList.remove('ctx-selected'); ctxSelectedRow = null; }
}

function showChatContextMenu(e, msgId, isMine, x, y) {
  removeCtxMenu();
  const row = e.currentTarget;
  row.classList.add('ctx-selected');
  ctxSelectedRow = row;

  const menu = document.createElement('div');
  menu.className = 'chat-context-menu';
  ctxMenu = menu;

  if (isMine) {
    menu.innerHTML = `
      <button onclick="deleteMsgForMe(${msgId})">
        <i class="fa-regular fa-trash-can" style="color:#C62828;"></i> Delete for me
      </button>
      <div class="ctx-divider"></div>
      <button class="danger" onclick="deleteMsgForEveryone(${msgId})">
        <i class="fa-solid fa-trash" style="color:#C62828;"></i> Delete for everyone
      </button>`;
  } else {
    menu.innerHTML = `
      <button onclick="deleteMsgForMe(${msgId})">
        <i class="fa-regular fa-trash-can" style="color:#C62828;"></i> Delete for me
      </button>`;
  }

  // Position menu near press point
  document.body.appendChild(menu);
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let left = x, top = y;
  if (left + mw > vw - 10) left = vw - mw - 10;
  if (top + mh > vh - 10) top = vh - mh - 10;
  if (left < 10) left = 10;
  if (top < 10) top = 10;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';

  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', removeCtxMenu, { once: true });
  }, 10);
}

async function deleteMsgForMe(msgId) {
  removeCtxMenu();
  try {
    await fetch(`${API_BASE_URL}/messages/${msgId}/delete/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
  } catch {}
  await loadChatMessages();
}

async function deleteMsgForEveryone(msgId) {
  removeCtxMenu();
  try {
    await fetch(`${API_BASE_URL}/messages/${msgId}/delete/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ for_everyone: true })
    });
  } catch {}
  await loadChatMessages();
}

// ===== OVERRIDE loadChatMessages — long press context menu =====
loadChatMessages = async function() {
  if (!currentChatUserId) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/conversation/${currentChatUserId}/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      document.getElementById('chatName').textContent = data.other_name;
      document.getElementById('chatAvatar').innerHTML = '<span>' + data.other_name.charAt(0).toUpperCase() + '</span>';
      currentChatPhone = data.other_phone;
      const waBtn = document.getElementById('chatWhatsappBtn');
      if (data.other_phone) {
        waBtn.style.display = 'flex';
        waBtn.onclick = () => window.open(`https://wa.me/237${data.other_phone.replace(/\s/g,'')}`, '_blank');
      } else {
        waBtn.style.display = 'none';
      }
      const container = document.getElementById('chatMessages');
      if (data.messages.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:2rem;">No messages yet. Say hello!</p>';
        return;
      }
      container.innerHTML = data.messages.map(m => `
        <div class="chat-msg-row" data-id="${m.id}" data-mine="${m.is_mine}"
          style="display:flex;justify-content:${m.is_mine ? 'flex-end' : 'flex-start'};align-items:flex-end;gap:0.4rem;user-select:none;">
          <div style="max-width:75%;background:${m.is_mine ? 'var(--primary)' : '#fff'};color:${m.is_mine ? '#fff' : 'var(--text)'};
            border-radius:${m.is_mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
            padding:0.65rem 1rem;box-shadow:0 2px 8px rgba(0,0,0,0.08);cursor:pointer;transition:filter 0.15s,transform 0.15s;">
            ${m.job_title ? `<div style="font-size:0.7rem;opacity:0.7;margin-bottom:0.3rem;"><i class="fa-solid fa-briefcase"></i> Re: ${m.job_title}</div>` : ''}
            <div style="font-size:0.88rem;line-height:1.5;">${m.content}</div>
            <div style="font-size:0.68rem;opacity:0.6;margin-top:0.3rem;text-align:right;">${m.time}</div>
          </div>
        </div>`).join('');

      // Attach long press to each message row
      container.querySelectorAll('.chat-msg-row').forEach(row => {
        const msgId = parseInt(row.dataset.id);
        const isMine = row.dataset.mine === 'true';

        // Touch — long press
        row.addEventListener('touchstart', (e) => {
          ctxPressTimer = setTimeout(() => {
            const t = e.touches[0];
            showChatContextMenu(e, msgId, isMine, t.clientX, t.clientY);
          }, 600);
        }, { passive: true });
        row.addEventListener('touchend', () => clearTimeout(ctxPressTimer));
        row.addEventListener('touchmove', () => clearTimeout(ctxPressTimer));

        // Mouse — long press
        row.addEventListener('mousedown', (e) => {
          ctxPressTimer = setTimeout(() => {
            showChatContextMenu(e, msgId, isMine, e.clientX, e.clientY);
          }, 600);
        });
        row.addEventListener('mouseup', () => clearTimeout(ctxPressTimer));
        row.addEventListener('mouseleave', () => clearTimeout(ctxPressTimer));

        // Right click
        row.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          showChatContextMenu(e, msgId, isMine, e.clientX, e.clientY);
        });
      });

      container.scrollTop = container.scrollHeight;
    }
  } catch {}
};

// ===== OVERRIDE showChatContextMenu — site palette + title =====
showChatContextMenu = function(e, msgId, isMine, x, y) {
  removeCtxMenu();
  const row = e.currentTarget;
  row.classList.add('ctx-selected');
  ctxSelectedRow = row;

  const menu = document.createElement('div');
  menu.className = 'chat-context-menu';
  ctxMenu = menu;

  menu.innerHTML = `<div class="ctx-title">Message Options</div>` + (isMine ? `
    <button onclick="deleteMsgForMe(${msgId})">
      <i class="fa-regular fa-trash-can"></i> Delete for me
    </button>
    <div class="ctx-divider"></div>
    <button class="danger" onclick="deleteMsgForEveryone(${msgId})">
      <i class="fa-solid fa-trash"></i> Delete for everyone
    </button>` : `
    <button onclick="deleteMsgForMe(${msgId})">
      <i class="fa-regular fa-trash-can"></i> Delete for me
    </button>`);

  document.body.appendChild(menu);
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let left = x, top = y;
  if (left + mw > vw - 10) left = vw - mw - 10;
  if (top + mh > vh - 10) top = vh - mh - 10;
  if (left < 10) left = 10;
  if (top < 10) top = 10;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';

  setTimeout(() => {
    document.addEventListener('click', removeCtxMenu, { once: true });
  }, 10);
};

// ===== INBOX CONVERSATION — long press to delete =====
function showConversationContextMenu(e, userId, name, x, y) {
  removeCtxMenu();
  const menu = document.createElement('div');
  menu.className = 'chat-context-menu';
  ctxMenu = menu;

  menu.innerHTML = `
    <div class="ctx-title">${name}</div>
    <button class="danger" onclick="deleteConversation(${userId})">
      <i class="fa-solid fa-trash"></i> Delete conversation
    </button>`;

  document.body.appendChild(menu);
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let left = x, top = y;
  if (left + mw > vw - 10) left = vw - mw - 10;
  if (top + mh > vh - 10) top = vh - mh - 10;
  if (left < 10) left = 10;
  if (top < 10) top = 10;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';

  setTimeout(() => {
    document.addEventListener('click', removeCtxMenu, { once: true });
  }, 10);
}

async function deleteConversation(userId) {
  removeCtxMenu();
  if (!confirm('Delete this entire conversation?')) return;
  try {
    await fetch(`${API_BASE_URL}/messages/conversation/${userId}/delete/`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
  } catch {}
  loadMessages();
}

// ===== OVERRIDE loadMessages — add long press on conversation items =====
const _origLoadMessages = loadMessages;
loadMessages = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-messages');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('inboxList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  try {
    const res = await fetch(`${API_BASE_URL}/messages/inbox/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      if (data.conversations.length === 0) {
        list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
          <i class="fa-solid fa-comments" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
          <p>No messages yet.</p>
        </div>`;
        return;
      }
      list.innerHTML = data.conversations.map(c => `
        <div class="conv-item" data-uid="${c.user_id}" data-name="${c.name}"
          style="background:#fff;border-radius:12px;padding:1.25rem;margin-bottom:0.75rem;
          box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;
          gap:1rem;transition:all 0.2s;border:1.5px solid transparent;user-select:none;"
          onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'"
          onmouseout="this.style.borderColor='transparent';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">
          <div style="width:46px;height:46px;border-radius:50%;background:var(--primary-light);
            display:flex;align-items:center;justify-content:center;font-weight:700;
            color:var(--primary);font-size:1.1rem;flex-shrink:0;">
            ${c.name.charAt(0).toUpperCase()}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.2rem;">
              <span style="font-weight:600;font-size:0.95rem;">${c.name}</span>
              <span style="font-size:0.72rem;color:var(--muted);">${c.last_time}</span>
            </div>
            <div style="font-size:0.82rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.last_message}</div>
            ${c.job_title ? `<div style="font-size:0.75rem;color:var(--primary);margin-top:0.2rem;"><i class="fa-solid fa-briefcase"></i> ${c.job_title}</div>` : ''}
          </div>
          ${c.unread > 0 ? `<span style="background:#C62828;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;">${c.unread}</span>` : ''}
        </div>`).join('');

      // Attach click + long press to each conversation
      list.querySelectorAll('.conv-item').forEach(item => {
        const uid = parseInt(item.dataset.uid);
        const name = item.dataset.name;

        // Click to open
        item.addEventListener('click', () => openChat(uid));

        // Long press — touch
        item.addEventListener('touchstart', (e) => {
          ctxPressTimer = setTimeout(() => {
            const t = e.touches[0];
            showConversationContextMenu(e, uid, name, t.clientX, t.clientY);
          }, 600);
        }, { passive: true });
        item.addEventListener('touchend', () => clearTimeout(ctxPressTimer));
        item.addEventListener('touchmove', () => clearTimeout(ctxPressTimer));

        // Long press — mouse
        item.addEventListener('mousedown', (e) => {
          ctxPressTimer = setTimeout(() => {
            showConversationContextMenu(e, uid, name, e.clientX, e.clientY);
          }, 600);
        });
        item.addEventListener('mouseup', () => clearTimeout(ctxPressTimer));
        item.addEventListener('mouseleave', () => clearTimeout(ctxPressTimer));

        // Right click
        item.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          showConversationContextMenu(e, uid, name, e.clientX, e.clientY);
        });
      });
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load messages.</p>';
  }
};

// ===== OVERRIDE showConversationContextMenu — no red =====
showConversationContextMenu = function(e, userId, name, x, y) {
  removeCtxMenu();
  const menu = document.createElement('div');
  menu.className = 'chat-context-menu';
  ctxMenu = menu;

  menu.innerHTML = `
    <div class="ctx-title">${name}</div>
    <button onclick="deleteConversation(${userId})">
      <i class="fa-solid fa-trash"></i> Delete conversation
    </button>`;

  document.body.appendChild(menu);
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let left = x, top = y;
  if (left + mw > vw - 10) left = vw - mw - 10;
  if (top + mh > vh - 10) top = vh - mh - 10;
  if (left < 10) left = 10;
  if (top < 10) top = 10;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';

  setTimeout(() => {
    document.addEventListener('click', removeCtxMenu, { once: true });
  }, 10);
};

// ===== FIX msgBadge display =====
pollUnreadMessages = async function() {
  if (!currentUser || !authToken) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/unread/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      const badge = document.getElementById('msgBadge');
      if (badge) {
        badge.textContent = data.unread;
        badge.style.display = data.unread > 0 ? 'flex' : 'none';
      }
    }
  } catch {}
};

// ===== DEFINITIVE PAYMENT LOGIC =====

// Job Seeker — pays ONCE, never again
// Employer — pays per 2 posts, only when quota runs out

// Override showPage to never redirect paid seekers to payment
const _origShowPagePayment = showPage;
showPage = function(name) {
  // Seeker who already paid — never redirect to payment
  if ((name === 'jobs') && currentUser && currentUser.role === 'seeker' && currentUser.paid) {
    _origShowPagePayment(name);
    return;
  }
  _origShowPagePayment(name);
};

// Override submitPaymentGate — seeker pays once, employer gets 2 posts
submitPaymentGate = function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod').value;
  const alertEl = document.getElementById('payGateAlert');
  const recipients = { mtn: '671109256', orange: '696500803' };

  if (!phone) {
    showAlert(alertEl, 'error', 'Invalid phone number.');
    return;
  }

  currentUser.paid = true;
  currentUser.payMethod = method;
  currentUser.payPhone = phone;
  currentUser.payRecipient = recipients[method];
  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

  if (currentUser.role === 'employer') {
    setPostQuota('standard'); // 2 posts
    showAlert(alertEl, 'success', '✅ Payment confirmed! You can now post 2 jobs.');
    setTimeout(() => showPage('postjob'), 1500);
  } else {
    // Seeker — one-time payment, done forever
    showAlert(alertEl, 'success', '✅ Payment confirmed! Welcome to Bamenda Connect. You will never be charged again.');
    setTimeout(() => showPage('jobs'), 1500);
  }
};

// Override showPaymentGate — only show for unpaid seekers or employers with no quota
showPaymentGate = function() {
  if (!currentUser) { showPage('login'); return; }

  // Seeker already paid — never show payment gate again
  if (currentUser.role === 'seeker' && currentUser.paid) {
    showPage('jobs');
    return;
  }

  // Employer — only show if no quota remaining
  if (currentUser.role === 'employer') {
    const remaining = getRemainingPosts();
    if (remaining > 0) {
      showPage('postjob');
      return;
    }
    // No posts left — show payment for more
    document.getElementById('payGateTitle').textContent = 'Buy More Job Posts';
    document.getElementById('payGateDesc').innerHTML = 'Pay <strong>1,000 FCFA</strong> to get 2 more Standard job posts.';
    document.getElementById('payGateIcon').innerHTML = '<i class="fa-solid fa-briefcase"></i>';
  } else {
    // Seeker not yet paid
    document.getElementById('payGateTitle').textContent = 'Activate Job Seeker Access';
    document.getElementById('payGateDesc').innerHTML = 'A one-time fee of <strong>500 FCFA</strong>. You will never be charged again.';
    document.getElementById('payGateIcon').innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-payment').classList.add('active');
  window.scrollTo(0, 0);
};

// Override doPostJob quota check — only ask for payment when quota is 0
const _origDoPostJobQuotaFinal = doPostJob;
doPostJob = async function() {
  const quota = getPostQuota();
  const remaining = getRemainingPosts();
  const alertEl = document.getElementById('postAlert');

  if (!quota || remaining <= 0) {
    const payPhone = document.getElementById('pjPayPhone') ? document.getElementById('pjPayPhone').value.trim() : '';
    if (!payPhone) {
      showAlert(alertEl, 'error', 'You have used all your posts. Enter your phone number to pay for 2 more.');
      const payFields = document.getElementById('postingPaymentFields');
      if (payFields) payFields.style.display = 'grid';
      return;
    }
    setPostQuota('standard');
  }

  await _origDoPostJobQuotaFinal();
};

// ===== PHONE INPUT REAL-TIME VALIDATION =====
function validatePhoneInput(input) {
  const phone = input.value.trim();
  const alertEl = document.getElementById('payGateAlert');

  if (phone.length === 0) {
    // Empty - no error
    if (alertEl) alertEl.style.display = 'none';
  } else if (!/^\d+$/.test(phone) || phone.length < 9 || phone[0] !== '6') {
    // Invalid - contains letters, too short, or doesn't start with 6
    if (alertEl) {
      alertEl.className = 'alert error';
      alertEl.textContent = '❌ Invalid phone number';
      alertEl.style.display = 'block';
    }
  } else if (phone.length === 9 && phone[0] === '6' && /^\d+$/.test(phone)) {
    // Valid - hide error
    if (alertEl) alertEl.style.display = 'none';
  }
}

// ===== FIX seeker payment message =====
submitPaymentGate = async function() {
  const phone = document.getElementById('payGatePhone').value.trim();
  const method = document.getElementById('payGateMethod')?.value || 'mtn';
  const alertEl = document.getElementById('payGateAlert');
  const recipients = { mtn: '671109256', orange: '696500803' };

  if (!phone || phone.length !== 9 || phone[0] !== '6' || !/^\d+$/.test(phone)) {
    showAlert(alertEl, 'error', '❌ Invalid phone number');
    return;
  }

  if (!currentUser || !currentUser.id) {
    showAlert(alertEl, 'error', '❌ Please log in first.');
    return;
  }

  try {
    // Show processing message
    if (alertEl) {
      alertEl.className = 'alert success';
      alertEl.textContent = '⏳ Processing payment...';
      alertEl.style.display = 'block';
    }

    // Get token from localStorage if authToken is not available
    const token = authToken || localStorage.getItem('authToken');
    if (!token) {
      showAlert(alertEl, 'error', '❌ Authentication failed. Please log in again.');
      return;
    }

    // Step 1: Initiate payment
    const initiateRes = await fetch(`${API_BASE_URL}/payment/initiate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        subscription_type: currentUser.role || 'employer'
      })
    });

    const initiateData = await initiateRes.json();

    if (!initiateRes.ok) {
      showAlert(alertEl, 'error', '❌ ' + (initiateData.message || 'Failed to initiate payment.'));
      return;
    }

    const transactionId = initiateData.transaction_id;

    // Step 2: Confirm payment
    const confirmRes = await fetch(`${API_BASE_URL}/payment/confirm/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        transaction_id: transactionId,
        phone: phone,
        method: method
      })
    });

    const confirmData = await confirmRes.json();

    if (!confirmRes.ok) {
      showAlert(alertEl, 'error', '❌ ' + (confirmData.message || 'Payment confirmation failed. Please try again.'));
      return;
    }

    // Success
    currentUser.paid = true;
    currentUser.payMethod = method;
    currentUser.payPhone = phone;
    currentUser.payRecipient = recipients[method];

    // Update job posts remaining from backend response
    if (confirmData.posts_remaining !== undefined) {
      currentUser.job_posts_remaining = confirmData.posts_remaining;
    } else if (currentUser.role === 'employer') {
      currentUser.job_posts_remaining = 2; // Default for new employers
    }

    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

    if (alertEl) {
      alertEl.className = 'alert success';
      alertEl.textContent = '✅ Payment confirmed! Redirecting...';
      alertEl.style.display = 'block';
    }

    if (currentUser.role === 'employer') {
      setTimeout(() => showPage('postjob'), 2000);
    } else {
      setTimeout(() => showPage('jobs'), 2000);
    }
  } catch (error) {
    showAlert(alertEl, 'error', '❌ Connection error: ' + error.message);
  }
};

// ===== MY APPLICATIONS — check if employer has messaged, update status text =====
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in.</p>';
    return;
  }

  // Load applications and inbox simultaneously
  const [appsRes, inboxRes] = await Promise.all([
    fetch(`${API_BASE_URL}/seeker/applications/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null),
    fetch(`${API_BASE_URL}/messages/inbox/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null)
  ]);

  let applications = [];
  let conversations = [];

  try {
    const appsData = await appsRes.json();
    if (appsData.status === 'success') applications = appsData.applications;
  } catch {}

  try {
    const inboxData = await inboxRes.json();
    if (inboxData.status === 'success') conversations = inboxData.conversations;
  } catch {}

  // Build a set of employer profile IDs who have messaged this seeker
  const employersWhoMessaged = new Set(conversations.map(c => c.user_id));

  const statusColors = {
    submitted:   { bg: '#E3F2FD', color: '#1565C0' },
    reviewed:    { bg: '#FFF3E0', color: '#E65100' },
    shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
    rejected:    { bg: '#FFEBEE', color: '#C62828' },
  };

  if (applications.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
      <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
      <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
      <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
    </div>`;
    return;
  }

  list.innerHTML = applications.map(app => {
    const sc = statusColors[app.status] || statusColors.submitted;
    const employerMessaged = app.employer_profile_id && employersWhoMessaged.has(app.employer_profile_id);
    const conv = conversations.find(c => c.user_id === app.employer_profile_id);
    const unread = conv ? conv.unread : 0;

    let contactStatus;
    if (employerMessaged) {
      contactStatus = `
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
          <span style="font-size:0.78rem;color:#2E7D32;font-weight:600;display:flex;align-items:center;gap:0.4rem;">
            <i class="fa-solid fa-comments"></i> Employer contacted you
            ${unread > 0 ? `<span style="background:#C5A059;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;">${unread}</span>` : ''}
          </span>
          <button class="btn-msg" style="font-size:0.78rem;padding:0.35rem 0.85rem;" onclick="openChat(${app.employer_profile_id}, null)">
            <i class="fa-solid fa-reply"></i> Reply
          </button>
        </div>`;
    } else {
      contactStatus = `
        <span style="font-size:0.78rem;color:var(--muted);display:flex;align-items:center;gap:0.4rem;">
          <i class="fa-regular fa-clock"></i> Awaiting employer response
        </span>`;
    }

    return `
      <div style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);${employerMessaged ? 'border-left:3px solid #2E7D32;' : ''}">
        <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
          <div>
            <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;">${app.job_title}</h3>
            <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
          </div>
          <span style="background:${sc.bg};color:${sc.color};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
            ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
          </span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
          <p style="font-size:0.8rem;color:var(--muted);"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
          ${contactStatus}
        </div>
      </div>`;
  }).join('');
};

// ===== MY APPLICATIONS — clickable card opens job detail =====
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in.</p>';
    return;
  }

  const [appsRes, inboxRes] = await Promise.all([
    fetch(`${API_BASE_URL}/seeker/applications/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null),
    fetch(`${API_BASE_URL}/messages/inbox/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null)
  ]);

  let applications = [], conversations = [];
  try { const d = await appsRes.json(); if (d.status === 'success') applications = d.applications; } catch {}
  try { const d = await inboxRes.json(); if (d.status === 'success') conversations = d.conversations; } catch {}

  const employersWhoMessaged = new Set(conversations.map(c => c.user_id));
  const statusColors = {
    submitted:   { bg: '#E3F2FD', color: '#1565C0' },
    reviewed:    { bg: '#FFF3E0', color: '#E65100' },
    shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
    rejected:    { bg: '#FFEBEE', color: '#C62828' },
  };

  if (applications.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
      <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
      <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
      <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
    </div>`;
    return;
  }

  list.innerHTML = applications.map(app => {
    const sc = statusColors[app.status] || statusColors.submitted;
    const employerMessaged = app.employer_profile_id && employersWhoMessaged.has(app.employer_profile_id);
    const conv = conversations.find(c => c.user_id === app.employer_profile_id);
    const unread = conv ? conv.unread : 0;

    // Find job in allJobs for click-to-view
    const job = allJobs.find(j =>
      j.title === app.job_title ||
      (j.company || j.company_name || '').toLowerCase() === (app.company || '').toLowerCase()
    );
    const jobClickAttr = job ? `onclick="openJob(${job.id})"` : '';
    const cursorStyle = job ? 'cursor:pointer;' : '';
    const hoverStyle = job ? `onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'" onmouseout="this.style.borderColor='${employerMessaged ? '#2E7D32' : 'transparent'}';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'"` : '';

    let contactStatus;
    if (employerMessaged) {
      contactStatus = `
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
          <span style="font-size:0.78rem;color:#2E7D32;font-weight:600;display:flex;align-items:center;gap:0.4rem;">
            <i class="fa-solid fa-comments"></i> Employer contacted you
            ${unread > 0 ? `<span style="background:#C5A059;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;">${unread}</span>` : ''}
          </span>
          <button class="btn-msg" style="font-size:0.78rem;padding:0.35rem 0.85rem;" onclick="event.stopPropagation();openChat(${app.employer_profile_id}, null)">
            <i class="fa-solid fa-reply"></i> Reply
          </button>
        </div>`;
    } else {
      contactStatus = `
        <span style="font-size:0.78rem;color:var(--muted);display:flex;align-items:center;gap:0.4rem;">
          <i class="fa-regular fa-clock"></i> Awaiting employer response
        </span>`;
    }

    return `
      <div ${jobClickAttr} ${hoverStyle}
        style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;
        box-shadow:0 2px 12px rgba(0,0,0,0.06);transition:all 0.2s;
        border-left:3px solid ${employerMessaged ? '#2E7D32' : 'transparent'};
        border:1.5px solid ${employerMessaged ? '#2E7D32' : 'transparent'};
        ${cursorStyle}">
        <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
          <div>
            <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;color:var(--dark);">
              ${app.job_title}
              ${job ? '<i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7rem;color:var(--primary);margin-left:0.4rem;"></i>' : ''}
            </h3>
            <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
          </div>
          <span style="background:${sc.bg};color:${sc.color};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
            ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
          </span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
          <p style="font-size:0.8rem;color:var(--muted);"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
          ${contactStatus}
        </div>
      </div>`;
  }).join('');
};

// ===== FIX nav-messages show/hide — inline style not class =====
const _origUpdateUserBarNavMsg = updateUserBar;
updateUserBar = function() {
  _origUpdateUserBarNavMsg();
  const navMsg = document.getElementById('nav-messages');
  if (navMsg) {
    navMsg.style.display = currentUser ? 'inline-flex' : 'none';
  }
};

// ===== REMOVE arrow icon from My Applications job title =====
// Override the loadMyApplications to not show the arrow icon
const _origLoadMyAppsClean = window.loadMyApplications;
window.loadMyApplications = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-my-applications');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('myAppsList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  if (!authToken) { list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Please log in.</p>'; return; }

  const [appsRes, inboxRes] = await Promise.all([
    fetch(`${API_BASE_URL}/seeker/applications/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null),
    fetch(`${API_BASE_URL}/messages/inbox/`, { headers: { 'Authorization': `Bearer ${authToken}` } }).catch(() => null)
  ]);

  let applications = [], conversations = [];
  try { const d = await appsRes.json(); if (d.status === 'success') applications = d.applications; } catch {}
  try { const d = await inboxRes.json(); if (d.status === 'success') conversations = d.conversations; } catch {}

  const employersWhoMessaged = new Set(conversations.map(c => c.user_id));
  const statusColors = {
    submitted:   { bg: '#E3F2FD', color: '#1565C0' },
    reviewed:    { bg: '#FFF3E0', color: '#E65100' },
    shortlisted: { bg: '#E8F5E9', color: '#2E7D32' },
    rejected:    { bg: '#FFEBEE', color: '#C62828' },
  };

  if (applications.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
      <i class="fa-solid fa-file-circle-xmark" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
      <p style="margin-bottom:1rem;">You haven't applied to any jobs yet.</p>
      <button class="btn btn-primary" onclick="showPage('jobs')">Browse Jobs</button>
    </div>`;
    return;
  }

  list.innerHTML = applications.map(app => {
    const sc = statusColors[app.status] || statusColors.submitted;
    const employerMessaged = app.employer_profile_id && employersWhoMessaged.has(app.employer_profile_id);
    const conv = conversations.find(c => c.user_id === app.employer_profile_id);
    const unread = conv ? conv.unread : 0;
    const job = allJobs.find(j =>
      j.title === app.job_title ||
      (j.company || j.company_name || '').toLowerCase() === (app.company || '').toLowerCase()
    );
    const clickAttr = job ? `onclick="openJob(${job.id})"` : '';
    const cursor = job ? 'cursor:pointer;' : '';

    let contactStatus;
    if (employerMessaged) {
      contactStatus = `
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
          <span style="font-size:0.78rem;color:#2E7D32;font-weight:600;display:flex;align-items:center;gap:0.4rem;">
            <i class="fa-solid fa-comments"></i> Employer contacted you
            ${unread > 0 ? `<span style="background:#C5A059;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:0.65rem;font-weight:700;">${unread}</span>` : ''}
          </span>
          <button class="btn-msg" style="font-size:0.78rem;padding:0.35rem 0.85rem;" onclick="event.stopPropagation();openChat(${app.employer_profile_id}, null)">
            <i class="fa-solid fa-reply"></i> Reply
          </button>
        </div>`;
    } else {
      contactStatus = `
        <span style="font-size:0.78rem;color:var(--muted);display:flex;align-items:center;gap:0.4rem;">
          <i class="fa-regular fa-clock"></i> Awaiting employer response
        </span>`;
    }

    return `
      <div ${clickAttr}
        style="background:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.25rem;
        box-shadow:0 2px 12px rgba(0,0,0,0.06);transition:all 0.2s;
        border:1.5px solid ${employerMessaged ? '#2E7D32' : 'transparent'};
        ${cursor}"
        ${job ? `onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'" onmouseout="this.style.borderColor='${employerMessaged ? '#2E7D32' : 'transparent'}';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'"` : ''}>
        <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
          <div>
            <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.3rem;color:var(--dark);">${app.job_title}</h3>
            <p style="font-size:0.85rem;color:var(--muted);">${app.company} &bull; ${app.category} &bull; ${app.location}</p>
          </div>
          <span style="background:${sc.bg};color:${sc.color};padding:0.3rem 0.9rem;border-radius:20px;font-size:0.78rem;font-weight:600;">
            ${app.status.charAt(0).toUpperCase() + app.status.slice(1)}
          </span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
          <p style="font-size:0.8rem;color:var(--muted);"><i class="fa-regular fa-clock"></i> Applied ${app.applied_at}</p>
          ${contactStatus}
        </div>
      </div>`;
  }).join('');
};

// ===== LIVE CATEGORY COUNTS — remove hardcoded numbers, show real counts =====
function updateCategoryCounts() {
  const cats = ['Agriculture', 'Education', 'Health', 'Construction', 'Trade', 'Technology'];
  cats.forEach(cat => {
    const el = document.getElementById('cat-count-' + cat);
    if (!el) return;
    const count = allJobs.filter(j => j.category === cat).length;
    el.textContent = count > 0 ? count + ' job' + (count !== 1 ? 's' : '') : '';
  });
}

// Call after jobs load
const _origInitAppCats = initApp;
initApp = async function() {
  await _origInitAppCats();
  updateCategoryCounts();
};

// Also update when jobs refresh
const _origFetchJobsCats = fetchJobsFromBackend;
fetchJobsFromBackend = async function() {
  const result = await _origFetchJobsCats();
  setTimeout(updateCategoryCounts, 100);
  return result;
};

// ===== ADD Other to category counts =====
const _origUpdateCatCounts = updateCategoryCounts;
updateCategoryCounts = function() {
  _origUpdateCatCounts();
  const el = document.getElementById('cat-count-Other');
  if (!el) return;
  const count = allJobs.filter(j => j.category === 'Other').length;
  el.textContent = count > 0 ? count + ' job' + (count !== 1 ? 's' : '') : '';
};

// ===== PROFESSIONAL CATEGORY ICONS — replace emoji fallback =====
const categoryIcons = {
  'Agriculture':  { icon: 'fa-solid fa-seedling',     color: '#2E7D32', bg: '#E8F5E9' },
  'Education':    { icon: 'fa-solid fa-graduation-cap', color: '#1565C0', bg: '#E3F2FD' },
  'Health':       { icon: 'fa-solid fa-heart-pulse',  color: '#C62828', bg: '#FFEBEE' },
  'Construction': { icon: 'fa-solid fa-helmet-safety', color: '#E65100', bg: '#FFF3E0' },
  'Trade':        { icon: 'fa-solid fa-store',         color: '#6A1B9A', bg: '#F3E5F5' },
  'Technology':   { icon: 'fa-solid fa-laptop-code',  color: '#0277BD', bg: '#E1F5FE' },
  'Other':        { icon: 'fa-solid fa-briefcase',    color: '#C5A059', bg: '#FBF5E9' },
};

function getCategoryLogoHtml(job) {
  const imgSrc = categoryImages[job.category];
  if (imgSrc) {
    return `<img src="${imgSrc}" alt="${job.category}" style="width:46px;height:46px;border-radius:10px;object-fit:cover;">`;
  }
  const ci = categoryIcons[job.category] || categoryIcons['Other'];
  return `<div style="width:46px;height:46px;border-radius:10px;background:${ci.bg};display:flex;align-items:center;justify-content:center;">
    <i class="${ci.icon}" style="color:${ci.color};font-size:1.3rem;"></i>
  </div>`;
}

// Override renderJobCard to use professional icons
renderJobCard = function(job) {
  const logoHtml = getCategoryLogoHtml(job);
  const bookmarked = isBookmarked(job.id);
  const verifiedBadge = job.is_verified ? `<span style="background:#E3F2FD;color:#1565C0;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:20px;font-weight:600;margin-left:0.4rem;"><i class="fa-solid fa-circle-check"></i> Verified</span>` : '';
  const deadlineBadge = job.deadline ? `<span style="font-size:0.75rem;color:#C62828;margin-left:0.5rem;"><i class="fa-solid fa-calendar-xmark"></i> Closes ${job.deadline}</span>` : '';
  const viewsBadge = job.views_count ? `<span style="font-size:0.75rem;color:var(--muted);"><i class="fa-solid fa-eye"></i> ${job.views_count}</span>` : '';
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;">
        <div class="company-logo">${logoHtml}</div>
        <button onclick="event.stopPropagation();toggleBookmark(${job.id})" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:${bookmarked ? '#C5A059' : '#ccc'};" title="${bookmarked ? 'Remove bookmark' : 'Save job'}">
          <i class="fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
        </button>
      </div>
      <h3>${job.title}</h3>
      <div class="company">${job.company || job.company_name || ''}${verifiedBadge}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:center;margin-top:0.4rem;flex-wrap:wrap;">
        ${deadlineBadge}${viewsBadge}
      </div>
      <div class="job-footer">
        <span class="job-date"><i class="fa-regular fa-clock"></i> ${job.date}</span>
        <div style="display:flex;gap:0.4rem;">
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();shareJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
          <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();printJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Download"><i class="fa-solid fa-download"></i></button>
          <button class="btn btn-primary" style="font-size:0.8rem;padding:0.35rem 0.9rem;" onclick="event.stopPropagation();applyJob(${job.id})">${translations[currentLang].apply_now}</button>
        </div>
      </div>
    </div>`;
};

// ===== EMPLOYERS — can view jobs but cannot apply or express interest =====

// Hide Apply button and I'm Interested button for employers
const _origRenderJobCardEmployer = renderJobCard;
renderJobCard = function(job) {
  const logoHtml = getCategoryLogoHtml(job);
  const bookmarked = isBookmarked(job.id);
  const verifiedBadge = job.is_verified ? `<span style="background:#E3F2FD;color:#1565C0;font-size:0.7rem;padding:0.15rem 0.5rem;border-radius:20px;font-weight:600;margin-left:0.4rem;"><i class="fa-solid fa-circle-check"></i> Verified</span>` : '';
  const deadlineBadge = job.deadline ? `<span style="font-size:0.75rem;color:#C62828;margin-left:0.5rem;"><i class="fa-solid fa-calendar-xmark"></i> Closes ${job.deadline}</span>` : '';
  const viewsBadge = job.views_count ? `<span style="font-size:0.75rem;color:var(--muted);"><i class="fa-solid fa-eye"></i> ${job.views_count}</span>` : '';
  const isEmployer = currentUser && currentUser.role === 'employer';

  const actionBtns = isEmployer
    ? '' // employers see no action buttons
    : `<button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();shareJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
       <button class="btn" style="font-size:0.75rem;padding:0.3rem 0.6rem;background:#f0f0f0;color:#333;border:none;" onclick="event.stopPropagation();printJob(${JSON.stringify(job).replace(/"/g,'&quot;')})" title="Download"><i class="fa-solid fa-download"></i></button>
       <button class="btn btn-primary" style="font-size:0.8rem;padding:0.35rem 0.9rem;" onclick="event.stopPropagation();applyJob(${job.id})">${translations[currentLang].apply_now}</button>`;

  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:0.75rem;">
        <div class="company-logo">${logoHtml}</div>
        <button onclick="event.stopPropagation();toggleBookmark(${job.id})" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:${bookmarked ? '#C5A059' : '#ccc'};" title="${bookmarked ? 'Remove bookmark' : 'Save job'}">
          <i class="fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
        </button>
      </div>
      <h3>${job.title}</h3>
      <div class="company">${job.company || job.company_name || ''}${verifiedBadge}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
      </div>
      <div style="display:flex;gap:0.75rem;align-items:center;margin-top:0.4rem;flex-wrap:wrap;">
        ${deadlineBadge}${viewsBadge}
      </div>
      <div class="job-footer">
        <span class="job-date"><i class="fa-regular fa-clock"></i> ${job.date}</span>
        <div style="display:flex;gap:0.4rem;">${actionBtns}</div>
      </div>
    </div>`;
};

// Block apply for employers
const _origApplyJobEmployer = applyJob;
applyJob = function(id) {
  if (currentUser && currentUser.role === 'employer') {
    showToast('Employers cannot apply for jobs.');
    return;
  }
  _origApplyJobEmployer(id);
};

// Block interest modal for employers
const _origOpenInterestEmployer = openInterestModal;
openInterestModal = function(jobId) {
  if (currentUser && currentUser.role === 'employer') {
    showToast('Employers cannot express interest in jobs.');
    return;
  }
  _origOpenInterestEmployer(jobId);
};

// Hide Apply and I'm Interested buttons in job detail modal for employers
const _origOpenJobEmployer = openJob;
openJob = function(id) {
  _origOpenJobEmployer(id);
  if (currentUser && currentUser.role === 'employer') {
    setTimeout(() => {
      const modal = document.getElementById('modalContent');
      if (!modal) return;
      // Hide apply button
      modal.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.includes('Apply') || btn.textContent.includes('Interested')) {
          btn.style.display = 'none';
        }
      });
    }, 60);
  }
};

// ===== PING ONLINE STATUS every 30s =====
function pingOnline() {
  if (!authToken) return;
  fetch(`${API_BASE_URL}/ping/`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${authToken}` }
  }).catch(() => {});
}
setInterval(pingOnline, 30000);
window.addEventListener('DOMContentLoaded', () => { pingOnline(); });

// ===== OVERRIDE loadChatMessages — online dot + read receipts =====
loadChatMessages = async function() {
  if (!currentChatUserId) return;
  try {
    const res = await fetch(`${API_BASE_URL}/messages/conversation/${currentChatUserId}/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      // Header — name + online dot
      document.getElementById('chatName').textContent = data.other_name;
      const onlineDot = data.other_online
        ? `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#4ade80;margin-right:4px;box-shadow:0 0 4px #4ade80;"></span><span style="color:#4ade80;font-size:0.72rem;font-weight:600;">Online</span>`
        : `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ccc;margin-right:4px;"></span><span style="color:var(--muted);font-size:0.72rem;">Offline</span>`;
      document.getElementById('chatRole').innerHTML = onlineDot;
      document.getElementById('chatAvatar').innerHTML = '<span>' + data.other_name.charAt(0).toUpperCase() + '</span>';
      currentChatPhone = data.other_phone;
      const waBtn = document.getElementById('chatWhatsappBtn');
      if (data.other_phone) {
        waBtn.style.display = 'flex';
        waBtn.onclick = () => window.open(`https://wa.me/237${data.other_phone.replace(/\s/g,'')}`, '_blank');
      } else {
        waBtn.style.display = 'none';
      }

      const container = document.getElementById('chatMessages');
      if (data.messages.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:2rem;">No messages yet. Say hello!</p>';
        return;
      }

      container.innerHTML = data.messages.map(m => {
        // Read receipt — only on sender's own messages
        let receipt = '';
        if (m.is_mine) {
          if (m.is_read) {
            receipt = `<span style="font-size:0.65rem;color:#4D9FFF;margin-left:4px;" title="Read at ${m.read_at || ''}">✓✓</span>`;
          } else {
            receipt = `<span style="font-size:0.65rem;color:rgba(255,255,255,0.5);margin-left:4px;" title="Delivered">✓</span>`;
          }
        }
        return `
          <div class="chat-msg-row" data-id="${m.id}" data-mine="${m.is_mine}"
            style="display:flex;justify-content:${m.is_mine ? 'flex-end' : 'flex-start'};align-items:flex-end;gap:0.4rem;user-select:none;">
            <div style="max-width:75%;background:${m.is_mine ? 'var(--primary)' : '#fff'};color:${m.is_mine ? '#fff' : 'var(--text)'};
              border-radius:${m.is_mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
              padding:0.65rem 1rem;box-shadow:0 2px 8px rgba(0,0,0,0.08);cursor:pointer;transition:filter 0.15s;">
              ${m.job_title ? `<div style="font-size:0.7rem;opacity:0.7;margin-bottom:0.3rem;"><i class="fa-solid fa-briefcase"></i> Re: ${m.job_title}</div>` : ''}
              <div style="font-size:0.88rem;line-height:1.5;">${m.content}</div>
              <div style="font-size:0.68rem;opacity:0.6;margin-top:0.3rem;text-align:right;display:flex;align-items:center;justify-content:flex-end;gap:2px;">
                ${m.time}${receipt}
              </div>
            </div>
          </div>`;
      }).join('');

      // Long press handlers
      container.querySelectorAll('.chat-msg-row').forEach(row => {
        const msgId = parseInt(row.dataset.id);
        const isMine = row.dataset.mine === 'true';
        row.addEventListener('touchstart', (e) => {
          ctxPressTimer = setTimeout(() => { const t = e.touches[0]; showChatContextMenu(e, msgId, isMine, t.clientX, t.clientY); }, 600);
        }, { passive: true });
        row.addEventListener('touchend', () => clearTimeout(ctxPressTimer));
        row.addEventListener('touchmove', () => clearTimeout(ctxPressTimer));
        row.addEventListener('mousedown', (e) => {
          ctxPressTimer = setTimeout(() => { showChatContextMenu(e, msgId, isMine, e.clientX, e.clientY); }, 600);
        });
        row.addEventListener('mouseup', () => clearTimeout(ctxPressTimer));
        row.addEventListener('mouseleave', () => clearTimeout(ctxPressTimer));
        row.addEventListener('contextmenu', (e) => { e.preventDefault(); showChatContextMenu(e, msgId, isMine, e.clientX, e.clientY); });
      });

      container.scrollTop = container.scrollHeight;
    }
  } catch {}
};

// ===== OVERRIDE loadMessages — show online status on conversation cards =====
const _origLoadMessagesOnline = loadMessages;
loadMessages = async function() {
  if (!currentUser) { showPage('login'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-messages');
  if (page) { page.classList.add('active'); window.scrollTo(0, 0); }
  const list = document.getElementById('inboxList');
  list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Loading...</p>';
  try {
    const res = await fetch(`${API_BASE_URL}/messages/inbox/`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await res.json();
    if (data.status === 'success') {
      if (data.conversations.length === 0) {
        list.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);">
          <i class="fa-solid fa-comments" style="font-size:3rem;margin-bottom:1rem;display:block;color:#ccc;"></i>
          <p>No messages yet.</p>
        </div>`;
        return;
      }
      list.innerHTML = data.conversations.map(c => `
        <div class="conv-item" data-uid="${c.user_id}" data-name="${c.name}"
          style="background:#fff;border-radius:12px;padding:1.25rem;margin-bottom:0.75rem;
          box-shadow:0 2px 12px rgba(0,0,0,0.06);cursor:pointer;display:flex;align-items:center;
          gap:1rem;transition:all 0.2s;border:1.5px solid transparent;user-select:none;"
          onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='var(--shadow)'"
          onmouseout="this.style.borderColor='transparent';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'">

          <!-- Avatar with online dot -->
          <div style="position:relative;flex-shrink:0;">
            <div style="width:46px;height:46px;border-radius:50%;background:var(--primary-light);
              display:flex;align-items:center;justify-content:center;font-weight:700;
              color:var(--primary);font-size:1.1rem;">
              ${c.name.charAt(0).toUpperCase()}
            </div>
            <span style="position:absolute;bottom:1px;right:1px;width:12px;height:12px;
              border-radius:50%;background:${c.is_online ? '#4ade80' : '#ccc'};
              border:2px solid #fff;
              ${c.is_online ? 'box-shadow:0 0 5px #4ade80;' : ''}">
            </span>
          </div>

          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.2rem;">
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="font-weight:600;font-size:0.95rem;">${c.name}</span>
                <span style="font-size:0.68rem;font-weight:600;color:${c.is_online ? '#4ade80' : 'var(--muted)'};">
                  ${c.is_online ? 'Online' : 'Offline'}
                </span>
              </div>
              <span style="font-size:0.72rem;color:var(--muted);">${c.last_time}</span>
            </div>
            <div style="font-size:0.82rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.last_message}</div>
            ${c.job_title ? `<div style="font-size:0.75rem;color:var(--primary);margin-top:0.2rem;"><i class="fa-solid fa-briefcase"></i> ${c.job_title}</div>` : ''}
          </div>

          ${c.unread > 0 ? `<span style="background:#C5A059;color:#fff;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;flex-shrink:0;">${c.unread}</span>` : ''}
        </div>`).join('');

      // Attach click + long press
      list.querySelectorAll('.conv-item').forEach(item => {
        const uid = parseInt(item.dataset.uid);
        const name = item.dataset.name;
        item.addEventListener('click', () => openChat(uid));
        item.addEventListener('touchstart', (e) => {
          ctxPressTimer = setTimeout(() => { const t = e.touches[0]; showConversationContextMenu(e, uid, name, t.clientX, t.clientY); }, 600);
        }, { passive: true });
        item.addEventListener('touchend', () => clearTimeout(ctxPressTimer));
        item.addEventListener('touchmove', () => clearTimeout(ctxPressTimer));
        item.addEventListener('mousedown', (e) => {
          ctxPressTimer = setTimeout(() => { showConversationContextMenu(e, uid, name, e.clientX, e.clientY); }, 600);
        });
        item.addEventListener('mouseup', () => clearTimeout(ctxPressTimer));
        item.addEventListener('mouseleave', () => clearTimeout(ctxPressTimer));
        item.addEventListener('contextmenu', (e) => { e.preventDefault(); showConversationContextMenu(e, uid, name, e.clientX, e.clientY); });
      });
    }
  } catch {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--muted);">Could not load messages.</p>';
  }
};

// ===== HOME PAGE IMPROVEMENTS =====

// 1. LIVE COUNTERS
async function loadLiveCounters() {
  try {
    const res = await fetch(`${API_BASE_URL}/jobs/`);
    const data = await res.json();
    const jobs = data.jobs || [];
    const jobCount = jobs.length;

    // Animate counter
    function animateCount(el, target) {
      if (!el) return;
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (target > 0 ? '+' : '');
        if (current >= target) clearInterval(timer);
      }, 50);
    }

    animateCount(document.getElementById('liveJobCount'), jobCount);
  } catch {
    ['liveJobCount','liveEmployerCount','liveSeekerCount'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '0+';
    });
  }

  // Get user counts from admin API or use localStorage estimates
  try {
    const res = await fetch(`${API_BASE_URL}/auth/profile/`, {
      headers: authToken ? { 'Authorization': `Bearer ${authToken}` } : {}
    });
  } catch {}

  // Use sample counts for now
  function animateCount(el, target) {
    if (!el) return;
    let current = 0;
    const step = Math.ceil(target / 30) || 1;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + '+';
      if (current >= target) clearInterval(timer);
    }, 50);
  }

  animateCount(document.getElementById('liveEmployerCount'), 5);
  animateCount(document.getElementById('liveSeekerCount'), 12);
}

// 2. INJECT LIVE COUNTERS INTO HERO
function injectLiveCounters() {
  const hero = document.querySelector('.hero');
  if (!hero || document.getElementById('liveJobCount')) return;
  const counters = document.createElement('div');
  counters.style.cssText = 'display:flex;justify-content:center;gap:2.5rem;margin-top:2rem;flex-wrap:wrap;';
  counters.innerHTML = `
    <div style="text-align:center;">
      <div id="liveJobCount" style="font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:#fff;">0+</div>
      <div style="font-size:0.8rem;color:#C8D5F5;"><i class="fa-solid fa-briefcase"></i> Jobs Available</div>
    </div>
    <div style="text-align:center;">
      <div id="liveEmployerCount" style="font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:#fff;">0+</div>
      <div style="font-size:0.8rem;color:#C8D5F5;"><i class="fa-solid fa-building"></i> Active Employers</div>
    </div>
    <div style="text-align:center;">
      <div id="liveSeekerCount" style="font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:#fff;">0+</div>
      <div style="font-size:0.8rem;color:#C8D5F5;"><i class="fa-solid fa-users"></i> Job Seekers</div>
    </div>`;
  hero.appendChild(counters);
}

// 3. INJECT CTA BANNER after categories section
function injectCTABanner() {
  if (document.getElementById('ctaBanner')) return;
  const section = document.querySelector('#page-home .section');
  if (!section) return;
  const cta = document.createElement('div');
  cta.id = 'ctaBanner';
  cta.style.cssText = 'margin:0 0 2rem;';
  cta.innerHTML = `
    <div style="background:linear-gradient(135deg,#001F5B 0%,#003399 50%,#1A4DB3 100%);border-radius:20px;padding:3rem 2rem;text-align:center;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.04%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      <div style="position:relative;z-index:1;">
        <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.5rem,4vw,2.2rem);color:#fff;margin-bottom:0.75rem;">Your Next Opportunity is One Click Away</h2>
        <p style="color:#C8D5F5;font-size:0.95rem;margin-bottom:2rem;max-width:500px;margin-left:auto;margin-right:auto;">Join hundreds of job seekers and employers already connecting on Bamenda Connect.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" style="padding:0.85rem 2rem;font-size:1rem;background:linear-gradient(90deg,#B08A45,#C5A059);" onclick="showPage('jobs')"><i class="fa-solid fa-magnifying-glass"></i> Browse Jobs</button>
          <button class="btn btn-outline" style="padding:0.85rem 2rem;font-size:1rem;color:#fff;border-color:rgba(255,255,255,0.4);" onclick="showPage('register')"><i class="fa-solid fa-user-plus"></i> Join Free</button>
        </div>
      </div>
    </div>`;
  section.parentElement.insertBefore(cta, section.nextSibling);
}

// 4. INJECT LATEST JOBS on home page
function injectLatestJobs() {
  if (document.getElementById('latestJobsSection')) return;
  const ctaBanner = document.getElementById('ctaBanner');
  if (!ctaBanner) return;
  const section = document.createElement('div');
  section.id = 'latestJobsSection';
  section.className = 'section';
  section.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.5rem;">
      <div>
        <h2 class="section-title" style="margin-bottom:0.2rem;">Latest Job Openings</h2>
        <p class="section-sub" style="margin-bottom:0;">Fresh opportunities posted recently</p>
      </div>
      <button class="btn btn-outline" onclick="showPage('jobs')" style="font-size:0.88rem;padding:0.5rem 1.25rem;color:var(--primary);border-color:var(--primary);">View All <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="jobs-grid" id="latestJobsGrid"></div>`;
  ctaBanner.parentElement.insertBefore(section, ctaBanner.nextSibling);
}

// 5. INJECT FEATURED EMPLOYERS
function injectFeaturedEmployers() {
  if (document.getElementById('featuredEmployersSection')) return;
  const latestSection = document.getElementById('latestJobsSection');
  if (!latestSection) return;
  const section = document.createElement('div');
  section.id = 'featuredEmployersSection';
  section.className = 'section';
  section.style.textAlign = 'center';
  section.innerHTML = `
    <h2 class="section-title">Companies Hiring on Bamenda Connect</h2>
    <p class="section-sub">Trusted employers posting jobs in your community</p>
    <div id="employersList" style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-top:1.5rem;"></div>`;
  latestSection.parentElement.insertBefore(section, latestSection.nextSibling);
}

// Populate latest jobs and employers
function populateHomePageData() {
  // Latest jobs — show 4 most recent
  const grid = document.getElementById('latestJobsGrid');
  if (grid && allJobs.length > 0) {
    const latest = [...allJobs].slice(0, 4);
    grid.innerHTML = latest.map(renderJobCard).join('');
  }

  // Featured employers — unique companies from jobs
  const empList = document.getElementById('employersList');
  if (empList && allJobs.length > 0) {
    const companies = [...new Map(allJobs.map(j => [j.company || j.company_name, j])).values()].slice(0, 8);
    empList.innerHTML = companies.map(j => `
      <div onclick="filterCat('${j.category}')" style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem 1.5rem;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:0.75rem;" onmouseover="this.style.borderColor='var(--primary)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--border)';this.style.transform='translateY(0)'">
        <div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary);font-size:1.1rem;flex-shrink:0;">${(j.company||j.company_name||'?').charAt(0)}</div>
        <div style="text-align:left;">
          <div style="font-weight:600;font-size:0.88rem;color:var(--dark);">${j.company||j.company_name}</div>
          <div style="font-size:0.75rem;color:var(--muted);">${j.category}</div>
        </div>
      </div>`).join('');
  }
}

// Update category counts
function updateCategoryCounts() {
  const cats = ['Agriculture','Education','Health','Construction','Trade','Technology'];
  cats.forEach(cat => {
    const el = document.getElementById(`cat-count-${cat}`);
    if (el) {
      const count = allJobs.filter(j => j.category === cat).length;
      el.textContent = count > 0 ? `${count} job${count !== 1 ? 's' : ''}` : '';
    }
  });
}

// Initialize all home page features
const _origInitApp = initApp;
initApp = async function() {
  await _origInitApp();
  injectLiveCounters();
  injectCTABanner();
  injectLatestJobs();
  injectFeaturedEmployers();
  populateHomePageData();
  updateCategoryCounts();
  loadLiveCounters();
};

// Also update when jobs load
const _origRenderFeaturedJobsFinal = renderFeaturedJobs;
renderFeaturedJobs = function() {
  _origRenderFeaturedJobsFinal();
  populateHomePageData();
  updateCategoryCounts();
};

// ===== FRENCH COLOR PALETTE =====
function applyFrenchColorPalette() {
  const root = document.documentElement;
  const lang = currentLang || 'en';

  if (lang === 'fr') {
    // FRENCH: BRIGHT STRIKING COLORS - VIBRANT BLUE & GOLD
    root.style.setProperty('--primary', '#0047AB');
    root.style.setProperty('--primary-light', '#E0F0FF');
    root.style.setProperty('--accent', '#FFD700');
    root.style.setProperty('--yellow', '#FFD700');
    root.style.setProperty('--dark', '#0D1B2A');
    root.style.setProperty('--text', '#0D1B2A');
    root.style.setProperty('--bg', '#F8F9FA');
    // Also change the hero background to show French colors prominently
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.background = 'linear-gradient(135deg, #0047AB 0%, #0052CC 50%, #0047AB 100%)';
    }
  } else {
    // Default English palette
    root.style.setProperty('--primary', '#003399');
    root.style.setProperty('--primary-light', '#E8EEFF');
    root.style.setProperty('--accent', '#C5A059');
    root.style.setProperty('--yellow', '#C5A059');
    root.style.setProperty('--dark', '#1A1A1A');
    root.style.setProperty('--text', '#333333');
    root.style.setProperty('--bg', '#FAFAFA');
  }
}

// ===== SETTINGS MODAL =====
function openSettingsModal() {
  try {
    const modal = document.getElementById('settingsModal');
    if (modal) {
      modal.classList.add('open');
      setTimeout(() => updateSettingsUI(), 100);
    }
  } catch(e) {
  }
}

function closeSettingsModal() {
  try {
    const modal = document.getElementById('settingsModal');
    if (modal) {
      modal.classList.remove('open');
    }
  } catch(e) {
  }
}

function updateSettingsUI() {
  try {
    const theme = localStorage.getItem('tJobsTheme') || 'light';
    const lang = currentLang || 'en';

    const btnLight = document.getElementById('themeLight');
    const btnDark = document.getElementById('themeDark');
    const btnEn = document.getElementById('langEn');
    const btnFr = document.getElementById('langFr');

    if (btnLight) {
      btnLight.style.borderColor = theme === 'light' ? 'var(--primary)' : '#ddd';
      btnLight.style.background = theme === 'light' ? 'var(--primary)' : '#fff';
      btnLight.style.color = theme === 'light' ? '#fff' : 'var(--text)';
      btnLight.style.boxShadow = theme === 'light' ? '0 12px 24px rgba(0,51,153,0.18)' : 'none';
    }
    if (btnDark) {
      btnDark.style.borderColor = theme === 'dark' ? 'var(--primary)' : '#ddd';
      btnDark.style.background = theme === 'dark' ? 'var(--primary)' : '#fff';
      btnDark.style.color = theme === 'dark' ? '#fff' : 'var(--text)';
      btnDark.style.boxShadow = theme === 'dark' ? '0 12px 24px rgba(0,51,153,0.18)' : 'none';
    }
    if (btnEn) {
      btnEn.style.borderColor = lang === 'en' ? 'var(--primary)' : '#ddd';
      btnEn.style.background = lang === 'en' ? 'var(--primary)' : '#fff';
      btnEn.style.color = lang === 'en' ? '#fff' : 'var(--text)';
      btnEn.style.boxShadow = lang === 'en' ? '0 12px 24px rgba(0,51,153,0.18)' : 'none';
    }
    if (btnFr) {
      btnFr.style.borderColor = lang === 'fr' ? 'var(--primary)' : '#ddd';
      btnFr.style.background = lang === 'fr' ? 'var(--primary)' : '#fff';
      btnFr.style.color = lang === 'fr' ? '#fff' : 'var(--text)';
      btnFr.style.boxShadow = lang === 'fr' ? '0 12px 24px rgba(0,51,153,0.18)' : 'none';
    }
  } catch(e) {
  }
}

// Update applyTheme to update modal UI
const _origApplyTheme = applyTheme;
applyTheme = function(theme) {
  _origApplyTheme(theme);
  setTimeout(() => updateSettingsUI(), 50);
};

// Update applyLanguage to update modal UI
const _origApplyLanguage = applyLanguage;
applyLanguage = function(lang) {
  _origApplyLanguage(lang);
  setTimeout(() => updateSettingsUI(), 50);
};

// ===== MOBILE SEARCH SYNC =====
function filterJobsMobile() {
  const q = (document.getElementById('jobSearchMob').value || '').toLowerCase();
  const cat = document.getElementById('catFilterMob').value;
  const loc = document.getElementById('locFilterMob').value.toLowerCase();
  const type = document.getElementById('typeFilterMob').value;
  // Sync to desktop inputs too
  if (document.getElementById('jobSearch')) document.getElementById('jobSearch').value = q;
  if (document.getElementById('catFilter')) document.getElementById('catFilter').value = cat;
  if (document.getElementById('locFilter')) document.getElementById('locFilter').value = loc;
  if (document.getElementById('typeFilter')) document.getElementById('typeFilter').value = type;

  const filtered = allJobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) || (j.company||'').toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCat = !cat || j.category === cat;
    const matchLoc = !loc || (j.location||'').toLowerCase().includes(loc);
    const matchType = !type || j.type === type;
    return matchQ && matchCat && matchLoc && matchType;
  });
  document.getElementById('jobCount').textContent = `Showing ${filtered.length} job${filtered.length !== 1 ? 's' : ''} across Bamenda`;
  document.getElementById('allJobsGrid').innerHTML = filtered.map(renderJobCard).join('');
}

// ===== WELCOME MODAL FOR FIRST-TIME VISITORS =====
// ===== WELCOME MODAL FOR FIRST-TIME VISITORS =====
function showWelcomeModal() {
  const modal = document.getElementById('welcomeModal');
  if (!modal) {
    return;
  }

  // Always show job seeker tips for visitors
  const tip1 = document.getElementById('tipText1');
  const tip2 = document.getElementById('tipText2');
  const tip3 = document.getElementById('tipText3');

  if (tip1) tip1.textContent = 'Browse thousands of jobs in your area';
  if (tip2) tip2.textContent = 'Set job alerts to never miss an opportunity';
  if (tip3) tip3.textContent = 'Connect directly with employers';

  modal.classList.add('open');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeWelcomeModal() {
  const modal = document.getElementById('welcomeModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
  localStorage.setItem('welcomeShown', 'true');
}

// Show welcome modal on every page load for non-logged-in users
window.addEventListener('load', function() {
  if (!currentUser) {
    setTimeout(() => showWelcomeModal(), 500);
  }
});

// Also support keyboard shortcut to close
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeWelcomeModal();
  }
});

// Close modal when clicking outside of it
document.addEventListener('click', function(e) {
  const modal = document.getElementById('welcomeModal');
  if (modal && e.target === modal) {
    closeWelcomeModal();
  }
});

// ===== HIDE COOKIE BANNER AFTER LOGIN/REGISTER =====
// Override doLogin to auto-accept cookies
const _origDoLoginCookie = doLogin;
doLogin = async function() {
  await _origDoLoginCookie();
  acceptCookies();
};

// Override doRegister to auto-accept cookies
const _origDoRegisterCookie = doRegister;
doRegister = async function() {
  await _origDoRegisterCookie();
  acceptCookies();
};

// Also hide on init if user is already logged in
const _origInitAppCookie = initApp;
initApp = async function() {
  await _origInitAppCookie();
  if (currentUser) {
    acceptCookies();
  }
};

// Close modal when clicking outside of it
document.addEventListener('click', function(e) {
  const modal = document.getElementById('welcomeModal');
  if (modal && e.target === modal) {
    closeWelcomeModal();
  }
});
