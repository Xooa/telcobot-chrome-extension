document.getElementById("save-button").addEventListener("click", function (e) {
  e.preventDefault();

  const domain = document.getElementById("domain").value;
  const slug = document.getElementById("slug").value;
  const errorTip = document.getElementById("error-tip");

  if (domain.trim() === "" || slug.trim() === "") {
    errorTip.textContent = "Domain and Slug cannot be empty.";
  } else {
    errorTip.textContent = "";
    chrome.storage.sync.set(
      {
        domain: domain,
        slug: slug,
      },
      function () {
        alert("Save Success!");
      }
    );
  }
});

// Load parameters from chrome.storage when the page loads
chrome.storage.sync.get(["domain", "slug"], function (result) {
  const domainInput = document.getElementById("domain");
  const slugInput = document.getElementById("slug");

  if (result.domain) {
    domainInput.value = result.domain;
  }
  if (result.slug) {
    slugInput.value = result.slug;
  }
});
