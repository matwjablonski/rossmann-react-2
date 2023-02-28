export const prepareWindowTitle = (title: string): string => {
  const titleParts = document.title.split('::');

  const lastPartOfTitle = titleParts[titleParts.length - 1];

  return `${title} :: ${lastPartOfTitle}`;
}
