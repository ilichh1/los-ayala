const TEMPLATES_URL = './templates';

function loadLocalTempalte(url, htmlElementName) {
  fetch(`${TEMPLATES_URL}/${url}`)
    .then(res => {
      if (!res.ok) {
        return;
      }
      res.text()
        .then(res => {
          repalceHTML(res, htmlElementName);
        });
    })
    .catch(err => {
      console.error(err);
    });
}

function repalceHTML(newHTMl, htmlElementName) {
  const htmlElement = document.querySelector(htmlElementName);

  if (htmlElementName === 'footer' && !htmlElement) {
    const footer = document.createElement('footer');
    footer.innerHTML = newHTMl;
    footer.classList.add('page-footer');
    document.body.appendChild(footer);
    return;
  }

  if (htmlElementName === 'header' && !htmlElement) { // If the element is the header
    const header = document.createElement('header');
    header.innerHTML = newHTMl;
    APP_UTILS.insertBefore(document.body, header);
    return;
  }

  if (htmlElementName === '#loader' && !htmlElement) {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = newHTMl;
    document.body.appendChild(loader);
    return;
  }

  if (!htmlElement) {
    console.log('THE ELEMENT TO REPLACE HTML DOES NOT EXIST');
    return;
  }
  htmlElement.innerHTML = newHTMl;
}

loadLocalTempalte('head.html', 'head');
loadLocalTempalte('header.html', 'header');
loadLocalTempalte('footer.html', 'footer');
loadLocalTempalte('loader.html', '#loader');