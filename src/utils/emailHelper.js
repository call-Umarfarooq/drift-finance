/**
 * Helper utility to copy the client email to clipboard while allowing
 * the browser's default native mailto anchor tag redirection to fire perfectly.
 */
export const triggerEmail = (e) => {
  // IMPORTANT: We do NOT call e.preventDefault().
  // This allows the browser to natively open the default email client (Apple Mail, Outlook, etc.)
  // exactly as a standard link does, while we copy the email and show a toast in the background!
  
  const email = "Drift@driftfinancial.com";

  // 1. Copy email to clipboard in the background
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email)
      .then(() => {
        // Dispatch global event for the custom toast notification
        const event = new CustomEvent("show-email-toast");
        window.dispatchEvent(event);
      })
      .catch((err) => {
        console.error("Clipboard copy failed: ", err);
      });
  }
};
