// ============================================
// Planiloja Achadinhos — Configuração
// ============================================
// Configuração das fontes de dados da loja
// ============================================

const ACHADINHOS = {

  // Aba "Configurações" da planilha
  planilha_configuracoes: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNhGYI1C8BHdTqkrSZc4vg2zbyP0GpTyVLI7WKBb7aEOFTMqMWrknvdQ1_hUyU55weBeo9RiD4_4au/pub?gid=480609827&single=true&output=csv",

  // Aba "Produtos" da planilha
  // Mantida por enquanto para não quebrar o site
  planilha_catalogo: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNhGYI1C8BHdTqkrSZc4vg2zbyP0GpTyVLI7WKBb7aEOFTMqMWrknvdQ1_hUyU55weBeo9RiD4_4au/pub?gid=952991100&single=true&output=csv",

  // Registro de cliques — opcional
  registrar_cliques: "",

  // Nova API do Apps Script
  // O site passará a buscar os produtos por aqui
  produtos_api: "https://script.google.com/macros/s/AKfycbxbKrOwaWfEHD8d7Poz7WFYa5j28kw1CzB-hIjSu6w0srFLjD9mvXn0MPVXjb7U5BzLKQ/exec?acao=produtos"

};
