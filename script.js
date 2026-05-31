// Demo job data removed — site shows only posted/backend jobs now.

// ===== STATE =====
let currentUser = JSON.parse(localStorage.getItem('tJobsUser') || 'null');
let currentRole = 'seeker';
let currentJobId = null;
const postedJobs = JSON.parse(localStorage.getItem('tJobsPosted') || '[]');
// Clear any leftover demo posts from localStorage so users only see backend jobs
try { localStorage.removeItem('tJobsPosted'); } catch(e){}
const allJobs = [...postedJobs];

// ===== PAGE NAVIGATION =====
function showPage(name) {
  // Guard access to certain pages for unauthenticated users
  if (name === 'postjob') {
    if (!currentUser || (currentUser && currentUser.role !== 'employer')) {
      showAlert(document.getElementById('postAlert') || document.body, 'error', 'You must be logged in as an employer to post a job.');
      showPage('login');
      return;
    }
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (!page) return;
  page.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home') renderFeaturedJobs();
  if (name === 'jobs') renderAllJobs();
  if (name === 'profile') renderProfile();
}

function renderProfile() {
  if (!currentUser) {
    showPage('login');
    return;
  }

  const avatar = currentUser.profile_pic || currentUser.photo || 'https://www.gravatar.com/avatar/?d=mp&s=128';
  document.getElementById('profileAvatar').src = avatar;

  document.getElementById('profileName').value = currentUser.name || '';
  document.getElementById('profileEmail').value = currentUser.email || '';
  document.getElementById('profilePhone').value = currentUser.phone || '';
  document.getElementById('profileRole').value = currentUser.role || 'Job seeker';
  if (currentUser.role === 'employer') {
    document.getElementById('profileCompanyField').style.display = 'block';
    document.getElementById('profileCompany').value = currentUser.company || '';
  } else {
    document.getElementById('profileCompanyField').style.display = 'none';
    document.getElementById('profileCompany').value = '';
  }
}

function saveProfile() {
  if (!currentUser) {
    showPage('login');
    return;
  }
  const name = document.getElementById('profileName').value.trim();
  const phone = document.getElementById('profilePhone').value.trim();
  const company = document.getElementById('profileCompany').value.trim();

  if (!name) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Name cannot be empty.');
    return;
  }

  const avatarSrc = document.getElementById('profileAvatar').src;
  if (avatarSrc && !avatarSrc.includes('gravatar.com/avatar/?d=mp')) {
    currentUser.profile_pic = avatarSrc;
  }

  currentUser.name = name;
  currentUser.phone = phone;
  if (currentUser.role === 'employer') {
    currentUser.company = company;
  }

  localStorage.setItem('tJobsUser', JSON.stringify(currentUser));

  const users = JSON.parse(localStorage.getItem('tJobsUsers') || '[]');
  const idx = users.findIndex(u => u.email === currentUser.email);
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem('tJobsUsers', JSON.stringify(users));
  }

  updateUserBar();
  showAlert(document.getElementById('profileAlert'), 'success', 'Profile updated successfully.');
}

function handleProfilePic(files) {
  const file = files && files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Image must be <= 2MB.');
    return;
  }
  if (!file.type.startsWith('image/')) {
    showAlert(document.getElementById('profileAlert'), 'error', 'Please upload a valid image file.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    document.getElementById('profileAvatar').src = dataUrl;
    currentUser = currentUser || {};
    currentUser.profile_pic = dataUrl;
    localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
    showAlert(document.getElementById('profileAlert'), 'success', 'Profile picture updated in preview. Click Save Profile to persist.');
  };
  reader.readAsDataURL(file);
}

// ===== RENDER JOB CARD =====
function handleApplyRequest(jobId) {
  if (!currentUser) {
    showPage('login');
    return;
  }
  applyJob(jobId);
}

