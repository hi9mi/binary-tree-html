import { BinarySearchTree } from './bst';

const MIN = -100;
const MAX = 100;

export const insertRandomNum = (bst: BinarySearchTree) => {
  const generateRandomNum = () => {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Space' || event.key === ' ') {
      const treeContainer = document.querySelector<HTMLDivElement>('#tree');
      if (!treeContainer) {
        throw new Error('tree container is not found');
      }

      const num = generateRandomNum();
      bst.insert(num);
      treeContainer.innerHTML = '';
      bst.renderTree(treeContainer);
    }
  });
};
