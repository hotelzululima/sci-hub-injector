function sciHubLink(doi) {
  return `https://sci-hub.se/${doi}`;
}

function pubMed() {
  const doi = document.querySelector(".identifier.doi > a").innerText;
  const links = document.querySelector(".full-text-links-list");
  links.innerHTML += `
  <a class="link-item dialog-focus" href="${sciHubLink(
    doi
  )}" target="_blank" rel="noopener" title="See full text on SciHub"><img src="https://sci-hub.se/misc/img/logo_en.png" alt="full text provider logo"><span class="text">SciHub</span></a>
  `;
}

function nature() {
  const doi = document
    .querySelector(
      ".c-bibliographic-information__list-item--doi > p > span.c-bibliographic-information__value"
    )
    .textContent.split(".org/")[1];
  const menu = document.querySelector(
    "aside .c-nature-box.c-nature-box--side.u-hide-print"
  );
  menu.innerHTML += `
	<div class="js-access-button">
			<a href="${sciHubLink(doi)}" class="c-article__button">
				<img class="u-icon" width="18" height="18" aria-hidden="true" focusable="false" src="https://sci-hub.se/misc/img/ravenround.gif" />
				<span class="c-article__button-text" style="margin-left: 8px;">Access on SciHub</span>
			</a>
	</div>
	`;
}

function addSciHubLink() {
  const url = document.location.href;
  if (url.includes("pubmed.ncbi.nlm.nih.gov")) {
    pubMed();
  } else if (url.includes("nature.com")) {
    nature();
  }
}

addSciHubLink();