function renderJobCard(job) {
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge">⭐ Featured</span>' : ''}
      <div class="company-logo">${job.icon}</div>
      <h3>${job.title}</h3>
      <div class="company">🏢 ${job.company}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc">📍 ${job.location}</span>
        ${job.salary ? `<span class="tag tag-pay">💰 ${job.salary}</span>` : ''}
      </div>
      <div class="job-footer">
        <span class="job-date">🕐 ${job.date}</span>
        <button class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.9rem;"
          onclick="event.stopPropagation(); handleApplyRequest(${job.id})">Apply Now</button>
      </div>
    </div>`;
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
  document.getElementById('allJobsGrid').innerHTML = jobs.map(renderJobCard).join('');
}

// ===== FILTER JOBS =====
function filterJobs() {
  const q = (document.getElementById('jobSearch').value || '').toLowerCase();
  const cat = document.getElementById('catFilter').value;
  const filtered = allJobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCat = !cat || j.category === cat;
    return matchQ && matchCat;
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
      <p style="color:var(--muted); font-size:0.9rem;">🏢 ${job.company}</p>
    </div>
    <div class="tags" style="margin-bottom:1rem;">
      <span class="tag tag-type">${job.type}</span>
      <span class="tag tag-loc">📍 ${job.location}</span>
      ${job.salary ? `<span class="tag tag-pay">💰 ${job.salary}</span>` : ''}
      <span class="tag tag-feat">🗂️ ${job.category}</span>
    </div>
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.4rem;">Job Description</h4>
      <p style="font-size:0.88rem; color:var(--text); line-height:1.7;">${job.desc}</p>
    </div>
    ${job.reqs ? `
    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:0.4rem;">Requirements</h4>
      <p style="font-size:0.88rem; color:var(--text); line-height:1.7;">${job.reqs}</p>
    </div>` : ''}
    <div style="background:var(--green-light); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; font-size:0.85rem;">
      <strong>📧 Contact:</strong> ${job.contact || 'N/A'}<br>
      ${job.phone ? `<strong>📞 Phone:</strong> +237 ${job.phone}` : ''}
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
  currentJobId = id;
  if (currentUser) {
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

function applySubmit() {
  document.getElementById('applyStep2').style.display = 'none';
  document.getElementById('applyStep3').style.display = 'block';
  document.getElementById('step2').className = 'step-dot done';
  document.getElementById('step3').className = 'step-dot active';
}

// ===== LOGIN =====
function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const alertEl = document.getElementById('loginAlert');
  if (!email || !pass) { showAlert(alertEl, 'error', 'Please fill in all fields.'); return; }
  const users = JSON.parse(localStorage.getItem('tJobsUsers') || '[]');
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) { showAlert(alertEl, 'error', 'Invalid email or password. Try again.'); return; }
  currentUser = user;
  localStorage.setItem('tJobsUser', JSON.stringify(user));
  updateUserBar();
  showPage('home');
}

// ===== REGISTER =====
function setRole(role) {
  currentRole = role;
  document.getElementById('roleSeeker').className = 'role-btn' + (role === 'seeker' ? ' active' : '');
  document.getElementById('roleEmployer').className = 'role-btn' + (role === 'employer' ? ' active' : '');
  document.getElementById('companyField').style.display = role === 'employer' ? 'block' : 'none';
}

function doRegister() {
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  const passConfirm = document.getElementById('regPassConfirm').value;
  const alertEl = document.getElementById('regAlert');
  if (!first || !last || !email || !pass || !passConfirm) {
    showAlert(alertEl, 'error', 'Please fill all required fields.'); return;
  }
  if (pass.length < 6) {
    showAlert(alertEl, 'error', 'Password must be at least 6 characters.'); return;
  }
  if (pass !== passConfirm) {
    showAlert(alertEl, 'error', 'Passwords do not match.'); return;
  }
  const users = JSON.parse(localStorage.getItem('tJobsUsers') || '[]');
  if (users.find(u => u.email === email)) {
    showAlert(alertEl, 'error', 'An account with this email already exists.'); return;
  }
  const newUser = {
    name: first + ' ' + last, email, phone, pass,
    role: currentRole,
    company: document.getElementById('regCompany').value.trim()
  };
  users.push(newUser);
  localStorage.setItem('tJobsUsers', JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem('tJobsUser', JSON.stringify(newUser));
  updateUserBar();
  showPage('home');
}

// ===== POST JOB =====
function doPostJob() {
  const title = document.getElementById('pjTitle').value.trim();
  const cat = document.getElementById('pjCategory').value;
  const company = document.getElementById('pjCompany').value.trim();
  const desc = document.getElementById('pjDesc').value.trim();
  const email = document.getElementById('pjEmail').value.trim();
  const txId = document.getElementById('pjTxId').value.trim();
  const alertEl = document.getElementById('postAlert');
  if (!title || !cat || !company || !desc || !email) {
    showAlert(alertEl, 'error', 'Please fill all required fields.'); return;
  }
  if (!txId) {
    showAlert(alertEl, 'error', 'Please enter your Mobile Money transaction ID to verify payment.'); return;
  }
  const iconMap = { Agriculture: '🌾', Education: '📚', Health: '🏥', Construction: '🏗️', Trade: '🛒', Technology: '💻', Other: '💼' };
  const newJob = {
    id: Date.now(), title, company, category: cat,
    type: document.getElementById('pjType').value,
    location: document.getElementById('pjLocation').value || 'Bamenda',
    salary: document.getElementById('pjSalary').value || 'Negotiable',
    desc, reqs: document.getElementById('pjReqs').value,
    contact: email, phone: document.getElementById('pjPhone').value,
    date: 'Just posted',
    featured: document.getElementById('pjFeatured').checked,
    icon: iconMap[cat] || '💼'
  };
  const stored = JSON.parse(localStorage.getItem('tJobsPosted') || '[]');
  stored.push(newJob);
  localStorage.setItem('tJobsPosted', JSON.stringify(stored));
  allJobs.unshift(newJob);
  showAlert(alertEl, 'success', '✅ Job posted successfully! It will appear in listings after payment verification.');
  setTimeout(() => { showPage('jobs'); }, 2000);
}

// ===== HELPERS =====
function showAlert(el, type, msg) {
  el.className = 'alert ' + type;
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('tJobsUser');
  updateUserBar();
  showPage('home');
}

function updateUserBar() {
  const bar = document.getElementById('userBar');
  const loginBtn = document.getElementById('loginNavBtn');
  const signupBtn = document.getElementById('signupNavBtn');
  const userNav = document.getElementById('userNav');
  if (currentUser) {
    bar.classList.add('visible');
    const displayName = currentUser.name || (currentUser.first_name ? currentUser.first_name + ' ' + currentUser.last_name : 'User');
    const avatar = currentUser.profile_pic || currentUser.photo || 'https://www.gravatar.com/avatar/?d=mp&s=40';
    document.getElementById('userGreeting').textContent = '👤 Welcome, ' + displayName + '!';
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (userNav) {
      userNav.style.display = 'flex';
      userNav.innerHTML = 
        `<img src="${avatar}" alt="avatar" style="width:28px; height:28px; border-radius:50%; margin-right:0.4rem; object-fit:cover;" />` +
        `<span style="color:#fff; font-weight:600; margin-right:0.6rem;">${displayName}</span>` +
        `<a href="#" class="btn btn-outline" style="padding:0.35rem 0.8rem; font-size:0.75rem;" onclick="showPage('profile')">My Profile</a>` +
        `<a href="#" class="btn btn-orange" style="padding:0.35rem 0.8rem; font-size:0.75rem;" onclick="logout()">Logout</a>`;
    }
  } else {
    bar.classList.remove('visible');
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (signupBtn) signupBtn.style.display = 'inline-flex';
    if (userNav) {
      userNav.style.display = 'none';
      userNav.innerHTML = '';
    }
  }
}

// ===== PAYMENT SHORTCUT =====
function openPayment(provider) {
  const urls = {
    mtn: 'https://mtn.cm',
    orange: 'https://orangemoney.cm'
  };
  const target = urls[provider] || 'https://www.google.com/search?q=mobile+money+cameroon';
  window.open(target, '_blank');
}

// ===== THEME =====
function applyTheme(theme) {
  const body = document.body;
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    document.getElementById('contrastToggleBtn').textContent = 'Light mode';
  } else {
    body.classList.remove('dark-mode');
    document.getElementById('contrastToggleBtn').textContent = 'Dark mode';
  }
  localStorage.setItem('tJobsTheme', theme);
}

function toggleContrastMode() {
  const current = localStorage.getItem('tJobsTheme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// ===== INIT =====
const savedTheme = localStorage.getItem('tJobsTheme') || 'light';
applyTheme(savedTheme);
renderFeaturedJobs();
updateUserBar();
document.getElementById('jobModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
document.getElementById('applyModal').addEventListener('click', function (e) {
  if (e.target === this) closeApplyModal();
});