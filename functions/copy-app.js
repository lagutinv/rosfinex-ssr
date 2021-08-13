const fs = require('fs-extra');

(async() => {
    const srcPath = '../dist';
    const copyPath = './dist';
    await fs.remove(copyPath);
    await fs.copy(srcPath, copyPath);
    await fs.remove(`${ copyPath }/package.json`);
    await fs.remove(`${ copyPath }/package-lock.json`);
    await fs.remove('../build/index.html');
})();