/**
 * Branded confirm / alert dialog for Acsaven — replaces window.confirm / alert.
 * Exposes window.showConfirm and window.showAlert (promise-based).
 * Tones: default | danger | warning | info
 */
(function () {
  'use strict';

  var DIALOG_ID = 'try-confirm-dialog';
  var TONE_CLASSES = [
    'try-confirm-dialog--danger',
    'try-confirm-dialog--warning',
    'try-confirm-dialog--info',
  ];
  /** @type {{ resolve: (v: boolean) => void, mode: 'confirm'|'alert' } | null} */
  var pending = null;

  function ensureDialog() {
    var dialog = document.getElementById(DIALOG_ID);
    if (dialog) return /** @type {HTMLDialogElement} */ (dialog);

    dialog = document.createElement('dialog');
    dialog.id = DIALOG_ID;
    dialog.className = 'try-confirm-dialog';
    dialog.setAttribute('aria-labelledby', 'try-confirm-title');
    dialog.setAttribute('aria-describedby', 'try-confirm-message');
    dialog.innerHTML =
      '<form method="dialog" class="try-confirm-inner" data-try-confirm-form>' +
      '<div class="try-confirm-accent" aria-hidden="true"></div>' +
      '<h2 id="try-confirm-title" class="try-confirm-title" data-try-confirm-title>Confirm</h2>' +
      '<p id="try-confirm-message" class="try-confirm-message" data-try-confirm-message></p>' +
      '<div class="try-confirm-actions">' +
      '<button type="submit" value="cancel" class="try-confirm-btn try-confirm-btn--ghost" data-try-confirm-cancel>Cancel</button>' +
      '<button type="submit" value="ok" class="try-confirm-btn try-confirm-btn--primary" data-try-confirm-ok>OK</button>' +
      '</div></form>';
    document.body.appendChild(dialog);

    dialog.addEventListener('close', function () {
      var result = dialog.returnValue === 'ok';
      var p = pending;
      pending = null;
      if (p) p.resolve(p.mode === 'alert' ? true : result);
    });

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close('cancel');
    });

    return /** @type {HTMLDialogElement} */ (dialog);
  }

  /**
   * @param {HTMLDialogElement} dialog
   * @param {HTMLButtonElement | null} okBtn
   * @param {string} tone
   */
  function applyTone(dialog, okBtn, tone) {
    for (var i = 0; i < TONE_CLASSES.length; i++) dialog.classList.remove(TONE_CLASSES[i]);
    if (tone && tone !== 'default') dialog.classList.add('try-confirm-dialog--' + tone);
    if (!okBtn) return;
    okBtn.classList.remove(
      'try-confirm-btn--danger',
      'try-confirm-btn--warning',
      'try-confirm-btn--info',
      'try-confirm-btn--primary',
    );
    if (tone === 'danger') okBtn.classList.add('try-confirm-btn--danger');
    else if (tone === 'warning') okBtn.classList.add('try-confirm-btn--warning');
    else if (tone === 'info') okBtn.classList.add('try-confirm-btn--info');
    else okBtn.classList.add('try-confirm-btn--primary');
  }

  /**
   * @param {{ title: string, message: string, confirmLabel: string, cancelLabel: string, tone: string, mode: 'confirm'|'alert' }} opts
   * @returns {Promise<boolean>}
   */
  function openDialog(opts) {
    if (pending) {
      pending.resolve(false);
      pending = null;
    }

    var dialog = ensureDialog();
    var titleEl = dialog.querySelector('[data-try-confirm-title]');
    var messageEl = dialog.querySelector('[data-try-confirm-message]');
    var okBtn = dialog.querySelector('[data-try-confirm-ok]');
    var cancelBtn = dialog.querySelector('[data-try-confirm-cancel]');

    if (titleEl) titleEl.textContent = opts.title;
    if (messageEl) messageEl.textContent = opts.message;
    if (okBtn) okBtn.textContent = opts.confirmLabel;
    if (cancelBtn) {
      cancelBtn.textContent = opts.cancelLabel;
      cancelBtn.hidden = opts.mode === 'alert';
    }

    applyTone(dialog, okBtn, opts.tone);
    dialog.classList.toggle('try-confirm-dialog--alert', opts.mode === 'alert');

    return new Promise(function (resolve) {
      pending = { resolve: resolve, mode: opts.mode };
      dialog.returnValue = '';
      dialog.showModal();
      var focusBtn = opts.mode === 'alert' || opts.tone !== 'danger' ? okBtn : cancelBtn;
      requestAnimationFrame(function () {
        if (focusBtn) focusBtn.focus();
      });
    });
  }

  /**
   * @param {string | { title?: string, message: string, confirmLabel?: string, cancelLabel?: string, tone?: string }} opts
   * @returns {Promise<boolean>}
   */
  function showConfirm(opts) {
    var o = typeof opts === 'string' ? { message: opts } : opts || { message: '' };
    return openDialog({
      title: o.title || 'Please confirm',
      message: o.message || '',
      confirmLabel: o.confirmLabel || 'Confirm',
      cancelLabel: o.cancelLabel || 'Cancel',
      tone: o.tone || 'default',
      mode: 'confirm',
    });
  }

  /**
   * @param {string | { title?: string, message: string, okLabel?: string, tone?: string }} opts
   * @returns {Promise<void>}
   */
  function showAlert(opts) {
    var o = typeof opts === 'string' ? { message: opts } : opts || { message: '' };
    return openDialog({
      title: o.title || 'Notice',
      message: o.message || '',
      confirmLabel: o.okLabel || 'OK',
      cancelLabel: 'Cancel',
      tone: o.tone || 'default',
      mode: 'alert',
    }).then(function () {});
  }

  window.showConfirm = showConfirm;
  window.showAlert = showAlert;
})();
