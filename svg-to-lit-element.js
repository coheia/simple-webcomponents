import * as fs from 'fs';
import config from './icons.config.js';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pascalize (string) {
  const words = string.split('-')
  const capitalized = words.map(word => capitalize(word))
  return capitalized.join('')
}

function replaceVariables(svgString, matches) {
  let final = svgString.replace(/(?<!stroke-)(width|height)="[^"]+"/g, '$1="${this.size}"');
  if(matches <= 2) {
    final = final.replace(/(fill)="([^"]+|)"/, '$1="${this.color}"');
    final = final.replace(/(fill)="(?!${this\.color}")[^"]*"/, '$1="${this.color}"');
  }
  return final;
}

const PREFIX = 'swc-i-';
let exports = '';
let docs = `import { Meta } from '@storybook/blocks';

<Meta title="Iconography/Icons" />

## Icons
The simple-webcomponents stacks provides you a easy way to create your own fully customized icon library. This page will be prettier soon...
`;

fs.mkdir(config.output.path, {recursive: true}, (err) => {
  if (err) throw err;
  console.log(`Folder ${config.output.path} created!`);
  for (let i = 2; i < process.argv.length; i++) {
    try {
      const filePath = process.argv[i];
      const content = fs.readFileSync(filePath).toString('utf-8');
      let template = fs.readFileSync(config.output.templateFile).toString('utf-8');
      const fileName = filePath.split('/').find(file => file.includes('.svg')).replace('.svg', '').replace('-svgrepo-com', '');

      const customElementTag = PREFIX+fileName;
      const customElementTagPascalCase = pascalize(customElementTag);

      const regex = new RegExp(/(fill)="([^"]+|)"/, 'g');

      let matches = content.match(regex);

      if(matches == null){
        console.warn(`${fileName} do not have any fill attribute. To control color you need to set it inside the .svg file before npm run icons`)
      }

      matches = matches == null ? 0 : matches.length;

      template = template.replace('[ELEMENT-NAME]', `${PREFIX}${fileName}`)
                        .replace('[ELEMENT-CLASS-NAME]', `${customElementTagPascalCase}`)
                        .replace('[SVG-CONTENT]', replaceVariables(content, matches));
      exports += "export { " + customElementTagPascalCase + " } from './"+customElementTag+"/"+customElementTag+"';";
      docs += ` <div>
    <${customElementTag} size="100"></${customElementTag}>
    <span>${customElementTag}</span>
  </div>
`;
      fs.mkdir(config.output.path+"/"+customElementTag, {recursive: true}, (err) => {
        if (err) throw err;
        console.log(`Icon ${customElementTag} created!`);
        fs.writeFileSync(`${config.output.path}/${customElementTag}/${customElementTag}.ts`, template);
      })
    } catch (error) {
      console.error(error);
    }
  }
  fs.writeFileSync(`${config.output.path}/exports.ts`, exports);
  fs.writeFileSync(`${config.output.path}/Iconography.mdx`, docs);
});