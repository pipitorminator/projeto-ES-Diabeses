// @ts-check

/**
 * Classe de erro base
 * @param {string} [code] Código do erro
 * @param {string} [name] Nome do erro
 */
function MeritMoneyException(code, name = 'MeritMoneyException', inner = undefined) {
    /** @type {string} */
    this.message = undefined;
    /** @type {string} */
    this.name = name;
    /** @type {string} */
    this.code = code;
    /** @type {MeritMoneyException} */
    this.innerException = inner;
  
    if(MeritMoneyErrors.hasOwnProperty(code)){
      this.message = MeritMoneyErrors[code];
    }
  }
  
  const MeritMoneyErrors = {
    AUTH0001: 'Descrição do erro AUTH0001',
    AUTH0002: 'Descrição do erro AUTH0002',
    AUTH0003: 'Descrição do erro AUTH0003',
    AUTH0004: 'AUTH0004 - Erro ao atualizar Url foto Google.'
  }
  
  module.exports = {
    MeritMoneyException,
    MeritMoneyErrors
  }
  