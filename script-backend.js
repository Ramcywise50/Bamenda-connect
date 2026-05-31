// ===== API CONFIGURATION =====
const API_BASE_URL = '/api';
let authToken = localStorage.getItem('authToken');

// ===== FETCH ALL JOBS FROM BACKEND =====
async function fetchJobsFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/`);
    const data = await response.json();
    if (data.status === 'success') {
      return data.jobs;
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
  return [];
}

// Demo job data removed — site now displays only backend/posting jobs.

// ===== STATE =====
let currentUser = JSON.parse(localStorage.getItem('tJobsUser') || 'null');
let currentRole = 'seeker';
let currentJobId = null;
let backendJobs = [];
let allJobs = [];

// ===== PAGE NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home') renderFeaturedJobs();
  if (name === 'jobs') renderAllJobs();
}

// ===== RENDER JOB CARD =====
function renderJobCard(job) {
  return `
    <div class="job-card" onclick="openJob(${job.id})">
      ${job.featured ? '<span class="featured-badge">⭐ Featured</span>' : ''}
      <div class="company-logo">${job.icon}</div>
      <h3>${job.title}</h3>
      <div class="company">🏢 ${job.company || job.company_name}</div>
      <div class="tags">
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-loc">📍 ${job.location}</span>
        ${job.salary ? `<span class="tag tag-pay">💰 ${job.salary}</span>` : ''}
      </div>
      <div class="job-footer">
        <span class="job-date">🕐 ${job.date}</span>
        <button class="btn btn-primary" style="font-size:0.8rem; padding:0.35rem 0.9rem;"
          onclick="event.stopPropagation(); applyJob(${job.id})">Apply Now</button>
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
    `Showing ${jobs.length} job${jobs.length !== 1 ? 's' : ''} in Tubah, Bamenda`;
  const html = jobs.length > 0
    ? jobs.map(renderJobCard).join('')
    : `<div class="empty-state" style="text-align:center;padding:3rem;color:var(--muted);">
         <i class="fa-solid fa-search" style="font-size:2.5rem;margin-bottom:1rem;color:#003399;"></i>
         <p style="font-size:1rem;max-width:420px;margin:0 auto;">No jobs match your search. Clear filters or try a different keyword.</p>
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
  currentJobId = id;
  if (currentUser) {
    const names = currentUser.name.split(' ');
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
  const company = document.getElementById('regCompany').value.trim();
  const alertEl = document.getElementById('regAlert');
  
  if (!first || !last || !email || !pass) {
    showAlert(alertEl, 'error', 'Please fill all required fields.'); 
    return;
  }
  
  if (pass.length < 6) {
    showAlert(alertEl, 'error', 'Password must be at least 6 characters.'); 
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
      if (loginData.status === 'success') {
        authToken = loginData.token;
        currentUser = loginData.user;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('tJobsUser', JSON.stringify(currentUser));
        updateUserBar();
        showPage('home');
      }
    } else {
      showAlert(alertEl, 'error', data.errors?.email?.[0] || 'Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    showAlert(alertEl, 'error', 'Connection error. Check if backend is running.');
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
        location: document.getElementById('pjLocation').value || 'Tubah, Bamenda',
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
      // Reload jobs
      allJobs = await fetchJobsFromBackend() || allJobs;
      setTimeout(() => { showPage('jobs'); }, 2000);
    } else {
      showAlert(alertEl, 'error', data.message || 'Error posting job');
    }
  } catch (error) {
    console.error('Error:', error);
    showAlert(alertEl, 'error', 'Connection error. Check if backend is running.');
  }
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
  authToken = null;
  localStorage.removeItem('tJobsUser');
  localStorage.removeItem('authToken');
  updateUserBar();
  showPage('home');
}

function updateUserBar() {
  const bar = document.getElementById('userBar');
  const btn = document.getElementById('loginNavBtn');
  if (currentUser) {
    bar.classList.add('visible');
    const name = currentUser.first_name || (currentUser.name ? currentUser.name.split(' ')[0] : 'User');
    document.getElementById('userGreeting').textContent = '👤 Welcome, ' + name + '!';
    btn.style.display = 'none';
  } else {
    bar.classList.remove('visible');
    btn.style.display = 'inline-flex';
  }
}

// ===== INIT =====
async function initApp() {
  authToken = localStorage.getItem('authToken');
  if (localStorage.getItem('tJobsUser')) {
    currentUser = JSON.parse(localStorage.getItem('tJobsUser'));
  }
  
  // Fetch jobs from backend
  allJobs = await fetchJobsFromBackend() || [];
  
  renderFeaturedJobs();
  updateUserBar();
  
  // Modal event listeners
  document.getElementById('jobModal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('applyModal').addEventListener('click', function (e) {
    if (e.target === this) closeApplyModal();
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
