const {writeFileSync, mkdirSync} = require('fs');
const out = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(out, {recursive: true});
writeFileSync(out + '/entry.txt', "Out of office until Monday. A smaller model is covering my inbox — it has already replied to your email, and to itself, twice.");
