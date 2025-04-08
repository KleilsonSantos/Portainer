import fs from 'fs';
import {
  getPackageVersion,
  readSonarProperties,
  updateSonarProjectVersion,
  writeSonarProperties,
} from '../../util/prepara-sonar'; // Substitua pelo nome do seu arquivo

jest.mock('fs', () => ({
  readFileSync: jest.fn(() => '{"version": "1.0.0"}'), // Retorno em formato JSON válido
  writeFileSync: jest.fn(),
  existsSync: jest.fn(() => true),
}));

describe('Testes para as funções do Sonar', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa mocks após cada teste
  });

  // Testes para getPackageVersion
  describe('getPackageVersion', () => {
    it('Deve retornar a versão correta do package.json', () => {
      const mockPackageJson = JSON.stringify({ version: '1.0.0' });
      fs.readFileSync.mockReturnValue(mockPackageJson);

      const version = getPackageVersion();
      expect(version).toBe('1.0.0');
    });

    it('Deve lançar um erro ao falhar ao ler o package.json', () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error('Erro ao ler arquivo');
      });

      expect(() => getPackageVersion()).toThrow('Failed to parse package.json');
    });
  });

  // Testes para readSonarProperties
  describe('readSonarProperties', () => {
    it('Deve retornar o conteúdo do arquivo sonar-project.properties se existir', () => {
      const mockContent = 'sonar.projectVersion=1.0.0';
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(mockContent);

      const content = readSonarProperties('sonar-project.properties');
      expect(content).toBe(mockContent);
    });

    it('Deve retornar uma string vazia se o arquivo não existir', () => {
      fs.existsSync.mockReturnValue(false);

      const content = readSonarProperties('sonar-project.properties');
      expect(content).toBe('');
    });
  });

  // Testes para updateSonarProjectVersion
  describe('updateSonarProjectVersion', () => {
    it('Deve atualizar a versão existente no conteúdo', () => {
      const content = 'sonar.projectVersion=1.0.0';
      const updatedContent = updateSonarProjectVersion(content, '2.0.0');

      expect(updatedContent).toBe('sonar.projectVersion=2.0.0');
    });

    it('Deve adicionar a versão se ela não existir no conteúdo', () => {
      const content = '';
      const updatedContent = updateSonarProjectVersion(content, '2.0.0');

      expect(updatedContent).toBe('\nsonar.projectVersion=2.0.0');
    });
  });

  // Testes para writeSonarProperties
  describe('writeSonarProperties', () => {
    it('Deve escrever o conteúdo atualizado no arquivo', () => {
      const mockFilePath = 'sonar-project.properties';
      const mockContent = 'sonar.projectVersion=2.0.0';

      writeSonarProperties(mockFilePath, mockContent);

      expect(fs.writeFileSync).toHaveBeenCalledWith(
        mockFilePath,
        mockContent,
        'utf8',
      );
    });
  });
});
