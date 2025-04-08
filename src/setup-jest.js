// 🧪 Este arquivo é executado antes de cada teste

// Exemplo: adicionar suporte a fetch (caso use em ambiente Node)
import 'whatwg-fetch';

// Exemplo: polyfill global (caso precise do TextEncoder, etc.)
import { TextEncoder, TextDecoder } from 'util';
if (typeof global !== 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
