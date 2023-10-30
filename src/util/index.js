import path from 'path';

const ROOT = path.resolve(__dirname, '..');
export default {
  ROOT,
  rootNode:(args) => {
    return path.join(ROOT, args);
  }
}