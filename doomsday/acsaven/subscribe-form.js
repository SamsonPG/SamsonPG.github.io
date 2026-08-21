/**
 * Progressive enhancement for the optional email signup on /free/ pages.
 *
 * The form is NOT what delivers the download — the file is a plain <a href> that works
 * with this script blocked, with JavaScript off entirely, and for anyone who simply
 * ignores the box. This only replaces a full page navigation with an inline message.
 *
 * The honeypot input is filled by bots and left empty by people; it is hidden with an
 * off-screen class rather than display:none because some bots skip undisplayed fields,
 * and it carries tabindex="-1" + autocomplete="off" so it cannot catch a keyboard user.
 */
(function () {
  var form = document.querySelector('[data-subscribe-form]');
  if (!form) return;

  var input = form.querySelector('input[type="email"]');
  var status = form.querySelector('[data-subscribe-status]');
  var button = form.querySelector('button[type="submit"]');
  if (!input || !status || !button) return;

  function say(message, isError) {
    status.textContent = message;
    status.classList.toggle('is-error', Boolean(isError));
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (button.disabled) return;

    var email = input.value.trim();
    if (!email) {
      say('Enter an email address first.', true);
      input.focus();
      return;
    }

    button.disabled = true;
    say('Adding you…', false);

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        website: (form.querySelector('[name="website"]') || {}).value || '',
        source: location.pathname,
      }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.ok) {
          say(result.data && result.data.error ? result.data.error : 'That did not go through. Try again.', true);
          button.disabled = false;
          return;
        }
        // Duplicate submissions get the same confirmation — see functions/api/subscribe.js.
        say('Done. Address saved. Nothing is emailed yet.', false);
        input.value = '';
        input.disabled = true;
      })
      .catch(function () {
        say('Network error — nothing was saved. Try again.', true);
        button.disabled = false;
      });
  });
})();
