import * as fs from 'fs';
import config from './icons.config.json' assert { type: "json" };

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pascalize (string) {
  const words = string.split('-')
  const capitalized = words.map(word => capitalize(word))
  return capitalized.join('')
}

function replaceVariables(svgString, matches = undefined) {
  let final = svgString.replace(/(width|height)="[^"]+"/g, '$1="${this.size}"');
  if(typeof matches !== 'undefined' && matches.length < 3) {
    final = final.replace(/(fill)="[^"]+"/, '$1="${this.color}"');
  }
  return final;
}

const PREFIX = 'swc-i-';
let exports = '';
let docs = `import { Canvas, Meta, Story } from '@storybook/addon-docs';

<Meta title="Iconography/Icons" />

## Icons
The simple-webcomponents stacks provides you a easy way to create your own fully customized icon library.
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

      const regex = new RegExp(/(fill)="[^"]+"/, 'g');
      const matches = content.match(regex);

      template = template.replace('[ELEMENT-NAME]', `${PREFIX}${fileName}`)
                        .replace('[ELEMENT-CLASS-NAME]', `${customElementTagPascalCase}`)
                        .replace('[SVG-CONTENT]', replaceVariables(content, matches | undefined));
      exports += "export {" + customElementTagPascalCase + "} from './"+customElementTag+"/"+customElementTag+"';";
      docs += ` <div>
    <${customElementTag} size="70"></${customElementTag}>
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