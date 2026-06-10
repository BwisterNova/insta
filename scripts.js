/* scripts.js — shared interactions for login & signup */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Show / hide password toggles ── */
  document.querySelectorAll('.toggle-pass').forEach(btn => {
    const input = btn.closest('.field-group').querySelector('.field-input');
    btn.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.textContent = isPassword ? 'Hide' : 'Show';
    });
  });

  /* ── Password strength meter ── */
  const passInput = document.getElementById('su-pass');
  const bar = document.getElementById('strength-bar');

  if (passInput && bar) {
    const segs = bar.querySelectorAll('.strength-seg');

    passInput.addEventListener('input', () => {
      const val = passInput.value;
      let score = 0;
      if (val.length >= 8)              score++;
      if (/[A-Z]/.test(val))            score++;
      if (/[0-9]/.test(val))            score++;
      if (/[^A-Za-z0-9]/.test(val))     score++;

      const levels = ['', 'weak', 'fair', 'good', 'strong'];
      segs.forEach((seg, i) => {
        seg.className = 'strength-seg';
        if (i < score) seg.classList.add(levels[score]);
      });
    });
  }

  /* ── Username availability hint (simulated) ── */
  const usernameInput = document.getElementById('su-username');
  const hint = document.getElementById('username-hint');

  if (usernameInput && hint) {
    const taken = ['john', 'jane', 'admin', 'user', 'test', 'instagram'];
    let debounce;

    usernameInput.addEventListener('input', () => {
      clearTimeout(debounce);
      const val = usernameInput.value.trim().toLowerCase();

      if (!val) { hint.textContent = ''; hint.className = 'field-hint'; return; }

      hint.textContent = 'Checking…';
      hint.className = 'field-hint';

      debounce = setTimeout(() => {
        if (taken.includes(val)) {
          hint.textContent = `@${val} is already taken.`;
          hint.className = 'field-hint taken';
        } else if (val.length < 3) {
          hint.textContent = 'Username too short.';
          hint.className = 'field-hint taken';
        } else {
          hint.textContent = `@${val} is available!`;
          hint.className = 'field-hint available';
        }
      }, 500);
    });
  }

  /* ── Prevent real form submission (demo) ── */
  document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      const original = btn.textContent;
      btn.textContent = '✓ Done!';
      btn.style.background = '#4cd964';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 1800);
    });
  });

});
