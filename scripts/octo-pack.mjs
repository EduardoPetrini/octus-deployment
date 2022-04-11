
import path from 'path';
import octo from '@octopusdeploy/octopackjs'

const __dirname = path.resolve(path.dirname(''));

const indexPath = path.resolve(__dirname, 'index.js');
const packagePath = path.resolve(__dirname, 'package.json');
const packageLockPath = path.resolve(__dirname, 'package-lock.json');
const readmePath = path.resolve(__dirname, 'README.md');

console.log(indexPath)

octo.pack()
  .append(indexPath)
  .append(packagePath)
  .append(packageLockPath)
  .append(readmePath)
  .appendSubDir('dist/', true)
  .toFile('./bin', function (err, data) {
    console.log("Package Saved: "+ data.name);
  });