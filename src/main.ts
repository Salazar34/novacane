import './style.css';
import 'flowbite';

const f1 = document.getElementById('smart-header') as HTMLHeadingElement;
const f2 = document.getElementById('renewable-header') as HTMLHeadingElement;
const f3 = document.getElementById(
  'discriminations-header'
) as HTMLHeadingElement;
const f4 = document.getElementById('ai-header') as HTMLHeadingElement;

f1.addEventListener('click', () => changeText('smart-header', 'smart-text'));
f2.addEventListener('click', () =>
  changeText('renewable-header', 'renewable-text')
);
f3.addEventListener('click', () =>
  changeText('discriminations-header', 'discriminations-text')
);
f4.addEventListener('click', () => changeText('ai-header', 'ai-text'));

function changeText(header: string, paragraph: string) {
  if (header === null || header === '' || header === undefined)
    throw new Error('Invalid header ID has been passed');

  if (paragraph === null || paragraph === '' || paragraph === undefined)
    throw new Error('Invalid paragraph ID has been passed');

  const headerText = document.getElementById(header);
  const paragraphText = document.getElementById(paragraph);

  headerText?.classList.add('selected');
  paragraphText?.classList.remove('hidden');

  let word = header.split('-')[0];

  switch (word) {
    case 'smart':
      showHideText(['renewable', 'ai', 'discriminations']);
      break;
    case 'renewable':
      showHideText(['smart', 'ai', 'discriminations']);
      break;
    case 'discriminations':
      showHideText(['renewable', 'ai', 'smart']);
      break;
    case 'ai':
      showHideText(['smart', 'renewable', 'discriminations']);
      break;
  }
}

function showHideText(sections: Array<string>) {
  if (!sections || sections === null || sections === undefined)
    throw new Error('Invalid sections have been passed');

  sections.forEach((section) => {
    const header = document.getElementById(
      `${section}-header`
    ) as HTMLHeadingElement;
    const paragraph = document.getElementById(
      `${section}-text`
    ) as HTMLDivElement;

    header?.classList.remove('selected');
    paragraph?.classList.add('hidden');
  });
}
