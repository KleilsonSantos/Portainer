import fs from 'fs';

/**
 * 📦 Reads and parses package.json to extract the version
 * @returns {string} The version value from package.json
 */
function getPackageVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
  } catch (error) {
    throw new Error('Failed to parse package.json', error);
  }
}

/**
 * 📄 Reads the content of sonar-project.properties, if it exists
 * @param {string} filePath Path to the sonar-project.properties file
 * @returns {string} The file content or an empty string if the file doesn't exist
 */
function readSonarProperties(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

/**
 * 🔄 Updates or appends the sonar.projectVersion property in the content
 * @param {string} content Current content of sonar-project.properties
 * @param {string} version The version to set for sonar.projectVersion
 * @returns {string} Updated content
 */
function updateSonarProjectVersion(content, version) {
  const versionRegex = /^sonar\.projectVersion=.*$/m;
  if (content.match(versionRegex)) {
    // Replace the existing version property
    return content.replace(versionRegex, `sonar.projectVersion=${version}`);
  }
  // Append the property if it doesn't exist
  return content + `\nsonar.projectVersion=${version}`;
}

/**
 * 💾 Writes updated content back to sonar-project.properties
 * @param {string} filePath Path to the sonar-project.properties file
 * @param {string} content Updated content to write
 */
function writeSonarProperties(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

// Main Execution Flow 🚀
const sonarPropertiesPath = 'sonar-project.properties';
const version = getPackageVersion();
let sonarProperties = readSonarProperties(sonarPropertiesPath);
sonarProperties = updateSonarProjectVersion(sonarProperties, version);
writeSonarProperties(sonarPropertiesPath, sonarProperties);

export {
  getPackageVersion,
  readSonarProperties,
  updateSonarProjectVersion,
  writeSonarProperties,
};
