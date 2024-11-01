function modifyStyles() {
  // Modify headings
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach((heading) => {
    heading.classList.add('modified-heading');
  });

  // // Modify paragraphs
  // const paragraphs = document.querySelectorAll('p');
  // paragraphs.forEach((paragraph) => {
  //   paragraph.classList.add('modified-paragraph');
  // });

  // // Modify main content areas
  // const mainContent = document.querySelectorAll('main, article, .content');
  // mainContent.forEach((content) => {
  //   content.classList.add('modified-background');
  // });
}

// Run on page load
// window.onload = modifyStyles;

// Run when content changes (for dynamic websites)
// const observer = new MutationObserver(modifyStyles);
// observer.observe(document.body, {
//   childList: true,
//   subtree: true,
// });

let stylesEnabled = true;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleStyles') {
    stylesEnabled = !stylesEnabled;

    modifyStyles();

    // Get all modified elements
    // const modifiedElements = document.querySelectorAll(
    //   '.modified-heading, .modified-paragraph, .modified-background'
    // );

    // modifiedElements.forEach((element) => {
    //   if (stylesEnabled) {
    //     // Re-add the classes
    //     if (element.tagName.match(/^H[1-3]$/)) element.classList.add('modified-heading');
    //     if (element.tagName === 'P') element.classList.add('modified-paragraph');
    //     if (element.matches('main, article, .content'))
    //       element.classList.add('modified-background');
    //   } else {
    //     // Remove the classes
    //     element.classList.remove('modified-heading', 'modified-paragraph', 'modified-background');
    //   }
    // });
  }
});
