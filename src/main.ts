import './style.css';
import { BinarySearchTree } from './bst';
import { insertRandomNum } from './insert-random-number';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('root container is not found');
}

app.innerHTML = `
  <div class="app">
    <h1 class="app-title">To add an element, press the space bar.</h1>
    <div class="app-tree" id="tree"></div>
  </div>
`;

const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(9);
bst.insert(15);
bst.insert(6);
bst.insert(8);
bst.insert(16);
bst.insert(19);
bst.insert(22);
bst.insert(18);
bst.insert(100);
bst.insert(21);

bst.renderTree(document.querySelector<HTMLDivElement>('#tree')!);
insertRandomNum(bst);
