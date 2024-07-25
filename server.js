const { exec } = require('child_process');
const fs = require('fs');

exec('fortune | cowsay', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  
  const readmeContent = `# Fortune Cow\n\n\`\`\`\n${stdout}\`\`\``;
  fs.writeFileSync('README.md', readmeContent);
});
