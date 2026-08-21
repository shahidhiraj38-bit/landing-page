const scheduleRedirectAfterSuccess = () => {
  const isSuccess =
    root.dataset.ffStage === "success" ||
    root.classList.contains("fd-has-success");

  if (!isSuccess || hasScheduledRedirect) return;

  hasScheduledRedirect = true;

  redirectTimer = window.setTimeout(() => {
    window.location.assign("/thank-you");
  }, SUCCESS_DELAY_MS);
};