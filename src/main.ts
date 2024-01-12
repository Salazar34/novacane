import './style.css';
import 'flowbite';

const f1 = document.getElementById('f1') as HTMLHeadingElement;
const f2 = document.getElementById('f2') as HTMLHeadingElement;
const f3 = document.getElementById('f3') as HTMLHeadingElement;
const f4 = document.getElementById('f4') as HTMLHeadingElement;

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
    case 'tennis':
      showHideText('cars', 'sports');
      break;
    case 'cars':
      showHideText('tennis', 'sports');
      break;
    case 'sports':
      showHideText('tennis', 'cars');
      break;
  }
}

function showHideText(
  firstSection: string,
  secondSection: string,
  thirdSection: string
) {
  if (
    firstSection === null ||
    firstSection === '' ||
    firstSection === undefined
  )
    throw new Error('Invalid section name has been passed');

  if (
    secondSection === null ||
    secondSection === '' ||
    secondSection === undefined
  )
    throw new Error('Invalid section name has been passed');

  const firstHeader = document.getElementById(`${firstSection}-header`);
  const secondHeader = document.getElementById(`${secondSection}-header`);

  const firstParagraph = document.getElementById(`${firstSection}-text`);
  const secondParagraph = document.getElementById(`${secondSection}-text`);

  firstHeader!.classList.remove('selected');
  secondHeader!.classList.remove('selected');
  firstParagraph?.classList.add('hidden');
  secondParagraph?.classList.add('hidden');
}
